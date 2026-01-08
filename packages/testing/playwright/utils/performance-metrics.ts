/**
 * Enhanced Performance Metrics Utilities
 *
 * Provides comprehensive performance measurement capabilities using:
 * - Chrome DevTools Protocol (CDP) for detailed metrics
 * - Performance Observer API for Web Vitals
 * - Frame timing for FPS measurement
 * - Memory profiling via CDP
 *
 * @module performance-metrics
 */

/* eslint-disable @typescript-eslint/naming-convention */
// Performance metrics utility uses __prefixed window properties for browser-side data collection
// These must be prefixed to avoid conflicts with existing window properties

import type { Page, CDPSession, TestInfo } from '@playwright/test';

import { attachMetric } from './performance-helper';

// Performance metric types
export interface PageLoadMetrics {
	fcp: number | null; // First Contentful Paint
	lcp: number | null; // Largest Contentful Paint
	ttfb: number | null; // Time to First Byte
	tti: number | null; // Time to Interactive (approximation)
	domContentLoaded: number | null;
	loadComplete: number | null;
}

export interface FrameMetrics {
	avgFps: number;
	minFps: number;
	maxFps: number;
	frameCount: number;
	droppedFrames: number;
	jankFrames: number; // Frames > 16.67ms (below 60fps threshold)
}

export interface MemoryMetrics {
	jsHeapSizeUsed: number; // MB
	jsHeapSizeTotal: number; // MB
	domNodes: number;
}

export interface CSSCoverageResult {
	totalBytes: number;
	usedBytes: number;
	unusedBytes: number;
	usagePercent: number;
	files: Array<{
		url: string;
		totalBytes: number;
		usedBytes: number;
	}>;
}

/**
 * Collect page load performance metrics using Performance API
 */
export async function collectPageLoadMetrics(page: Page): Promise<PageLoadMetrics> {
	return await page.evaluate(() => {
		const metrics: PageLoadMetrics = {
			fcp: null,
			lcp: null,
			ttfb: null,
			tti: null,
			domContentLoaded: null,
			loadComplete: null,
		};

		// Get paint timing entries
		const paintEntries = performance.getEntriesByType('paint');
		const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
		if (fcpEntry) {
			metrics.fcp = fcpEntry.startTime;
		}

		// Get navigation timing
		const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
		if (navEntries.length > 0) {
			const nav = navEntries[0];
			metrics.ttfb = nav.responseStart - nav.requestStart;
			metrics.domContentLoaded = nav.domContentLoadedEventEnd - nav.fetchStart;
			metrics.loadComplete = nav.loadEventEnd - nav.fetchStart;
		}

		// LCP requires PerformanceObserver - get from stored value if available
		const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
		if (lcpEntries.length > 0) {
			const lastLcp = lcpEntries[lcpEntries.length - 1] as PerformancePaintTiming;
			metrics.lcp = lastLcp.startTime;
		}

		// TTI approximation: domInteractive + longest task
		if (navEntries.length > 0) {
			const nav = navEntries[0];
			metrics.tti = nav.domInteractive - nav.fetchStart;
		}

		return metrics;
	});
}

/**
 * Measure LCP with PerformanceObserver (must be called before page load)
 */
export async function setupLCPObserver(page: Page): Promise<void> {
	await page.addInitScript(() => {
		(window as unknown as { __lcpValue: number }).__lcpValue = 0;
		const observer = new PerformanceObserver((list) => {
			const entries = list.getEntries();
			const lastEntry = entries[entries.length - 1];
			(window as unknown as { __lcpValue: number }).__lcpValue = lastEntry.startTime;
		});
		observer.observe({ type: 'largest-contentful-paint', buffered: true });
	});
}

/**
 * Get stored LCP value
 */
export async function getLCPValue(page: Page): Promise<number | null> {
	return await page.evaluate(
		() => (window as unknown as { __lcpValue?: number }).__lcpValue ?? null,
	);
}

/**
 * Measure FPS during an action using requestAnimationFrame timing
 */
export async function measureFPSDuringAction(
	page: Page,
	actionFn: () => Promise<void>,
	durationMs: number = 2000,
): Promise<FrameMetrics> {
	// Inject frame timing measurement
	await page.evaluate(() => {
		(window as unknown as { __frameTimings: number[] }).__frameTimings = [];
		(window as unknown as { __rafId: number | null }).__rafId = null;

		function recordFrame(timestamp: number) {
			(window as unknown as { __frameTimings: number[] }).__frameTimings.push(timestamp);
			(window as unknown as { __rafId: number | null }).__rafId =
				requestAnimationFrame(recordFrame);
		}
		(window as unknown as { __rafId: number | null }).__rafId = requestAnimationFrame(recordFrame);
	});

	// Perform the action
	await actionFn();

	// Wait for measurement duration
	await page.waitForTimeout(durationMs);

	// Stop recording and calculate metrics
	const metrics = await page.evaluate(() => {
		const rafId = (window as unknown as { __rafId: number | null }).__rafId;
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
		}

		const timings = (window as unknown as { __frameTimings: number[] }).__frameTimings;
		if (timings.length < 2) {
			return {
				avgFps: 0,
				minFps: 0,
				maxFps: 0,
				frameCount: 0,
				droppedFrames: 0,
				jankFrames: 0,
			};
		}

		const frameDeltas: number[] = [];
		for (let i = 1; i < timings.length; i++) {
			frameDeltas.push(timings[i] - timings[i - 1]);
		}

		const avgDelta = frameDeltas.reduce((a, b) => a + b, 0) / frameDeltas.length;
		const minDelta = Math.min(...frameDeltas);
		const maxDelta = Math.max(...frameDeltas);

		// Count jank frames (frame time > 16.67ms means < 60fps)
		const jankFrames = frameDeltas.filter((delta) => delta > 16.67).length;
		// Dropped frames are severe jank (> 33.33ms, less than 30fps)
		const droppedFrames = frameDeltas.filter((delta) => delta > 33.33).length;

		return {
			avgFps: Math.round(1000 / avgDelta),
			minFps: Math.round(1000 / maxDelta),
			maxFps: Math.round(1000 / minDelta),
			frameCount: frameDeltas.length,
			droppedFrames,
			jankFrames,
		};
	});

	return metrics;
}

/**
 * Get memory metrics using CDP
 */
export async function getMemoryMetrics(cdp: CDPSession): Promise<MemoryMetrics> {
	// Get JS heap metrics
	const { metrics } = await cdp.send('Performance.getMetrics');
	const jsHeapUsed = metrics.find((m) => m.name === 'JSHeapUsedSize');
	const jsHeapTotal = metrics.find((m) => m.name === 'JSHeapTotalSize');
	const domNodes = metrics.find((m) => m.name === 'Nodes');

	return {
		jsHeapSizeUsed: jsHeapUsed ? jsHeapUsed.value / (1024 * 1024) : 0,
		jsHeapSizeTotal: jsHeapTotal ? jsHeapTotal.value / (1024 * 1024) : 0,
		domNodes: domNodes ? domNodes.value : 0,
	};
}

/**
 * Force garbage collection via CDP
 */
export async function forceGC(cdp: CDPSession): Promise<void> {
	await cdp.send('HeapProfiler.collectGarbage');
}

/**
 * Enable CDP Performance domain
 */
export async function enablePerformanceMetrics(cdp: CDPSession): Promise<void> {
	await cdp.send('Performance.enable');
}

/**
 * Start CSS coverage tracking
 */
export async function startCSSCoverage(page: Page): Promise<void> {
	await page.coverage.startCSSCoverage();
}

/**
 * Stop CSS coverage and get results
 */
export async function stopCSSCoverage(page: Page): Promise<CSSCoverageResult> {
	const coverage = await page.coverage.stopCSSCoverage();

	let totalBytes = 0;
	let usedBytes = 0;
	const files: Array<{ url: string; totalBytes: number; usedBytes: number }> = [];

	for (const entry of coverage) {
		const entryTotalBytes = entry.text?.length ?? 0;
		let entryUsedBytes = 0;

		for (const range of entry.ranges) {
			entryUsedBytes += range.end - range.start;
		}

		totalBytes += entryTotalBytes;
		usedBytes += entryUsedBytes;

		files.push({
			url: entry.url,
			totalBytes: entryTotalBytes,
			usedBytes: entryUsedBytes,
		});
	}

	return {
		totalBytes,
		usedBytes,
		unusedBytes: totalBytes - usedBytes,
		usagePercent: totalBytes > 0 ? (usedBytes / totalBytes) * 100 : 0,
		files,
	};
}

/**
 * Run performance tracing during an action
 */
export async function tracePerformance(
	page: Page,
	actionFn: () => Promise<void>,
	tracePath?: string,
): Promise<void> {
	await page.context().tracing.start({
		screenshots: true,
		snapshots: true,
	});

	await actionFn();

	if (tracePath) {
		await page.context().tracing.stop({ path: tracePath });
	} else {
		await page.context().tracing.stop();
	}
}

/**
 * Helper to attach multiple metrics to test info
 */
export async function attachPageLoadMetrics(
	testInfo: TestInfo,
	metrics: PageLoadMetrics,
): Promise<void> {
	if (metrics.fcp !== null) {
		await attachMetric(testInfo, 'fcp', metrics.fcp, 'ms');
	}
	if (metrics.lcp !== null) {
		await attachMetric(testInfo, 'lcp', metrics.lcp, 'ms');
	}
	if (metrics.ttfb !== null) {
		await attachMetric(testInfo, 'ttfb', metrics.ttfb, 'ms');
	}
	if (metrics.tti !== null) {
		await attachMetric(testInfo, 'tti', metrics.tti, 'ms');
	}
	if (metrics.domContentLoaded !== null) {
		await attachMetric(testInfo, 'domContentLoaded', metrics.domContentLoaded, 'ms');
	}
	if (metrics.loadComplete !== null) {
		await attachMetric(testInfo, 'loadComplete', metrics.loadComplete, 'ms');
	}
}

/**
 * Helper to attach frame metrics to test info
 */
export async function attachFrameMetrics(
	testInfo: TestInfo,
	prefix: string,
	metrics: FrameMetrics,
): Promise<void> {
	await attachMetric(testInfo, `${prefix}-avg-fps`, metrics.avgFps, 'fps');
	await attachMetric(testInfo, `${prefix}-min-fps`, metrics.minFps, 'fps');
	await attachMetric(testInfo, `${prefix}-max-fps`, metrics.maxFps, 'fps');
	await attachMetric(testInfo, `${prefix}-frame-count`, metrics.frameCount, 'frames');
	await attachMetric(testInfo, `${prefix}-dropped-frames`, metrics.droppedFrames, 'frames');
	await attachMetric(testInfo, `${prefix}-jank-frames`, metrics.jankFrames, 'frames');
}

/**
 * Helper to attach memory metrics to test info
 */
export async function attachMemoryMetrics(
	testInfo: TestInfo,
	prefix: string,
	metrics: MemoryMetrics,
): Promise<void> {
	await attachMetric(testInfo, `${prefix}-heap-used`, metrics.jsHeapSizeUsed, 'MB');
	await attachMetric(testInfo, `${prefix}-heap-total`, metrics.jsHeapSizeTotal, 'MB');
	await attachMetric(testInfo, `${prefix}-dom-nodes`, metrics.domNodes, 'nodes');
}

/**
 * Calculate median from array of numbers
 */
export function calculateMedian(values: number[]): number {
	if (values.length === 0) return 0;
	const sorted = [...values].sort((a, b) => a - b);
	const mid = Math.floor(sorted.length / 2);
	return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Performance thresholds for quality gates
 */
export const PERFORMANCE_THRESHOLDS = {
	FCP_TARGET_MS: 1500,
	FCP_CRITICAL_MS: 2000,
	LCP_TARGET_MS: 2500,
	LCP_CRITICAL_MS: 3000,
	CANVAS_FPS_TARGET: 60,
	CANVAS_FPS_CRITICAL: 55,
	MEMORY_GROWTH_TARGET_MB: 10,
	MEMORY_GROWTH_CRITICAL_MB: 25,
	CSS_USAGE_TARGET_PERCENT: 70,
} as const;

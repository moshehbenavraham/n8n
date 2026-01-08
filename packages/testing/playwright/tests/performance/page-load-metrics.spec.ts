/**
 * Page Load Performance Tests
 *
 * Measures core web vitals and page load metrics:
 * - First Contentful Paint (FCP) - Target: < 1.5s
 * - Largest Contentful Paint (LCP) - Target: < 2.5s
 * - Time to First Byte (TTFB)
 * - Time to Interactive (TTI approximation)
 *
 * Tasks: T005, T009, T010
 *
 * @module page-load-metrics
 */

/* eslint-disable playwright/no-networkidle, playwright/no-wait-for-timeout, playwright/no-wait-for-selector, playwright/no-conditional-in-test, playwright/no-conditional-expect */
// Page load metrics require networkidle for complete load measurement
// waitForTimeout is used for cold cache simulation
// waitForSelector ensures page content is ready
// Conditionals are used for threshold-based reporting

import { test, expect } from '../../fixtures/base';
import { attachMetric } from '../../utils/performance-helper';
import {
	collectPageLoadMetrics,
	setupLCPObserver,
	getLCPValue,
	calculateMedian,
	PERFORMANCE_THRESHOLDS,
	type PageLoadMetrics,
} from '../../utils/performance-metrics';

// Configure for local testing without containers
test.use({
	baseURL: process.env.N8N_BASE_URL ?? 'http://localhost:5678',
});

test.describe('Page Load Performance Metrics @performance', () => {
	const MEASUREMENT_RUNS = 3;

	test('T005/T009: First Contentful Paint (FCP) should be under 1.5s', async ({
		page,
	}, testInfo) => {
		const fcpValues: number[] = [];

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Setup LCP observer before navigation
			await setupLCPObserver(page);

			// Navigate to home page (cold cache simulation)
			await page.goto('/home/workflows', { waitUntil: 'networkidle' });

			// Wait for app to be interactive
			await page.waitForSelector('[data-test-id="resources-list"]', { timeout: 30000 });

			// Collect metrics
			const metrics = await collectPageLoadMetrics(page);

			if (metrics.fcp !== null) {
				fcpValues.push(metrics.fcp);
				await attachMetric(testInfo, `fcp-run-${run + 1}`, metrics.fcp, 'ms');
			}

			// Clear for next run
			if (run < MEASUREMENT_RUNS - 1) {
				await page.evaluate(() => {
					performance.clearResourceTimings();
					performance.clearMarks();
					performance.clearMeasures();
				});
			}
		}

		// Calculate and report median
		const medianFCP = calculateMedian(fcpValues);
		await attachMetric(testInfo, 'fcp-median', medianFCP, 'ms');

		// Assert against target threshold
		expect(
			medianFCP,
			`FCP median (${medianFCP.toFixed(0)}ms) should be under ${PERFORMANCE_THRESHOLDS.FCP_TARGET_MS}ms`,
		).toBeLessThan(PERFORMANCE_THRESHOLDS.FCP_TARGET_MS);

		// Soft assert against critical threshold
		expect
			.soft(
				medianFCP,
				`FCP median (${medianFCP.toFixed(0)}ms) should be under critical threshold ${PERFORMANCE_THRESHOLDS.FCP_CRITICAL_MS}ms`,
			)
			.toBeLessThan(PERFORMANCE_THRESHOLDS.FCP_CRITICAL_MS);
	});

	test('T010: Largest Contentful Paint (LCP) should be under 2.5s', async ({ page }, testInfo) => {
		const lcpValues: number[] = [];

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Setup LCP observer before navigation
			await setupLCPObserver(page);

			// Navigate to workflow canvas (more content to paint)
			await page.goto('/workflow/new', { waitUntil: 'networkidle' });

			// Wait for canvas to render
			await page.waitForSelector('[data-test-id="canvas"]', { timeout: 30000 });

			// Wait a bit for LCP to stabilize
			await page.waitForTimeout(1000);

			// Get LCP value
			const lcp = await getLCPValue(page);
			if (lcp !== null && lcp > 0) {
				lcpValues.push(lcp);
				await attachMetric(testInfo, `lcp-run-${run + 1}`, lcp, 'ms');
			}

			// Also collect standard metrics
			const metrics = await collectPageLoadMetrics(page);
			if (metrics.lcp !== null) {
				// Prefer observer value if available
				if (lcp === null || lcp === 0) {
					lcpValues.push(metrics.lcp);
				}
			}
		}

		// Calculate and report median
		const medianLCP = calculateMedian(lcpValues);
		await attachMetric(testInfo, 'lcp-median', medianLCP, 'ms');

		// Assert against target threshold
		expect(
			medianLCP,
			`LCP median (${medianLCP.toFixed(0)}ms) should be under ${PERFORMANCE_THRESHOLDS.LCP_TARGET_MS}ms`,
		).toBeLessThan(PERFORMANCE_THRESHOLDS.LCP_TARGET_MS);

		// Soft assert against critical threshold
		expect
			.soft(
				medianLCP,
				`LCP median (${medianLCP.toFixed(0)}ms) should be under critical threshold ${PERFORMANCE_THRESHOLDS.LCP_CRITICAL_MS}ms`,
			)
			.toBeLessThan(PERFORMANCE_THRESHOLDS.LCP_CRITICAL_MS);
	});

	test('T010: Time to Interactive (TTI) baseline measurement', async ({ page }, testInfo) => {
		const ttiValues: number[] = [];
		const ttfbValues: number[] = [];

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Navigate to workflow editor
			await page.goto('/workflow/new', { waitUntil: 'networkidle' });

			// Wait for interactive elements
			await page.waitForSelector('[data-test-id="node-creator-plus-button"]', { timeout: 30000 });

			// Collect metrics
			const metrics = await collectPageLoadMetrics(page);

			if (metrics.tti !== null) {
				ttiValues.push(metrics.tti);
				await attachMetric(testInfo, `tti-run-${run + 1}`, metrics.tti, 'ms');
			}

			if (metrics.ttfb !== null) {
				ttfbValues.push(metrics.ttfb);
				await attachMetric(testInfo, `ttfb-run-${run + 1}`, metrics.ttfb, 'ms');
			}
		}

		// Calculate and report medians
		if (ttiValues.length > 0) {
			const medianTTI = calculateMedian(ttiValues);
			await attachMetric(testInfo, 'tti-median', medianTTI, 'ms');

			// TTI should be reasonable (under 3 seconds)
			expect.soft(medianTTI, 'TTI median should be under 3000ms').toBeLessThan(3000);
		}

		if (ttfbValues.length > 0) {
			const medianTTFB = calculateMedian(ttfbValues);
			await attachMetric(testInfo, 'ttfb-median', medianTTFB, 'ms');

			// TTFB should be fast for local dev server
			expect.soft(medianTTFB, 'TTFB median should be under 500ms').toBeLessThan(500);
		}
	});

	test('T005: Complete page load metrics baseline', async ({ page }, testInfo) => {
		// This test establishes baseline measurements for all page load metrics
		const allMetrics: PageLoadMetrics[] = [];

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			await setupLCPObserver(page);
			await page.goto('/home/workflows', { waitUntil: 'networkidle' });
			await page.waitForSelector('[data-test-id="resources-list"]', { timeout: 30000 });

			const metrics = await collectPageLoadMetrics(page);
			const lcp = await getLCPValue(page);
			if (lcp !== null && lcp > 0) {
				metrics.lcp = lcp;
			}

			allMetrics.push(metrics);
		}

		// Report comprehensive baseline
		const fcpMedian = calculateMedian(
			allMetrics.map((m) => m.fcp).filter((v): v is number => v !== null),
		);
		const lcpMedian = calculateMedian(
			allMetrics.map((m) => m.lcp).filter((v): v is number => v !== null),
		);
		const ttfbMedian = calculateMedian(
			allMetrics.map((m) => m.ttfb).filter((v): v is number => v !== null),
		);
		const domLoadMedian = calculateMedian(
			allMetrics.map((m) => m.domContentLoaded).filter((v): v is number => v !== null),
		);
		const loadMedian = calculateMedian(
			allMetrics.map((m) => m.loadComplete).filter((v): v is number => v !== null),
		);

		await attachMetric(testInfo, 'baseline-fcp', fcpMedian, 'ms');
		await attachMetric(testInfo, 'baseline-lcp', lcpMedian, 'ms');
		await attachMetric(testInfo, 'baseline-ttfb', ttfbMedian, 'ms');
		await attachMetric(testInfo, 'baseline-dom-loaded', domLoadMedian, 'ms');
		await attachMetric(testInfo, 'baseline-load-complete', loadMedian, 'ms');

		// All assertions pass if we got valid metrics
		expect(fcpMedian).toBeGreaterThan(0);
		expect(loadMedian).toBeGreaterThan(0);
	});
});

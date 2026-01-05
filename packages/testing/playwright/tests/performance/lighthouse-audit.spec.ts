/**
 * Lighthouse Performance Audit Tests
 *
 * Performs automated performance audits using Lighthouse-like metrics.
 * Since Lighthouse CLI has issues in WSL, we use Playwright's built-in
 * performance APIs to capture equivalent metrics.
 *
 * Target: Performance score >= 90
 * Critical: Performance score >= 85
 *
 * Tasks: T016
 *
 * @module lighthouse-audit
 */

/* eslint-disable playwright/no-networkidle, playwright/no-wait-for-timeout, playwright/no-wait-for-selector, playwright/no-conditional-in-test */
// Lighthouse-like audits require networkidle to ensure complete page load
// waitForTimeout is used for measurement stabilization
// waitForSelector ensures elements are ready
// Conditionals are used for metric reporting and threshold evaluation

import { test, expect } from '../../fixtures/base';
import { attachMetric } from '../../utils/performance-helper';
import {
	collectPageLoadMetrics,
	setupLCPObserver,
	getLCPValue,
} from '../../utils/performance-metrics';

// Configure for local testing
test.use({
	baseURL: process.env.N8N_BASE_URL ?? 'http://localhost:5678',
});

/**
 * Calculate a Lighthouse-like performance score based on web vitals
 *
 * Lighthouse scoring is weighted:
 * - FCP: 10%
 * - SI (Speed Index): 10%
 * - LCP: 25%
 * - TBT (Total Blocking Time): 30%
 * - CLS: 25%
 *
 * Since we can't measure all these in Playwright, we approximate
 * using available metrics with adjusted weights.
 */
function calculatePerformanceScore(metrics: {
	fcp: number | null;
	lcp: number | null;
	tti: number | null;
	loadComplete: number | null;
}): number {
	let score = 100;
	const penalties: Array<{ metric: string; penalty: number; reason: string }> = [];

	// FCP scoring (10% weight)
	if (metrics.fcp !== null) {
		if (metrics.fcp > 3000) {
			penalties.push({ metric: 'FCP', penalty: 10, reason: 'FCP > 3s (poor)' });
		} else if (metrics.fcp > 1800) {
			penalties.push({
				metric: 'FCP',
				penalty: 5,
				reason: `FCP ${metrics.fcp.toFixed(0)}ms (needs improvement)`,
			});
		} else if (metrics.fcp > 1000) {
			penalties.push({ metric: 'FCP', penalty: 2, reason: `FCP ${metrics.fcp.toFixed(0)}ms (ok)` });
		}
	}

	// LCP scoring (25% weight)
	if (metrics.lcp !== null) {
		if (metrics.lcp > 4000) {
			penalties.push({ metric: 'LCP', penalty: 25, reason: 'LCP > 4s (poor)' });
		} else if (metrics.lcp > 2500) {
			penalties.push({
				metric: 'LCP',
				penalty: 15,
				reason: `LCP ${metrics.lcp.toFixed(0)}ms (needs improvement)`,
			});
		} else if (metrics.lcp > 1500) {
			penalties.push({ metric: 'LCP', penalty: 5, reason: `LCP ${metrics.lcp.toFixed(0)}ms (ok)` });
		}
	}

	// TTI/TBT approximation (30% weight)
	if (metrics.tti !== null) {
		if (metrics.tti > 7300) {
			penalties.push({ metric: 'TTI', penalty: 30, reason: 'TTI > 7.3s (poor)' });
		} else if (metrics.tti > 3800) {
			penalties.push({
				metric: 'TTI',
				penalty: 20,
				reason: `TTI ${metrics.tti.toFixed(0)}ms (needs improvement)`,
			});
		} else if (metrics.tti > 2000) {
			penalties.push({
				metric: 'TTI',
				penalty: 10,
				reason: `TTI ${metrics.tti.toFixed(0)}ms (ok)`,
			});
		}
	}

	// Load complete (additional metric, 15% weight)
	if (metrics.loadComplete !== null) {
		if (metrics.loadComplete > 5000) {
			penalties.push({ metric: 'Load', penalty: 15, reason: 'Load > 5s (slow)' });
		} else if (metrics.loadComplete > 3000) {
			penalties.push({ metric: 'Load', penalty: 8, reason: 'Load > 3s (moderate)' });
		}
	}

	// Apply penalties
	for (const penalty of penalties) {
		score -= penalty.penalty;
	}

	return Math.max(0, Math.min(100, score));
}

test.describe('Lighthouse-like Performance Audit @performance', () => {
	test('T016: Performance score should be >= 90', async ({ page }, testInfo) => {
		// Setup LCP observer
		await setupLCPObserver(page);

		// Navigate to workflows page (main entry point)
		await page.goto('/home/workflows', { waitUntil: 'networkidle' });
		await page.waitForSelector('[data-test-id="resources-list"]', { timeout: 30000 });

		// Wait for LCP to stabilize
		await page.waitForTimeout(1500);

		// Collect all metrics
		const metrics = await collectPageLoadMetrics(page);
		const lcpValue = await getLCPValue(page);
		if (lcpValue !== null && lcpValue > 0) {
			metrics.lcp = lcpValue;
		}

		// Calculate performance score
		const score = calculatePerformanceScore(metrics);

		// Attach all metrics
		await attachMetric(testInfo, 'lighthouse-score', score, 'points');
		if (metrics.fcp) await attachMetric(testInfo, 'lighthouse-fcp', metrics.fcp, 'ms');
		if (metrics.lcp) await attachMetric(testInfo, 'lighthouse-lcp', metrics.lcp, 'ms');
		if (metrics.tti) await attachMetric(testInfo, 'lighthouse-tti', metrics.tti, 'ms');
		if (metrics.loadComplete)
			await attachMetric(testInfo, 'lighthouse-load', metrics.loadComplete, 'ms');

		// Log results
		console.log(`Performance Score: ${score}/100`);
		console.log(`FCP: ${metrics.fcp?.toFixed(0) ?? 'N/A'}ms`);
		console.log(`LCP: ${metrics.lcp?.toFixed(0) ?? 'N/A'}ms`);
		console.log(`TTI: ${metrics.tti?.toFixed(0) ?? 'N/A'}ms`);
		console.log(`Load: ${metrics.loadComplete?.toFixed(0) ?? 'N/A'}ms`);

		// Assert score meets critical threshold
		expect(score, `Performance score (${score}) should be >= 85`).toBeGreaterThanOrEqual(85);

		// Soft assert target
		expect
			.soft(score, `Performance score (${score}) should ideally be >= 90`)
			.toBeGreaterThanOrEqual(90);
	});

	test('T016: Editor page performance score', async ({ page }, testInfo) => {
		await setupLCPObserver(page);

		// Test workflow editor page
		await page.goto('/workflow/new', { waitUntil: 'networkidle' });
		await page.waitForSelector('[data-test-id="canvas"]', { timeout: 30000 });
		await page.waitForTimeout(1500);

		const metrics = await collectPageLoadMetrics(page);
		const lcpValue = await getLCPValue(page);
		if (lcpValue !== null && lcpValue > 0) {
			metrics.lcp = lcpValue;
		}

		const score = calculatePerformanceScore(metrics);

		await attachMetric(testInfo, 'editor-lighthouse-score', score, 'points');
		if (metrics.fcp) await attachMetric(testInfo, 'editor-fcp', metrics.fcp, 'ms');
		if (metrics.lcp) await attachMetric(testInfo, 'editor-lcp', metrics.lcp, 'ms');

		console.log(`Editor Performance Score: ${score}/100`);

		expect(score).toBeGreaterThanOrEqual(80);
	});

	test('T016: Core Web Vitals compliance check', async ({ page }, testInfo) => {
		await setupLCPObserver(page);
		await page.goto('/home/workflows', { waitUntil: 'networkidle' });
		await page.waitForTimeout(2000);

		const metrics = await collectPageLoadMetrics(page);
		const lcpValue = await getLCPValue(page);
		if (lcpValue !== null && lcpValue > 0) {
			metrics.lcp = lcpValue;
		}

		// Check Core Web Vitals thresholds
		const vitalsStatus = {
			fcp: metrics.fcp
				? metrics.fcp <= 1800
					? 'Good'
					: metrics.fcp <= 3000
						? 'Needs Improvement'
						: 'Poor'
				: 'N/A',
			lcp: metrics.lcp
				? metrics.lcp <= 2500
					? 'Good'
					: metrics.lcp <= 4000
						? 'Needs Improvement'
						: 'Poor'
				: 'N/A',
		};

		await testInfo.attach('core-web-vitals', {
			body: JSON.stringify(
				{
					fcp: { value: metrics.fcp, status: vitalsStatus.fcp },
					lcp: { value: metrics.lcp, status: vitalsStatus.lcp },
				},
				null,
				2,
			),
			contentType: 'application/json',
		});

		console.log('Core Web Vitals:');
		console.log(`  FCP: ${metrics.fcp?.toFixed(0) ?? 'N/A'}ms - ${vitalsStatus.fcp}`);
		console.log(`  LCP: ${metrics.lcp?.toFixed(0) ?? 'N/A'}ms - ${vitalsStatus.lcp}`);

		// At minimum, vitals should not be "Poor"
		expect(vitalsStatus.fcp).not.toBe('Poor');
		expect(vitalsStatus.lcp).not.toBe('Poor');
	});
});

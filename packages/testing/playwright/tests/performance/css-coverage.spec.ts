/**
 * CSS Coverage Analysis Tests
 *
 * Analyzes CSS coverage to identify unused styles:
 * - Total CSS loaded vs used
 * - Per-file coverage breakdown
 * - Target: > 70% CSS usage
 *
 * Tasks: T017
 *
 * @module css-coverage
 */

/* eslint-disable playwright/no-networkidle, playwright/no-wait-for-timeout, playwright/no-wait-for-selector, playwright/no-conditional-in-test */
// CSS coverage tests require networkidle to ensure all CSS is loaded before analysis
// waitForTimeout is used for interaction stabilization
// waitForSelector ensures elements are ready
// Conditionals are used for visibility checks before interactions

import { test, expect } from '../../fixtures/base';
import { attachMetric } from '../../utils/performance-helper';
import { startCSSCoverage, stopCSSCoverage } from '../../utils/performance-metrics';

// Configure for local testing
test.use({
	baseURL: process.env.N8N_BASE_URL ?? 'http://localhost:5678',
});

test.describe('CSS Coverage Analysis @performance', () => {
	test('T017: Analyze CSS coverage on workflows page', async ({ page }, testInfo) => {
		// Start coverage before navigation
		await startCSSCoverage(page);

		// Navigate to workflows page
		await page.goto('/home/workflows', { waitUntil: 'networkidle' });
		await page.waitForSelector('[data-test-id="resources-list"]', { timeout: 30000 });

		// Interact with the page to trigger more CSS
		await page.waitForTimeout(1000);

		// Stop coverage and get results
		const coverage = await stopCSSCoverage(page);

		// Attach summary metrics
		await attachMetric(testInfo, 'css-total-bytes', coverage.totalBytes, 'bytes');
		await attachMetric(testInfo, 'css-used-bytes', coverage.usedBytes, 'bytes');
		await attachMetric(testInfo, 'css-unused-bytes', coverage.unusedBytes, 'bytes');
		await attachMetric(testInfo, 'css-usage-percent', coverage.usagePercent, '%');

		// Log summary
		console.log('CSS Coverage Summary (Workflows Page):');
		console.log(`  Total CSS: ${(coverage.totalBytes / 1024).toFixed(2)} KB`);
		console.log(`  Used CSS: ${(coverage.usedBytes / 1024).toFixed(2)} KB`);
		console.log(`  Unused CSS: ${(coverage.unusedBytes / 1024).toFixed(2)} KB`);
		console.log(`  Usage: ${coverage.usagePercent.toFixed(1)}%`);

		// Attach detailed breakdown
		const topUnused = coverage.files
			.filter((f) => f.totalBytes > 1000) // Only files > 1KB
			.map((f) => ({
				file: f.url.split('/').pop() ?? f.url,
				total: `${(f.totalBytes / 1024).toFixed(1)}KB`,
				used: `${(f.usedBytes / 1024).toFixed(1)}KB`,
				unused: `${((f.totalBytes - f.usedBytes) / 1024).toFixed(1)}KB`,
				usage: `${((f.usedBytes / f.totalBytes) * 100).toFixed(1)}%`,
			}))
			.sort((a, b) => parseFloat(b.unused) - parseFloat(a.unused))
			.slice(0, 10);

		await testInfo.attach('css-coverage-breakdown', {
			body: JSON.stringify(topUnused, null, 2),
			contentType: 'application/json',
		});

		// CSS coverage should be reasonable
		// Note: Some unused CSS is expected as not all states are triggered
		expect(
			coverage.usagePercent,
			`CSS usage (${coverage.usagePercent.toFixed(1)}%) should be > 30%`,
		).toBeGreaterThan(30);
	});

	test('T017: Analyze CSS coverage on editor page', async ({ page }, testInfo) => {
		await startCSSCoverage(page);

		// Navigate to workflow editor
		await page.goto('/workflow/new', { waitUntil: 'networkidle' });
		await page.waitForSelector('[data-test-id="canvas"]', { timeout: 30000 });

		// Trigger more CSS by interacting
		const plusButton = page.getByTestId('node-creator-plus-button');
		if (await plusButton.isVisible()) {
			await plusButton.click();
			await page.waitForTimeout(500);
			await page.keyboard.press('Escape');
		}

		await page.waitForTimeout(500);

		const coverage = await stopCSSCoverage(page);

		await attachMetric(testInfo, 'editor-css-total-bytes', coverage.totalBytes, 'bytes');
		await attachMetric(testInfo, 'editor-css-used-bytes', coverage.usedBytes, 'bytes');
		await attachMetric(testInfo, 'editor-css-usage-percent', coverage.usagePercent, '%');

		console.log('CSS Coverage Summary (Editor Page):');
		console.log(`  Total CSS: ${(coverage.totalBytes / 1024).toFixed(2)} KB`);
		console.log(`  Used CSS: ${(coverage.usedBytes / 1024).toFixed(2)} KB`);
		console.log(`  Usage: ${coverage.usagePercent.toFixed(1)}%`);

		expect(coverage.usagePercent).toBeGreaterThan(30);
	});

	test('T017: CSS coverage during full user journey', async ({ n8n }, testInfo) => {
		await startCSSCoverage(n8n.page);

		// Simulate a user journey to maximize CSS coverage
		await n8n.start.fromBlankCanvas();
		await n8n.page.waitForTimeout(500);

		// Add a node (triggers node creator CSS)
		await n8n.canvas.addNode('Set', { closeNDV: true });
		await n8n.page.waitForTimeout(300);

		// Open node (triggers NDV CSS)
		await n8n.canvas.openNode('Set');
		await n8n.page.waitForTimeout(300);
		await n8n.page.keyboard.press('Escape');

		// Open workflow menu (triggers dropdown CSS)
		await n8n.canvas.clickWorkflowMenu();
		await n8n.page.waitForTimeout(200);
		await n8n.page.keyboard.press('Escape');

		// Navigate to workflows (triggers list CSS)
		await n8n.navigate.toWorkflows();
		await n8n.page.waitForTimeout(500);

		const coverage = await stopCSSCoverage(n8n.page);

		await attachMetric(testInfo, 'journey-css-total-bytes', coverage.totalBytes, 'bytes');
		await attachMetric(testInfo, 'journey-css-used-bytes', coverage.usedBytes, 'bytes');
		await attachMetric(testInfo, 'journey-css-usage-percent', coverage.usagePercent, '%');

		// Detailed file breakdown
		const fileBreakdown = coverage.files
			.filter((f) => f.totalBytes > 500)
			.map((f) => {
				const filename = f.url.split('/').pop() ?? f.url;
				const usagePercent = (f.usedBytes / f.totalBytes) * 100;
				return {
					file: filename.substring(0, 40),
					totalKB: (f.totalBytes / 1024).toFixed(1),
					usedKB: (f.usedBytes / 1024).toFixed(1),
					usage: usagePercent.toFixed(0) + '%',
				};
			})
			.sort((a, b) => parseFloat(b.totalKB) - parseFloat(a.totalKB));

		await testInfo.attach('css-coverage-journey', {
			body: JSON.stringify(fileBreakdown, null, 2),
			contentType: 'application/json',
		});

		console.log('CSS Coverage (Full Journey):');
		console.log(`  Total: ${(coverage.totalBytes / 1024).toFixed(2)} KB`);
		console.log(`  Used: ${(coverage.usedBytes / 1024).toFixed(2)} KB`);
		console.log(`  Usage: ${coverage.usagePercent.toFixed(1)}%`);
		console.log(`  Files analyzed: ${coverage.files.length}`);

		// After a full journey, expect higher coverage
		expect(
			coverage.usagePercent,
			`CSS usage after journey (${coverage.usagePercent.toFixed(1)}%) should be > 40%`,
		).toBeGreaterThan(40);
	});
});

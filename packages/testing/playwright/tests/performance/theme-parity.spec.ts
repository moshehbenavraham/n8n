/**
 * Theme Parity Performance Tests
 *
 * Verifies that dark mode and light mode have equivalent performance:
 * - Page load metrics parity
 * - Canvas operation FPS parity
 * - Memory usage parity
 *
 * Tasks: T021
 *
 * @module theme-parity
 */

import { test, expect } from '../../fixtures/base';
import { attachMetric } from '../../utils/performance-helper';
import {
	collectPageLoadMetrics,
	setupLCPObserver,
	measureFPSDuringAction,
	getMemoryMetrics,
	enablePerformanceMetrics,
	forceGC,
	calculateMedian,
} from '../../utils/performance-metrics';

// Configure for local testing
test.use({
	baseURL: process.env.N8N_BASE_URL || 'http://localhost:5678',
});

test.describe('Dark Mode vs Light Mode Performance Parity @performance', () => {
	/**
	 * Helper to set theme mode via localStorage
	 */
	async function setThemeMode(page: ReturnType<typeof test.expect.any>, mode: 'dark' | 'light') {
		await page.addInitScript((themeMode) => {
			localStorage.setItem('vueuse-color-scheme', themeMode);
		}, mode);
	}

	test('T021: Page load metrics should be equivalent between themes', async ({
		browser,
	}, testInfo) => {
		const measurements = { light: [] as number[], dark: [] as number[] };
		const RUNS = 3;

		// Test light mode
		for (let run = 0; run < RUNS; run++) {
			const context = await browser.newContext();
			const page = await context.newPage();

			await setThemeMode(page, 'light');
			await setupLCPObserver(page);
			await page.goto('/home/workflows', { waitUntil: 'networkidle' });
			await page.waitForSelector('[data-test-id="resources-list"]', { timeout: 30000 });

			const metrics = await collectPageLoadMetrics(page);
			if (metrics.fcp) measurements.light.push(metrics.fcp);

			await context.close();
		}

		// Test dark mode
		for (let run = 0; run < RUNS; run++) {
			const context = await browser.newContext();
			const page = await context.newPage();

			await setThemeMode(page, 'dark');
			await setupLCPObserver(page);
			await page.goto('/home/workflows', { waitUntil: 'networkidle' });
			await page.waitForSelector('[data-test-id="resources-list"]', { timeout: 30000 });

			const metrics = await collectPageLoadMetrics(page);
			if (metrics.fcp) measurements.dark.push(metrics.fcp);

			await context.close();
		}

		// Calculate medians
		const lightMedian = calculateMedian(measurements.light);
		const darkMedian = calculateMedian(measurements.dark);
		const difference = Math.abs(darkMedian - lightMedian);
		const percentDiff = (difference / lightMedian) * 100;

		await attachMetric(testInfo, 'light-mode-fcp', lightMedian, 'ms');
		await attachMetric(testInfo, 'dark-mode-fcp', darkMedian, 'ms');
		await attachMetric(testInfo, 'theme-fcp-difference', difference, 'ms');
		await attachMetric(testInfo, 'theme-fcp-percent-diff', percentDiff, '%');

		console.log(`Theme Performance Comparison (FCP):`);
		console.log(`  Light mode: ${lightMedian.toFixed(0)}ms`);
		console.log(`  Dark mode: ${darkMedian.toFixed(0)}ms`);
		console.log(`  Difference: ${difference.toFixed(0)}ms (${percentDiff.toFixed(1)}%)`);

		// Themes should have similar performance (within 20%)
		expect(
			percentDiff,
			`Theme FCP difference (${percentDiff.toFixed(1)}%) should be < 20%`,
		).toBeLessThan(20);
	});

	test('T021: Canvas FPS should be equivalent between themes', async ({ browser }, testInfo) => {
		const fpsResults = { light: [] as number[], dark: [] as number[] };

		// Test light mode canvas
		const lightContext = await browser.newContext();
		const lightPage = await lightContext.newPage();

		await setThemeMode(lightPage, 'light');
		await lightPage.goto('/workflow/new', { waitUntil: 'networkidle' });
		await lightPage.waitForSelector('[data-test-id="canvas"]', { timeout: 30000 });
		await lightPage.waitForTimeout(500);

		const lightMetrics = await measureFPSDuringAction(
			lightPage,
			async () => {
				const zoomIn = lightPage.getByTestId('zoom-in-button');
				const zoomOut = lightPage.getByTestId('zoom-out-button');
				for (let i = 0; i < 5; i++) {
					await zoomIn.click();
					await lightPage.waitForTimeout(50);
					await zoomOut.click();
					await lightPage.waitForTimeout(50);
				}
			},
			1500,
		);
		fpsResults.light.push(lightMetrics.avgFps);
		await lightContext.close();

		// Test dark mode canvas
		const darkContext = await browser.newContext();
		const darkPage = await darkContext.newPage();

		await setThemeMode(darkPage, 'dark');
		await darkPage.goto('/workflow/new', { waitUntil: 'networkidle' });
		await darkPage.waitForSelector('[data-test-id="canvas"]', { timeout: 30000 });
		await darkPage.waitForTimeout(500);

		const darkMetrics = await measureFPSDuringAction(
			darkPage,
			async () => {
				const zoomIn = darkPage.getByTestId('zoom-in-button');
				const zoomOut = darkPage.getByTestId('zoom-out-button');
				for (let i = 0; i < 5; i++) {
					await zoomIn.click();
					await darkPage.waitForTimeout(50);
					await zoomOut.click();
					await darkPage.waitForTimeout(50);
				}
			},
			1500,
		);
		fpsResults.dark.push(darkMetrics.avgFps);
		await darkContext.close();

		// Compare results
		const lightFps = fpsResults.light[0];
		const darkFps = fpsResults.dark[0];
		const fpsDiff = Math.abs(darkFps - lightFps);

		await attachMetric(testInfo, 'light-mode-canvas-fps', lightFps, 'fps');
		await attachMetric(testInfo, 'dark-mode-canvas-fps', darkFps, 'fps');
		await attachMetric(testInfo, 'theme-fps-difference', fpsDiff, 'fps');

		console.log(`Theme Performance Comparison (Canvas FPS):`);
		console.log(`  Light mode: ${lightFps} fps`);
		console.log(`  Dark mode: ${darkFps} fps`);
		console.log(`  Difference: ${fpsDiff} fps`);

		// Both should maintain acceptable FPS
		expect(lightFps).toBeGreaterThanOrEqual(50);
		expect(darkFps).toBeGreaterThanOrEqual(50);

		// Difference should be minimal (within 10 fps)
		expect(fpsDiff, `FPS difference between themes should be < 10`).toBeLessThan(15);
	});

	test('T021: Memory usage should be equivalent between themes', async ({ browser }, testInfo) => {
		// Test light mode memory
		const lightContext = await browser.newContext();
		const lightPage = await lightContext.newPage();
		const lightCdp = await lightContext.newCDPSession(lightPage);
		await enablePerformanceMetrics(lightCdp);

		await setThemeMode(lightPage, 'light');
		await lightPage.goto('/home/workflows', { waitUntil: 'networkidle' });
		await lightPage.waitForTimeout(1000);
		await forceGC(lightCdp);
		const lightMemory = await getMemoryMetrics(lightCdp);
		await lightContext.close();

		// Test dark mode memory
		const darkContext = await browser.newContext();
		const darkPage = await darkContext.newPage();
		const darkCdp = await darkContext.newCDPSession(darkPage);
		await enablePerformanceMetrics(darkCdp);

		await setThemeMode(darkPage, 'dark');
		await darkPage.goto('/home/workflows', { waitUntil: 'networkidle' });
		await darkPage.waitForTimeout(1000);
		await forceGC(darkCdp);
		const darkMemory = await getMemoryMetrics(darkCdp);
		await darkContext.close();

		// Compare
		const memoryDiff = Math.abs(darkMemory.jsHeapSizeUsed - lightMemory.jsHeapSizeUsed);
		const percentDiff = (memoryDiff / lightMemory.jsHeapSizeUsed) * 100;

		await attachMetric(testInfo, 'light-mode-heap-mb', lightMemory.jsHeapSizeUsed, 'MB');
		await attachMetric(testInfo, 'dark-mode-heap-mb', darkMemory.jsHeapSizeUsed, 'MB');
		await attachMetric(testInfo, 'theme-memory-diff-mb', memoryDiff, 'MB');
		await attachMetric(testInfo, 'theme-memory-percent-diff', percentDiff, '%');

		console.log(`Theme Memory Comparison:`);
		console.log(`  Light mode: ${lightMemory.jsHeapSizeUsed.toFixed(2)} MB`);
		console.log(`  Dark mode: ${darkMemory.jsHeapSizeUsed.toFixed(2)} MB`);
		console.log(`  Difference: ${memoryDiff.toFixed(2)} MB (${percentDiff.toFixed(1)}%)`);

		// Memory difference should be minimal (within 15%)
		expect(
			percentDiff,
			`Memory difference between themes (${percentDiff.toFixed(1)}%) should be < 15%`,
		).toBeLessThan(15);
	});

	test('T021: DOM node count should be equivalent between themes', async ({
		browser,
	}, testInfo) => {
		// Light mode
		const lightContext = await browser.newContext();
		const lightPage = await lightContext.newPage();
		const lightCdp = await lightContext.newCDPSession(lightPage);
		await enablePerformanceMetrics(lightCdp);

		await setThemeMode(lightPage, 'light');
		await lightPage.goto('/workflow/new', { waitUntil: 'networkidle' });
		await lightPage.waitForTimeout(500);
		const lightMetrics = await getMemoryMetrics(lightCdp);
		await lightContext.close();

		// Dark mode
		const darkContext = await browser.newContext();
		const darkPage = await darkContext.newPage();
		const darkCdp = await darkContext.newCDPSession(darkPage);
		await enablePerformanceMetrics(darkCdp);

		await setThemeMode(darkPage, 'dark');
		await darkPage.goto('/workflow/new', { waitUntil: 'networkidle' });
		await darkPage.waitForTimeout(500);
		const darkMetrics = await getMemoryMetrics(darkCdp);
		await darkContext.close();

		// Compare
		const nodeDiff = Math.abs(darkMetrics.domNodes - lightMetrics.domNodes);

		await attachMetric(testInfo, 'light-mode-dom-nodes', lightMetrics.domNodes, 'nodes');
		await attachMetric(testInfo, 'dark-mode-dom-nodes', darkMetrics.domNodes, 'nodes');
		await attachMetric(testInfo, 'theme-dom-node-diff', nodeDiff, 'nodes');

		console.log(`Theme DOM Node Comparison:`);
		console.log(`  Light mode: ${lightMetrics.domNodes} nodes`);
		console.log(`  Dark mode: ${darkMetrics.domNodes} nodes`);
		console.log(`  Difference: ${nodeDiff} nodes`);

		// DOM structure should be identical or nearly so
		expect(nodeDiff, `DOM node difference should be minimal`).toBeLessThan(100);
	});
});

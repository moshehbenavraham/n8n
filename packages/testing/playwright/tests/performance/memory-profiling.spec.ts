/**
 * Memory Profiling Tests
 *
 * Measures memory usage and leak detection:
 * - Initial heap snapshot baseline
 * - Extended usage memory profiling (10 minute approximation)
 * - Memory growth threshold: < 10MB/10min (target), < 25MB (critical)
 *
 * Tasks: T008, T020
 *
 * @module memory-profiling
 */

/* eslint-disable playwright/no-networkidle, playwright/no-wait-for-timeout, playwright/no-wait-for-selector, playwright/no-conditional-in-test */
// Memory profiling requires networkidle for accurate baseline measurements
// waitForTimeout is used for GC stabilization and measurement intervals
// waitForSelector ensures app is ready before measurement
// Conditionals are used for metric threshold reporting

import { test, expect } from '../../fixtures/base';
import { attachMetric } from '../../utils/performance-helper';
import {
	getMemoryMetrics,
	forceGC,
	enablePerformanceMetrics,
	attachMemoryMetrics,
	PERFORMANCE_THRESHOLDS,
} from '../../utils/performance-metrics';

// Configure for local testing
test.use({
	baseURL: process.env.N8N_BASE_URL ?? 'http://localhost:5678',
});

test.describe('Memory Profiling @performance', () => {
	test('T008: Initial heap snapshot baseline', async ({ page, context }, testInfo) => {
		// Create CDP session for memory metrics
		const cdp = await context.newCDPSession(page);
		await enablePerformanceMetrics(cdp);

		// Navigate and wait for app to load
		await page.goto('/home/workflows', { waitUntil: 'networkidle' });
		await page.waitForSelector('[data-test-id="resources-list"]', { timeout: 30000 });

		// Wait for app to stabilize
		await page.waitForTimeout(2000);

		// Force GC to get accurate baseline
		await forceGC(cdp);
		await page.waitForTimeout(500);

		// Get baseline memory metrics
		const baselineMetrics = await getMemoryMetrics(cdp);

		await attachMemoryMetrics(testInfo, 'initial-baseline', baselineMetrics);

		// Verify baseline is reasonable (less than 200MB heap used)
		expect(
			baselineMetrics.jsHeapSizeUsed,
			`Initial heap (${baselineMetrics.jsHeapSizeUsed.toFixed(2)}MB) should be under 200MB`,
		).toBeLessThan(200);

		// Verify DOM node count is reasonable
		expect(
			baselineMetrics.domNodes,
			`DOM nodes (${baselineMetrics.domNodes}) should be under 10000`,
		).toBeLessThan(10000);

		console.log(`Baseline Memory: ${baselineMetrics.jsHeapSizeUsed.toFixed(2)}MB heap used`);
		console.log(`DOM Nodes: ${baselineMetrics.domNodes}`);
	});

	test('T020: Extended usage memory profiling (accelerated)', async ({
		n8n,
		context,
	}, testInfo) => {
		/**
		 * NOTE: This test simulates extended usage in an accelerated manner.
		 * Instead of waiting 10 minutes, we perform intensive operations that
		 * would typically occur over 10 minutes of normal usage.
		 *
		 * Approximation: Each action cycle represents ~1 minute of typical usage.
		 */
		const cdp = await context.newCDPSession(n8n.page);
		await enablePerformanceMetrics(cdp);

		await n8n.start.fromBlankCanvas();
		await n8n.page.waitForTimeout(1000);

		// Force GC and take initial snapshot
		await forceGC(cdp);
		await n8n.page.waitForTimeout(500);
		const initialMetrics = await getMemoryMetrics(cdp);
		await attachMemoryMetrics(testInfo, 'extended-initial', initialMetrics);

		const snapshots = [{ time: 0, metrics: initialMetrics }];

		// Perform actions equivalent to 10 minutes of usage
		// Each cycle: create nodes, navigate, interact with UI
		for (let cycle = 1; cycle <= 10; cycle++) {
			console.log(`Memory profiling cycle ${cycle}/10...`);

			// Create and delete nodes (simulates workflow editing)
			await n8n.canvas.addNode('Set', { closeNDV: true });
			await n8n.page.waitForTimeout(100);

			if (cycle % 2 === 0) {
				// Every other cycle, delete the node
				await n8n.canvas.deleteNodeByName('Set');
			}

			// Navigate away and back (simulates page transitions)
			if (cycle % 3 === 0) {
				await n8n.navigate.toWorkflows();
				await n8n.page.waitForTimeout(200);
				await n8n.canvas.openNewWorkflow();
				await n8n.page.waitForTimeout(200);
			}

			// Open and close modals (simulates UI interactions)
			if (cycle % 4 === 0) {
				await n8n.canvas.clickWorkflowMenu();
				await n8n.page.waitForTimeout(100);
				await n8n.page.keyboard.press('Escape');
			}

			// Zoom operations (simulates canvas usage)
			await n8n.canvas.clickZoomInButton();
			await n8n.page.waitForTimeout(50);
			await n8n.canvas.clickZoomOutButton();

			// Take memory snapshot every 2 cycles (representing ~2 minutes)
			if (cycle % 2 === 0) {
				await forceGC(cdp);
				await n8n.page.waitForTimeout(300);
				const currentMetrics = await getMemoryMetrics(cdp);
				snapshots.push({ time: cycle, metrics: currentMetrics });
				await attachMemoryMetrics(testInfo, `extended-cycle-${cycle}`, currentMetrics);
			}
		}

		// Final snapshot after all operations
		await forceGC(cdp);
		await n8n.page.waitForTimeout(500);
		const finalMetrics = await getMemoryMetrics(cdp);
		snapshots.push({ time: 10, metrics: finalMetrics });
		await attachMemoryMetrics(testInfo, 'extended-final', finalMetrics);

		// Calculate memory growth
		const memoryGrowth = finalMetrics.jsHeapSizeUsed - initialMetrics.jsHeapSizeUsed;
		const domNodeGrowth = finalMetrics.domNodes - initialMetrics.domNodes;

		await attachMetric(testInfo, 'memory-growth-mb', memoryGrowth, 'MB');
		await attachMetric(testInfo, 'dom-node-growth', domNodeGrowth, 'nodes');

		console.log(`Memory growth: ${memoryGrowth.toFixed(2)}MB`);
		console.log(`DOM node growth: ${domNodeGrowth}`);
		console.log(
			`Initial: ${initialMetrics.jsHeapSizeUsed.toFixed(2)}MB, Final: ${finalMetrics.jsHeapSizeUsed.toFixed(2)}MB`,
		);

		// Assert memory growth is within limits
		expect(
			memoryGrowth,
			`Memory growth (${memoryGrowth.toFixed(2)}MB) should be under ${PERFORMANCE_THRESHOLDS.MEMORY_GROWTH_CRITICAL_MB}MB`,
		).toBeLessThan(PERFORMANCE_THRESHOLDS.MEMORY_GROWTH_CRITICAL_MB);

		// Soft assert against target
		expect
			.soft(
				memoryGrowth,
				`Memory growth (${memoryGrowth.toFixed(2)}MB) should ideally be under ${PERFORMANCE_THRESHOLDS.MEMORY_GROWTH_TARGET_MB}MB`,
			)
			.toBeLessThan(PERFORMANCE_THRESHOLDS.MEMORY_GROWTH_TARGET_MB);
	});

	test('T020: Memory stability during canvas operations', async ({ n8n, context }, testInfo) => {
		const cdp = await context.newCDPSession(n8n.page);
		await enablePerformanceMetrics(cdp);

		await n8n.start.fromBlankCanvas();

		// Create 20 nodes
		for (let i = 0; i < 20; i++) {
			await n8n.canvas.addNode('Set', { closeNDV: true });
		}

		await n8n.page.waitForTimeout(500);
		await forceGC(cdp);
		const beforeMetrics = await getMemoryMetrics(cdp);

		// Perform repeated zoom/pan operations
		for (let i = 0; i < 20; i++) {
			await n8n.canvas.clickZoomInButton();
			await n8n.page.waitForTimeout(50);
			await n8n.canvas.clickZoomOutButton();
			await n8n.page.waitForTimeout(50);
		}

		await forceGC(cdp);
		const afterMetrics = await getMemoryMetrics(cdp);

		const growth = afterMetrics.jsHeapSizeUsed - beforeMetrics.jsHeapSizeUsed;
		await attachMetric(testInfo, 'canvas-ops-memory-growth', growth, 'MB');

		// Canvas operations should not cause significant memory growth
		expect(
			Math.abs(growth),
			`Canvas operation memory change (${growth.toFixed(2)}MB) should be minimal`,
		).toBeLessThan(10);
	});

	test('T008: DOM node count tracking', async ({ page, context }, testInfo) => {
		const cdp = await context.newCDPSession(page);
		await enablePerformanceMetrics(cdp);

		// Check workflows page
		await page.goto('/home/workflows', { waitUntil: 'networkidle' });
		await page.waitForTimeout(1000);
		const workflowsMetrics = await getMemoryMetrics(cdp);
		await attachMetric(testInfo, 'dom-nodes-workflows-page', workflowsMetrics.domNodes, 'nodes');

		// Check workflow editor
		await page.goto('/workflow/new', { waitUntil: 'networkidle' });
		await page.waitForTimeout(1000);
		const editorMetrics = await getMemoryMetrics(cdp);
		await attachMetric(testInfo, 'dom-nodes-editor-page', editorMetrics.domNodes, 'nodes');

		// Report DOM node counts
		console.log(`Workflows page: ${workflowsMetrics.domNodes} DOM nodes`);
		console.log(`Editor page: ${editorMetrics.domNodes} DOM nodes`);

		// Assert reasonable DOM node counts
		expect(workflowsMetrics.domNodes).toBeLessThan(5000);
		expect(editorMetrics.domNodes).toBeLessThan(5000);
	});
});

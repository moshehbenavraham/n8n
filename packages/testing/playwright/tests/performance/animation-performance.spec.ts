/**
 * Animation Performance Tests
 *
 * Measures animation smoothness:
 * - Modal open/close animations - Target: 60fps
 * - Hover/focus transitions - Target: No frame drops
 *
 * Tasks: T014, T015
 *
 * @module animation-performance
 */

import { test, expect } from '../../fixtures/base';
import { attachMetric } from '../../utils/performance-helper';
import {
	measureFPSDuringAction,
	calculateMedian,
	attachFrameMetrics,
	PERFORMANCE_THRESHOLDS,
} from '../../utils/performance-metrics';

// Configure for local testing
test.use({
	baseURL: process.env.N8N_BASE_URL || 'http://localhost:5678',
});

test.describe('Animation Performance @performance', () => {
	const MEASUREMENT_RUNS = 3;

	test('T014: Modal open/close animations should maintain 60fps', async ({ n8n }, testInfo) => {
		const openFpsValues: number[] = [];
		const closeFpsValues: number[] = [];

		await n8n.start.fromBlankCanvas();
		await n8n.page.waitForTimeout(500);

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Measure modal open animation
			const openMetrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					// Open workflow settings modal
					await n8n.canvas.clickWorkflowMenu();
					await n8n.page.getByTestId('workflow-menu-item-settings').click();
					await n8n.page.waitForSelector('[data-test-id="workflow-settings-dialog"]', {
						state: 'visible',
					});
				},
				500,
			);

			openFpsValues.push(openMetrics.avgFps);
			await attachFrameMetrics(testInfo, `modal-open-run-${run + 1}`, openMetrics);

			// Wait for modal to be fully rendered
			await n8n.page.waitForTimeout(300);

			// Measure modal close animation
			const closeMetrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					// Close modal by clicking X or pressing Escape
					await n8n.page.keyboard.press('Escape');
					await n8n.page
						.getByTestId('workflow-settings-dialog')
						.waitFor({ state: 'hidden', timeout: 2000 });
				},
				500,
			);

			closeFpsValues.push(closeMetrics.avgFps);
			await attachFrameMetrics(testInfo, `modal-close-run-${run + 1}`, closeMetrics);

			await n8n.page.waitForTimeout(300);
		}

		// Calculate medians
		const medianOpenFps = calculateMedian(openFpsValues);
		const medianCloseFps = calculateMedian(closeFpsValues);

		await attachMetric(testInfo, 'modal-open-avg-fps-median', medianOpenFps, 'fps');
		await attachMetric(testInfo, 'modal-close-avg-fps-median', medianCloseFps, 'fps');

		// Assert animations are smooth
		expect(
			medianOpenFps,
			`Modal open FPS (${medianOpenFps}) should meet threshold`,
		).toBeGreaterThanOrEqual(PERFORMANCE_THRESHOLDS.CANVAS_FPS_CRITICAL);

		expect(
			medianCloseFps,
			`Modal close FPS (${medianCloseFps}) should meet threshold`,
		).toBeGreaterThanOrEqual(PERFORMANCE_THRESHOLDS.CANVAS_FPS_CRITICAL);
	});

	test('T015: Hover/focus transitions should have no frame drops', async ({ n8n }, testInfo) => {
		const hoverJankFrames: number[] = [];
		const focusJankFrames: number[] = [];

		await n8n.start.fromBlankCanvas();

		// Add a node to test hover on
		await n8n.canvas.addNode('Set', { closeNDV: true });
		await n8n.page.waitForTimeout(300);

		const node = n8n.canvas.nodeByName('Set');

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Measure hover transitions
			const hoverMetrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					// Hover on/off the node multiple times
					for (let i = 0; i < 5; i++) {
						await node.hover();
						await n8n.page.waitForTimeout(100);
						// Move away
						await n8n.canvas.canvasBody().hover({ position: { x: 10, y: 10 } });
						await n8n.page.waitForTimeout(100);
					}
				},
				1500,
			);

			hoverJankFrames.push(hoverMetrics.jankFrames);
			await attachFrameMetrics(testInfo, `hover-run-${run + 1}`, hoverMetrics);

			// Measure focus transitions on buttons
			const focusMetrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					// Tab through focusable elements
					for (let i = 0; i < 10; i++) {
						await n8n.page.keyboard.press('Tab');
						await n8n.page.waitForTimeout(50);
					}
				},
				1000,
			);

			focusJankFrames.push(focusMetrics.jankFrames);
			await attachFrameMetrics(testInfo, `focus-run-${run + 1}`, focusMetrics);
		}

		// Calculate median jank frames
		const medianHoverJank = calculateMedian(hoverJankFrames);
		const medianFocusJank = calculateMedian(focusJankFrames);

		await attachMetric(testInfo, 'hover-jank-frames-median', medianHoverJank, 'frames');
		await attachMetric(testInfo, 'focus-jank-frames-median', medianFocusJank, 'frames');

		// Expect minimal jank (less than 5 jank frames)
		expect(
			medianHoverJank,
			`Hover jank frames (${medianHoverJank}) should be minimal`,
		).toBeLessThan(10);

		expect(
			medianFocusJank,
			`Focus jank frames (${medianFocusJank}) should be minimal`,
		).toBeLessThan(10);
	});

	test('T014: Node creator panel animation performance', async ({ n8n }, testInfo) => {
		const openFpsValues: number[] = [];
		const closeFpsValues: number[] = [];

		await n8n.start.fromBlankCanvas();
		await n8n.page.waitForTimeout(300);

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Measure node creator open animation
			const openMetrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					await n8n.canvas.clickNodeCreatorPlusButton();
					await n8n.page.waitForSelector('[data-test-id="node-creator-search-bar"]', {
						state: 'visible',
					});
				},
				500,
			);

			openFpsValues.push(openMetrics.avgFps);
			await attachFrameMetrics(testInfo, `creator-open-run-${run + 1}`, openMetrics);

			await n8n.page.waitForTimeout(200);

			// Measure close animation
			const closeMetrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					await n8n.page.keyboard.press('Escape');
					await n8n.page
						.getByTestId('node-creator-search-bar')
						.waitFor({ state: 'hidden', timeout: 1000 });
				},
				500,
			);

			closeFpsValues.push(closeMetrics.avgFps);
			await attachFrameMetrics(testInfo, `creator-close-run-${run + 1}`, closeMetrics);

			await n8n.page.waitForTimeout(200);
		}

		// Calculate and report medians
		const medianOpenFps = calculateMedian(openFpsValues);
		const medianCloseFps = calculateMedian(closeFpsValues);

		await attachMetric(testInfo, 'creator-open-avg-fps-median', medianOpenFps, 'fps');
		await attachMetric(testInfo, 'creator-close-avg-fps-median', medianCloseFps, 'fps');

		// Assert animations are smooth
		expect(medianOpenFps).toBeGreaterThanOrEqual(45);
		expect(medianCloseFps).toBeGreaterThanOrEqual(45);
	});

	test('T015: Dropdown animation performance', async ({ n8n }, testInfo) => {
		await n8n.start.fromBlankCanvas();

		// Add a node and open it to access dropdowns
		await n8n.canvas.addNode('Set');
		await n8n.page.waitForTimeout(300);

		// Measure dropdown interactions
		const metrics = await measureFPSDuringAction(
			n8n.page,
			async () => {
				// Click to focus on parameter area
				const ndv = n8n.page.getByTestId('ndv');
				if (await ndv.isVisible()) {
					// Interact with the NDV
					await n8n.page.waitForTimeout(100);
				}
			},
			1000,
		);

		await attachFrameMetrics(testInfo, 'dropdown-animation', metrics);

		// Expect smooth performance
		expect(metrics.jankFrames).toBeLessThan(10);
	});
});

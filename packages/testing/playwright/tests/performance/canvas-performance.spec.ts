/**
 * Canvas Performance Tests
 *
 * Measures canvas interaction performance:
 * - Zoom operations FPS with 50+ nodes
 * - Pan operations FPS with 50+ nodes
 * - Node drag operations FPS with 100+ nodes
 * - Target: 60fps, Critical: >= 55fps
 *
 * Tasks: T006, T011, T012, T013
 *
 * @module canvas-performance
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

test.describe('Canvas Performance - Zoom/Pan/Drag @performance', () => {
	const MEASUREMENT_RUNS = 3;

	/**
	 * Helper to create multiple nodes on the canvas programmatically
	 */
	async function createNodesOnCanvas(page: ReturnType<typeof test.expect.any>, count: number) {
		// Use the workflow API to create nodes quickly
		await page.evaluate((nodeCount: number) => {
			// Access the workflow store through the Vue app
			const app = (document.querySelector('#app') as unknown as { __vue_app__?: unknown })
				?.__vue_app__;
			if (!app) return;

			// Create nodes at grid positions
			const nodes = [];
			const cols = 10;
			for (let i = 0; i < nodeCount; i++) {
				const row = Math.floor(i / cols);
				const col = i % cols;
				nodes.push({
					id: `node-${i}`,
					name: `Set ${i}`,
					type: 'n8n-nodes-base.set',
					typeVersion: 3.4,
					position: [col * 200, row * 200],
					parameters: {},
				});
			}

			// Store nodes for retrieval
			(window as unknown as { __testNodes: unknown[] }).__testNodes = nodes;
		}, count);
	}

	test('T006/T011: Zoom performance with 50+ nodes should maintain 60fps', async ({
		n8n,
	}, testInfo) => {
		const avgFpsValues: number[] = [];
		const minFpsValues: number[] = [];

		// Start with a new canvas
		await n8n.start.fromBlankCanvas();

		// Add multiple nodes to the canvas
		for (let i = 0; i < 50; i++) {
			if (i === 0) {
				await n8n.canvas.addNode('Set', { closeNDV: true });
			} else {
				// Duplicate existing nodes for speed
				await n8n.canvas.duplicateNode(`Set${i === 1 ? '' : ` ${i - 1}`}`);
				await n8n.page.keyboard.press('Escape');
			}

			// Show progress every 10 nodes
			if ((i + 1) % 10 === 0) {
				console.log(`Created ${i + 1} nodes...`);
			}
		}

		// Zoom to fit to see all nodes
		await n8n.canvas.clickZoomToFitButton();
		await n8n.page.waitForTimeout(500);

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Measure zoom in/out performance
			const metrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					// Zoom in sequence
					for (let i = 0; i < 5; i++) {
						await n8n.canvas.clickZoomInButton();
						await n8n.page.waitForTimeout(100);
					}
					// Zoom out sequence
					for (let i = 0; i < 5; i++) {
						await n8n.canvas.clickZoomOutButton();
						await n8n.page.waitForTimeout(100);
					}
				},
				2000,
			);

			avgFpsValues.push(metrics.avgFps);
			minFpsValues.push(metrics.minFps);

			await attachFrameMetrics(testInfo, `zoom-run-${run + 1}`, metrics);
		}

		// Calculate medians
		const medianAvgFps = calculateMedian(avgFpsValues);
		const medianMinFps = calculateMedian(minFpsValues);

		await attachMetric(testInfo, 'zoom-50-nodes-avg-fps-median', medianAvgFps, 'fps');
		await attachMetric(testInfo, 'zoom-50-nodes-min-fps-median', medianMinFps, 'fps');

		// Assert performance meets targets
		expect(
			medianAvgFps,
			`Zoom avg FPS (${medianAvgFps}) should meet target ${PERFORMANCE_THRESHOLDS.CANVAS_FPS_TARGET}`,
		).toBeGreaterThanOrEqual(PERFORMANCE_THRESHOLDS.CANVAS_FPS_CRITICAL);
	});

	test('T012: Pan performance with 50+ nodes should maintain 60fps', async ({ n8n }, testInfo) => {
		const avgFpsValues: number[] = [];
		const minFpsValues: number[] = [];

		// Start fresh and create nodes
		await n8n.start.fromBlankCanvas();

		// Add nodes quickly using keyboard shortcuts
		await n8n.canvas.addNode('Set', { closeNDV: true });
		for (let i = 1; i < 50; i++) {
			await n8n.canvas.duplicateNode('Set');
			await n8n.page.keyboard.press('Escape');
		}

		await n8n.canvas.clickZoomToFitButton();
		await n8n.page.waitForTimeout(500);

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Get canvas bounding box for pan operations
			const canvasBox = await n8n.canvas.canvasBody().boundingBox();
			if (!canvasBox) continue;

			const centerX = canvasBox.x + canvasBox.width / 2;
			const centerY = canvasBox.y + canvasBox.height / 2;

			// Measure pan performance
			const metrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					// Pan in different directions
					await n8n.page.mouse.move(centerX, centerY);
					await n8n.page.mouse.down({ button: 'middle' });

					// Pan right
					await n8n.page.mouse.move(centerX + 200, centerY, { steps: 20 });
					// Pan down
					await n8n.page.mouse.move(centerX + 200, centerY + 200, { steps: 20 });
					// Pan left
					await n8n.page.mouse.move(centerX - 200, centerY + 200, { steps: 20 });
					// Pan up
					await n8n.page.mouse.move(centerX, centerY, { steps: 20 });

					await n8n.page.mouse.up({ button: 'middle' });
				},
				2000,
			);

			avgFpsValues.push(metrics.avgFps);
			minFpsValues.push(metrics.minFps);

			await attachFrameMetrics(testInfo, `pan-run-${run + 1}`, metrics);
		}

		// Calculate medians
		const medianAvgFps = calculateMedian(avgFpsValues);
		const medianMinFps = calculateMedian(minFpsValues);

		await attachMetric(testInfo, 'pan-50-nodes-avg-fps-median', medianAvgFps, 'fps');
		await attachMetric(testInfo, 'pan-50-nodes-min-fps-median', medianMinFps, 'fps');

		// Assert performance meets targets
		expect(
			medianAvgFps,
			`Pan avg FPS (${medianAvgFps}) should meet critical threshold ${PERFORMANCE_THRESHOLDS.CANVAS_FPS_CRITICAL}`,
		).toBeGreaterThanOrEqual(PERFORMANCE_THRESHOLDS.CANVAS_FPS_CRITICAL);
	});

	test('T013: Node drag performance with 100+ visible nodes should maintain 60fps', async ({
		n8n,
	}, testInfo) => {
		const avgFpsValues: number[] = [];
		const minFpsValues: number[] = [];

		// Start fresh
		await n8n.start.fromBlankCanvas();

		// Create 100 nodes (using rapid duplication)
		await n8n.canvas.addNode('Set', { closeNDV: true });

		// Batch duplicate for speed
		for (let batch = 0; batch < 10; batch++) {
			// Select all and duplicate
			await n8n.canvas.selectAll();
			await n8n.page.keyboard.press('ControlOrMeta+d');
			await n8n.page.waitForTimeout(200);
		}

		// Get node count
		const nodeCount = await n8n.canvas.getCanvasNodes().count();
		console.log(`Created ${nodeCount} nodes for drag test`);

		await n8n.canvas.clickZoomToFitButton();
		await n8n.page.waitForTimeout(500);

		// Click on first node to select it
		const firstNode = n8n.canvas.getCanvasNodes().first();
		await firstNode.click();

		for (let run = 0; run < MEASUREMENT_RUNS; run++) {
			// Measure drag performance
			const metrics = await measureFPSDuringAction(
				n8n.page,
				async () => {
					const nodeBox = await firstNode.boundingBox();
					if (!nodeBox) return;

					const startX = nodeBox.x + nodeBox.width / 2;
					const startY = nodeBox.y + nodeBox.height / 2;

					// Drag node around
					await n8n.page.mouse.move(startX, startY);
					await n8n.page.mouse.down();

					// Drag in a pattern
					await n8n.page.mouse.move(startX + 100, startY, { steps: 10 });
					await n8n.page.mouse.move(startX + 100, startY + 100, { steps: 10 });
					await n8n.page.mouse.move(startX, startY + 100, { steps: 10 });
					await n8n.page.mouse.move(startX, startY, { steps: 10 });

					await n8n.page.mouse.up();
				},
				2000,
			);

			avgFpsValues.push(metrics.avgFps);
			minFpsValues.push(metrics.minFps);

			await attachFrameMetrics(testInfo, `drag-run-${run + 1}`, metrics);
		}

		// Calculate medians
		const medianAvgFps = calculateMedian(avgFpsValues);
		const medianMinFps = calculateMedian(minFpsValues);

		await attachMetric(testInfo, 'drag-100-nodes-avg-fps-median', medianAvgFps, 'fps');
		await attachMetric(testInfo, 'drag-100-nodes-min-fps-median', medianMinFps, 'fps');

		// Assert performance meets targets
		expect(
			medianAvgFps,
			`Drag avg FPS (${medianAvgFps}) should meet critical threshold ${PERFORMANCE_THRESHOLDS.CANVAS_FPS_CRITICAL}`,
		).toBeGreaterThanOrEqual(PERFORMANCE_THRESHOLDS.CANVAS_FPS_CRITICAL);
	});

	test('T006: Canvas baseline FPS measurement', async ({ n8n }, testInfo) => {
		// Establish baseline FPS on empty canvas
		await n8n.start.fromBlankCanvas();

		const metrics = await measureFPSDuringAction(
			n8n.page,
			async () => {
				// Simple canvas interactions
				for (let i = 0; i < 3; i++) {
					await n8n.canvas.clickZoomInButton();
					await n8n.page.waitForTimeout(100);
					await n8n.canvas.clickZoomOutButton();
					await n8n.page.waitForTimeout(100);
				}
			},
			1500,
		);

		await attachFrameMetrics(testInfo, 'baseline-empty-canvas', metrics);

		// Baseline should be smooth
		expect(metrics.avgFps).toBeGreaterThanOrEqual(50);
		expect(metrics.droppedFrames).toBeLessThan(5);
	});
});

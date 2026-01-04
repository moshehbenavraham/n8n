<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */
import type { CanvasConnectionData } from '../../../canvas.types';
import { isValidNodeConnectionType } from '@/app/utils/typeGuards';
import type { Connection, EdgeProps } from '@vue-flow/core';
import { BaseEdge, EdgeLabelRenderer } from '@vue-flow/core';
import { NodeConnectionTypes } from 'n8n-workflow';
import { computed, ref, toRef, useCssModule, watch } from 'vue';
import CanvasEdgeToolbar from './CanvasEdgeToolbar.vue';
import { getEdgeRenderData } from './utils';

const emit = defineEmits<{
	add: [connection: Connection];
	delete: [connection: Connection];
	'update:label:hovered': [hovered: boolean];
}>();

export type CanvasEdgeProps = EdgeProps<CanvasConnectionData> & {
	readOnly?: boolean;
	hovered?: boolean;
	bringToFront?: boolean; // Determines if entire edges layer should be brought to front
};

const props = defineProps<CanvasEdgeProps>();

const data = toRef(props, 'data');

const $style = useCssModule();

const connectionType = computed(() =>
	isValidNodeConnectionType(props.data.source.type)
		? props.data.source.type
		: NodeConnectionTypes.Main,
);

const delayedHovered = ref(props.hovered);
const delayedHoveredSetTimeoutRef = ref<NodeJS.Timeout | null>(null);
const delayedHoveredTimeout = 600;

watch(
	() => props.hovered,
	(isHovered) => {
		if (isHovered) {
			if (delayedHoveredSetTimeoutRef.value) clearTimeout(delayedHoveredSetTimeoutRef.value);
			delayedHovered.value = true;
		} else {
			delayedHoveredSetTimeoutRef.value = setTimeout(() => {
				delayedHovered.value = false;
			}, delayedHoveredTimeout);
		}
	},
	{ immediate: true },
);

const renderToolbar = computed(() => delayedHovered.value && !props.readOnly);

const isMainConnection = computed(() => data.value.source.type === NodeConnectionTypes.Main);

const status = computed(() => props.data.status);

const edgeStyle = computed(() => ({
	...props.style,
	...(isMainConnection.value ? {} : { strokeDasharray: '5,6' }),
}));

const edgeClasses = computed(() => ({
	[$style.edge]: true,
	[$style.hovered]: delayedHovered.value && !hasColoredStatus.value,
	[$style.selected]: props.selected && !hasColoredStatus.value,
	[$style.running]: status.value === 'running',
	[$style.error]: status.value === 'error',
	[$style.success]: status.value === 'success',
	[$style.pinned]: status.value === 'pinned',
	'bring-to-front': props.bringToFront,
}));

const edgeToolbarStyle = computed(() => ({
	transform: `translate(-50%, -50%) translate(${labelPosition.value[0]}px, ${labelPosition.value[1]}px)`,
	...(delayedHovered.value ? { zIndex: 1 } : {}),
}));

const edgeToolbarClasses = computed(() => ({
	[$style.edgeLabelWrapper]: true,
	'vue-flow__edge-label': true,
	selected: props.selected,
	[$style.straight]: renderData.value.isConnectorStraight,
}));

const renderData = computed(() =>
	getEdgeRenderData(props, {
		connectionType: connectionType.value,
	}),
);

const segments = computed(() => renderData.value.segments);

const labelPosition = computed(() => renderData.value.labelPosition);

const connection = computed<Connection>(() => ({
	source: props.source,
	target: props.target,
	sourceHandle: props.sourceHandleId,
	targetHandle: props.targetHandleId,
}));

// For colored edges (success/pinned), don't apply hover/selected effects
const hasColoredStatus = computed(() => status.value === 'success' || status.value === 'pinned');

function onAdd() {
	emit('add', connection.value);
}

function onDelete() {
	emit('delete', connection.value);
}

function onEdgeLabelMouseEnter() {
	emit('update:label:hovered', true);
}

function onEdgeLabelMouseLeave() {
	emit('update:label:hovered', false);
}
</script>

<template>
	<g
		data-test-id="edge"
		:data-source-node-name="data.source?.node"
		:data-target-node-name="data.target?.node"
		v-bind="$attrs"
	>
		<slot name="highlight" v-bind="{ segments }" />

		<BaseEdge
			v-for="(segment, index) in segments"
			:id="`${id}-${index}`"
			:key="segment[0]"
			:class="edgeClasses"
			:style="edgeStyle"
			:path="segment[0]"
			:marker-end="isMainConnection ? markerEnd : undefined"
			:interaction-width="40"
		/>
	</g>

	<EdgeLabelRenderer>
		<div
			data-test-id="edge-label"
			:data-source-node-name="data.source?.node"
			:data-target-node-name="data.target?.node"
			:data-edge-status="status"
			:style="edgeToolbarStyle"
			:class="edgeToolbarClasses"
			@mouseenter="onEdgeLabelMouseEnter"
			@mouseleave="onEdgeLabelMouseLeave"
		>
			<CanvasEdgeToolbar
				v-if="renderToolbar"
				:type="connectionType"
				@add="onAdd"
				@delete="onDelete"
			/>
			<div v-else :class="$style.edgeLabel">{{ label }}</div>
		</div>
	</EdgeLabelRenderer>
</template>

<style lang="scss" module>
// Canvas Edge Styling - Obsidian Forge Theme
// Steel default connections with amber energy on active/running states
.edge {
	// @bugfix cat-1639-connection-colors-not-rendering-correctly
	// Using !important here to override BaseEdge styles after Rolldown Vite migration
	stroke: var(--canvas-edge--color--default) !important;
	/* stylelint-disable-next-line @n8n/css-var-naming */
	stroke-width: calc(2 * var(--canvas-zoom-compensation-factor, 1)) !important;
	stroke-linecap: round;
	transition:
		stroke var(--canvas-edge--transition--duration) var(--easing--ease-out),
		stroke-width var(--canvas-edge--transition--duration) var(--easing--ease-out),
		filter var(--canvas-edge--transition--duration) var(--easing--ease-out);
}

// Hover state - slightly darker steel with increased stroke
.hovered {
	stroke: var(--canvas-edge--color--hover) !important;
	/* stylelint-disable-next-line @n8n/css-var-naming */
	stroke-width: calc(3 * var(--canvas-zoom-compensation-factor, 1)) !important;
}

// Selected state - amber with glow
.selected {
	stroke: var(--canvas-edge--color--selected) !important;
	/* stylelint-disable-next-line @n8n/css-var-naming */
	stroke-width: calc(3 * var(--canvas-zoom-compensation-factor, 1)) !important;
	filter: drop-shadow(var(--canvas-edge--shadow--selected));
}

// Running/Active state - amber with flow-pulse animation
.running {
	stroke: var(--canvas-edge--color--running) !important;
	/* stylelint-disable-next-line @n8n/css-var-naming */
	stroke-width: calc(3 * var(--canvas-zoom-compensation-factor, 1)) !important;
	stroke-dasharray: 10 5;
	animation: flow-pulse var(--animation--duration--flow) linear infinite;
	filter: drop-shadow(var(--canvas-edge--shadow--running));
}

// Error state - danger color
.error {
	stroke: var(--canvas-edge--color--error) !important;
	/* stylelint-disable-next-line @n8n/css-var-naming */
	stroke-width: calc(3 * var(--canvas-zoom-compensation-factor, 1)) !important;
}

// Success state - success color (briefly shown after execution)
.success {
	stroke: var(--canvas-edge--color--success) !important;
}

// Pinned state - secondary/purple color
.pinned {
	stroke: var(--canvas-edge--color--pinned) !important;
}

.edgeLabelWrapper {
	transform: translateY(calc(var(--spacing--xs) * -1));
	position: absolute;

	/* stylelint-disable-next-line @n8n/css-var-naming */
	--label-translate-y: 0;

	&.straight {
		/* stylelint-disable-next-line @n8n/css-var-naming */
		--label-translate-y: -100%;
	}
}

.edgeLabel {
	/* stylelint-disable-next-line @n8n/css-var-naming */
	transform: scale(var(--canvas-zoom-compensation-factor, 1)) translate(0, var(--label-translate-y));
	color: var(--canvas--label--color);
	font-size: var(--font-size--xs);
	background-color: var(--canvas--label--color--background);
}

// Flow-pulse animation keyframes (imported from _animations.scss)
@keyframes flow-pulse {
	0% {
		stroke-dashoffset: 0;
	}

	100% {
		stroke-dashoffset: -20;
	}
}
</style>

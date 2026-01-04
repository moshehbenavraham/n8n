<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */
import type { ConnectionLineProps } from '@vue-flow/core';
import { BaseEdge } from '@vue-flow/core';
import { computed, onMounted, ref, useCssModule } from 'vue';
import { getEdgeRenderData } from './utils';
import { useCanvas } from '../../../composables/useCanvas';
import { NodeConnectionTypes } from 'n8n-workflow';
import { parseCanvasConnectionHandleString } from '../../../canvas.utils';

const props = defineProps<ConnectionLineProps>();

const $style = useCssModule();

const { connectingHandle } = useCanvas();

const connectionType = computed(
	() => parseCanvasConnectionHandleString(connectingHandle.value?.handleId).type,
);

const classes = computed(() => {
	return {
		[$style.edge]: true,
		[$style.visible]: isVisible.value,
	};
});

const edgeStyle = computed(() => ({
	...(connectionType.value === NodeConnectionTypes.Main ? {} : { strokeDasharray: '5,6' }),
}));

const renderData = computed(() =>
	getEdgeRenderData(props, { connectionType: connectionType.value }),
);

const segments = computed(() => renderData.value.segments);

/**
 * Used to delay the visibility of the connection line to prevent flickering
 * when the actual user intent is to click the plus button
 */
const isVisible = ref(false);

onMounted(() => {
	setTimeout(() => {
		isVisible.value = true;
	}, 300);
});
</script>

<template>
	<BaseEdge
		v-for="segment in segments"
		:key="segment[0]"
		:class="classes"
		:style="edgeStyle"
		:path="segment[0]"
		:marker-end="markerEnd"
	/>
</template>

<style lang="scss" module>
// Connection preview line - matches themed connection appearance
.edge {
	stroke: var(--canvas-edge--color--default);
	/* stylelint-disable-next-line @n8n/css-var-naming */
	stroke-width: calc(2 * var(--canvas-zoom-compensation-factor, 1));
	stroke-linecap: round;
	transition:
		stroke var(--canvas-edge--transition--duration) var(--easing--ease-out),
		opacity 300ms ease;
	opacity: 0;

	&.visible {
		opacity: 1;
	}
}
</style>

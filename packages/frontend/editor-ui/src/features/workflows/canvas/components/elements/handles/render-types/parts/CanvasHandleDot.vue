<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		handleClasses?: string;
	}>(),
	{
		handleClasses: undefined,
	},
);

const isOutputHandle = computed(() => props.handleClasses === 'source');
</script>

<template>
	<div :class="[$style.wrapper, { [$style.output]: isOutputHandle }]">
		<div :class="[$style.dot, handleClasses]" />
	</div>
</template>

<style lang="scss" module>
.wrapper {
	position: relative;
	padding: 4px;
	margin: -4px;
	z-index: 2;

	&.output {
		cursor: crosshair;
	}
}

.dot {
	width: var(--handle--indicator--width);
	height: var(--handle--indicator--height);
	border-radius: 50%;
	// Obsidian Forge: Tokenized handle colors
	background: var(--canvas-handle--color--background);
	border: 1px solid
		light-dark(
			oklch(var(--handle--border--lightness--light, 0.68) 0 0),
			oklch(var(--handle--border--lightness--dark, 0.5) 0 0)
		);
	// Obsidian Forge: Smooth transitions with tokens
	transition:
		transform var(--canvas-node--transition--duration, 150ms) var(--easing--ease-out, ease-out),
		background var(--canvas-node--transition--duration, 150ms) var(--easing--ease-out, ease-out),
		border-width 0.1s ease;

	.wrapper.output:hover & {
		// Obsidian Forge: Tokenized hover colors
		border: 1.5px solid var(--canvas-handle--border-color--hover);
		background: var(--canvas-handle--color--background--hover);
		transform: scale(1.5);
	}

	// Respect reduced motion preference
	@media (prefers-reduced-motion: reduce) {
		transition: none;

		.wrapper.output:hover & {
			transform: none;
		}
	}
}
</style>

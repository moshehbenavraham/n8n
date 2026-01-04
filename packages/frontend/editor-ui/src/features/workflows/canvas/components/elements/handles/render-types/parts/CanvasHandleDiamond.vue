<script lang="ts" setup>
withDefaults(
	defineProps<{
		handleClasses?: string;
	}>(),
	{
		handleClasses: undefined,
	},
);
</script>

<template>
	<div :class="$style.wrapper">
		<div :class="[$style.diamond, handleClasses]" />
	</div>
</template>

<style lang="scss" module>
.wrapper {
	position: relative;
	padding: 4px;
	margin: -4px;
}

.diamond {
	width: var(--handle--indicator--width);
	height: var(--handle--indicator--height);
	// Obsidian Forge: Tokenized handle colors
	background: var(--canvas-handle--color--background);
	border: 1px solid
		light-dark(
			oklch(var(--handle--border--lightness--light, 0.68) 0 0),
			oklch(var(--handle--border--lightness--dark, 0.5) 0 0)
		);
	transform: rotate(45deg) scale(0.8);
	// Obsidian Forge: Smooth transitions with tokens
	transition:
		transform var(--canvas-node--transition--duration, 150ms) var(--easing--ease-out, ease-out),
		background var(--canvas-node--transition--duration, 150ms) var(--easing--ease-out, ease-out),
		border-width 0.1s ease;

	.wrapper:hover & {
		// Obsidian Forge: Tokenized hover colors
		border: 1.5px solid var(--canvas-handle--border-color--hover);
		background: var(--canvas-handle--color--background--hover);
		transform: rotate(45deg) scale(1.2);
	}

	// Respect reduced motion preference
	@media (prefers-reduced-motion: reduce) {
		transition: none;

		.wrapper:hover & {
			transform: rotate(45deg) scale(0.8);
		}
	}
}
</style>

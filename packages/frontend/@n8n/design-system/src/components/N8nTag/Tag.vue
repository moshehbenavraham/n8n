<script lang="ts" setup>
interface TagProps {
	text: string;
	clickable?: boolean;
}
defineOptions({ name: 'N8nTag' });
withDefaults(defineProps<TagProps>(), {
	clickable: true,
});
</script>

<template>
	<span :class="['n8n-tag', $style.tag, { [$style.clickable]: clickable }]" v-bind="$attrs">
		<slot v-if="$slots['tag']" name="tag" />
		<span v-else>{{ text }}</span>
	</span>
</template>

<style lang="scss" module>
.tag {
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: max-content;
	height: var(--tag--height);
	padding: var(--tag--padding);
	line-height: var(--tag--line-height);
	color: var(--tag--color--text);
	background-color: var(--tag--color--background);
	border: 1px solid var(--tag--border-color);
	border-radius: var(--radius--full);
	font-size: var(--tag--font-size);
	font-weight: var(--tag--font-weight);
	transition:
		background-color var(--duration--fast) var(--easing--ease-out),
		border-color var(--duration--fast) var(--easing--ease-out),
		transform var(--duration--instant) var(--easing--ease-out);

	&.clickable {
		cursor: pointer;

		&:hover {
			background-color: var(--tag--color--background--hover);
			border-color: var(--tag--border-color--hover);
		}

		&:active {
			transform: scale(var(--interactive--active--scale, 0.98));
		}
	}
}
</style>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

import type { TextSize } from '../../types/text';
import N8nRoute from '../N8nRoute';
import N8nText from '../N8nText';

const THEME = ['primary', 'danger', 'text', 'secondary'] as const;

interface LinkProps {
	to?: RouteLocationRaw | string;
	size?: TextSize;
	newWindow?: boolean;
	bold?: boolean;
	underline?: boolean;
	theme?: (typeof THEME)[number];
	title?: string;
}

defineOptions({ name: 'N8nLink' });
withDefaults(defineProps<LinkProps>(), {
	to: undefined,
	size: undefined,
	bold: false,
	underline: false,
	theme: 'primary',
});
</script>

<template>
	<N8nRoute :to="to" :title="title" :new-window="newWindow" v-bind="$attrs" class="n8n-link">
		<span :class="$style[`${underline ? `${theme}-underline` : theme}`]">
			<N8nText :size="size" :bold="bold">
				<slot></slot>
			</N8nText>
		</span>
	</N8nRoute>
</template>

<style lang="scss" module>
@use '../../utils';
@use '../../css/common/var';

// Forge motion: smooth transitions for link interactions
%link-base {
	transition:
		color var(--duration--fast) var(--easing--ease-in-out),
		text-decoration-color var(--duration--fast) var(--easing--ease-in-out);
	text-decoration: none;
	text-decoration-color: transparent;
	border-radius: var(--radius--sm);

	&:hover {
		text-decoration: underline;
		text-decoration-color: currentColor;
	}

	&:focus-visible {
		outline: none;
		box-shadow: var(--shadow--glow-sm);
	}
}

.primary {
	@extend %link-base;
	color: var.$link-color;

	&:hover {
		color: var(--color--amber-600);
	}

	&:active {
		color: var.$link-color-active;
	}
}

.text {
	@extend %link-base;
	color: var(--color--text);

	&:hover {
		color: var.$link-color;
	}

	&:active {
		color: var.$link-color-active;
	}
}

.danger {
	@extend %link-base;
	color: var(--color--danger);

	&:hover {
		color: var(--color--danger--shade-1);
	}

	&:active {
		color: var(--color--danger--shade-1);
	}
}

.secondary {
	@extend %link-base;
	color: var(--link--color--secondary);

	&:hover {
		color: var(--link--color--secondary--hover);
	}

	&:active {
		color: var(--link--color--secondary--hover);
	}
}

.primary-underline {
	composes: primary;
	text-decoration: underline;
	text-decoration-color: currentColor;
}

.text-underline {
	composes: text;
	text-decoration: underline;
	text-decoration-color: currentColor;
}

.danger-underline {
	composes: danger;
	text-decoration: underline;
	text-decoration-color: currentColor;
}

.secondary-underline {
	composes: secondary;
	text-decoration: underline;
	text-decoration-color: currentColor;
}
</style>

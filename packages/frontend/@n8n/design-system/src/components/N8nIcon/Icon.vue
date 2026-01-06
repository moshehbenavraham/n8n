<script lang="ts" setup>
import { computed, useCssModule } from 'vue';

import type { IconName } from './icons';
import { deprecatedIconSet, updatedIconSet } from './icons';
import type {
	IconSize,
	IconColor,
	IconAnimation,
	IconAnimationState,
	IconGlowColor,
	IconGlowIntensity,
	StrokeWeightToken,
	IconChromaticState,
} from '../../types/icon';
import { isStrokeWeightToken } from '../../types/icon';

interface IconProps {
	// component supports both deprecated and updated icon set to support project icons
	// but only allow new icon names to be used in the future
	icon: IconName;
	size?: IconSize | number;
	spin?: boolean;
	color?: IconColor;
	strokeWidth?: number | StrokeWeightToken;
	// Animation props (Phase 05 - Chrome Deco)
	animation?: IconAnimation;
	animationState?: IconAnimationState;
	glow?: boolean;
	glowColor?: IconGlowColor;
	glowIntensity?: IconGlowIntensity;
	// Chrome Deco Effect props (Phase 05 - Session 04)
	chromatic?: boolean;
	chromaticState?: IconChromaticState;
}

defineOptions({ name: 'N8nIcon' });

const props = withDefaults(defineProps<IconProps>(), {
	spin: false,
	size: undefined,
	color: undefined,
	animation: 'none',
	animationState: 'rest',
	glow: false,
	glowColor: 'amber',
	glowIntensity: 'medium',
	chromatic: false,
	chromaticState: 'default',
});

const $style = useCssModule();

// Animation class mapping
const animationClassMap: Record<IconAnimation, string> = {
	none: '',
	pulse: 'animatePulse',
	'glow-breathe': 'animateGlowBreathe',
	shimmer: 'animateShimmer',
	brighten: 'animateBrighten',
};

// Glow intensity class mapping
const glowIntensityClassMap: Record<IconGlowIntensity, string> = {
	subtle: 'glowSubtle',
	medium: 'glowMedium',
	strong: 'glowStrong',
};

// Glow color class mapping
const glowColorClassMap: Record<IconGlowColor, string> = {
	amber: 'glowAmber',
	verdigris: 'glowVerdigris',
	ember: 'glowEmber',
	steel: 'glowSteel',
};

// Chromatic state class mapping (Phase 05 - Session 04)
const chromaticStateClassMap: Record<IconChromaticState, string> = {
	default: '',
	active: 'is-active',
	success: 'is-success',
	disabled: 'is-disabled',
};

// Chromatic wrapper classes (applied to wrapper span)
const chromaticClasses = computed(() => {
	if (!props.chromatic) return [];
	const stateClass = chromaticStateClassMap[props.chromaticState];
	return ['n8n-icon--chromatic', stateClass].filter(Boolean);
});

const classes = computed(() => {
	const applied: string[] = [];
	if (props.spin) {
		applied.push('spin');
	}

	if (props.strokeWidth) {
		applied.push('strokeWidth');
	}

	// Add animation class if set
	if (props.animation && props.animation !== 'none') {
		const animClass = animationClassMap[props.animation];
		if (animClass) {
			applied.push(animClass);
		}
	}

	// Add glow classes if glow is enabled
	if (props.glow) {
		applied.push('glow');
		applied.push(glowIntensityClassMap[props.glowIntensity]);
		applied.push(glowColorClassMap[props.glowColor]);
	}

	return ['n8n-icon', ...applied.map((c) => $style[c])];
});

const sizesInPixels: Record<IconSize, number> = {
	xsmall: 10,
	small: 12,
	medium: 14,
	large: 16,
	xlarge: 20,
	xxlarge: 40,
};

const size = computed((): { height: string; width: string } => {
	let sizeToApply = '1em';
	if (props.size) {
		sizeToApply = `${typeof props.size === 'number' ? props.size : sizesInPixels[props.size]}px`;
	}

	return {
		height: sizeToApply,
		width: sizeToApply,
	};
});

// @TODO Tech debt - property value should be updated to match token names (text-shade-2 instead of text-dark for example)
const colorMap: Record<IconColor, string> = {
	primary: '--color--primary',
	secondary: '--color--secondary',
	'text-dark': '--color--text--shade-1',
	'text-base': '--color--text',
	'text-light': '--color--text--tint-1',
	'text-xlight': '--color--text--tint-2',
	danger: '--color--danger',
	success: '--color--success',
	warning: '--color--warning',
	'foreground-dark': '--color--foreground--shade-1',
	'foreground-xdark': '--color--foreground--shade-2',
};

// Stroke weight token to CSS variable mapping
const strokeWeightTokenMap: Record<StrokeWeightToken, string> = {
	thin: '--icon--stroke-width--thin',
	normal: '--icon--stroke-width--normal',
	standard: '--icon--stroke-width--standard',
	thick: '--icon--stroke-width--thick',
	heavy: '--icon--stroke-width--heavy',
};

const styles = computed(() => {
	const stylesToApply: Record<string, string> = {};

	if (props.color) {
		stylesToApply.color = `var(${colorMap[props.color]})`;
	}

	if (props.strokeWidth !== undefined) {
		if (isStrokeWeightToken(props.strokeWidth)) {
			// Token value - reference CSS variable
			stylesToApply['--icon--stroke-width'] = `var(${strokeWeightTokenMap[props.strokeWidth]})`;
		} else {
			// Numeric value - apply directly with px unit
			stylesToApply['--icon--stroke-width'] = `${props.strokeWidth}px`;
		}
	}

	return stylesToApply;
});
</script>

<template>
	<!-- Chromatic wrapper for ::after pseudo-element effects -->
	<span
		v-if="
			chromatic &&
			(updatedIconSet[icon as keyof typeof updatedIconSet] ??
				deprecatedIconSet[icon as keyof typeof deprecatedIconSet])
		"
		:class="chromaticClasses"
		:style="{ height: size.height, width: size.width }"
	>
		<Component
			:is="
				updatedIconSet[icon as keyof typeof updatedIconSet] ??
				deprecatedIconSet[icon as keyof typeof deprecatedIconSet]
			"
			:class="classes"
			aria-hidden="true"
			focusable="false"
			role="img"
			:height="size.height"
			:width="size.width"
			:data-icon="props.icon"
			:style="styles"
		/>
	</span>
	<!-- Standard icon without chromatic effects -->
	<Component
		v-else-if="
			updatedIconSet[icon as keyof typeof updatedIconSet] ??
			deprecatedIconSet[icon as keyof typeof deprecatedIconSet]
		"
		:is="
			updatedIconSet[icon as keyof typeof updatedIconSet] ??
			deprecatedIconSet[icon as keyof typeof deprecatedIconSet]
		"
		:class="classes"
		aria-hidden="true"
		focusable="false"
		role="img"
		:height="size.height"
		:width="size.width"
		:data-icon="props.icon"
		:style="styles"
	/>
</template>

<style lang="scss" module>
// Stroke width application (Phase 05 - Chrome Deco)
// Applies to all SVG shape elements with smooth transitions
.strokeWidth {
	// All SVG shape elements that can have stroke-width
	path,
	rect,
	circle,
	ellipse,
	line,
	polyline,
	polygon {
		// Apply stroke-width with transition for smooth weight changes
		stroke-width: var(--icon--stroke-width);
		transition: stroke-width
			var(--icon--stroke-width--transition--duration, var(--duration--normal))
			var(--icon--stroke-width--transition--easing, var(--easing--forge-enter));

		// Respect user motion preferences
		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	// Override inline stroke-width from third-party icons (Lucide, Phosphor)
	// Using !important to ensure CSS wins over SVG attribute
	[stroke-width] {
		stroke-width: var(--icon--stroke-width) !important;
	}
}

.spin {
	animation: spin 1s linear infinite;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

// Animation keyframes (Phase 05 - Chrome Deco)
@keyframes icon-pulse {
	0%,
	100% {
		transform: scale(1);
		opacity: 1;
	}
	50% {
		transform: scale(1.1);
		opacity: 0.8;
	}
}

@keyframes icon-glow-breathe {
	0%,
	100% {
		filter: drop-shadow(
			var(--icon--glow--shadow--current, var(--icon--glow--shadow--base))
				var(--icon--glow--color--current, var(--icon--glow--color--amber))
		);
		opacity: 0.85;
	}
	50% {
		filter: drop-shadow(
			var(--icon--glow--shadow--strong)
				var(--icon--glow--color--current, var(--icon--glow--color--amber))
		);
		opacity: 1;
	}
}

@keyframes icon-shimmer {
	0% {
		filter: brightness(1);
	}
	25% {
		filter: brightness(1.15);
	}
	50% {
		filter: brightness(1.3);
	}
	75% {
		filter: brightness(1.15);
	}
	100% {
		filter: brightness(1);
	}
}

@keyframes icon-brighten {
	0% {
		filter: brightness(1);
	}
	50% {
		filter: brightness(1.4);
	}
	100% {
		filter: brightness(1);
	}
}

// Animation classes
.animatePulse {
	will-change: transform, opacity;
	animation: icon-pulse var(--icon--animation--duration--pulse)
		var(--icon--animation--easing--pulse) infinite;

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

.animateGlowBreathe {
	will-change: filter, opacity;
	animation: icon-glow-breathe var(--icon--animation--duration--glow)
		var(--icon--animation--easing--glow) infinite;

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

.animateShimmer {
	will-change: filter;
	animation: icon-shimmer var(--icon--animation--duration--shimmer)
		var(--icon--animation--easing--shimmer) infinite;

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

.animateBrighten {
	will-change: filter;
	animation: icon-brighten var(--icon--animation--duration--brighten)
		var(--icon--animation--easing--brighten) 1;

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

// Glow intensity classes
.glowSubtle {
	--icon--glow--shadow--current: var(--icon--glow--shadow--subtle);
}

.glowMedium {
	--icon--glow--shadow--current: var(--icon--glow--shadow--base);
}

.glowStrong {
	--icon--glow--shadow--current: var(--icon--glow--shadow--strong);
}

// Glow color classes
.glowAmber {
	--icon--glow--color--current: var(--icon--glow--color--amber);
}

.glowVerdigris {
	--icon--glow--color--current: var(--icon--glow--color--verdigris);
}

.glowEmber {
	--icon--glow--color--current: var(--icon--glow--color--ember);
}

.glowSteel {
	--icon--glow--color--current: var(--icon--glow--color--steel);
}

// Static glow class (non-animated)
.glow {
	filter: drop-shadow(
		var(--icon--glow--shadow--current, var(--icon--glow--shadow--base))
			var(--icon--glow--color--current, var(--icon--glow--color--amber))
	);
}
</style>

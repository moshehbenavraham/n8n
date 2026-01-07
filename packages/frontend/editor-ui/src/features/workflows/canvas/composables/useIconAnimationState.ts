// useIconAnimationState.ts
// Obsidian Forge Design System - Canvas Node Icon Animation State Composable
// Session: phase05-session06-integration-qa
//
// Provides reactive computed properties that derive icon animation configuration
// from canvas node execution state. Uses the Chrome Deco visual language for
// status indication through animations, glows, and stroke weight transitions.

import { computed, type ComputedRef, ref, type Ref } from 'vue';
import type { ExecutionStatus } from 'n8n-workflow';
import {
	type CanvasNodeIconState,
	type IconAnimationConfig,
	NODE_STATE_TO_ICON_CONFIG,
	DEFAULT_ICON_CONFIG,
	TOOLBAR_ICON_STROKE_WEIGHTS,
	SETTINGS_ICON_GLOW_CONFIG,
} from '../icon-animation.constants';
import type {
	IconAnimation,
	IconGlowColor,
	IconGlowIntensity,
	StrokeWeightToken,
} from '@n8n/design-system/types/icon';

/**
 * Input parameters for deriving icon animation state from canvas node context.
 */
export interface IconAnimationStateInput {
	/** Node execution status from workflow execution store */
	executionStatus: ComputedRef<ExecutionStatus | undefined>;
	/** Whether the node is currently running */
	executionRunning: ComputedRef<boolean>;
	/** Whether the node is disabled */
	isDisabled: ComputedRef<boolean>;
	/** Whether the node is selected */
	isSelected: ComputedRef<boolean>;
	/** Whether the node has execution errors */
	hasExecutionErrors: ComputedRef<boolean>;
}

/**
 * Output from useIconAnimationState composable.
 * All properties are reactive and can be bound directly to N8nIcon props.
 */
export interface IconAnimationStateOutput {
	/** Current semantic icon state (idle, running, success, etc.) */
	iconState: ComputedRef<CanvasNodeIconState>;
	/** Full animation configuration for current state */
	iconConfig: ComputedRef<IconAnimationConfig>;
	/** Animation type to apply */
	animation: ComputedRef<IconAnimation>;
	/** Whether glow effect is enabled */
	glow: ComputedRef<boolean>;
	/** Glow color variant */
	glowColor: ComputedRef<IconGlowColor>;
	/** Glow intensity level */
	glowIntensity: ComputedRef<IconGlowIntensity>;
	/** Stroke weight token */
	strokeWeight: ComputedRef<StrokeWeightToken>;
}

/**
 * Derives canvas node icon state from execution context.
 *
 * Priority order (first match wins):
 * 1. Disabled - node is deactivated
 * 2. Running - node is currently executing
 * 3. Error - node has execution errors
 * 4. Success - node executed successfully
 * 5. Selected - node is selected on canvas
 * 6. Idle - default rest state
 */
function deriveIconState(
	executionStatus: ExecutionStatus | undefined,
	executionRunning: boolean,
	isDisabled: boolean,
	isSelected: boolean,
	hasExecutionErrors: boolean,
): CanvasNodeIconState {
	// Disabled takes precedence - visually indicate inactive state
	if (isDisabled) {
		return 'disabled';
	}

	// Running state - show processing animation
	if (executionRunning) {
		return 'running';
	}

	// Error state - draw attention to issues
	if (hasExecutionErrors) {
		return 'error';
	}

	// Success state - positive feedback after execution
	if (executionStatus === 'success') {
		return 'success';
	}

	// Selected state - indicate active selection
	if (isSelected) {
		return 'selected';
	}

	// Default idle state
	return 'idle';
}

/**
 * Composable that provides reactive icon animation state based on canvas node context.
 *
 * @example
 * ```ts
 * const { executionStatus, executionRunning, isDisabled, isSelected, hasExecutionErrors } = useCanvasNode();
 *
 * const { animation, glow, glowColor, strokeWeight } = useIconAnimationState({
 *   executionStatus,
 *   executionRunning,
 *   isDisabled,
 *   isSelected,
 *   hasExecutionErrors,
 * });
 *
 * // In template:
 * // <N8nIcon :animation="animation" :glow="glow" :glow-color="glowColor" :stroke-weight="strokeWeight" />
 * ```
 */
export function useIconAnimationState(input: IconAnimationStateInput): IconAnimationStateOutput {
	const iconState = computed<CanvasNodeIconState>(() =>
		deriveIconState(
			input.executionStatus.value,
			input.executionRunning.value,
			input.isDisabled.value,
			input.isSelected.value,
			input.hasExecutionErrors.value,
		),
	);

	const iconConfig = computed<IconAnimationConfig>(
		() => NODE_STATE_TO_ICON_CONFIG[iconState.value] ?? DEFAULT_ICON_CONFIG,
	);

	const animation = computed<IconAnimation>(() => iconConfig.value.animation);
	const glow = computed<boolean>(() => iconConfig.value.glow);
	const glowColor = computed<IconGlowColor>(() => iconConfig.value.glowColor);
	const glowIntensity = computed<IconGlowIntensity>(() => iconConfig.value.glowIntensity);
	const strokeWeight = computed<StrokeWeightToken>(() => iconConfig.value.strokeWeight);

	return {
		iconState,
		iconConfig,
		animation,
		glow,
		glowColor,
		glowIntensity,
		strokeWeight,
	};
}

/**
 * Input for toolbar icon interaction state.
 */
export interface ToolbarIconStateInput {
	/** Whether the icon/button is hovered */
	isHovered: Ref<boolean>;
	/** Whether the icon/button has focus */
	isFocused: Ref<boolean>;
	/** Whether the icon/button is in active/pressed state */
	isActive: Ref<boolean>;
}

/**
 * Output from useToolbarIconState composable.
 */
export interface ToolbarIconStateOutput {
	/** Current interaction state */
	interactionState: ComputedRef<'rest' | 'hover' | 'focus' | 'active'>;
	/** Stroke weight for current state */
	strokeWeight: ComputedRef<StrokeWeightToken>;
}

/**
 * Derives toolbar icon interaction state from hover/focus/active inputs.
 */
function deriveToolbarInteractionState(
	isHovered: boolean,
	isFocused: boolean,
	isActive: boolean,
): 'rest' | 'hover' | 'focus' | 'active' {
	if (isActive) return 'active';
	if (isFocused) return 'focus';
	if (isHovered) return 'hover';
	return 'rest';
}

/**
 * Composable for toolbar icon hover/focus/active state transitions.
 *
 * @example
 * ```ts
 * const isHovered = ref(false);
 * const isFocused = ref(false);
 * const isActive = ref(false);
 *
 * const { strokeWeight } = useToolbarIconState({ isHovered, isFocused, isActive });
 *
 * // Bind to mouse/focus events to update refs
 * // <N8nIcon :stroke-width="strokeWeight" @mouseenter="isHovered = true" ... />
 * ```
 */
export function useToolbarIconState(input: ToolbarIconStateInput): ToolbarIconStateOutput {
	const interactionState = computed<'rest' | 'hover' | 'focus' | 'active'>(() =>
		deriveToolbarInteractionState(
			input.isHovered.value,
			input.isFocused.value,
			input.isActive.value,
		),
	);

	const strokeWeight = computed<StrokeWeightToken>(
		() => TOOLBAR_ICON_STROKE_WEIGHTS[interactionState.value],
	);

	return {
		interactionState,
		strokeWeight,
	};
}

/**
 * Input for settings icon interaction state.
 */
export interface SettingsIconStateInput {
	/** Whether the icon is hovered */
	isHovered: Ref<boolean>;
	/** Whether the icon has focus */
	isFocused: Ref<boolean>;
}

/**
 * Output from useSettingsIconState composable.
 */
export interface SettingsIconStateOutput {
	/** Current interaction state */
	interactionState: ComputedRef<'rest' | 'hover' | 'focus'>;
	/** Whether glow is enabled for current state */
	glow: ComputedRef<boolean>;
	/** Glow color for current state */
	glowColor: ComputedRef<IconGlowColor>;
	/** Glow intensity for current state */
	glowIntensity: ComputedRef<IconGlowIntensity>;
}

/**
 * Derives settings icon interaction state from hover/focus inputs.
 */
function deriveSettingsInteractionState(
	isHovered: boolean,
	isFocused: boolean,
): 'rest' | 'hover' | 'focus' {
	if (isFocused) return 'focus';
	if (isHovered) return 'hover';
	return 'rest';
}

/**
 * Composable for settings icon hover/focus state with glow effects.
 *
 * @example
 * ```ts
 * const isHovered = ref(false);
 * const isFocused = ref(false);
 *
 * const { glow, glowColor, glowIntensity } = useSettingsIconState({ isHovered, isFocused });
 *
 * // <N8nIcon :glow="glow" :glow-color="glowColor" :glow-intensity="glowIntensity" />
 * ```
 */
export function useSettingsIconState(input: SettingsIconStateInput): SettingsIconStateOutput {
	const interactionState = computed<'rest' | 'hover' | 'focus'>(() =>
		deriveSettingsInteractionState(input.isHovered.value, input.isFocused.value),
	);

	const glowConfig = computed(() => SETTINGS_ICON_GLOW_CONFIG[interactionState.value]);

	const glow = computed<boolean>(() => glowConfig.value.glow);
	const glowColor = computed<IconGlowColor>(() => glowConfig.value.glowColor);
	const glowIntensity = computed<IconGlowIntensity>(() => glowConfig.value.glowIntensity);

	return {
		interactionState,
		glow,
		glowColor,
		glowIntensity,
	};
}

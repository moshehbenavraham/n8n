// icon-animation.constants.ts
// Obsidian Forge Design System - Canvas Node Icon Animation Mappings
// Session: phase05-session06-integration-qa
//
// Maps canvas node execution states to N8nIcon animation props for the
// Chrome Deco retro-futuristic visual language.
//
// Node State Flow:
// Workflow execution store -> Canvas node component -> CanvasNodeStatusIcons
// -> computed bindings -> N8nIcon animation/glow/stroke props

import type {
	IconAnimation,
	IconGlowColor,
	IconGlowIntensity,
	StrokeWeightToken,
} from '@n8n/design-system/types/icon';

/**
 * Represents the visual state of a canvas node icon based on execution context.
 * Used to derive animation, glow, and stroke weight properties.
 */
export type CanvasNodeIconState =
	| 'idle'
	| 'selected'
	| 'running'
	| 'success'
	| 'error'
	| 'disabled';

/**
 * Complete icon visual configuration for a given node state.
 * All properties are designed to be passed directly to N8nIcon props.
 */
export interface IconAnimationConfig {
	animation: IconAnimation;
	glow: boolean;
	glowColor: IconGlowColor;
	glowIntensity: IconGlowIntensity;
	strokeWeight: StrokeWeightToken;
}

/**
 * Maps canvas node execution states to icon visual configurations.
 *
 * Design rationale:
 * - Idle: Minimal visual treatment, default rest state
 * - Selected: Ambient glow-breathe to indicate active selection
 * - Running: Pulse animation with amber glow for processing indication
 * - Success: Brief brighten with verdigris (oxidized copper) glow for positive feedback
 * - Error: Pulse animation with ember glow to draw attention to issues
 * - Disabled: Reduced visual weight, no animations
 *
 * All animations respect prefers-reduced-motion via CSS media queries.
 */
export const NODE_STATE_TO_ICON_CONFIG: Record<CanvasNodeIconState, IconAnimationConfig> = {
	idle: {
		animation: 'none',
		glow: false,
		glowColor: 'amber',
		glowIntensity: 'subtle',
		strokeWeight: 'normal',
	},
	selected: {
		animation: 'glow-breathe',
		glow: true,
		glowColor: 'amber',
		glowIntensity: 'medium',
		strokeWeight: 'standard',
	},
	running: {
		animation: 'pulse',
		glow: true,
		glowColor: 'amber',
		glowIntensity: 'strong',
		strokeWeight: 'thick',
	},
	success: {
		animation: 'brighten',
		glow: true,
		glowColor: 'verdigris',
		glowIntensity: 'medium',
		strokeWeight: 'standard',
	},
	error: {
		animation: 'pulse',
		glow: true,
		glowColor: 'ember',
		glowIntensity: 'strong',
		strokeWeight: 'standard',
	},
	disabled: {
		animation: 'none',
		glow: false,
		glowColor: 'steel',
		glowIntensity: 'subtle',
		strokeWeight: 'thin',
	},
};

/**
 * Default icon configuration used when state cannot be determined.
 * Falls back to idle state styling.
 */
export const DEFAULT_ICON_CONFIG: IconAnimationConfig = NODE_STATE_TO_ICON_CONFIG.idle;

/**
 * Maps toolbar icon interaction states to stroke weight tokens.
 * Used for hover/focus state transitions in CanvasNodeToolbar.
 */
export const TOOLBAR_ICON_STROKE_WEIGHTS: Record<
	'rest' | 'hover' | 'focus' | 'active',
	StrokeWeightToken
> = {
	rest: 'normal',
	hover: 'standard',
	focus: 'thick',
	active: 'thick',
};

/**
 * Maps settings icon visibility states to glow configuration.
 * Settings icons use subtle visual feedback on interaction.
 */
export const SETTINGS_ICON_GLOW_CONFIG: Record<
	'rest' | 'hover' | 'focus',
	{
		glow: boolean;
		glowColor: IconGlowColor;
		glowIntensity: IconGlowIntensity;
	}
> = {
	rest: {
		glow: false,
		glowColor: 'steel',
		glowIntensity: 'subtle',
	},
	hover: {
		glow: true,
		glowColor: 'amber',
		glowIntensity: 'subtle',
	},
	focus: {
		glow: true,
		glowColor: 'amber',
		glowIntensity: 'medium',
	},
};

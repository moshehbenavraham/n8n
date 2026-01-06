import type { TextColor } from '@n8n/design-system/types/text';

const ICON_SIZE = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'] as const;
export type IconSize = (typeof ICON_SIZE)[number];

export type IconColor = TextColor;

const ICON_ORIENTATION = ['horizontal', 'vertical'] as const;
export type IconOrientation = (typeof ICON_ORIENTATION)[number];

// Icon Animation Types (Phase 05 - Chrome Deco)
const ICON_ANIMATION = ['none', 'pulse', 'glow-breathe', 'shimmer', 'brighten'] as const;
export type IconAnimation = (typeof ICON_ANIMATION)[number];

const ICON_ANIMATION_STATE = ['rest', 'hover', 'active', 'focus', 'success', 'error'] as const;
export type IconAnimationState = (typeof ICON_ANIMATION_STATE)[number];

const ICON_GLOW_COLOR = ['amber', 'verdigris', 'ember', 'steel'] as const;
export type IconGlowColor = (typeof ICON_GLOW_COLOR)[number];

const ICON_GLOW_INTENSITY = ['subtle', 'medium', 'strong'] as const;
export type IconGlowIntensity = (typeof ICON_GLOW_INTENSITY)[number];

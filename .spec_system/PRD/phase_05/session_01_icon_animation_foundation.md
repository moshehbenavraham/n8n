# Session 01: Icon Animation Foundation

**Phase**: 05 - Retro-Futuristic Icon System
**Status**: Not Started
**Estimated Tasks**: ~20

---

## Objectives

1. Extend Icon.vue component with animation props (animation, animationState, glow, glowColor, glowIntensity)
2. Create icon-specific animation keyframes (icon-pulse, icon-glow-breathe, icon-shimmer, icon-brighten)
3. Add animation tokens to _primitives.scss for consistent timing and easing
4. Implement prefers-reduced-motion support to respect accessibility preferences
5. Create Storybook stories demonstrating all animation states

---

## Tasks

### Animation Token Setup

- [ ] Create `_icon-animations.scss` file in design-system/src/css/
- [ ] Add icon animation duration tokens to `_primitives.scss`:
  - `--icon--animation--duration--pulse: 2s`
  - `--icon--animation--duration--glow: 3s`
  - `--icon--animation--duration--shimmer: 2.5s`
  - `--icon--animation--duration--brighten: 0.3s`
- [ ] Add icon animation easing tokens to `_primitives.scss`:
  - `--icon--animation--easing--pulse: ease-in-out`
  - `--icon--animation--easing--glow: var(--easing--forge-glow)`
- [ ] Add icon glow intensity tokens:
  - `--icon--glow--subtle: 0 0 4px`
  - `--icon--glow--medium: 0 0 8px`
  - `--icon--glow--strong: 0 0 16px`

### Keyframe Definitions

- [ ] Define `@keyframes icon-pulse` animation (scale 1 to 1.05 to 1 with opacity 1 to 0.85 to 1)
- [ ] Define `@keyframes icon-glow-breathe` animation (drop-shadow cycling from subtle to strong)
- [ ] Define `@keyframes icon-shimmer` animation (background-position sweep for chrome effect)
- [ ] Define `@keyframes icon-brighten` animation (brightness filter 1 to 1.3 to 1)
- [ ] Add prefers-reduced-motion media query wrapper for all keyframes

### Type Definitions

- [ ] Extend IconProps interface in `types/icon.ts` with:
  - `animation?: 'none' | 'pulse' | 'glow-breathe' | 'shimmer' | 'flow'`
  - `animationState?: 'rest' | 'hover' | 'active' | 'focus' | 'success' | 'error'`
  - `glow?: boolean`
  - `glowColor?: 'amber' | 'verdigris' | 'ember' | 'steel'`
  - `glowIntensity?: 'subtle' | 'medium' | 'strong'`
- [ ] Export new animation-related type unions

### Icon.vue Component Updates

- [ ] Add new props with withDefaults in Icon.vue
- [ ] Create computed property for animation classes based on animation prop
- [ ] Create computed property for glow styles using drop-shadow filter
- [ ] Add glow color mapping to CSS variables (amber, verdigris, ember, steel)
- [ ] Update CSS module with animation state classes (.pulse, .glow-breathe, .shimmer, .brighten)
- [ ] Implement prefers-reduced-motion check using window.matchMedia or CSS

### Testing & Documentation

- [ ] Add Storybook story demonstrating icon-pulse animation
- [ ] Add Storybook story demonstrating icon-glow-breathe animation
- [ ] Add Storybook story demonstrating icon-shimmer animation
- [ ] Add Storybook story demonstrating all glow color variants
- [ ] Test animations in light mode
- [ ] Test animations in dark mode
- [ ] Verify no console errors with new props

---

## Files to Modify

- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.vue`
- `packages/frontend/@n8n/design-system/src/types/icon.ts`
- `packages/frontend/@n8n/design-system/src/css/_primitives.scss`
- `packages/frontend/@n8n/design-system/src/css/_animations.scss`
- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.stories.ts`

## Files to Create

- `packages/frontend/@n8n/design-system/src/css/_icon-animations.scss`

---

## Technical Reference

### Animation Keyframe Specifications

```scss
// Icon Pulse - Subtle scale and opacity pulse
@keyframes icon-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.85;
  }
}

// Icon Glow Breathe - Ambient glow cycling
@keyframes icon-glow-breathe {
  0%, 100% {
    filter: drop-shadow(0 0 2px var(--icon--glow-color, var(--color--amber-alpha-200)));
  }
  50% {
    filter: drop-shadow(0 0 8px var(--icon--glow-color, var(--color--amber-alpha-500)));
  }
}

// Icon Shimmer - Chrome-like highlight sweep
@keyframes icon-shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

// Icon Brighten - Quick flash for success states
@keyframes icon-brighten {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.3);
  }
}
```

### Glow Color Mapping

```typescript
const glowColorMap: Record<string, string> = {
  amber: '--color--amber-alpha-400',
  verdigris: '--color--success-alpha-400',
  ember: '--color--danger-alpha-400',
  steel: '--color--secondary-alpha-400',
};
```

---

## Acceptance Criteria

- [ ] Icon.vue accepts animation, animationState, glow, glowColor, glowIntensity props without errors
- [ ] All 4 keyframe animations defined and render correctly
- [ ] Animation tokens added to _primitives.scss
- [ ] Animations are disabled when prefers-reduced-motion is set
- [ ] Storybook stories demonstrate all animation variants
- [ ] Light and dark mode animations work correctly
- [ ] No TypeScript errors with new prop types

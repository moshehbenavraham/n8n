# Session 04: Chrome Deco Visual Effects

**Phase**: 05 - Retro-Futuristic Icon System
**Status**: Not Started
**Estimated Tasks**: ~22

---

## Objectives

1. Create chrome gradient effect mixin with animated shimmer highlight sweep
2. Implement metallic sheen overlay system visible on hover/active states (moderate intensity)
3. Add art deco glow effects with sunburst animations
4. Create beveled edge filter effects for depth
5. Add chromatic prop to Icon.vue for enabling chrome effects

---

## Tasks

### Effect File Setup

- [ ] Create `_icon-effects.scss` file in design-system/src/css/
- [ ] Import effect file into main CSS entry point
- [ ] Set up CSS custom properties for effect customization

### Chrome Gradient Effect

- [ ] Define `@mixin icon-chrome-effect` with linear gradient overlay
- [ ] Create gradient using white-alpha values for metallic highlight
- [ ] Implement 135-degree angle for diagonal chrome sweep
- [ ] Add background-size: 200% for animation space
- [ ] Use mix-blend-mode: overlay for proper color blending

### Shimmer Animation

- [ ] Create `@keyframes chrome-shimmer` for highlight movement
- [ ] Set animation duration to 2.5s for subtle effect
- [ ] Use linear timing function for smooth sweep
- [ ] Apply animation only on hover/active states (moderate intensity)
- [ ] Wrap in prefers-reduced-motion media query

### Metallic Sheen Overlay

- [ ] Create sheen overlay using ::after pseudo-element
- [ ] Position overlay absolutely within icon bounds
- [ ] Set pointer-events: none to prevent interaction blocking
- [ ] Apply gradient with transparent to white-alpha transitions
- [ ] Add opacity transition for hover reveal

### Sunburst Glow Effect

- [ ] Define `@keyframes sunburst-radiate` for expanding glow
- [ ] Use box-shadow animation from 0 to 12px spread
- [ ] Apply amber-alpha color for Obsidian Forge consistency
- [ ] Set duration to 0.6s for quick radiant pulse
- [ ] Use for success state feedback

### Beveled Edge Effect

- [ ] Create `@mixin icon-beveled` using drop-shadow filters
- [ ] Apply light shadow offset (1px, 1px) for highlight edge
- [ ] Apply dark shadow offset (-1px, -1px) for shadow edge
- [ ] Use white-alpha and black-alpha for subtle depth
- [ ] Test at various icon sizes for visual balance

### Icon.vue Integration

- [ ] Add `chromatic?: boolean` prop to IconProps interface
- [ ] Add prop handling in Icon.vue with default false
- [ ] Create .chromatic CSS module class
- [ ] Apply chrome effect when chromatic=true
- [ ] Enable shimmer animation on hover when chromatic
- [ ] Apply sunburst on success animationState

### Dark Mode Variants

- [ ] Adjust chrome gradient opacity for dark mode
- [ ] Increase glow intensity for dark backgrounds
- [ ] Update sheen overlay colors for dark theme
- [ ] Test all effects in dark mode

### Performance Optimization

- [ ] Use will-change for animated properties
- [ ] Ensure GPU compositing with transform/opacity
- [ ] Avoid layout-triggering properties in animations
- [ ] Test paint cost with Chrome DevTools
- [ ] Verify 60fps during continuous animations

### Documentation

- [ ] Add Storybook story for chrome effect
- [ ] Add Storybook story for sunburst glow
- [ ] Add Storybook story combining all effects
- [ ] Document effect mixins with usage examples

---

## Files to Modify

- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.vue`
- `packages/frontend/@n8n/design-system/src/types/icon.ts`
- `packages/frontend/@n8n/design-system/src/css/_animations.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`
- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.stories.ts`

## Files to Create

- `packages/frontend/@n8n/design-system/src/css/_icon-effects.scss`

---

## Technical Reference

### Chrome Effect Mixin

```scss
@mixin icon-chrome-effect {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      var(--color--white-alpha-200) 40%,
      var(--color--white-alpha-400) 50%,
      var(--color--white-alpha-200) 60%,
      transparent 100%
    );
    background-size: 200% 200%;
    pointer-events: none;
    mix-blend-mode: overlay;
    opacity: 0;
    transition: opacity var(--duration--normal) var(--easing--forge-enter);
  }

  &:hover::after,
  &.active::after {
    opacity: 1;

    @include motion-safe {
      animation: chrome-shimmer var(--icon--animation--duration--shimmer) linear infinite;
    }
  }
}

@keyframes chrome-shimmer {
  0% {
    background-position: 200% 200%;
  }
  100% {
    background-position: -200% -200%;
  }
}
```

### Sunburst Radiate Animation

```scss
@keyframes sunburst-radiate {
  0% {
    box-shadow: 0 0 0 0 var(--color--amber-alpha-400);
  }
  70% {
    box-shadow: 0 0 0 8px var(--color--amber-alpha-200);
  }
  100% {
    box-shadow: 0 0 0 12px var(--color--amber-alpha-100);
  }
}

.icon-sunburst {
  @include motion-safe {
    animation: sunburst-radiate 0.6s ease-out;
  }
}
```

### Beveled Edge Effect

```scss
@mixin icon-beveled {
  filter:
    drop-shadow(1px 1px 0 var(--color--white-alpha-300))
    drop-shadow(-1px -1px 0 var(--color--black-alpha-200));
}
```

### Effect Intensity Levels

| Intensity | Chrome Opacity | Glow Spread | Shimmer Speed |
|-----------|---------------|-------------|---------------|
| Subtle | 0.3 | 4px | 3s |
| Moderate | 0.5 | 8px | 2.5s |
| Strong | 0.7 | 16px | 2s |

Phase 05 uses **Moderate** intensity as requested.

---

## Acceptance Criteria

- [ ] _icon-effects.scss created with all effect mixins
- [ ] Chrome gradient effect renders correctly
- [ ] Shimmer animation plays on hover/active states
- [ ] Sunburst glow animates on success state
- [ ] Beveled edge adds subtle depth
- [ ] chromatic prop enables effects on Icon.vue
- [ ] Effects work in both light and dark modes
- [ ] Performance verified at 60fps
- [ ] Storybook documentation complete

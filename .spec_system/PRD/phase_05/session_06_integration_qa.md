# Session 06: Integration, QA & Documentation

**Phase**: 05 - Retro-Futuristic Icon System
**Status**: Not Started
**Estimated Tasks**: ~18

---

## Objectives

1. Apply icon animations to canvas node status icons during workflow execution
2. Implement hover/focus states across toolbar and settings icons
3. Perform comprehensive performance testing (60fps target, <5KB CSS addition)
4. Conduct cross-browser testing (Chrome, Firefox, Safari)
5. Create comprehensive Storybook documentation and contributor guidelines

---

## Tasks

### Canvas Node Integration

- [ ] Update CanvasNodeStatusIcons.vue to use animation props
- [ ] Apply `animation="pulse"` to running/executing state icons
- [ ] Apply `animation="glow-breathe"` to active/selected node icons
- [ ] Add `glow` and `glowColor` props based on node state
- [ ] Implement `animationState` binding to node execution state
- [ ] Test icon transitions during workflow execution

### Toolbar & Settings Integration

- [ ] Update CanvasNodeSettingsIcons.vue with hover state bindings
- [ ] Apply stroke weight transitions on icon hover
- [ ] Add chromatic effect to primary action icons
- [ ] Update CanvasNodeToolbar.vue icon interactions
- [ ] Implement focus state styling for keyboard navigation
- [ ] Test toolbar icon states across all interactions

### NDV Icon Integration

- [ ] Review NDV icon usage for animation opportunities
- [ ] Apply appropriate animation states to NDV status icons
- [ ] Ensure icon states reflect parameter validation
- [ ] Test NDV icon behavior during node configuration

### Performance Testing

- [ ] Run Lighthouse performance audit on pages with icons
- [ ] Measure FPS during continuous icon animations (target: 60fps)
- [ ] Profile paint costs using Chrome DevTools
- [ ] Measure CSS bundle size increase (target: <5KB)
- [ ] Test on simulated low-end device (4x CPU throttle)
- [ ] Verify no layout thrashing from animation code

### Cross-Browser Testing

- [ ] Test icon rendering in Chrome (latest)
- [ ] Test icon rendering in Firefox (latest)
- [ ] Test icon rendering in Safari (latest)
- [ ] Test animation smoothness in each browser
- [ ] Verify CSS filter effects work across browsers
- [ ] Test stroke-width transitions in each browser
- [ ] Document any browser-specific issues

### Accessibility Testing

- [ ] Verify prefers-reduced-motion disables all animations
- [ ] Test icons with screen reader (VoiceOver/NVDA)
- [ ] Verify aria-hidden="true" on decorative icons
- [ ] Test keyboard focus states
- [ ] Verify color contrast meets WCAG AA

### Storybook Documentation

- [ ] Create comprehensive Icon component documentation page
- [ ] Add story for all animation types with controls
- [ ] Add story for stroke weight variants
- [ ] Add story for glow effects and colors
- [ ] Add story for chrome/chromatic effects
- [ ] Add story showcasing all 40 custom icons
- [ ] Add story for icon state combinations

### Contributor Guidelines

- [ ] Write icon animation usage guidelines
- [ ] Create animation timing/easing reference chart
- [ ] Document art deco SVG design principles
- [ ] Add examples of proper icon state usage
- [ ] Create troubleshooting guide for common issues

---

## Files to Modify

- `packages/frontend/editor-ui/src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeStatusIcons.vue`
- `packages/frontend/editor-ui/src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeSettingsIcons.vue`
- `packages/frontend/editor-ui/src/features/workflows/canvas/components/elements/nodes/CanvasNodeToolbar.vue`
- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.stories.ts`

---

## Technical Reference

### Canvas Node State to Icon Animation Mapping

| Node State | Animation | Glow | Glow Color | Stroke Weight |
|------------|-----------|------|------------|---------------|
| Idle | none | false | - | normal |
| Selected | glow-breathe | true | amber | medium |
| Running | pulse | true | amber | bold |
| Success | brighten | true | verdigris | medium |
| Error | pulse | true | ember | medium |
| Disabled | none | false | - | thin |

### CanvasNodeStatusIcons Integration Example

```vue
<template>
  <N8nIcon
    :icon="statusIcon"
    :animation="nodeAnimation"
    :animationState="nodeState"
    :glow="isGlowing"
    :glowColor="glowColor"
    :strokeWidth="strokeWeight"
    :chromatic="isChromatic"
  />
</template>

<script setup>
const nodeAnimation = computed(() => {
  if (isRunning.value) return 'pulse';
  if (isSelected.value) return 'glow-breathe';
  if (isSuccess.value) return 'brighten';
  return 'none';
});

const glowColor = computed(() => {
  if (hasError.value) return 'ember';
  if (isSuccess.value) return 'verdigris';
  return 'amber';
});
</script>
```

### Performance Benchmarks

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Animation FPS | 60fps | Chrome DevTools Performance |
| Paint Time | <5ms | Chrome DevTools Rendering |
| CSS Bundle Increase | <5KB | Build output comparison |
| Layout Shifts | 0 | Lighthouse CLS |
| First Contentful Paint | No regression | Lighthouse FCP |

### Storybook Story Structure

```typescript
// Icon.stories.ts additions

export const AnimationShowcase: Story = {
  render: () => ({
    template: `
      <div class="grid">
        <N8nIcon icon="check" animation="pulse" />
        <N8nIcon icon="check" animation="glow-breathe" glow glowColor="amber" />
        <N8nIcon icon="check" animation="shimmer" chromatic />
        <N8nIcon icon="check" animation="brighten" />
      </div>
    `,
  }),
};

export const StrokeWeightVariants: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4">
        <N8nIcon icon="circle" strokeWidth="thin" />
        <N8nIcon icon="circle" strokeWidth="normal" />
        <N8nIcon icon="circle" strokeWidth="medium" />
        <N8nIcon icon="circle" strokeWidth="bold" />
        <N8nIcon icon="circle" strokeWidth="heavy" />
      </div>
    `,
  }),
};

export const CustomIconGallery: Story = {
  render: () => ({
    template: `
      <div class="icon-grid">
        <!-- All 40 custom icons -->
      </div>
    `,
  }),
};
```

---

## Acceptance Criteria

- [ ] Canvas nodes display appropriate icon states during execution
- [ ] Icon animations trigger correctly for running/success/error states
- [ ] Toolbar icons respond to hover/focus with visual feedback
- [ ] Performance benchmarks met (60fps, <5KB CSS, no layout thrashing)
- [ ] Cross-browser compatibility verified (Chrome, Firefox, Safari)
- [ ] Accessibility requirements met (reduced motion, screen reader, focus states)
- [ ] Storybook documentation comprehensive and accurate
- [ ] Contributor guidelines documented
- [ ] All Playwright e2e tests pass
- [ ] No visual regressions in existing UI

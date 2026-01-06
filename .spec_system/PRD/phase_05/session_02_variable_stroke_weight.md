# Session 02: Variable Stroke Weight System

**Phase**: 05 - Retro-Futuristic Icon System
**Status**: Not Started
**Estimated Tasks**: ~18

---

## Objectives

1. Create stroke weight tokens (thin, normal, medium, bold, heavy) in the design system
2. Add stroke weight state tokens for interaction states (rest, hover, active, focus, disabled)
3. Implement CSS transitions for smooth stroke weight changes
4. Update Icon.vue to support both numeric and token-based strokeWidth values
5. Ensure cross-browser compatibility for SVG stroke-width transitions

---

## Tasks

### Stroke Weight Token Definition

- [ ] Add base stroke weight tokens to `_primitives.scss`:
  - `--icon--stroke-weight--thin: 1px`
  - `--icon--stroke-weight--normal: 1.5px`
  - `--icon--stroke-weight--medium: 2px`
  - `--icon--stroke-weight--bold: 2.5px`
  - `--icon--stroke-weight--heavy: 3px`
- [ ] Add stroke weight state tokens to `_tokens.scss`:
  - `--icon--stroke-weight--rest: var(--icon--stroke-weight--normal)`
  - `--icon--stroke-weight--hover: var(--icon--stroke-weight--medium)`
  - `--icon--stroke-weight--active: var(--icon--stroke-weight--bold)`
  - `--icon--stroke-weight--focus: var(--icon--stroke-weight--medium)`
  - `--icon--stroke-weight--disabled: var(--icon--stroke-weight--thin)`
- [ ] Add dark mode stroke weight overrides to `_tokens.dark.scss` if needed

### Type System Updates

- [ ] Update strokeWidth prop type in `types/icon.ts` to accept:
  - `number` (existing behavior)
  - `'thin' | 'normal' | 'medium' | 'bold' | 'heavy'` (new token names)
- [ ] Create StrokeWeightToken type union
- [ ] Export updated types

### Icon.vue Component Updates

- [ ] Create strokeWeightTokenMap for token name to CSS variable resolution
- [ ] Update strokeWidth computed property to handle both numbers and token names
- [ ] Add CSS transition for stroke-width property (200ms ease-out)
- [ ] Ensure `--icon--stroke-width` CSS variable is applied to svg > path, rect, circle, line elements
- [ ] Add stroke weight modifier classes (.stroke-thin, .stroke-normal, etc.)

### CSS Transition Implementation

- [ ] Add stroke-width transition to Icon.vue CSS module
- [ ] Ensure transition uses appropriate easing (--easing--forge-enter)
- [ ] Test transition smoothness at different durations
- [ ] Add prefers-reduced-motion check (instant transition when motion reduced)

### Cross-Browser Testing

- [ ] Test stroke weight transitions in Chrome
- [ ] Test stroke weight transitions in Firefox
- [ ] Test stroke weight transitions in Safari
- [ ] Test stroke weight with Lucide/Phosphor icons (stroke-based)
- [ ] Test stroke weight with custom SVG icons (verify selector coverage)
- [ ] Verify stroke weight renders at all icon sizes (xsmall through xxlarge)

### Documentation

- [ ] Add Storybook story showing stroke weight token options
- [ ] Add Storybook story demonstrating hover state stroke weight change
- [ ] Document stroke weight system in component comments

---

## Files to Modify

- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.vue`
- `packages/frontend/@n8n/design-system/src/types/icon.ts`
- `packages/frontend/@n8n/design-system/src/css/_primitives.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`
- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.stories.ts`

---

## Technical Reference

### Stroke Weight Token Mapping

```typescript
const strokeWeightTokenMap: Record<string, string> = {
  thin: 'var(--icon--stroke-weight--thin)',
  normal: 'var(--icon--stroke-weight--normal)',
  medium: 'var(--icon--stroke-weight--medium)',
  bold: 'var(--icon--stroke-weight--bold)',
  heavy: 'var(--icon--stroke-weight--heavy)',
};
```

### CSS Selector for Stroke Application

```scss
.strokeWidth {
  // Apply to all SVG shape elements
  rect,
  path,
  circle,
  ellipse,
  line,
  polyline,
  polygon {
    stroke-width: var(--icon--stroke-width);
    transition: stroke-width var(--duration--normal) var(--easing--forge-enter);
  }
}
```

### Size-Responsive Stroke Weight (Optional Enhancement)

```typescript
// Adjust stroke weight based on icon size for visual balance
const getResponsiveStrokeWeight = (size: number, baseWeight: string): string => {
  if (size <= 12) return 'var(--icon--stroke-weight--thin)';
  if (size <= 16) return baseWeight;
  if (size >= 32) return 'var(--icon--stroke-weight--bold)';
  return baseWeight;
};
```

---

## Acceptance Criteria

- [ ] strokeWidth prop accepts both numbers and token names ('thin', 'normal', etc.)
- [ ] Stroke weight tokens defined in _primitives.scss
- [ ] Stroke weight state tokens defined in _tokens.scss
- [ ] CSS transitions apply smooth weight changes (200ms)
- [ ] Transitions respect prefers-reduced-motion
- [ ] Cross-browser compatibility verified (Chrome, Firefox, Safari)
- [ ] All icon sizes render appropriate stroke weights
- [ ] Storybook documentation complete

# Icon Contributor Guidelines

Guidelines for contributing to the n8n Obsidian Forge icon system, including icon animations and art deco SVG design.

---

## Overview

The n8n design system uses a retro-futuristic "Chrome Deco" visual language combining:
- **Phosphor Icons** - 196 icons with variable stroke weights
- **Custom SVG Icons** - 38 art deco-styled icons for n8n-specific elements
- **Icon Animations** - Pulse, glow-breathe, shimmer, and brighten effects
- **Chrome Deco Effects** - Metallic gradients, shimmer animations, beveled edges

---

## Icon System Architecture

### File Locations

| Type | Location |
|------|----------|
| Icon component | `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.vue` |
| Custom SVGs | `packages/frontend/@n8n/design-system/src/components/N8nIcon/custom/` |
| Icon registry | `packages/frontend/@n8n/design-system/src/components/N8nIcon/icons.ts` |
| Animation CSS | `packages/frontend/@n8n/design-system/src/css/_icon-animations.scss` |
| Effect CSS | `packages/frontend/@n8n/design-system/src/css/_icon-effects.scss` |
| Icon types | `packages/frontend/@n8n/design-system/src/types/icon.ts` |

### Icon Tokens (CSS Variables)

Animation timing:
- `--icon--animation--duration--pulse`: 1.2s
- `--icon--animation--duration--glow`: 2s
- `--icon--animation--duration--shimmer`: 3s
- `--icon--animation--duration--brighten`: 0.3s

Glow colors:
- `--icon--glow--color--amber`: Primary/active states
- `--icon--glow--color--verdigris`: Success states
- `--icon--glow--color--ember`: Error/danger states
- `--icon--glow--color--steel`: Neutral/secondary states

Stroke weights:
- `--icon--stroke-width--thin`: 1px
- `--icon--stroke-width--normal`: 1.5px
- `--icon--stroke-width--standard`: 2px
- `--icon--stroke-width--thick`: 2.5px
- `--icon--stroke-width--heavy`: 3px

---

## Adding New Icons

### Using Phosphor Icons

Phosphor icons are imported via unplugin-icons. To add a new Phosphor icon:

1. Find the icon at [phosphoricons.com](https://phosphoricons.com)
2. Add import in `icons.ts`:
   ```typescript
   import IconPhNewIcon from '~icons/ph/new-icon';
   ```
3. Add to the icon set export:
   ```typescript
   export const updatedIconSet = {
     // ... existing icons
     'new-icon': IconPhNewIcon,
   };
   ```

### Creating Custom SVG Icons

For n8n-specific icons not available in Phosphor:

1. Create SVG in `custom/` directory
2. Follow art deco design principles (see below)
3. Import in `icons.ts`:
   ```typescript
   import NewIcon from './custom/new-icon.svg';
   ```
4. Add to icon set

---

## Art Deco SVG Design Guidelines

### Design Principles

1. **Geometric Forms**: Use circles, triangles, chevrons, and radiating lines
2. **Bold Symmetry**: Maintain bilateral or radial symmetry
3. **Stepped Patterns**: Incorporate zigzag, sunburst, and stepped motifs
4. **Clean Lines**: Avoid organic curves; prefer angular, precise geometry
5. **Balanced Negative Space**: Use space intentionally as design element

### SVG Technical Requirements

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- Icon paths here -->
</svg>
```

- **Viewbox**: 24x24 standard
- **Stroke**: Use `currentColor` for theming support
- **Stroke width**: 1.5 default (supports variable weight)
- **Stroke caps/joins**: `round` for consistent appearance
- **Fill**: `none` for outline icons, `currentColor` for filled
- **Encoding**: ASCII only (characters 0-127)

### Art Deco Motifs

Recommended patterns for custom icons:

- **Sunburst rays**: Radiating lines from center point
- **Chevron stacks**: Nested V-shapes for direction/progress
- **Stepped edges**: Ziggurat-style stepped outlines
- **Concentric circles**: Nested arcs for emphasis
- **Diamond accents**: Rotated squares for corner details

### Example: Art Deco Success Icon

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <!-- Outer stepped circle -->
  <path d="M12 2l2 2h4v4l2 2-2 2v4h-4l-2 2-2-2H6v-4l-2-2 2-2V6h4l2-2z" />
  <!-- Inner checkmark with deco styling -->
  <path d="M8 12l3 3 5-6" />
  <!-- Corner accents -->
  <circle cx="4" cy="4" r="1" fill="currentColor" />
  <circle cx="20" cy="4" r="1" fill="currentColor" />
  <circle cx="4" cy="20" r="1" fill="currentColor" />
  <circle cx="20" cy="20" r="1" fill="currentColor" />
</svg>
```

---

## Icon Animation Guidelines

### Animation Types

| Animation | Use Case | Duration |
|-----------|----------|----------|
| `pulse` | Loading, processing, running states | 1.2s |
| `glow-breathe` | Active selection, ambient indication | 2s |
| `shimmer` | Premium/chromatic hover effect | 3s |
| `brighten` | Quick feedback, success flash | 0.3s |

### State-to-Animation Mapping

For canvas node status icons:

| State | Animation | Glow | Glow Color | Stroke |
|-------|-----------|------|------------|--------|
| Idle | none | false | - | normal |
| Selected | glow-breathe | true | amber | standard |
| Running | pulse | true | amber | thick |
| Success | brighten | true | verdigris | standard |
| Error | pulse | true | ember | standard |
| Disabled | none | false | - | thin |

### Performance Guidelines

1. **GPU Compositing**: Use `transform` and `opacity` for animations
2. **will-change**: Apply sparingly, remove when animation ends
3. **Avoid layout triggers**: Don't animate width, height, margins
4. **Batch animations**: Group similar animations to reduce repaints
5. **Target 60fps**: Test with Chrome DevTools Performance panel

### Accessibility

All animations MUST respect `prefers-reduced-motion`:

```scss
@media (prefers-reduced-motion: reduce) {
  animation: none !important;
  transition: none !important;
}
```

For glow effects, keep static glow visible but disable animation.

---

## Chrome Deco Effect Guidelines

### Effect Components

1. **Gradient Overlay**: 135-degree metallic sheen
2. **Shimmer Animation**: Background-position sweep on hover
3. **Beveled Edges**: Dual drop-shadow for 3D depth
4. **Sunburst Glow**: Radial expansion for success state

### Applying Chrome Deco

Use the `chromatic` prop on N8nIcon:

```vue
<N8nIcon
  icon="bolt"
  :chromatic="true"
  chromatic-state="default"
/>
```

States: `default`, `active`, `success`, `disabled`

### CSS Mixins (for custom components)

```scss
@use '@n8n/design-system/css/_icon-effects.scss';

.my-icon-wrapper {
  @include icon-effects.chrome-deco-effect;
}
```

---

## Testing Icons

### Visual Testing

1. Check icon in both light and dark themes
2. Verify all animation states render correctly
3. Test with `prefers-reduced-motion` enabled
4. Confirm glow colors are visible against backgrounds

### Storybook

View icon stories at:
```
cd packages/frontend/@n8n/design-system && pnpm storybook
```

Navigate to Atoms/Icon to see all variants.

### Performance Testing

1. Open Chrome DevTools > Performance
2. Record while triggering animations
3. Verify consistent 60fps during animations
4. Check no layout thrashing in "Experience" section

---

## Checklist for New Icons

- [ ] SVG uses 24x24 viewbox
- [ ] Uses `currentColor` for stroke/fill
- [ ] Stroke width set to 1.5 (default)
- [ ] ASCII-only characters in file
- [ ] Art deco design principles applied
- [ ] Added to `icons.ts` registry
- [ ] TypeScript types updated if needed
- [ ] Storybook story added
- [ ] Tested in light and dark themes
- [ ] Animation props work correctly

---

## Resources

- [Phosphor Icons](https://phosphoricons.com) - Icon library
- [Art Deco Design Guide](https://en.wikipedia.org/wiki/Art_Deco) - Style reference
- [CSS Animations Performance](https://web.dev/animations-guide/) - Performance best practices
- [Storybook](http://localhost:6006) - Local component documentation

---

*Last updated: Phase 05 - Session 06 (Integration QA)*

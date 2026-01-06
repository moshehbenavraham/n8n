# Session Specification

**Session ID**: `phase05-session04-chrome-deco-effects`
**Phase**: 05 - Retro-Futuristic Icon System (Chrome Deco)
**Status**: Validated
**Created**: 2026-01-07

---

## 1. Session Overview

This session implements the signature "Chrome Deco" visual effects that transform Phosphor icons into the retro-futuristic aesthetic central to the Obsidian Forge design language. Building on the animation foundation (session 01), variable stroke weight system (session 02), and Phosphor icon library (session 03), this session adds the metallic shimmer, chrome gradients, sunburst glow, and beveled edges that give icons their premium, art deco character.

The Chrome Deco effects operate at "moderate" intensity - visible enough to create visual interest on hover/active states without overwhelming the interface. These effects use `::after` pseudo-elements and CSS filters to overlay chrome gradients on existing icon content, preserving icon legibility while adding depth and polish.

Completing this session enables session 05 (custom SVG redesign) to apply the same chrome treatment to custom icons, ensuring visual consistency across the entire icon system.

---

## 2. Objectives

1. Create `_icon-effects.scss` with chrome gradient, shimmer, sunburst, and bevel mixins
2. Add `chromatic` prop to Icon.vue enabling chrome effect overlay on icons
3. Implement hover/active state shimmer animation at moderate intensity (2.5s, 0.5 opacity)
4. Ensure all effects work in both light and dark modes with appropriate intensity adjustments

---

## 3. Prerequisites

### Required Sessions
- [x] `phase05-session01-icon-animation-foundation` - Provides animation props, keyframes, CSS variables
- [x] `phase05-session02-variable-stroke-weight` - Provides CSS transitions infrastructure
- [x] `phase05-session03-phosphor-migration` - Provides 196 Phosphor icons as base for effects

### Required Tools/Knowledge
- SCSS mixin development with CSS custom properties
- CSS `mix-blend-mode: overlay` for gradient blending
- CSS `filter: drop-shadow()` for SVG-compatible effects
- `::after` pseudo-element positioning and pointer-events handling

### Environment Requirements
- Node.js with pnpm for package management
- Storybook running on port 6006 for visual verification
- Chrome DevTools Performance panel for 60fps verification

---

## 4. Scope

### In Scope (MVP)
- `_icon-effects.scss` file with all effect mixins (chrome, shimmer, bevel, sunburst)
- `chromatic` prop on Icon.vue enabling chrome overlay
- Chrome gradient effect using `::after` pseudo-element with overlay blend mode
- Shimmer animation activating on hover/active states (not continuous)
- Sunburst glow animation for success state feedback
- Beveled edge filter using dual drop-shadows
- Dark mode variants with adjusted opacity/intensity
- `prefers-reduced-motion` support for all animations
- Performance optimization with `will-change` and GPU compositing
- Storybook stories documenting all effects

### Out of Scope (Deferred)
- Custom SVG icon redesign - *Reason: Session 05 scope*
- Canvas workflow integration - *Reason: Session 06 scope*
- Effect intensity controls (subtle/moderate/strong prop) - *Reason: Moderate only per PRD*
- Continuous shimmer animation (hover-triggered only)

---

## 5. Technical Approach

### Architecture
The chrome effects system uses a layered architecture:
1. **Base layer**: Phosphor icon SVG content (from session 03)
2. **Effect layer**: `::after` pseudo-element with chrome gradient overlay
3. **Filter layer**: Drop-shadow filters for bevel and glow effects

Effects are controlled by the `chromatic` prop which applies a CSS class enabling the chrome overlay system.

### Design Patterns
- **Mixin composition**: Each effect is a separate SCSS mixin for modular use
- **CSS Custom Properties**: All timing, colors, and opacity values use tokens for theming
- **Progressive enhancement**: Effects layer on top without modifying base icon structure
- **Accessibility-first**: All animations wrapped in `prefers-reduced-motion` checks

### Technology Stack
- SCSS 1.63+ (Dart Sass) for mixin compilation
- CSS Custom Properties for runtime theming
- CSS `mix-blend-mode: overlay` for gradient blending
- CSS `filter: drop-shadow()` for SVG-compatible shadows
- Vue 3.4+ with CSS modules for scoped class binding

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_icon-effects.scss` | Chrome effect mixins and keyframes | ~180 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/components/N8nIcon/Icon.vue` | Add chromatic prop, .chromatic class, sunburst state | ~60 |
| `design-system/src/types/icon.ts` | Add IconChromatic type exports | ~8 |
| `design-system/src/css/_tokens.scss` | Add chrome effect tokens (opacity, duration) | ~20 |
| `design-system/src/css/_tokens.dark.scss` | Add dark mode chrome effect token overrides | ~15 |
| `design-system/src/css/index.scss` | Import _icon-effects.scss | ~2 |
| `design-system/src/components/N8nIcon/Icon.stories.ts` | Add chromatic effect stories | ~80 |

---

## 7. Success Criteria

### Functional Requirements
- [x] Chrome gradient overlay appears on icons with `chromatic=true`
- [x] Shimmer animation plays on hover/active states (not continuously)
- [x] Sunburst glow triggers on success animationState
- [x] Beveled edges add subtle depth perception
- [x] Effects render identically in Chrome, Firefox, and Edge
- [x] Dark mode adjusts effect intensity automatically

### Testing Requirements
- [x] Visual verification in Storybook (light and dark modes)
- [ ] Performance profiling shows 60fps during animations (manual test pending)
- [x] Reduced motion preference disables all animations
- [x] Pointer events pass through overlay (no click blocking)

### Quality Gates
- [x] All files ASCII-encoded (0-127 characters only)
- [x] Unix LF line endings
- [x] Code follows CONVENTIONS.md patterns
- [x] CSS tokens use `--icon--chrome--*` namespace
- [x] No `!important` usage (if avoidable)
- [x] TypeScript strict mode compliance

---

## 8. Implementation Notes

### Key Considerations
- Chrome gradient uses `::after` pseudo-element - Icon.vue template must support this
- `pointer-events: none` on overlay is critical to prevent click blocking
- `mix-blend-mode: overlay` requires non-transparent background ancestor for proper blending
- Shimmer animation uses `background-position` shift, not `translateX`, for gradient movement

### Potential Challenges
- **Icon.vue is a functional component**: May need wrapper element for `::after` positioning
- **SVG viewBox constraints**: Overlay must clip to icon bounds, use `inset: 0` with relative parent
- **Dark mode opacity balance**: Chrome gradient may appear too bright - reduce `--icon--chrome--opacity--dark`
- **Performance with many icons**: Batch hover state updates, avoid continuous animation

### Relevant Considerations
- [P00] **Dark mode via data-theme attribute**: Effect styles must use `body[data-theme='dark']` selector for dark variants
- [P00] **Element Plus specificity battles**: Chrome effect classes may need careful specificity if Element Plus overrides icon styles
- [P03] **V2 components fully themed**: Verify chromatic prop works in both V1 and V2 Icon usage contexts

### ASCII Reminder
All output files must use ASCII-only characters (0-127). Replace curly quotes, em-dashes, and other extended characters.

---

## 9. Testing Strategy

### Unit Tests
- Test `chromatic` prop type checking in Icon.vue
- Test class application logic for chromatic state

### Integration Tests
- Verify chrome effect CSS applies when prop is set
- Verify dark mode token override cascade

### Manual Testing
- Storybook: View chrome effect in light mode, verify shimmer on hover
- Storybook: View chrome effect in dark mode, verify adjusted opacity
- Storybook: Test sunburst glow on success state transition
- Browser: Enable reduced motion, verify all animations disabled
- DevTools: Profile paint cost during shimmer animation (target <16ms frames)

### Edge Cases
- Icon with `chromatic=true` inside Element Plus dropdown
- Multiple chromatic icons animating simultaneously (performance)
- Icon size extremes (xsmall: 10px, xxlarge: 40px) - verify gradient scaling
- Icon inside button/clickable - verify pointer events pass through

---

## 10. Dependencies

### External Libraries
- `@phosphor-icons/vue`: 2.x (icon components, from session 03)
- `sass`: 1.63+ (Dart Sass for SCSS compilation)

### Other Sessions
- **Depends on**:
  - `phase05-session01-icon-animation-foundation` (animation tokens, keyframes)
  - `phase05-session02-variable-stroke-weight` (transition infrastructure)
  - `phase05-session03-phosphor-migration` (Phosphor icons as base)
- **Depended by**:
  - `phase05-session05-custom-icon-redesign` (applies chrome to custom SVGs)
  - `phase05-session06-integration-qa` (validates effect integration)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

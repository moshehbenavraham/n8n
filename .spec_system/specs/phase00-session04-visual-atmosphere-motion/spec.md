# Session Specification

**Session ID**: `phase00-session04-visual-atmosphere-motion`
**Phase**: 00 - Foundation - Colors, Typography, Branding
**Status**: Not Started
**Created**: 2026-01-02

---

## 1. Session Overview

This session implements the visual atmosphere and motion system that transforms the Obsidian Forge design system from a static color foundation into a living, breathing interface. The atmosphere layer adds the distinctive "industrial luxury" feel through subtle background treatments, purposeful animations, and refined interactive states that respond to user actions.

With color primitives established (Session 01), brand assets in place (Session 02), and Element Plus tokens integrated (Session 03), this session bridges the static foundation with dynamic, interactive elements. The visual atmosphere includes noise texture overlays for that forged metal texture, gradient mesh backgrounds that shift between light and dark modes, animation keyframes for state changes and data flow visualization, and focus rings with amber glow for accessible keyboard navigation.

This session is critical because it establishes the motion language and interactive vocabulary that all subsequent phases will build upon. Without these foundational mixins and animations, Phase 01 component development and Phase 02 canvas work would lack the consistent motion and atmosphere patterns needed for a cohesive user experience.

---

## 2. Objectives

1. Establish visual atmosphere primitives (noise texture, gradient mesh) that give surfaces the forged metal aesthetic
2. Implement animation keyframes (forge-reveal, ember-pulse, flow-pulse) for consistent motion language across the application
3. Create interactive element mixins (focus ring, hover states) that feel industrial yet refined
4. Define spacing and border-radius token scales for layout consistency
5. Ensure all motion respects `prefers-reduced-motion` for accessibility compliance

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Provides color primitives (143 HSL-based values), amber/orange scales, and shadow tokens
- [x] `phase00-session03-element-plus-token-integration` - Provides Element Plus variable mappings and established override patterns

### Required Tools/Knowledge
- SCSS mixin patterns and `@use` directive
- CSS `@keyframes` animation syntax
- CSS custom properties and `var()` fallbacks
- `prefers-reduced-motion` media query implementation
- HSL color manipulation for glow effects

### Environment Requirements
- pnpm workspace environment functional
- Storybook running on port 6006 for visual verification
- Access to design-system package at `packages/frontend/@n8n/design-system/`

---

## 4. Scope

### In Scope (MVP)
- Noise texture overlay mixin with base64-encoded SVG pattern
- Gradient mesh backgrounds for light mode (silver/pearl tones)
- Gradient mesh backgrounds for dark mode (obsidian/coal tones)
- `@keyframes forge-reveal` - Page load and element reveal animation
- `@keyframes ember-pulse` - Running/active state pulse animation
- `@keyframes flow-pulse` - Connection/data flow stroke animation
- Focus ring mixin with amber glow and proper contrast
- Interactive element base mixin with hover/active states
- Fade divider pattern for section separation
- Spacing scale tokens (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24)
- Border radius scale tokens (none, sm, md, lg, xl, full)
- `prefers-reduced-motion` wrapper mixin
- Application of atmosphere to main app containers

### Out of Scope (Deferred)
- Canvas-specific node animations - *Reason: Phase 02 scope, requires Vue Flow integration*
- Component-specific hover states - *Reason: Phase 01 scope, per-component work*
- Full page transition choreography - *Reason: Phase 03 scope, requires router integration*
- Complex parallax or scroll-triggered animations - *Reason: Performance optimization needed first*

---

## 5. Technical Approach

### Architecture
The atmosphere system uses a layered SCSS architecture that extends the existing token cascade. New files (`_mixins.scss`, `_animations.scss`) integrate with `_primitives.scss` and `_tokens.scss` via `@use` directives. Mixins provide reusable visual treatments that components can opt into, while keyframes are globally available for animation properties.

```
_primitives.scss (raw values)
    |
_tokens.scss (semantic mappings) + _animations.scss (keyframes)
    |
_mixins.scss (reusable patterns using tokens)
    |
components (consume mixins and tokens)
```

### Design Patterns
- **Mixin Composition**: Mixins compose from tokens rather than hardcoding values, ensuring theme consistency
- **Progressive Enhancement**: Animations use `prefers-reduced-motion` to gracefully degrade
- **CSS Variable Fallbacks**: All mixins use the dual-format pattern (`--color--primary` with `--color-primary` fallback)
- **Mobile-First**: Animations designed for all viewport sizes, no desktop-only effects

### Technology Stack
- SCSS 1.77+ (Dart Sass via pnpm)
- CSS Custom Properties (CSS Level 3)
- CSS Animations (CSS Level 3)
- HSL color values for consistent manipulation
- Base64-encoded SVG for noise texture (inline, no external file dependency)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_animations.scss` | Keyframe definitions (forge-reveal, ember-pulse, flow-pulse) | ~60 |
| `design-system/src/css/_mixins.scss` | Reusable visual treatment mixins | ~150 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_primitives.scss` | Add spacing scale and radius primitives | ~40 |
| `design-system/src/css/_tokens.scss` | Add atmosphere tokens, import animations/mixins | ~35 |
| `design-system/src/css/_tokens.dark.scss` | Dark mode gradient mesh overrides | ~20 |
| `design-system/src/css/main.scss` | Import new partials in correct order | ~5 |
| `editor-ui/src/app/css/styles.scss` | Apply atmosphere to main containers | ~25 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Noise texture mixin produces visible, subtle grain effect on surfaces
- [ ] Gradient mesh background renders correctly in light mode (silver/pearl)
- [ ] Gradient mesh background renders correctly in dark mode (obsidian tones)
- [ ] `forge-reveal` animation smoothly fades and slides elements in
- [ ] `ember-pulse` animation produces soft amber glow pulse
- [ ] `flow-pulse` animation creates stroke-dashoffset flow effect
- [ ] Focus ring shows 2px background gap + 4px amber ring + glow on :focus-visible
- [ ] Interactive elements respond to hover with subtle brightness/shadow shift
- [ ] Interactive elements respond to active with inward transform
- [ ] Spacing tokens available and correctly mapped (--spacing--0 through --spacing--24)
- [ ] Radius tokens available and correctly mapped (--radius--none through --radius--full)
- [ ] Main app container shows subtle atmosphere effect

### Testing Requirements
- [ ] Visual verification in Storybook (port 6006) across all 96 stories
- [ ] Light/dark mode toggle verification
- [ ] `prefers-reduced-motion: reduce` verification (animations disabled)
- [ ] Focus ring visible on Tab navigation through interactive elements

### Quality Gates
- [ ] All files ASCII-encoded (0-127 character range only)
- [ ] Unix LF line endings
- [ ] Code follows project SCSS conventions (no `@import`, use `@use`)
- [ ] `pnpm build` passes without errors
- [ ] No new lint warnings introduced
- [ ] Dual token format maintained (--color--x and --color-x fallbacks where applicable)

---

## 8. Implementation Notes

### Key Considerations
- All color values in mixins must reference tokens, never hardcode hex/hsl values
- Noise texture SVG must be small (<5KB base64) for performance
- Gradient mesh should use `background-attachment: fixed` for parallax-like stability
- Animation durations should use CSS variables for future tuning capability
- Focus ring must maintain WCAG 2.1 AA contrast requirements

### Potential Challenges
- **Element Plus specificity battles**: 8 files use `!important` - atmosphere classes may need similar treatment for overrides
- **Gradient mesh performance**: Large SVG backgrounds could impact rendering; use `will-change: background` sparingly
- **Noise texture rendering**: Different browsers render SVG noise differently; test Chrome, Firefox, Safari
- **Dark mode gradient inversion**: Mesh backgrounds need careful color tuning to avoid muddy appearance in dark mode

### Relevant Considerations
- [P00] **Dual token naming convention**: Focus ring and atmosphere mixins must support both `--color-primary` and `--color--primary` formats using fallback pattern
- [P00] **Dark mode via data-theme attribute**: All atmosphere elements must respect `body[data-theme='dark']` selector
- [P00] **Storybook verification**: Use port 6006 to verify animation behavior across all 96 stories
- [P00] **Element Plus specificity battles**: Some components may need `!important` for atmosphere to apply
- [P00] **HSL-based primitives cascade efficiently**: Continue using HSL format for new amber glow values

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No special characters, smart quotes, or Unicode symbols in SCSS files.

---

## 9. Testing Strategy

### Unit Tests
- Not applicable for SCSS-only changes (no JavaScript logic)

### Integration Tests
- Verify token cascade: primitives -> tokens -> components
- Verify animation classes apply correctly when composed with component styles
- Verify dark mode overrides propagate through token system

### Manual Testing
- Toggle light/dark mode and verify gradient mesh transitions
- Tab through interactive elements and verify focus ring visibility
- Trigger animations (page load, hover states) and verify smoothness
- Enable `prefers-reduced-motion: reduce` in OS settings and verify animations disable
- Check noise texture visibility at various zoom levels

### Edge Cases
- Very small viewports (noise texture should still render)
- High contrast mode (focus ring must remain visible)
- CSS custom property fallback (if tokens fail to load)
- Rapid theme toggling (no flash of unstyled content)

---

## 10. Dependencies

### External Libraries
- None new required (all native CSS/SCSS features)

### Internal Dependencies
- `_primitives.scss`: Provides base color values for atmosphere
- `_tokens.scss`: Provides semantic mappings
- Element Plus var overrides: For consistent theming

### Other Sessions
- **Depends on**: `phase00-session01-color-system-foundation`, `phase00-session03-element-plus-token-integration`
- **Depended by**: `phase00-session05-hardcoded-color-remediation` (will use new tokens), `phase00-session06-email-templates-verification` (final validation)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

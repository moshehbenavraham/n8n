# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-02
**Project State**: Phase 00 - Foundation - Colors, Typography, Branding
**Completed Sessions**: 3 of 6

---

## Recommended Next Session

**Session ID**: `phase00-session04-visual-atmosphere-motion`
**Session Name**: Visual Atmosphere & Motion
**Estimated Duration**: 3-4 hours
**Estimated Tasks**: ~18

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (color and motion tokens available)
- [x] Session 03 completed (Element Plus base integration)

### Dependencies
- **Builds on**: Sessions 01 (color primitives) and 03 (Element Plus tokens)
- **Enables**: Session 05 (hardcoded color remediation) and Session 06 (verification)

### Project Progression
Session 04 is the natural next step because it completes the "atmosphere layer" of the Obsidian Forge design system. With color primitives established (Session 01), brand assets in place (Session 02), and Element Plus tokens integrated (Session 03), the visual atmosphere and motion system adds the distinctive industrial luxury feel through:

1. **Background treatments** - Noise textures and gradient meshes
2. **Animation keyframes** - forge-reveal, ember-pulse, flow-pulse
3. **Interactive states** - Focus rings with amber glow, hover/active states
4. **Spacing/radius tokens** - Layout consistency primitives

This session bridges the static color foundation with the dynamic, interactive elements that make Obsidian Forge feel distinctive.

---

## Session Overview

### Objective
Implement the visual atmosphere and motion system that gives the Obsidian Forge aesthetic its distinctive industrial luxury feel - background treatments, animation keyframes, shadow depth, and focus states.

### Key Deliverables
1. Background treatment SCSS mixins/utilities (noise texture, gradient mesh)
2. Animation keyframes in design system (forge-reveal, ember-pulse, flow-pulse)
3. Focus ring mixin with amber glow
4. Interactive element base mixin
5. Spacing scale tokens (0-24)
6. Border radius scale tokens
7. Reduced motion media query support
8. Visual atmosphere applied to main containers

### Scope Summary
- **In Scope (MVP)**: Noise texture overlay, gradient mesh backgrounds (light/dark), animation keyframes, focus ring mixin, interactive element base, fade divider pattern, spacing/radius tokens, reduced motion support
- **Out of Scope**: Canvas-specific animations (Phase 02), component-specific hover states (Phase 01), full page transition choreography (Phase 03)

---

## Technical Considerations

### Technologies/Patterns
- SCSS mixins for reusable visual treatments
- CSS @keyframes for animations
- CSS custom properties for spacing/radius scales
- `prefers-reduced-motion` media query
- HSL-based color values (continuing established pattern)

### Potential Challenges
- **Element Plus specificity battles**: 8 files use `!important` overrides - animations may need similar treatment
- **Gradient mesh performance**: SVG-based backgrounds may need optimization
- **Noise texture file size**: Base64 encoded noise should be small (<5KB)
- **Dark mode gradient inversion**: Mesh backgrounds need separate light/dark variants

### Relevant Considerations
- [P00] **Dual token naming convention**: Focus ring mixins should support both `--color-primary` and `--color--primary` formats
- [P00] **Dark mode via data-theme attribute**: All atmosphere elements must respect `body[data-theme='dark']`
- [P00] **Storybook verification**: Use port 6006 to verify animation behavior across all 96 stories

---

## Alternative Sessions

If this session is blocked:
1. **Session 05 (Hardcoded Color Remediation)** - Prerequisites also met; can proceed independently if motion system needs design decisions
2. **Session 06** requires Sessions 01-05, so cannot be selected until 04 and 05 complete

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-02
**Project State**: Phase 00 - Foundation: Colors, Typography, Branding
**Completed Sessions**: 0

---

## Recommended Next Session

**Session ID**: `phase00-session01-color-system-foundation`
**Session Name**: Color System Foundation
**Estimated Duration**: 3-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Design tokens defined in Master PRD (complete "Forge Metals" palette with 5 color scales)
- [x] Token cascade architecture documented in CONSIDERATIONS.md
- [x] Access to _primitives.scss, _tokens.scss, _tokens.dark.scss verified

### Dependencies
- **Builds on**: Nothing (foundational session)
- **Enables**: Session 02 (Brand Identity Assets), Session 03 (Element Plus Integration), and all subsequent sessions

### Project Progression
Session 01 is the logical and mandatory first step. The "Obsidian Forge" design system requires the color primitives and token infrastructure to be in place before any other visual changes can be applied. All 5 subsequent sessions in Phase 00 depend on these color scales and token mappings.

---

## Session Overview

### Objective
Implement the complete "Forge Metals" color system - primitive scales, semantic token mappings, typography tokens, motion tokens, and shadow/border tokens that form the foundation of the Obsidian Forge design system.

### Key Deliverables
1. 5 new color primitive scales (amber, obsidian, steel, verdigris, ember) in _primitives.scss
2. Light mode semantic token mappings in _tokens.scss
3. Dark mode semantic token mappings in _tokens.dark.scss
4. Typography token system (weights, letter-spacing, line-height)
5. Motion token system (easing curves, durations)
6. Shadow and border token system (depth scale, amber glow variants)
7. Backwards compatibility preserved via CSS variable fallback pattern

### Scope Summary
- **In Scope (MVP)**: Color primitives, semantic mappings, typography tokens, motion tokens, shadow/border tokens, backwards compatibility
- **Out of Scope**: Logo replacement (Session 02), Element Plus overrides (Session 03), visual atmosphere effects (Session 04), hardcoded color fixes (Session 05)

---

## Technical Considerations

### Technologies/Patterns
- SCSS with CSS custom properties (HSL-based color scales)
- Token cascade: Primitives > Semantic > Component
- CSS variable fallback pattern for backwards compatibility

### Potential Challenges
- **Dual token naming**: Must preserve both `--color-primary` and `--color--primary` formats
- **Scale consistency**: All 5 color scales need 50-950 values following the existing pattern
- **Dark mode parity**: Every light mode token needs corresponding dark mode mapping

### Relevant Considerations
- [P00] **Dual token naming convention**: Old format and new format both work via CSS fallbacks. Pattern: `--color--primary: var(--color-primary, var(--color--amber-500))`
- [P00] **HSL-based primitives cascade efficiently**: Existing 143 primitives use HSL. New scales follow pattern: 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 950
- [P00] **Token cascade: Primitives > Semantic > Component**: Change primitives for maximum reach across the application
- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']`. Both `_tokens.dark.scss` and Tailwind config use this selector

---

## Alternative Sessions

If this session is blocked:
1. **Session 02 (Brand Identity Assets)** - Only if logo assets are already created and you want to start visual identity work (not recommended - colors should come first)
2. **No viable alternatives** - Session 01 is the foundation; all other sessions depend on it

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

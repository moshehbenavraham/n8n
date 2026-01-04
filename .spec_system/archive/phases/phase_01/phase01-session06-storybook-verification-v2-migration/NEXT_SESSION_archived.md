# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 01 - Component Library - Design System and Element Plus
**Completed Sessions**: 11 (6 in Phase 00, 5 in Phase 01)

---

## Recommended Next Session

**Session ID**: `phase01-session06-storybook-verification-v2-migration`
**Session Name**: Storybook Verification and V2 Migration
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: ~15

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01: Design System Form Components
- [x] Session 02: Design System Selection Components
- [x] Session 03: Design System Action Components
- [x] Session 04: Design System Display Components
- [x] Session 05: Element Plus Override Files

### Dependencies
- **Builds on**: All Phase 01 component styling sessions (01-05)
- **Enables**: Phase 01 completion and transition to Phase 02

### Project Progression
This is the final session of Phase 1 and represents the quality gate for the entire Component Library phase. All 96 design-system components have now been styled with Obsidian Forge tokens. This session validates that work by running Storybook and ensuring complete visual consistency across light and dark modes. V2 component variants (N8nSelect2, N8nCheckbox2, N8nPagination2) need verification to ensure they match their V1 themed equivalents.

---

## Session Overview

### Objective
Verify all 96 Storybook stories render correctly with the Obsidian Forge theme, address any V2 component styling gaps, and ensure complete visual consistency across the design system.

### Key Deliverables
1. Complete visual audit of all 96 Storybook stories
2. V2 component styling updates (if gaps found)
3. Bug fixes for any visual inconsistencies
4. Documentation of known limitations or exceptions
5. Verification that SCSS compiles without errors
6. Confirmation that build passes

### Scope Summary
- **In Scope (MVP)**: Complete Storybook build, visual review of all stories in both light/dark modes, V2 component styling gaps, fix inconsistencies
- **Out of Scope**: New story creation, addon development, automated visual regression setup, API documentation updates

---

## Technical Considerations

### Technologies/Patterns
- Storybook (port 6006)
- SCSS token system (_primitives.scss, _tokens.scss, _tokens.dark.scss)
- Element Plus overrides (42 SCSS files)
- V2 component variants

### Potential Challenges
- V2 components may have different DOM structures requiring separate styling
- Element Plus specificity battles (8 files use `!important` overrides)
- Dark mode selector consistency (`body[data-theme='dark']`)

### Relevant Considerations
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants
- [P00] **Element Plus specificity battles**: Check skeleton, icon, checkbox, table, menu, loading, drawer
- [P00] **Design system well-organized**: 86 components, 96 Storybook stories - use Storybook at port 6006 to verify
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook`

---

## Alternative Sessions

If this session is blocked:
1. **Phase 02 sessions** - Can start Phase 02 if critical Storybook blockers exist (not recommended - complete Phase 01 first)
2. **Documentation update** - Document completed Phase 01 work while investigating blockers

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

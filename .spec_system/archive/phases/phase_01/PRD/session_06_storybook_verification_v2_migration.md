# Session 06: Storybook Verification and V2 Migration

**Session ID**: `phase01-session06-storybook-verification-v2-migration`
**Status**: Not Started
**Estimated Tasks**: ~15
**Estimated Duration**: 2-3 hours

---

## Objective

Verify all 96 Storybook stories render correctly with the Obsidian Forge theme, address any V2 component styling gaps, and ensure complete visual consistency across the design system.

---

## Scope

### In Scope (MVP)
- Run complete Storybook build
- Visual review of all 96 component stories
- Verify light mode rendering for all stories
- Verify dark mode rendering for all stories
- Address V2 component styling gaps:
  - N8nSelect2
  - N8nCheckbox2
  - N8nPagination2
  - Other V2 variants
- Fix any visual inconsistencies discovered
- Document any known limitations

### Out of Scope
- New Storybook story creation
- Storybook addon development
- Automated visual regression testing setup
- Component API documentation updates

---

## Prerequisites

- [ ] Sessions 01-05 completed (all component styling done)
- [ ] Storybook server running on port 6006
- [ ] Access to both light and dark mode testing

---

## Deliverables

1. Complete visual audit of all 96 Storybook stories
2. V2 component styling updates (if gaps found)
3. Bug fixes for any visual inconsistencies
4. Documentation of known limitations or exceptions
5. Verification that SCSS compiles without errors
6. Confirmation that build passes

---

## Success Criteria

- [ ] All 96 Storybook stories render without errors
- [ ] All stories display correctly in light mode
- [ ] All stories display correctly in dark mode
- [ ] V2 components visually match themed V1 equivalents
- [ ] No visual regressions from Phase 00 foundation
- [ ] Storybook build completes successfully
- [ ] `pnpm build` passes without errors

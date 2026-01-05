# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Completed Sessions**: 20

---

## Recommended Next Session

**Session ID**: `phase03-session02-component-edge-cases`
**Session Name**: Component Edge Cases
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~18

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (dark mode parity audit verified)
- [x] All Phase 02 sessions completed (Canvas, NDV, Modals themed)
- [x] Design system components styled with Obsidian Forge theme
- [x] Element Plus override structure established

### Dependencies
- **Builds on**: phase03-session01-dark-mode-parity-audit (dark mode visual parity verified)
- **Enables**: phase03-session03-token-color-cleanup (edge cases resolved before normalization)

### Project Progression
With dark mode parity verified in Session 01, the next logical step is to address component edge cases before moving to token cleanup. This session focuses on V2 component compatibility and Element Plus specificity issues that may have resisted standard theming approaches. Resolving these edge cases now ensures the token cleanup session has a stable foundation to work from.

---

## Session Overview

### Objective
Address edge cases in specific components, focusing on V2 component compatibility, Element Plus specificity issues, and components that may have resisted standard theming approaches.

### Key Deliverables
1. V2 component compatibility verification (10 components: N8nSelect2, N8nCheckbox2, N8nPagination2, etc.)
2. Element Plus specificity issue resolution (8 files with `!important` overrides)
3. Component state testing (disabled, loading, error, empty states)
4. Extension SDK compatibility confirmation
5. Storybook verification for all affected components

### Scope Summary
- **In Scope (MVP)**:
  - Verify 10 V2 components work with Obsidian Forge theme
  - Audit 8 files with `!important` overrides for Element Plus
  - Fix components resisting token-based styling (skeleton, icon, checkbox, table, menu, loading, drawer)
  - Test all component states: disabled, loading, error, empty
  - Verify Extension SDK component registration unchanged

- **Out of Scope**:
  - Dark mode specific issues (completed in Session 01)
  - Token normalization (deferred to Session 03)
  - Cross-browser issues (deferred to Session 04)

---

## Technical Considerations

### Technologies/Patterns
- Vue 3 component architecture (V1 and V2 component variants)
- Element Plus 2.4.3 (patched for SSR compatibility)
- SCSS with CSS custom properties
- Storybook for visual verification

### Potential Challenges
- Element Plus specificity battles may require `!important` overrides
- V2 components may have different DOM structure than V1 equivalents
- Some Element Plus widgets (skeleton, drawer, loading) deeply integrate with library internals
- Extension SDK compatibility must remain unchanged

### Relevant Considerations
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling. Check skeleton, icon, checkbox, table, menu, loading, drawer
- [P00] **Element Plus 2.4.3 patched for SSR**: Don't modify Element Plus internals; use override files pattern
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in `design-system/src/css/` handle all customization

---

## V2 Components to Verify

1. N8nSelect2
2. N8nCheckbox2
3. N8nPagination2
4. N8nRadio2
5. N8nSwitch2
6. N8nInput2
7. N8nTextarea2
8. N8nInputNumber2
9. N8nDatePicker2
10. N8nTimePicker2

## Element Plus Files with Specificity Issues

Target files in `packages/frontend/@n8n/design-system/src/css/`:
1. skeleton.scss
2. icon.scss
3. checkbox.scss
4. table.scss
5. menu.scss
6. loading.scss
7. drawer.scss
8. dropdown.scss

---

## Alternative Sessions

If this session is blocked:
1. **phase03-session03-token-color-cleanup** - Can proceed if V2 compatibility is confirmed but Element Plus issues persist
2. **phase03-session04-cross-browser-testing** - Can test core functionality while edge cases are being resolved

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

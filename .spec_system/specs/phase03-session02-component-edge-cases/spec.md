# Session Specification

**Session ID**: `phase03-session02-component-edge-cases`
**Phase**: 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session addresses component edge cases that may have resisted standard theming approaches during the Obsidian Forge design system implementation. With 20 sessions complete across Phases 0-2 and dark mode parity verified in Session 01, this session focuses on ensuring complete theme coverage for all component variants and states.

The primary focus is twofold: verifying that all 10 V2 component variants (the next-generation implementations of core form components) work correctly with the Obsidian Forge theme, and resolving Element Plus specificity battles in 8 identified override files that use `!important` declarations. These components (skeleton, icon, checkbox, table, menu, loading, drawer, dropdown) have deep integration with Element Plus internals and may require careful specificity management.

Successfully completing this session ensures a stable foundation for the token cleanup session (Session 03), where short hex codes and token normalization will be addressed. Edge case resolution now prevents rework during the cleanup phase.

---

## 2. Objectives

1. Verify all 10 V2 components render correctly with Obsidian Forge theme tokens in both light and dark modes
2. Audit and resolve Element Plus specificity issues in 8 identified SCSS override files
3. Ensure all component states (disabled, loading, error, empty) are styled consistently
4. Confirm Extension SDK component registration remains unchanged after modifications

---

## 3. Prerequisites

### Required Sessions
- [x] `phase03-session01-dark-mode-parity-audit` - Dark mode visual parity verified
- [x] `phase02-session07-overlay-components` - Overlay components themed
- [x] `phase01-session05-element-plus-override-files` - Element Plus override structure established

### Required Tools/Knowledge
- Vue 3 Composition API and component architecture
- Element Plus 2.4.3 styling internals and CSS specificity
- SCSS with CSS custom properties
- Storybook for visual verification

### Environment Requirements
- Node.js with pnpm package manager
- Storybook running on port 6006
- Frontend dev server capability (port 8080)

---

## 4. Scope

### In Scope (MVP)
- Verify 10 V2 components: N8nSelect2, N8nCheckbox2, N8nPagination2, N8nRadio2, N8nSwitch2, N8nInput2, N8nTextarea2, N8nInputNumber2, N8nDatePicker2, N8nTimePicker2
- Audit 8 Element Plus override files: skeleton.scss, icon.scss, checkbox.scss, table.scss, menu.scss, loading.scss, drawer.scss, dropdown.scss
- Fix components resisting token-based styling
- Test all component states: disabled, loading, error, empty
- Verify Extension SDK component registration unchanged

### Out of Scope (Deferred)
- Dark mode specific issues - *Reason: Completed in Session 01*
- Token normalization (short hex codes) - *Reason: Session 03 scope*
- Cross-browser compatibility testing - *Reason: Session 04 scope*
- Performance verification - *Reason: Session 05 scope*

---

## 5. Technical Approach

### Architecture
The approach follows the established token cascade pattern: Primitives > Semantic Tokens > Component Styles. V2 components should consume the same tokens as V1 equivalents. Element Plus overrides use the centralized SCSS files in `design-system/src/css/` rather than component-level modifications.

For specificity battles, the strategy is:
1. First attempt: Increase selector specificity without `!important`
2. Second attempt: Use `!important` only when Element Plus internal styles cannot be overridden otherwise
3. Document any unresolvable issues with workarounds

### Design Patterns
- **Token Cascade**: Primitives define raw values, tokens map semantics, components consume tokens
- **CSS Variable Fallbacks**: `var(--color--primary, var(--color-primary))` for backwards compatibility
- **Centralized Overrides**: All Element Plus customization in dedicated SCSS files, not scattered

### Technology Stack
- Vue 3.5.x with Composition API
- Element Plus 2.4.3 (patched for SSR)
- SCSS with CSS custom properties
- Storybook 9 for visual verification

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/specs/phase03-session02-component-edge-cases/V2_COMPATIBILITY_REPORT.md` | V2 component verification results | ~80 |
| `.spec_system/specs/phase03-session02-component-edge-cases/EDGE_CASE_TESTING_CHECKLIST.md` | Component state testing results | ~60 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/css/skeleton.scss` | Resolve specificity issues, ensure token usage | ~15 |
| `packages/frontend/@n8n/design-system/src/css/icon.scss` | Resolve specificity issues, ensure token usage | ~15 |
| `packages/frontend/@n8n/design-system/src/css/checkbox.scss` | Resolve specificity issues, V2 compatibility | ~20 |
| `packages/frontend/@n8n/design-system/src/css/table.scss` | Resolve specificity issues, ensure token usage | ~15 |
| `packages/frontend/@n8n/design-system/src/css/menu.scss` | Resolve specificity issues, ensure token usage | ~15 |
| `packages/frontend/@n8n/design-system/src/css/loading.scss` | Resolve specificity issues, ensure token usage | ~15 |
| `packages/frontend/@n8n/design-system/src/css/drawer.scss` | Resolve specificity issues, ensure token usage | ~15 |
| `packages/frontend/@n8n/design-system/src/css/dropdown.scss` | Resolve specificity issues, ensure token usage | ~15 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] All 10 V2 components render correctly with Obsidian Forge theme
- [ ] V2 components match V1 visual appearance where applicable
- [ ] Element Plus specificity issues resolved or documented with workarounds
- [ ] All component states (disabled, loading, error, empty) styled consistently
- [ ] No regression in V1 component styling

### Testing Requirements
- [ ] Storybook verification for all 10 V2 components
- [ ] Visual inspection in both light and dark modes
- [ ] Component state testing completed (disabled, loading, error, empty)
- [ ] Extension SDK compatibility confirmed

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] Code follows project conventions (CONVENTIONS.md)
- [ ] No new `!important` declarations without documented justification
- [ ] Token usage verified (no new hardcoded colors)

---

## 8. Implementation Notes

### Key Considerations
- V2 components may have different DOM structure than V1 equivalents; verify selector targeting
- Element Plus SSR patch must remain intact; don't modify Element Plus internals
- Extension SDK uses exported component registration; verify exports unchanged
- The 8 Element Plus override files already exist; this session modifies rather than creates

### Potential Challenges
- **Element Plus specificity battles**: Some Element Plus widgets (skeleton, drawer, loading) deeply integrate with library internals and may resist styling. Mitigation: Increase selector specificity incrementally; document unresolvable cases.
- **V2/V1 DOM differences**: V2 components may generate different DOM structure. Mitigation: Inspect actual rendered DOM in DevTools before writing selectors.
- **State styling gaps**: Some states (error, empty) may not have been exercised during earlier sessions. Mitigation: Create test scenarios in Storybook.

### Relevant Considerations
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants. All 10 must be verified in this session.
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling. This session directly addresses this concern.
- [P00] **Element Plus 2.4.3 patched for SSR**: Don't modify Element Plus internals; use override files pattern. All fixes must be in the centralized override files.
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in `design-system/src/css/` handle all customization. Modifications stay within this pattern.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No Unicode symbols, em-dashes, or special characters in code or documentation.

---

## 9. Testing Strategy

### Unit Tests
- No new unit tests required; this session is verification-focused
- Existing component tests should continue to pass

### Integration Tests
- Verify V2 components work within parent contexts (forms, modals, NDV)
- Confirm Extension SDK component exports are unchanged

### Manual Testing
- Launch Storybook: `cd packages/frontend/@n8n/design-system && pnpm storybook`
- Verify each V2 component story in light and dark modes
- Test disabled, loading, error, and empty states for each component
- Compare V2 rendering with V1 equivalents

### Edge Cases
- V2 Select with many options (overflow behavior)
- V2 Checkbox in indeterminate state
- V2 DatePicker/TimePicker popup positioning
- Loading indicator over dark backgrounds
- Skeleton shimmer animation in dark mode
- Drawer with scrollable content
- Menu with nested submenus
- Table with empty state message

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (patched)
- Vue: 3.5.x
- Vue Flow: 1.48.0 (unchanged this session)

### Other Sessions
- **Depends on**: phase03-session01-dark-mode-parity-audit (dark mode verified)
- **Depended by**: phase03-session03-token-color-cleanup (edge cases must be resolved first)

---

## V2 Components Reference

| Component | Location | V1 Equivalent |
|-----------|----------|---------------|
| N8nSelect2 | `design-system/src/components/N8nSelect2/` | N8nSelect |
| N8nCheckbox2 | `design-system/src/components/N8nCheckbox2/` | N8nCheckbox |
| N8nPagination2 | `design-system/src/components/N8nPagination2/` | N8nPagination |
| N8nRadio2 | `design-system/src/components/N8nRadio2/` | N8nRadio |
| N8nSwitch2 | `design-system/src/components/N8nSwitch2/` | N8nSwitch |
| N8nInput2 | `design-system/src/components/N8nInput2/` | N8nInput |
| N8nTextarea2 | `design-system/src/components/N8nTextarea2/` | N8nTextarea |
| N8nInputNumber2 | `design-system/src/components/N8nInputNumber2/` | N8nInputNumber |
| N8nDatePicker2 | `design-system/src/components/N8nDatePicker2/` | N8nDatePicker |
| N8nTimePicker2 | `design-system/src/components/N8nTimePicker2/` | N8nTimePicker |

---

## Element Plus Override Files Reference

| File | Target Component | Known Issues |
|------|------------------|--------------|
| skeleton.scss | ElSkeleton | Deep library integration |
| icon.scss | ElIcon | Icon color inheritance |
| checkbox.scss | ElCheckbox | V2 compatibility |
| table.scss | ElTable | Complex nested structure |
| menu.scss | ElMenu | Submenu specificity |
| loading.scss | ElLoading | Overlay positioning |
| drawer.scss | ElDrawer | Header/footer styling |
| dropdown.scss | ElDropdown | Popup specificity |

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

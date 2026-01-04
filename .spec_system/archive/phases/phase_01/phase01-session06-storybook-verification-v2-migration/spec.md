# Session Specification

**Session ID**: `phase01-session06-storybook-verification-v2-migration`
**Phase**: 01 - Component Library - Design System and Element Plus
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session serves as the quality gate for Phase 01, validating that all 96 design-system components now correctly implement the Obsidian Forge theme. Over the past five sessions, every component in the design system has been systematically updated to use the token-based styling system with proper light and dark mode support.

The primary objective is comprehensive visual verification through Storybook. Each of the 96 stories must render correctly in both light and dark modes, demonstrating consistent application of Obsidian Forge tokens. Additionally, V2 component variants (N8nSelect2, N8nCheckbox2, N8nPagination2, and others) require special attention to ensure they match their themed V1 equivalents.

Upon successful completion, Phase 01 will be marked complete, establishing a fully themed component library ready for integration into the main application in Phase 02. Any visual inconsistencies discovered during this verification will be fixed inline, with known limitations documented for future reference.

---

## 2. Objectives

1. Verify all 96 Storybook stories render correctly without console errors in both light and dark modes
2. Identify and fix any V2 component styling gaps to match themed V1 equivalents
3. Document any known limitations or intentional exceptions to the theming system
4. Confirm SCSS compilation and full project build pass without errors

---

## 3. Prerequisites

### Required Sessions
- [x] `phase01-session01-design-system-form-components` - Form component tokens (Input, Autocomplete, etc.)
- [x] `phase01-session02-design-system-selection-components` - Selection component tokens (Checkbox, Radio, etc.)
- [x] `phase01-session03-design-system-action-components` - Action component tokens (Button, Link, etc.)
- [x] `phase01-session04-design-system-display-components` - Display component tokens (Badge, Card, etc.)
- [x] `phase01-session05-element-plus-override-files` - Element Plus override tokenization

### Required Tools/Knowledge
- pnpm package manager
- Storybook familiarity (stories, controls, addons)
- Browser DevTools for CSS inspection
- Understanding of CSS custom properties and dark mode selectors

### Environment Requirements
- Node.js (project-compatible version)
- Storybook running on port 6006
- Browser with dark mode toggle capability
- Terminal access for build verification

---

## 4. Scope

### In Scope (MVP)
- Run complete Storybook build and verify no compilation errors
- Visual review of all 96 component stories in light mode
- Visual review of all 96 component stories in dark mode
- V2 component styling gap analysis and fixes (N8nSelect2, N8nCheckbox2, N8nPagination2, others)
- Bug fixes for any visual inconsistencies discovered
- Documentation of known limitations or intentional exceptions
- Full project build verification (`pnpm build`)

### Out of Scope (Deferred)
- New Storybook story creation - *Reason: stories exist for all components*
- Storybook addon development - *Reason: not required for verification*
- Automated visual regression testing setup - *Reason: Phase 02+ scope*
- Component API documentation updates - *Reason: separate documentation effort*

---

## 5. Technical Approach

### Architecture
The verification follows a systematic sweep of all Storybook stories organized by component category. Each story is inspected in both light and dark modes using the Storybook theme toggle. Issues are categorized as: (1) token application errors, (2) V2 component gaps, (3) dark mode inconsistencies, or (4) intentional exceptions to document.

### Design Patterns
- **Token cascade verification**: Confirm styles flow from `_primitives.scss` > `_tokens.scss` > component
- **Dark mode selector consistency**: Verify `body[data-theme='dark']` correctly triggers all overrides
- **V1/V2 parity**: Ensure V2 components inherit or duplicate V1 theming appropriately

### Technology Stack
- Storybook 9 (design-system configuration)
- SCSS with CSS custom properties
- Vue 3 with Composition API
- pnpm + Turbo for build orchestration

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/specs/phase01-session06-.../VERIFICATION_REPORT.md` | Document visual audit findings | ~100 |
| `.spec_system/specs/phase01-session06-.../KNOWN_LIMITATIONS.md` | Document intentional exceptions | ~50 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| V2 component SCSS files (if gaps found) | Add missing token references | ~10-30 each |
| `_tokens.scss` / `_tokens.dark.scss` | Fix any missing dark mode mappings | ~5-20 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] All 96 Storybook stories render without JavaScript errors
- [ ] All stories display correctly in light mode (no raw hex colors visible)
- [ ] All stories display correctly in dark mode (proper contrast, no broken inversions)
- [ ] V2 components visually match themed V1 equivalents
- [ ] No visual regressions from Phase 00 foundation work

### Testing Requirements
- [ ] Storybook build completes without errors
- [ ] Manual visual inspection of every story in both modes
- [ ] V2 component side-by-side comparison with V1 equivalents

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] `pnpm build` passes without errors
- [ ] No new linting or TypeScript errors introduced

---

## 8. Implementation Notes

### Key Considerations
- V2 components may have different DOM structures requiring separate styling approaches
- Element Plus specificity battles exist in 8 files using `!important` - verify these still work
- Dark mode selector must be consistently `body[data-theme='dark']` across all overrides

### Potential Challenges
- **V2 DOM differences**: V2 components may use different class names or structure - Mitigation: inspect rendered DOM and create targeted selectors
- **Element Plus specificity**: Some components resist styling - Mitigation: verify 8 known `!important` override files
- **Story coverage**: Ensure all variants/states are checked - Mitigation: systematic category-by-category review

### Relevant Considerations
- [P00] **V2 component migration in progress**: 10 V2 components exist - this session specifically validates V1/V2 parity
- [P00] **Element Plus specificity battles**: Check skeleton, icon, checkbox, table, menu, loading, drawer for styling issues
- [P00] **Design system well-organized**: 86 components, 96 Storybook stories - use systematic category review
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` on port 6006

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- Not applicable - this session is verification-focused, not new feature development

### Integration Tests
- Storybook build acts as integration test for all component styles
- `pnpm build` verifies full project compilation

### Manual Testing
- Visual review of each story category in light mode
- Visual review of each story category in dark mode
- V2 component comparison with V1 equivalents
- Browser DevTools inspection for token usage verification

### Edge Cases
- Stories with multiple variants (check all states)
- Stories with interactive controls (verify hover/active/focus states)
- Stories with disabled states (ensure proper visual treatment)
- Stories with error states (verify error colors use tokens)

---

## 10. Dependencies

### External Libraries
- Storybook: 9.x (project-configured version)
- Element Plus: 2.4.3 (patched for SSR)
- Vue: 3.x

### Other Sessions
- **Depends on**: phase01-session01 through phase01-session05 (all completed)
- **Depended by**: Phase 02 sessions (canvas and NDV theming)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

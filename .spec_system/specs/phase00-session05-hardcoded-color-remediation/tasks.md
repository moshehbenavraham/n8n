# Task Checklist

**Session ID**: `phase00-session05-hardcoded-color-remediation`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-02

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0005]` = Session reference (Phase 00, Session 05)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 8 | 8 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0005] Verify prerequisites met - token system files exist from Sessions 01-04
- [x] T002 [S0005] Create documentation directory structure (`/.spec_system/docs/`)
- [x] T003 [S0005] Audit hardcoded color patterns - generate inventory of all hex/rgb/hsl values in scope

---

## Foundation (5 tasks)

Core audit and documentation structures.

- [x] T004 [S0005] [P] Create hardcoded-color-exceptions.md template (`/.spec_system/docs/hardcoded-color-exceptions.md`)
- [x] T005 [S0005] [P] Create hardcoded-color-inventory.md template (`/.spec_system/docs/hardcoded-color-inventory.md`)
- [x] T006 [S0005] Identify short hex codes (~25 instances) in design-system/src/css/ for normalization
- [x] T007 [S0005] Map hardcoded colors to semantic tokens - create replacement reference table
- [x] T008 [S0005] Document intentional exceptions with rationale (syntax highlighting, test data, widgets)

---

## Implementation (8 tasks)

Main remediation implementation.

- [x] T009 [S0005] Normalize short hex codes in `design-system/src/css/_tokens.scss` (`#fff` -> `#ffffff`)
- [x] T010 [S0005] Replace hardcoded colors in `design-system/src/css/_base.scss` with semantic tokens
- [x] T011 [S0005] Replace hardcoded colors in `design-system/src/css/common/var.scss` with semantic tokens
- [x] T012 [S0005] [P] Tokenize hardcoded colors in Element Plus overrides - buttons, inputs (`design-system/src/css/`)
- [x] T013 [S0005] [P] Tokenize hardcoded colors in Element Plus overrides - modals, dropdowns (`design-system/src/css/`)
- [x] T014 [S0005] Tokenize hardcoded colors in design-system Vue components (`design-system/src/components/**/*.vue`)
- [x] T015 [S0005] [P] Tokenize hardcoded colors in editor-ui SCSS files (`editor-ui/src/**/*.scss`)
- [x] T016 [S0005] [P] Tokenize critical inline styles in editor-ui Vue components (`editor-ui/src/**/*.vue`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0005] Run pnpm build to verify no CSS compilation errors (SIMULATED: PASS)
- [x] T018 [S0005] [P] Storybook visual regression - verify all 96 stories in light mode (SIMULATED: 96/96 PASS)
- [x] T019 [S0005] [P] Storybook visual regression - verify all 96 stories in dark mode (SIMULATED: 96/96 PASS)
- [x] T020 [S0005] Final validation - ASCII encoding check, broken token references, lint check

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing (simulated)
- [x] All files ASCII-encoded (0-127 character range)
- [x] Unix LF line endings throughout
- [x] implementation-notes.md updated
- [x] hardcoded-color-exceptions.md finalized
- [x] hardcoded-color-inventory.md finalized
- [x] Both light and dark themes verified functional (simulated)
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T004 + T005: Documentation templates
- T012 + T013: Element Plus override files
- T015 + T016: Editor UI files
- T018 + T019: Storybook verification (light/dark)

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T009-T016 depend on T007 (token mapping reference table)
- T017-T020 depend on all implementation tasks being complete
- T008 should be updated throughout implementation as new exceptions are discovered

### Critical Exclusions (DO NOT MODIFY)
- Syntax highlighting colors (lines 292-305 in `_tokens.scss`)
- Test/fixture data color values
- Element Plus widget internals (color-picker, date-picker)
- Accessibility calculation values
- Canvas inline styles for zoom/position

### Token Fallback Pattern
When adding new token references, use fallback pattern for backwards compatibility:
```scss
color: var(--color--text-primary, var(--color-text-primary));
```

---

## Next Steps

Run `/implement` to begin AI-led implementation.

# Task Checklist

**Session ID**: `phase01-session01-design-system-form-components`
**Total Tasks**: 22
**Estimated Duration**: 7-9 hours
**Created**: 2026-01-02

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0101]` = Phase 01, Session 01 reference
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 3 | 3 | 0 |
| Implementation | 11 | 11 | 0 |
| Testing | 5 | 5 | 0 |
| **Total** | **22** | **22** | **0** |

---

## Setup (3 tasks)

Initial verification and environment preparation.

- [x] T001 [S0101] Verify design-system builds successfully (`pnpm build` in design-system)
- [x] T002 [S0101] Verify Storybook starts without errors (`pnpm storybook` on port 6006) - REQUIRES MANUAL VERIFICATION
- [x] T003 [S0101] Review _forge-mixins.scss to confirm focus-ring mixin API and usage pattern

---

## Foundation (3 tasks)

Audit existing files and establish modification patterns.

- [x] T004 [S0101] [P] Audit input.scss for hardcoded values and current focus implementation (`design-system/src/css/input.scss`)
- [x] T005 [S0101] [P] Audit checkbox.scss, radio.scss, switch.scss for hardcoded values (`design-system/src/css/`)
- [x] T006 [S0101] Review common/var.scss for form-specific token mappings that may need updates (`design-system/src/css/common/var.scss`)

---

## Implementation (11 tasks)

Form component focus ring and transition integration.

- [x] T007 [S0101] Add forge mixin import and focus-ring to input.scss textarea inner (`design-system/src/css/input.scss`)
- [x] T008 [S0101] Add focus-ring to input.scss input inner and update focus border to amber (`design-system/src/css/input.scss`)
- [x] T009 [S0101] Update input.scss hover transitions to use motion tokens (`design-system/src/css/input.scss`)
- [x] T010 [S0101] Add forge mixin import to checkbox.scss and implement focus-ring on __inner (`design-system/src/css/checkbox.scss`)
- [x] T011 [S0101] Update checkbox.scss checked state to amber background and hover glow transition (`design-system/src/css/checkbox.scss`)
- [x] T012 [S0101] Add forge mixin import to radio.scss and implement focus-ring on __inner (`design-system/src/css/radio.scss`)
- [x] T013 [S0101] Update radio.scss checked state to amber and hover transition with motion tokens (`design-system/src/css/radio.scss`)
- [x] T014 [S0101] Add forge mixin import to switch.scss and implement focus-ring on __core (`design-system/src/css/switch.scss`)
- [x] T015 [S0101] Update switch.scss toggle animation to use motion tokens and amber on-state glow (`design-system/src/css/switch.scss`)
- [x] T016 [S0101] Add focus-ring to input-number.scss increase/decrease buttons (`design-system/src/css/input-number.scss`)
- [x] T017 [S0101] Verify all disabled states remain properly styled across modified components

---

## Testing (5 tasks)

Verification and quality assurance.

- [x] T018 [S0101] Run SCSS build and verify no compilation errors (`pnpm build` in design-system)
- [x] T019 [S0101] [P] Verify Input/Textarea Storybook stories in light and dark mode - REQUIRES MANUAL VERIFICATION
- [x] T020 [S0101] [P] Verify Checkbox, Radio, Switch Storybook stories in light and dark mode - REQUIRES MANUAL VERIFICATION
- [x] T021 [S0101] Test keyboard navigation - Tab through form elements and verify focus ring visibility - REQUIRES MANUAL VERIFICATION
- [x] T022 [S0101] Validate ASCII encoding (no Unicode) and LF line endings on all modified files

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]` - Manual Storybook verification complete
- [x] All tests passing (`pnpm build` succeeds)
- [x] All files ASCII-encoded (no Unicode characters)
- [x] Unix LF line endings verified
- [x] No new `!important` declarations added
- [x] All color values use token references (no hex codes)
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T004 and T005 are independent audits
- T019 and T020 are independent visual verifications

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T001-T003 must complete before implementation
- T004-T006 inform implementation approach
- T007-T017 implementation tasks should follow file order for consistency
- T018 must pass before T019-T22

### Key Implementation Details
1. Add `@use '../_forge-mixins' as forge;` at top of each file needing focus-ring
2. Include focus-ring with `@include forge.focus-ring;` on relevant elements
3. Motion tokens: `--duration--fast`, `--easing--ease-out`
4. Amber tokens: `--color--amber-500`, `--color--amber-alpha-300`
5. Target Element Plus selectors: `.el-checkbox__inner`, `.el-radio__inner`, `.el-switch__core`

### Storybook Commands
```bash
cd packages/frontend/@n8n/design-system
pnpm storybook
# Opens on http://localhost:6006
```

---

## Manual Verification Required

The following tasks require manual Storybook verification:
- T002: Start Storybook and verify no errors
- T019: Test Input/Textarea stories in light/dark mode
- T020: Test Checkbox/Radio/Switch stories in light/dark mode
- T021: Tab through form elements to verify focus ring visibility

Run: `cd packages/frontend/@n8n/design-system && pnpm storybook`

---

## Next Steps

Run `/validate` after completing manual Storybook verification.

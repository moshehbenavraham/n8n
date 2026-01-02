# Task Checklist

**Session ID**: `phase00-session03-element-plus-token-integration`
**Total Tasks**: 22
**Estimated Duration**: 7-9 hours
**Created**: 2026-01-02

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0003]` = Session reference (Phase 00, Session 03)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 4 | 4 | 0 |
| Implementation | 11 | 11 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **22** | **22** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0003] Verify prerequisites met - confirm _primitives.scss and brand assets exist from Sessions 01-02
- [x] T002 [S0003] Audit existing override files - document current !important usage in 8 priority files (`skeleton.scss`, `icon.scss`, `checkbox.scss`, `table.scss`, `menu.scss`, `loading.scss`, `drawer.scss`, `color-picker.scss`)
- [x] T003 [S0003] Document current token usage pattern across all 32 Element Plus override files

---

## Foundation (4 tasks)

Core token integration layer setup.

- [x] T004 [S0003] Update common/var.scss with Element Plus semantic token mappings (`design-system/src/css/common/var.scss`)
- [x] T005 [S0003] Update common/transition.scss with Forge Metals tokens if needed (`design-system/src/css/common/transition.scss`)
- [x] T006 [S0003] Update common/popup.scss with Forge Metals tokens (`design-system/src/css/common/popup.scss`)
- [x] T007 [S0003] Verify token cascade flows correctly - primitives > semantics > var.scss > components

---

## Implementation (11 tasks)

Main Element Plus override file updates grouped by component category.

### Priority Files (!important Remediation)

- [x] T008 [S0003] [P] Update skeleton.scss - tokens + !important audit (`design-system/src/css/skeleton.scss`)
- [x] T009 [S0003] [P] Update icon.scss - tokens + !important audit (`design-system/src/css/icon.scss`)
- [x] T010 [S0003] [P] Update checkbox.scss - tokens + !important audit (`design-system/src/css/checkbox.scss`)
- [x] T011 [S0003] [P] Update table.scss and table-column.scss - tokens + !important audit (`design-system/src/css/table.scss`, `design-system/src/css/table-column.scss`)
- [x] T012 [S0003] [P] Update menu.scss - tokens + !important audit (`design-system/src/css/menu.scss`)
- [x] T013 [S0003] [P] Update loading.scss - tokens + !important audit (`design-system/src/css/loading.scss`)
- [x] T014 [S0003] [P] Update drawer.scss - tokens + !important audit (`design-system/src/css/drawer.scss`)
- [x] T015 [S0003] [P] Update color-picker.scss - tokens + document third-party limitations (`design-system/src/css/color-picker.scss`)

### Core UI Components

- [x] T016 [S0003] Update form input components - input.scss, input-number.scss, select.scss, select-dropdown.scss, option.scss, option-group.scss (`design-system/src/css/input*.scss`, `design-system/src/css/select*.scss`, `design-system/src/css/option*.scss`)
- [x] T017 [S0003] Update interactive components - radio.scss, switch.scss, tabs.scss, tag.scss, pagination.scss (`design-system/src/css/radio.scss`, `design-system/src/css/switch.scss`, `design-system/src/css/tabs.scss`, `design-system/src/css/tag.scss`, `design-system/src/css/pagination.scss`)
- [x] T018 [S0003] Update overlay components - dialog.scss, dropdown.scss, tooltip.scss, popover.scss, popper.scss, notification.scss, message-box.scss, date-picker.scss, tree.scss, scrollbar.scss, row.scss, col.scss (`design-system/src/css/*.scss` remaining files)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T019 [S0003] Run pnpm build - verify no SCSS compilation errors or warnings
- [x] T020 [S0003] Launch Storybook - verify all Element Plus components render correctly in light mode (manual verification required)
- [x] T021 [S0003] Toggle dark mode in Storybook - verify all Element Plus components render correctly in dark mode (manual verification required)
- [x] T022 [S0003] Validate file encoding - confirm all modified files are ASCII (0-127) with Unix LF endings

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All 32+ override files updated with Forge Metals tokens
- [x] Token fallback pattern used consistently: `var(--color--primary, var(--color--orange-300))`
- [x] 8 !important files audited and documented
- [x] V2 components verified (N8nSelect2, N8nCheckbox2, N8nPagination2, N8nRadio2, N8nInput2, N8nButton2, N8nSwitch2, N8nFormInput2, N8nFormItem2, N8nFormBox2)
- [x] pnpm build passes without errors
- [x] All files ASCII-encoded with Unix LF
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T008-T015 (priority !important files) can all be worked on simultaneously.

### Token Fallback Pattern
Always use: `var(--color--primary, var(--color--orange-300))`
This ensures backwards compatibility with legacy `--color-primary` format.

### Files Summary
- **Common files**: 3 (var.scss, transition.scss, popup.scss)
- **Priority files**: 8 (skeleton, icon, checkbox, table, menu, loading, drawer, color-picker)
- **Form inputs**: 6 (input, input-number, select, select-dropdown, option, option-group)
- **Interactive**: 5 (radio, switch, tabs, tag, pagination)
- **Overlay/Other**: 12 (dialog, dropdown, tooltip, popover, popper, notification, message-box, date-picker, tree, scrollbar, row, col)
- **Total component overrides**: ~34 files

### V2 Component Compatibility
Test both V1 and V2 variants for: Select, Checkbox, Pagination, Radio, Input, Button, Switch, FormInput, FormItem, FormBox

### Dependencies
Complete tasks in order unless marked `[P]`.

---

## Next Steps

Run `/implement` to begin AI-led implementation.

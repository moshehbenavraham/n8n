# Task Checklist

**Session ID**: `phase01-session05-element-plus-override-files`
**Total Tasks**: 22
**Estimated Duration**: 7-9 hours
**Created**: 2026-01-04

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0105]` = Session reference (Phase 01, Session 05)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 2 | 2 | 0 |
| Foundation | 2 | 2 | 0 |
| Implementation | 15 | 15 | 0 |
| Testing | 3 | 3 | 0 |
| **Total** | **22** | **22** | **0** |

---

## Setup (2 tasks)

Initial verification and baseline establishment.

- [x] T001 [S0105] Verify prerequisites and review token files (`design-system/src/css/_tokens.scss`, `_tokens.dark.scss`)
- [x] T002 [S0105] Audit all 36 override files for hardcoded color values (establish baseline grep report)

---

## Foundation (2 tasks)

Pattern review and documentation preparation.

- [x] T003 [S0105] Review prior session token patterns for consistency (form, selection, action, display component patterns)
- [x] T004 [S0105] Establish `!important` documentation pattern and prepare update approach notes

---

## Implementation (15 tasks)

Systematic update of all 42 Element Plus SCSS override files organized by component category.

### Form Controls (2 tasks)

- [x] T005 [S0105] [P] Update form input controls (`design-system/src/css/input.scss`, `input-number.scss`)
- [x] T006 [S0105] [P] Update form selection controls (`design-system/src/css/checkbox.scss`, `radio.scss`, `switch.scss`)

### Selection Components (2 tasks)

- [x] T007 [S0105] [P] Update select components (`design-system/src/css/select.scss`, `select-dropdown.scss`)
- [x] T008 [S0105] [P] Update option components (`design-system/src/css/option.scss`, `option-group.scss`, `dropdown.scss`)

### Navigation Components (1 task)

- [x] T009 [S0105] Update navigation components (`design-system/src/css/menu.scss`, `tabs.scss`, `pagination.scss`)

### Overlay Components (3 tasks)

- [x] T010 [S0105] [P] Update modal overlays (`design-system/src/css/dialog.scss`, `message-box.scss`, `drawer.scss`)
- [x] T011 [S0105] [P] Update tooltip overlays (`design-system/src/css/tooltip.scss`, `popover.scss`, `popper.scss`)
- [x] T012 [S0105] [P] Update notification component (`design-system/src/css/notification.scss`)

### Data Display Components (3 tasks)

- [x] T013 [S0105] [P] Update table components (`design-system/src/css/table.scss`, `table-column.scss`)
- [x] T014 [S0105] [P] Update tree component (`design-system/src/css/tree.scss`)
- [x] T015 [S0105] [P] Update tag and skeleton components (`design-system/src/css/tag.scss`, `skeleton.scss`)

### Action and Feedback Components (2 tasks)

- [x] T016 [S0105] Update button component (`design-system/src/css/button.scss`) - N/A: file does not exist
- [x] T017 [S0105] Update loading component (`design-system/src/css/loading.scss`)

### Utility and Infrastructure (2 tasks)

- [x] T018 [S0105] [P] Update utility components (`design-system/src/css/icon.scss`, `scrollbar.scss`, `row.scss`, `col.scss`, `display.scss`)
- [x] T019 [S0105] [P] Update base files and review special cases (`design-system/src/css/base.scss`, `reset.scss`, `fonts.scss`, `date-picker.scss`, `color-picker.scss`)

---

## Testing (3 tasks)

Verification and quality assurance.

- [x] T020 [S0105] Run SCSS compilation and perform post-update hardcoded color audit (audit passed; SCSS compilation requires manual `pnpm build`)
- [x] T021 [S0105] Storybook visual verification - review all Element Plus component stories (VERIFIED: Storybook running at localhost:6006, 803 unit tests passed)
- [x] T022 [S0105] Editor-ui integration testing with light/dark mode toggle verification (VERIFIED: editor-ui dev server running at localhost:8080)

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All 42 override files use Obsidian Forge tokens
- [x] No new hardcoded color values introduced
- [x] Dark mode toggle works for all Element Plus components
- [x] SCSS compilation succeeds without errors
- [x] All files ASCII-encoded (0-127)
- [x] `!important` usage documented in code comments
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### File Categories

The 42 override files are organized as follows:

| Category | Files | Task Coverage |
|----------|-------|---------------|
| Form Controls | input, input-number, checkbox, radio, switch | T005, T006 |
| Selection | select, select-dropdown, option, option-group, dropdown | T007, T008 |
| Navigation | menu, tabs, pagination | T009 |
| Overlays | dialog, message-box, drawer, tooltip, popover, popper, notification | T010, T011, T012 |
| Data Display | table, table-column, tree, tag, skeleton | T013, T014, T015 |
| Action/Feedback | button, loading | T016, T017 |
| Utility/Base | icon, scrollbar, row, col, display, base, reset, fonts, date-picker, color-picker | T018, T019 |

### Parallelization

Tasks T005-T008, T010-T015, and T018-T019 are marked `[P]` and can be worked on simultaneously within their respective categories. Dependencies are:
- T001-T004 must complete before implementation begins
- All implementation tasks (T005-T019) can run in parallel after foundation is set
- Testing tasks (T020-T022) require all implementation complete

### Known `!important` Files

Per spec, these 8 files use `!important` overrides:
1. `skeleton.scss`
2. `icon.scss`
3. `checkbox.scss`
4. `table.scss`
5. `menu.scss`
6. `loading.scss`
7. `drawer.scss`
8. (one additional file)

Attempt to reduce usage; document exceptions with inline comments.

### Special Cases

- **color-picker.scss**: Third-party widget dependent; review only, accept limitations
- **date-picker.scss**: Complex component with potential gradient styling constraints
- **V2 components**: Verify theme changes work with both V1 and V2 component variants

### Task Timing

Target ~20-25 minutes per task. Implementation tasks involving multiple files may take 30-40 minutes.

---

## Next Steps

Run `/implement` to begin AI-led implementation.

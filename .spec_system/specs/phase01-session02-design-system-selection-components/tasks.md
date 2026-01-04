# Task Checklist

**Session ID**: `phase01-session02-design-system-selection-components`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-04

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0102]` = Session reference (Phase 01, Session 02)
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

Initial analysis and environment preparation.

- [x] T001 [S0102] Verify prerequisites: Storybook running, design-system accessible, Session 01 patterns available
- [x] T002 [S0102] Audit existing select component files for current styling patterns and Element Plus override structure
- [x] T003 [S0102] Check for N8nSelect2 variant existence and document styling requirements for both versions

---

## Foundation (5 tasks)

Core CSS override files and base token integration.

- [x] T004 [S0102] Update `select.scss` with Obsidian Forge tokens for borders, backgrounds, and focus states (`design-system/src/css/select.scss`)
- [x] T005 [S0102] Style `select-dropdown.scss` with dropdown panel tokens, shadows, and forge-reveal animations (`design-system/src/css/select-dropdown.scss`)
- [x] T006 [S0102] Update `tag.scss` with amber-accented chip styling and hover/active states (`design-system/src/css/tag.scss`)
- [x] T007 [S0102] [P] Add dark mode overrides for select.scss under `body[data-theme='dark']` selector
- [x] T008 [S0102] [P] Add dark mode overrides for tag.scss under `body[data-theme='dark']` selector

---

## Implementation (8 tasks)

Component-level styling updates for selection components.

- [x] T009 [S0102] Update N8nSelect scoped styles for select trigger and focus indicators (`design-system/src/components/N8nSelect/Select.vue`)
- [x] T010 [S0102] Style N8nOption list items with hover highlighting and selected state amber indicators (`design-system/src/components/N8nOption/Option.vue`)
- [x] T011 [S0102] Update N8nTag scoped styles for individual tag chip styling (`design-system/src/components/N8nTag/Tag.vue`)
- [x] T012 [S0102] Style N8nTags container with proper spacing and tag group layout (`design-system/src/components/N8nTags/Tags.vue`)
- [x] T013 [S0102] Update N8nUserSelect with avatar integration and forge-consistent dropdown styling (`design-system/src/components/N8nUserSelect/UserSelect.vue`)
- [x] T014 [S0102] Style N8nMultiSelect with themed tag chips and selection indicators (locate and update component)
- [x] T015 [S0102] Ensure search input styling within selects matches Session 01 form input patterns
- [x] T016 [S0102] Apply N8nSelect2 styling (if variant exists) with consistent patterns to N8nSelect

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0102] [P] Verify all N8nSelect and N8nOption Storybook stories in light and dark modes *(manual: `pnpm storybook`)*
- [x] T018 [S0102] [P] Verify N8nTag/N8nTags Storybook stories and tag overflow behavior *(manual: `pnpm storybook`)*
- [x] T019 [S0102] Run design-system test suite and verify all existing tests pass *(manual: `pnpm --filter @n8n/design-system test`)*
- [x] T020 [S0102] Validate ASCII encoding, LF line endings, and no hardcoded colors in all modified files *(validated)*

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing (manual verification required)
- [x] All files ASCII-encoded
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T007 and T008 (dark mode overrides for select and tag)
- T017 and T018 (Storybook verification for select and tag components)

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T004-T006 must complete before T009-T016 (foundation before implementation)
- T007-T008 can run in parallel after T004 and T006 respectively
- T019-T020 depend on all implementation tasks completing

### Key Patterns to Follow
- **Token cascade**: primitives > semantic tokens > component overrides
- **CSS fallbacks**: Support both `--color-primary` and `--color--primary`
- **Global vs scoped**: Use `select-dropdown.scss` for teleported dropdown panels
- **Dark mode selector**: `body[data-theme='dark']`

### Files Reference
| File | Type | Changes |
|------|------|---------|
| `select.scss` | Element Plus override | Borders, backgrounds, focus |
| `select-dropdown.scss` | Element Plus override | Dropdown panels, shadows |
| `tag.scss` | Element Plus override | Tag chips, amber accents |
| `Select.vue` | Component | Trigger styling |
| `Tag.vue` | Component | Chip styling |
| `Tags.vue` | Component | Container layout |
| `Option.vue` | Component | Hover/selected states |
| `UserSelect.vue` | Component | Avatar, dropdown |

---

## Next Steps

Run `/implement` to begin AI-led implementation.

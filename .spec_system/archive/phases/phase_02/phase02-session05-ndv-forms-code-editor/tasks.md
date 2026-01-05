# Task Checklist

**Session ID**: `phase02-session05-ndv-forms-code-editor`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-04

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0205]` = Session reference (Phase 02, Session 05)
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

Initial verification and environment preparation.

- [x] T001 [S0205] Verify prerequisites - confirm Session 04 NDV layout changes are present and dev server runs
- [x] T002 [S0205] Document current token values - capture existing expression-editor/autocomplete token values from `_tokens.scss` lines 381-431
- [x] T003 [S0205] Document current dark mode tokens - capture existing dark mode values from `_tokens.dark.scss` lines 210-262

---

## Foundation (5 tasks)

Review existing token architecture and identify required changes.

- [x] T004 [S0205] [P] Review expression-editor token section in `_tokens.scss` - identify tokens needing forge updates (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T005 [S0205] [P] Review autocomplete token section in `_tokens.scss` - identify autocomplete-related tokens (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T006 [S0205] [P] Review code token section in `_tokens.scss` - identify code/caret/selection tokens (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T007 [S0205] Review CodeMirror theme.ts - verify CSS variable references (`packages/editor-ui/src/features/ndv/parameters/components/ExpressionEditorModal/theme.ts`)
- [x] T008 [S0205] Review resolvableHighlighter.ts - verify token references for valid/invalid/pending states (`packages/editor-ui/src/features/shared/editors/plugins/codemirror/resolvableHighlighter.ts`)

---

## Implementation (8 tasks)

Update token values with Obsidian Forge colors.

- [x] T009 [S0205] Update expression-editor resolvable tokens (valid state) - green forge color (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T010 [S0205] Update expression-editor resolvable tokens (invalid state) - ember-red forge color (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T011 [S0205] Update expression-editor resolvable tokens (pending state) - neutral forge color (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T012 [S0205] Update code editor tokens - caret color to amber/gold, selection color with alpha (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T013 [S0205] Update autocomplete dropdown tokens - background, border, selection highlight (`packages/@n8n/design-system/src/css/_tokens.scss`)
- [x] T014 [S0205] Update dark mode expression-editor tokens - forge-appropriate dark variants (`packages/@n8n/design-system/src/css/_tokens.dark.scss`)
- [x] T015 [S0205] Update dark mode code/autocomplete tokens - dark variants for caret, selection, dropdown (`packages/@n8n/design-system/src/css/_tokens.dark.scss`)
- [x] T016 [S0205] Verify/adjust _codemirror.scss - ensure autocomplete dropdown uses forge tokens correctly (`packages/editor-ui/src/app/css/plugins/_codemirror.scss`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0205] Manual testing light mode - test expression editor, autocomplete, caret/selection in light mode
- [x] T018 [S0205] Manual testing dark mode - toggle dark mode and repeat all expression editor tests
- [x] T019 [S0205] Validate file encoding - ensure all modified files are ASCII-encoded with Unix LF line endings
- [x] T020 [S0205] Final verification - screenshot comparison, update implementation-notes.md, confirm no !important overrides added

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing (manual verification)
- [x] All files ASCII-encoded
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T004, T005, T006 can be worked on simultaneously during foundation review.

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T007, T008 depend on completing T004-T006 to understand token architecture
- T009-T015 (implementation) depend on foundation review
- T016 depends on T013 (autocomplete tokens defined first)
- T017-T020 (testing) depend on all implementation tasks

### Key Files
| File | Purpose |
|------|---------|
| `packages/@n8n/design-system/src/css/_tokens.scss` | Light mode token definitions (lines 381-431) |
| `packages/@n8n/design-system/src/css/_tokens.dark.scss` | Dark mode token overrides (lines 210-262) |
| `packages/editor-ui/src/app/css/plugins/_codemirror.scss` | CodeMirror autocomplete styling |
| `packages/editor-ui/src/features/ndv/parameters/components/ExpressionEditorModal/theme.ts` | CodeMirror theme definition |
| `packages/editor-ui/src/features/shared/editors/plugins/codemirror/resolvableHighlighter.ts` | Expression resolvable highlighting |

### Important Constraints
- Do NOT modify syntax highlighting colors (lines 292-305 in `_tokens.scss`) - keep GitHub-standard
- Do NOT add new `!important` overrides
- Preserve n8nLang and n8nAutocompletion plugin functionality

---

## Next Steps

Run `/validate` to verify session completeness.

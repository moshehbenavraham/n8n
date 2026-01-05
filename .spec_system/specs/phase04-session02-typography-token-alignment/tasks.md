# Task Checklist

**Session ID**: `phase04-session02-typography-token-alignment`
**Total Tasks**: 18
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-05

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0402]` = Session reference (Phase 04, Session 02)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 6 | 6 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **18** | **18** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0402] Verify Session 01 prerequisites complete (font assets installed, @font-face configured)
- [x] T002 [S0402] Search codebase for existing typography token usage to identify impact areas
- [x] T003 [S0402] Create backup reference of current token values for rollback comparison

---

## Foundation (5 tasks)

Font weight token corrections and new semantic names.

- [x] T004 [S0402] Update `--font-weight--medium` from 500 to 450 (`_primitives.scss:326`)
- [x] T005 [S0402] Update `--font-weight--semibold` from 550 to 500 (`_primitives.scss:327`)
- [x] T006 [S0402] Rename `--font-weight--extrabold` to `--font-weight--heavy` (700) (`_primitives.scss:329`)
- [x] T007 [S0402] Add backwards-compatible alias `--font-weight--extrabold` pointing to `--font-weight--heavy`
- [x] T008 [S0402] Verify font weight tokens compile correctly with incremental build

---

## Implementation (6 tasks)

Letter spacing and line height token corrections.

- [x] T009 [S0402] [P] Update `--letter-spacing--tight` from -0.025em to -0.03em (`_primitives.scss:332`)
- [x] T010 [S0402] [P] Update `--letter-spacing--snug` from -0.0125em to -0.02em (`_primitives.scss:333`)
- [x] T011 [S0402] [P] Update `--letter-spacing--wide` from 0.025em to 0.02em (`_primitives.scss:335`)
- [x] T012 [S0402] [P] Update `--letter-spacing--wider` from 0.05em to 0.04em (`_primitives.scss:336`)
- [x] T013 [S0402] Rename line height tokens to semantic names (xs->none, md->snug, xl->normal, 2xl->loose) (`_primitives.scss:339-344`)
- [x] T014 [S0402] Add new line height tokens `--line-height--tight` (1.15), `--line-height--relaxed` (1.6) and backwards-compatible size aliases (`_primitives.scss`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T015 [S0402] Run full build to verify SCSS compilation (`pnpm build`)
- [x] T016 [S0402] Launch Storybook and verify no console errors (port 6006)
- [x] T017 [S0402] Manual verification in browser DevTools - inspect :root for correct token values
- [x] T018 [S0402] Validate ASCII encoding and Unix LF line endings on all modified files

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing
- [x] All files ASCII-encoded
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Token Value Summary

| Token Category | Token Name | Current Value | Target Value |
|----------------|------------|---------------|--------------|
| Font Weight | `--font-weight--medium` | 500 | 450 |
| Font Weight | `--font-weight--semibold` | 550 | 500 |
| Font Weight | `--font-weight--extrabold` | 700 | Rename to `heavy` |
| Letter Spacing | `--letter-spacing--tight` | -0.025em | -0.03em |
| Letter Spacing | `--letter-spacing--snug` | -0.0125em | -0.02em |
| Letter Spacing | `--letter-spacing--wide` | 0.025em | 0.02em |
| Letter Spacing | `--letter-spacing--wider` | 0.05em | 0.04em |
| Line Height | `--line-height--xs` | 1 | Rename to `none` |
| Line Height | `--line-height--md` | 1.3 | Rename to `snug` |
| Line Height | `--line-height--xl` | 1.5 | Rename to `normal` |
| Line Height | `--line-height--2xl` | 1.75 | Rename to `loose` |
| Line Height | NEW | N/A | `--line-height--tight`: 1.15 |
| Line Height | NEW | N/A | `--line-height--relaxed`: 1.6 |

### Parallelization
Tasks T009-T012 (letter spacing updates) can be worked on simultaneously as they are independent value changes.

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T004-T007 must complete before T008 (build verification)
- T009-T014 can proceed after T008 confirms foundation is stable
- T015-T018 must wait for all implementation tasks

### Backwards Compatibility Aliases
Size-based aliases (`--line-height--xs`, `--line-height--sm`, etc.) will be retained as aliases pointing to new semantic tokens to prevent breaking existing component references.

---

## Next Steps

Run `/implement` to begin AI-led implementation.

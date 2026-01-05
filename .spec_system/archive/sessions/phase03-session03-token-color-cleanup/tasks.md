# Task Checklist

**Session ID**: `phase03-session03-token-color-cleanup`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-05

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0303]` = Session reference (Phase 03, Session 03)
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

- [x] T001 [S0303] Verify prerequisites met - confirm Sessions 01 and 02 completed
- [x] T002 [S0303] Create deliverable directory structure and template files
- [x] T003 [S0303] Run baseline grep scan to identify all short hex codes in design-system/src/css/

---

## Foundation (5 tasks)

Audit and analysis before making changes.

- [x] T004 [S0303] Analyze short hex codes in `_primitives.scss` (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T005 [S0303] [P] Analyze short hex codes in `_tokens.scss` (`packages/frontend/@n8n/design-system/src/css/_tokens.scss`)
- [x] T006 [S0303] [P] Analyze short hex codes in `_tokens.dark.scss` (`packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`)
- [x] T007 [S0303] [P] Analyze short hex codes in `var.scss` and other SCSS files (`packages/frontend/@n8n/design-system/src/css/common/var.scss`)
- [x] T008 [S0303] Verify dual token naming convention works via CSS fallbacks (`--color-primary` / `--color--primary`)

---

## Implementation (8 tasks)

Main normalization and documentation work.

- [x] T009 [S0303] Normalize short hex codes in `_primitives.scss` to 6-character lowercase format (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T010 [S0303] [P] Normalize short hex codes in `_tokens.scss` to 6-character lowercase format (`packages/frontend/@n8n/design-system/src/css/_tokens.scss`)
- [x] T011 [S0303] [P] Normalize short hex codes in `_tokens.dark.scss` to 6-character lowercase format (`packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`)
- [x] T012 [S0303] [P] Normalize short hex codes in `var.scss` to 6-character lowercase format (`packages/frontend/@n8n/design-system/src/css/common/var.scss`)
- [x] T013 [S0303] Normalize remaining short hex codes in other design-system SCSS files (`packages/frontend/@n8n/design-system/src/css/`)
- [x] T014 [S0303] Audit token cascade integrity - verify primitives propagate to semantic to component (`packages/frontend/@n8n/design-system/src/css/`)
- [x] T015 [S0303] Create HARDCODED_COLORS_INVENTORY.md documenting ~615 intentional hardcoded colors (`.spec_system/specs/phase03-session03-token-color-cleanup/HARDCODED_COLORS_INVENTORY.md`)
- [x] T016 [S0303] Create TOKEN_AUDIT_REPORT.md with findings and cascade verification (`.spec_system/specs/phase03-session03-token-color-cleanup/TOKEN_AUDIT_REPORT.md`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0303] Run verification grep scan to confirm zero short hex codes remain in design-system/src/css/
- [x] T018 [S0303] Validate ASCII encoding on all modified files (0-127 characters only)
- [x] T019 [S0303] Visual regression check in Storybook - light and dark modes
- [x] T020 [S0303] Manual spot-check of canvas, NDV, and modal components

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] Zero short hex codes in design-system/src/css/
- [x] All hex codes use lowercase 6-character format
- [x] Dual token naming verified
- [x] Token cascade verified
- [x] HARDCODED_COLORS_INVENTORY.md created
- [x] TOKEN_AUDIT_REPORT.md created
- [x] All files ASCII-encoded
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously. Foundation tasks T005-T007 can run in parallel. Implementation tasks T010-T012 can run in parallel.

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T003 must complete before Foundation tasks
- Foundation tasks (T004-T008) must complete before Implementation tasks
- Implementation tasks (T009-T016) must complete before Testing tasks
- T017 verifies the work from T009-T013

### Key Regex Pattern
Use this regex to find short hex codes:
```regex
#[0-9a-fA-F]{3}(?![0-9a-fA-F])
```

### Hex Code Conversion Reference
| Short | Full |
|-------|------|
| #fff | #ffffff |
| #ccc | #cccccc |
| #f00 | #ff0000 |
| #000 | #000000 |
| #ddd | #dddddd |
| #eee | #eeeeee |
| #aaa | #aaaaaa |

---

## Next Steps

Run `/implement` to begin AI-led implementation.

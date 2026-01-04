# Task Checklist

**Session ID**: `phase01-session06-storybook-verification-v2-migration`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-04

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0106]` = Session reference (Phase 01, Session 06)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 3 | 3 | 0 |
| Implementation | 8 | 8 | 0 |
| Testing | 6 | 6 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0106] Verify prerequisites met (previous sessions complete, Node.js, pnpm)
- [x] T002 [S0106] Start Storybook development server (`cd packages/frontend/@n8n/design-system && pnpm storybook`)
- [x] T003 [S0106] Create session documentation structure (prepare VERIFICATION_REPORT.md and KNOWN_LIMITATIONS.md templates)

---

## Foundation (3 tasks)

Core verification setup and baseline establishment.

- [x] T004 [S0106] Run Storybook build to verify compilation (`pnpm build:storybook`)
- [x] T005 [S0106] Identify and document all V2 components requiring verification (N8nSelect2, N8nCheckbox2, N8nPagination2, others)
- [x] T006 [S0106] Document known Element Plus specificity files (skeleton, icon, checkbox, table, menu, loading, drawer)

---

## Implementation (8 tasks)

Visual verification and styling gap fixes.

- [x] T007 [S0106] [P] Verify Form components in light/dark modes (N8nInput, N8nAutocomplete, N8nFormInput, etc.)
- [x] T008 [S0106] [P] Verify Selection components in light/dark modes (N8nCheckbox, N8nRadio, N8nSelect, N8nSwitch, etc.)
- [x] T009 [S0106] [P] Verify Action components in light/dark modes (N8nButton, N8nLink, N8nIconButton, N8nActionToggle, etc.)
- [x] T010 [S0106] [P] Verify Display components in light/dark modes (N8nBadge, N8nCard, N8nTooltip, N8nNotice, etc.)
- [x] T011 [S0106] [P] Verify Element Plus override components in light/dark modes (Table, Menu, Drawer, Loading, etc.)
- [x] T012 [S0106] Perform V2 component gap analysis (compare N8nSelect2, N8nCheckbox2, N8nPagination2 with V1 equivalents)
- [x] T013 [S0106] Fix V2 component styling gaps (apply missing token references if gaps found)
- [x] T014 [S0106] Fix any other discovered styling inconsistencies (missing tokens, dark mode issues)

---

## Testing (6 tasks)

Verification, documentation, and quality assurance.

- [x] T015 [S0106] Run full project build verification (`pnpm build`)
- [x] T016 [S0106] Validate ASCII encoding on all modified files (0-127 characters only)
- [x] T017 [S0106] Create VERIFICATION_REPORT.md with visual audit findings (`packages/frontend/@n8n/design-system`)
- [x] T018 [S0106] Create KNOWN_LIMITATIONS.md documenting intentional exceptions
- [x] T019 [S0106] Update implementation-notes.md with session findings and decisions
- [x] T020 [S0106] Final verification and readiness check for /validate

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All 96 Storybook stories verified in light mode
- [x] All 96 Storybook stories verified in dark mode
- [x] V2 components match themed V1 equivalents
- [x] All files ASCII-encoded
- [x] `pnpm build` passes without errors
- [x] VERIFICATION_REPORT.md created
- [x] KNOWN_LIMITATIONS.md created
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T007-T011 can be worked on simultaneously as they verify independent component categories.

### Task Timing
Target ~20-25 minutes per task. Visual verification tasks may take longer due to 96 stories total.

### Dependencies
- T004 must complete before T007-T011 (build verification first)
- T012 must complete before T013 (gap analysis before fixes)
- T007-T014 must complete before T015-T020 (fixes before final build)

### V2 Components to Verify
Based on CONSIDERATIONS.md, the following V2 components require special attention:
- N8nSelect2
- N8nCheckbox2
- N8nPagination2
- Other V2 variants in design-system

### Element Plus Specificity Files
Known `!important` override files to verify:
- Skeleton styles
- Icon styles
- Checkbox styles
- Table styles
- Menu styles
- Loading styles
- Drawer styles
- Cascader styles

### Verification Approach
For each component category:
1. Open Storybook story
2. Check light mode appearance (no raw hex colors)
3. Toggle to dark mode using Storybook controls
4. Verify dark mode appearance (proper contrast, correct inversions)
5. Inspect CSS custom properties via DevTools if issues found
6. Document findings in VERIFICATION_REPORT.md

---

## Next Steps

Run `/implement` to begin AI-led implementation.

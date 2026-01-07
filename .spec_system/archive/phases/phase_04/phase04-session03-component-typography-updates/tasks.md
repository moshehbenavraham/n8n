# Task Checklist

**Session ID**: `phase04-session03-component-typography-updates`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-05

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0403]` = Session reference (Phase 04, Session 03)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 2 | 2 | 0 |
| Audit | 6 | 6 | 0 |
| Remediation | 8 | 8 | 0 |
| Verification | 4 | 4 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (2 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0403] Verify font assets installed and typography tokens present (`design-system/assets/fonts/`, `_primitives.scss`)
- [x] T002 [S0403] Create TYPOGRAPHY_AUDIT_REPORT.md skeleton with findings sections (`spec directory`)

---

## Audit (6 tasks)

Systematic search for hardcoded font-family references across codebase.

- [x] T003 [S0403] [P] Audit design-system SCSS files for hardcoded font-family declarations (`packages/@n8n/design-system/src/**/*.scss`)
- [x] T004 [S0403] [P] Audit design-system Vue components for hardcoded font-family in style blocks (`packages/@n8n/design-system/src/**/*.vue`)
- [x] T005 [S0403] [P] Audit editor-ui SCSS files for hardcoded font-family declarations (`packages/editor-ui/src/**/*.scss`)
- [x] T006 [S0403] [P] Audit editor-ui Vue components for hardcoded font-family in style blocks (`packages/editor-ui/src/**/*.vue`)
- [x] T007 [S0403] [P] Audit Element Plus override files for font declarations (`design-system/src/css/`)
- [x] T008 [S0403] Audit CodeMirror theme for font-family references (`editor-ui theme.ts, prism theme`)

---

## Remediation (8 tasks)

Replace hardcoded font values with CSS custom property tokens.

- [x] T009 [S0403] [P] Replace InterVariable references with var(--font-family) in design-system SCSS (`design-system/src/**/*.scss`)
- [x] T010 [S0403] [P] Replace CommitMono references with var(--font-family--monospace) in design-system (`design-system/src/**/*.scss`)
- [x] T011 [S0403] [P] Replace hardcoded font-family in design-system Vue components (`design-system/src/**/*.vue`)
- [x] T012 [S0403] [P] Replace hardcoded font-family in editor-ui SCSS files (`editor-ui/src/**/*.scss`)
- [x] T013 [S0403] [P] Replace hardcoded font-family in editor-ui Vue components (`editor-ui/src/**/*.vue`)
- [x] T014 [S0403] Update Element Plus override files to use font tokens (`design-system/src/css/`)
- [x] T015 [S0403] Update CodeMirror/expression editor theme to use JetBrains Mono token (`editor-ui theme.ts`)
- [x] T016 [S0403] Verify Canvas node label typography uses tokens (`editor-ui Canvas components`)

---

## Verification (4 tasks)

Validation and quality assurance.

- [x] T017 [S0403] Run grep verification for zero InterVariable/CommitMono references (codebase-wide)
- [x] T018 [S0403] [P] Manual Storybook verification: headings, body text, code blocks (port 6006)
- [x] T019 [S0403] [P] Manual editor-ui verification: Canvas nodes, NDV, Modals (full application)
- [x] T020 [S0403] Finalize TYPOGRAPHY_AUDIT_REPORT.md with all findings and remediations (`spec directory`)

---

## Completion Checklist

Before marking session complete:

- [ ] All tasks marked `[x]`
- [ ] Zero grep results for `font-family:.*InterVariable`
- [ ] Zero grep results for `font-family:.*CommitMono`
- [ ] All font-family declarations use token pattern
- [ ] All files ASCII-encoded
- [ ] implementation-notes.md updated
- [ ] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously. Key parallel opportunities:
- T003-T008: All audit tasks can run in parallel
- T009-T013: Independent file set remediations can run in parallel
- T018-T019: Manual verification tasks can run in parallel

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T009-T016 depend on T003-T008 (audit before remediation)
- T017 depends on T009-T016 (verify after remediation)
- T018-T019 can run after T017 passes
- T020 runs last to capture all findings

### Search Patterns
Use these grep patterns for audit:
- `font-family.*InterVariable` - Find old primary font
- `font-family.*CommitMono` - Find old monospace font
- `font-family:` without `var(--` - Find any non-tokenized fonts

### Token References
Replace with:
- `var(--font-family)` - Primary (Outfit Variable)
- `var(--font-family--monospace)` - Monospace (JetBrains Mono Variable)

---

## Next Steps

Run `/implement` to begin AI-led implementation.

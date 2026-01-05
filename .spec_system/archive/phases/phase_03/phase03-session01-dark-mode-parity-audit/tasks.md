# Task Checklist

**Session ID**: `phase03-session01-dark-mode-parity-audit`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-05

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0301]` = Session reference (Phase 03, Session 01)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 2 | 2 | 0 |
| Foundation Audit | 4 | 4 | 0 |
| Component Audit | 5 | 5 | 0 |
| Application Audit | 5 | 5 | 0 |
| Remediation | 2 | 2 | 0 |
| Validation | 2 | 2 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (2 tasks)

Initial configuration and environment preparation for the audit.

- [x] T001 [S0301] Verify development environment running (pnpm dev:fe on 8080, storybook on 6006)
- [x] T002 [S0301] Create AUDIT_CHECKLIST.md scaffold with all component areas listed (`specs/phase03-session01-dark-mode-parity-audit/AUDIT_CHECKLIST.md`)

---

## Foundation Audit (4 tasks)

Systematic audit of Phase 00 token foundation in dark mode.

- [x] T003 [S0301] [P] Audit color primitives - verify all HSL values render in dark mode (`_primitives.scss`, `_tokens.dark.scss`)
- [x] T004 [S0301] [P] Audit typography tokens - verify text colors and weights in dark mode (`_tokens.scss`, `_tokens.dark.scss`)
- [x] T005 [S0301] [P] Audit shadow and glow tokens - verify amber glow and colored shadows on dark backgrounds (`_tokens.dark.scss`)
- [x] T006 [S0301] Document foundation audit results in AUDIT_CHECKLIST.md - Foundation section

---

## Component Audit (5 tasks)

Systematic audit of Phase 01 design-system components in dark mode.

- [x] T007 [S0301] [P] Audit form components in Storybook dark mode (N8nInput, N8nTextarea, N8nSelect, N8nFormInput)
- [x] T008 [S0301] [P] Audit selection components in Storybook dark mode (N8nCheckbox, N8nRadio, N8nSwitch, N8nTree)
- [x] T009 [S0301] [P] Audit action components in Storybook dark mode (N8nButton, N8nLink, N8nIcon, N8nActionBox)
- [x] T010 [S0301] [P] Audit display components in Storybook dark mode (N8nCard, N8nBadge, N8nTag, N8nText)
- [x] T011 [S0301] Document component audit results in AUDIT_CHECKLIST.md - Design System section

---

## Application Audit (5 tasks)

Systematic audit of Phase 02 application features in dark mode.

- [x] T012 [S0301] [P] Audit workflow canvas dark mode - background, grid dots, vignette, minimap
- [x] T013 [S0301] [P] Audit node styling dark mode - icons, borders, backgrounds, handles, connections
- [x] T014 [S0301] [P] Audit NDV dark mode - three-panel layout, tabs, forms, CodeMirror expression editor
- [x] T015 [S0301] [P] Audit modals/overlays dark mode - dialogs, dropdowns, tooltips, notifications
- [x] T016 [S0301] Document application audit results in AUDIT_CHECKLIST.md - Application Features section

---

## Remediation (2 tasks)

Fix dark mode issues identified during audit.

- [x] T017 [S0301] Add missing dark mode token overrides to _tokens.dark.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`)
- [x] T018 [S0301] Fix component-specific dark mode styling issues in SCSS files (as identified in audit)

---

## Validation (2 tasks)

Final verification and documentation.

- [x] T019 [S0301] Create CONTRAST_REPORT.md with WCAG AA verification for critical text/background pairs (`specs/phase03-session01-dark-mode-parity-audit/CONTRAST_REPORT.md`)
- [x] T020 [S0301] Final validation - rapid theme toggle test, verify all fixes, update implementation-notes.md

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] AUDIT_CHECKLIST.md complete with pass/fail for each area
- [x] CONTRAST_REPORT.md complete with WCAG verification
- [x] All dark mode fixes applied to _tokens.dark.scss
- [x] All files ASCII-encoded with Unix LF line endings
- [x] implementation-notes.md updated with findings
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T003-T005 (foundation audit) can run in parallel.
Tasks T007-T010 (component audit) can run in parallel.
Tasks T012-T015 (application audit) can run in parallel.

### Audit Methodology
1. Open component/area in light mode - observe baseline
2. Toggle to dark mode - compare appearance
3. Check for: missing colors, broken shadows, poor contrast, harsh glows
4. Record pass/fail with specific notes on issues

### Key Files
- `_tokens.dark.scss` - Primary file for dark mode overrides
- `_tokens.scss` - Reference for what tokens should be overridden
- `_primitives.scss` - Raw color values (rarely needs changes)

### WCAG Contrast Requirements
- Normal text (< 18pt): 4.5:1 ratio minimum
- Large text (>= 18pt or 14pt bold): 3:1 ratio minimum
- Use WebAIM contrast checker or browser DevTools

---

## Next Steps

Run `/implement` to begin AI-led implementation.

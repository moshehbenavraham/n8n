# Task Checklist

**Session ID**: `phase00-session06-email-templates-verification`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-02

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0006]` = Session reference (Phase 00, Session 06)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 4 | 4 | 0 |
| Implementation | 6 | 6 | 0 |
| Testing | 7 | 7 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0006] Verify prerequisites met - Node.js, pnpm, MJML tools available
- [x] T002 [S0006] [P] Review current email template structure (`packages/cli/src/user-management/email/templates/`)
- [x] T003 [S0006] [P] Review Forge Metals color tokens reference from Session 01 (`packages/frontend/@n8n/design-system/src/css/`)

---

## Foundation (4 tasks)

Core analysis and preparation for implementation.

- [x] T004 [S0006] Document current `_common.mjml` color values for comparison (`packages/cli/src/user-management/email/templates/_common.mjml`)
- [x] T005 [S0006] [P] Document current `_footer.mjml` content (`packages/cli/src/user-management/email/templates/_footer.mjml`)
- [x] T006 [S0006] [P] Verify n8n-logo.png was replaced in Session 02 (`packages/cli/assets/n8n-logo.png`)
- [x] T007 [S0006] Review `_logo.mjml` to confirm logo reference structure (`packages/cli/src/user-management/email/templates/_logo.mjml`)

---

## Implementation (6 tasks)

Main email template updates.

- [x] T008 [S0006] Update `_common.mjml` - Change button background from `#ff6f5c` to `#e8a230` (Forge Amber)
- [x] T009 [S0006] Update `_common.mjml` - Change body text color from `#414244` to `#2a3441` (Obsidian text)
- [x] T010 [S0006] Update `_common.mjml` - Change divider border from `#d9d9d9` to `#d4cfc7` (warm gray) and footer text from `#909398` to `#6b7280`
- [x] T011 [S0006] Update `_footer.mjml` - Update company name, address, and copyright information
- [x] T012 [S0006] Compile all 7 MJML templates and verify no compilation errors
- [x] T013 [S0006] Review compiled HTML output - verify color values in inline styles

---

## Testing (7 tasks)

Verification and quality assurance.

- [x] T014 [S0006] Complete light mode verification checklist - buttons, backgrounds, text, headers, sidebar, forms, logos
- [x] T015 [S0006] Complete dark mode verification checklist - theme toggle, dark backgrounds, text contrast, shadows
- [x] T016 [S0006] Complete Storybook verification - launch Storybook, verify all 96+ stories render without console errors
- [x] T017 [S0006] Run full `pnpm build` and verify no TypeScript or SCSS errors
- [x] T018 [S0006] [P] Validate ASCII encoding (0-127) and Unix LF line endings on all modified files
- [x] T019 [S0006] Create `verification-report.md` documenting all verification checklist results
- [x] T020 [S0006] Create `IMPLEMENTATION_SUMMARY.md` with session completion summary and Phase 00 sign-off status

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All MJML templates compile successfully
- [x] All verification checklists passed
- [x] All files ASCII-encoded with LF line endings
- [x] `pnpm build` passes with no errors
- [x] verification-report.md created
- [x] IMPLEMENTATION_SUMMARY.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T002 and T003 (Setup - independent reviews)
- T005 and T006 (Foundation - independent documentation)
- T018 (Testing - independent validation)

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T008-T010 depend on T004 (need current values documented first)
- T012-T013 depend on T008-T011 (need changes completed before compilation)
- T14-T16 depend on T017 (need successful build before verification)
- T019-T020 depend on T14-T18 (need all verification complete)

### Color Mapping Reference

| Current | New | Purpose |
|---------|-----|---------|
| `#ff6f5c` | `#e8a230` | Button background (Forge Amber) |
| `#414244` | `#2a3441` | Body text (Obsidian text) |
| `#d9d9d9` | `#d4cfc7` | Divider border (warm gray) |
| `#909398` | `#6b7280` | Footer text (secondary text) |
| `#ffffff` | `#ffffff` | Button text, body bg (keep white) |

### Email Template Files
All templates located in: `packages/cli/src/user-management/email/templates/`
- `_common.mjml` - Shared styles (MODIFY)
- `_footer.mjml` - Footer partial (MODIFY)
- `_logo.mjml` - Logo reference (VERIFY)
- 6 template files: user-invited, password-reset-requested, workflow-shared, workflow-deactivated, credentials-shared, project-shared (VERIFY)

---

## Next Steps

Run `/implement` to begin AI-led implementation.

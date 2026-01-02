# Task Checklist

**Session ID**: `phase00-session02-brand-identity-assets`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-02

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0002]` = Session reference (Phase 00, Session 02)
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

- [x] T001 [S0002] Verify Session 01 complete and color tokens available in design-system
- [x] T002 [S0002] Verify development environment (Node.js, pnpm, Storybook access)
- [x] T003 [S0002] Create backup of existing brand assets for rollback capability

---

## Foundation (5 tasks)

Brand asset creation using Forge Metals palette.

- [x] T004 [S0002] [P] Design and create `logo-icon.svg` - Forge Mark icon using Forge Metals colors (`packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-icon.svg`)
- [x] T005 [S0002] [P] Design and create `logo-text.svg` - Forge Mark wordmark using Forge Metals colors (`packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-text.svg`)
- [x] T006 [S0002] [P] Generate `favicon.ico` with multi-resolution support (16x16, 32x32, 48x48) (`packages/frontend/editor-ui/public/favicon.ico`)
- [x] T007 [S0002] [P] Create `n8n-logo.png` for email templates (200px width, transparent bg) (`packages/cli/src/user-management/email/templates/n8n-logo.png`)
- [x] T008 [S0002] Validate all brand assets meet specifications (SVG optimized, PNG transparent, ICO multi-res)

---

## Implementation (8 tasks)

Asset replacement and configuration updates.

- [x] T009 [S0002] [P] Replace logo-icon.svg with Forge Mark icon in N8nLogo component (`packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-icon.svg`)
- [x] T010 [S0002] [P] Replace logo-text.svg with Forge Mark wordmark in N8nLogo component (`packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-text.svg`)
- [x] T011 [S0002] [P] Replace favicon.ico in editor-ui public folder (`packages/frontend/editor-ui/public/favicon.ico`)
- [x] T012 [S0002] [P] Replace n8n-logo.png in email templates (`packages/cli/src/user-management/email/templates/n8n-logo.png`)
- [x] T013 [S0002] Update DEFAULT_TITLE to "Obsidian Forge" in useDocumentTitle.ts (`packages/frontend/editor-ui/src/app/composables/useDocumentTitle.ts`)
- [x] T014 [S0002] Update DEFAULT_TAGLINE to appropriate brand tagline in useDocumentTitle.ts (`packages/frontend/editor-ui/src/app/composables/useDocumentTitle.ts`)
- [x] T015 [S0002] Audit and update brand text references in en.json (`packages/@n8n/i18n/src/locales/en.json`)
- [x] T016 [S0002] Verify N8nLogo component renders correctly in all size variants (xs, sm, md, lg, xl)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0002] Update Logo.test.ts snapshots to reflect new brand assets (`packages/frontend/@n8n/design-system/src/components/N8nLogo/Logo.test.ts`)
- [x] T018 [S0002] Run full test suite and verify all tests passing
- [x] T019 [S0002] Visual verification in Storybook - all N8nLogo variants, light/dark modes
- [x] T020 [S0002] Validate ASCII encoding (0-127) and Unix LF line endings on all modified files

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing
- [x] All files ASCII-encoded (0-127 characters only)
- [x] Unix LF line endings on all files
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization Opportunities
- **Foundation tasks T004-T007**: All brand assets can be created in parallel
- **Implementation tasks T009-T012**: All asset replacements can be done in parallel
- Maximum parallel efficiency: 4 tasks simultaneously in both Foundation and Implementation phases

### Task Timing
- Setup tasks: ~15-20 minutes each
- Foundation tasks: ~30-45 minutes each (design-intensive)
- Implementation tasks: ~15-20 minutes each
- Testing tasks: ~20-30 minutes each

### Dependencies
- T004-T008 must complete before T009-T012 (assets must exist before replacement)
- T009-T016 must complete before T017 (implementation before snapshot updates)
- T017-T019 must complete before T020 (tests before final validation)

### Asset Requirements
| Asset | Format | Size | Notes |
|-------|--------|------|-------|
| logo-icon.svg | SVG | 32x30 (current) | Use CSS custom properties for colors |
| logo-text.svg | SVG | 26x30 (current) | Use Forge Metals palette |
| favicon.ico | ICO | 16/32/48px | Multi-resolution required |
| n8n-logo.png | PNG | 200px width | Transparent background |

### Color Token Usage
SVG files should use CSS custom properties with fallback pattern:
```css
var(--color--primary, var(--color-primary))
```

---

## File Reference

| File | Action | Task |
|------|--------|------|
| `packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-icon.svg` | Replace | T004, T009 |
| `packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-text.svg` | Replace | T005, T010 |
| `packages/frontend/editor-ui/public/favicon.ico` | Replace | T006, T011 |
| `packages/cli/src/user-management/email/templates/n8n-logo.png` | Replace | T007, T012 |
| `packages/frontend/editor-ui/src/app/composables/useDocumentTitle.ts` | Modify | T013, T014 |
| `packages/@n8n/i18n/src/locales/en.json` | Modify | T015 |
| `packages/frontend/@n8n/design-system/src/components/N8nLogo/Logo.test.ts` | Modify | T017 |

---

## Next Steps

Run `/implement` to begin AI-led implementation.

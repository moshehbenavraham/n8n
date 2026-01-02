# Session 02: Brand Identity Assets

**Session ID**: `phase00-session02-brand-identity-assets`
**Status**: Not Started
**Estimated Tasks**: ~15
**Estimated Duration**: 2-3 hours

---

## Objective

Replace all brand identity assets (logos, favicon) and update brand text references throughout the application to establish the Forge Mark visual identity.

---

## Scope

### In Scope (MVP)
- Replace logo-icon.svg with Forge Mark icon
- Replace logo-text.svg with new wordmark
- Replace favicon.ico (16x16, 32x32, 48x48)
- Replace email template logo PNG
- Update document title in useDocumentTitle.ts
- Update brand text references in en.json (i18n)
- Update any hardcoded brand strings
- Verify N8nLogo component renders correctly

### Out of Scope
- Full i18n translation updates (only brand references)
- Custom icon additions beyond logos
- Email template content changes (Session 06)

---

## Prerequisites

- [ ] Session 01 completed (color system in place)
- [ ] Forge Mark logo SVG files created
- [ ] Favicon ICO file created
- [ ] Email-safe PNG logo created (200px width)

---

## Deliverables

1. New `logo-icon.svg` - Forge Mark icon
2. New `logo-text.svg` - Forge Mark wordmark
3. New `favicon.ico` with multiple sizes
4. New `n8n-logo.png` for email templates
5. Updated `useDocumentTitle.ts` with new DEFAULT_TITLE
6. Updated `en.json` with brand text changes

---

## Key Files

- `packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-icon.svg`
- `packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-text.svg`
- `packages/frontend/editor-ui/public/favicon.ico`
- `packages/cli/src/user-management/email/templates/n8n-logo.png`
- `packages/frontend/editor-ui/src/app/composables/useDocumentTitle.ts`
- `packages/@n8n/i18n/src/locales/en.json`

---

## Success Criteria

- [ ] Logo icon displays correctly in header/navigation
- [ ] Logo text/wordmark renders correctly
- [ ] Favicon appears in browser tab
- [ ] Document title shows new brand name
- [ ] i18n brand references updated (~200 references reviewed)
- [ ] N8nLogo component works in all size variants
- [ ] Email logo PNG accessible and correct dimensions
- [ ] No broken image references
- [ ] `pnpm build` passes without errors

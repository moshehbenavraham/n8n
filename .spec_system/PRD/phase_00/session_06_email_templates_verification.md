# Session 06: Email Templates & Foundation Verification

**Session ID**: `phase00-session06-email-templates-verification`
**Status**: Not Started
**Estimated Tasks**: ~15
**Estimated Duration**: 2-3 hours

---

## Objective

Update email templates with new brand identity and perform comprehensive verification of Phase 00 foundation changes across light mode, dark mode, and Storybook.

---

## Scope

### In Scope (MVP)
- Update _common.mjml with new brand colors (6 values)
- Update _footer.mjml with company info
- Verify n8n-logo.png replaced (from Session 02)
- Run MJML build to compile templates
- Verify all 5 email templates render correctly
- Test light mode rendering across application
- Test dark mode rendering across application
- Verify Storybook renders all 96+ stories correctly
- Run full build verification
- Document any remaining issues for Phase 01

### Out of Scope
- New email template creation
- Email content changes beyond branding
- Email delivery testing

---

## Prerequisites

- [ ] Sessions 01-05 completed
- [ ] Logo PNG already replaced (Session 02)
- [ ] All token systems in place

---

## Deliverables

1. Updated `_common.mjml` with Forge Metals colors
2. Updated `_footer.mjml` with company information
3. Compiled email templates (MJML build)
4. Light mode verification checklist completed
5. Dark mode verification checklist completed
6. Storybook verification completed
7. Full build passes
8. Issues log for Phase 01 (if any)

---

## Key Files

### Email Templates
- `packages/cli/src/user-management/email/templates/_common.mjml`
- `packages/cli/src/user-management/email/templates/_footer.mjml`
- `packages/cli/src/user-management/email/templates/user-invited.mjml`
- `packages/cli/src/user-management/email/templates/password-reset.mjml`
- `packages/cli/src/user-management/email/templates/workflow-shared.mjml`
- `packages/cli/src/user-management/email/templates/credentials-shared.mjml`
- `packages/cli/src/user-management/email/templates/project-shared.mjml`

---

## Verification Checklist

### Light Mode
- [ ] Primary color (amber) visible on buttons/links
- [ ] Background colors correct
- [ ] Text colors readable
- [ ] Headers styled correctly
- [ ] Sidebar/navigation themed
- [ ] Form inputs styled
- [ ] Logos display correctly

### Dark Mode
- [ ] Theme toggle works
- [ ] Dark backgrounds applied
- [ ] Text contrast acceptable
- [ ] Primary color works on dark
- [ ] No light mode bleed-through
- [ ] Shadows appropriate for dark

### Storybook
- [ ] All 96+ stories render
- [ ] Component variants display correctly
- [ ] Interactive states work
- [ ] Color tokens applied
- [ ] No console errors

### Build
- [ ] `pnpm build` completes
- [ ] No TypeScript errors
- [ ] No SCSS compilation errors
- [ ] Bundle size reasonable

---

## Success Criteria

- [ ] _common.mjml updated with 6 new color values
- [ ] _footer.mjml updated with company info
- [ ] MJML templates compile without errors
- [ ] All 5 email templates render correctly
- [ ] Light mode verification complete
- [ ] Dark mode verification complete
- [ ] Storybook shows all stories correctly
- [ ] `pnpm build` passes
- [ ] Issues documented for Phase 01 (if any)
- [ ] Phase 00 ready for sign-off

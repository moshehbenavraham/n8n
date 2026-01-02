# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-02
**Project State**: Phase 00 - Foundation - Colors, Typography, Branding
**Completed Sessions**: 5/6

---

## Recommended Next Session

**Session ID**: `phase00-session06-email-templates-verification`
**Session Name**: Email Templates & Foundation Verification
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: ~15

---

## Why This Session Next?

### Prerequisites Met
- [x] Sessions 01-05 completed
- [x] Logo PNG already replaced (Session 02)
- [x] All token systems in place
- [x] Color primitives (Forge Metals) implemented
- [x] Motion and atmosphere tokens ready

### Dependencies
- **Builds on**: Session 02 (brand assets), Session 05 (color remediation)
- **Enables**: Phase 00 completion and Phase 01 readiness

### Project Progression
This is the **final session of Phase 00**. Completing it:
1. Updates email templates with Obsidian Forge branding
2. Performs comprehensive verification of all foundation work
3. Validates light mode, dark mode, and Storybook rendering
4. Documents any remaining issues for Phase 01
5. Enables Phase 00 sign-off and transition to Component Library phase

---

## Session Overview

### Objective
Update email templates with new brand identity and perform comprehensive verification of Phase 00 foundation changes across light mode, dark mode, and Storybook.

### Key Deliverables
1. Updated `_common.mjml` with Forge Metals colors (6 values)
2. Updated `_footer.mjml` with company information
3. Compiled email templates (MJML build)
4. Light mode verification checklist completed
5. Dark mode verification checklist completed
6. Storybook verification (96+ stories)
7. Full build passes (`pnpm build`)
8. Issues log for Phase 01 (if any)

### Scope Summary
- **In Scope (MVP)**: Email template branding, MJML compilation, visual verification checklists, build validation
- **Out of Scope**: New email template creation, email content changes, email delivery testing

---

## Technical Considerations

### Technologies/Patterns
- MJML (email templating language)
- Hardcoded hex colors (email clients don't support CSS variables)
- Storybook for visual regression
- Tailwind + SCSS for theme verification

### Potential Challenges
- Email clients have limited CSS support - must use inline styles
- MJML build may require specific npm/pnpm commands
- Storybook verification is manual without automated visual regression

### Relevant Considerations
- [P00] **~615 hardcoded colors intentionally kept**: Email templates require hardcoded colors - this is expected, not technical debt
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006)
- [P00] **Dark mode via data-theme attribute**: Verify `body[data-theme='dark']` toggles theme correctly

---

## Alternative Sessions

If this session is blocked:
1. **None** - This is the only remaining session in Phase 00
2. **Skip to Phase 01** - Only if email templates are explicitly deferred (requires PRD update)

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

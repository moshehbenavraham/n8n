# Session Specification

**Session ID**: `phase00-session06-email-templates-verification`
**Phase**: 00 - Foundation - Colors, Typography, Branding
**Status**: Not Started
**Created**: 2026-01-02

---

## 1. Session Overview

This is the final session of Phase 00, completing the Obsidian Forge design system foundation. The session focuses on two key deliverables: updating email templates with the new Forge Metals brand colors, and performing comprehensive verification across all foundation changes implemented in Sessions 01-05.

Email templates represent a critical user touchpoint - password resets, workflow shares, and user invitations all carry the brand identity. Currently, these templates use legacy n8n colors (coral `#ff6f5c`, text `#414244`). This session updates the 6 hardcoded color values in `_common.mjml` to reflect the Forge Metals palette, updates company information in `_footer.mjml`, and verifies the logo PNG replacement from Session 02.

The verification component ensures Phase 00 quality gates are met: light mode rendering, dark mode theme switching, Storybook component library (96+ stories), and full build validation. Any issues discovered will be documented for Phase 01 remediation, enabling a clean handoff to the Component Library phase.

---

## 2. Objectives

1. Update email templates with Forge Metals brand colors (6 values in `_common.mjml`)
2. Update email footer with company information (address, copyright)
3. Verify email templates compile successfully with MJML
4. Complete comprehensive visual verification across light mode, dark mode, and Storybook
5. Validate full build passes with no errors
6. Document any remaining issues for Phase 01 remediation

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Forge Metals primitives and semantic tokens
- [x] `phase00-session02-brand-identity-assets` - Logo PNG, favicon, brand identity (includes email logo)
- [x] `phase00-session03-element-plus-token-integration` - Element Plus themed with tokens
- [x] `phase00-session04-visual-atmosphere-motion` - Motion and atmosphere tokens
- [x] `phase00-session05-hardcoded-color-remediation` - High-visibility colors tokenized

### Required Tools/Knowledge
- MJML (email templating language)
- pnpm for build commands
- Storybook for visual verification
- Understanding of email client CSS limitations (no CSS variables)

### Environment Requirements
- Node.js and pnpm installed
- Access to design-system Storybook (port 6006)
- Browser for manual verification

---

## 4. Scope

### In Scope (MVP)
- Update `_common.mjml` with 6 Forge Metals color values (hex format)
- Update `_footer.mjml` with company information
- Verify `n8n-logo.png` was replaced in Session 02
- Compile all 7 MJML templates successfully
- Complete light mode verification checklist
- Complete dark mode verification checklist
- Verify all 96+ Storybook stories render correctly
- Run `pnpm build` and verify no errors
- Document any issues found for Phase 01

### Out of Scope (Deferred)
- New email template creation - *Reason: Beyond foundation scope*
- Email content/copy changes - *Reason: Content, not design*
- Email delivery testing - *Reason: Requires email server configuration*
- Automated visual regression testing - *Reason: Phase 01+ scope*
- i18n/localization of email templates - *Reason: Phase 01+ scope*

---

## 5. Technical Approach

### Architecture
Email templates use MJML (Mailjet Markup Language), which compiles to HTML with inline styles. Email clients have extremely limited CSS support - no CSS variables, limited selector support, many properties ignored. All styling must be hardcoded hex values.

The template structure:
- `_common.mjml` - Shared head with fonts, attributes, and default colors
- `_footer.mjml` - Shared footer partial with company info
- `_logo.mjml` - Logo image reference (uses `cid:n8n-logo`)
- 6 template files - Individual email templates that include the partials

### Design Patterns
- **Partials Pattern**: Shared styles in `_common.mjml` cascade to all templates
- **CID Image Reference**: Logo embedded as `cid:n8n-logo` for email clients
- **Mobile-First MJML**: MJML handles responsive design automatically

### Technology Stack
- MJML 4.x (email templating)
- Node.js (MJML compilation)
- Storybook 9 (visual verification)
- pnpm (package management)

---

## 6. Deliverables

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `packages/cli/src/user-management/email/templates/_common.mjml` | Update 6 color values to Forge Metals hex | ~5 |
| `packages/cli/src/user-management/email/templates/_footer.mjml` | Update company name/address | ~4 |

### Files to Verify (No Changes)
| File | Verification |
|------|--------------|
| `packages/cli/src/user-management/email/templates/_logo.mjml` | Confirm logo reference unchanged |
| `packages/cli/src/user-management/email/templates/user-invited.mjml` | Compile and render check |
| `packages/cli/src/user-management/email/templates/password-reset-requested.mjml` | Compile and render check |
| `packages/cli/src/user-management/email/templates/workflow-shared.mjml` | Compile and render check |
| `packages/cli/src/user-management/email/templates/workflow-deactivated.mjml` | Compile and render check |
| `packages/cli/src/user-management/email/templates/credentials-shared.mjml` | Compile and render check |
| `packages/cli/src/user-management/email/templates/project-shared.mjml` | Compile and render check |

### Documentation to Create
| File | Purpose |
|------|---------|
| `.spec_system/specs/phase00-session06-email-templates-verification/verification-report.md` | Verification checklist results |
| `.spec_system/specs/phase00-session06-email-templates-verification/IMPLEMENTATION_SUMMARY.md` | Session completion summary |

---

## 7. Success Criteria

### Functional Requirements
- [ ] `_common.mjml` updated with 6 Forge Metals hex color values
- [ ] `_footer.mjml` updated with company information
- [ ] All 7 MJML templates compile without errors
- [ ] Light mode: Primary color (amber) visible on interactive elements
- [ ] Dark mode: Theme toggle functions, dark backgrounds applied
- [ ] Storybook: All 96+ stories render without console errors

### Testing Requirements
- [ ] MJML compilation completes successfully
- [ ] Manual visual inspection of compiled email HTML
- [ ] Light mode verification checklist completed
- [ ] Dark mode verification checklist completed
- [ ] Storybook verification completed

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] `pnpm build` passes with no errors
- [ ] No TypeScript errors
- [ ] No SCSS compilation errors
- [ ] Code follows project conventions (CONVENTIONS.md)

---

## 8. Implementation Notes

### Key Considerations
- Email clients require hardcoded hex values - CSS variables not supported
- MJML compiles to inline styles automatically
- Logo uses CID reference (`cid:n8n-logo`) - actual PNG attached at send time
- Footer must comply with anti-spam regulations (physical address)

### Color Mapping (Forge Metals to Hex)

The following color values should be used in `_common.mjml`:

| Current Value | New Value | Purpose | Forge Metals Reference |
|---------------|-----------|---------|------------------------|
| `#ff6f5c` | `#e8a230` | Button background | Primary (Forge Amber) hsl(38, 92%, 55%) |
| `#ffffff` | `#ffffff` | Button text, body bg | Keep white |
| `#414244` | `#2a3441` | Body text | Text Primary (dark obsidian) |
| `#d9d9d9` | `#d4cfc7` | Divider border | Border Subtle (warm gray) |
| `#909398` | `#6b7280` | Footer text | Text Secondary |

### Potential Challenges
- **Email client rendering variance**: Different email clients render HTML differently. Focus on major clients (Gmail, Outlook, Apple Mail)
- **Color contrast**: Ensure text remains readable on amber buttons
- **MJML version compatibility**: Use existing MJML version in project

### Relevant Considerations
- [P00] **~615 hardcoded colors intentionally kept**: Email templates are part of this exception - hardcoded colors are required, not technical debt
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006)
- [P00] **Dark mode via data-theme attribute**: Verify `body[data-theme='dark']` toggles correctly
- [P00] **Build verification**: `pnpm build` uses Turbo - run full build after changes

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No Unicode characters in MJML templates.

---

## 9. Testing Strategy

### Unit Tests
- No unit tests required for MJML template changes
- Existing email service tests verify template loading

### Integration Tests
- MJML compilation serves as integration test
- Build process validates template syntax

### Manual Testing

**Email Template Verification:**
1. Review compiled HTML output for each template
2. Verify color values match Forge Metals palette
3. Check logo placeholder renders correctly
4. Validate responsive layout (MJML handles automatically)

**Light Mode Verification Checklist:**
- [ ] Primary color (amber) visible on buttons/links
- [ ] Background colors correct (warm white tones)
- [ ] Text colors readable with proper contrast
- [ ] Headers/navigation styled correctly
- [ ] Sidebar themed properly
- [ ] Form inputs styled
- [ ] Logos display correctly

**Dark Mode Verification Checklist:**
- [ ] Theme toggle switches themes correctly
- [ ] Dark backgrounds applied (obsidian tones)
- [ ] Text contrast acceptable (light on dark)
- [ ] Primary color works on dark backgrounds
- [ ] No light mode bleed-through
- [ ] Shadows appropriate for dark theme

**Storybook Verification:**
- [ ] All 96+ stories render without errors
- [ ] Component variants display correctly
- [ ] Interactive states functional
- [ ] Color tokens applied consistently
- [ ] No console errors in browser dev tools

### Edge Cases
- Very long email addresses in templates
- Non-ASCII characters in user names (handled by email service)
- Template variables render correctly (`{{ userName }}`, `{{ currentYear }}`)

---

## 10. Dependencies

### External Libraries
- MJML: 4.x (existing in project)
- Storybook: 9.x (existing in project)

### Other Sessions
- **Depends on**:
  - `phase00-session01-color-system-foundation` (color tokens)
  - `phase00-session02-brand-identity-assets` (logo PNG)
  - `phase00-session03-element-plus-token-integration` (Element Plus theming)
  - `phase00-session04-visual-atmosphere-motion` (motion tokens)
  - `phase00-session05-hardcoded-color-remediation` (color consistency)
- **Depended by**:
  - Phase 01 sessions (enables Phase 00 sign-off)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

# Session Specification

**Session ID**: `phase00-session02-brand-identity-assets`
**Phase**: 00 - Foundation - Colors, Typography, Branding
**Status**: Not Started
**Created**: 2026-01-02

---

## 1. Session Overview

This session establishes the visual brand identity for Obsidian Forge by replacing all existing n8n brand assets with the new Forge Mark identity. Building on the completed color system foundation from Session 01, this session transforms every user touchpoint - from the browser tab favicon to the header logo to email communications - into a cohesive brand experience.

The brand identity assets are foundational to all subsequent design work. With the Forge Metals color palette now in place (defined in Session 01), the brand assets can leverage these colors to create a unified visual language. Every user interaction with the application - opening a new tab, viewing the header, receiving an email notification - will reflect the Obsidian Forge identity.

This session has minimal technical complexity but maximum visual impact. The changes are primarily asset replacements and string updates, making it an ideal session to establish brand presence before diving into more complex component styling in later sessions.

---

## 2. Objectives

1. Replace all logo assets (icon and wordmark) with Forge Mark brand identity
2. Update browser favicon to Forge Mark icon with proper multi-resolution support
3. Update document title and brand text references throughout the application
4. Ensure N8nLogo component renders correctly in all size variants with new assets

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Forge Metals color system in place

### Required Assets (Pre-Session)
- [ ] Forge Mark `logo-icon.svg` - Brand icon (designed and exported)
- [ ] Forge Mark `logo-text.svg` - Wordmark (designed and exported)
- [ ] `favicon.ico` - Multi-size ICO (16x16, 32x32, 48x48)
- [ ] `n8n-logo.png` - Email-safe PNG (200px width, transparent background)

### Environment Requirements
- Node.js and pnpm installed
- Access to design-system package
- Storybook available at port 6006 for verification

---

## 4. Scope

### In Scope (MVP)
- Replace `logo-icon.svg` with Forge Mark icon
- Replace `logo-text.svg` with Forge Mark wordmark
- Replace `favicon.ico` with new multi-resolution icon
- Replace email template logo PNG
- Update `DEFAULT_TITLE` in `useDocumentTitle.ts`
- Update `DEFAULT_TAGLINE` if applicable
- Update brand text references in `en.json` (i18n)
- Verify N8nLogo component renders correctly in all variants
- Update Logo.test.ts snapshots if needed

### Out of Scope (Deferred)
- Full i18n translation updates - *Reason: Only brand-specific references in scope*
- Custom icon additions beyond logos - *Reason: Session 03+ concern*
- Email template content changes - *Reason: Session 06 scope*
- Logo animations or transitions - *Reason: Session 04 (motion tokens)*

---

## 5. Technical Approach

### Architecture
The brand identity system uses a simple asset replacement model. SVG files are imported directly by the N8nLogo Vue component, which handles rendering at different sizes. The favicon is served statically from the public directory. Brand text is centralized in the i18n locale files.

### Design Patterns
- **Asset Imports**: Vue SFC imports SVG assets directly for bundling
- **Composable Pattern**: `useDocumentTitle` composable manages dynamic title updates
- **i18n Pattern**: Brand strings in `en.json` enable future localization

### Technology Stack
- SVG for scalable logo assets
- ICO format (multi-resolution) for favicon
- PNG format for email compatibility
- Vue 3 Composition API
- TypeScript for type safety

---

## 6. Deliverables

### Files to Create/Replace
| File | Purpose | Est. Lines |
|------|---------|------------|
| `design-system/src/components/N8nLogo/logo-icon.svg` | Forge Mark icon | ~20 |
| `design-system/src/components/N8nLogo/logo-text.svg` | Forge Mark wordmark | ~30 |
| `editor-ui/public/favicon.ico` | Browser tab icon | binary |
| `cli/src/user-management/email/templates/n8n-logo.png` | Email logo | binary |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `editor-ui/src/app/composables/useDocumentTitle.ts` | Update DEFAULT_TITLE and DEFAULT_TAGLINE | ~5 |
| `@n8n/i18n/src/locales/en.json` | Update brand text references | ~50 |
| `design-system/src/components/N8nLogo/Logo.test.ts` | Update snapshots if needed | ~10 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Logo icon displays correctly in header/navigation
- [ ] Logo wordmark renders correctly where used
- [ ] Favicon appears correctly in browser tab (all sizes)
- [ ] Document title shows "Obsidian Forge" (or chosen brand name)
- [ ] Email logo PNG renders correctly (200px width)
- [ ] N8nLogo component works in all size variants (xs, sm, md, lg, xl)

### Testing Requirements
- [ ] Visual verification in Storybook (port 6006)
- [ ] Manual browser tab favicon verification
- [ ] Logo component snapshot tests pass
- [ ] Full build completes without errors

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] SVG files optimized (no unnecessary metadata)
- [ ] PNG uses transparent background
- [ ] Code follows project conventions (CONVENTIONS.md)

---

## 8. Implementation Notes

### Key Considerations
- Logo SVGs should use CSS custom properties for colors where appropriate
- Favicon ICO must include 16x16, 32x32, and 48x48 sizes for proper display
- Email PNG must be exactly 200px width for consistent email client rendering
- Document title format: `[status] Workflow Name - Brand Name`

### Potential Challenges
- **Logo asset availability**: SVG/ICO/PNG files must be designed and exported before implementation can begin. If assets are not ready, consider Session 03 or 04 as alternatives.
- **i18n reference scope**: The en.json file contains ~200 brand references. Only clear brand name references should be updated; context-dependent strings need careful review.
- **Logo color tokens**: SVG colors should reference CSS variables for theme consistency, maintaining backwards compatibility per dual token convention.

### Relevant Considerations
- [P00] **Dual token naming convention**: Logo colors should reference CSS variables using the fallback pattern (e.g., `var(--color--primary, var(--color-primary))`) to maintain backwards compatibility.
- [P00] **Design system well-organized**: Use Storybook at port 6006 to verify all N8nLogo component variants after asset replacement.
- [P00] **Storybook commands**: Run `cd packages/frontend/@n8n/design-system && pnpm storybook` to launch verification environment.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). SVG files should avoid special characters in comments or metadata.

---

## 9. Testing Strategy

### Unit Tests
- Logo.test.ts snapshot tests for component rendering
- Verify all size variants (xs, sm, md, lg, xl) render without errors

### Visual Testing
- Storybook verification of N8nLogo component in all variants
- Dark mode and light mode appearance verification
- Favicon visibility at different zoom levels

### Manual Testing
- Open application in browser, verify favicon in tab
- Navigate to main view, verify header logo
- Check document title in browser tab
- Trigger email notification, verify logo in email (if possible)

### Edge Cases
- Logo rendering at extreme zoom levels
- Favicon display in different browsers (Chrome, Firefox, Safari, Edge)
- Logo display when color tokens are not loaded (fallback behavior)

---

## 10. Dependencies

### External Libraries
- None - uses native Vue/TypeScript and static assets

### Asset Dependencies
- Forge Mark design files (must be provided before implementation)
- Image optimization tools for PNG (optional: pngquant, optipng)
- ICO generation tool for favicon (optional: imagemagick, realfavicongenerator.net)

### Other Sessions
- **Depends on**: `phase00-session01-color-system-foundation` (color tokens available)
- **Depended by**: All subsequent sessions benefit from established brand identity

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

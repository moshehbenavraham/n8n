# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-02
**Project State**: Phase 00 - Foundation - Colors, Typography, Branding
**Completed Sessions**: 1

---

## Recommended Next Session

**Session ID**: `phase00-session02-brand-identity-assets`
**Session Name**: Brand Identity Assets
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: ~15

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (color system in place)
- [ ] Forge Mark logo SVG files created (needs user confirmation)
- [ ] Favicon ICO file created (needs user confirmation)
- [ ] Email-safe PNG logo created (needs user confirmation)

### Dependencies
- **Builds on**: phase00-session01-color-system-foundation (color primitives now available)
- **Enables**: All subsequent sessions benefit from proper brand assets for visual testing

### Project Progression
Session 02 is the natural next step after establishing the color system. Brand identity assets (logos, favicon, document titles) provide the visual foundation that makes all subsequent design work cohesive. With the Forge Metals color palette in place, the brand assets can now be integrated to establish the complete "Obsidian Forge" identity.

This session has minimal technical dependencies but maximum visual impact - every user touchpoint (browser tab, header, emails) will reflect the new brand.

---

## Session Overview

### Objective
Replace all brand identity assets (logos, favicon) and update brand text references throughout the application to establish the Forge Mark visual identity.

### Key Deliverables
1. New `logo-icon.svg` - Forge Mark icon
2. New `logo-text.svg` - Forge Mark wordmark
3. New `favicon.ico` with multiple sizes (16x16, 32x32, 48x48)
4. New `n8n-logo.png` for email templates
5. Updated `useDocumentTitle.ts` with new DEFAULT_TITLE
6. Updated `en.json` with brand text changes

### Scope Summary
- **In Scope (MVP)**: Logo replacement, favicon, document title, i18n brand references, N8nLogo component verification
- **Out of Scope**: Full i18n translation updates, custom icons beyond logos, email template content (Session 06)

---

## Technical Considerations

### Technologies/Patterns
- SVG assets for scalable logos
- ICO format with multiple sizes for favicon
- PNG format (200px width) for email compatibility
- Vue composable (useDocumentTitle.ts) for dynamic titles
- JSON i18n files for brand text

### Potential Challenges
- **Logo asset availability**: SVG/ICO/PNG files must be created before implementation
- **i18n scope**: ~200 brand references need review; only brand-specific changes in scope
- **N8nLogo component variants**: Must verify all size variants render correctly

### Relevant Considerations
- [P00] **Dual token naming convention**: Logo colors should reference CSS variables maintaining backwards compatibility
- [P00] **Design system well-organized**: Use Storybook (port 6006) to verify N8nLogo component after updates

---

## Alternative Sessions

If this session is blocked (e.g., logo assets not ready):

1. **phase00-session03-element-plus-token-integration** - Can proceed with token updates independent of brand assets
2. **phase00-session04-visual-atmosphere-motion** - Motion tokens don't depend on logo assets

---

## Pre-Session Checklist

Before starting implementation, confirm:
- [ ] Forge Mark logo-icon.svg is ready (designed and exported)
- [ ] Forge Mark logo-text.svg (wordmark) is ready
- [ ] favicon.ico with 16x16, 32x32, 48x48 sizes is ready
- [ ] Email logo PNG (200px width, transparent background) is ready

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

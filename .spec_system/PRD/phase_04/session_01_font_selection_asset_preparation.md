# Session 01: Font Selection and Asset Preparation

**Phase**: 04 - Typography Evolution
**Status**: Not Started
**Estimated Tasks**: 18

---

## Objectives

1. Download and validate production-ready font files
2. Prepare WOFF2 assets with optimal compression
3. Update @font-face declarations for new fonts
4. Verify variable weight axis functionality across browsers
5. Establish font loading performance baseline

---

## Tasks

### Font Asset Acquisition
- [ ] Download Outfit Variable WOFF2 from Google Fonts or GitHub
- [ ] Download JetBrains Mono Variable WOFF2 from official source
- [ ] Verify both fonts include full variable weight axis
- [ ] Check file sizes (target: Outfit ~85KB, JetBrains ~110KB)
- [ ] Validate WOFF2 format integrity

### Asset Preparation
- [ ] Remove old font files (InterVariable.woff2, InterVariable-Italic.woff2, CommitMonoVariable.woff2)
- [ ] Add new font files to `assets/fonts/` directory
- [ ] Rename files to consistent convention (Outfit-Variable.woff2, JetBrainsMono-Variable.woff2)
- [ ] Verify file permissions and git tracking

### @font-face Updates
- [ ] Update `fonts.scss` with Outfit @font-face declaration
- [ ] Update `fonts.scss` with JetBrains Mono @font-face declaration
- [ ] Set appropriate `font-weight` range (100 900 for variable)
- [ ] Maintain `font-display: swap` for performance
- [ ] Update `$font-path` reference if needed

### Storybook Sync
- [ ] Update `.storybook/fonts.scss` to mirror main fonts.scss
- [ ] Verify Storybook loads new fonts correctly
- [ ] Test font rendering in Storybook preview

### Verification
- [ ] Build design system package (`pnpm build`)
- [ ] Verify no font loading errors in console
- [ ] Test variable weight rendering (300, 400, 500, 600, 700)
- [ ] Cross-browser check: Chrome, Firefox, Safari

---

## Files to Modify

- `packages/frontend/@n8n/design-system/assets/fonts/` (replace files)
- `packages/frontend/@n8n/design-system/src/css/fonts.scss`
- `packages/frontend/@n8n/design-system/.storybook/fonts.scss`

---

## Acceptance Criteria

- [ ] Old font files removed from assets/fonts/
- [ ] Outfit-Variable.woff2 and JetBrainsMono-Variable.woff2 present
- [ ] @font-face declarations updated for both fonts
- [ ] Storybook renders with new fonts
- [ ] Build completes without errors
- [ ] Combined font payload ≤200KB

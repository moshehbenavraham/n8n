# Session Specification

**Session ID**: `phase04-session01-font-selection-asset-preparation`
**Phase**: 04 - Typography Evolution
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session initiates Phase 04 by replacing the current font assets (InterVariable and CommitMono) with the new "Forge Precision" typography system. Outfit Variable becomes the primary UI font, delivering geometric warmth and distinctive character, while JetBrains Mono Variable replaces CommitMono as the engineer's code font with superior ligatures and readability.

Font asset replacement is the foundational first step of the Typography Evolution phase. All subsequent sessions (token alignment, component updates, QA) depend on having the new font files in place and @font-face declarations correctly configured. This session focuses solely on the asset swap and verification, deferring token value changes and component-level updates to later sessions.

The change reduces the combined font payload from ~429KB to approximately 195KB while delivering a more distinctive, memorable typographic identity that embodies the Obsidian Forge aesthetic of precision engineering with human warmth.

---

## 2. Objectives

1. Download and install production-ready Outfit Variable and JetBrains Mono Variable WOFF2 font files
2. Remove legacy font files (InterVariable, CommitMono) from the assets directory
3. Update @font-face declarations in fonts.scss with correct variable font configuration
4. Synchronize Storybook font configuration with main design system
5. Verify font loading and rendering across browsers with build verification

---

## 3. Prerequisites

### Required Sessions
- [x] `phase03-session06-storybook-documentation-qa` - Design system stable, Storybook verified

### Required Tools/Knowledge
- WOFF2 variable font format understanding
- @font-face declaration syntax for variable fonts
- CSS `font-weight` range syntax for variable fonts

### Environment Requirements
- pnpm installed and configured
- Build system functional (`pnpm build`)
- Storybook operational (port 6006)
- Chrome, Firefox, Safari available for cross-browser testing

---

## 4. Scope

### In Scope (MVP)
- Download Outfit Variable WOFF2 from Google Fonts/GitHub
- Download JetBrains Mono Variable WOFF2 from official source
- Remove old font files from assets/fonts/ directory
- Add new font files with consistent naming convention
- Update fonts.scss @font-face declarations
- Update Storybook fonts.scss to mirror main configuration
- Verify build completes without font-related errors
- Basic cross-browser font rendering check

### Out of Scope (Deferred)
- Typography token value changes (weight, spacing, line-height) - *Reason: Session 02*
- Component-level typography updates - *Reason: Session 03*
- Typography documentation and guidelines - *Reason: Session 04*
- Font subsetting or custom subset generation - *Reason: Using pre-built variable fonts*

---

## 5. Technical Approach

### Architecture
Font files are stored in `packages/frontend/@n8n/design-system/assets/fonts/` and referenced via the `$font-path` SCSS variable. The @font-face declarations in `fonts.scss` define the font families that cascade through the design system. Storybook has its own `fonts.scss` in `.storybook/` that must stay synchronized.

Variable fonts use a single file per family with a weight range (100-900 or 100-800) instead of multiple static weight files. This reduces HTTP requests and total payload while providing smooth weight interpolation.

### Design Patterns
- **Variable Font Pattern**: Single WOFF2 file with weight axis, reducing multiple file downloads
- **font-display: swap**: Ensures text remains visible during font loading
- **Path Variables**: Use `$font-path` for maintainable asset references

### Technology Stack
- WOFF2 format (optimal compression for web fonts)
- SCSS for font-face declarations
- CSS custom properties for font-family tokens (existing)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `assets/fonts/Outfit-Variable.woff2` | Primary UI font (variable weight 100-900) | Binary ~85KB |
| `assets/fonts/JetBrainsMono-Variable.woff2` | Monospace code font (variable weight 100-800) | Binary ~110KB |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/fonts.scss` | Replace @font-face declarations for Outfit and JetBrains Mono | ~30 |
| `design-system/.storybook/fonts.scss` | Mirror main fonts.scss configuration | ~30 |

### Files to Delete
| File | Reason |
|------|--------|
| `assets/fonts/InterVariable.woff2` | Replaced by Outfit |
| `assets/fonts/InterVariable-Italic.woff2` | Replaced by Outfit |
| `assets/fonts/CommitMonoVariable.woff2` | Replaced by JetBrains Mono |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Outfit Variable WOFF2 file present in assets/fonts/ (~85KB)
- [ ] JetBrains Mono Variable WOFF2 file present in assets/fonts/ (~110KB)
- [ ] Old font files removed (InterVariable, CommitMono)
- [ ] @font-face declarations updated with correct weight ranges
- [ ] Combined font payload <=200KB

### Testing Requirements
- [ ] Storybook loads and renders with new fonts (port 6006)
- [ ] Variable weight axis functional (test 300, 400, 500, 600, 700 weights)
- [ ] No font loading errors in browser console
- [ ] Manual check in Chrome, Firefox, Safari

### Quality Gates
- [ ] All files ASCII-encoded (for SCSS, not binaries)
- [ ] Unix LF line endings
- [ ] `pnpm build` completes without errors
- [ ] Code follows project conventions (kebab-case font file names)

---

## 8. Implementation Notes

### Key Considerations
- Outfit weight range is 100-900 (full variable axis)
- JetBrains Mono weight range is 100-800 (not 100-900)
- Use `font-weight: 100 900` syntax in @font-face for variable fonts
- Maintain `font-display: swap` for performance
- Font family names in @font-face must match token references exactly

### Potential Challenges
- **Font file sourcing**: Google Fonts provides Outfit; JetBrains official site provides their mono. Verify downloads are complete variable fonts, not static subsets.
- **Weight axis compatibility**: Older browsers may not support variable font weight syntax. Graceful degradation expected.
- **Storybook path differences**: Storybook's font path may differ from main app. Verify correct `$font-path` or relative paths.
- **Git LFS considerations**: Large binary files may require Git LFS. Check existing font handling pattern.

### Relevant Considerations
- [P00] **Design system well-organized**: Use Storybook at port 6006 to verify font changes render correctly across all 404 stories.
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` for verification.
- [P00] **Build verification**: `pnpm build` uses Turbo for all packages. Run full build after font changes.

### ASCII Reminder
All output SCSS files must use ASCII-only characters (0-127). Font files are binary and exempt.

---

## 9. Testing Strategy

### Unit Tests
- N/A (no code logic, asset replacement only)

### Integration Tests
- Verify design-system package builds successfully
- Confirm Storybook loads without font errors

### Manual Testing
- Open Storybook, navigate to typography stories
- Test text at various font weights (300, 400, 500, 600, 700)
- Verify monospace rendering in code block components
- Check both light and dark themes

### Edge Cases
- Very light weight (100) rendering - may appear too thin on some displays
- Bold weight (800+) rendering - verify crisp edges
- Long text blocks for readability assessment
- Mixed content (UI font + code font) in same view

---

## 10. Dependencies

### External Libraries
- Outfit Variable: Open Font License 1.1 (Google Fonts / GitHub)
- JetBrains Mono Variable: Open Font License 1.1 (JetBrains GitHub)

### Other Sessions
- **Depends on**: Phase 03 complete (stable design system)
- **Depended by**: `phase04-session02-typography-token-alignment`, `phase04-session03-component-typography-updates`, `phase04-session04-typography-qa-documentation`

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

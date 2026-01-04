# Session Specification

**Session ID**: `phase00-session01-color-system-foundation`
**Phase**: 00 - Foundation: Colors, Typography, Branding
**Status**: Not Started
**Created**: 2026-01-02

---

## 1. Session Overview

This session establishes the complete "Forge Metals" color system that forms the foundation of the Obsidian Forge design system. The objective is to implement five new color primitive scales (amber, obsidian, steel, verdigris, ember), semantic token mappings for both light and dark modes, typography tokens, motion tokens, and shadow/border tokens.

The color system follows a three-tier token cascade architecture: Primitives > Semantic > Component. By modifying the primitives in `_primitives.scss` and semantic mappings in `_tokens.scss` / `_tokens.dark.scss`, changes cascade automatically through the application's ~14,300 token usages. This session is foundational - all subsequent sessions in Phase 00 depend on these color scales and token mappings being in place.

The "Obsidian Forge" aesthetic evokes industrial luxury meets precision engineering. The warm amber glow against deep obsidian creates a forge-like atmosphere where workflows aren't merely "built" - they're forged. This visual direction creates emotional resonance around reliability, craftsmanship, and power.

---

## 2. Objectives

1. Implement 5 complete color primitive scales (amber, obsidian, steel, verdigris, ember) with 11 stops each (50-950) in `_primitives.scss`
2. Update semantic token mappings in `_tokens.scss` to reference new primitives for light mode
3. Update semantic token mappings in `_tokens.dark.scss` for dark mode visual parity
4. Implement typography token system (font weights, letter-spacing, line-height)
5. Implement motion token system (easing curves, duration scale)
6. Implement shadow and border token system (depth scale, amber glow variants)
7. Preserve backwards compatibility via CSS variable fallback pattern

---

## 3. Prerequisites

### Required Sessions
- [x] None - this is the foundational session

### Required Tools/Knowledge
- SCSS with CSS custom properties (HSL-based color scales)
- Understanding of token cascade architecture (Primitives > Semantic > Component)
- CSS variable fallback pattern for backwards compatibility

### Environment Requirements
- Access to design-system package: `packages/frontend/@n8n/design-system/`
- Storybook available at port 6006 for visual verification
- `pnpm build` functional for validation

---

## 4. Scope

### In Scope (MVP)
- Amber primitive scale (50-950) - Primary "Forge Fire" colors
- Obsidian primitive scale (50-950) - Neutral dark "Forge Base" colors
- Steel primitive scale (50-950) - Secondary "Cool Metal" colors
- Verdigris primitive scale (50-950) - Success "Oxidized Copper" colors
- Ember primitive scale (50-950) - Danger "Forge Coals" colors
- Light mode semantic token mappings (primary, secondary, success, warning, danger, info, text, background, border)
- Dark mode semantic token mappings with visual parity
- Typography tokens (weights, letter-spacing, line-height)
- Motion tokens (easing curves, durations)
- Shadow tokens (depth scale xs-xl, amber glow variants)
- Border tokens (subtle, default, strong, focus, error)
- Token fallback pattern: `--color--primary: var(--color-primary, var(--color--amber-500))`

### Out of Scope (Deferred)
- Logo/favicon replacement - *Reason: Session 02 (Brand Identity Assets)*
- Element Plus override updates - *Reason: Session 03 (Element Plus Token Integration)*
- Background treatments/visual atmosphere effects - *Reason: Session 04 (Visual Atmosphere & Motion)*
- Hardcoded color fixes (~550 instances) - *Reason: Session 05 (Hardcoded Color Remediation)*
- Email template updates - *Reason: Session 06 (Email Templates & Verification)*

---

## 5. Technical Approach

### Architecture
The implementation follows the established three-tier token cascade:

1. **Primitives Layer** (`_primitives.scss`): Define raw HSL color values for all 5 scales at 11 stops each (55 new color variables)
2. **Semantic Layer** (`_tokens.scss`, `_tokens.dark.scss`): Map primitives to semantic meanings (primary, success, danger, text, background, etc.)
3. **Component Layer**: Existing components consume semantic tokens (no changes needed in this session)

### Design Patterns
- **HSL Color Format**: All primitives use `hsl(hue, saturation%, lightness%)` for consistent scale generation
- **CSS Variable Fallbacks**: Pattern `--new-var: var(--old-var, var(--fallback))` ensures backwards compatibility
- **Dark Mode via Attribute**: Uses `body[data-theme='dark']` selector consistent with existing architecture
- **Token Naming Convention**: Double-dash format `--color--amber-500` with fallback to single-dash `--color-primary`

### Technology Stack
- SCSS (preprocessor for token organization)
- CSS Custom Properties (runtime theming)
- HSL color model (perceptual uniformity in scales)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All changes are to existing files | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/css/_primitives.scss` | Add 5 new color scales (55 variables), typography tokens, motion tokens | ~120 |
| `packages/frontend/@n8n/design-system/src/css/_tokens.scss` | Update semantic mappings for light mode, add shadow/border tokens | ~80 |
| `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss` | Update semantic mappings for dark mode | ~60 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Amber scale implemented with 11 stops (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950)
- [ ] Obsidian scale implemented with 11 stops
- [ ] Steel scale implemented with 11 stops
- [ ] Verdigris scale implemented with 11 stops
- [ ] Ember scale implemented with 11 stops
- [ ] Primary color `--color--primary` maps to `--color--amber-500` (hsl(38, 92%, 55%))
- [ ] Success color maps to verdigris-500 (hsl(168, 65%, 42%))
- [ ] Danger color maps to ember-500 (hsl(8, 78%, 54%))
- [ ] Typography tokens available (6 weights, 5 letter-spacing, 6 line-height)
- [ ] Motion tokens available (7 easing curves, 6 durations)
- [ ] Shadow tokens available (5 depth levels, 3 glow variants)
- [ ] Border tokens available (5 variants)
- [ ] Dark mode tokens provide visual parity

### Testing Requirements
- [ ] `pnpm build` passes without errors
- [ ] Visual verification in browser shows new colors applied
- [ ] Storybook components render with new tokens
- [ ] Both light and dark modes tested

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] Code follows project conventions (kebab-case tokens with double-dash prefix)
- [ ] No hardcoded color values added (all use HSL format)
- [ ] Backwards compatibility preserved (old token names still work)

---

## 8. Implementation Notes

### Key Considerations
- Existing 143 primitives use HSL format - new scales must match this pattern
- Scale stops follow pattern: 50, 100, 150 (optional), 200, 300, 400, 500, 600, 700, 800, 900, 950
- Primary hue shifts from 7 (current orange) to 38 (amber) - this is a significant visual change
- Token fallback pattern is critical: `--color--primary: var(--color-primary, var(--color--amber-500))`

### Potential Challenges
- **Dual token naming**: Must preserve both `--color-primary` (old) and `--color--primary` (new) formats via fallbacks
- **Scale consistency**: All 5 color scales need consistent perceptual progression from 50-950
- **Dark mode parity**: Every light mode semantic token needs corresponding dark mode mapping with appropriate contrast
- **Hue alignment**: Primary (amber) at hue 38, Steel at 215, Verdigris at 168, Ember at 8 - ensure semantic colors don't clash

### Relevant Considerations
- [P00] **Dual token naming convention**: Old `--color-primary` and new `--color--primary` formats both work via CSS fallbacks. Pattern: `--color--primary: var(--color-primary, var(--color--amber-500))`
- [P00] **HSL-based primitives cascade efficiently**: Existing 143 primitives use HSL. New scales follow pattern: 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 950
- [P00] **Token cascade: Primitives > Semantic > Component**: Change primitives for maximum reach across the application
- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']`. Both `_tokens.dark.scss` and Tailwind config use this selector
- [P00] **~615 hardcoded colors intentionally kept**: Test data, syntax highlighting, Element Plus widgets - don't tokenize these

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No special unicode characters, emojis, or extended characters in SCSS files.

---

## 9. Testing Strategy

### Unit Tests
- N/A - CSS token changes don't have unit tests; validation is visual

### Integration Tests
- Existing Playwright e2e tests should continue passing (no functionality changes)

### Manual Testing
- Open Storybook (`pnpm storybook` in design-system package, port 6006)
- Verify primary-colored components show amber instead of orange
- Toggle between light and dark mode in browser
- Check canvas background, buttons, inputs, alerts for correct color application
- Verify text contrast meets WCAG AA requirements (4.5:1 for body text)

### Edge Cases
- Ensure shadow tokens work in both light and dark modes
- Verify amber glow shadows don't appear too intense in light mode
- Check that steel (secondary) provides sufficient contrast against obsidian backgrounds
- Confirm ember (danger) is visually distinct from amber (primary)

---

## 10. Dependencies

### External Libraries
- None - pure CSS/SCSS changes

### Other Sessions
- **Depends on**: None (foundational session)
- **Depended by**:
  - Session 02 (Brand Identity Assets) - needs color tokens for logo/favicon work
  - Session 03 (Element Plus Token Integration) - needs semantic tokens
  - Session 04 (Visual Atmosphere & Motion) - needs motion tokens, shadow tokens
  - Session 05 (Hardcoded Color Remediation) - needs primitives to replace hardcoded values
  - Session 06 (Email Templates & Verification) - needs brand colors defined

---

## Color Scale Reference

### Amber (Primary) - Forge Fire
```scss
--color--amber-50: hsl(48, 100%, 96%);
--color--amber-100: hsl(46, 95%, 88%);
--color--amber-200: hsl(44, 92%, 76%);
--color--amber-300: hsl(42, 90%, 65%);
--color--amber-400: hsl(40, 88%, 58%);
--color--amber-500: hsl(38, 92%, 55%);  // Primary
--color--amber-600: hsl(34, 88%, 48%);
--color--amber-700: hsl(28, 85%, 42%);
--color--amber-800: hsl(24, 80%, 35%);
--color--amber-900: hsl(20, 75%, 28%);
--color--amber-950: hsl(18, 70%, 18%);
```

### Obsidian (Neutral Dark) - Forge Base
```scss
--color--obsidian-50: hsl(220, 20%, 98%);
--color--obsidian-100: hsl(220, 18%, 94%);
--color--obsidian-200: hsl(220, 16%, 86%);
--color--obsidian-300: hsl(220, 14%, 72%);
--color--obsidian-400: hsl(220, 15%, 55%);
--color--obsidian-500: hsl(220, 18%, 42%);
--color--obsidian-600: hsl(220, 22%, 28%);
--color--obsidian-700: hsl(220, 25%, 18%);
--color--obsidian-800: hsl(220, 28%, 12%);
--color--obsidian-900: hsl(220, 30%, 8%);   // Dark background
--color--obsidian-950: hsl(220, 35%, 5%);
```

### Steel (Secondary) - Cool Metal
```scss
--color--steel-50: hsl(215, 30%, 97%);
--color--steel-100: hsl(215, 28%, 90%);
--color--steel-200: hsl(215, 26%, 82%);
--color--steel-300: hsl(215, 24%, 70%);
--color--steel-400: hsl(215, 25%, 60%);
--color--steel-500: hsl(215, 25%, 52%);  // Secondary
--color--steel-600: hsl(215, 28%, 44%);
--color--steel-700: hsl(215, 30%, 36%);
--color--steel-800: hsl(215, 32%, 28%);
--color--steel-900: hsl(215, 35%, 20%);
--color--steel-950: hsl(215, 38%, 12%);
```

### Verdigris (Success) - Oxidized Copper
```scss
--color--verdigris-50: hsl(168, 70%, 96%);
--color--verdigris-100: hsl(168, 68%, 88%);
--color--verdigris-200: hsl(168, 66%, 75%);
--color--verdigris-300: hsl(168, 64%, 62%);
--color--verdigris-400: hsl(168, 65%, 52%);
--color--verdigris-500: hsl(168, 65%, 42%);  // Success
--color--verdigris-600: hsl(168, 68%, 35%);
--color--verdigris-700: hsl(168, 70%, 28%);
--color--verdigris-800: hsl(168, 72%, 22%);
--color--verdigris-900: hsl(168, 75%, 16%);
--color--verdigris-950: hsl(168, 78%, 10%);
```

### Ember (Danger) - Forge Coals
```scss
--color--ember-50: hsl(8, 85%, 97%);
--color--ember-100: hsl(8, 82%, 90%);
--color--ember-200: hsl(8, 80%, 80%);
--color--ember-300: hsl(8, 78%, 68%);
--color--ember-400: hsl(8, 78%, 60%);
--color--ember-500: hsl(8, 78%, 54%);   // Danger
--color--ember-600: hsl(8, 75%, 46%);
--color--ember-700: hsl(8, 72%, 38%);
--color--ember-800: hsl(8, 70%, 30%);
--color--ember-900: hsl(8, 68%, 22%);
--color--ember-950: hsl(8, 65%, 14%);
```

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

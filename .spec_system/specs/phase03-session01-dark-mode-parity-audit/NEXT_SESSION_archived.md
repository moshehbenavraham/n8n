# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Completed Sessions**: 19

---

## Recommended Next Session

**Session ID**: `phase03-session01-dark-mode-parity-audit`
**Session Name**: Dark Mode Parity Audit
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Phase 00 completed - Foundation established (6 sessions)
- [x] Phase 01 completed - Component library themed (6 sessions)
- [x] Phase 02 completed - Application features themed (7 sessions)
- [x] Development environment operational
- [x] Storybook functional for component verification

### Dependencies
- **Builds on**: All Phase 02 sessions (canvas, NDV, modals, overlays)
- **Enables**: Session 02 (Component Edge Cases), Session 03 (Token Cleanup)

### Project Progression
This is the natural first session of Phase 03 (Polish). After completing 19 sessions that established the Obsidian Forge theme across foundation, components, and application features, a systematic dark mode audit is essential to:

1. **Validate work** - Confirm all themed components render correctly in dark mode
2. **Catch regressions** - Identify any dark mode token overrides that were missed
3. **Ensure quality** - Verify WCAG AA contrast ratios and shadow rendering
4. **Foundation for polish** - Sessions 02-06 depend on dark mode parity being established

---

## Session Overview

### Objective
Systematically audit and verify dark mode visual parity across all themed components, ensuring consistent appearance, proper contrast ratios, and correct token cascade in dark mode.

### Key Deliverables
1. Dark mode audit checklist with pass/fail for each component area
2. List of identified visual inconsistencies with fixes
3. Updated `_tokens.dark.scss` with any missing tokens
4. Contrast ratio verification report for critical text/background combinations
5. Validation that amber glow effects render correctly on obsidian backgrounds

### Scope Summary
- **In Scope (MVP)**: Systematic light vs dark comparison, token audit, contrast verification, shadow rendering, canvas/NDV/modal/overlay dark mode testing
- **Out of Scope**: Cross-browser testing (Session 04), performance testing (Session 05), non-dark-mode component edge cases (Session 02)

---

## Technical Considerations

### Technologies/Patterns
- Dark mode via `body[data-theme='dark']` attribute
- `_tokens.dark.scss` for dark mode token overrides
- Tailwind dark mode selector configuration
- WCAG AA contrast ratio requirements (4.5:1 for text, 3:1 for large text)

### Potential Challenges
- Shadow rendering differences between light/dark backgrounds
- Amber glow effects may need intensity adjustment on dark backgrounds
- Some Element Plus components may have dark mode specificity issues
- Canvas vignette and gradient effects may need dark mode tuning

### Relevant Considerations
- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']`. Both `_tokens.dark.scss` and Tailwind config use this selector.
- [P00] **~615 hardcoded colors intentionally kept**: Don't tokenize syntax highlighting, test data, Element Plus widgets, accessibility calculations.
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides - may surface dark mode issues.

---

## Alternative Sessions

If this session is blocked:
1. **phase03-session03-token-color-cleanup** - Token normalization is independent if dark mode audit cannot proceed (but loses validation opportunity)
2. **phase03-session04-cross-browser-testing** - Can run in parallel if dark mode audit is blocked by tooling issues

---

## Session Artifacts Location

Specification will be generated at:
`.spec_system/specs/phase03-session01-dark-mode-parity-audit/`

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

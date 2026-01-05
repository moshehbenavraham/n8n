# Session 01: Dark Mode Parity Audit

**Session ID**: `phase03-session01-dark-mode-parity-audit`
**Status**: Not Started
**Estimated Tasks**: ~20
**Estimated Duration**: 2-4 hours

---

## Objective

Systematically audit and verify dark mode visual parity across all themed components, ensuring consistent appearance, proper contrast ratios, and correct token cascade in dark mode.

---

## Scope

### In Scope (MVP)
- Systematic comparison of light vs dark mode for all major UI areas
- Audit `_tokens.dark.scss` for missing or incorrect overrides
- Verify WCAG AA contrast ratios in dark mode
- Check shadow rendering in dark mode (colored shadows)
- Validate amber glow effects appear correctly on dark backgrounds
- Test canvas, NDV, modal, and overlay components in dark mode
- Document any visual inconsistencies found

### Out of Scope
- Cross-browser testing (Session 04)
- Performance testing (Session 05)
- Component edge cases unrelated to dark mode (Session 02)

---

## Prerequisites

- [ ] Phase 02 completed (all application features themed)
- [ ] Development environment running with theme toggle accessible
- [ ] Storybook operational for component-level verification

---

## Deliverables

1. Dark mode audit checklist with pass/fail for each component area
2. List of identified visual inconsistencies
3. Fixes for any missing dark mode token overrides
4. Updated `_tokens.dark.scss` with any new tokens needed
5. Contrast ratio verification report for critical text/background combinations

---

## Success Criteria

- [ ] All design-system components render correctly in dark mode
- [ ] Canvas, NDV, and modal components match light mode quality
- [ ] No missing dark mode token overrides
- [ ] WCAG AA contrast ratios met for all text elements
- [ ] Amber glow effects visible and attractive on obsidian backgrounds
- [ ] Shadows render with appropriate depth in dark mode
- [ ] Theme toggle works smoothly without visual glitches

# PRD Phase 03: Polish - Edge Cases, Testing, Dark Mode Parity

**Status**: In Progress
**Sessions**: 6 (initial estimate)
**Estimated Duration**: 12-24 hours

**Progress**: 5/6 sessions (83%)

---

## Overview

This phase focuses on comprehensive quality assurance and polish for the Obsidian Forge design system implementation. With the foundation (Phase 00), component library (Phase 01), and application features (Phase 02) complete, this phase ensures visual consistency, addresses edge cases, validates cross-browser compatibility, and verifies performance.

Key focus areas include dark mode visual parity with light mode, resolution of remaining technical debt (hex code normalization, Element Plus specificity), V2 component compatibility, cross-browser testing (Firefox, Safari, Edge), and comprehensive Storybook documentation.

---

## Progress Tracker

| Session | Name | Status | Est. Tasks | Validated |
|---------|------|--------|------------|-----------|
| 01 | Dark Mode Parity Audit | Complete | 20 | 2026-01-05 |
| 02 | Component Edge Cases | Complete | 20 | 2026-01-05 |
| 03 | Token and Color Cleanup | Complete | 20 | 2026-01-05 |
| 04 | Cross-Browser Testing | Complete | 24 | 2026-01-05 |
| 05 | Performance Verification | Complete | 22 | 2026-01-05 |
| 06 | Storybook Documentation and Final QA | Not Started | ~18 | - |

---

## Completed Sessions

### Session 01: Dark Mode Parity Audit (2026-01-05)
- Systematically audited 147 items across foundation, components, and application areas
- Verified WCAG AA contrast ratios for all critical text/background pairs
- Fixed 4 minor issues: duplicate tooltip/popover definitions, missing QR code border and switch active tokens
- Created AUDIT_CHECKLIST.md (355 lines) and CONTRAST_REPORT.md (167 lines)

### Session 02: Component Edge Cases (2026-01-05)
- Audited 8 actual V2 components (Reka UI-based, in src/v2/components/)
- Verified all 8 Element Plus override files for token usage and !important justification
- Fixed 2 hardcoded color issues in Checkbox.vue and Pagination.vue
- Created V2_COMPATIBILITY_REPORT.md (127 lines) and EDGE_CASE_TESTING_CHECKLIST.md (209 lines)

### Session 03: Token and Color Cleanup (2026-01-05)
- Normalized 22 short hex codes to 6-character lowercase format in 3 files
- Verified dual token naming convention works via CSS fallbacks
- Audited token cascade: 214 primitives, 342 semantic tokens, 281 dark mode overrides
- Created HARDCODED_COLORS_INVENTORY.md (201 lines) and TOKEN_AUDIT_REPORT.md (191 lines)

### Session 04: Cross-Browser Testing (2026-01-05)
- Validated rendering consistency across Chrome, Firefox, Safari, Edge
- Created automated visual regression tests using Playwright
- Documented browser-specific quirks and workarounds
- Created BROWSER_TEST_MATRIX.md and VISUAL_REGRESSION_REPORT.md

### Session 05: Performance Verification (2026-01-05)
- Created comprehensive Playwright-based automated performance test suite
- Measured FCP, LCP, TTI, TTFB via Performance API and CDP
- Verified 60fps canvas operations (zoom, pan, drag) with 50+ nodes
- Profiled modal animations and hover/focus transitions
- Extended memory testing via accelerated 10-cycle simulation
- CSS coverage analysis and theme parity verification
- All quality gates passed: no performance regressions detected

---

## Upcoming Sessions

- Session 06: Storybook Documentation and Final QA

---

## Objectives

1. Ensure dark mode visual parity with light mode across all components
2. Fix edge cases in specific components (V2 components, Element Plus specificity)
3. Normalize remaining hardcoded hex codes and enforce token usage
4. Validate cross-browser compatibility (Chrome, Firefox, Safari, Edge)
5. Verify no performance regressions from design changes
6. Update Storybook documentation and complete visual QA sign-off

---

## Prerequisites

- Phase 00 completed (Foundation - Colors, Typography, Branding)
- Phase 01 completed (Component Library - Design System and Element Plus)
- Phase 02 completed (Application Features - Canvas, NDV, Modals)
- Development environment functional with full frontend build capability
- Storybook operational for component verification

---

## Technical Considerations

### Architecture

**Dark Mode Implementation**:
- Theme toggle sets `body[data-theme='dark']`
- `_tokens.dark.scss` contains dark mode token overrides
- Tailwind config uses same `[data-theme='dark']` selector
- Both CSS variables and Tailwind must sync for dark mode

**Token Architecture**:
- Dual naming convention: `--color-primary` (old) and `--color--primary` (new)
- Backwards compatibility via CSS fallbacks required
- ~615 hardcoded colors intentionally kept (test data, syntax highlighting, library widgets)

**Component Variants**:
- 10 V2 components exist (`N8nSelect2`, `N8nCheckbox2`, etc.)
- Theme changes must work with both V1 and V2 variants
- Extension SDK types must remain unchanged

### Technologies
- Vue 3 with Composition API
- SCSS with CSS custom properties
- Tailwind CSS with dark mode selector
- Element Plus 2.4.3 (patched for SSR)
- Storybook for component verification
- Playwright for cross-browser testing

### Risks
- **Dark mode drift**: Changes may not cascade equally - systematic review required
- **Element Plus specificity**: 8 files use `!important` overrides - may encounter additional resistance
- **V2 component compatibility**: Newer components may have different styling hooks
- **Cross-browser rendering**: Safari/Firefox may render shadows and gradients differently
- **Performance regression**: Vignette effects and animations may impact canvas performance

### Relevant Considerations
*From CONSIDERATIONS.md*

- [P00] **Short hex codes need normalization**: ~25 instances of `#fff`, `#ccc`, `#f00` should be expanded to 6-char format for consistency.
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants.
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling.
- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']`. Both `_tokens.dark.scss` and Tailwind config use this selector.
- [P00] **~615 hardcoded colors intentionally kept**: Test data, syntax highlighting (GitHub standard), Element Plus widgets, accessibility calculations. Don't tokenize these.
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006). Verify all 96 stories after theme changes.

---

## Success Criteria

Phase complete when:
- [ ] All 6 sessions completed
- [ ] Dark mode visual parity verified for all components
- [ ] V2 component compatibility confirmed
- [ ] ~25 short hex codes normalized to 6-character format
- [ ] Element Plus specificity issues documented/resolved
- [ ] Cross-browser testing passed (Chrome, Firefox, Safari, Edge)
- [ ] No performance regressions on canvas operations
- [ ] All 96+ Storybook stories render correctly in both themes
- [ ] Zero visual regression in light mode
- [ ] Documentation updated with any new patterns/learnings

---

## Dependencies

### Depends On
- Phase 00: Foundation - Colors, Typography, Branding (complete)
- Phase 01: Component Library - Design System and Element Plus (complete)
- Phase 02: Application Features - Canvas, NDV, Modals (complete)

### Enables
- Production deployment readiness
- Upstream merge preparation (if applicable)
- Future theme customization capabilities

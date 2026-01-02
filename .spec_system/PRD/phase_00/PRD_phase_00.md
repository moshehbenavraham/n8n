# PRD Phase 00: Foundation - Colors, Typography, Branding

**Status**: In Progress
**Sessions**: 6
**Estimated Duration**: 3-4 days

**Progress**: 5/6 sessions (83%)

---

## Overview

Establish the visual foundation for the "Obsidian Forge" design system. This phase implements the core color primitives, typography system, brand assets, and motion tokens that cascade through the entire n8n application. All subsequent phases build upon this foundation.

The "Obsidian Forge" aesthetic evokes industrial luxury meets precision engineering - obsidian surfaces with warm amber and copper metallic accents. Workflows aren't merely "built" - they're **forged**.

---

## Progress Tracker

| Session | Name | Status | Est. Tasks | Validated |
|---------|------|--------|------------|-----------|
| 01 | Color System Foundation | Complete | 20 | 2026-01-02 |
| 02 | Brand Identity Assets | Complete | 20 | 2026-01-02 |
| 03 | Element Plus Token Integration | Complete | 22 | 2026-01-02 |
| 04 | Visual Atmosphere & Motion | Complete | 23 | 2026-01-02 |
| 05 | Hardcoded Color Remediation | Complete | 20 | 2026-01-02 |
| 06 | Email Templates & Verification | Not Started | ~15 | - |

---

## Completed Sessions

- **Session 01**: Color System Foundation (2026-01-02)
- **Session 02**: Brand Identity Assets (2026-01-02)
- **Session 03**: Element Plus Token Integration (2026-01-02)
- **Session 04**: Visual Atmosphere & Motion (2026-01-02)
- **Session 05**: Hardcoded Color Remediation (2026-01-02)

---

## Upcoming Sessions

- Session 06: Email Templates & Verification

---

## Objectives

1. Implement new color primitives (amber, obsidian, steel, verdigris, ember scales)
2. Establish semantic token mappings for light and dark modes
3. Replace all logo and favicon assets with Forge Mark branding
4. Update typography, motion, and shadow token systems
5. Integrate tokens with Element Plus override system
6. Fix highest-impact hardcoded colors
7. Update email templates with new brand identity
8. Verify foundation changes render correctly in both themes

---

## Prerequisites

- Custom logo SVG files created (Forge Mark design)
- Development environment functional (`pnpm dev:fe` working)
- Storybook accessible for visual verification

---

## Technical Considerations

### Architecture
- Token cascade: Primitives > Semantic > Component
- Dual naming convention maintained: `--color-primary` and `--color--primary`
- HSL color format for all primitives (enables easier manipulation)
- Dark mode via `body[data-theme='dark']` selector

### Technologies
- SCSS with CSS custom properties
- Vue 3 component system
- Element Plus with 38 override files
- Storybook for visual testing

### Risks
- **Element Plus specificity battles**: 8 files use `!important` overrides
- **V2 component migration**: 10 V2 components need theme compatibility
- **Backwards compatibility**: Must preserve old token names

### Relevant Considerations
- [P00] **HSL-based primitives cascade efficiently**: 143 primitives using HSL format
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in design-system/src/css/
- [P00] **~615 hardcoded colors intentionally kept**: Don't tokenize test data, syntax highlighting, etc.
- [P00] **Dual token naming convention**: Maintain backwards compatibility with fallback pattern

---

## Success Criteria

Phase complete when:
- [ ] All 6 sessions completed
- [x] New color primitives implemented (amber/obsidian/steel/verdigris/ember)
- [x] Light mode semantic tokens updated
- [x] Dark mode semantic tokens updated
- [x] Logo and favicon replaced with Forge Mark
- [x] Typography tokens implemented
- [x] Motion and shadow tokens implemented
- [x] Element Plus overrides using new tokens
- [x] High-impact hardcoded colors fixed
- [ ] Email templates updated
- [ ] Storybook renders correctly with new theme
- [ ] Build passes without errors

---

## Dependencies

### Depends On
- Logo assets (Forge Mark SVGs) - must be created before Session 02
- Development environment setup

### Enables
- Phase 01: Component Library - Design System and Element Plus

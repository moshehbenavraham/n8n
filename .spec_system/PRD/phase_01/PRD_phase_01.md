# PRD Phase 01: Component Library - Design System and Element Plus

**Status**: In Progress
**Sessions**: 6
**Estimated Duration**: 4-5 days

**Progress**: 1/6 sessions (17%)

---

## Overview

Systematically update the n8n design system components and Element Plus overrides to fully integrate the Obsidian Forge visual foundation established in Phase 00. This phase ensures every component in the design system library reflects the new theme while maintaining backwards compatibility and V2 component parity.

The design system contains 86 components with 96 Storybook stories. Element Plus customization spans 42 SCSS override files. This phase transforms the component library from token-aware to fully themed.

---

## Progress Tracker

| Session | Name | Status | Est. Tasks | Validated |
|---------|------|--------|------------|-----------|
| 01 | Design System Form Components | Complete | 22 | 2026-01-04 |
| 02 | Design System Selection Components | Not Started | ~18 | - |
| 03 | Design System Action Components | Not Started | ~18 | - |
| 04 | Design System Display Components | Not Started | ~20 | - |
| 05 | Element Plus Override Files | Not Started | ~22 | - |
| 06 | Storybook Verification and V2 Migration | Not Started | ~15 | - |

---

## Completed Sessions

### Session 01: Design System Form Components
- **Completed**: 2026-01-04
- **Tasks**: 22/22
- **Deliverables**: Form focus rings, checkbox/radio/switch theming, motion transitions

---

## Upcoming Sessions

- Session 02: Design System Selection Components

---

## Objectives

1. Update all form-related components with Obsidian Forge styling (inputs, checkboxes, radios, switches)
2. Restyle selection components (selects, dropdowns, multiselects, tags)
3. Update action components (buttons, links, menu items) with new interaction patterns
4. Refresh display components (cards, badges, avatars, tooltips) for visual consistency
5. Systematically update all 42 Element Plus SCSS override files
6. Verify all 96 Storybook stories render correctly with new theme
7. Ensure V2 components (10 total) maintain feature parity with themed V1 versions

---

## Prerequisites

- [x] Phase 00 completed (Foundation - Colors, Typography, Branding)
- [x] All token primitives and semantic tokens in place
- [x] Storybook accessible at port 6006
- [x] Development environment functional

---

## Technical Considerations

### Architecture
- Component SCSS files consume tokens from `_tokens.scss` and `_tokens.dark.scss`
- Element Plus overrides in `design-system/src/css/*.scss` (42 files)
- Storybook stories in `src/components/*/stories/` directories
- V2 components exist alongside V1 (N8nSelect2, N8nCheckbox2, etc.)

### Technologies
- Vue 3 components with SCSS styling
- Element Plus UI library (v2.4.3 with SSR patch)
- Storybook 7.x for component documentation
- SCSS with CSS custom properties

### Risks
- **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling
- **V2 component styling gaps**: V2 components may need separate theme adjustments
- **Component-specific edge cases**: Complex components (select, datepicker) have many states

### Relevant Considerations
<!-- From CONSIDERATIONS.md -->
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants
- [P00] **Element Plus specificity battles**: Check skeleton, icon, checkbox, table, menu, loading, drawer
- [P00] **Design system well-organized**: 86 components, 96 Storybook stories. Use Storybook at port 6006 to verify all component changes
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in design-system/src/css/ handle all Element Plus customization
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006)

---

## Success Criteria

Phase complete when:
- [ ] All 6 sessions completed
- [ ] All form components styled (input, checkbox, radio, switch, textarea)
- [ ] All selection components styled (select, multiselect, tags)
- [ ] All action components styled (button, link, menu items)
- [ ] All display components styled (card, badge, avatar, tooltip)
- [ ] All 42 Element Plus override files updated with tokens
- [ ] All 96 Storybook stories render correctly
- [ ] V2 components visually match themed V1 versions
- [ ] No SCSS compilation errors
- [ ] Build passes without errors

---

## Dependencies

### Depends On
- Phase 00: Foundation - Colors, Typography, Branding

### Enables
- Phase 02: Application Features - Canvas, NDV, Modals

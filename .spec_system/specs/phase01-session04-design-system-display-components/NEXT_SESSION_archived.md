# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 01 - Component Library - Design System and Element Plus
**Completed Sessions**: 9 (6 from Phase 00, 3 from Phase 01)

---

## Recommended Next Session

**Session ID**: `phase01-session04-design-system-display-components`
**Session Name**: Design System Display Components
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 - Form Components completed
- [x] Session 02 - Selection Components completed
- [x] Session 03 - Action Components completed
- [x] Storybook accessible for visual testing

### Dependencies
- **Builds on**: Session 03 (Action Components) - consistent interaction patterns established
- **Enables**: Session 05 (Element Plus Override Files) and Session 06 (Storybook Verification)

### Project Progression
This is the natural next step in the component library progression. Sessions 01-03 established the Obsidian Forge styling for interactive components (forms, selection, actions). Session 04 completes the display component layer - cards, badges, tags, tooltips, notices, and typography - which are essential for visual hierarchy and information presentation. These display components are used extensively throughout the application and must be styled before proceeding to the Element Plus overrides consolidation.

---

## Session Overview

### Objective
Update all display-related design system components with Obsidian Forge visual styling, implementing layered shadows, subtle backgrounds, and consistent typography.

### Key Deliverables
1. N8nCard component with Forge elevation and obsidian borders
2. N8nBadge and N8nTag with semantic color variants (verdigris success, caution warning, ember danger)
3. N8nAvatar with optional amber ring for active/selected users
4. N8nTooltip and N8nPopover with obsidian-900 background and amber accent
5. N8nNotice variants using correct Forge semantic colors
6. N8nLoading spinner with amber-500 color
7. N8nText/N8nHeading with Forge typography tokens
8. Dark mode parity for all display components
9. Storybook verification for all updated components

### Scope Summary
- **In Scope (MVP)**: Card elevation, badge/tag styling, avatar borders, tooltip/popover theming, notice variants, loading spinner, typography styling, dark mode parity
- **Out of Scope**: Modal/dialog components (Phase 02), complex animation sequences, component API changes

---

## Technical Considerations

### Technologies/Patterns
- SCSS with CSS custom properties (token cascade)
- Layered shadow system (`--shadow--sm` through `--shadow--xl`)
- Semantic color tokens (verdigris, caution, ember, arctic-steel)
- Typography tokens (weight, letter-spacing, line-height)
- Dark mode via `[data-theme="dark"]` selector

### Potential Challenges
- N8nNotice may have Element Plus dependencies requiring specificity handling
- Tooltip positioning may conflict with amber accent borders
- Card elevation shadows need careful dark mode adjustments

### Relevant Considerations
- [P00] **Element Plus specificity battles**: Check if tooltip, popover, or notice components use Element Plus internally - may need `!important` overrides
- [P00] **Dual token naming convention**: Maintain backwards compatibility with both `--color-primary` and `--color--primary` formats
- [P00] **Design system well-organized**: Use Storybook at port 6006 to verify all 10+ display component changes
- [P00] **Centralized Element Plus overrides**: If components wrap Element Plus, modify override files in `design-system/src/css/`

---

## Alternative Sessions

If this session is blocked:
1. **Session 05 - Element Plus Override Files** - Could proceed if display components have blocking issues, but would skip verification of display styling
2. **Session 06 - Storybook Verification V2 Migration** - Only if all component styling is complete and ready for final verification

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

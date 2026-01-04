# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 01 - Component Library - Design System and Element Plus
**Completed Sessions**: 8

---

## Recommended Next Session

**Session ID**: `phase01-session03-design-system-action-components`
**Session Name**: Design System Action Components
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: 18

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (form components - consistent input patterns established)
- [x] Session 02 completed (selection components - dropdown/checkbox patterns established)
- [x] Storybook accessible for visual testing

### Dependencies
- **Builds on**: Session 01 (form patterns) and Session 02 (selection patterns)
- **Enables**: Session 04 (display components) and Session 05 (Element Plus overrides)

### Project Progression
Session 03 is the natural continuation of the Phase 01 component library work. Form and selection components are now themed with Obsidian Forge patterns. Action components (buttons, links, menu items) are the next logical category - they share interaction patterns (hover lifts, focus rings, active states) that must be consistent with the already-completed form/selection work.

---

## Session Overview

### Objective
Update all action-related design system components with Obsidian Forge interaction patterns, implementing hover lifts, amber focus rings, and mechanical motion easing.

### Key Deliverables
1. N8nButton component styling (all variants: primary, secondary, tertiary, danger)
2. N8nButtonGroup, N8nIconButton, N8nLink component styling
3. N8nMenuItem, N8nActionToggle, N8nActionBox component styling
4. Hover lift animations (translateY + shadow enhancement)
5. Amber focus ring implementation across all action components
6. Loading states with amber spinner
7. Dark mode parity verification

### Scope Summary
- **In Scope (MVP)**: 7 action components, hover/active/focus states, loading indicators, dark mode
- **Out of Scope**: Form inputs (Session 01), selection components (Session 02), component API changes

---

## Technical Considerations

### Technologies/Patterns
- SCSS with CSS custom properties (design tokens)
- Hover lift: `translateY(-1px)` with shadow deepening
- Focus ring: Amber glow using `--shadow--glow-sm`
- Motion: `--ease--precision` and `--duration--fast` (150ms)
- Dark mode: `[data-theme='dark']` selector

### Potential Challenges
- Element Plus button base styles may require specificity overrides
- N8nButtonGroup border handling between grouped buttons
- Loading spinner color consistency with amber theme

### Relevant Considerations
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides. Button components may resist styling - use centralized override files.
- [P00] **V2 component migration**: Ensure theme changes work with both V1 and V2 variants if action components have V2 versions.
- [P00] **Centralized Element Plus overrides**: Modify files in `design-system/src/css/` rather than component-level styles.

---

## Alternative Sessions

If this session is blocked:
1. **phase01-session04-design-system-display-components** - Can proceed if no action component dependencies
2. **phase01-session05-element-plus-override-files** - Lower priority but independent work

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

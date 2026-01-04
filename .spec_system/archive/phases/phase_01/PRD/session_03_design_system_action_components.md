# Session 03: Design System Action Components

**Session ID**: `phase01-session03-design-system-action-components`
**Status**: Not Started
**Estimated Tasks**: ~18
**Estimated Duration**: 2-4 hours

---

## Objective

Update all action-related design system components with Obsidian Forge interaction patterns, implementing hover lifts, amber focus rings, and mechanical motion easing.

---

## Scope

### In Scope (MVP)
- N8nButton component styling (all variants: primary, secondary, tertiary, danger)
- N8nButtonGroup component styling
- N8nIconButton component styling
- N8nLink component styling
- N8nMenuItem component styling
- N8nActionToggle component styling
- N8nActionBox component styling
- Hover lift animations (translateY + shadow)
- Active/pressed states
- Loading states with amber spinner
- Dark mode parity for all components

### Out of Scope
- Form input components (Session 01)
- Selection components (Session 02)
- Complex gesture interactions
- Component API changes

---

## Prerequisites

- [ ] Sessions 01-02 completed (consistent input/selection patterns)
- [ ] Storybook accessible for visual testing

---

## Deliverables

1. Updated N8nButton SCSS with all variant styling
2. Updated N8nButtonGroup with proper grouping borders
3. Updated N8nIconButton with icon-only sizing
4. Updated N8nLink with amber hover underline
5. Updated N8nMenuItem with hover background
6. Updated N8nActionToggle with toggle animation
7. Updated N8nActionBox container styling
8. All action component Storybook stories verified

---

## Success Criteria

- [ ] Primary buttons use amber-500 background with proper contrast
- [ ] Secondary buttons use steel border styling
- [ ] Hover states implement lift animation (translateY -1px)
- [ ] Focus states display amber glow ring
- [ ] Loading spinners use amber color
- [ ] Dark mode renders correctly for all components
- [ ] Storybook stories for action components pass visual check

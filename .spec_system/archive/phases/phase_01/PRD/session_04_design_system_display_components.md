# Session 04: Design System Display Components

**Session ID**: `phase01-session04-design-system-display-components`
**Status**: Not Started
**Estimated Tasks**: ~20
**Estimated Duration**: 2-4 hours

---

## Objective

Update all display-related design system components with Obsidian Forge visual styling, implementing layered shadows, subtle backgrounds, and consistent typography.

---

## Scope

### In Scope (MVP)
- N8nCard component styling with elevated background
- N8nBadge component styling
- N8nTag component styling (standalone display)
- N8nAvatar component styling with border ring
- N8nTooltip component styling
- N8nPopover component styling
- N8nNotice component styling (info, warning, error, success)
- N8nCallout component styling
- N8nLoading component styling with amber spinner
- N8nText and N8nHeading typography styling
- Dark mode parity for all components

### Out of Scope
- Action components (Session 03)
- Modal/dialog components (Phase 02)
- Complex animation sequences
- Component API changes

---

## Prerequisites

- [ ] Sessions 01-03 completed (consistent interaction patterns)
- [ ] Storybook accessible for visual testing

---

## Deliverables

1. Updated N8nCard SCSS with Forge elevation and borders
2. Updated N8nBadge with semantic color variants
3. Updated N8nTag with consistent chip styling
4. Updated N8nAvatar with optional amber ring for active users
5. Updated N8nTooltip with obsidian background
6. Updated N8nPopover with Forge panel styling
7. Updated N8nNotice variants (verdigris success, caution warning, ember danger)
8. Updated N8nLoading spinner with amber color
9. Updated N8nText/N8nHeading typography tokens
10. All display component Storybook stories verified

---

## Success Criteria

- [ ] Cards display layered shadow system
- [ ] Tooltips use obsidian-900 background with amber accent border
- [ ] Notice variants use correct semantic colors
- [ ] Loading spinners display amber-500 color
- [ ] Typography uses Inter variable font with correct weights
- [ ] Dark mode renders correctly for all components
- [ ] Storybook stories for display components pass visual check

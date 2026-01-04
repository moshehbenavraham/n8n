# Session 02: Design System Selection Components

**Session ID**: `phase01-session02-design-system-selection-components`
**Status**: Not Started
**Estimated Tasks**: ~18
**Estimated Duration**: 2-4 hours

---

## Objective

Update all selection-related design system components to integrate the Obsidian Forge theme, ensuring consistent dropdown, multiselect, and tag selection patterns.

---

## Scope

### In Scope (MVP)
- N8nSelect component styling (including N8nSelect2)
- N8nMultiSelect component styling
- N8nUserSelect component styling
- N8nTags and N8nTag component styling
- N8nOptions and N8nOption styling
- Dropdown panel styling and animations
- Selected state indicators (amber highlights)
- Search input within selects
- Dark mode parity for all components

### Out of Scope
- Form input components (Session 01)
- Button components (Session 03)
- API or prop changes to selection components
- Virtualization or performance optimizations

---

## Prerequisites

- [ ] Session 01 completed (form components establish input patterns)
- [ ] Storybook accessible for visual testing

---

## Deliverables

1. Updated N8nSelect/N8nSelect2 SCSS with Forge dropdown styling
2. Updated N8nMultiSelect with tag chip styling
3. Updated N8nUserSelect with avatar integration
4. Updated N8nTags/N8nTag chip styling with amber accents
5. Updated N8nOptions/N8nOption list item styling
6. Dropdown panel animations (forge-reveal pattern)
7. All selection component Storybook stories verified

---

## Success Criteria

- [ ] Dropdown panels use Obsidian Forge elevation and shadows
- [ ] Selected items display amber highlight
- [ ] Tag chips use themed border-radius and colors
- [ ] Search inputs within selects match form input styling
- [ ] Dark mode renders correctly for all components
- [ ] Storybook stories for selection components pass visual check

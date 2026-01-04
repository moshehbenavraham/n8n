# Session 05: Element Plus Override Files

**Session ID**: `phase01-session05-element-plus-override-files`
**Status**: Not Started
**Estimated Tasks**: ~22
**Estimated Duration**: 3-4 hours

---

## Objective

Systematically update all 42 Element Plus SCSS override files in `design-system/src/css/` to fully integrate Obsidian Forge tokens, ensuring consistent styling across all Element Plus components used in n8n.

---

## Scope

### In Scope (MVP)
- Review and update all 42 SCSS override files
- Replace hardcoded colors with token references
- Update border-radius to use token scale
- Update shadow values to use shadow tokens
- Update transition timings to use motion tokens
- Address `!important` overrides where possible
- Maintain Element Plus class naming compatibility
- Dark mode token usage in all overrides

### Out of Scope
- Replacing Element Plus entirely
- Modifying Element Plus source code
- Custom Element Plus component development
- Performance optimizations

---

## Prerequisites

- [ ] Sessions 01-04 completed (design system patterns established)
- [ ] Understanding of Element Plus class naming conventions
- [ ] Access to Element Plus documentation

---

## Deliverables

1. Updated button.scss with Forge button tokens
2. Updated input.scss, input-number.scss with form tokens
3. Updated select.scss, dropdown.scss with selection tokens
4. Updated checkbox.scss, radio.scss, switch.scss with form tokens
5. Updated dialog.scss, message-box.scss with modal tokens
6. Updated table.scss with grid styling
7. Updated menu.scss, tabs.scss with navigation tokens
8. Updated tooltip.scss, popover.scss with overlay tokens
9. Updated loading.scss, skeleton.scss with animation tokens
10. All remaining SCSS override files reviewed and updated

---

## Success Criteria

- [ ] All 42 override files use Obsidian Forge tokens
- [ ] No new hardcoded color values introduced
- [ ] `!important` usage minimized (document exceptions)
- [ ] Element Plus components render correctly in app
- [ ] Dark mode switches correctly for Element Plus components
- [ ] No SCSS compilation errors

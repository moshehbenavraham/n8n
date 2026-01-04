# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 01 - Component Library - Design System and Element Plus
**Completed Sessions**: 10

---

## Recommended Next Session

**Session ID**: `phase01-session05-element-plus-override-files`
**Session Name**: Element Plus Override Files
**Estimated Duration**: 3-4 hours
**Estimated Tasks**: ~22

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01: Design System Form Components (completed)
- [x] Session 02: Design System Selection Components (completed)
- [x] Session 03: Design System Action Components (completed)
- [x] Session 04: Design System Display Components (completed)

### Dependencies
- **Builds on**: Sessions 01-04 established Obsidian Forge patterns across design system components
- **Enables**: Session 06 (Storybook Verification) - needs Element Plus styling complete first

### Project Progression
This is the natural next step in the design system theming workflow. Sessions 01-04 established the Obsidian Forge token patterns across form, selection, action, and display components. Session 05 extends these patterns to all 42 Element Plus SCSS override files, ensuring consistent styling across the entire UI library integration. Session 06 (Storybook Verification) explicitly requires Sessions 01-05 complete before final verification can begin.

---

## Session Overview

### Objective
Systematically update all 42 Element Plus SCSS override files in `design-system/src/css/` to fully integrate Obsidian Forge tokens, ensuring consistent styling across all Element Plus components used in n8n.

### Key Deliverables
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

### Scope Summary
- **In Scope (MVP)**: All 42 Element Plus SCSS override files, token replacements for colors/borders/shadows/transitions, dark mode support, Element Plus class compatibility
- **Out of Scope**: Replacing Element Plus entirely, modifying Element Plus source, custom EP component development

---

## Technical Considerations

### Technologies/Patterns
- SCSS with CSS custom properties (tokens)
- Element Plus 2.4.3 class naming conventions
- HSL-based Obsidian Forge color system
- Motion/animation tokens from Phase 00

### Potential Challenges
- **Specificity battles**: 8 files already use `!important` overrides (skeleton, icon, checkbox, table, menu, loading, drawer)
- **Element Plus resistance**: Some EP components resist styling; document exceptions
- **V2 component compatibility**: Ensure theme changes work with both V1 and V2 variants

### Relevant Considerations
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling. Check skeleton, icon, checkbox, table, menu, loading, drawer.
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in `design-system/src/css/` handle all Element Plus customization. Modify these, not component-level styles.
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants.

---

## Alternative Sessions

If this session is blocked:
1. **Session 06 (Storybook Verification)** - Could partially begin visual audit, but full verification requires Session 05 completion
2. **Phase 02 Planning** - Begin planning Application Features phase if Element Plus work is blocked

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

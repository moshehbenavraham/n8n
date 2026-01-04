# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 01 - Component Library - Design System and Element Plus
**Completed Sessions**: 7

---

## Recommended Next Session

**Session ID**: `phase01-session02-design-system-selection-components`
**Session Name**: Design System Selection Components
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~18

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (form components establish input patterns)
- [x] Storybook accessible for visual testing
- [x] Obsidian Forge token system established (Phase 00)
- [x] Element Plus integration patterns defined

### Dependencies
- **Builds on**: `phase01-session01-design-system-form-components` - Form component patterns (inputs, focus states, validation styling)
- **Enables**: `phase01-session03-design-system-action-components` - Buttons and action elements will build on selection interaction patterns

### Project Progression
Selection components are the natural progression after form inputs. The input styling patterns established in Session 01 (focus rings, border colors, placeholder styles) directly apply to select dropdowns and search inputs. Completing selection components before action components ensures consistent interaction states across the component library.

---

## Session Overview

### Objective
Update all selection-related design system components to integrate the Obsidian Forge theme, ensuring consistent dropdown, multiselect, and tag selection patterns.

### Key Deliverables
1. Updated N8nSelect/N8nSelect2 SCSS with Forge dropdown styling
2. Updated N8nMultiSelect with themed tag chip styling
3. Updated N8nUserSelect with avatar integration
4. Updated N8nTags/N8nTag chip styling with amber accents
5. Updated N8nOptions/N8nOption list item styling
6. Dropdown panel animations (forge-reveal pattern)
7. All selection component Storybook stories verified

### Scope Summary
- **In Scope (MVP)**: N8nSelect, N8nSelect2, N8nMultiSelect, N8nUserSelect, N8nTags, N8nTag, N8nOptions, N8nOption, dropdown panels, selected state indicators, search inputs within selects, dark mode parity
- **Out of Scope**: Form input components (Session 01), button components (Session 03), API/prop changes, performance optimizations

---

## Technical Considerations

### Technologies/Patterns
- SCSS with CSS custom properties (tokens)
- Element Plus select overrides
- Vue 3 component styling
- Storybook verification

### Potential Challenges
- **Element Plus specificity battles**: [P00] 8 files use `!important` overrides - select components may resist styling
- **V2 component variants**: [P00] N8nSelect2 exists alongside N8nSelect - ensure both variants themed consistently
- **Dropdown z-index management**: Dropdowns render in portal/teleport - verify styling applies correctly

### Relevant Considerations
- [P00] **V2 component migration in progress**: Ensure theme changes work with both N8nSelect (V1) and N8nSelect2 (V2) variants
- [P00] **Element Plus specificity battles**: Check select/dropdown override files for `!important` usage
- [P00] **Centralized Element Plus overrides**: Modify files in `design-system/src/css/`, not component-level styles

---

## Alternative Sessions

If this session is blocked:
1. **phase01-session03-design-system-action-components** - Button and action components could proceed independently (lower dependency on selection patterns)
2. **phase01-session04-design-system-display-components** - Display components have minimal dependency on selection components

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

# Session Specification

**Session ID**: `phase01-session02-design-system-selection-components`
**Phase**: 01 - Component Library - Design System and Element Plus
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session completes the Obsidian Forge theme integration for all selection-related design system components. Building directly on the form input patterns established in Session 01 (focus rings, border colors, placeholder styles), we now apply consistent styling to dropdowns, multiselects, and tag selectors.

Selection components form the interactive backbone of data entry in n8n workflows. The N8nSelect, N8nMultiSelect, and N8nUserSelect components appear throughout the application for node configuration, credential selection, and user assignment. Ensuring these components reflect the Obsidian Forge aesthetic with amber accents and forge-reveal animations creates visual consistency across the entire application.

This session bridges form inputs and action components by establishing selection interaction patterns. The dropdown panel styling, hover states, and selected item indicators defined here will inform button component styling in Session 03 and ensure the component library presents a unified design language.

---

## 2. Objectives

1. Update N8nSelect and N8nSelect2 SCSS to use Obsidian Forge tokens for dropdown panels, borders, and focus states
2. Style N8nMultiSelect with themed tag chips and selection indicators using amber accent colors
3. Integrate N8nUserSelect with avatar styling and forge-consistent dropdown presentation
4. Apply amber-accented chip styling to N8nTags/N8nTag components with proper hover and active states
5. Theme N8nOption list items with consistent hover highlighting and selected state indicators
6. Verify all selection component Storybook stories in both light and dark modes

---

## 3. Prerequisites

### Required Sessions
- [x] `phase01-session01-design-system-form-components` - Form input patterns (focus rings, border colors, placeholder styles, validation states)
- [x] `phase00-session03-element-plus-token-integration` - Element Plus CSS variable mapping
- [x] `phase00-session04-visual-atmosphere-motion` - Forge-reveal animation tokens

### Required Tools/Knowledge
- SCSS with CSS custom properties (token system)
- Element Plus select component internals and override patterns
- Vue 3 scoped styling and component architecture
- Storybook for visual verification

### Environment Requirements
- Node.js and pnpm installed
- Storybook running on port 6006 (`pnpm storybook` from design-system directory)
- Access to design-system component directory

---

## 4. Scope

### In Scope (MVP)
- N8nSelect/Select.vue - Main select component styling
- N8nSelect2 (if exists) - V2 variant with same styling patterns
- N8nMultiSelect - Multi-selection with tag display
- N8nUserSelect/UserSelect.vue - User selection with avatar integration
- N8nTags/Tags.vue - Tag container component
- N8nTag/Tag.vue - Individual tag chip styling
- N8nOption/Option.vue - Dropdown option list item styling
- `select.scss` - Element Plus select overrides
- `select-dropdown.scss` - Dropdown panel styling
- `tag.scss` - Tag element styling
- Dropdown panel animations using forge-reveal pattern
- Selected state amber highlighting
- Search input styling within select components
- Dark mode parity for all components

### Out of Scope (Deferred)
- Form input components (N8nInput, N8nTextarea) - *Reason: Completed in Session 01*
- Button components (N8nButton, N8nIconButton) - *Reason: Scheduled for Session 03*
- API or prop changes to selection components - *Reason: Visual-only session*
- Virtualization or performance optimizations - *Reason: Functional scope, not styling*
- N8nSelectableList - *Reason: Complex list selection, may require separate session*

---

## 5. Technical Approach

### Architecture
Selection component styling follows the established token cascade pattern: primitives > semantic tokens > component overrides. All color, spacing, and animation values are defined via CSS custom properties in `_tokens.scss` and `_tokens.dark.scss`, consumed by component-level SCSS and Element Plus override files.

Dropdown panels are rendered via Element Plus teleport mechanism, requiring global CSS overrides in `select-dropdown.scss` rather than scoped component styles. This pattern was established in Session 01 for form inputs and extends naturally to selection components.

### Design Patterns
- **Token-first styling**: All colors use `var(--color--*)`, spacing uses `var(--spacing--*)`, animations use `var(--transition--*)`
- **Centralized Element Plus overrides**: Modify files in `design-system/src/css/`, not component-level styles
- **CSS fallback pattern**: Support both `--color-primary` (legacy) and `--color--primary` (new) via fallbacks
- **Dark mode via data-theme**: All dark mode tokens under `body[data-theme='dark']` selector

### Technology Stack
- Vue 3.5+ with Composition API
- SCSS with CSS custom properties
- Element Plus 2.4.3 (patched for SSR)
- Storybook 9 for visual testing
- Vitest for component tests

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| (none) | All files exist; session is modification-only | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/select.scss` | Forge tokens for select borders, backgrounds, focus states | ~40 |
| `design-system/src/css/select-dropdown.scss` | Dropdown panel styling, shadows, animations | ~60 |
| `design-system/src/css/tag.scss` | Tag chip styling with amber accents | ~35 |
| `design-system/src/components/N8nSelect/Select.vue` | Scoped styles for select trigger | ~25 |
| `design-system/src/components/N8nTag/Tag.vue` | Scoped styles for tag chips | ~20 |
| `design-system/src/components/N8nTags/Tags.vue` | Container styling for tag groups | ~15 |
| `design-system/src/components/N8nOption/Option.vue` | List item hover/selected states | ~20 |
| `design-system/src/components/N8nUserSelect/UserSelect.vue` | Avatar integration, dropdown styling | ~30 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Dropdown panels use Obsidian Forge elevation tokens (`--shadow--medium`, `--shadow--large`)
- [ ] Selected items display amber highlight (`--color--amber-200` / `--color--amber-800` dark)
- [ ] Tag chips use themed border-radius (`--border-radius--sm`) and forge colors
- [ ] Search inputs within selects match form input styling from Session 01
- [ ] Hover states use consistent opacity/color transitions
- [ ] Focus indicators match form input focus ring pattern

### Testing Requirements
- [ ] All N8nSelect Storybook stories render correctly
- [ ] All N8nTag/N8nTags Storybook stories render correctly
- [ ] N8nUserSelect story displays avatar correctly
- [ ] Dark mode toggle produces correct color inversions
- [ ] Manual testing in Storybook across all variants

### Quality Gates
- [ ] All files ASCII-encoded (characters 0-127 only)
- [ ] Unix LF line endings
- [ ] No hardcoded color values (use tokens only)
- [ ] Code follows project conventions (CONVENTIONS.md)
- [ ] No `!important` overrides added (unless absolutely necessary)
- [ ] Existing component tests pass

---

## 8. Implementation Notes

### Key Considerations
- Element Plus select renders dropdown via teleport - global CSS required
- N8nSelect2 variant (if present) must receive same styling as N8nSelect
- Tag chips appear in multiple contexts (selects, filters, labels) - ensure versatile styling
- UserSelect includes avatar display - verify avatar token integration

### Potential Challenges
- **Element Plus specificity battles**: [P00] 8 files use `!important` overrides - select components may resist styling. Mitigation: Check existing override patterns, use targeted selectors
- **V2 component variants**: [P00] N8nSelect2 may exist alongside N8nSelect. Mitigation: Verify both variants, apply consistent patterns
- **Dropdown z-index management**: Dropdowns render via portal. Mitigation: Test dropdown visibility over other elements
- **Tag chip consistency**: Tags appear in multiple components. Mitigation: Define base tag styles in `tag.scss`, extend in components

### Relevant Considerations
- [P00] **V2 component migration in progress**: Both N8nSelect (V1) and N8nSelect2 (V2) variants must be themed consistently if V2 exists
- [P00] **Element Plus specificity battles**: Check select/dropdown override files for existing `!important` usage patterns before adding new styles
- [P00] **Centralized Element Plus overrides**: Modify files in `design-system/src/css/`, not component-level styles where possible
- [P00] **Dual token naming convention**: Support both `--color-primary` and `--color--primary` via CSS fallbacks

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No emojis, special Unicode, or extended characters in code files.

---

## 9. Testing Strategy

### Unit Tests
- Existing N8nSelect tests should pass (no behavioral changes)
- Existing N8nUserSelect tests should pass (no behavioral changes)
- Run `pnpm test` in design-system package to verify

### Integration Tests
- Storybook visual verification for all selection components
- Dark mode toggle verification in Storybook
- Component interaction in Storybook (dropdown open/close, selection, tag add/remove)

### Manual Testing
- Open Storybook (`pnpm storybook` in design-system)
- Navigate to N8nSelect, N8nTags, N8nUserSelect stories
- Verify dropdown panel styling matches design
- Toggle dark mode, verify color inversions
- Test keyboard navigation (arrow keys, enter, escape)
- Verify focus states visible and consistent

### Edge Cases
- Empty select state (no options)
- Many selected items in multiselect (tag overflow)
- Long option text (truncation/wrapping)
- Disabled state styling
- Error/validation state for selects (if applicable)

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (patched)
- Vue: 3.5+
- Storybook: 9.x

### Other Sessions
- **Depends on**: `phase01-session01-design-system-form-components` (input patterns)
- **Depends on**: `phase00-session03-element-plus-token-integration` (token mapping)
- **Depends on**: `phase00-session04-visual-atmosphere-motion` (animation tokens)
- **Depended by**: `phase01-session03-design-system-action-components` (button styling builds on selection patterns)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

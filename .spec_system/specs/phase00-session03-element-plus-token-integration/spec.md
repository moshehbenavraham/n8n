# Session Specification

**Session ID**: `phase00-session03-element-plus-token-integration`
**Phase**: 00 - Foundation - Colors, Typography, Branding
**Status**: Not Started
**Created**: 2026-01-02

---

## 1. Session Overview

This session integrates the newly established Forge Metals color token system into the Element Plus component library overrides, transforming n8n's UI foundation from hardcoded values to a systematic, themeable architecture. With 42 SCSS override files controlling dropdowns, inputs, dialogs, tables, and other core UI elements, this integration touches every part of the application's visual interface.

The work directly builds on Session 01's color primitives and enables subsequent sessions (Visual Atmosphere & Motion, Hardcoded Color Remediation) to proceed on a solid foundation. Eight files with `!important` specificity battles require special attention, as do the 10 V2 components currently in migration. Success means Element Plus components render correctly with new tokens while maintaining full backwards compatibility with the legacy `--color-primary` format.

This is high-impact foundation work. Element Plus overrides affect dropdowns, pagination, inputs, tooltips, and dialogs across the entire application. Getting this right unlocks the visual identity transformation of the Obsidian Forge design system.

---

## 2. Objectives

1. Update all 38+ Element Plus override SCSS files to use Forge Metals tokens with consistent fallback pattern
2. Reduce or document `!important` specificity issues in 8 priority files (skeleton, icon, checkbox, table, menu, loading, drawer, color-picker)
3. Verify V2 component compatibility with updated theme (N8nSelect2, N8nCheckbox2, etc.)
4. Update common/var.scss with semantic variable mappings for Element Plus integration

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Provides Forge Metals color primitives in _primitives.scss
- [x] `phase00-session02-brand-identity-assets` - Brand identity established

### Required Tools/Knowledge
- Understanding of Element Plus 2.4.3 CSS architecture
- SCSS with CSS custom properties (variables)
- Token cascade pattern: Primitives > Semantic > Component

### Environment Requirements
- Node.js and pnpm installed
- Design system Storybook available (port 6006)
- Frontend dev server available (port 8080)

---

## 4. Scope

### In Scope (MVP)
- Update 38+ Element Plus override SCSS files with new tokens
- Implement token fallback pattern: `var(--color--primary, var(--color--orange-300))`
- Address !important specificity issues in 8 identified files
- Ensure V2 component compatibility (10 components)
- Update common/var.scss with new variable mappings
- Verify dropdown, pagination, inputs, tooltips, dialogs render correctly
- Test both light and dark mode themes

### Out of Scope (Deferred)
- Full Element Plus replacement - *Reason: Not in project scope*
- New Element Plus component additions - *Reason: Focus on existing overrides*
- Element Plus version upgrades - *Reason: SSR patch compatibility at 2.4.3*
- Third-party widget color modifications (color-picker gradients) - *Reason: External dependency*

---

## 5. Technical Approach

### Architecture
The Element Plus override system follows a layered architecture:

1. **Primitives Layer** (`_primitives.scss`): Raw HSL color values with 11-step scale
2. **Semantic Layer** (`_tokens.scss` / `_tokens.dark.scss`): Purpose-based mappings
3. **Integration Layer** (`common/var.scss`): Maps semantic tokens to Element Plus variables
4. **Component Layer** (`*.scss` overrides): Component-specific customizations

Each override file will be updated to reference semantic tokens rather than hardcoded values, using the fallback pattern for backwards compatibility.

### Design Patterns
- **Token Fallback Pattern**: `--el-color-primary: var(--color--primary, var(--color--orange-300))` ensures old and new variable names both work
- **Cascade Inheritance**: Changes flow from primitives through semantics to components
- **Dark Mode via Selector**: `body[data-theme='dark']` toggles theme values

### Technology Stack
- SCSS with CSS custom properties
- Element Plus 2.4.3 (SSR-patched)
- Vue 3 Composition API
- Storybook 9 for visual verification

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `specs/phase00-session03.../spec.md` | This specification | ~250 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/common/var.scss` | Add semantic token mappings | ~50 |
| `design-system/src/css/button.scss` | Update to Forge Metals tokens | ~20 |
| `design-system/src/css/input.scss` | Update to Forge Metals tokens | ~25 |
| `design-system/src/css/select.scss` | Update to Forge Metals tokens | ~20 |
| `design-system/src/css/dropdown.scss` | Update to Forge Metals tokens | ~15 |
| `design-system/src/css/dialog.scss` | Update to Forge Metals tokens | ~20 |
| `design-system/src/css/tooltip.scss` | Update to Forge Metals tokens | ~15 |
| `design-system/src/css/pagination.scss` | Update to Forge Metals tokens | ~15 |
| `design-system/src/css/table.scss` | Update tokens, address !important | ~30 |
| `design-system/src/css/menu.scss` | Update tokens, address !important | ~25 |
| `design-system/src/css/checkbox.scss` | Update tokens, address !important | ~20 |
| `design-system/src/css/skeleton.scss` | Update tokens, address !important | ~15 |
| `design-system/src/css/icon.scss` | Update tokens, address !important | ~15 |
| `design-system/src/css/loading.scss` | Update tokens, address !important | ~15 |
| `design-system/src/css/drawer.scss` | Update tokens, address !important | ~20 |
| `design-system/src/css/color-picker.scss` | Update tokens, document limitations | ~15 |
| ~22 additional override files | Update to Forge Metals tokens | ~200 total |

---

## 7. Success Criteria

### Functional Requirements
- [ ] All 38+ Element Plus override files updated with Forge Metals tokens
- [ ] Token fallback pattern `var(--color--primary, var(--color--orange-300))` used consistently
- [ ] V2 components render correctly (N8nSelect2, N8nCheckbox2, N8nPagination2, N8nRadio2, N8nInput2, N8nButton2, N8nSwitch2, N8nFormInput2, N8nFormItem2, N8nFormBox2)
- [ ] Dropdowns styled with new tokens and functional
- [ ] Pagination controls styled with new tokens
- [ ] Input fields styled with new tokens
- [ ] Tooltips styled with new tokens
- [ ] Dialogs styled with new tokens

### Testing Requirements
- [ ] Storybook shows all Element Plus components correctly in light mode
- [ ] Storybook shows all Element Plus components correctly in dark mode
- [ ] `pnpm build` passes without errors
- [ ] No SCSS compilation warnings from token changes

### Quality Gates
- [ ] All files ASCII-encoded (0-127)
- [ ] Unix LF line endings
- [ ] Code follows project conventions (CONVENTIONS.md)
- [ ] No new `!important` declarations introduced
- [ ] Existing `!important` usage documented or reduced

---

## 8. Implementation Notes

### Key Considerations
- Always use the fallback pattern for backwards compatibility with legacy `--color-primary` format
- Test each override file in both light and dark modes before moving to the next
- Document any Element Plus components that resist styling - accept limitations where necessary
- Verify V1/V2 component dual support throughout

### Potential Challenges
- **Specificity battles**: 8 files use `!important` - may not be fully resolvable, document limitations
- **V1/V2 dual support**: Some V2 components may have different class structures
- **Element Plus resistance**: Some components have inline styles that override CSS - document these
- **Color-picker limitations**: Third-party color widget may not respond to token changes

### Relevant Considerations
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; check skeleton, icon, checkbox, table, menu, loading, drawer. Mitigation: Document unavoidable cases, reduce where possible.
- [P00] **V2 component migration in progress**: 10 V2 components exist - test both V1 and V2 variants for each component type.
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in `design-system/src/css/` - systematic batch processing approach.
- [P00] **Element Plus 2.4.3 patched for SSR**: Don't upgrade, work within current version constraints.
- [P00] **Dual token naming convention**: Old `--color-primary` and new `--color--primary` both work - use fallback pattern consistently.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No unicode quotes, em-dashes, or special characters.

---

## 9. Testing Strategy

### Unit Tests
- Existing component tests should continue to pass
- No new unit tests required for CSS token changes

### Integration Tests
- Verify token cascade flows correctly through build process
- Confirm dark mode toggle switches all Element Plus component colors

### Manual Testing
- Launch Storybook: `cd packages/frontend/@n8n/design-system && pnpm storybook`
- Review all 96 stories for Element Plus component appearance
- Toggle dark mode and verify all components switch themes correctly
- Test interactive states: hover, focus, active, disabled

### Edge Cases
- Empty dropdown menus
- Long pagination sequences
- Nested dialogs
- Tooltips near viewport edges
- Loading states overlaying other components

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (patched)
- Vue: 3.x
- SCSS/Sass: project standard

### Other Sessions
- **Depends on**: `phase00-session01-color-system-foundation` (color primitives), `phase00-session02-brand-identity-assets` (brand established)
- **Depended by**: `phase00-session04-visual-atmosphere-motion` (motion tokens need stable foundation), `phase00-session05-hardcoded-color-remediation` (requires Element Plus integration complete)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

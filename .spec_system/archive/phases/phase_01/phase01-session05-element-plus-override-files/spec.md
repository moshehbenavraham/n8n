# Session Specification

**Session ID**: `phase01-session05-element-plus-override-files`
**Phase**: 01 - Component Library - Design System and Element Plus
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session systematically updates all 42 Element Plus SCSS override files in `packages/frontend/@n8n/design-system/src/css/` to fully integrate Obsidian Forge design tokens. Sessions 01-04 established token patterns across design system components (form, selection, action, display); this session extends those patterns to the Element Plus integration layer.

Element Plus is the Vue 3 component library used throughout n8n. Rather than modifying Element Plus source, n8n uses SCSS override files to customize component appearance. These overrides must use Obsidian Forge tokens to ensure visual consistency with the design system and proper dark mode support.

Completing this session ensures that all UI components--both custom n8n design system components and Element Plus components--share a unified visual language. This is the final styling session before Session 06's Storybook verification can confirm complete design system integration.

---

## 2. Objectives

1. Update all 42 Element Plus SCSS override files to use Obsidian Forge tokens for colors, borders, shadows, and transitions
2. Ensure dark mode compatibility in all override files using the `body[data-theme='dark']` pattern
3. Minimize `!important` usage and document exceptions where Element Plus specificity requires it
4. Maintain Element Plus class naming compatibility for seamless integration

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Established HSL-based primitives
- [x] `phase00-session03-element-plus-token-integration` - Created Element Plus variable mappings
- [x] `phase00-session04-visual-atmosphere-motion` - Defined motion/animation tokens
- [x] `phase01-session01-design-system-form-components` - Form component patterns
- [x] `phase01-session02-design-system-selection-components` - Selection component patterns
- [x] `phase01-session03-design-system-action-components` - Action component patterns
- [x] `phase01-session04-design-system-display-components` - Display component patterns

### Required Tools/Knowledge
- Understanding of Element Plus 2.4.3 class naming conventions
- Familiarity with SCSS and CSS custom properties
- Knowledge of Obsidian Forge token hierarchy (primitives > semantic > component)

### Environment Requirements
- Node.js and pnpm installed
- Access to `pnpm storybook` for visual verification (port 6006)
- Access to `pnpm dev:fe` for editor-ui testing (port 8080)

---

## 4. Scope

### In Scope (MVP)
- Review and update all 42 SCSS override files in `design-system/src/css/`
- Replace hardcoded colors with token references (`var(--color--*)`)
- Update border-radius to use token scale (`var(--border-radius--*)`)
- Update shadow values to use shadow tokens (`var(--box-shadow--*)`)
- Update transition timings to use motion tokens (`var(--timing--*)`)
- Address `!important` overrides where possible
- Maintain Element Plus class naming compatibility
- Dark mode token usage in all overrides

### Out of Scope (Deferred)
- Replacing Element Plus entirely - *Reason: Major architecture change, out of phase scope*
- Modifying Element Plus source code - *Reason: Patch management complexity*
- Custom Element Plus component development - *Reason: Future phase consideration*
- Performance optimizations - *Reason: Separate session if needed*
- V2 component migration - *Reason: Tracked separately, ensure compatibility only*

---

## 5. Technical Approach

### Architecture
The Element Plus override system follows a layered approach:
1. Element Plus provides base component styles
2. Override SCSS files in `design-system/src/css/` customize appearance
3. Overrides consume tokens from `_tokens.scss` (light) and `_tokens.dark.scss` (dark)
4. Final styles cascade to render themed Element Plus components

### Design Patterns
- **Token cascade**: Use semantic tokens that reference primitives, allowing theme changes to propagate automatically
- **Fallback pattern**: `var(--color--primary, var(--color-primary, hsl(7, 100%, 68%)))` for backwards compatibility
- **Dark mode selector**: All dark overrides use `body[data-theme='dark']` selector
- **Specificity matching**: Match Element Plus specificity levels to avoid `!important` where possible

### Technology Stack
- SCSS with CSS custom properties (variables)
- Element Plus 2.4.3 (patched for SSR)
- Obsidian Forge token system (HSL-based)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All files exist; this is a modification session | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/button.scss` | Forge button tokens | ~20 |
| `design-system/src/css/input.scss` | Form input tokens | ~30 |
| `design-system/src/css/input-number.scss` | Number input tokens | ~20 |
| `design-system/src/css/select.scss` | Selection tokens | ~40 |
| `design-system/src/css/select-dropdown.scss` | Dropdown tokens | ~25 |
| `design-system/src/css/dropdown.scss` | Dropdown menu tokens | ~25 |
| `design-system/src/css/checkbox.scss` | Checkbox form tokens | ~30 |
| `design-system/src/css/radio.scss` | Radio form tokens | ~25 |
| `design-system/src/css/switch.scss` | Toggle switch tokens | ~25 |
| `design-system/src/css/dialog.scss` | Modal dialog tokens | ~30 |
| `design-system/src/css/message-box.scss` | Message box tokens | ~25 |
| `design-system/src/css/table.scss` | Table grid tokens | ~40 |
| `design-system/src/css/table-column.scss` | Table column tokens | ~15 |
| `design-system/src/css/menu.scss` | Navigation menu tokens | ~35 |
| `design-system/src/css/tabs.scss` | Tab navigation tokens | ~30 |
| `design-system/src/css/tooltip.scss` | Tooltip overlay tokens | ~20 |
| `design-system/src/css/popover.scss` | Popover overlay tokens | ~20 |
| `design-system/src/css/popper.scss` | Popper positioning tokens | ~15 |
| `design-system/src/css/loading.scss` | Loading animation tokens | ~25 |
| `design-system/src/css/skeleton.scss` | Skeleton animation tokens | ~20 |
| `design-system/src/css/notification.scss` | Notification tokens | ~25 |
| `design-system/src/css/drawer.scss` | Drawer panel tokens | ~30 |
| `design-system/src/css/date-picker.scss` | Date picker tokens | ~35 |
| `design-system/src/css/pagination.scss` | Pagination tokens | ~20 |
| `design-system/src/css/tag.scss` | Tag component tokens | ~20 |
| `design-system/src/css/option.scss` | Option item tokens | ~15 |
| `design-system/src/css/option-group.scss` | Option group tokens | ~15 |
| `design-system/src/css/tree.scss` | Tree view tokens | ~25 |
| `design-system/src/css/icon.scss` | Icon tokens | ~15 |
| `design-system/src/css/scrollbar.scss` | Scrollbar tokens | ~20 |
| `design-system/src/css/color-picker.scss` | Review only (external widget) | ~5 |
| `design-system/src/css/row.scss` | Grid row tokens | ~10 |
| `design-system/src/css/col.scss` | Grid column tokens | ~10 |
| `design-system/src/css/display.scss` | Display utility tokens | ~10 |
| `design-system/src/css/base.scss` | Base element tokens | ~15 |
| `design-system/src/css/reset.scss` | Reset tokens | ~10 |
| `design-system/src/css/fonts.scss` | Font tokens | ~10 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] All 42 override files use Obsidian Forge tokens for colors
- [ ] All override files use token-based border-radius values
- [ ] All override files use token-based shadow values
- [ ] All override files use token-based transition timings
- [ ] No new hardcoded color values introduced
- [ ] Element Plus components render correctly in editor-ui

### Testing Requirements
- [ ] SCSS compilation succeeds without errors
- [ ] Storybook renders Element Plus components correctly
- [ ] Manual testing in editor-ui confirms visual consistency
- [ ] Dark mode toggle switches Element Plus component styles correctly

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] Code follows project conventions (kebab-case tokens, double-dash prefix)
- [ ] `!important` usage documented in code comments where required
- [ ] Short hex codes expanded to 6-character format where found

---

## 8. Implementation Notes

### Key Considerations
- Work through files systematically by component category (form, selection, navigation, overlay, feedback)
- Check each file for hardcoded colors using grep before and after updates
- Preserve existing Element Plus class selectors exactly
- Test in both light and dark modes after each major category

### Potential Challenges
- **Specificity battles**: 8 files already use `!important` (skeleton, icon, checkbox, table, menu, loading, drawer). Attempt to reduce, but document exceptions.
- **Element Plus resistance**: Some EP components resist styling via CSS variables. Document these limitations.
- **V2 component compatibility**: 10 V2 components exist (`N8nSelect2`, `N8nCheckbox2`, etc.). Verify theme changes work with both versions.
- **Date picker gradients**: Third-party dependent styling; accept limitations per CONSIDERATIONS.md.

### Relevant Considerations
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling. Check skeleton, icon, checkbox, table, menu, loading, drawer for required exceptions.
- [P00] **Centralized Element Plus overrides**: All 42 SCSS files in `design-system/src/css/` handle Element Plus customization. Modify these, not component-level styles.
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants.
- [P00] **Short hex codes need normalization**: ~25 instances of `#fff`, `#ccc`, `#f00` should be expanded to 6-char format during updates.
- [P00] **Don't modify external library widget styles**: color-picker.scss is third-party dependent; accept limitations.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No curly quotes, em-dashes, or special Unicode characters.

---

## 9. Testing Strategy

### Unit Tests
- No unit tests required; this is a styling session

### Integration Tests
- SCSS compilation verification via build process
- Storybook visual rendering check

### Manual Testing
- Launch Storybook (`pnpm storybook` in design-system package, port 6006)
- Review all 96 stories for Element Plus component appearance
- Launch editor-ui (`pnpm dev:fe`, port 8080) and verify in-app rendering
- Toggle dark mode and verify all Element Plus components switch correctly

### Edge Cases
- Elements with `!important` overrides in original files
- Components used both standalone and within other components
- Hover, focus, disabled, and active states for interactive elements
- Nested components (e.g., select dropdown inside dialog)

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (patched for SSR)
- Vue: 3.x
- SCSS: via Vite build pipeline

### Other Sessions
- **Depends on**: phase01-session01 through phase01-session04 (design system patterns)
- **Depended by**: phase01-session06-storybook-verification (requires complete Element Plus theming)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

# Session Specification

**Session ID**: `phase02-session07-overlay-components`
**Phase**: 02 - Application Features - Canvas, NDV, Modals
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session completes Phase 02 by theming all overlay UI components with the Obsidian Forge aesthetic. Overlay components are floating UI elements that appear on top of the main content layer - including toast notifications, popovers, tooltips, context menus, and loading overlays. These elements share common z-index layering and animation requirements established in Session 06 (modal system).

The primary focus is ensuring consistent visual treatment across all overlay types: elevated forge surfaces with appropriate shadows, semantic state colors (verdigris for success, ember for danger, gold for warning, neutral for info), smooth entrance/exit animations, and proper contrast for accessibility. This session builds directly on the modal z-index foundation and applies similar forge-inspired styling patterns.

Completing this session finalizes the application feature theming, enabling transition to Phase 03 (Polish) where edge cases, testing, and dark mode parity will be addressed.

---

## 2. Objectives

1. Theme toast notifications with Obsidian Forge semantic state colors and entrance/exit animations
2. Style popovers and dropdowns with forge elevated surface treatment
3. Update tooltip styling for forge aesthetic with WCAG AA contrast compliance
4. Theme context menus and loading overlays consistently with forge design system

---

## 3. Prerequisites

### Required Sessions
- [x] `phase02-session06-modal-dialog-system` - Modal z-index foundation and animation patterns
- [x] `phase01-session05-element-plus-override-files` - Element Plus override structure
- [x] `phase00-session01-color-system-foundation` - Forge color primitives (verdigris, ember, gold, neutral)

### Required Tools/Knowledge
- SCSS with BEM mixin pattern (`@include mixins.b()`, `@include mixins.e()`)
- Element Plus component class structure (el-notification, el-tooltip, el-popover, el-loading)
- CSS custom properties (tokens) cascade pattern

### Environment Requirements
- pnpm workspace commands functional
- Storybook available at port 6006 for component verification
- Design-system SCSS files editable

---

## 4. Scope

### In Scope (MVP)
- Toast/notification styling with semantic state colors (success, error, warning, info)
- Toast entrance animations (slide-in from edge) and exit animations (fade-out)
- Toast positioning and stacking behavior
- Popover container styling with forge elevated surface
- Popover arrow/pointer styling to match container
- Tooltip dark/light variant styling with proper contrast
- Context menu styling aligned with dropdown patterns
- Loading overlay backdrop and spinner styling
- Skeleton loader animation with forge color tokens

### Out of Scope (Deferred)
- Modal dialogs - *Reason: Completed in Session 06*
- NDV panel overlays - *Reason: Completed in Sessions 04-05*
- Canvas node overlays - *Reason: Completed in Sessions 01-03*
- Custom toast component creation - *Reason: Using Element Plus el-notification*

---

## 5. Technical Approach

### Architecture
All overlay styling is centralized in the design-system SCSS files under `packages/frontend/@n8n/design-system/src/css/`. This follows the established pattern where Element Plus overrides are maintained separately from component-level styles. Tokens provide semantic color mappings that cascade from primitives.

### Design Patterns
- **BEM SCSS Mixins**: Using `@include mixins.b(notification)` pattern for scoped styling
- **CSS Custom Properties**: All colors, shadows, and spacing use token variables
- **Token Cascade**: Primitives > Semantic tokens > Component variables
- **Fallback Pattern**: `var(--new-format, var(--old-format, fallback))` for compatibility

### Technology Stack
- SCSS with design-system mixins (v2.0)
- Element Plus 2.4.3 (patched for SSR)
- CSS Custom Properties for theming
- Vue 3 transition classes for animations

---

## 6. Deliverables

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/notification.scss` | Add forge styling, semantic colors, enhanced animations | ~40 |
| `design-system/src/css/popover.scss` | Add forge elevated surface, shadow, border styling | ~30 |
| `design-system/src/css/tooltip.scss` | Update dark/light variants with forge colors, improve contrast | ~35 |
| `design-system/src/css/dropdown.scss` | Enhance hover states, add forge surface styling | ~25 |
| `design-system/src/css/menu.scss` | Align context menu styling with dropdowns | ~20 |
| `design-system/src/css/loading.scss` | Update mask background, spinner color tokens | ~15 |
| `design-system/src/css/skeleton.scss` | Verify forge color tokens in animation gradient | ~10 |
| `design-system/src/css/common/var.scss` | Add/update notification, tooltip, popover variables | ~30 |
| `design-system/src/css/_tokens.scss` | Add overlay-specific tokens if needed | ~20 |
| `design-system/src/css/_tokens.dark.scss` | Add dark mode overlay token overrides | ~15 |

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All work modifies existing files | - |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Success notifications display with verdigris coloring (green teal)
- [ ] Error notifications display with ember coloring (red)
- [ ] Warning notifications display with gold coloring (amber/caution)
- [ ] Info notifications display with neutral coloring (steel grey)
- [ ] Toast entrance animations slide in smoothly from screen edge
- [ ] Toast exit animations fade out without jarring transitions
- [ ] Popovers display forge elevated surface with subtle shadow
- [ ] Popover arrows match container background and border
- [ ] Tooltips are readable with WCAG AA contrast (4.5:1 minimum)
- [ ] Context menus match dropdown styling pattern
- [ ] Loading overlays use forge-appropriate backdrop
- [ ] Loading spinner uses primary color token
- [ ] All overlays stack correctly (z-index layering)

### Testing Requirements
- [ ] Manual testing of all notification states (success, error, warning, info)
- [ ] Visual verification in both light and dark modes
- [ ] Storybook story review for affected components
- [ ] Tooltip contrast verification with browser dev tools

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings throughout
- [ ] No new `!important` declarations unless absolutely necessary
- [ ] All colors use CSS custom property tokens
- [ ] Code follows BEM SCSS mixin conventions

---

## 8. Implementation Notes

### Key Considerations
- Element Plus notification uses `el-notification` class with state modifiers (`--success`, `--error`, etc.)
- Existing notification.scss already uses token variables; enhance rather than rewrite
- Tooltip has separate dark (`is-dark`) and light (`is-light`) variants requiring different treatment
- Loading mask uses `--color--loading-mask--background` token already defined

### Potential Challenges
- **Element Plus specificity battles**: Some components resist styling (noted in CONSIDERATIONS.md). May need targeted selectors for notification icons.
- **Tooltip contrast in dark mode**: Light-on-dark tooltips need sufficient contrast. Use `--color--obsidian-900` background with `--color--neutral-white` text.
- **Animation performance**: Ensure animations use `transform` and `opacity` only for GPU acceleration.

### Relevant Considerations
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides. Check loading component specifically as it's mentioned. Use targeted selectors if needed.
- [P00] **Centralized Element Plus overrides**: All styling goes in `design-system/src/css/` files, not component-level styles.
- [P00] **Dual token naming convention**: Support both `--color-primary` and `--color--primary` formats via fallback pattern.
- [P00] **Dark mode via data-theme attribute**: Test all overlays with `body[data-theme='dark']` selector active.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No unicode characters in SCSS comments or string values.

---

## 9. Testing Strategy

### Unit Tests
- No new unit tests required (styling only)
- Existing component tests should continue passing

### Integration Tests
- Verify notification display in running application
- Test tooltip hover interactions
- Confirm loading overlay appears/disappears correctly

### Manual Testing
- Trigger success, error, warning, info notifications in app
- Hover elements with tooltips, verify readability
- Open popovers and dropdowns, verify styling
- Trigger loading states, verify overlay appearance
- Test all scenarios in both light and dark mode

### Edge Cases
- Multiple stacked notifications (verify z-index and spacing)
- Tooltips on disabled elements (should still display)
- Loading overlay with custom text (verify text styling)
- Popover with long content (verify scroll/overflow)
- Skeleton loader during async operations

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (patched)
- Vue: 3.x (Vue Flow requirement)

### Other Sessions
- **Depends on**: `phase02-session06-modal-dialog-system` (z-index foundation)
- **Depended by**: Phase 03 sessions (polish phase builds on completed theming)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

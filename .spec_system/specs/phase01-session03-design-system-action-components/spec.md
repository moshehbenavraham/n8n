# Session Specification

**Session ID**: `phase01-session03-design-system-action-components`
**Phase**: 01 - Component Library - Design System and Element Plus
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session continues the Obsidian Forge design system integration by updating all action-related components with consistent interaction patterns. Following the successful completion of form components (Session 01) and selection components (Session 02), action components represent the third major category requiring theming - buttons, links, menu items, and toggle actions.

Action components are the primary interactive elements users click to trigger workflows, navigate, and perform operations. Consistent hover lifts, amber focus rings, and mechanical motion easing across all action components will create a cohesive, tactile user experience that reinforces the Obsidian Forge aesthetic. The patterns established here will directly inform Session 04 (display components) and Session 05 (Element Plus overrides).

This session focuses exclusively on design-system action components, ensuring all button variants, link states, and action containers implement the same interaction vocabulary established in previous sessions.

---

## 2. Objectives

1. Apply Obsidian Forge hover lift animation (translateY -1px + shadow deepening) to all button variants
2. Implement amber focus rings using `--shadow--glow-sm` across all action components
3. Standardize active/pressed states with mechanical motion easing (`--ease--precision`, 150ms)
4. Ensure dark mode parity for all 7 action components
5. Update loading states to use amber spinner color

---

## 3. Prerequisites

### Required Sessions
- [x] `phase01-session01-design-system-form-components` - Established input interaction patterns
- [x] `phase01-session02-design-system-selection-components` - Established selection interaction patterns
- [x] `phase00-session04-visual-atmosphere-motion` - Defined motion tokens and easing functions

### Required Tools/Knowledge
- SCSS with CSS custom properties (design tokens)
- Vue 3 Composition API component patterns
- Storybook for visual verification

### Environment Requirements
- pnpm workspace setup complete
- Storybook accessible at port 6006 (`pnpm storybook`)
- Design token files present and functional

---

## 4. Scope

### In Scope (MVP)
- N8nButton component styling (primary, secondary, tertiary, highlight, danger variants)
- N8nIconButton component styling
- N8nLink component hover/focus/active states
- N8nMenuItem component hover background and focus ring
- N8nActionToggle component toggle animation
- N8nActionBox container styling with hover lift
- Loading state spinner color updates
- Dark mode verification for all components

### Out of Scope (Deferred)
- Form input components - *Reason: Completed in Session 01*
- Selection components - *Reason: Completed in Session 02*
- Element Plus button overrides - *Reason: Session 05 scope*
- Component API changes - *Reason: Styling-only session*
- AskAssistantButton, IconTextButton, N8nSendStopButton - *Reason: Specialized components, handle after core patterns*

---

## 5. Technical Approach

### Architecture
Action component styling follows the established token cascade: primitives (`_primitives.scss`) -> semantic tokens (`_tokens.scss`) -> component variables (`var.scss`) -> component SCSS. All interactive states reference existing motion tokens to ensure consistency.

### Design Patterns
- **Hover lift**: `translateY(-1px)` with shadow transition from `--shadow` to `--shadow--md`
- **Focus ring**: Amber glow using `box-shadow: var(--shadow--glow-sm)` (0 0 0 3px amber-300/40)
- **Active state**: `translateY(0)` with shadow reduction, 150ms transition
- **Motion**: `transition: transform var(--duration--fast) var(--ease--precision), box-shadow var(--duration--fast) var(--ease--precision)`

### Technology Stack
- SCSS with CSS custom properties
- Vue 3 (`<style lang="scss" scoped>`)
- Existing design token system
- Storybook 9 for visual testing

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All modifications to existing files | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/components/N8nButton/Button.scss` | Add hover lift, focus ring, motion easing | ~40 |
| `design-system/src/components/N8nButton/Button.vue` | Loading spinner color token | ~5 |
| `design-system/src/components/N8nIconButton/IconButton.vue` | Hover lift, focus ring, icon-only sizing adjustments | ~30 |
| `design-system/src/components/N8nLink/Link.vue` | Amber hover underline, focus ring | ~25 |
| `design-system/src/components/N8nMenuItem/MenuItem.vue` | Hover background, focus ring | ~25 |
| `design-system/src/components/N8nActionToggle/ActionToggle.vue` | Toggle animation with amber accent | ~20 |
| `design-system/src/components/N8nActionBox/ActionBox.vue` | Container hover lift, focus ring | ~25 |
| `design-system/src/css/_tokens.scss` | Add button-specific motion/focus tokens if needed | ~10 |
| `design-system/src/css/_tokens.dark.scss` | Dark mode overrides for action components | ~15 |
| `design-system/src/css/common/var.scss` | Button loading spinner color variable | ~5 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Primary buttons use amber-500 background with dark text for contrast
- [ ] Secondary buttons use steel border with transparent background
- [ ] Tertiary buttons have minimal chrome with amber text
- [ ] Hover states implement lift animation (translateY -1px, shadow deepening)
- [ ] Focus-visible states display amber glow ring (3px)
- [ ] Active states show pressed effect (translateY 0, shadow reduction)
- [ ] Loading spinners use amber color
- [ ] Links show amber underline on hover
- [ ] Menu items highlight with subtle amber background on hover

### Testing Requirements
- [ ] Storybook stories for all 7 action components pass visual check
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly with proper token overrides
- [ ] Keyboard navigation shows visible focus rings
- [ ] No console errors or warnings

### Quality Gates
- [ ] All files ASCII-encoded (characters 0-127 only)
- [ ] Unix LF line endings
- [ ] Code follows project SCSS conventions (tokens, not raw values)
- [ ] No new `!important` declarations added
- [ ] Existing unit tests pass

---

## 8. Implementation Notes

### Key Considerations
- Button.scss already uses token-based styling via mixins - modify the mixin definitions
- N8nIconButton wraps N8nButton - may inherit hover lift automatically
- N8nActionToggle uses N8nIconButton internally - verify cascade
- Loading states need spinner SVG color updated, not just CSS

### Potential Challenges
- **Element Plus specificity**: Button components may inherit Element Plus base styles. Use component-scoped styles, not `!important`.
- **Motion performance**: Ensure transforms use GPU acceleration (`translateY` is good, `top` would be bad).
- **Dark mode focus rings**: Amber glow may need opacity adjustment for dark backgrounds.

### Relevant Considerations
- [P00] **Element Plus specificity battles**: Button components may resist styling. Component-scoped SCSS with higher specificity selectors if needed.
- [P00] **Centralized Element Plus overrides**: Avoid modifying files in `design-system/src/css/` for component-specific changes. Session 05 will handle Element Plus overrides centrally.
- [P00] **Token cascade**: Primitives > Semantic > Component. Change component-level variables for targeted changes.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No smart quotes, em-dashes, or non-ASCII unicode.

---

## 9. Testing Strategy

### Unit Tests
- Verify existing Button.test.ts passes after changes
- Verify existing ActionBox.test.ts passes after changes
- Verify existing Link.test.ts passes after changes

### Integration Tests
- Not required for styling-only changes

### Manual Testing
- Open Storybook at port 6006
- Navigate to each action component story
- Verify hover lift visually
- Tab through components to verify focus ring visibility
- Toggle dark mode and repeat verification
- Test loading state on N8nButton

### Edge Cases
- Disabled buttons should not show hover lift
- Button groups need proper border handling between adjacent buttons
- Loading spinner animation should be smooth, not janky

---

## 10. Dependencies

### External Libraries
- Element Plus 2.4.3 (patched for SSR) - provides base button component
- Vue 3 - component framework

### Other Sessions
- **Depends on**: `phase01-session01`, `phase01-session02` (consistent patterns)
- **Depended by**: `phase01-session04` (display components), `phase01-session05` (Element Plus overrides)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

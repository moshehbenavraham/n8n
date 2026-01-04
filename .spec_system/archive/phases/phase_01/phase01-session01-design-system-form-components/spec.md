# Session Specification

**Session ID**: `phase01-session01-design-system-form-components`
**Phase**: 01 - Component Library - Design System and Element Plus
**Status**: Not Started
**Created**: 2026-01-02

---

## 1. Session Overview

This session systematically updates all form-related design system components to fully integrate the Obsidian Forge visual foundation established in Phase 00. Form components are the most frequently used UI elements in n8n's workflow editor - appearing in credential forms, node configuration panels, workflow settings, and user preferences.

The primary transformation involves applying the Forge focus ring (amber glow effect) to all interactive form elements, ensuring consistent hover/active state transitions using the motion tokens, and verifying that all color references use semantic tokens rather than hardcoded values. This creates a cohesive "forged metal" aesthetic where form interactions feel responsive and premium.

By completing this session, we establish the interaction patterns (focus rings, hover states, transitions) that will cascade through all remaining component sessions in Phase 01. The SCSS override files in `design-system/src/css/` provide centralized control over Element Plus form components, making this a high-impact session with relatively contained scope.

---

## 2. Objectives

1. Integrate Forge focus ring (`focus-ring` mixin from `_forge-mixins.scss`) into all form input elements with consistent amber glow
2. Update checkbox and radio components with Forge theme colors (primary amber accent, proper disabled states)
3. Implement switch toggle with smooth transitions using motion tokens (`--duration--fast`, `--easing--ease-out`)
4. Ensure all form components support both light and dark modes via token references

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Color primitives and semantic tokens
- [x] `phase00-session03-element-plus-token-integration` - Element Plus variable mapping
- [x] `phase00-session04-visual-atmosphere-motion` - Forge mixins and motion tokens

### Required Tools/Knowledge
- SCSS with CSS custom properties (var() syntax)
- Element Plus component structure and class naming
- Vue 3 component styling patterns
- Storybook for visual verification

### Environment Requirements
- Node.js and pnpm installed
- Storybook accessible at port 6006 (`pnpm storybook` in design-system)
- Development server at port 8080 (`pnpm dev:fe`)

---

## 4. Scope

### In Scope (MVP)
- `input.scss` - Text input and textarea focus states, hover effects
- `checkbox.scss` - Checkbox checked state colors, focus ring, hover transition
- `radio.scss` - Radio button checked state, focus ring, hover effects
- `switch.scss` - Toggle animation, on/off colors, smooth transitions
- `input-number.scss` - Number input focus and button states
- Integration of `focus-ring` mixin for keyboard navigation accessibility
- Dark mode token verification for all form states
- Storybook story visual verification

### Out of Scope (Deferred)
- N8nSelect/N8nSelect2 components - *Session 02: Selection Components*
- N8nButton components - *Session 03: Action Components*
- Complex form validation logic - *No styling impact*
- Component API/prop changes - *Styling only session*
- V2 component migration - *Session 06: V2 Migration*

---

## 5. Technical Approach

### Architecture
Form component styling follows a cascade pattern:
1. CSS custom properties defined in `_tokens.scss` / `_tokens.dark.scss`
2. SCSS variables in `common/var.scss` reference tokens
3. Override files (`input.scss`, `checkbox.scss`, etc.) consume variables
4. Vue components inherit styles via Element Plus class selectors

Changes propagate automatically through this cascade - modifying `var.scss` variables or adding mixin includes in override files affects all instances.

### Design Patterns
- **Mixin Composition**: Include `focus-ring` from `_forge-mixins.scss` for consistent focus states
- **Token-First Styling**: All color values via `var(--color--*)`, never hex codes
- **State Machine**: Each component has default, hover, focus, active, disabled states
- **Dark Mode Toggle**: `body[data-theme='dark']` selector for theme-specific overrides

### Technology Stack
- SCSS with Sass modules (`@use` syntax)
- CSS Custom Properties (CSS Variables)
- Element Plus 2.4.3 component library
- Vue 3.5.x with Composition API

---

## 6. Deliverables

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/input.scss` | Add focus-ring mixin, update focus border color to amber, add hover transition | ~30 |
| `design-system/src/css/checkbox.scss` | Integrate focus-ring, update checked background to primary, add hover glow | ~40 |
| `design-system/src/css/radio.scss` | Add focus-ring, update checked dot color, hover transition | ~35 |
| `design-system/src/css/switch.scss` | Smooth toggle animation, on-state amber glow, focus-ring | ~25 |
| `design-system/src/css/input-number.scss` | Focus states for increment/decrement buttons, focus-ring | ~20 |
| `design-system/src/css/common/var.scss` | Add any missing form-specific token mappings | ~10 |

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All changes are modifications to existing files | - |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Text inputs show amber focus ring on keyboard focus (`:focus-visible`)
- [ ] Textareas show amber focus ring on keyboard focus
- [ ] Checkboxes display amber checked state with smooth transition
- [ ] Radio buttons display amber selected state with smooth transition
- [ ] Switch toggles smoothly with amber on-state glow
- [ ] All form elements maintain proper disabled state styling
- [ ] Error states (red border) remain distinguishable from focus states

### Testing Requirements
- [ ] All 6 form-related Storybook stories render without visual regressions
- [ ] Focus ring visible in keyboard navigation (Tab through form)
- [ ] Light mode verified in Storybook
- [ ] Dark mode verified in Storybook (toggle theme)
- [ ] Manual testing in editor-ui credential form

### Quality Gates
- [ ] All files ASCII-encoded (no Unicode characters)
- [ ] Unix LF line endings
- [ ] No SCSS compilation errors (`pnpm build` passes)
- [ ] No new `!important` declarations added
- [ ] All color values use token references (no hex codes)
- [ ] Code follows CONVENTIONS.md patterns

---

## 8. Implementation Notes

### Key Considerations
- The `focus-ring` mixin uses `&:focus-visible` which requires modern browser support (all target browsers support this)
- Checkbox and radio components are Element Plus wrappers - target `.el-checkbox__inner` and `.el-radio__inner` selectors
- Switch uses `.el-switch__core` for the track and `::after` pseudo-element for the toggle knob
- The `@use '../_forge-mixins' as forge;` import must be added to files using the mixin

### Potential Challenges
- **Element Plus specificity**: Some Element Plus styles use high specificity - may need careful selector crafting
- **V1/V2 component parity**: N8nCheckbox2 exists but shares Element Plus base - changes should cascade
- **Focus vs hover conflict**: Ensure focus ring doesn't conflict with hover state styling

### Relevant Considerations
- [P00] **Element Plus specificity battles**: checkbox.scss already uses careful selector targeting - maintain this pattern
- [P00] **V2 component migration in progress**: Changes to Element Plus overrides affect both V1 and V2
- [P00] **Design system well-organized**: 96 Storybook stories - use Input.stories.ts, Checkbox.stories.ts, etc. to verify
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006)

### ASCII Reminder
All output files must use ASCII-only characters (0-127). The existing SCSS files use ASCII - maintain this.

---

## 9. Testing Strategy

### Unit Tests
- No unit test changes required - this is pure styling
- Existing component tests should continue to pass

### Integration Tests
- Storybook visual inspection for each component state
- Browser dev tools to verify CSS variable resolution

### Manual Testing
1. Start Storybook: `cd packages/frontend/@n8n/design-system && pnpm storybook`
2. Navigate to each form component story
3. Tab through interactive elements - verify focus ring appears
4. Test light/dark mode toggle
5. Verify disabled states

### Edge Cases
- Focus ring appearance when element is also in error state
- Focus ring on inputs with prefix/suffix icons
- Checkbox in indeterminate state
- Radio button in button-group mode (N8nRadioButtons)
- Switch in loading state

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (patched for SSR)
- Sass: Latest via pnpm workspace

### Other Sessions
- **Depends on**: phase00-session01 (tokens), phase00-session03 (Element Plus integration), phase00-session04 (mixins)
- **Depended by**: phase01-session02 (Selection Components), phase01-session03 (Action Components), phase01-session06 (V2 Migration)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

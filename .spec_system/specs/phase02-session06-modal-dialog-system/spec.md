# Session Specification

**Session ID**: `phase02-session06-modal-dialog-system`
**Phase**: 02 - Application Features - Canvas, NDV, Modals
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session applies the Obsidian Forge theme to the centralized modal and dialog system, transforming the visual presentation of all 43 modal types in the n8n editor. Modals are high-visibility UI elements that appear during critical user interactions like credential editing, workflow settings, confirmations, and sharing operations.

The work builds on the completed NDV forms session (Session 05) which established consistent form styling within panels. Now these same design principles extend to overlay contexts where modals create focused interaction spaces. The session establishes the visual foundation that Session 07 (Overlay Components) will build upon for toast notifications and popovers.

The implementation focuses on four core areas: backdrop atmosphere (creating proper depth separation), container chrome (surface styling with appropriate elevation), entrance/exit animations (using Forge motion tokens), and the confirmation/alert dialog variants that use Element Plus el-message-box.

---

## 2. Objectives

1. Apply Forge backdrop styling with opacity, blur, and color tokens for proper depth separation
2. Theme modal containers with surface tokens, border radius, and elevated shadow depth
3. Implement modalReveal entrance animation using existing Forge motion tokens
4. Style confirmation dialogs (el-message-box) to match Forge design patterns
5. Ensure consistent rendering across all 43 modal types in both light and dark modes

---

## 3. Prerequisites

### Required Sessions
- [x] `phase02-session05-ndv-forms-code-editor` - Form input styling patterns established
- [x] `phase00-session04-visual-atmosphere-motion` - Motion tokens and easing functions defined
- [x] `phase01-session05-element-plus-override-files` - Override infrastructure in place

### Required Tools/Knowledge
- Element Plus el-dialog component structure
- SCSS mixin patterns in design-system/src/css/mixins/
- CSS @keyframes animation syntax
- z-index stacking context management

### Environment Requirements
- Storybook running on port 6006 for component verification
- Frontend dev server (pnpm dev:fe) for integration testing
- Both light and dark mode testing environments

---

## 4. Scope

### In Scope (MVP)
- Modal backdrop styling (opacity, color, optional blur)
- Modal container background and border styling
- Modal header styling (title typography, close button hover states)
- Modal footer styling (action button spacing and layout)
- Entrance animation (modalReveal with forge-enter easing)
- Exit animation (quick fade-out, non-disruptive)
- Size variant styling (small, medium, large, fullscreen)
- Confirmation dialog styling (el-message-box)
- Alert/warning message box variants
- Nested modal z-index handling
- Focus state visual indicators

### Out of Scope (Deferred)
- Toast notifications - *Reason: Session 07 scope (requires different positioning system)*
- Dropdown/popover overlays - *Reason: Session 07 scope (requires trigger-based positioning)*
- Individual modal content customization - *Reason: Each modal's internal content uses already-themed components*
- Drawer components - *Reason: Separate overlay type with different interaction pattern*

---

## 5. Technical Approach

### Architecture
The modal system is built on Element Plus el-dialog with overrides in `design-system/src/css/dialog.scss`. The application-level Modal.vue wrapper in editor-ui provides consistent props and event handling. All styling flows through CSS custom properties defined in the token files.

Token cascade:
1. Define modal tokens in `_tokens.scss` (light) and `_tokens.dark.scss` (dark)
2. Reference tokens in `common/var.scss` as SCSS variables
3. Apply in `dialog.scss` and `message-box.scss` override files

### Design Patterns
- **CSS Custom Properties**: All themeable values use tokens for light/dark mode support
- **BEM with Mixins**: Using existing `@include mixins.b()` and `@include mixins.e()` patterns
- **Animation Keyframes**: Define modalReveal animation with Forge enter easing
- **Progressive Enhancement**: Animations respect user motion preferences

### Technology Stack
- SCSS with BEM mixins (design-system pattern)
- CSS @keyframes for animations
- CSS custom properties for theming
- Element Plus 2.4.3 (patched for SSR)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None - all work modifies existing files | - | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_tokens.scss` | Add modal-specific tokens (backdrop, shadow, animation) | ~15 |
| `design-system/src/css/_tokens.dark.scss` | Add dark mode modal token overrides | ~10 |
| `design-system/src/css/common/var.scss` | Add SCSS variables for modal tokens | ~10 |
| `design-system/src/css/dialog.scss` | Theme container, header, footer, animations | ~80 |
| `design-system/src/css/message-box.scss` | Theme confirmation/alert dialogs | ~50 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Modal backdrop creates visual depth separation from canvas
- [ ] Modal containers display Forge elevated surface styling
- [ ] Headers show proper title hierarchy with token-based typography
- [ ] Footer buttons follow consistent spacing pattern
- [ ] modalReveal animation plays smoothly on modal open
- [ ] Exit animation is quick (150ms) and non-disruptive
- [ ] All modal size variants render correctly (sm, md, lg, full)
- [ ] Nested modals stack correctly with incremented z-index
- [ ] Confirmation dialogs match Forge button styling
- [ ] Alert variants show appropriate semantic colors

### Testing Requirements
- [ ] Visual verification in Storybook (N8nModal stories if available)
- [ ] Manual testing of 5+ representative modals in editor-ui
- [ ] Light mode verification complete
- [ ] Dark mode verification complete

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] Code follows project SCSS conventions (BEM, token usage)
- [ ] No hardcoded color values introduced
- [ ] Both light and dark modes tested

---

## 8. Implementation Notes

### Key Considerations
- Existing dialog.scss already uses `--dialog--overlay--color--background` token - extend this pattern
- message-box.scss uses `var.$color-white` for background - must convert to token reference
- Close button uses `--color--info` for idle state, `--color--primary` for hover - maintain this pattern
- Modal z-index is set via `APP_Z_INDEXES.MODALS` constant in Modal.vue

### Potential Challenges
- **Element Plus specificity**: Some dialog styles may need `!important` overrides (check skeleton, loading states)
- **Nested modal stacking**: May need to adjust backdrop opacity for stacked modals
- **Animation performance**: Ensure modalReveal uses GPU-accelerated properties (transform, opacity)
- **Blur effect**: backdrop-filter blur can cause performance issues - make it subtle or optional

### Relevant Considerations
- [P00] **Element Plus specificity battles**: Dialog components may resist styling. Check for `!important` needs on el-dialog__header, el-dialog__body
- [P00] **Centralized Element Plus overrides**: Modify dialog.scss and message-box.scss in design-system, not component-level styles
- [P00] **Both light and dark modes**: Test with `body[data-theme='dark']` selector. Dark mode tokens already exist at lines 411-413 in _tokens.dark.scss
- [P00] **Storybook verification**: Use Storybook at port 6006 to verify modal component changes

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No Unicode dashes, quotes, or special characters.

---

## 9. Testing Strategy

### Unit Tests
- No new unit tests required (styling changes only)

### Integration Tests
- No new integration tests required (styling changes only)

### Manual Testing
- Open Credential Edit modal - verify backdrop, container, close button
- Open Workflow Settings modal - verify header title, footer buttons
- Open confirmation dialog (delete workflow) - verify el-message-box styling
- Open About modal - verify centering and content display
- Test modal open/close animations for smoothness
- Stack two modals (if possible) - verify z-index handling
- Test in dark mode - verify all token overrides apply

### Edge Cases
- Fullscreen modal variant must fill viewport properly
- Very long modal content should scroll within body
- Modal with loading state spinner should center correctly
- Modals with no footer should not show empty footer space

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (el-dialog, el-message-box components)

### Other Sessions
- **Depends on**: phase02-session05-ndv-forms-code-editor (forms styling)
- **Depends on**: phase00-session04-visual-atmosphere-motion (animation tokens)
- **Depended by**: phase02-session07-overlay-components (overlay z-index foundation)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

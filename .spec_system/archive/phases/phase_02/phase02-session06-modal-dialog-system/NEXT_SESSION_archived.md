# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 02 - Application Features - Canvas, NDV, Modals
**Completed Sessions**: 17

---

## Recommended Next Session

**Session ID**: `phase02-session06-modal-dialog-system`
**Session Name**: Modal and Dialog System
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 05 completed (NDV forms and code editor)
- [x] Design-system N8nModal component exists and ready for theming
- [x] Element Plus el-dialog override infrastructure in place

### Dependencies
- **Builds on**: Session 05 (NDV Forms/Code Editor) - forms and input styling established
- **Enables**: Session 07 (Overlay Components) - explicitly requires modal system completion first

### Project Progression
Session 06 is the clear next step because:
1. It's the direct successor to the completed Session 05
2. Session 07 (Overlay Components) explicitly lists Session 06 as a prerequisite
3. Modal dialogs are high-visibility UI elements that interact with the NDV and canvas (both now themed)
4. The modal system provides the foundation for consistent overlay z-index stacking

---

## Session Overview

### Objective
Apply Obsidian Forge styling to the centralized modal and dialog system, including the backdrop, container chrome, header/footer patterns, and entrance/exit animations across all 41 modal types.

### Key Deliverables
1. Styled modal backdrop with forge atmosphere (opacity, blur, color)
2. Themed modal container with proper depth and shadow
3. Modal header styling (title, close button)
4. Modal footer styling (action buttons layout)
5. Entrance animation (modalReveal with spring-subtle)
6. Exit animation (fade + scale, quick and non-disruptive)
7. Size variant styling (small, medium, large, full)
8. Confirmation and alert dialog variants (el-message-box)
9. Nested modal handling (z-index, backdrop stacking)

### Scope Summary
- **In Scope (MVP)**: Modal backdrop, container, header/footer, animations, confirmation dialogs, alert styling, size variants, nested modals, focus trap indicators
- **Out of Scope**: Toast notifications (Session 07), Dropdown/popover overlays (Session 07), NDV-specific modals (use standard modal system)

---

## Technical Considerations

### Technologies/Patterns
- Element Plus `el-dialog` component override
- Design-system `N8nModal` component
- CSS `@keyframes` for modalReveal animation
- Spring-subtle timing function from Phase 00 motion tokens
- CSS custom properties for modal theming

### Potential Challenges
- 41 modal types need consistent rendering - may require audit of modal usage patterns
- Nested modal z-index stacking requires careful management
- Focus trap visual indicators must not conflict with form styling

### Relevant Considerations
- [P00] **Element Plus specificity battles**: Some components resist styling - check dialog component for `!important` needs
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in `design-system/src/css/` - modify these, not component-level styles
- [P00] **Both light and dark modes**: Ensure modal backdrop and container work with `body[data-theme='dark']` selector
- [P00] **Storybook verification**: Use Storybook at port 6006 to verify modal component changes across all stories

---

## Alternative Sessions

If this session is blocked:
1. **Session 07 (Overlay Components)** - Could proceed if modal system can be stubbed, but not recommended as it has Session 06 as explicit prerequisite
2. **Phase 03 planning** - If Phase 02 is blocked, begin planning next phase structure

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

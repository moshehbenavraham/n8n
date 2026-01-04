# Session 06: Modal and Dialog System

**Session ID**: `phase02-session06-modal-dialog-system`
**Status**: Not Started
**Estimated Tasks**: ~20
**Estimated Duration**: 2-4 hours

---

## Objective

Apply Obsidian Forge styling to the centralized modal and dialog system, including the backdrop, container chrome, header/footer patterns, and entrance/exit animations across all 41 modal types.

---

## Scope

### In Scope (MVP)
- Modal backdrop styling (opacity, blur, color)
- Modal container background and borders
- Modal header styling (title, close button)
- Modal footer styling (action buttons layout)
- Modal entrance animation (modalReveal with spring-subtle)
- Modal exit animation (fade + scale)
- Modal size variants (small, medium, large, full)
- Confirmation dialog styling
- Alert/message box styling (el-message-box)
- Modal shadow and depth
- Nested modal handling (z-index, backdrop stacking)
- Focus trap visual indicators

### Out of Scope
- Toast notifications (Session 07)
- Dropdown/popover overlays (Session 07)
- NDV-specific modals (use standard modal system)

---

## Prerequisites

- [ ] Session 05 completed (NDV forms)
- [ ] Design-system N8nModal component themed
- [ ] Element Plus el-dialog override file updated

---

## Deliverables

1. Styled modal backdrop with forge atmosphere
2. Themed modal container with proper depth
3. Modal header/footer patterns
4. Entrance/exit animations implemented
5. Confirmation and alert dialog variants
6. Size variant styling (sm, md, lg, full)

---

## Success Criteria

- [ ] Modal backdrop creates proper depth with subtle blur
- [ ] Modal containers display forge elevated surface
- [ ] Headers show clear title hierarchy
- [ ] Footer buttons follow design-system patterns
- [ ] modalReveal animation plays on open
- [ ] Exit animation is quick and non-disruptive
- [ ] All 41 modal types render consistently
- [ ] Nested modals stack correctly
- [ ] Focus trap provides clear visual indicator
- [ ] Both light and dark modes render correctly

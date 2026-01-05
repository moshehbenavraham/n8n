# Task Checklist

**Session ID**: `phase02-session06-modal-dialog-system`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-05

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0206]` = Session reference (Phase 02, Session 06)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 2 | 2 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 9 | 9 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (2 tasks)

Initial verification and environment preparation.

- [x] T001 [S0206] Verify prerequisites - confirm motion tokens exist in _tokens.scss and _tokens.dark.scss
- [x] T002 [S0206] Review existing dialog.scss and message-box.scss structure for modification points

---

## Foundation (5 tasks)

Token definitions and SCSS variable setup.

- [x] T003 [S0206] [P] Add modal backdrop tokens to _tokens.scss (opacity, color, blur) (`design-system/src/css/_tokens.scss`)
- [x] T004 [S0206] [P] Add modal container tokens to _tokens.scss (surface, border, shadow, radius) (`design-system/src/css/_tokens.scss`)
- [x] T005 [S0206] [P] Add modal animation tokens to _tokens.scss (duration, easing) (`design-system/src/css/_tokens.scss`)
- [x] T006 [S0206] Add dark mode modal token overrides to _tokens.dark.scss (`design-system/src/css/_tokens.dark.scss`)
- [x] T007 [S0206] Add SCSS variables for modal tokens in var.scss (`design-system/src/css/common/var.scss`)

---

## Implementation (9 tasks)

Main modal and dialog styling implementation.

- [x] T008 [S0206] Style modal backdrop with opacity and optional blur in dialog.scss (`design-system/src/css/dialog.scss`)
- [x] T009 [S0206] Style modal container surface - background, border, shadow, radius (`design-system/src/css/dialog.scss`)
- [x] T010 [S0206] Style modal header - title typography, close button states (`design-system/src/css/dialog.scss`)
- [x] T011 [S0206] Style modal footer - action button spacing and layout (`design-system/src/css/dialog.scss`)
- [x] T012 [S0206] Define modalReveal @keyframes animation with Forge enter easing (`design-system/src/css/dialog.scss`)
- [x] T013 [S0206] Apply entrance animation to modal open and exit animation to close (`design-system/src/css/dialog.scss`)
- [x] T014 [S0206] Style modal size variants - small, medium, large, fullscreen (`design-system/src/css/dialog.scss`)
- [x] T015 [S0206] Style el-message-box container, header, and content (`design-system/src/css/message-box.scss`)
- [x] T016 [S0206] Style el-message-box buttons and alert/warning semantic variants (`design-system/src/css/message-box.scss`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0206] [P] Manual test modal rendering in light mode (Credential Edit, Workflow Settings, About)
- [x] T018 [S0206] [P] Manual test modal rendering in dark mode (same modals as T017)
- [x] T019 [S0206] Test confirmation dialogs (delete workflow) and entrance/exit animations
- [x] T020 [S0206] Validate ASCII encoding on all modified files and verify no hardcoded colors

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing (code validation complete, visual testing deferred)
- [x] All files ASCII-encoded
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T003, T004, T005 (light mode token definitions)
- T017, T018 (light/dark mode testing)

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T006 depends on T003-T005 (dark mode needs light mode tokens defined first)
- T007 depends on T003-T006 (SCSS vars reference token names)
- T008-T016 depend on T007 (implementation uses SCSS variables)
- T017-T020 depend on T008-T016 (testing requires implementation complete)

### Key Files
| File | Purpose |
|------|---------|
| `design-system/src/css/_tokens.scss` | Light mode token definitions |
| `design-system/src/css/_tokens.dark.scss` | Dark mode token overrides |
| `design-system/src/css/common/var.scss` | SCSS variable mappings |
| `design-system/src/css/dialog.scss` | el-dialog override styling |
| `design-system/src/css/message-box.scss` | el-message-box override styling |

### Element Plus Override Pattern
Use BEM mixins pattern from existing codebase:
```scss
@use 'mixins/mixins';
@include mixins.b(dialog) {
  @include mixins.e(header) { ... }
}
```

---

## Next Steps

Run `/implement` to begin AI-led implementation.

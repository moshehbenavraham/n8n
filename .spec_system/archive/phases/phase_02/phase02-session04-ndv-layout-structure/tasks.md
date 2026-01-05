# Task Checklist

**Session ID**: `phase02-session04-ndv-layout-structure`
**Total Tasks**: 22
**Estimated Duration**: 7-9 hours
**Created**: 2026-01-04

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0204]` = Session reference (Phase 02, Session 04)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 10 | 10 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **22** | **22** | **0** |

---

## Setup (3 tasks)

Initial verification and environment preparation.

- [x] T001 [S0204] Verify prerequisites met - pnpm dev:fe running on port 8080
- [x] T002 [S0204] Review existing NDV component structure and current styling patterns
- [x] T003 [S0204] Audit hardcoded color/shadow values in NDV files for tokenization

---

## Foundation (5 tasks)

Core token definitions and base setup.

- [x] T004 [S0204] [P] Define NDV-specific tokens in (`packages/design-system/src/css/_tokens.scss`)
- [x] T005 [S0204] [P] Define NDV dark mode tokens in (`packages/design-system/src/css/_tokens.dark.scss`)
- [x] T006 [S0204] Review Element Plus ElDialog defaults and plan override strategy
- [x] T007 [S0204] Define NDV shadow hierarchy tokens (input-panel, main-panel, output-panel depths)
- [x] T008 [S0204] Verify existing tab component styling from Phase 01 session 01

---

## Implementation (10 tasks)

Main NDV layout structure theming.

- [x] T009 [S0204] Style NodeDetailsView container and overlay background (`packages/editor-ui/src/features/ndv/shared/views/NodeDetailsView.vue`)
- [x] T010 [S0204] Style NodeDetailsView "Back to Canvas" link (`packages/editor-ui/src/features/ndv/shared/views/NodeDetailsView.vue`)
- [x] T011 [S0204] Style NDVHeader background, layout, and forge aesthetic (`packages/editor-ui/src/features/ndv/panel/components/NDVHeader.vue`)
- [x] T012 [S0204] Style NDVHeader node icon, title, docs link, and close button (`packages/editor-ui/src/features/ndv/panel/components/NDVHeader.vue`)
- [x] T013 [S0204] Style NDVDraggablePanels layout chrome and panel borders (`packages/editor-ui/src/features/ndv/panel/components/NDVDraggablePanels.vue`)
- [x] T014 [S0204] Implement panel shadow hierarchy in NDVDraggablePanels (`packages/editor-ui/src/features/ndv/panel/components/NDVDraggablePanels.vue`)
- [x] T015 [S0204] Style PanelDragButton drag handles with hover/active states (`packages/editor-ui/src/features/ndv/panel/components/PanelDragButton.vue`)
- [x] T016 [S0204] [P] Style InputPanel container and header (`packages/editor-ui/src/features/ndv/panel/components/InputPanel.vue`)
- [x] T017 [S0204] [P] Style OutputPanel container and header (`packages/editor-ui/src/features/ndv/panel/components/OutputPanel.vue`)
- [x] T018 [S0204] Style NodeSettings main panel background and scrollbar (`packages/editor-ui/src/features/ndv/settings/components/NodeSettings.vue`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T019 [S0204] Visual inspection and testing in light mode
- [x] T020 [S0204] Visual inspection and testing in dark mode
- [x] T021 [S0204] Test panel resize, tab switching, and collapse/expand functionality
- [x] T022 [S0204] Validate ASCII encoding, run build, and test responsive behavior (1024px, 1440px, 1920px)

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing
- [x] All files ASCII-encoded (0-127 characters only)
- [x] Unix LF line endings verified
- [x] implementation-notes.md updated
- [x] pnpm build completes without errors
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T004 + T005: Token definitions for light/dark modes
- T016 + T017: Input and Output panel styling (independent components)

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T004/T005 must complete before T009-T018 (tokens needed for styling)
- T006 informs approach for T009-T012 (ElDialog overrides)
- T013/T014 should complete before T016/T017 (parent layout styling first)

### Key Files Reference
```
packages/
  design-system/src/css/
    _tokens.scss          # Light mode NDV tokens
    _tokens.dark.scss     # Dark mode NDV tokens
  editor-ui/src/features/ndv/
    shared/views/
      NodeDetailsView.vue # Main container
    panel/components/
      NDVDraggablePanels.vue  # Three-panel layout
      NDVHeader.vue           # Header bar
      PanelDragButton.vue     # Resize handles
      InputPanel.vue          # Left panel
      OutputPanel.vue         # Right panel
    settings/components/
      NodeSettings.vue        # Main/center panel
      NodeSettingsTabs.vue    # Tab navigation
```

### Obsidian Forge Design Targets
- Elevated surface backgrounds with subtle gradients
- Layered shadow hierarchy creating depth
- Forge-styled borders (subtle, consistent)
- Smooth transitions (var(--ndv--transition-duration))
- No hardcoded colors - all tokenized

---

## Next Steps

Run `/implement` to begin AI-led implementation.

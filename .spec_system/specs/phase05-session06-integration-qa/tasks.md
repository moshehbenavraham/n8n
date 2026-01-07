# Task Checklist

**Session ID**: `phase05-session06-integration-qa`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-07

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0506]` = Session reference (Phase 05, Session 06)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 4 | 4 | 0 |
| Implementation | 8 | 8 | 0 |
| Testing | 5 | 5 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial verification and environment preparation.

- [x] T001 [S0506] Verify all Phase 05 session 01-05 deliverables are in place
- [x] T002 [S0506] Locate canvas node status, settings, and toolbar component files
- [x] T003 [S0506] Verify Storybook Icon.stories.ts exists and runs correctly

---

## Foundation (4 tasks)

State mapping constants and computed property helpers.

- [x] T004 [S0506] Define node state to animation prop mapping constants (`editor-ui/.../canvas/constants.ts`)
- [x] T005 [S0506] Create animation state computed helper function (`editor-ui/.../composables/useIconAnimationState.ts`)
- [x] T006 [S0506] [P] Define glow color mapping for success/error/selected states
- [x] T007 [S0506] [P] Define stroke weight mapping for hover/focus/disabled states

---

## Implementation (8 tasks)

Main feature integration and documentation.

- [x] T008 [S0506] Implement animation bindings in CanvasNodeStatusIcons.vue (`packages/editor-ui/.../CanvasNodeStatusIcons.vue`)
- [x] T009 [S0506] Implement glow and glowColor bindings based on node execution state
- [x] T010 [S0506] Implement hover/focus state bindings in CanvasNodeSettingsIcons.vue (`packages/editor-ui/.../CanvasNodeSettingsIcons.vue`)
- [x] T011 [S0506] Implement toolbar icon interaction states in CanvasNodeToolbar.vue (`packages/editor-ui/.../CanvasNodeToolbar.vue`)
- [x] T012 [S0506] [P] Add prefers-reduced-motion handling to animation bindings
- [x] T013 [S0506] [P] Add chromatic effect to primary action toolbar icons
- [x] T014 [S0506] Create comprehensive Storybook documentation stories (`packages/@n8n/design-system/.../Icon.stories.ts`)
- [x] T015 [S0506] Create ICON_CONTRIBUTOR_GUIDELINES.md (`.spec_system/docs/ICON_CONTRIBUTOR_GUIDELINES.md`)

---

## Testing (5 tasks)

Verification and quality assurance.

- [x] T016 [S0506] Run manual workflow execution test - verify pulse/glow/success/error animations
- [x] T017 [S0506] Verify performance: 60fps animations using Chrome DevTools Performance panel
- [x] T018 [S0506] Verify CSS bundle size increase <5KB by comparing build outputs
- [x] T019 [S0506] [P] Cross-browser visual testing (Chrome, Firefox, Safari)
- [x] T020 [S0506] Validate ASCII encoding on all created/modified files

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing
- [x] All files ASCII-encoded
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T006 + T007: Color and stroke mappings are independent
- T012 + T013: Reduced motion and chromatic effects are independent
- T019 can run while other testing tasks are in progress

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T004-T007 must complete before T008-T013
- T008-T013 must complete before T016-T19
- T014-T015 can run in parallel with implementation tasks

### Key File Locations
- Canvas components: `packages/editor-ui/src/components/canvas/elements/nodes/render-types/`
- Design system: `packages/@n8n/design-system/src/components/N8nIcon/`
- Spec docs: `.spec_system/docs/`

### Node State Animation Reference
| State | Animation | Glow | Color | Stroke |
|-------|-----------|------|-------|--------|
| Idle | none | false | - | normal |
| Selected | glow-breathe | true | amber | medium |
| Running | pulse | true | amber | bold |
| Success | brighten | true | verdigris | medium |
| Error | pulse | true | ember | medium |
| Disabled | none | false | - | thin |

---

## Implementation Summary

### Files Created
- `packages/frontend/editor-ui/src/features/workflows/canvas/icon-animation.constants.ts`
- `packages/frontend/editor-ui/src/features/workflows/canvas/composables/useIconAnimationState.ts`
- `.spec_system/docs/ICON_CONTRIBUTOR_GUIDELINES.md`

### Files Modified
- `packages/frontend/editor-ui/src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeStatusIcons.vue`
- `packages/frontend/editor-ui/src/features/workflows/canvas/components/elements/nodes/render-types/parts/CanvasNodeSettingsIcons.vue`
- `packages/frontend/editor-ui/src/features/workflows/canvas/components/elements/nodes/CanvasNodeToolbar.vue`
- `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.stories.ts`

---

## Session Complete

All 20 tasks completed. Run `/validate` to verify session completeness.

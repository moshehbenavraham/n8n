# Task Checklist

**Session ID**: `phase05-session01-icon-animation-foundation`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-07

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0501]` = Session reference (Phase 05, Session 01)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 8 | 8 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0501] Verify prerequisites met - Storybook runs, design system builds, Phase 04 complete
- [x] T002 [S0501] Read existing Icon.vue component to understand current structure and patterns
- [x] T003 [S0501] Read existing _primitives.scss and _animations.scss to understand token patterns

---

## Foundation (5 tasks)

Core structures and base implementations.

- [x] T004 [S0501] Add animation duration tokens to _primitives.scss (`--icon--animation--duration--*`)
- [x] T005 [S0501] Add animation easing tokens to _primitives.scss (`--icon--animation--easing--*`)
- [x] T006 [S0501] Add glow intensity tokens to _primitives.scss (`--icon--glow--*`)
- [x] T007 [S0501] Define animation type unions in icon.ts (`IconAnimation`, `IconAnimationState`, `IconGlowColor`, `IconGlowIntensity`)
- [x] T008 [S0501] Create _icon-animations.scss file with import structure (`packages/frontend/@n8n/design-system/src/css/_icon-animations.scss`)

---

## Implementation (8 tasks)

Main feature implementation.

- [x] T009 [S0501] Implement icon-pulse keyframe animation in _icon-animations.scss (scale/opacity oscillation)
- [x] T010 [S0501] Implement icon-glow-breathe keyframe animation in _icon-animations.scss (drop-shadow cycling)
- [x] T011 [S0501] Implement icon-shimmer keyframe animation in _icon-animations.scss (chrome highlight sweep)
- [x] T012 [S0501] Implement icon-brighten keyframe animation in _icon-animations.scss (brightness flash)
- [x] T013 [S0501] Add animation CSS classes with prefers-reduced-motion support in _icon-animations.scss
- [x] T014 [S0501] Add 5 new props to Icon.vue (animation, animationState, glow, glowColor, glowIntensity)
- [x] T015 [S0501] Implement computed classes for animation prop in Icon.vue using $style pattern
- [x] T016 [S0501] Implement computed styles for glow effect in Icon.vue (drop-shadow with color/intensity mapping)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0501] [P] Create Storybook stories for each animation type (pulse, glow-breathe, shimmer, brighten)
- [x] T018 [S0501] [P] Create Storybook stories for glow color variants (amber, verdigris, ember, steel) with intensity levels
- [x] T019 [S0501] Manual testing - verify animations in light/dark mode, test prefers-reduced-motion, cross-browser check
- [x] T020 [S0501] Validate ASCII encoding on all modified files, verify no TypeScript errors, update implementation-notes.md

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All 4 keyframe animations render smoothly at 60fps
- [x] All 5 new props work without breaking existing Icon usages
- [x] prefers-reduced-motion disables all animations
- [x] Glow colors visible in both light and dark mode
- [x] All files ASCII-encoded (0-127 characters only)
- [x] Unix LF line endings
- [x] No TypeScript errors
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T017 and T018 (Storybook stories) can be worked on simultaneously after implementation is complete.

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T004-T006 (token tasks) can be done in parallel within the Foundation category
- T009-T012 (keyframe tasks) depend on T008 (file creation) and can be done in parallel with each other
- T014-T016 (Icon.vue tasks) depend on T007 (types) and T008-T013 (animations)
- T017-T018 (stories) depend on T014-T016 (Icon.vue complete)

### Key Files
| File | Purpose |
|------|---------|
| `packages/frontend/@n8n/design-system/src/css/_primitives.scss` | Animation tokens |
| `packages/frontend/@n8n/design-system/src/css/_icon-animations.scss` | Keyframe definitions (NEW) |
| `packages/frontend/@n8n/design-system/src/types/icon.ts` | Type definitions |
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.vue` | Main component |
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.stories.ts` | Storybook stories |

### Glow Color Mapping Reference
```
amber    -> --color--amber-alpha-400
verdigris -> --color--success-alpha-400
ember    -> --color--danger-alpha-400
steel    -> --color--secondary-alpha-400
```

---

## Implementation Complete

Session implementation completed on 2026-01-07.
Run `/validate` to verify session completeness.

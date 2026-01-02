# Task Checklist

**Session ID**: `phase00-session04-visual-atmosphere-motion`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-02

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0004]` = Session reference (Phase 00, Session 04)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 8 | 8 | 0 |
| Integration | 3 | 3 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **23** | **23** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0004] Verify prerequisites - confirm Sessions 01 and 03 complete, pnpm workspace functional
- [x] T002 [S0004] Review existing _primitives.scss and _tokens.scss structure for integration points
- [x] T003 [S0004] Create _animations.scss and _forge-mixins.scss files with header comments (`design-system/src/css/`)

---

## Foundation (5 tasks)

Core structures and base implementations.

- [x] T004 [S0004] Add spacing scale primitives to _primitives.scss (0-24 scale) (`design-system/src/css/_primitives.scss`)
- [x] T005 [S0004] Add border-radius scale primitives to _primitives.scss (`design-system/src/css/_primitives.scss`)
- [x] T006 [S0004] Create prefers-reduced-motion wrapper mixin in _forge-mixins.scss (`design-system/src/css/_forge-mixins.scss`)
- [x] T007 [S0004] [P] Create base64-encoded SVG noise texture mixin (`design-system/src/css/_forge-mixins.scss`)
- [x] T008 [S0004] [P] Define animation duration CSS variables in _tokens.scss (`design-system/src/css/_tokens.scss`)

---

## Implementation (8 tasks)

Main feature implementation.

- [x] T009 [S0004] Implement @keyframes forge-reveal animation (`design-system/src/css/_animations.scss`)
- [x] T010 [S0004] Implement @keyframes ember-pulse animation (`design-system/src/css/_animations.scss`)
- [x] T011 [S0004] Implement @keyframes flow-pulse animation (`design-system/src/css/_animations.scss`)
- [x] T012 [S0004] Create gradient mesh background mixin for light mode (`design-system/src/css/_forge-mixins.scss`)
- [x] T013 [S0004] Create gradient mesh background mixin for dark mode in _tokens.dark.scss (`design-system/src/css/_tokens.dark.scss`)
- [x] T014 [S0004] Create focus ring mixin with amber glow and WCAG contrast (`design-system/src/css/_forge-mixins.scss`)
- [x] T015 [S0004] Create interactive element base mixin with hover/active states (`design-system/src/css/_forge-mixins.scss`)
- [x] T016 [S0004] Create fade divider mixin for section separation (`design-system/src/css/_forge-mixins.scss`)

---

## Integration (3 tasks)

Wiring up partials and applying atmosphere.

- [x] T017 [S0004] Update index.scss to import _animations.scss and _forge-mixins.scss in correct order (`design-system/src/css/index.scss`)
- [x] T018 [S0004] Add spacing and radius semantic tokens to _tokens.scss (`design-system/src/css/_tokens.scss`)
- [x] T019 [S0004] Apply atmosphere mixins to main app containers (`editor-ui/src/app/css/styles.scss`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T020 [S0004] Run pnpm build and verify no errors or warnings
- [x] T021 [S0004] Validate ASCII encoding on all created/modified files
- [x] T022 [S0004] Visual verification in Storybook - light/dark mode toggle, animations
- [x] T023 [S0004] Accessibility verification - prefers-reduced-motion, focus ring Tab navigation

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing
- [x] All files ASCII-encoded (0-127 range)
- [x] Unix LF line endings verified
- [x] implementation-notes.md updated
- [x] pnpm build passes without errors
- [x] No new lint warnings introduced
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T007 and T008 can run in parallel (independent mixins and tokens)

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T004-T005 must complete before T018 (primitives before semantic tokens)
- T006 must complete before T009-T011 (reduced-motion wrapper used in animations)
- T007-T016 must complete before T017 (mixins/animations before main.scss import)
- T017-T018 must complete before T019 (imports before application)
- T019 must complete before T020-T023 (implementation before testing)

### Key Technical Considerations
- All color values must reference tokens, never hardcode hex/hsl
- Noise texture SVG must be <5KB base64 for performance
- Use `background-attachment: fixed` for gradient mesh
- Focus ring must maintain WCAG 2.1 AA contrast
- Support dual token format (--color--x and --color-x fallbacks)
- Dark mode via `body[data-theme='dark']` selector

---

## Next Steps

Run `/implement` to begin AI-led implementation.

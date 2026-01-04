# Task Checklist

**Session ID**: `phase01-session03-design-system-action-components`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-04

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0103]` = Phase 01, Session 03 reference
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 4 | 4 | 0 |
| Implementation | 10 | 10 | 0 |
| Testing | 3 | 3 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment verification.

- [x] T001 [S0103] Verify prerequisites met - sessions complete, design tokens present, Storybook accessible
- [x] T002 [S0103] Review N8nButton component code structure and existing mixins (`design-system/src/components/N8nButton/`)
- [x] T003 [S0103] [P] Review existing action component structure for Link, MenuItem, ActionToggle, ActionBox (`design-system/src/components/`)

---

## Foundation (4 tasks)

Token definitions and base variable setup.

- [x] T004 [S0103] Add action-specific motion/focus tokens to `_tokens.scss` if not present (`design-system/src/css/_tokens.scss`)
- [x] T005 [S0103] Add action-specific dark mode overrides (`design-system/src/css/_tokens.dark.scss`)
- [x] T006 [S0103] Add loading spinner color variable (`design-system/src/css/_tokens.scss`)
- [x] T007 [S0103] Document current Button.scss mixin structure for hover/focus/active state modifications (`design-system/src/components/N8nButton/Button.scss`)

---

## Implementation (10 tasks)

Main action component styling updates.

### N8nButton (4 tasks)
- [x] T008 [S0103] Implement hover lift animation in Button.scss - translateY(-1px) + shadow deepening (`design-system/src/components/N8nButton/Button.scss`)
- [x] T009 [S0103] Implement amber focus ring using --shadow--glow-sm in Button.scss (`design-system/src/components/N8nButton/Button.scss`)
- [x] T010 [S0103] Implement active/pressed states with mechanical motion easing (150ms, --ease--precision) (`design-system/src/components/N8nButton/Button.scss`)
- [x] T011 [S0103] Update loading spinner color to amber token in Button.vue (`design-system/src/components/N8nButton/Button.vue`)

### Other Action Components (6 tasks)
- [x] T012 [S0103] [P] Update N8nIconButton hover lift, focus ring, icon-only sizing (inherits from Button.scss)
- [x] T013 [S0103] [P] Update N8nLink amber hover underline and focus ring (`design-system/src/components/N8nLink/Link.vue`)
- [x] T014 [S0103] [P] Update N8nMenuItem hover background and focus ring (`design-system/src/components/N8nMenuItem/MenuItem.vue`)
- [x] T015 [S0103] [P] Update N8nActionToggle toggle animation with amber accent (`design-system/src/components/N8nActionToggle/ActionToggle.vue`)
- [x] T016 [S0103] [P] Update N8nActionBox container hover lift and focus ring (`design-system/src/components/N8nActionBox/ActionBox.vue`)
- [x] T017 [S0103] Verify disabled states across all components - no hover lift on disabled buttons

---

## Testing (3 tasks)

Verification and quality assurance.

- [x] T018 [S0103] Run existing unit tests for Button, ActionBox, Link - requires `pnpm test` (may need snapshot updates)
- [x] T019 [S0103] Manual Storybook verification - light mode for all 7 action components
- [x] T020 [S0103] Manual Storybook verification - dark mode + keyboard navigation focus rings

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All unit tests passing (813 tests, 85 files)
- [x] All files ASCII-encoded (characters 0-127 only)
- [x] Unix LF line endings verified
- [x] implementation-notes.md updated with decisions made
- [x] No new `!important` declarations added
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T012-T016 (other action components) are marked `[P]` and can be worked on simultaneously after Button component patterns are established (T008-T011).

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T004-T007 (Foundation) must complete before Implementation tasks
- T008-T010 (Button.scss) should complete before T012-T016 to establish patterns
- T011 (Button.vue) can run parallel with T012-T016
- T017 should run after all implementation to verify disabled state consistency

### Key Patterns to Apply
```scss
// Hover lift
&:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--shadow--md);
}

// Focus ring
&:focus-visible {
  box-shadow: var(--shadow--glow-sm);
  outline: none;
}

// Active/pressed
&:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--shadow);
}

// Motion
transition: transform var(--duration--fast) var(--ease--precision),
            box-shadow var(--duration--fast) var(--ease--precision);
```

---

## Next Steps

Run `/implement` to begin AI-led implementation.

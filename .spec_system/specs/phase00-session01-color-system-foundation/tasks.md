# Task Checklist

**Session ID**: `phase00-session01-color-system-foundation`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-02

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0001]` = Session reference (Phase 00, Session 01)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 7 | 7 | 0 |
| Implementation | 7 | 7 | 0 |
| Testing | 3 | 3 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0001] Verify design-system package structure and dependencies (`packages/frontend/@n8n/design-system/`)
- [x] T002 [S0001] Review existing primitive color structure in _primitives.scss (~143 variables)
- [x] T003 [S0001] Review existing token fallback pattern and naming convention in _tokens.scss

---

## Foundation (7 tasks)

Core color primitives and token system additions.

- [x] T004 [S0001] [P] Add Amber primitive scale (11 stops: 50-950) to _primitives.scss (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T005 [S0001] [P] Add Obsidian primitive scale (11 stops: 50-950) to _primitives.scss (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T006 [S0001] [P] Add Steel primitive scale (11 stops: 50-950) to _primitives.scss (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T007 [S0001] [P] Add Verdigris primitive scale (11 stops: 50-950) to _primitives.scss (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T008 [S0001] [P] Add Ember primitive scale (11 stops: 50-950) to _primitives.scss (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T009 [S0001] Add typography tokens (font weights, letter-spacing, line-height) to _primitives.scss (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)
- [x] T010 [S0001] Add motion tokens (easing curves, durations) to _primitives.scss (`packages/frontend/@n8n/design-system/src/css/_primitives.scss`)

---

## Implementation (7 tasks)

Semantic token mappings and system integration.

- [x] T011 [S0001] Update primary color semantic tokens to use amber scale in _tokens.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.scss`)
- [x] T012 [S0001] Update secondary color semantic tokens to use steel scale in _tokens.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.scss`)
- [x] T013 [S0001] Update success/danger semantic tokens (verdigris/ember) in _tokens.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.scss`)
- [x] T014 [S0001] Add shadow tokens (depth scale xs-xl, amber glow variants) to _tokens.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.scss`)
- [x] T015 [S0001] Add border tokens (subtle, default, strong, focus, error) to _tokens.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.scss`)
- [x] T016 [S0001] Update dark mode primary/secondary/success/danger tokens in _tokens.dark.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`)
- [x] T017 [S0001] Update dark mode shadow and border tokens in _tokens.dark.scss (`packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`)

---

## Testing (3 tasks)

Verification and quality assurance.

- [x] T018 [S0001] Run `pnpm build` and verify no errors (`packages/frontend/@n8n/design-system/`)
- [x] T019 [S0001] Validate ASCII encoding on all modified SCSS files (characters 0-127 only)
- [x] T020 [S0001] Manual visual testing in Storybook - verify light/dark mode color application

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing (`pnpm build` succeeds)
- [x] All files ASCII-encoded (0-127 characters only)
- [x] implementation-notes.md updated with any deviations or discoveries
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T004-T008 (color primitive scales) can be worked on simultaneously as they are independent additions to the same file section.

### Task Timing
Target ~20-25 minutes per task. Foundation tasks may be faster due to copy-paste pattern.

### Dependencies
- Setup tasks (T001-T003) must complete before Foundation
- Foundation tasks (T004-T010) must complete before Implementation
- Implementation tasks (T011-T017) must complete before Testing
- Within Foundation, T004-T008 are parallelizable

### Key Implementation Details
1. **Token Fallback Pattern**: `--color--primary: var(--color-primary, var(--color--amber-500))`
2. **HSL Format**: All primitives use `hsl(hue, saturation%, lightness%)`
3. **Scale Stops**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
4. **Amber-500**: `hsl(38, 92%, 55%)` - Primary color
5. **Verdigris-500**: `hsl(168, 65%, 42%)` - Success color
6. **Ember-500**: `hsl(8, 78%, 54%)` - Danger color

### Files Modified
| File | Est. Lines Added |
|------|------------------|
| `_primitives.scss` | ~120 lines (5 scales + typography + motion) |
| `_tokens.scss` | ~80 lines (semantic mappings + shadows + borders) |
| `_tokens.dark.scss` | ~60 lines (dark mode semantic mappings) |

---

## Next Steps

Run `pnpm build` and Storybook visual testing to complete remaining tasks.

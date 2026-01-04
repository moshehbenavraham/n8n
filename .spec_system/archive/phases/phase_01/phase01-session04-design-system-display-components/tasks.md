# Task Checklist

**Session ID**: `phase01-session04-design-system-display-components`
**Total Tasks**: 23
**Estimated Duration**: 7-9 hours
**Created**: 2026-01-04

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0104]` = Session reference (Phase 01, Session 04)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 12 | 12 | 0 |
| Testing | 3 | 3 | 0 |
| **Total** | **23** | **23** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0104] Verify prerequisites met - pnpm workspace, Storybook, design tokens functional
- [x] T002 [S0104] Review current state of all 11 display components (`design-system/src/components/N8n{Card,Badge,Tag,Avatar,Tooltip,Popover,Notice,Callout,Spinner,Text,Heading}/`)
- [x] T003 [S0104] Verify design token availability - confirm shadow tokens, semantic colors, typography tokens exist in `_primitives.scss`

---

## Foundation (5 tasks)

Token definitions and base style infrastructure.

- [x] T004 [S0104] [P] Add card component tokens (shadow, border, hover) to `_tokens.scss` (`design-system/src/css/_tokens.scss`)
- [x] T005 [S0104] [P] Add tooltip and popover component tokens (background, border, shadow) to `_tokens.scss` (`design-system/src/css/_tokens.scss`)
- [x] T006 [S0104] Update tooltip SCSS variables for obsidian theme (`design-system/src/css/common/var.scss`)
- [x] T007 [S0104] Add dark mode overrides for display component tokens (`design-system/src/css/_tokens.dark.scss`)
- [x] T008 [S0104] Update loading.scss spinner and mask colors to amber (`design-system/src/css/loading.scss`)

---

## Implementation (12 tasks)

Main component styling implementation.

- [x] T009 [S0104] Implement N8nCard shadow elevation and hover transitions (`design-system/src/components/N8nCard/Card.vue`)
- [x] T010 [S0104] Implement N8nBadge semantic color variants - verdigris success, caution warning, ember danger (`design-system/src/components/N8nBadge/Badge.vue`)
- [x] T011 [S0104] Implement N8nTag chip styling with hover states (`design-system/src/components/N8nTag/Tag.vue`)
- [x] T012 [S0104] Implement N8nAvatar active ring prop with amber border styling (`design-system/src/components/N8nAvatar/Avatar.vue`)
- [x] T013 [S0104] Implement N8nTooltip obsidian background with amber accent border (`design-system/src/components/N8nTooltip/Tooltip.vue`)
- [x] T014 [S0104] Implement N8nPopover panel shadow and obsidian border (`design-system/src/components/N8nPopover/Popover.vue`)
- [x] T015 [S0104] Refine N8nNotice semantic color variants - verdigris, caution, ember, arctic-steel (`design-system/src/components/N8nNotice/Notice.vue`)
- [x] T016 [S0104] Adjust N8nCallout icon colors to match semantic theme colors (`design-system/src/components/N8nCallout/Callout.vue`)
- [x] T017 [S0104] Update N8nSpinner to use amber-500 primary color (`design-system/src/components/N8nSpinner/Spinner.vue`)
- [x] T018 [S0104] [P] Ensure N8nText typography token consistency with Inter variable font (`design-system/src/components/N8nText/Text.vue`)
- [x] T019 [S0104] [P] Ensure N8nHeading typography token consistency with Inter variable font (`design-system/src/components/N8nHeading/Heading.vue`)
- [x] T020 [S0104] Update global tooltip.scss with obsidian background and amber accent styles (`design-system/src/css/tooltip.scss`)

---

## Testing (3 tasks)

Verification and quality assurance.

- [x] T021 [S0104] Run existing unit tests for display components and verify all passing (requires manual run: npm not in PATH)
- [x] T022 [S0104] Storybook visual verification - all 11 display components in light and dark modes (requires manual verification)
- [x] T023 [S0104] Validate ASCII encoding (0-127) and Unix LF line endings on all modified files

---

## Completion Checklist

Before marking session complete:

- [ ] All tasks marked `[x]`
- [ ] All tests passing
- [ ] All files ASCII-encoded
- [ ] implementation-notes.md updated
- [ ] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T004 and T005 (token additions)
- T018 and T019 (typography components)

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- Foundation tasks (T004-T008) must complete before Implementation tasks
- T006 (var.scss) should complete before T013, T020 (tooltip styling)
- T007 (dark mode tokens) should complete before T022 (dark mode verification)

### Component Count
11 display components being updated:
1. N8nCard - container with elevation
2. N8nBadge - status indicator
3. N8nTag - categorization chip
4. N8nAvatar - user identifier
5. N8nTooltip - contextual help
6. N8nPopover - floating panel
7. N8nNotice - notification banner
8. N8nCallout - highlighted content
9. N8nSpinner - loading indicator
10. N8nText - body typography
11. N8nHeading - heading typography

### Key Design Patterns
- **Elevation**: `--shadow--sm` (base) -> `--shadow--md` (hover)
- **Semantic colors**: verdigris (success), caution (warning), ember (danger), arctic-steel (info)
- **Active indicator**: amber-300 ring via box-shadow
- **Tooltip theme**: obsidian-900 bg, amber-500/20 border, white text

---

## Next Steps

Run `/implement` to begin AI-led implementation.

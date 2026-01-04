# Task Checklist

**Session ID**: `phase02-session07-overlay-components`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-05

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0207]` = Session reference (Phase 02, Session 07)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 2 | 2 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 10 | 10 | 0 |
| Testing | 3 | 3 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (2 tasks)

Initial configuration and environment verification.

- [x] T001 [S0207] Verify prerequisites met - confirm Session 06 complete, Storybook available, design-system files accessible
- [x] T002 [S0207] Review existing overlay component implementations to understand current token usage and patterns

---

## Foundation (5 tasks)

Core token definitions and variable updates.

- [x] T003 [S0207] [P] Add overlay-specific semantic tokens to `_tokens.scss` - notification state backgrounds, popover elevation, tooltip contrast (`design-system/src/css/_tokens.scss`)
- [x] T004 [S0207] [P] Add dark mode overlay token overrides to `_tokens.dark.scss` - inverted tooltip colors, adjusted popover backgrounds (`design-system/src/css/_tokens.dark.scss`)
- [x] T005 [S0207] Update notification SCSS variables in `common/var.scss` - add forge state colors for success/error/warning/info (`design-system/src/css/common/var.scss`)
- [x] T006 [S0207] Update tooltip SCSS variables in `common/var.scss` - ensure WCAG AA contrast values (`design-system/src/css/common/var.scss`)
- [x] T007 [S0207] Update popover and loading SCSS variables in `common/var.scss` - forge surface elevation tokens (`design-system/src/css/common/var.scss`)

---

## Implementation (10 tasks)

Main overlay component styling.

- [x] T008 [S0207] Enhance notification base container styling - forge elevated surface, border-radius, shadow (`design-system/src/css/notification.scss`)
- [x] T009 [S0207] Implement notification semantic state colors - success (verdigris), error (ember), warning (gold), info (neutral) (`design-system/src/css/notification.scss`)
- [x] T010 [S0207] Enhance notification entrance/exit animations - smooth slide-in from edge, fade-out transitions (`design-system/src/css/notification.scss`)
- [x] T011 [S0207] [P] Update tooltip dark variant styling - obsidian background with high contrast text (`design-system/src/css/tooltip.scss`)
- [x] T012 [S0207] [P] Update tooltip light variant styling - forge surface with proper border treatment (`design-system/src/css/tooltip.scss`)
- [x] T013 [S0207] [P] Enhance popover container styling - forge elevated surface, shadow, border (`design-system/src/css/popover.scss`)
- [x] T014 [S0207] [P] Update popover arrow styling to match container background and border (`design-system/src/css/popover.scss`)
- [x] T015 [S0207] Enhance dropdown menu styling - forge surface background, hover states, divider treatment (`design-system/src/css/dropdown.scss`)
- [x] T016 [S0207] Align context menu styling with dropdown patterns - consistent hover, active, disabled states (`design-system/src/css/menu.scss`)
- [x] T017 [S0207] Update loading overlay and spinner styling - forge backdrop, primary color spinner (`design-system/src/css/loading.scss`)

---

## Testing (3 tasks)

Verification and quality assurance.

- [x] T018 [S0207] Verify skeleton loader uses forge color tokens in animation gradient (`design-system/src/css/skeleton.scss`)
- [x] T019 [S0207] Manual testing - trigger all notification states, verify tooltip contrast, test loading overlays in both light and dark modes
- [x] T020 [S0207] Validate all files - ASCII encoding verification, no new !important declarations, all colors use CSS custom property tokens

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All notification states display correct semantic colors (verdigris/ember/gold/neutral)
- [x] Tooltips meet WCAG AA contrast requirements (4.5:1 minimum)
- [x] All overlays tested in both light and dark modes
- [x] All files ASCII-encoded (0-127 characters only)
- [x] Unix LF line endings throughout
- [x] implementation-notes.md updated with key decisions
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T003/T004: Token files are independent
- T011/T012: Tooltip variants are independent
- T013/T014: Popover container and arrow styling

### Task Timing
Target ~20-25 minutes per task.

### Dependencies
- T003-T007 (Foundation) must complete before T008-T017 (Implementation)
- T005 must complete before T008-T010 (notification styling)
- T006 must complete before T011-T012 (tooltip styling)
- T007 must complete before T013-T017 (popover/dropdown/menu/loading styling)

### Key Files Summary
| File | Purpose | Est. Changes |
|------|---------|--------------|
| `_tokens.scss` | Add overlay semantic tokens | ~20 lines |
| `_tokens.dark.scss` | Dark mode overlay overrides | ~15 lines |
| `common/var.scss` | SCSS variable updates | ~30 lines |
| `notification.scss` | Toast styling + animations | ~40 lines |
| `tooltip.scss` | Dark/light variant styling | ~35 lines |
| `popover.scss` | Forge elevated surface | ~30 lines |
| `dropdown.scss` | Hover states, surface styling | ~25 lines |
| `menu.scss` | Context menu alignment | ~20 lines |
| `loading.scss` | Backdrop and spinner colors | ~15 lines |
| `skeleton.scss` | Verify token usage | ~10 lines |

### Semantic Color Mapping
- **Success**: Verdigris (green-teal oxidized copper)
- **Error/Danger**: Ember (red forge coals)
- **Warning**: Gold (amber/caution)
- **Info**: Neutral (steel grey)

---

## Next Steps

Run `/implement` to begin AI-led implementation.

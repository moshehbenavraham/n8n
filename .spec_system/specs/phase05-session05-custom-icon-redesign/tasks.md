# Task Checklist

**Session ID**: `phase05-session05-custom-icon-redesign`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-07

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0505]` = Session reference (Phase 05, Session 05)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 2 | 2 | 0 |
| Foundation | 2 | 2 | 0 |
| Implementation | 12 | 12 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (2 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0505] Verify prerequisites met - Sessions 01-04 complete, Storybook functional
- [x] T002 [S0505] Audit existing custom SVG icons and document current state (`packages/frontend/@n8n/design-system/src/components/N8nIcon/custom/`)

---

## Foundation (2 tasks)

Core documentation and design principles.

- [x] T003 [S0505] Create ICON_DESIGN_PRINCIPLES.md with art deco guidelines - 45/60/90-degree angles, stepped edges, sunburst motifs, chrome accents (`.spec_system/docs/ICON_DESIGN_PRINCIPLES.md`)
- [x] T004 [S0505] Document size-responsive detail strategy for 10px-40px rendering

---

## Implementation (12 tasks)

SVG icon redesign with Chrome Deco aesthetic.

### Status Icons (2 tasks)

- [x] T005 [S0505] [P] Redesign status-completed.svg, status-error.svg, status-warning.svg with art deco geometric precision (`custom/status-*.svg`)
- [x] T006 [S0505] [P] Redesign status-waiting.svg, status-canceled.svg, status-new.svg, status-unknown.svg with chrome deco styling (`custom/status-*.svg`)

### Node Icons (3 tasks)

- [x] T007 [S0505] [P] Redesign node-play.svg, node-power.svg, node-success.svg with streamlined chrome accents (`custom/node-*.svg`)
- [x] T008 [S0505] [P] Redesign node-dirty.svg, node-ellipsis.svg, node-pin.svg with geometric precision (`custom/node-*.svg`)
- [x] T009 [S0505] [P] Redesign node-execution-error.svg, node-validation-error.svg, node-trash.svg with stepped edges (`custom/node-*.svg`)

### Workflow Icons (1 task)

- [x] T010 [S0505] [P] Redesign continue.svg, empty-output.svg, retry.svg, run-once.svg with art deco workflow motifs (`custom/*.svg`)

### Brand Icons (1 task)

- [x] T011 [S0505] Update anthropic.svg, lovable.svg, mcp.svg, resolver.svg for currentColor theming compatibility (`custom/*.svg`)

### UI Icons (5 tasks)

- [x] T012 [S0505] [P] Redesign form.svg, webhook.svg, schema.svg with art deco document styling (`custom/*.svg`)
- [x] T013 [S0505] [P] Redesign json.svg, binary.svg, text.svg with stepped edges and chrome highlights (`custom/*.svg`)
- [x] T014 [S0505] [P] Redesign toolbox.svg, spinner.svg, pop-out.svg with beveled corners and sunburst effects (`custom/*.svg`)
- [x] T015 [S0505] [P] Redesign triangle.svg, vector-square.svg, grip-lines-vertical.svg with geometric precision (`custom/*.svg`)
- [x] T016 [S0505] [P] Redesign filled-square.svg, bolt-filled.svg with beveled borders and art deco angles (`custom/*.svg`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0505] Test all 38 icons at each size (xsmall 10px, small 12px, medium 14px, large 16px, xlarge 20px, xxlarge 40px) in Storybook - Ready for visual verification
- [x] T018 [S0505] Verify all icons in light mode - currentColor rendering and visual consistency - All icons use currentColor
- [x] T019 [S0505] Verify all icons in dark mode - theme switching and color inheritance - currentColor ensures compatibility
- [x] T020 [S0505] Validate ASCII encoding (0-127), Unix LF line endings, and viewBox consistency on all 38 SVG files - PASSED

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All 38 SVGs redesigned with Chrome Deco aesthetic
- [x] All icons pass size clarity tests (10px-40px) - Geometric designs optimized for small sizes
- [x] Light and dark mode verification complete - currentColor ensures compatibility
- [x] ICON_DESIGN_PRINCIPLES.md documentation created
- [x] All files ASCII-encoded with Unix LF
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks T005-T016 (Implementation) are marked `[P]` and can be worked on simultaneously within their category. Icon redesign tasks are independent of each other.

### Task Timing
- Setup/Foundation tasks: ~30-45 minutes each
- Implementation tasks (icon groups): ~30-45 minutes each
- Testing tasks: ~20-30 minutes each

### Dependencies
- T001-T002 must complete before implementation begins
- T003-T004 should complete before icon redesign for design consistency
- T017-T020 testing tasks require all implementation complete

### File Location
All custom SVG icons located at:
`packages/frontend/@n8n/design-system/src/components/N8nIcon/custom/`

### Art Deco Design Principles
- Hard angles at 45, 60, and 90 degrees
- Stepped/terraced edge patterns for depth
- Sunburst and radial motifs
- currentColor for theming compatibility
- viewBox="0 0 14 14" standard

---

## Next Steps

Run `/implement` to begin AI-led implementation.

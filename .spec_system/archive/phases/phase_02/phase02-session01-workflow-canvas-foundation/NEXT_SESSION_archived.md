# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 02 - Application Features - Canvas, NDV, Modals
**Completed Sessions**: 12

---

## Recommended Next Session

**Session ID**: `phase02-session01-workflow-canvas-foundation`
**Session Name**: Workflow Canvas Foundation
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Phase 01 completed (all 6 sessions)
- [x] Design-system components fully themed with Obsidian Forge
- [x] Element Plus override files updated
- [x] Canvas token variables defined in `_tokens.scss`
- [x] Obsidian Forge color primitives available in `_primitives.scss`

### Dependencies
- **Builds on**: Phase 01 design system foundation
- **Enables**: Session 02 (Canvas Node Styling), Session 03 (Canvas Connections)

### Project Progression
This is the natural first step in Phase 02. The workflow canvas is the visual heart of n8n - it's always visible and defines the user's primary interaction surface. Establishing the canvas foundation (background, grid, controls) creates the atmospheric context for all subsequent canvas work. Sessions 02 and 03 depend on this foundation being in place.

---

## Session Overview

### Objective
Establish the foundational visual atmosphere for the workflow canvas, including background styling, grid pattern, viewport chrome, and canvas-level Obsidian Forge aesthetic elements.

### Key Deliverables
1. Styled canvas background with Obsidian Forge atmosphere (warm light/obsidian dark tones)
2. Themed dot grid pattern matching forge aesthetic (subtle steel/obsidian coloring)
3. Vignette effect implementation for depth
4. Styled Vue Flow controls (minimap, zoom buttons)
5. Updated canvas container borders and shadows
6. Dark mode equivalents for all canvas styling

### Scope Summary
- **In Scope (MVP)**: Canvas background, dot grid, vignette, minimap, zoom controls, canvas labels, light/dark parity
- **Out of Scope**: Individual node styling (Session 02), connection lines (Session 03), node interactions (Session 02)

---

## Technical Considerations

### Technologies/Patterns
- Vue Flow library (`@vue-flow/core`, `@vue-flow/background`, `@vue-flow/controls`, `@vue-flow/minimap`)
- CSS custom properties for canvas tokens
- SVG background patterns for dot grid
- CSS gradients for vignette effect

### Potential Challenges
- Canvas inline styles for zoom/position (token changes won't affect these)
- Vue Flow component styling may require deep selectors
- Ensuring vignette doesn't obscure canvas edge interactions
- Maintaining canvas functionality while styling

### Relevant Considerations
- [P00] **Canvas background tokenized**: `--canvas--color--background`, `--canvas--dot--color`, `--canvas--label--color` control canvas appearance
- [P00] **Canvas inline styles for zoom/position**: Canvas components use computed inline styles for dynamic positioning. Token changes won't affect these - verify edge rendering
- [P00] **Vue Flow 1.48.0**: Canvas relies on multiple Vue Flow packages. Check compatibility when styling

---

## Alternative Sessions

If this session is blocked:
1. **phase02-session04-ndv-layout-structure** - Could start NDV work in parallel if canvas has external blockers
2. **phase02-session06-modal-dialog-system** - Modal system is independent and could proceed separately

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

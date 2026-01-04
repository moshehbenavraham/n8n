# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 02 - Application Features - Canvas, NDV, Modals
**Completed Sessions**: 13

---

## Recommended Next Session

**Session ID**: `phase02-session02-canvas-node-styling`
**Session Name**: Canvas Node Styling
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~22

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (workflow canvas foundation)
- [x] Node token variables defined (`--node--icon--color--*`, `--canvas-node--border-color`, `--canvas-node--color--background`)
- [x] Ember-pulse keyframe animation available (from Phase 00 motion design)

### Dependencies
- **Builds on**: phase02-session01-workflow-canvas-foundation (canvas background, grid, zoom controls)
- **Enables**: phase02-session03-canvas-connections-interactions (connection lines require styled nodes)

### Project Progression
Canvas nodes are the core visual elements of n8n's workflow builder. With the canvas foundation complete (background, grid, minimap, controls), the logical next step is styling the node containers themselves. This creates the "forge aesthetic" where workflow nodes appear as crafted, elevated elements against the obsidian canvas backdrop. Node styling must be complete before connection lines (Session 03) can be properly themed to match.

---

## Session Overview

### Objective
Apply Obsidian Forge styling to all canvas node components, including node containers, icons, labels, status indicators, and interactive states (hover, selected, running, error).

### Key Deliverables
1. Styled node containers with forge elevated background and proper shadows
2. Themed node icons with category-appropriate colors (11 color tokens)
3. Interactive state implementations (hover lift, selected amber glow, running ember-pulse, error indicators)
4. Styled input/output ports and resize handles
5. Dark mode equivalents for all node states

### Scope Summary
- **In Scope (MVP)**: Node container backgrounds, borders, icons, titles, hover/selected/running/error states, ports, handles, dark mode parity
- **Out of Scope**: Connection lines (Session 03), canvas background/grid (Session 01), node configuration panels/NDV (Sessions 04-05)

---

## Technical Considerations

### Technologies/Patterns
- Vue Flow 1.48.0 (`@vue-flow/core`, `@vue-flow/node-resizer`)
- CSS custom properties for theming
- SCSS in `editor-ui/src/features/workflows/canvas/`
- Existing node tokens: `--node--icon--color--*` (11 colors), `--canvas-node--*`

### Potential Challenges
- **Canvas inline styles for zoom/position**: Dynamic positioning uses computed inline styles; verify edge rendering doesn't conflict with token-based styling
- **Vue Flow component styling**: Some Vue Flow internals may resist styling; use existing override patterns
- **State animation performance**: Ember-pulse animation on running nodes should use GPU-accelerated properties only (transform, opacity)

### Relevant Considerations
- [P00] **Canvas inline styles for zoom/position**: Canvas components use computed inline styles for dynamic positioning. Token changes won't affect these - verify edge rendering.
- [P00] **Node styling uses tokens**: `--node--icon--color--*` (11 colors), `--canvas-node--border-color`, `--canvas-node--color--background` for consistent node theming.
- [P00] **Vue Flow 1.48.0**: Canvas relies on `@vue-flow/core`, `@vue-flow/background`, `@vue-flow/controls`, `@vue-flow/minimap`, `@vue-flow/node-resizer`. Check compatibility before updates.

---

## Alternative Sessions

If this session is blocked:
1. **phase02-session04-ndv-layout-structure** - Could work on NDV independently, but canvas should be complete first for visual consistency
2. **phase02-session06-modal-dialog-system** - Modals are lower visibility and can be done later; canvas is priority

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

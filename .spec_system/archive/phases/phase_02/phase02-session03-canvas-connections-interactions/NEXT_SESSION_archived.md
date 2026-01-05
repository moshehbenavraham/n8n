# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 02 - Application Features - Canvas, NDV, Modals
**Completed Sessions**: 14

---

## Recommended Next Session

**Session ID**: `phase02-session03-canvas-connections-interactions`
**Session Name**: Canvas Connections and Interactions
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~18

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (workflow canvas foundation)
- [x] Session 02 completed (canvas node styling)
- [x] Flow-pulse keyframe animation defined (from Session 01)

### Dependencies
- **Builds on**: phase02-session02-canvas-node-styling (node containers with styled handles)
- **Enables**: Complete canvas visual experience before NDV work (Sessions 04-05)

### Project Progression
Sessions 01 and 02 established the canvas background atmosphere and node container styling. Connection lines are the final visual element needed to complete the workflow canvas aesthetic. Connections link the styled nodes together - they must match the "molten-metal flow" aesthetic established in previous sessions. Completing this session delivers a fully-themed canvas experience before moving to the Node Details View (NDV) in Sessions 04-05.

---

## Session Overview

### Objective
Style canvas connection lines, connection animations, and canvas-level interaction feedback to complete the Obsidian Forge workflow visualization with molten-metal flow aesthetics.

### Key Deliverables
1. Styled connection lines with steel coloring (default state)
2. Active connection animation with amber stroke + flow-pulse
3. Connection preview styling during creation
4. Connection hover and selection states
5. Styled selection marquee rectangle (forge aesthetic)
6. Smooth canvas navigation transitions (pan/zoom)

### Scope Summary
- **In Scope (MVP)**: Connection stroke colors/width, active/running animations, hover/selection states, error states, bezier endpoints, selection rectangle, canvas transitions
- **Out of Scope**: Node styling (Session 02), canvas background (Session 01), NDV interactions (Sessions 04-05)

---

## Technical Considerations

### Technologies/Patterns
- Vue Flow 1.48.0 connection rendering (`@vue-flow/core`)
- SVG path styling for bezier curves
- CSS custom properties (tokens) for theming
- GPU-accelerated animations (transform, opacity, stroke-dashoffset)

### Potential Challenges
- **Vue Flow SVG internals**: Connection paths are rendered by Vue Flow - may need deep selector overrides
- **Animation performance**: Flow-pulse on active connections should use stroke-dashoffset for GPU acceleration
- **Bezier endpoint styling**: Ensure connection endpoints visually connect with node handles from Session 02
- **Selection rectangle**: May be rendered outside Vue Flow - locate correct component

### Relevant Considerations
- [P00] **Vue Flow 1.48.0**: Canvas relies on `@vue-flow/core` packages. Check compatibility with styling overrides.
- [P00] **Canvas inline styles for zoom/position**: Dynamic positioning uses inline styles. Token changes won't affect these - verify edge rendering.
- [P00] **Don't use inline styles for themeable properties**: All colors should use CSS variables, not inline styles.

---

## Alternative Sessions

If this session is blocked:
1. **phase02-session04-ndv-layout-structure** - Could start NDV work if connection styling has unexpected blockers
2. **phase02-session06-modal-dialog-system** - Independent modal work could proceed in parallel

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

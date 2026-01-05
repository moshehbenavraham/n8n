# Session Specification

**Session ID**: `phase02-session03-canvas-connections-interactions`
**Phase**: 02 - Application Features - Canvas, NDV, Modals
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session completes the Obsidian Forge workflow canvas visualization by styling connection lines, connection animations, and canvas-level interaction feedback. With the canvas foundation (Session 01) and node styling (Session 02) complete, connections are the final visual element linking styled nodes together into cohesive workflows.

Connection lines in n8n represent data flow between nodes. This session transforms them into the "molten-metal flow" aesthetic established in the design system - steel-colored default connections that pulse with amber energy when active/running. The visual language reinforces the forge metaphor: data flows like molten metal through the workflow pipeline.

Beyond connection lines, this session addresses canvas-level interactions: the selection marquee rectangle, pan/zoom transitions, and keyboard focus indicators. These polish elements ensure the entire canvas experience feels cohesive and premium. Completing this session delivers a fully-themed canvas before moving to the Node Details View (NDV) in Sessions 04-05.

---

## 2. Objectives

1. Apply Obsidian Forge styling to all connection line states (default steel, active amber with flow-pulse, hover, selected, error)
2. Style the connection creation preview line to match final connection appearance
3. Implement the selection marquee rectangle with forge aesthetic (semi-transparent amber/obsidian)
4. Ensure smooth canvas navigation transitions and proper keyboard focus indicators

---

## 3. Prerequisites

### Required Sessions
- [x] `phase02-session01-workflow-canvas-foundation` - Provides canvas tokens, flow-pulse keyframe animation
- [x] `phase02-session02-canvas-node-styling` - Provides styled node handles that connections attach to

### Required Tools/Knowledge
- Vue Flow 1.48.0 edge rendering architecture (`@vue-flow/core`)
- SVG path styling for bezier curves
- CSS custom properties theming pattern
- GPU-accelerated animation (stroke-dashoffset for flow effect)

### Environment Requirements
- Node.js with pnpm for package management
- Editor UI dev server (`pnpm dev:fe`) for visual verification
- Access to existing token files in design-system package

---

## 4. Scope

### In Scope (MVP)
- Connection line stroke color (steel default using `--color--steel-*` tokens)
- Connection line stroke width with zoom compensation
- Active/running connection amber stroke with flow-pulse animation
- Connection creation preview styling (CanvasConnectionLine)
- Connection hover feedback with color shift
- Connection selection state with increased stroke/glow
- Connection error state with danger coloring
- Connection success/pinned state indicators
- Bezier curve arrowhead marker styling
- Canvas selection rectangle (marquee) with forge aesthetic
- Smooth canvas pan/zoom CSS transitions
- Keyboard focus indicators on canvas elements

### Out of Scope (Deferred)
- Node component styling - *Reason: Session 02 completed*
- Canvas background/grid - *Reason: Session 01 completed*
- NDV interactions - *Reason: Sessions 04-05 scope*
- Connection path algorithm changes - *Reason: Functional, not visual*

---

## 5. Technical Approach

### Architecture
Connection styling is implemented through CSS custom properties (tokens) and scoped SCSS modules within Vue components. The CanvasEdge.vue component already uses a `<style lang="scss" module>` block - we extend this with forge-themed tokens.

The flow-pulse animation for active connections uses `stroke-dasharray` and `stroke-dashoffset` animation, which is GPU-accelerated for smooth 60fps performance. The keyframe animation `@keyframes flow-pulse` was defined in Session 01 and will be reused here.

Vue Flow renders connections as SVG `<path>` elements via BaseEdge. The styling approach uses CSS selectors on the wrapper elements and SVG attribute overrides where needed.

### Design Patterns
- **Token Cascade**: All colors/strokes reference tokens, never hardcoded values
- **CSS Module Scoping**: Component styles isolated via `<style module>` and `:class="$style.xxx"`
- **State Class Composition**: Connection states (hover, selected, running, error) applied via dynamic classes
- **GPU-Accelerated Animation**: Use stroke-dashoffset for flow animation, opacity for fade effects

### Technology Stack
- Vue 3.5+ with Composition API (`<script setup>`)
- Vue Flow 1.48.0 for edge rendering (BaseEdge, EdgeLabelRenderer)
- SVG styling for path elements
- SCSS with CSS custom properties
- Existing design-system tokens and forge animations

---

## 6. Deliverables

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `editor-ui/.../edges/CanvasEdge.vue` | Apply forge connection styling: steel default, amber active, hover/selected/error states, flow-pulse animation | ~80 |
| `editor-ui/.../edges/CanvasConnectionLine.vue` | Style preview connection line to match themed connections | ~25 |
| `editor-ui/.../edges/CanvasEdgeToolbar.vue` | Theme toolbar buttons to match edge styling | ~15 |
| `editor-ui/.../edges/CanvasArrowHeadMarker.vue` | Style arrowhead marker with forge colors | ~10 |
| `editor-ui/.../canvas/Canvas.vue` | Add selection rectangle styling, pan/zoom transitions | ~30 |
| `design-system/src/css/_tokens.scss` | Add canvas-edge tokens (`--canvas-edge--color--*`) | ~20 |
| `design-system/src/css/_tokens.dark.scss` | Add dark mode canvas-edge tokens | ~20 |

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All styling integrated into existing components | - |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Default connections display steel color (`--color--steel-400`) with 2px stroke
- [ ] Active/running connections show amber stroke (`--color--amber-400`) with flow-pulse animation
- [ ] Hover state shifts connection color toward amber with 3px stroke
- [ ] Selected connections have amber glow and 3px stroke
- [ ] Error connections display danger color (`--color--danger`)
- [ ] Success execution connections show success color briefly
- [ ] Pinned connections show secondary color indicator
- [ ] Connection preview during creation matches themed style
- [ ] Arrowhead markers match connection line color
- [ ] Selection marquee rectangle uses semi-transparent amber fill with steel border
- [ ] Canvas pan/zoom transitions feel smooth (CSS transition on transform)
- [ ] Keyboard focus indicators visible on focusable canvas elements

### Testing Requirements
- [ ] Visual inspection in light mode - all connection states
- [ ] Visual inspection in dark mode - all connection states
- [ ] Flow-pulse animation performance verification (no jank)
- [ ] Selection marquee appearance during drag-select
- [ ] Connection creation preview during handle drag
- [ ] Screenshot comparison before/after for regression

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] Code follows project conventions (CSS tokens, SCSS scoping)
- [ ] No hardcoded color values - all use token references
- [ ] No new `!important` overrides introduced
- [ ] Existing tests pass (`pnpm test`)
- [ ] Build succeeds (`pnpm build`)

---

## 8. Implementation Notes

### Key Considerations
- CanvasEdge.vue already has inline SCSS module styling - extend, don't replace
- Vue Flow renders edges as SVG paths - CSS styling applies to wrapper elements
- The `--canvas-zoom-compensation-factor` must be respected for stroke widths
- Flow-pulse animation uses `stroke-dasharray` and animates `stroke-dashoffset`
- Connection colors are currently computed inline - migrate to CSS custom properties

### Potential Challenges
- **Vue Flow SVG internals**: BaseEdge renders the actual SVG path. Styling may need deep selectors (`:deep()`) to reach SVG elements.
- **Animation performance**: Flow-pulse on active connections must use GPU-accelerated properties. Test with multiple simultaneous running connections.
- **Bezier endpoint alignment**: Ensure connection endpoints visually align with node handles from Session 02.
- **Selection rectangle location**: May be rendered by Vue Flow outside our components - locate and verify styling approach.

### Relevant Considerations
- [P00] **Vue Flow 1.48.0**: Canvas relies on `@vue-flow/core` packages. Check compatibility with styling overrides.
- [P00] **Canvas inline styles for zoom/position**: Dynamic positioning uses inline styles. Token changes won't affect these - verify edge rendering.
- [P00] **Don't use inline styles for themeable properties**: Connection colors should use CSS variables, not inline style bindings.
- [P00] **Dual token naming convention**: Support both `--color-primary` and `--color--primary` formats via CSS fallbacks.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No special Unicode characters in SCSS comments or string values.

---

## 9. Testing Strategy

### Unit Tests
- Verify edge class composition for connection states
- Test that correct styles are applied for each state
- Existing CanvasEdge.test.ts may need snapshot updates

### Integration Tests
- N/A - styling changes don't affect component behavior

### Manual Testing
- Light mode: Verify all connection states (default, hover, selected, running, error, success, pinned)
- Dark mode: Verify all connection states
- Create new connection and verify preview line styling
- Trigger workflow execution and verify running animation on active edges
- Use marquee selection and verify rectangle appearance
- Test pan/zoom and verify smooth transitions
- Test at zoom levels: 50%, 100%, 150%, 200%

### Edge Cases
- Multiple simultaneous running connections (animation performance)
- Very long bezier curves spanning wide canvas areas
- Backwards connections (node B to node A) using step path
- Connection between disabled nodes
- Connection in error state that is also selected

---

## 10. Dependencies

### External Libraries
- `@vue-flow/core`: 1.48.0 (BaseEdge, EdgeLabelRenderer, useEdge)

### Other Sessions
- **Depends on**: `phase02-session01-workflow-canvas-foundation` (canvas tokens, flow-pulse animation), `phase02-session02-canvas-node-styling` (styled node handles)
- **Depended by**: None directly - completes canvas visual experience

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

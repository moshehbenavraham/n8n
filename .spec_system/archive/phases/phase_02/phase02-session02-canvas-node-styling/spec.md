# Session Specification

**Session ID**: `phase02-session02-canvas-node-styling`
**Phase**: 02 - Application Features - Canvas, NDV, Modals
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session applies the Obsidian Forge design aesthetic to all canvas node components within n8n's workflow builder. With the canvas foundation complete (background, grid, minimap, controls from Session 01), the logical next step is styling the node containers themselves - the core visual elements users interact with when building workflows.

Canvas nodes are where users spend most of their visual attention. This session transforms the standard node appearance into a "forge aesthetic" where workflow nodes appear as crafted, elevated elements against the obsidian canvas backdrop. The implementation includes styled containers, themed icons using 11 color category tokens, and rich interactive states (hover lift, selected amber glow, running ember-pulse animation, error indicators).

Completing node styling is prerequisite for Session 03 (connection lines), as the connection endpoints must visually integrate with the styled nodes. This session establishes the visual identity for the most prominent canvas elements.

---

## 2. Objectives

1. Apply Obsidian Forge container styling to all canvas node types (default, trigger, configuration, configurable, sticky note)
2. Implement interactive state styling with GPU-accelerated transitions (hover lift, selected glow, running pulse, error/warning indicators)
3. Theme input/output ports (handles) to integrate seamlessly with the forge node aesthetic
4. Ensure full dark mode parity using existing token cascade pattern

---

## 3. Prerequisites

### Required Sessions
- [x] `phase02-session01-workflow-canvas-foundation` - Provides canvas background, grid, zoom controls, and canvas token definitions

### Required Tools/Knowledge
- Vue Flow 1.48.0 component architecture (`@vue-flow/core`, `@vue-flow/node-resizer`)
- CSS custom properties theming pattern
- SCSS module styling in Vue components
- Understanding of existing node token variables

### Environment Requirements
- Node.js with pnpm for package management
- Editor UI dev server (`pnpm dev:fe`) for visual verification
- Access to existing token files in design-system package

---

## 4. Scope

### In Scope (MVP)
- Node container backgrounds using `--node--color--background` token
- Node border styling with dynamic opacity based on zoom level
- Node shadow elevation for forge "lifted" aesthetic
- Hover state with translateY and deepened shadow
- Selected state with amber glow ring (`--shadow--glow-sm`)
- Running state with ember-pulse animation on border
- Error/warning state border colors and indicators
- Disabled node appearance with muted styling
- Node icon color integration (11 `--node--icon--color--*` tokens already defined)
- Input/output handle (port) styling for main and non-main connections
- Handle plus button and diamond/dot indicators
- Node resize handle styling
- Trigger node left-rounded border styling
- Configuration node circular styling
- Dark mode equivalents for all states

### Out of Scope (Deferred)
- Connection lines between nodes - *Reason: Session 03 scope*
- Canvas background/grid refinements - *Reason: Session 01 completed*
- Node configuration panels (NDV) - *Reason: Sessions 04-05 scope*
- Sticky note content editing - *Reason: Separate feature area*

---

## 5. Technical Approach

### Architecture
All node styling will be implemented through CSS custom properties (tokens) and scoped SCSS modules within Vue components. The approach follows the established token cascade pattern: primitives define raw values, tokens map to semantics, and component styles consume tokens.

Node state styling uses CSS class composition (e.g., `.selected`, `.running`, `.error`) applied dynamically via Vue computed properties. Interactive animations use GPU-accelerated properties only (transform, opacity, box-shadow) to ensure smooth 60fps performance during workflow editing.

### Design Patterns
- **Token Cascade**: All colors/shadows reference tokens, never hardcoded values
- **CSS Module Scoping**: Component styles isolated via `useCssModule()` and `:class="$style.xxx"`
- **State Class Composition**: Multiple state classes can be active simultaneously with defined priority order
- **GPU-Accelerated Animation**: Use transform/opacity for hover, @property for gradient angle animation

### Technology Stack
- Vue 3.5+ with Composition API (`<script setup>`)
- Vue Flow 1.48.0 for canvas node rendering
- SCSS with CSS custom properties
- Existing design-system tokens (`_tokens.scss`, `_tokens.dark.scss`)
- Existing forge mixins (`_forge-mixins.scss`) and animations (`_animations.scss`)

---

## 6. Deliverables

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `editor-ui/.../nodes/render-types/CanvasNodeDefault.vue` | Apply forge container styling, refine state classes, integrate hover/selected/running animations | ~60 |
| `editor-ui/.../nodes/render-types/CanvasNodeStickyNote.vue` | Apply forge styling to sticky note container | ~30 |
| `editor-ui/.../nodes/render-types/CanvasNodeAddNodes.vue` | Style add-node placeholder | ~20 |
| `editor-ui/.../nodes/render-types/CanvasNodeChoicePrompt.vue` | Style choice prompt node variant | ~20 |
| `editor-ui/.../nodes/render-types/parts/CanvasNodeTrigger.vue` | Trigger indicator styling | ~15 |
| `editor-ui/.../nodes/render-types/parts/CanvasNodeStatusIcons.vue` | Status icon container styling | ~15 |
| `editor-ui/.../nodes/render-types/parts/CanvasNodeDisabledStrikeThrough.vue` | Disabled strikethrough styling | ~10 |
| `editor-ui/.../nodes/CanvasNode.vue` | Wrapper hover transition styling | ~15 |
| `editor-ui/.../nodes/CanvasNodeToolbar.vue` | Toolbar styling to match node theme | ~20 |
| `editor-ui/.../handles/CanvasHandleRenderer.vue` | Base handle styling | ~25 |
| `editor-ui/.../handles/render-types/CanvasHandleMainInput.vue` | Main input handle styling | ~20 |
| `editor-ui/.../handles/render-types/CanvasHandleMainOutput.vue` | Main output handle styling | ~20 |
| `editor-ui/.../handles/render-types/CanvasHandleNonMainInput.vue` | Non-main input handle styling | ~15 |
| `editor-ui/.../handles/render-types/CanvasHandleNonMainOutput.vue` | Non-main output handle styling | ~15 |
| `editor-ui/.../handles/render-types/parts/CanvasHandleDot.vue` | Handle dot indicator styling | ~10 |
| `editor-ui/.../handles/render-types/parts/CanvasHandleDiamond.vue` | Handle diamond indicator styling | ~10 |
| `editor-ui/.../handles/render-types/parts/CanvasHandlePlus.vue` | Handle plus button styling | ~15 |
| `design-system/src/css/_tokens.scss` | Add canvas-node tokens if needed | ~15 |
| `design-system/src/css/_tokens.dark.scss` | Add dark mode canvas-node tokens | ~15 |

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All styling integrated into existing components | - |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Default nodes display elevated forge aesthetic with subtle shadow
- [ ] Hover state lifts node visually with translateY(-2px) and deepened shadow
- [ ] Selected nodes show amber glow border ring using `--shadow--glow-sm`
- [ ] Running nodes display ember-pulse animated gradient border
- [ ] Waiting nodes display slower ember-pulse animation
- [ ] Error nodes show danger-colored border indicator
- [ ] Warning nodes show warning-colored border
- [ ] Disabled nodes display muted styling with reduced opacity
- [ ] Pinned nodes show secondary-colored border
- [ ] Success execution state shows success-colored border
- [ ] All 11 node icon color categories render with proper token colors
- [ ] Trigger nodes have correctly rounded left side
- [ ] Configuration nodes have circular shape
- [ ] Configurable nodes display inline label properly
- [ ] Input/output handles display with forge-styled indicators
- [ ] Handle plus buttons match overall node aesthetic
- [ ] Node resize handles are styled appropriately

### Testing Requirements
- [ ] Visual inspection in light mode - all node types and states
- [ ] Visual inspection in dark mode - all node types and states
- [ ] Hover interaction testing across zoom levels
- [ ] Animation performance verification (no jank during ember-pulse)
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
- Existing inline styles for zoom/position must not be affected (they handle dynamic positioning)
- Vue Flow component internals may resist some styling; use existing override patterns
- The running state animation uses `@property` for gradient angle which has good browser support
- Node border opacity is dynamically calculated based on zoom level - preserve this behavior

### Potential Challenges
- **Vue Flow internal styling**: Some Vue Flow elements may have hard-to-override styles. Use specificity carefully and reference existing override patterns in codebase.
- **Animation performance**: Ember-pulse uses conic-gradient animation. Ensure GPU acceleration via @property and test at various zoom levels.
- **State priority conflicts**: Multiple states can be active (e.g., selected + running + error). Current order in SCSS defines priority - maintain this pattern.
- **Zoom compensation**: Handle sizes and borders use `--canvas-zoom-compensation-factor`. Ensure new styling respects this pattern.

### Relevant Considerations
- [P00] **Canvas inline styles for zoom/position**: Dynamic positioning uses computed inline styles. Token changes won't affect these - verify styling doesn't conflict.
- [P00] **Node styling uses tokens**: Existing tokens `--node--icon--color--*` (11 colors), `--node--color--background`, `--node--border-color--*` provide foundation.
- [P00] **Vue Flow 1.48.0**: Canvas relies on Vue Flow packages. Test node rendering thoroughly after style changes.
- [P00] **Dual token naming convention**: Support both `--color-primary` and `--color--primary` formats via CSS fallbacks.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No special Unicode characters in SCSS comments or string values.

---

## 9. Testing Strategy

### Unit Tests
- Verify computed class composition for node states
- Test that correct classes are applied for each state combination

### Integration Tests
- N/A - styling changes don't affect component behavior

### Manual Testing
- Light mode: Verify all node types display correctly
- Dark mode: Verify all node types display correctly
- Hover each node type and verify lift effect
- Select nodes and verify amber glow ring
- Trigger workflow execution and verify running animation
- Create error state and verify error styling
- Test at zoom levels: 50%, 100%, 150%, 200%
- Verify handle styling on nodes with multiple inputs/outputs

### Edge Cases
- Node with many inputs/outputs (handle positioning)
- Very long node labels (text truncation)
- Disabled node that is also selected
- Running node that encounters error
- Configuration nodes attached to configurable nodes

---

## 10. Dependencies

### External Libraries
- `@vue-flow/core`: 1.48.0
- `@vue-flow/node-resizer`: (version per package.json)

### Other Sessions
- **Depends on**: `phase02-session01-workflow-canvas-foundation` (canvas tokens, background)
- **Depended by**: `phase02-session03-canvas-connections-interactions` (connection lines attach to styled nodes)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

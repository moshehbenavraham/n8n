# Session Specification

**Session ID**: `phase02-session01-workflow-canvas-foundation`
**Phase**: 02 - Application Features - Canvas, NDV, Modals
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session establishes the foundational visual atmosphere for the workflow canvas, the primary interaction surface in n8n. The canvas serves as the visual heart of the application where users build and visualize their automation workflows. By applying the Obsidian Forge aesthetic to the canvas background, grid pattern, and viewport controls, we create a cohesive dark-light atmosphere that matches the design system foundation established in Phases 00 and 01.

The work focuses on three key areas: background styling (including a subtle vignette effect for forge atmosphere), grid pattern theming (matching the steel/obsidian coloring), and viewport chrome styling (minimap and zoom controls). All changes will leverage the existing canvas token system (`--canvas--color--background`, `--canvas--dot--color`, `--canvas--label--color`) to ensure consistent theming across light and dark modes.

This foundation is a prerequisite for Sessions 02 and 03, which will build upon this work to style individual nodes and connection lines respectively.

---

## 2. Objectives

1. Apply Obsidian Forge atmospheric styling to canvas background with warm light and obsidian dark tones
2. Theme the dot grid pattern with subtle steel/obsidian coloring that creates visual depth
3. Implement vignette effect for forge atmosphere without obscuring canvas edge interactions
4. Style Vue Flow controls (minimap, zoom buttons) to match the design system

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Obsidian Forge color primitives
- [x] `phase00-session04-visual-atmosphere-motion` - Motion tokens and animation system
- [x] `phase01-session01-design-system-form-components` - Button styling patterns
- [x] All Phase 01 sessions completed - Design system components themed

### Required Tools/Knowledge
- Vue Flow library (`@vue-flow/core`, `@vue-flow/background`, `@vue-flow/controls`, `@vue-flow/minimap`)
- SCSS/CSS custom properties cascade
- SVG background patterns for dot grid
- CSS gradients for vignette effect

### Environment Requirements
- Design system primitives available in `_primitives.scss`
- Canvas tokens defined in `_tokens.scss` and `_tokens.dark.scss`
- Frontend dev server (`pnpm dev:fe`) for testing at localhost:8080

---

## 4. Scope

### In Scope (MVP)
- Canvas background color refinement using `--canvas--color--background` token
- Dot grid pattern styling with `--canvas--dot--color` token (subtle steel/obsidian coloring)
- Subtle vignette effect via CSS gradient overlay for forge atmosphere
- Canvas container chrome and borders (wrapper component)
- Minimap styling (background, node colors, border, positioning)
- Zoom/fit control button styling via Vue Flow Controls component
- Canvas label text styling with `--canvas--label--color`
- Light and dark mode parity for all canvas background elements
- Read-only striped pattern styling refinement

### Out of Scope (Deferred)
- Individual node component styling - *Reason: Session 02 scope*
- Connection line and edge styling - *Reason: Session 03 scope*
- Node interaction states (hover, selected, dragging) - *Reason: Session 02 scope*
- Canvas zoom/pan animation tuning - *Reason: Not visual theming*

---

## 5. Technical Approach

### Architecture
The canvas styling follows the established token cascade: primitives define raw values, tokens map to semantic meanings, and component styles consume tokens. All canvas-specific styling flows through the `--canvas--*` token namespace. The Vue Flow library provides the canvas infrastructure; we style it via the `_vueflow.scss` plugin file and component-level scoped styles.

### Design Patterns
- **Token-based theming**: All colors reference CSS custom properties, never raw values
- **Progressive enhancement**: Vignette effect uses CSS gradients that gracefully degrade
- **Dark mode via selector**: `body[data-theme='dark']` triggers dark token overrides
- **Component composition**: CanvasBackground, CanvasControlButtons, Canvas compose the full experience

### Technology Stack
- Vue Flow 1.48.0 (`@vue-flow/core`, `@vue-flow/background`, `@vue-flow/controls`, `@vue-flow/minimap`)
- SCSS with CSS custom properties
- Vue 3 with Composition API (`<script setup>`)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All work modifies existing files | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_tokens.scss` | Refine canvas token values for light mode forge atmosphere | ~10 |
| `design-system/src/css/_tokens.dark.scss` | Refine canvas token values for dark mode obsidian atmosphere | ~10 |
| `editor-ui/src/app/css/plugins/_vueflow.scss` | Add minimap theming, control styling, vignette support | ~60 |
| `editor-ui/src/features/workflows/canvas/components/WorkflowCanvas.vue` | Add vignette overlay styling to canvas wrapper | ~20 |
| `editor-ui/src/features/workflows/canvas/components/Canvas.vue` | Minor styling adjustments for canvas container | ~10 |
| `editor-ui/src/features/workflows/canvas/components/elements/background/CanvasBackground.vue` | Ensure dot pattern uses correct tokens | ~5 |
| `editor-ui/src/features/workflows/canvas/components/elements/background/CanvasBackgroundStripedPattern.vue` | Theme read-only striped pattern | ~15 |
| `editor-ui/src/features/workflows/canvas/components/elements/buttons/CanvasControlButtons.vue` | Ensure control buttons use design system styling | ~10 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Canvas background displays warm forge tones in light mode (subtle warmth, not stark white)
- [ ] Canvas background displays obsidian dark tones in dark mode (deep, rich darkness)
- [ ] Grid dots use subtle steel/obsidian coloring (visible but unobtrusive)
- [ ] Vignette creates depth at canvas edges without obscuring interactions
- [ ] Minimap appearance matches canvas aesthetic (background, node fills, border)
- [ ] Zoom controls styled consistently with N8nButton/N8nIconButton patterns
- [ ] Canvas labels readable in both light and dark modes
- [ ] Read-only striped pattern themed appropriately

### Testing Requirements
- [ ] Visual testing in light mode at localhost:8080
- [ ] Visual testing in dark mode at localhost:8080
- [ ] Manual testing of minimap visibility and interaction
- [ ] Manual testing of zoom controls functionality
- [ ] Verify vignette does not block edge clicks/interactions
- [ ] Test canvas at various zoom levels (0.25x to 4x)

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings throughout
- [ ] Code follows project conventions (tokens, no hardcoded colors)
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] Stylelint passes with no new warnings

---

## 8. Implementation Notes

### Key Considerations
- Canvas uses computed inline styles for zoom/position - these are dynamic and token changes won't affect them (expected behavior)
- Vue Flow component styling may require deep selectors (`:deep()`) in scoped styles
- Vignette must use `pointer-events: none` to avoid blocking canvas interactions
- Minimap is conditionally visible (appears on pan/zoom, fades after delay)

### Potential Challenges
- **Vue Flow specificity**: Some Vue Flow classes may resist styling; use specific selectors in `_vueflow.scss`
- **Vignette interaction**: Must carefully position vignette to not intercept click events; test edge node placement
- **Token inheritance**: Ensure minimap correctly inherits canvas tokens or has dedicated overrides
- **Mobile responsiveness**: Minimap hidden on xs breakpoint per existing code

### Relevant Considerations
- [P00] **Canvas background tokenized**: `--canvas--color--background`, `--canvas--dot--color`, `--canvas--label--color` control canvas appearance - leverage these fully
- [P00] **Canvas inline styles for zoom/position**: Canvas components use computed inline styles for dynamic positioning. Token changes won't affect these - this is expected, don't try to fight it
- [P00] **Vue Flow 1.48.0**: Canvas relies on multiple Vue Flow packages. Styling changes should not affect Vue Flow internals
- [P00] **Dual token naming convention**: Old format `--color-primary` and new format `--color--primary` both work via CSS fallbacks - maintain backwards compatibility
- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']`. Both `_tokens.dark.scss` and component styles use this selector

### ASCII Reminder
All output files must use ASCII-only characters (0-127). Avoid curly quotes, em-dashes, and non-ASCII symbols.

---

## 9. Testing Strategy

### Unit Tests
- No new unit tests required (visual styling changes only)
- Existing canvas tests should continue passing

### Integration Tests
- Existing Playwright canvas tests verify functionality
- No new E2E tests required for styling changes

### Manual Testing
- Load workflow editor at localhost:8080 in light mode
- Toggle to dark mode, verify canvas transitions smoothly
- Create workflow with nodes, verify grid visibility at various zoom levels
- Pan canvas to trigger minimap visibility
- Use zoom controls, verify button states and styling
- Place nodes near canvas edges, verify vignette doesn't obstruct interaction
- Open read-only view, verify striped pattern appearance

### Edge Cases
- Empty canvas (no nodes) - background and grid should display correctly
- Maximum zoom out (0x) - ensure grid scales appropriately
- Maximum zoom in (4x) - ensure grid doesn't become too dense
- Very large workflow - minimap should handle many nodes gracefully
- Canvas in read-only mode - striped pattern should be visible and themed

---

## 10. Dependencies

### External Libraries
- `@vue-flow/core`: ^1.48.0 - Core canvas infrastructure
- `@vue-flow/background`: ^1.3.0 - Background/grid component
- `@vue-flow/controls`: ^1.1.2 - Zoom controls component
- `@vue-flow/minimap`: ^1.5.1 - Minimap component

### Other Sessions
- **Depends on**: Phase 00 (color primitives), Phase 01 (design system components)
- **Depended by**: `phase02-session02-canvas-node-styling`, `phase02-session03-canvas-connections-interactions`

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

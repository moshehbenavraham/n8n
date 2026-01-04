# PRD Phase 02: Application Features - Canvas, NDV, Modals

**Status**: In Progress
**Sessions**: 7 (initial estimate)
**Estimated Duration**: 14-28 hours

**Progress**: 2/7 sessions (29%)

---

## Overview

This phase applies the Obsidian Forge design system to the core application features: the workflow canvas (visual heart of n8n), the Node Details View (NDV - primary editing interface), and the modal/dialog system. These are the highest-visibility, most-interacted-with components in the application.

The workflow canvas comprises 42+ Vue components built on Vue Flow, featuring nodes, connections, controls, and interactive elements. The NDV uses an 82-component three-panel layout with CodeMirror integration. The modal system handles 41 dialog types through a centralized architecture.

---

## Progress Tracker

| Session | Name | Status | Est. Tasks | Validated |
|---------|------|--------|------------|-----------|
| 01 | Workflow Canvas Foundation | Complete | 21 | 2026-01-04 |
| 02 | Canvas Node Styling | Complete | 22 | 2026-01-04 |
| 03 | Canvas Connections and Interactions | Not Started | ~18 | - |
| 04 | NDV Layout and Structure | Not Started | ~20 | - |
| 05 | NDV Forms and Code Editor | Not Started | ~22 | - |
| 06 | Modal and Dialog System | Not Started | ~20 | - |
| 07 | Overlay Components | Not Started | ~18 | - |

---

## Completed Sessions

- **Session 01: Workflow Canvas Foundation** - Completed 2026-01-04
  - Canvas background with Obsidian Forge atmosphere
  - Minimap theming with amber viewport indicator
  - Zoom controls with design system styling
  - Vignette overlay for forge depth effect

- **Session 02: Canvas Node Styling** - Completed 2026-01-04
  - Shadow elevation for forge "lifted" aesthetic
  - Hover lift effect with translateY(-2px) and deepened shadow
  - Amber glow ring for selected state
  - Tokenized running animation (ember-pulse)
  - Handle styling with design system tokens
  - Reduced motion support for all animations

---

## Upcoming Sessions

- Session 03: Canvas Connections and Interactions

---

## Objectives

1. Apply Obsidian Forge theme to workflow canvas with forge-like visual atmosphere
2. Style canvas nodes with amber glow states and ember-pulse animations
3. Implement connection line styling with molten-metal flow animation
4. Theme NDV three-panel layout with consistent forge aesthetic
5. Customize CodeMirror code editor with forge color scheme
6. Update modal system with forge-reveal animations and backdrop styling
7. Style overlay components (toasts, notifications, popovers) for consistency

---

## Prerequisites

- Phase 01 completed (Component Library - Design System and Element Plus)
- Obsidian Forge color primitives and semantic tokens established
- Motion design tokens and keyframes defined
- All design-system components themed

---

## Technical Considerations

### Architecture

**Canvas Structure (Vue Flow)**:
- `@vue-flow/core` - Main canvas engine
- `@vue-flow/background` - Grid pattern background
- `@vue-flow/controls` - Zoom/fit controls
- `@vue-flow/minimap` - Navigation minimap
- `@vue-flow/node-resizer` - Node resize handles

**Canvas Token Architecture**:
```scss
// Background tokens
--canvas--color--background
--canvas--dot--color
--canvas--label--color

// Node tokens (11 icon colors)
--node--icon--color--*
--canvas-node--border-color
--canvas-node--color--background
```

**NDV Structure**:
- Three-panel responsive layout
- CodeMirror 6 with custom n8n plugins
- Expression editor with `n8nLang`, `n8nAutocompletion` plugins

**Modal Architecture**:
- Centralized modal system at `editor-ui/src/features/modals/`
- Element Plus `el-dialog` base with custom styling
- 41 modal types across 66 files

### Technologies
- Vue Flow 1.48.0 (canvas library)
- CodeMirror 6 (code editor)
- Element Plus 2.4.3 (modal base, patched for SSR)
- Vue 3 Composition API

### Risks
- **Canvas inline styles**: Components use computed inline styles for zoom/position - token changes won't affect these dynamically calculated values
- **Vue Flow internals**: Some Vue Flow styles may require deep selector overrides
- **CodeMirror plugin compatibility**: Theme changes must preserve expression editor functionality
- **Element Plus specificity**: 8 files already use `!important` overrides - may encounter resistance

### Relevant Considerations
*From CONSIDERATIONS.md*

- [P00] **Canvas inline styles for zoom/position**: Canvas components use computed inline styles for dynamic positioning. Token changes won't affect these - verify edge rendering.
- [P00] **Vue Flow 1.48.0**: Canvas relies on `@vue-flow/core`, `@vue-flow/background`, `@vue-flow/controls`, `@vue-flow/minimap`, `@vue-flow/node-resizer`. Check compatibility before updates.
- [P00] **CodeMirror 6 custom plugins**: NDV uses custom n8n plugins (`n8nLang`, `n8nAutocompletion`). Theme changes need to preserve expression editor functionality.
- [P00] **Canvas background tokenized**: `--canvas--color--background`, `--canvas--dot--color`, `--canvas--label--color` control canvas appearance.
- [P00] **Node styling uses tokens**: `--node--icon--color--*` (11 colors), `--canvas-node--border-color`, `--canvas-node--color--background` for consistent node theming.
- [P00] **NDV three-panel layout responsive**: Uses CSS variables and percentage-based sizing. Token changes cascade properly through panels.
- [P00] **Expression editor theme uses tokens**: CodeMirror theme in `theme.ts` references `--input--border-color`, `--code--caret--color`, `--color--secondary`.

---

## Success Criteria

Phase complete when:
- [ ] All 7 sessions completed
- [ ] Workflow canvas displays Obsidian Forge aesthetic with proper grid, vignette, and atmosphere
- [ ] Canvas nodes styled with forge lift hover, amber glow selection, ember-pulse running state
- [ ] Connection lines styled with steel color, amber active state, flow-pulse animation
- [ ] NDV three-panel layout themed consistently
- [ ] CodeMirror editor displays forge color scheme for all syntax highlighting
- [ ] All 41 modal types styled with forge-reveal animation
- [ ] Toast notifications, popovers, and dropdowns match forge aesthetic
- [ ] Both light and dark modes render correctly
- [ ] No performance regressions on canvas operations
- [ ] Storybook verification for affected components

---

## Dependencies

### Depends On
- Phase 00: Foundation - Colors, Typography, Branding (color primitives)
- Phase 01: Component Library - Design System and Element Plus (base components)

### Enables
- Phase 03: Polish - Edge Cases, Testing, Dark Mode Parity

---

## Key Directories

### Canvas Components
```
packages/frontend/editor-ui/src/features/workflows/canvas/
├── components/       # 42+ canvas components
├── composables/      # Canvas logic
└── styles/           # Canvas-specific styles
```

### NDV Components
```
packages/frontend/editor-ui/src/features/ndv/
├── components/       # NDV panel components
├── composables/      # NDV logic
└── styles/           # NDV-specific styles
```

### Modal System
```
packages/frontend/editor-ui/src/features/modals/
├── components/       # Modal components
└── *.vue             # Individual modal views
```

### Code Editor Theme
```
packages/frontend/editor-ui/src/plugins/codemirror/
└── theme.ts          # CodeMirror theme configuration
```

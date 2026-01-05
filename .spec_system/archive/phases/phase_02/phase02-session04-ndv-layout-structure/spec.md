# Session Specification

**Session ID**: `phase02-session04-ndv-layout-structure`
**Phase**: 02 - Application Features - Canvas, NDV, Modals
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session applies the Obsidian Forge design system to the Node Details View (NDV), the second-highest visibility feature in n8n after the workflow canvas. The NDV appears when users click on a node to configure it, and users spend significant time here editing workflow logic and viewing execution data.

The focus is on the structural chrome of the NDV: the three-panel layout container, header bar, tab navigation, panel dividers with resize handles, scroll containers, and depth hierarchy. Form inputs, CodeMirror editor, and individual field styling are explicitly out of scope and will be addressed in Session 05.

By the end of this session, the NDV will present a cohesive Obsidian Forge appearance with proper elevated surfaces, subtle panel shadows creating depth hierarchy, forge-styled tab navigation, and smooth panel animations - all while maintaining full functionality and responsive behavior.

---

## 2. Objectives

1. Apply Obsidian Forge elevated surface styling to NDV container and three-panel layout
2. Theme NDV header with forge aesthetic (background, node icon treatment, close button)
3. Style tab navigation to match forge design patterns established in Phase 01
4. Implement subtle panel shadow hierarchy creating visual depth across Input/Main/Output panels
5. Style panel dividers and drag handles with clear visual affordance

---

## 3. Prerequisites

### Required Sessions
- [x] `phase02-session03-canvas-connections-interactions` - Canvas theming complete
- [x] `phase01-session01-design-system-form-components` - Tab component styled
- [x] `phase01-session04-design-system-display-components` - Panel/card components themed

### Required Tools/Knowledge
- Vue 3 component styling with scoped SCSS
- CSS custom properties (design tokens) architecture
- Element Plus ElDialog component override patterns
- CSS transitions for smooth animations

### Environment Requirements
- pnpm dev:fe running for live testing (port 8080)
- Storybook available for component verification (port 6006)
- Both light and dark mode testing capability

---

## 4. Scope

### In Scope (MVP)
- NDV dialog container background and overlay styling
- NDV header bar (background, node icon, title, docs link, close button)
- Three-panel layout borders and shadows (Input, Main, Output)
- Tab navigation styling within NodeSettingsTabs
- Panel divider/resize handle styling (PanelDragButton, N8nResizeWrapper)
- Main panel scroll container styling
- Panel collapse/expand transition polish
- NDV "Back to Canvas" link styling
- Responsive behavior at breakpoints
- Dark mode compatibility for all changes

### Out of Scope (Deferred)
- Form input components within panels - *Reason: Session 05 scope*
- CodeMirror code editor styling - *Reason: Session 05 scope*
- Individual parameter field styling - *Reason: Session 05 scope*
- RunData table/JSON view styling - *Reason: Session 05 scope*

---

## 5. Technical Approach

### Architecture
The NDV uses Element Plus ElDialog as its base container. The three-panel layout is managed by `NDVDraggablePanels.vue` which positions Input (left), Main (center), and Output (right) panels using absolute positioning with calculated relative widths. The main panel uses `N8nResizeWrapper` for resize handles.

Styling will be applied through:
1. Scoped SCSS in Vue components for component-specific styles
2. CSS custom properties (tokens) for themeable values
3. Global NDV-specific token definitions in `_tokens.scss`

### Design Patterns
- **Token-First Styling**: All colors, shadows, and spacing use CSS variables
- **Dark Mode Support**: Use existing `body[data-theme='dark']` pattern
- **Specificity Management**: Use scoped styles to avoid Element Plus conflicts

### Technology Stack
- Vue 3.5+ with Composition API
- SCSS with CSS custom properties
- Element Plus 2.4.3 (ElDialog)
- N8nResizeWrapper from design-system

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All changes modify existing files | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_tokens.scss` | Add NDV-specific tokens (--ndv--*) | ~25 |
| `design-system/src/css/_tokens.dark.scss` | Dark mode NDV tokens | ~15 |
| `editor-ui/src/features/ndv/shared/views/NodeDetailsView.vue` | Container, overlay, back-to-canvas styling | ~40 |
| `editor-ui/src/features/ndv/panel/components/NDVDraggablePanels.vue` | Panel shadows, borders, layout chrome | ~50 |
| `editor-ui/src/features/ndv/panel/components/NDVHeader.vue` | Header background, icon, close button | ~30 |
| `editor-ui/src/features/ndv/settings/components/NodeSettings.vue` | Main panel background, scrollbar styling | ~35 |
| `editor-ui/src/features/ndv/settings/components/NodeSettingsTabs.vue` | Tab container styling (if needed) | ~15 |
| `editor-ui/src/features/ndv/panel/components/PanelDragButton.vue` | Drag handle forge styling | ~25 |
| `editor-ui/src/features/ndv/panel/components/InputPanel.vue` | Panel header/container styling | ~20 |
| `editor-ui/src/features/ndv/panel/components/OutputPanel.vue` | Panel header/container styling | ~20 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] NDV container displays forge elevated surface background
- [ ] Header shows proper forge styling with node icon and controls
- [ ] Tab navigation matches established forge aesthetic
- [ ] Panel dividers are subtle but visible with clear drag affordance
- [ ] Resize handles respond visually on hover/drag
- [ ] Panels transition smoothly during resize operations
- [ ] Back to canvas link styled with forge colors

### Testing Requirements
- [ ] Visual inspection in light mode complete
- [ ] Visual inspection in dark mode complete
- [ ] Panel resize functionality preserved
- [ ] Tab switching functionality preserved
- [ ] Responsive behavior tested at 1024px, 1440px, 1920px widths
- [ ] No console errors introduced

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] Code follows project conventions (CONVENTIONS.md)
- [ ] No hardcoded color values - all use tokens
- [ ] pnpm build completes without errors

---

## 8. Implementation Notes

### Key Considerations
- NDV uses Element Plus ElDialog - may need `!important` for some overrides
- Three-panel layout uses computed inline styles for positioning - don't interfere with these
- Panel borders currently use `var(--border)` - preserve this pattern
- Existing shadow uses hardcoded `rgba(50, 61, 85, 0.10)` - should tokenize

### Potential Challenges
- **Element Plus specificity**: ElDialog styles may resist overrides; use targeted selectors
- **Responsive behavior**: Panel width calculations are complex; test thoroughly after styling
- **Shadow layering**: Creating proper depth hierarchy across three overlapping panels requires careful shadow tuning
- **Tab styling**: N8nTabs component may already be styled from Phase 01; verify before modifying

### Relevant Considerations
- [P00] **Element Plus specificity battles**: Some components may need `!important` overrides - check dialog/drawer components
- [P00] **Dark mode via data-theme attribute**: Both light and dark modes must render correctly. Test with `body[data-theme='dark']`
- [P00] **NDV three-panel layout responsive**: Uses CSS variables and percentage-based sizing. Token changes cascade properly through panels
- [P00] **Dual token naming convention**: Old format `--color-primary` and new format `--color--primary` both work via CSS fallbacks

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- No unit test changes expected - this is pure styling

### Integration Tests
- Existing NDV E2E tests should pass without modification

### Manual Testing
- Open any node to trigger NDV
- Verify header styling (icon, title, docs link, close button)
- Switch between tabs (Parameters, Settings, Docs)
- Resize main panel using drag handles
- Verify Input and Output panels maintain styling during resize
- Test panel animations during collapse/expand
- Toggle dark mode and verify all elements adapt
- Test at various viewport widths

### Edge Cases
- NDV with very long node names (text overflow handling)
- NDV for nodes without input connections (inputless variant)
- NDV during workflow execution (loading states)
- NDV with trigger nodes (different panel configuration)

---

## 10. Dependencies

### External Libraries
- Element Plus: 2.4.3 (ElDialog)
- Vue Flow: 1.48.0 (not directly used but context)
- N8nResizeWrapper: design-system internal

### Other Sessions
- **Depends on**: phase02-session03 (canvas complete), phase01-session01 (tabs styled)
- **Depended by**: phase02-session05 (NDV forms/code editor)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

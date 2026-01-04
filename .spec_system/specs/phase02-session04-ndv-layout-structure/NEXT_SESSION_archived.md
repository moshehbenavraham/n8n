# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-04
**Project State**: Phase 02 - Application Features - Canvas, NDV, Modals
**Completed Sessions**: 15

---

## Recommended Next Session

**Session ID**: `phase02-session04-ndv-layout-structure`
**Session Name**: NDV Layout and Structure
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 03 completed (canvas connections and interactions)
- [x] Design-system panel/card components themed (Phase 01)
- [x] Tab component from design-system styled (Phase 01)

### Dependencies
- **Builds on**: Phase 02 Sessions 01-03 (Canvas foundation, node styling, connections)
- **Enables**: Session 05 (NDV Forms and Code Editor), Session 06 (Modal and Dialog System)

### Project Progression
The canvas work is complete - users can now see the Obsidian Forge theme on the workflow canvas, nodes, and connections. The natural next step is the Node Details View (NDV), which appears when users click on a node to configure it. The NDV is where users spend significant time editing workflow logic, making it the second-highest visibility feature after the canvas itself.

---

## Session Overview

### Objective
Apply Obsidian Forge styling to the Node Details View (NDV) three-panel layout structure, including the header, panel dividers, tab navigation, and overall container chrome.

### Key Deliverables
1. Styled NDV container with forge elevated background
2. Themed NDV header with node icon and controls
3. Styled tab navigation matching forge aesthetic
4. Panel dividers with drag handles
5. Consistent depth hierarchy across three panels
6. Panel slide-in animation implementation

### Scope Summary
- **In Scope (MVP)**: NDV container, header, three-panel dividers, tab navigation, panel headers, scroll containers, collapse/expand animations, footer bar, responsive behavior, shadow hierarchy
- **Out of Scope**: Form inputs (Session 05), CodeMirror editor (Session 05), individual field styling (Session 05)

---

## Technical Considerations

### Technologies/Patterns
- Vue 3 component styling with scoped SCSS
- CSS custom properties (design tokens) for theming
- CSS Grid/Flexbox for three-panel layout
- CSS transitions for panel animations
- Resize observer for panel dividers

### Potential Challenges
- NDV responsive behavior at different breakpoints may need careful testing
- Panel resize handles need clear visual affordance without being visually heavy
- Three-panel depth hierarchy requires careful shadow layering
- Tab navigation active state needs clear indication within forge aesthetic

### Relevant Considerations
- [P00] **NDV three-panel layout responsive**: Uses CSS variables and percentage-based sizing. Token changes cascade properly through panels.
- [P00] **Element Plus specificity battles**: Some components may need `!important` overrides - check dialog/drawer components if used in NDV.
- [P00] **Dark mode via data-theme attribute**: Both light and dark modes must render correctly. Test with `body[data-theme='dark']`.

---

## Alternative Sessions

If this session is blocked:
1. **phase02-session06-modal-dialog-system** - Independent from NDV, can be done in parallel if team resources allow
2. **phase02-session07-overlay-components** - Tooltips, popovers, and notifications are also independent

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

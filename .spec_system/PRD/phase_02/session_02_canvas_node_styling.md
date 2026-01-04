# Session 02: Canvas Node Styling

**Session ID**: `phase02-session02-canvas-node-styling`
**Status**: Not Started
**Estimated Tasks**: ~22
**Estimated Duration**: 2-4 hours

---

## Objective

Apply Obsidian Forge styling to all canvas node components, including node containers, icons, labels, status indicators, and interactive states (hover, selected, running, error).

---

## Scope

### In Scope (MVP)
- Node container background using `--canvas-node--color--background`
- Node border styling with `--canvas-node--border-color`
- Node icon coloring using 11 `--node--icon--color--*` tokens
- Node title/label typography
- Hover state with forge lift effect (translateY, shadow deepen)
- Selected state with amber glow ring (`--shadow--glow-sm`)
- Running state with ember-pulse animation
- Error/warning state indicators
- Disabled node appearance
- Node resize handles styling
- Trigger and output port styling

### Out of Scope
- Connection lines between nodes (Session 03)
- Canvas background/grid (Session 01)
- Node configuration panels (NDV - Session 04-05)

---

## Prerequisites

- [ ] Session 01 completed (canvas foundation)
- [ ] Node token variables defined
- [ ] Ember-pulse keyframe animation available

---

## Deliverables

1. Styled node containers with forge elevated background
2. Themed node icons with category-appropriate colors
3. Interactive state implementations (hover, selected, running, error)
4. Styled input/output ports and handles
5. Node resize handle styling
6. Dark mode equivalents for all node states

---

## Success Criteria

- [ ] Nodes display elevated forge aesthetic with proper shadows
- [ ] Hover lifts node with deepened shadow
- [ ] Selected nodes show amber glow border
- [ ] Running nodes pulse with ember animation
- [ ] Error nodes display ember-red indicators
- [ ] All 11 node icon color categories render correctly
- [ ] Ports and handles match overall node styling
- [ ] Both light and dark modes render correctly

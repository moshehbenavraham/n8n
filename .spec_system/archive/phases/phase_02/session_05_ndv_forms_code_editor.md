# Session 05: NDV Forms and Code Editor

**Session ID**: `phase02-session05-ndv-forms-code-editor`
**Status**: Not Started
**Estimated Tasks**: ~22
**Estimated Duration**: 2-4 hours

---

## Objective

Style the NDV form components, field layouts, and CodeMirror code editor with the Obsidian Forge theme, ensuring the expression editor and all input fields provide a cohesive editing experience.

---

## Scope

### In Scope (MVP)
- NDV form field layouts and spacing
- Field label styling within NDV context
- Input field states (focus, error, disabled) in NDV
- Expression editor toggle button
- CodeMirror theme in `theme.ts`
- Syntax highlighting colors for expressions
- CodeMirror caret and selection colors
- Code editor gutter styling (line numbers)
- Autocomplete dropdown styling
- Expression result preview styling
- Field description/help text styling
- Required field indicators

### Out of Scope
- NDV layout structure (Session 04)
- Modal dialogs opened from NDV (Session 06)
- Canvas node styling (Session 02)

---

## Prerequisites

- [ ] Session 04 completed (NDV layout)
- [ ] Design-system form components themed (Phase 01)
- [ ] CodeMirror theme token references identified

---

## Deliverables

1. Styled NDV form fields with proper spacing
2. CodeMirror theme configuration with forge colors
3. Expression editor toggle and mode indicator
4. Autocomplete dropdown with forge styling
5. Field validation states (error, warning)
6. Help text and description formatting

---

## Success Criteria

- [ ] Form fields within NDV match design-system styling
- [ ] CodeMirror displays forge-appropriate syntax colors
- [ ] Caret uses amber accent color
- [ ] Selection highlight uses forge selection colors
- [ ] Autocomplete dropdown matches forge aesthetic
- [ ] Expression mode toggle is clearly indicated
- [ ] Field errors display ember-red styling
- [ ] Line numbers/gutter styled appropriately
- [ ] Both light and dark modes render correctly
- [ ] Expression editor functionality preserved (n8nLang, n8nAutocompletion plugins)

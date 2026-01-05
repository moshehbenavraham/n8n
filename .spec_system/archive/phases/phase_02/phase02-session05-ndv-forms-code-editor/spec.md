# Session Specification

**Session ID**: `phase02-session05-ndv-forms-code-editor`
**Phase**: 02 - Application Features - Canvas, NDV, Modals
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session focuses on styling the NDV (Node Details View) form components, field layouts, and CodeMirror code editor with the Obsidian Forge theme. The goal is to ensure that the expression editor, input fields, and autocomplete dropdown provide a cohesive editing experience that matches the forge aesthetic established in previous phases.

With the NDV layout structure completed in Session 04 (panels, header, drag handles), this session addresses the content within those panels - specifically the form inputs, expression editor toggle, and CodeMirror theme configuration. This is a critical session as it directly affects the user's editing experience when configuring nodes.

The session will update CSS token values for expression editor resolvables, code caret/selection colors, and autocomplete dropdown styling. The CodeMirror theme in `theme.ts` already references CSS variables, so updates will cascade through the existing token architecture. Careful attention must be paid to preserving the n8n custom plugins (n8nLang, n8nAutocompletion) functionality while theming.

---

## 2. Objectives

1. Update expression editor token values to use Obsidian Forge color palette (valid/invalid/pending resolvables)
2. Configure CodeMirror caret and selection colors to match forge amber accent
3. Style autocomplete dropdown with forge aesthetic (background, selection, borders)
4. Ensure form field layouts within NDV use consistent forge styling
5. Verify both light and dark modes render correctly with all theme changes

---

## 3. Prerequisites

### Required Sessions
- [x] `phase02-session04-ndv-layout-structure` - Provides styled NDV panels, header, resize handles
- [x] `phase01-session01-design-system-form-components` - Form components themed in design system
- [x] `phase00-session01-color-system-foundation` - Color primitives established

### Required Tools/Knowledge
- Understanding of CodeMirror 6 theme architecture
- Knowledge of CSS token cascade (primitives > semantic > component)
- Familiarity with n8n expression editor plugins

### Environment Requirements
- Development server: `pnpm dev:fe` (port 8080)
- Storybook: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006)
- Node with expression editor for manual testing

---

## 4. Scope

### In Scope (MVP)
- Expression editor resolvable token colors (valid/invalid/pending)
- Expression editor background token
- CodeMirror caret color token (`--code--caret--color`)
- CodeMirror selection color tokens
- CodeMirror gutter styling tokens
- Autocomplete dropdown styling tokens
- Autocomplete infobox background and border tokens
- Expression editor modal background token

### Out of Scope (Deferred)
- NDV layout structure - *Reason: Completed in Session 04*
- Modal dialog system - *Reason: Session 06 scope*
- Canvas node styling - *Reason: Completed in Session 02*
- Syntax highlighting colors - *Reason: Keep GitHub-standard colors per CONSIDERATIONS.md*
- Form field component structure - *Reason: Design system handled in Phase 01*

---

## 5. Technical Approach

### Architecture
Token updates cascade through the established hierarchy:
1. `_primitives.scss` - Obsidian Forge color primitives (already defined)
2. `_tokens.scss` - Light mode semantic mappings (update expression/code/autocomplete tokens)
3. `_tokens.dark.scss` - Dark mode overrides (update corresponding tokens)
4. Component styles consume tokens via CSS variables

The CodeMirror theme in `theme.ts` already references CSS variables, so token updates will cascade automatically.

### Design Patterns
- **Token-based theming**: All color changes via CSS custom properties
- **Mode-aware styling**: Light/dark mode handled via `body[data-theme='dark']` selector
- **Backwards compatibility**: Maintain fallback patterns for old variable names

### Technology Stack
- SCSS with CSS custom properties
- CodeMirror 6 EditorView.theme()
- Vue 3 scoped styles where applicable

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All changes are modifications to existing files | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_tokens.scss` | Update expression-editor, autocomplete, and code token values (lines 381-431) | ~25 |
| `design-system/src/css/_tokens.dark.scss` | Update corresponding dark mode tokens (lines 210-262) | ~25 |
| `editor-ui/src/app/css/plugins/_codemirror.scss` | Verify/adjust autocomplete dropdown forge styling | ~10 |
| `editor-ui/src/features/ndv/parameters/components/ExpressionEditorModal/theme.ts` | Verify token references, add any missing forge properties | ~5 |
| `editor-ui/src/features/shared/editors/plugins/codemirror/resolvableHighlighter.ts` | Verify resolvable theme uses correct token references | ~0 (verify only) |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Expression resolvables display forge-appropriate colors (valid=green, invalid=ember-red, pending=neutral)
- [ ] CodeMirror caret uses amber/gold accent color from forge palette
- [ ] Selection highlight uses forge-appropriate color with suitable alpha
- [ ] Autocomplete dropdown background matches NDV panel background
- [ ] Selected autocomplete item uses forge secondary color
- [ ] Expression editor focus state uses forge secondary border color
- [ ] All input fields within NDV maintain consistent styling

### Testing Requirements
- [ ] Manual testing in both light and dark modes
- [ ] Test expression editor with valid, invalid, and pending resolvables
- [ ] Test autocomplete dropdown positioning and styling
- [ ] Verify CodeMirror gutter line numbers visible and styled
- [ ] Screenshot comparison before/after for visual changes

### Quality Gates
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] No new !important overrides introduced
- [ ] Token naming follows kebab-case with double-dash prefix
- [ ] Expression editor functionality preserved (n8nLang, n8nAutocompletion)

---

## 8. Implementation Notes

### Key Considerations
- CodeMirror theme in `theme.ts` already references CSS variables - token updates cascade automatically
- Expression resolvable highlighting handled by `resolvableHighlighter.ts` - verify it consumes correct tokens
- Autocomplete styling in `_codemirror.scss` already uses tokens - verify values are appropriate
- Keep GitHub-standard syntax highlighting colors (lines 292-305 in `_tokens.scss`) unchanged

### Potential Challenges
- **Expression editor plugin compatibility**: Ensure theme changes don't affect n8nLang/n8nAutocompletion behavior - mitigate by testing expression functionality after each token change
- **Selection color visibility**: Selection color must contrast with both valid and invalid resolvable backgrounds - test with expressions containing both states
- **Dark mode contrast**: Ensure resolvable colors have sufficient contrast in dark mode - use alpha-based backgrounds for dark mode

### Relevant Considerations
- [P00] **CodeMirror 6 custom plugins**: NDV uses custom n8n plugins. Theme changes must preserve expression editor functionality - testing after each change.
- [P00] **Expression editor theme uses tokens**: CodeMirror theme in `theme.ts` references `--input--border-color`, `--code--caret--color`, `--color--secondary` - verify these are updated to forge values.
- [P00] **Don't tokenize code syntax highlighting colors**: Lines 292-305 in `_tokens.scss` use GitHub-standard colors - keep as-is per project conventions.
- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']` - ensure all dark mode token updates use this selector.

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- None required - this is a styling/theming session

### Integration Tests
- None required - no functional changes

### Manual Testing
1. Open NDV for any node with expression support
2. Toggle expression mode and verify toggle button styling
3. Enter valid expression (e.g., `{{ $json.name }}`) - verify green resolvable styling
4. Enter invalid expression (e.g., `{{ undefined.foo }}`) - verify ember-red styling
5. Observe cursor/caret color while typing
6. Select text and verify selection highlight color
7. Trigger autocomplete dropdown (type `$`) and verify styling
8. Navigate autocomplete items and verify selection highlight
9. Check infobox tooltip styling
10. Toggle dark mode and repeat all tests

### Edge Cases
- Expression with mixed valid/invalid segments
- Long expressions requiring horizontal scroll
- Autocomplete with many items (scrolling behavior)
- Expression editor modal (full-screen mode)
- Read-only expression display

---

## 10. Dependencies

### External Libraries
- `@codemirror/view`: EditorView for theme definition
- `@codemirror/language`: syntaxHighlighting, HighlightStyle
- `@lezer/highlight`: tags for syntax highlighting

### Other Sessions
- **Depends on**: `phase02-session04-ndv-layout-structure`, `phase01-session01-design-system-form-components`
- **Depended by**: `phase02-session06-modal-dialog-system` (modals opened from NDV)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

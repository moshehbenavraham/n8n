# Session Specification

**Session ID**: `phase04-session03-component-typography-updates`
**Phase**: 04 - Typography Evolution
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session systematically audits the entire n8n codebase to identify and remediate hardcoded font-family references, replacing old font references (InterVariable, CommitMono) with CSS custom property tokens. With the Outfit Variable and JetBrains Mono Variable fonts installed (Session 01) and all typography tokens aligned to PRD specification (Session 02), this session ensures the new fonts cascade correctly through every UI component.

The work involves searching SCSS files and Vue component styles for hardcoded font declarations, verifying the typography hierarchy renders correctly across headings, body text, and monospace elements, and validating complex components like the workflow canvas, Node Details View (NDV), and modal dialogs. This is a critical quality gate before the final Typography QA session.

By completing this session, we ensure consistent typography across the 86 design system components and all editor-ui features, with zero references to deprecated InterVariable or CommitMono fonts remaining in the codebase.

---

## 2. Objectives

1. Eliminate all hardcoded `font-family` references to InterVariable and CommitMono, replacing with `var(--font-family)` and `var(--font-family--monospace)` tokens
2. Verify heading typography (H1-H6, Display) renders correctly with Outfit Variable at correct weights
3. Validate monospace elements (code blocks, expressions, JSON display) use JetBrains Mono Variable
4. Confirm form element typography (inputs, labels, buttons, dropdowns) maintains visual consistency
5. Test complex component typography (Canvas nodes, NDV panels, Modals) for correct font rendering

---

## 3. Prerequisites

### Required Sessions
- [x] `phase04-session01-font-selection-asset-preparation` - Outfit Variable and JetBrains Mono Variable fonts installed in assets/fonts
- [x] `phase04-session02-typography-token-alignment` - Typography tokens corrected to PRD spec (weights, line-heights, letter-spacing)

### Required Tools/Knowledge
- SCSS/CSS custom property patterns
- Vue component styling with scoped styles
- Grep/search tools for codebase auditing
- Storybook for component verification (port 6006)

### Environment Requirements
- pnpm workspaces functional
- Storybook builds and runs (`cd packages/frontend/@n8n/design-system && pnpm storybook`)
- Font files present in `design-system/assets/fonts/`

---

## 4. Scope

### In Scope (MVP)
- Audit all SCSS files in design-system for hardcoded font-family
- Audit all Vue component style blocks for hardcoded font-family
- Replace InterVariable/CommitMono references with token variables
- Verify heading hierarchy with Outfit (H1-H6, Display sizes)
- Verify body text rendering with Outfit (Body L/M/S, Labels)
- Verify code blocks and inline code with JetBrains Mono
- Test form element typography (inputs, buttons, selects, textareas)
- Validate Canvas node label typography
- Validate NDV panel typography
- Validate Modal/Dialog typography
- Storybook visual verification of affected components

### Out of Scope (Deferred)
- Cross-browser typography testing - *Reason: Session 04 (QA) scope*
- Typography performance audit - *Reason: Session 04 (QA) scope*
- Documentation updates - *Reason: Session 04 (QA) scope*
- Font loading optimization - *Reason: Future optimization work*

---

## 5. Technical Approach

### Architecture
Typography flows through a cascade: font files loaded via `@font-face` in `fonts.scss` -> primitives in `_primitives.scss` -> tokens in `_tokens.scss` and `_tokens.dark.scss` -> consumed by components via CSS custom properties. This session verifies the final link: ensuring all components reference tokens rather than hardcoded values.

### Design Patterns
- **Token Reference Pattern**: All font-family declarations use `var(--font-family)` or `var(--font-family--monospace)`
- **Fallback Pattern**: Tokens use fallback chains like `var(--font-family, sans-serif)` for resilience
- **Scoped Styles**: Vue components use `<style scoped>` with token consumption

### Technology Stack
- SCSS (design-system and editor-ui styles)
- Vue 3 Composition API (component styles)
- CSS Custom Properties (token system)
- Storybook 9 (visual verification)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `TYPOGRAPHY_AUDIT_REPORT.md` | Document all font-family findings and remediations | ~100 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| Various SCSS files | Replace hardcoded font-family with tokens | ~20-50 |
| Various Vue components | Replace hardcoded font-family with tokens | ~20-50 |
| Element Plus overrides (if needed) | Ensure overrides use tokens | ~10-20 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Zero grep results for `font-family:.*InterVariable`
- [ ] Zero grep results for `font-family:.*CommitMono`
- [ ] All `font-family` declarations use `var(--font-family)` or `var(--font-family--monospace)` pattern
- [ ] Heading components render with Outfit at correct weights (600 for H1-H2, 500 for H3)
- [ ] Code blocks render with JetBrains Mono
- [ ] Form inputs, buttons, and labels render with Outfit

### Testing Requirements
- [ ] Storybook typography stories render correctly
- [ ] Canvas node labels display with new fonts
- [ ] NDV code editor uses JetBrains Mono
- [ ] Modal titles and content render correctly
- [ ] Manual verification of heading hierarchy in browser

### Quality Gates
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] Code follows project conventions (token usage, SCSS patterns)
- [ ] No new hardcoded font values introduced
- [ ] Both light and dark modes tested

---

## 8. Implementation Notes

### Key Considerations
- Font-family audit should check both SCSS files (`.scss`) and Vue style blocks (`.vue`)
- Element Plus components may have font declarations in override files in `design-system/src/css/`
- Canvas node components may use inline styles for positioning but fonts should use tokens
- Expression editor (CodeMirror theme in `theme.ts`) references tokens - verify cascade

### Potential Challenges
- **Element Plus specificity**: Some Element Plus components resist styling; may need `!important` in override files
- **Canvas inline styles**: Canvas node labels may have inline font declarations for positioning; verify fonts cascade
- **NDV code editor**: CodeMirror theme uses custom token references; ensure JetBrains Mono applies
- **V2 component variants**: 10 V2 components exist; verify both V1 and V2 variants render correctly

### Relevant Considerations
- [P00] **V2 component migration in progress**: Test both V1 and V2 variants (N8nSelect2, N8nCheckbox2, etc.) for font rendering
- [P00] **Centralized Element Plus overrides**: Modify `design-system/src/css/` files, not component-level styles
- [P00] **Expression editor theme uses tokens**: CodeMirror theme in `theme.ts` should cascade JetBrains Mono correctly
- [P00] **Canvas inline styles for zoom/position**: Node positioning uses inline styles but fonts should come from tokens

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- N/A for CSS-only changes (visual verification via Storybook)

### Integration Tests
- N/A for this session (visual changes only)

### Manual Testing
- Verify heading hierarchy in Storybook typography stories
- Check code block rendering in CodeEditor stories
- Test form components (Input, Button, Select, Checkbox) in Storybook
- Load full editor-ui and inspect Canvas node labels
- Open NDV and verify code editor font
- Open modal dialogs and verify title/content typography

### Edge Cases
- Empty state messages should use correct typography
- Error messages and validation text
- Tooltip content typography
- Dropdown menu item text
- Table header and cell typography
- Notification/toast message text

---

## 10. Dependencies

### External Libraries
- Outfit Variable: ~85KB (installed)
- JetBrains Mono Variable: (installed)
- Element Plus 2.4.3: Component library with font declarations
- CodeMirror 6: NDV code editor

### Other Sessions
- **Depends on**: `phase04-session01-font-selection-asset-preparation`, `phase04-session02-typography-token-alignment`
- **Depended by**: `phase04-session04-typography-qa-documentation`

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

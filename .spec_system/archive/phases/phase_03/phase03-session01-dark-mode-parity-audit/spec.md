# Session Specification

**Session ID**: `phase03-session01-dark-mode-parity-audit`
**Phase**: 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session marks the beginning of Phase 03 (Polish) and focuses on systematically auditing dark mode visual parity across all themed components in the Obsidian Forge design system. After 19 sessions that established the theme foundation, component library, and application features, this audit validates that all work renders correctly when users toggle to dark mode.

The audit will systematically compare light vs dark mode appearance for every major UI area, verify WCAG AA contrast ratios, check shadow rendering, and validate that the signature amber glow effects appear correctly against obsidian backgrounds. This is critical quality assurance that must pass before subsequent polish sessions can proceed.

Dark mode uses the `body[data-theme='dark']` selector with overrides in `_tokens.dark.scss`. This session will identify any missing overrides, incorrect color mappings, or visual inconsistencies that would degrade the user experience in dark mode.

---

## 2. Objectives

1. **Complete dark mode visual audit** - Systematically verify all UI areas render correctly in dark mode with no visual regressions
2. **Ensure WCAG AA compliance** - Verify 4.5:1 contrast ratio for normal text and 3:1 for large text in dark mode
3. **Fix token gaps** - Identify and add any missing dark mode token overrides to `_tokens.dark.scss`
4. **Validate signature effects** - Confirm amber glow, colored shadows, and vignette effects work on dark backgrounds

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01` through `phase00-session06` - Foundation tokens and primitives
- [x] `phase01-session01` through `phase01-session06` - Design system components themed
- [x] `phase02-session01` through `phase02-session07` - Application features themed

### Required Tools/Knowledge
- Browser DevTools for inspecting computed styles
- WCAG contrast ratio checker (WebAIM or browser extension)
- Understanding of CSS custom properties and dark mode selectors

### Environment Requirements
- Development environment running (`pnpm dev:fe` on port 8080)
- Storybook operational (`pnpm storybook` on port 6006)
- Theme toggle accessible in the application

---

## 4. Scope

### In Scope (MVP)
- Systematic light vs dark mode comparison for all design-system components
- Audit `_tokens.dark.scss` for missing or incorrect overrides
- Verify WCAG AA contrast ratios for all text/background combinations
- Check shadow rendering (colored shadows should be visible but not harsh)
- Validate amber glow effects on dark backgrounds
- Test canvas, NDV, modal, and overlay components in dark mode
- Document and fix all visual inconsistencies found
- Verify theme toggle works without visual glitches

### Out of Scope (Deferred)
- Cross-browser testing - *Reason: Dedicated Session 04*
- Performance testing - *Reason: Dedicated Session 05*
- Component edge cases unrelated to dark mode - *Reason: Session 02*
- Accessibility testing beyond contrast ratios - *Reason: Future enhancement*

---

## 5. Technical Approach

### Architecture
Dark mode is implemented via the `body[data-theme='dark']` attribute. The token cascade flows:
1. `_primitives.scss` - Raw HSL color values (unchanged between modes)
2. `_tokens.scss` - Semantic token mappings for light mode
3. `_tokens.dark.scss` - Dark mode overrides scoped to `body[data-theme='dark']`
4. `common/var.scss` - SCSS variables that consume tokens
5. Components - Consume tokens via `var(--token-name)`

### Design Patterns
- **Token Override Pattern**: Dark mode only overrides tokens that differ from light mode
- **Fallback Pattern**: `var(--color--primary, var(--fallback))` ensures compatibility
- **Semantic Tokens**: Components use semantic names (`--color--text--base`) not primitives

### Technology Stack
- SCSS with CSS custom properties
- Vue 3 with scoped styles
- Element Plus with CSS variable overrides
- Tailwind CSS with `dark:` variants (configured for `[data-theme='dark']`)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/specs/phase03-session01-dark-mode-parity-audit/AUDIT_CHECKLIST.md` | Pass/fail checklist for each component area | ~150 |
| `.spec_system/specs/phase03-session01-dark-mode-parity-audit/CONTRAST_REPORT.md` | WCAG contrast verification results | ~80 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss` | Add missing dark mode overrides | ~20-50 |
| Component-specific SCSS (as needed) | Fix dark mode styling issues | ~10-30 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] All 86 design-system components render correctly in dark mode
- [ ] Canvas background, dots, and vignette display properly
- [ ] Node styling (icons, borders, backgrounds) correct in dark mode
- [ ] NDV three-panel layout displays correctly
- [ ] Modals and dialogs have proper dark backgrounds and borders
- [ ] Overlays (dropdowns, tooltips, notifications) appear correctly
- [ ] Expression editor CodeMirror theme works in dark mode

### Testing Requirements
- [ ] Manual visual comparison completed for all major UI areas
- [ ] Storybook stories reviewed in dark mode
- [ ] Theme toggle tested repeatedly without glitches
- [ ] Contrast ratios measured for critical text elements

### Quality Gates
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] No `!important` added unless absolutely necessary
- [ ] Code follows project conventions (CONVENTIONS.md)

---

## 8. Implementation Notes

### Key Considerations
- Dark mode selector is `body[data-theme='dark']` - must match exactly
- Tailwind uses the same selector in config - changes cascade to utility classes
- Element Plus components may require specificity workarounds
- ~615 hardcoded colors are intentionally kept (syntax highlighting, test data)

### Potential Challenges
- **Shadow rendering**: Colored shadows may appear too bright on dark backgrounds; may need opacity adjustment
- **Amber glow intensity**: The signature glow may need tuning for obsidian backgrounds
- **Element Plus specificity**: 8 files already use `!important` - dark mode fixes should avoid adding more
- **Canvas vignette**: Gradient effects may need dark-specific values

### Relevant Considerations
- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']`. Both `_tokens.dark.scss` and Tailwind config use this selector - must maintain consistency.
- [P00] **~615 hardcoded colors intentionally kept**: Syntax highlighting uses GitHub-standard colors - do not attempt to theme these for dark mode.
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides - may surface dark mode issues requiring careful debugging.
- [P00] **Dual token naming convention**: Old format `--color-primary` and new format `--color--primary` both work - ensure dark mode overrides cover both patterns.

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- No new unit tests required for this audit session
- Existing component tests should pass unchanged

### Integration Tests
- Verify theme toggle mechanism works via existing tests

### Manual Testing
- Toggle between light/dark mode on each major screen
- Verify all Storybook stories in dark mode
- Test canvas with complex workflows in dark mode
- Test NDV with various node types in dark mode
- Test all modal types (settings, credentials, workflow sharing)
- Test notifications, tooltips, and dropdown menus

### Edge Cases
- Rapid theme toggling (no flashing or broken states)
- Components in hover/focus/active states in dark mode
- Disabled components in dark mode
- Loading states and skeletons in dark mode
- Empty states in dark mode

---

## 10. Dependencies

### External Libraries
- Element Plus 2.4.3 (patched for SSR)
- Vue Flow 1.48.0 (canvas)
- CodeMirror 6 (expression editor)

### Other Sessions
- **Depends on**: All Phase 00, 01, 02 sessions (completed)
- **Depended by**: Session 02 (Component Edge Cases), Session 03 (Token Cleanup)

---

## Audit Areas Checklist

### Foundation (Phase 00)
- [ ] Color primitives render correctly
- [ ] Typography tokens apply properly
- [ ] Spacing tokens work as expected
- [ ] Motion/animation tokens function

### Design System (Phase 01)
- [ ] Form components (inputs, textareas, selects)
- [ ] Selection components (checkboxes, radios, switches)
- [ ] Action components (buttons, links, icons)
- [ ] Display components (cards, badges, tags)

### Application Features (Phase 02)
- [ ] Workflow canvas (background, grid, vignette)
- [ ] Node styling (icons, borders, backgrounds)
- [ ] Connections and handles
- [ ] NDV layout (header, panels, tabs)
- [ ] NDV forms and code editor
- [ ] Modal dialogs
- [ ] Overlay components

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

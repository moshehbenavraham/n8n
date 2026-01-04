# Session Specification

**Session ID**: `phase00-session05-hardcoded-color-remediation`
**Phase**: 00 - Foundation - Colors, Typography, Branding
**Status**: Not Started
**Created**: 2026-01-02

---

## 1. Session Overview

This session systematically remediates hardcoded color values across the n8n frontend codebase, replacing them with the Forge Metals design tokens established in Sessions 01-04. With the color system foundation, brand assets, Element Plus integration, and motion tokens now in place, the remaining task is to ensure consistent application of the Obsidian Forge theme by tokenizing high-visibility hardcoded colors.

The scope is carefully bounded: approximately 615 hardcoded colors have been identified as intentionally kept (syntax highlighting, test data, Element Plus widgets, accessibility calculations), and these must remain untouched. This session focuses on the remaining replaceable hardcoded colors, particularly in SCSS files, Vue components, and inline styles that should reference the token system.

Successful completion of this session enables Session 06 (Email Templates & Foundation Verification), which requires all foundational color work to be complete. This is the final blocking session before Phase 00 verification can proceed.

---

## 2. Objectives

1. Replace high-visibility hardcoded color values in SCSS files with Forge Metals semantic tokens
2. Normalize all short hex codes (~25 instances) to 6-character format for consistency
3. Tokenize critical inline styles in Vue components where feasible
4. Document all intentional exceptions with clear rationale for future maintainers
5. Create tracking inventory of remaining hardcoded colors for Phase 01+ remediation

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session01-color-system-foundation` - Provides Forge Metals primitives and semantic tokens
- [x] `phase00-session02-brand-identity-assets` - Provides brand color definitions
- [x] `phase00-session03-element-plus-token-integration` - Provides Element Plus override patterns
- [x] `phase00-session04-visual-atmosphere-motion` - Provides motion and atmosphere tokens

### Required Tools/Knowledge
- Understanding of CSS custom properties and token cascade pattern
- Familiarity with SCSS syntax and n8n design system structure
- Knowledge of which colors are intentionally hardcoded (per CONSIDERATIONS.md)

### Environment Requirements
- pnpm installed and dependencies synced
- Access to Storybook (port 6006) for visual verification
- Access to editor-ui dev server (port 8080) for integration testing

---

## 4. Scope

### In Scope (MVP)
- SCSS hardcoded colors in `design-system/src/css/` directory
- Vue component hardcoded colors in `design-system/src/components/`
- Editor UI hardcoded colors in `editor-ui/src/`
- Short hex code normalization (`#fff` -> `#ffffff`)
- Critical inline style tokenization where CSS variables can replace hardcoded values
- Documentation of intentional exceptions
- Tracking list creation for deferred remediations

### Out of Scope (Deferred)
- Syntax highlighting colors (lines 292-305 in `_tokens.scss`) - *Reason: GitHub-standard colors, industry convention*
- Test/fixture data color values - *Reason: Not rendered to users, test stability*
- Element Plus widget internals (color-picker, date-picker gradients) - *Reason: Third-party dependent*
- Accessibility calculation values (contrast ratios, luminance) - *Reason: Mathematical constants*
- Canvas inline styles for zoom/position - *Reason: Dynamic positioning, not themeable*

---

## 5. Technical Approach

### Architecture
The token replacement follows the established cascade pattern: Primitives -> Semantic Tokens -> Component Styles. Hardcoded color values will be replaced with `var(--token-name)` references, using the semantic token layer wherever a suitable mapping exists. For colors without semantic mappings, direct primitive references will be used with a comment indicating potential future semantic token creation.

### Design Patterns
- **Token Reference Pattern**: `color: #1a1a1a;` becomes `color: var(--color--text-primary);`
- **Hex Normalization Pattern**: `#fff` becomes `#ffffff` (6-character lowercase)
- **Fallback Pattern**: `var(--color--primary, var(--color-primary))` for backwards compatibility
- **Exception Documentation Pattern**: Inline comment explaining why value remains hardcoded

### Technology Stack
- SCSS 1.69+ (via dart-sass)
- CSS Custom Properties (CSS Variables)
- Vue 3.5+ with `<style lang="scss">`
- Existing design system token infrastructure

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/docs/hardcoded-color-exceptions.md` | Documentation of intentional exceptions | ~100 |
| `.spec_system/docs/hardcoded-color-inventory.md` | Tracking list of remaining hardcoded colors | ~150 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_base.scss` | Replace hardcoded colors with tokens | ~20 |
| `design-system/src/css/_tokens.scss` | Normalize short hex codes | ~15 |
| `design-system/src/css/common/var.scss` | Replace hardcoded colors with tokens | ~30 |
| `design-system/src/css/*.scss` (Element Plus overrides) | Tokenize remaining hardcoded values | ~100 |
| `design-system/src/components/**/*.vue` | Tokenize component hardcoded colors | ~50 |
| `editor-ui/src/**/*.vue` | Tokenize editor UI hardcoded colors | ~80 |
| `editor-ui/src/**/*.scss` | Tokenize editor UI stylesheets | ~40 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] All short hex codes in design-system/src/css/ normalized to 6-character format
- [ ] High-visibility SCSS hardcoded colors replaced with semantic tokens
- [ ] Vue component inline colors tokenized where feasible
- [ ] Exception documentation created with clear rationale for each category
- [ ] Inventory of remaining hardcoded colors created for future phases

### Testing Requirements
- [ ] Storybook visual regression: all 96 stories render correctly in light mode
- [ ] Storybook visual regression: all 96 stories render correctly in dark mode
- [ ] Editor UI manual testing: verify key workflows (canvas, NDV, credentials)
- [ ] No new lint errors introduced

### Quality Gates
- [ ] All files ASCII-encoded (0-127 character range only)
- [ ] Unix LF line endings throughout
- [ ] Code follows project conventions (CONVENTIONS.md)
- [ ] No broken token references (all `var(--token)` resolve to values)
- [ ] Both light and dark themes function correctly

---

## 8. Implementation Notes

### Key Considerations
- Search for hardcoded hex patterns: `#[0-9a-fA-F]{3,8}` and `rgb(a)?()` and `hsl(a)?()`
- Prioritize files by visibility impact: SCSS token files > Element Plus overrides > Vue components
- Preserve backwards compatibility with `--color-primary` (single-dash) format
- Test both V1 and V2 component variants after changes

### Potential Challenges
- **Distinguishing intentional vs replaceable hardcoded colors**: Review each instance against CONSIDERATIONS.md exceptions list
- **Element Plus specificity battles**: Some overrides use `!important` - test carefully after changes
- **Token naming decisions**: Some hardcoded colors may not have obvious semantic mapping - document decisions
- **Large scope (~615 intentional + unknown replaceable)**: Systematic file-by-file approach required

### Relevant Considerations
- [P00] **Short hex codes need normalization**: ~25 instances in design-system/src/css/ - core deliverable of this session
- [P00] **~615 hardcoded colors intentionally kept**: Must NOT tokenize test data, syntax highlighting, Element Plus widgets, accessibility calculations
- [P00] **Don't tokenize code syntax highlighting colors**: Lines 292-305 in `_tokens.scss` use GitHub-standard colors - skip these explicitly
- [P00] **Dual token naming convention**: Both `--color-primary` and `--color--primary` must work - use fallback pattern when adding new token references
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides - test thoroughly after modification

### ASCII Reminder
All output files must use ASCII-only characters (0-127). Verify no Unicode characters slip into SCSS comments or documentation.

---

## 9. Testing Strategy

### Unit Tests
- No new unit tests required (styling changes only)
- Verify existing component tests still pass

### Integration Tests
- Run Storybook and visually verify all 96 component stories
- Verify dark mode toggle works correctly across all stories

### Manual Testing
- Canvas: Verify node colors, edge colors, background rendering
- NDV: Verify three-panel layout, expression editor syntax highlighting unchanged
- Credentials modal: Verify form styling
- Settings pages: Verify overall theme consistency
- Run `pnpm build` to catch any CSS compilation errors

### Edge Cases
- Components using both old (`--color-primary`) and new (`--color--primary`) token formats
- V2 component variants (N8nSelect2, N8nCheckbox2, etc.)
- Elements with `!important` overrides
- Inline styles that can't be tokenized (canvas zoom/position)

---

## 10. Dependencies

### External Libraries
- Element Plus 2.4.3 (patched for SSR)
- Vue Flow 1.48.0 (canvas rendering)
- CodeMirror 6 (expression editor - syntax highlighting excluded from scope)

### Other Sessions
- **Depends on**: phase00-session01, phase00-session02, phase00-session03, phase00-session04
- **Depended by**: phase00-session06-email-templates-verification

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

# Session Specification

**Session ID**: `phase03-session03-token-color-cleanup`
**Phase**: 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session performs the final cleanup and normalization of the Obsidian Forge color system. With dark mode parity verified (Session 01) and V2 component edge cases addressed (Session 02), the codebase is ready for token normalization - the systematic conversion of short hex codes to 6-character format and verification of the entire token cascade.

The primary focus is normalizing approximately 25 instances of short hex codes (`#fff`, `#ccc`, `#f00`) found in the design-system CSS files. These inconsistencies, while functionally equivalent, reduce maintainability and make automated tooling less reliable. Additionally, this session documents the ~615 intentionally hardcoded colors (syntax highlighting, test data, accessibility calculations) to prevent future confusion about what should and should not be tokenized.

This cleanup is essential preparation for cross-browser testing (Session 04). A clean, consistent token system ensures that any browser-specific issues found during testing are genuine compatibility problems rather than artifacts of inconsistent color definitions. The session also verifies the dual token naming convention (`--color-primary` and `--color--primary`) continues to work correctly via CSS fallbacks.

---

## 2. Objectives

1. Normalize all short hex codes to 6-character format for consistency and tooling compatibility
2. Verify and document the backwards-compatible dual token naming convention
3. Audit and document all intentionally hardcoded colors with clear justifications
4. Identify and remove any orphaned or unused token definitions
5. Confirm token cascade integrity: Primitives > Semantic > Component

---

## 3. Prerequisites

### Required Sessions
- [x] `phase03-session01-dark-mode-parity-audit` - Dark mode visual parity verified
- [x] `phase03-session02-component-edge-cases` - V2 components and Element Plus edge cases resolved

### Required Tools/Knowledge
- Regex patterns for hex code detection (`#[0-9a-fA-F]{3}(?![0-9a-fA-F])`)
- Understanding of CSS custom property fallback patterns
- Familiarity with SCSS variable cascade

### Environment Requirements
- Storybook accessible at port 6006 for visual verification
- Design system source files accessible for editing

---

## 4. Scope

### In Scope (MVP)
- Normalize ~25 short hex codes to 6-character format in design-system/src/css/
- Verify dual token naming backwards compatibility (`--color-primary` / `--color--primary`)
- Audit token cascade: Primitives > Semantic > Component
- Document intentionally hardcoded colors inventory (~615 items)
- Identify and remove orphaned/unused tokens
- Create token usage audit report

### Out of Scope (Deferred)
- Syntax highlighting colors - *Reason: GitHub standard colors, industry convention*
- Test data color values - *Reason: Intentionally hardcoded for testing purposes*
- Element Plus widget internal colors - *Reason: Third-party library, cannot modify*
- Accessibility calculation colors - *Reason: Required for WCAG contrast calculations*
- Creating new tokens - *Reason: Focus is cleanup, not expansion*

---

## 5. Technical Approach

### Architecture
The cleanup follows the established token cascade architecture:

1. **Primitives** (`_primitives.scss`): Raw HSL color values with consistent 50-950 scale
2. **Semantic Tokens** (`_tokens.scss`): Map primitives to semantic meanings
3. **Dark Mode** (`_tokens.dark.scss`): Override tokens under `body[data-theme='dark']`
4. **Component Styles**: Consume semantic tokens, never primitives directly

### Design Patterns
- **CSS Fallback Pattern**: `var(--color--primary, var(--color-primary, #fallback))` ensures both old and new naming conventions work
- **Search-and-Replace**: Use regex to find short hex codes and expand to 6-char equivalents
- **Documentation as Code**: Hardcoded color inventory lives in spec system for maintainability

### Technology Stack
- SCSS with CSS custom properties
- Regex for pattern matching: `#[0-9a-fA-F]{3}(?![0-9a-fA-F])`
- Storybook for visual verification

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/specs/phase03-session03-token-color-cleanup/HARDCODED_COLORS_INVENTORY.md` | Document ~615 intentionally hardcoded colors with justifications | ~150 |
| `.spec_system/specs/phase03-session03-token-color-cleanup/TOKEN_AUDIT_REPORT.md` | Token usage audit findings and cascade verification | ~100 |

### Files to Modify
| File | Changes | Est. Lines Changed |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/css/_primitives.scss` | Normalize any short hex codes to 6-char format | ~5-10 |
| `packages/frontend/@n8n/design-system/src/css/_tokens.scss` | Normalize any short hex codes to 6-char format | ~5-10 |
| `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss` | Normalize any short hex codes to 6-char format | ~5-10 |
| `packages/frontend/@n8n/design-system/src/css/common/var.scss` | Verify token references, normalize if needed | ~5 |
| Various SCSS files in design-system/src/css/ | Normalize short hex codes throughout | ~20-30 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Zero short hex codes (`#fff`, `#ccc`, `#f00`, etc.) in design-system/src/css/
- [ ] All normalized hex codes use lowercase 6-character format (`#ffffff`, `#cccccc`)
- [ ] Both `--color-primary` and `--color--primary` token formats resolve correctly
- [ ] Token cascade verified: changes to primitives propagate to components

### Testing Requirements
- [ ] Visual regression check in Storybook (light and dark modes)
- [ ] Verify key components render correctly after normalization
- [ ] Manual spot-check of canvas, NDV, and modal components

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings throughout
- [ ] Code follows CONVENTIONS.md patterns
- [ ] No new `!important` declarations added
- [ ] Hardcoded color inventory documented

---

## 8. Implementation Notes

### Key Considerations
- Short hex codes are functionally equivalent to 6-char versions (`#fff` === `#ffffff`)
- Changes are purely for consistency and maintainability, not visual
- Must preserve all existing CSS fallback patterns for backwards compatibility
- Storybook verification covers 96 stories across 86 components

### Potential Challenges
- **Hidden hex codes in string literals**: Some colors may be in JavaScript/TypeScript, not just SCSS - limit scope to design-system CSS files
- **Regex false positives**: Pattern may match hex codes in comments or documentation - verify each match before changing
- **Cascade side effects**: Changing token files affects many components - use Storybook for regression detection

### Relevant Considerations
- [P00] **Short hex codes need normalization**: ~25 instances of `#fff`, `#ccc`, `#f00` identified in design-system/src/css/. This session addresses this directly.
- [P00] **Dual token naming convention**: Old format `--color-primary` and new format `--color--primary` both work via CSS fallbacks. Must verify this continues working after cleanup.
- [P00] **~615 hardcoded colors intentionally kept**: Test data, syntax highlighting, Element Plus widgets, accessibility calculations. Document these to prevent future confusion.
- [P00] **HSL-based primitives cascade efficiently**: 143 primitives using HSL format. Normalization should preserve HSL where used.

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No Unicode quotes, dashes, or special characters.

---

## 9. Testing Strategy

### Unit Tests
- Not applicable - this session focuses on CSS normalization, no runtime code changes

### Integration Tests
- Not applicable - visual-only changes

### Manual Testing
- Load Storybook and verify all 96 stories render correctly
- Toggle between light and dark modes
- Check canvas background and node styling
- Verify NDV panels and form elements
- Confirm modal/dialog appearances

### Edge Cases
- Colors inside CSS `calc()` or `color-mix()` functions
- Hex codes used as fallback values in `var()` chains
- Short hex codes in CSS comments (should not be modified)
- Hex codes in data URLs or SVG inline styles

---

## 10. Dependencies

### External Libraries
- Element Plus 2.4.3 (patched for SSR)
- Vue Flow 1.48.0 (canvas rendering)
- Storybook (visual verification)

### Other Sessions
- **Depends on**: `phase03-session01-dark-mode-parity-audit`, `phase03-session02-component-edge-cases`
- **Depended by**: `phase03-session04-cross-browser-testing` (clean tokens needed for reliable browser testing)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

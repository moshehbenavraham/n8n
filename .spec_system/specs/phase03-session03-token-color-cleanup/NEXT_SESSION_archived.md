# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Completed Sessions**: 21

---

## Recommended Next Session

**Session ID**: `phase03-session03-token-color-cleanup`
**Session Name**: Token and Color Cleanup
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~16

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 02 (Component Edge Cases) completed
- [x] Grep/search capability available for hex code patterns

### Dependencies
- **Builds on**: phase03-session02-component-edge-cases (V2 components and Element Plus edge cases resolved)
- **Enables**: phase03-session04-cross-browser-testing (clean token system needed for cross-browser validation)

### Project Progression
This is the natural next step in Phase 03's quality assurance sequence. With dark mode parity verified (Session 01) and component edge cases addressed (Session 02), the codebase is ready for token normalization. Clean, consistent token usage is essential before cross-browser testing begins - it ensures any browser-specific issues found are genuine compatibility problems, not artifacts of inconsistent color definitions.

The ~25 short hex codes identified in CONSIDERATIONS.md (`#fff`, `#ccc`, `#f00`) need normalization to 6-character format. This session also documents the ~615 intentionally hardcoded colors (syntax highlighting, test data, etc.) to prevent future confusion.

---

## Session Overview

### Objective
Normalize remaining hardcoded hex codes, enforce consistent token usage, and perform final cleanup of the color system to ensure maintainability and consistency.

### Key Deliverables
1. Normalized hex codes (short to 6-character format)
2. Updated list of intentionally hardcoded colors with justifications
3. Token usage audit report
4. Removed orphaned/unused tokens (if any)
5. Verified backwards compatibility for dual naming convention (`--color-primary` and `--color--primary`)

### Scope Summary
- **In Scope (MVP)**: Short hex normalization, design-system color audit, token cascade verification, orphan cleanup, backwards compatibility check
- **Out of Scope**: Syntax highlighting colors (GitHub standard), test data colors, Element Plus widget internals, accessibility calculation colors

---

## Technical Considerations

### Technologies/Patterns
- SCSS with CSS custom properties
- Regex patterns for hex code detection (`#[0-9a-fA-F]{3}(?![0-9a-fA-F])`)
- Token cascade: Primitives > Semantic > Component
- Dual token naming fallback pattern

### Potential Challenges
- Distinguishing between tokenizable colors and intentionally hardcoded ones
- Ensuring backwards compatibility isn't broken during normalization
- Verifying token cascade works correctly after cleanup

### Relevant Considerations
- [P00] **Short hex codes need normalization**: ~25 instances of `#fff`, `#ccc`, `#f00` should be expanded to 6-char format for consistency (design-system/src/css/).
- [P00] **Dual token naming convention**: Old format `--color-primary` and new format `--color--primary` both work via CSS fallbacks. Maintain backwards compatibility.
- [P00] **~615 hardcoded colors intentionally kept**: Test data, syntax highlighting (GitHub standard), Element Plus widgets, accessibility calculations. Don't tokenize these.

---

## Alternative Sessions

If this session is blocked:
1. **phase03-session04-cross-browser-testing** - Can proceed with current token state if cleanup is deferred, though results may be less reliable
2. **phase03-session06-storybook-documentation-qa** - Partial Storybook verification can happen without token cleanup, but full QA should wait

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

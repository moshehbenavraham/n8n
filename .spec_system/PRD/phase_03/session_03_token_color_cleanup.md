# Session 03: Token and Color Cleanup

**Session ID**: `phase03-session03-token-color-cleanup`
**Status**: Not Started
**Estimated Tasks**: ~16
**Estimated Duration**: 2-4 hours

---

## Objective

Normalize remaining hardcoded hex codes, enforce consistent token usage, and perform final cleanup of the color system to ensure maintainability and consistency.

---

## Scope

### In Scope (MVP)
- Normalize ~25 short hex codes (`#fff`, `#ccc`, `#f00`) to 6-character format
- Audit remaining hardcoded colors in design-system/src/css/
- Verify backwards compatibility with dual token naming convention
- Document intentionally kept hardcoded colors (~615 items)
- Clean up any orphaned or unused token definitions
- Verify token cascade: Primitives > Semantic > Component

### Out of Scope
- Syntax highlighting colors (GitHub standard - intentionally kept)
- Test data color values (intentionally kept)
- Element Plus widget internal colors (cannot modify)
- Accessibility calculation colors (intentionally kept)

---

## Prerequisites

- [ ] Session 02 completed (component edge cases addressed)
- [ ] Grep/search capability for hex code patterns

---

## Deliverables

1. Normalized hex codes (short to 6-character format)
2. Updated list of intentionally hardcoded colors with justifications
3. Token usage audit report
4. Removed orphaned/unused tokens (if any)
5. Verified backwards compatibility for dual naming convention

---

## Success Criteria

- [ ] Zero short hex codes (`#fff`, `#ccc`, etc.) in design-system/src/css/
- [ ] All tokenizable colors use CSS custom properties
- [ ] Backwards compatibility confirmed (`--color-primary` and `--color--primary` both work)
- [ ] Documentation updated with hardcoded color inventory
- [ ] No orphaned tokens remaining
- [ ] Token cascade working correctly throughout application

# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-02
**Project State**: Phase 00 - Foundation - Colors, Typography, Branding
**Completed Sessions**: 4

---

## Recommended Next Session

**Session ID**: `phase00-session05-hardcoded-color-remediation`
**Session Name**: Hardcoded Color Remediation
**Estimated Duration**: 3-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (color tokens available for replacement)
- [x] Session 03 completed (Element Plus integration done)
- [x] Understanding of ~615 intentionally hardcoded colors documented in CONSIDERATIONS.md

### Dependencies
- **Builds on**: Sessions 01-04 (color system, brand identity, Element Plus integration, motion system)
- **Enables**: Session 06 (Email Templates & Foundation Verification) - which requires Sessions 01-05

### Project Progression
Session 05 is the natural next step in Phase 00. With the color system foundation, brand assets, Element Plus integration, and motion tokens all in place, the remaining task is to remediate hardcoded colors throughout the codebase. This session systematically replaces high-visibility hardcoded color values with the new token system, ensuring the Obsidian Forge theme is consistently applied. Session 06 explicitly lists Session 05 as a prerequisite, making this the only valid choice.

---

## Session Overview

### Objective
Systematically fix high-visibility hardcoded color values across the codebase, normalize short hex codes, and document intentional exceptions that should remain hardcoded.

### Key Deliverables
1. High-visibility hardcoded colors replaced with Forge Metals tokens
2. Short hex codes normalized to 6-character format (~25 instances)
3. Critical inline styles tokenized where possible
4. Documentation of intentional exceptions (syntax highlighting, test data, etc.)
5. Tracking list of remaining hardcoded colors for Phase 01+

### Scope Summary
- **In Scope (MVP)**: SCSS hardcoded colors, Vue component colors, short hex normalization, inline style tokenization, exception documentation
- **Out of Scope**: Syntax highlighting colors (intentionally hardcoded), test/fixture data, Element Plus widget internals, accessibility calculation values

---

## Technical Considerations

### Technologies/Patterns
- Token replacement pattern: `color: #1a1a1a;` becomes `color: var(--color--text-primary);`
- Short hex normalization: `#fff` becomes `#ffffff`
- CSS custom properties cascade from primitives to semantic tokens

### Potential Challenges
- **~615 intentionally hardcoded colors**: Must distinguish between replaceable and intentional hardcoded values
- **Element Plus specificity battles**: 8 files use `!important` overrides - some components resist styling
- **V2 component variants**: Ensure theme changes work with both V1 and V2 components

### Relevant Considerations
- [P00] **Short hex codes need normalization**: ~25 instances of `#fff`, `#ccc`, `#f00` should be expanded to 6-char format for consistency (design-system/src/css/)
- [P00] **~615 hardcoded colors intentionally kept**: Test data, syntax highlighting (GitHub standard), Element Plus widgets, accessibility calculations - Don't tokenize these
- [P00] **Don't tokenize code syntax highlighting colors**: Lines 292-305 in `_tokens.scss` use GitHub-standard colors - keep as-is

---

## Key Directories to Search

| Directory | Purpose |
|-----------|---------|
| `packages/frontend/@n8n/design-system/src/css/` | ~25 short hex instances |
| `packages/frontend/@n8n/design-system/src/components/` | Component-level hardcoded colors |
| `packages/frontend/editor-ui/src/` | Editor UI hardcoded colors |
| `packages/frontend/@n8n/design-system/src/stylesheets/` | Additional stylesheets |

---

## Alternative Sessions

If this session is blocked:
1. **Session 06 (Email Templates & Verification)** - Cannot proceed; requires Session 05 completion
2. **Phase 01 Sessions** - Not available; Phase 00 must complete first

**Note**: There are no valid alternatives - Session 05 is required to proceed with Phase 00 completion.

---

## Next Steps

Run `/sessionspec` to generate the formal specification for this session.

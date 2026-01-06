# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 04 - Typography Evolution
**Completed Sessions**: 26

---

## Recommended Next Session

**Session ID**: `phase04-session02-typography-token-alignment`
**Session Name**: Typography Token Alignment
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: 20

---

## Why This Session Next?

### Prerequisites Met
- [x] Phase 04 Session 01 completed (Font Selection and Asset Preparation)
- [x] Outfit Variable and JetBrains Mono Variable fonts installed
- [x] @font-face declarations configured in fonts.scss
- [x] Font files properly placed in assets/fonts/

### Dependencies
- **Builds on**: phase04-session01-font-selection-asset-preparation
- **Enables**: phase04-session03-component-typography-updates

### Project Progression
Session 02 is the logical next step as it aligns the typography tokens with the PRD specification. The font assets are now in place from Session 01, so we can proceed to update the token values (font weights, letter spacing, line heights) to match the "Forge Type" system defined in the PRD. This token alignment must happen before Session 03 (component updates) as components will consume these corrected token values.

---

## Session Overview

### Objective
Align all typography tokens in `_primitives.scss` with the PRD specification for font weights, letter spacing, and line heights.

### Key Deliverables
1. Font family tokens updated to reference Outfit and JetBrains Mono
2. Font weight tokens corrected (medium: 500→450, semibold: 550→500)
3. Letter spacing tokens aligned with PRD values
4. Line height tokens renamed to semantic names with new values
5. Backwards-compatible aliases maintained for existing usages

### Scope Summary
- **In Scope (MVP)**: Token value corrections, semantic naming, backwards compatibility aliases, cascade verification
- **Out of Scope**: Component-level typography changes (Session 03), visual QA (Session 04)

---

## Technical Considerations

### Technologies/Patterns
- SCSS CSS custom properties in `_primitives.scss`
- Token cascade: Primitives → Semantic → Component
- CSS variable fallbacks for backwards compatibility

### Potential Challenges
- Ensuring all token references update correctly without breaking builds
- Maintaining backwards compatibility while introducing semantic naming
- Verifying token cascade through dark mode tokens

### Relevant Considerations
- [P00] **Dual token naming convention**: Old format `--color-primary` and new format `--color--primary` both work via CSS fallbacks. Apply same pattern to typography tokens.
- [P00] **Token cascade: Primitives > Semantic > Component**: Primary path: `_primitives.scss` > `_tokens.scss` > `common/var.scss` > components. Change primitives for maximum reach.

---

## Alternative Sessions

If this session is blocked:
1. **phase04-session03-component-typography-updates** - Only if urgent component fixes needed (not recommended - tokens should be stable first)
2. **phase04-session04-typography-qa-documentation** - Only for documentation-only work (not recommended - implementation incomplete)

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

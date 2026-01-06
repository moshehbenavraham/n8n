# Session Specification

**Session ID**: `phase04-session02-typography-token-alignment`
**Phase**: 04 - Typography Evolution
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session aligns all typography tokens in `_primitives.scss` with the PRD specification for the "Forge Type" system. The font assets (Outfit Variable and JetBrains Mono Variable) were installed in Session 01, and now we must correct the token values to match the designed typography scale.

The typography token alignment is critical because components throughout the application consume these primitive values. Font weights need adjustment to match Outfit's optimal rendering characteristics (medium: 450, semibold: 500), letter spacing values require fine-tuning for improved readability, and line height tokens need semantic renaming to align with the PRD's naming convention.

This session must be completed before Session 03 (component typography updates) as that session depends on having stable, correctly-valued tokens. The changes are isolated to primitive token files, making this a low-risk, high-impact session that establishes the foundation for all subsequent typography work.

---

## 2. Objectives

1. Correct font weight token values to match PRD specification (medium: 450, semibold: 500, rename extrabold to heavy)
2. Align letter spacing tokens with PRD values for improved readability
3. Rename line height tokens to semantic names and add new tokens (tight: 1.15, relaxed: 1.6)
4. Implement backwards-compatible aliases to prevent breaking existing component references

---

## 3. Prerequisites

### Required Sessions
- [x] `phase04-session01-font-selection-asset-preparation` - Font assets installed, @font-face configured

### Required Tools/Knowledge
- SCSS CSS custom property syntax
- CSS variable fallback patterns
- Understanding of token cascade architecture

### Environment Requirements
- Node.js and pnpm installed
- Access to design-system package

---

## 4. Scope

### In Scope (MVP)
- Font weight token value corrections (medium, semibold, rename extrabold to heavy)
- Letter spacing token value corrections (tight, snug, wide, wider)
- Line height token semantic renaming (xs->none, md->snug, xl->normal, 2xl->loose)
- New line height tokens (tight: 1.15, relaxed: 1.6)
- Backwards-compatible size-based aliases for line heights
- Token cascade verification through semantic layer
- Build verification

### Out of Scope (Deferred)
- Component-level typography changes - *Reason: Session 03 scope*
- Visual QA and screenshot comparisons - *Reason: Session 04 scope*
- Documentation updates - *Reason: Session 04 scope*

---

## 5. Technical Approach

### Architecture
All typography tokens are defined in `_primitives.scss` within a `@mixin primitives` block that is applied to `:root`. Changes cascade automatically to all components via CSS variable inheritance. The token architecture follows: Primitives > Semantic > Component.

### Design Patterns
- **CSS Variable Fallbacks**: Use `var(--new-name, var(--old-name))` pattern to maintain backwards compatibility
- **Semantic Naming**: Replace size-based names (xs, sm, md) with meaning-based names (tight, snug, normal)
- **Alias Pattern**: Keep old token names as aliases pointing to new tokens

### Technology Stack
- SCSS with CSS custom properties
- pnpm for build verification
- Storybook for visual verification (port 6006)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| N/A | No new files required | 0 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/css/_primitives.scss` | Font weight, letter spacing, line height token corrections | ~30 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] `--font-weight--medium` equals 450
- [ ] `--font-weight--semibold` equals 500
- [ ] `--font-weight--heavy` equals 700 (renamed from extrabold)
- [ ] `--letter-spacing--tight` equals -0.03em
- [ ] `--letter-spacing--snug` equals -0.02em
- [ ] `--letter-spacing--wide` equals 0.02em
- [ ] `--letter-spacing--wider` equals 0.04em
- [ ] `--line-height--none` equals 1
- [ ] `--line-height--tight` equals 1.15
- [ ] `--line-height--snug` equals 1.3
- [ ] `--line-height--normal` equals 1.5
- [ ] `--line-height--relaxed` equals 1.6
- [ ] `--line-height--loose` equals 1.75
- [ ] Backwards-compatible aliases in place

### Testing Requirements
- [ ] Build passes without errors (`pnpm build`)
- [ ] Storybook loads without console errors
- [ ] Manual verification in browser DevTools

### Quality Gates
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] Code follows project conventions

---

## 8. Implementation Notes

### Key Considerations
- Font family tokens are already updated in Session 01 (Outfit, JetBrains Mono) - no changes needed
- Outfit Variable font renders optimally at weight 450 for medium text
- Letter spacing adjustments are subtle but improve readability at UI scale

### Potential Challenges
- **Component reference breakage**: Mitigated by backwards-compatible aliases
- **Token name conflicts**: Check for existing usage before renaming
- **Build failures**: Run incremental builds to catch issues early

### Relevant Considerations
- [P00] **Dual token naming convention**: Old format and new format both work via CSS fallbacks. Apply same pattern to typography token aliases.
- [P00] **Token cascade: Primitives > Semantic > Component**: Primary path is `_primitives.scss` > `_tokens.scss` > `common/var.scss` > components. Changes to primitives have maximum reach.
- [P00] **CSS variable fallbacks ensure compatibility**: Use pattern `--new-token: var(--old-token, value)` for backwards compatibility.

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- N/A - Token changes are CSS-level, not unit-testable

### Integration Tests
- Verify build completes without SCSS compilation errors
- Verify Storybook compiles and renders

### Manual Testing
- Open browser DevTools, inspect `:root` CSS variables
- Verify token values match specification
- Check text rendering in Storybook typography stories

### Edge Cases
- Old token names (xs, sm, md, etc.) still resolve correctly
- Components using renamed tokens continue to render
- Dark mode inherits typography tokens correctly

---

## 10. Dependencies

### External Libraries
- N/A - Pure CSS variable changes

### Other Sessions
- **Depends on**: phase04-session01-font-selection-asset-preparation
- **Depended by**: phase04-session03-component-typography-updates

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

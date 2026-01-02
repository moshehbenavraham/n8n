# Session 01: Color System Foundation

**Session ID**: `phase00-session01-color-system-foundation`
**Status**: Not Started
**Estimated Tasks**: ~20
**Estimated Duration**: 3-4 hours

---

## Objective

Implement the complete "Forge Metals" color system - primitive scales, semantic token mappings, typography tokens, motion tokens, and shadow/border tokens that form the foundation of the Obsidian Forge design system.

---

## Scope

### In Scope (MVP)
- Implement amber primitive scale (50-950) in _primitives.scss
- Implement obsidian primitive scale (50-950)
- Implement steel primitive scale (50-950)
- Implement verdigris primitive scale (50-950)
- Implement ember primitive scale (50-950)
- Update semantic tokens in _tokens.scss (light mode)
- Update semantic tokens in _tokens.dark.scss (dark mode)
- Implement typography tokens (weights, letter-spacing, line-height)
- Implement motion tokens (easing curves, durations)
- Implement shadow tokens (depth scale, glow variants)
- Implement border tokens
- Maintain backwards compatibility with old token names

### Out of Scope
- Logo/favicon replacement (Session 02)
- Element Plus override updates (Session 03)
- Background treatments/visual details (Session 04)
- Hardcoded color fixes (Session 05)

---

## Prerequisites

- [ ] Design tokens defined in Master PRD (completed)
- [ ] Access to _primitives.scss, _tokens.scss, _tokens.dark.scss
- [ ] Understanding of token cascade architecture

---

## Deliverables

1. Updated `_primitives.scss` with new color scales
2. Updated `_tokens.scss` with light mode semantic mappings
3. Updated `_tokens.dark.scss` with dark mode semantic mappings
4. Typography token system implemented
5. Motion token system implemented
6. Shadow and border token system implemented
7. Token fallback pattern preserved for backwards compatibility

---

## Key Files

- `packages/frontend/@n8n/design-system/src/css/_primitives.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`
- `packages/frontend/@n8n/design-system/src/css/common/var.scss`

---

## Success Criteria

- [ ] All 5 color primitive scales implemented (amber, obsidian, steel, verdigris, ember)
- [ ] Light mode semantic tokens map to new primitives
- [ ] Dark mode semantic tokens map to new primitives
- [ ] Typography tokens available (weights, spacing, heights)
- [ ] Motion tokens available (easing, durations)
- [ ] Shadow tokens available (depth scale, amber glow)
- [ ] Border tokens available
- [ ] Token fallback pattern: `--color--primary: var(--color-primary, var(--color--amber-500))`
- [ ] `pnpm build` passes without errors
- [ ] Visual verification in browser shows new colors applied

# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 04 - Typography Evolution
**Completed Sessions**: 25 (Phases 00-03 complete)

---

## Recommended Next Session

**Session ID**: `phase04-session01-font-selection-asset-preparation`
**Session Name**: Font Selection and Asset Preparation
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: 18

---

## Why This Session Next?

### Prerequisites Met
- [x] Phase 03 Polish complete (all 6 sessions)
- [x] Design system stable and verified
- [x] Storybook documentation finalized
- [x] Dark mode parity confirmed
- [x] Performance baseline established

### Dependencies
- **Builds on**: Completed Obsidian Forge design foundation (Phases 00-03)
- **Enables**: Typography Token Alignment (Session 02), Component Updates (Session 03)

### Project Progression
Phase 04 represents the natural evolution of the design system. With color, branding, components, and polish complete, typography is the next frontier. This session lays the foundation by replacing the font assets before any token or component work begins. The "Forge Precision" typography system replaces InterVariable with Outfit (geometric warmth) and CommitMono with JetBrains Mono (engineer's code font).

---

## Session Overview

### Objective
Replace existing font assets with new Outfit Variable and JetBrains Mono Variable fonts, update @font-face declarations, and verify correct loading across the application and Storybook.

### Key Deliverables
1. Outfit Variable WOFF2 font asset installed (~85KB)
2. JetBrains Mono Variable WOFF2 font asset installed (~110KB)
3. Updated `fonts.scss` with new @font-face declarations
4. Storybook fonts.scss synchronized
5. Build verification and cross-browser font rendering confirmed

### Scope Summary
- **In Scope (MVP)**: Font file replacement, @font-face updates, Storybook sync, build verification
- **Out of Scope**: Typography token changes (Session 02), component-level typography updates (Session 03)

---

## Technical Considerations

### Technologies/Patterns
- WOFF2 variable font format (optimal compression)
- Variable weight axis (100-900) for both fonts
- `font-display: swap` for performance
- Existing `$font-path` reference pattern

### Potential Challenges
- File size verification (combined target: <=200KB)
- Variable weight axis compatibility across browsers
- Storybook font loading path differences
- Removing old fonts without breaking interim builds

### Relevant Considerations
- [P00] **Design system well-organized**: 86 components, 404 Storybook stories. Use Storybook at port 6006 to verify font changes.
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006)
- [P00] **Build verification**: `pnpm build` uses Turbo for all packages. Run full build after font changes.

---

## Alternative Sessions

If this session is blocked:
1. **phase04-session02-typography-token-alignment** - Could theoretically start token work with existing fonts, but not recommended
2. **No viable alternatives** - Font assets are foundational to Phase 04; all other sessions depend on new fonts being in place

---

## Phase 04 Session Overview

| Session | Name | Est. Tasks | Dependencies |
|---------|------|------------|--------------|
| 01 | Font Selection and Asset Preparation | 18 | None (start here) |
| 02 | Typography Token Alignment | 20 | Session 01 |
| 03 | Component Typography Updates | 22 | Session 02 |
| 04 | Typography QA and Documentation | 16 | Session 03 |

---

## Next Steps

Run `/sessionspec` to generate the formal specification for `phase04-session01-font-selection-asset-preparation`.

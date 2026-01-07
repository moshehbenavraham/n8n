# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 04 - Typography Evolution
**Completed Sessions**: 28

---

## Recommended Next Session

**Session ID**: `phase04-session04-typography-qa-documentation`
**Session Name**: Typography QA and Documentation
**Estimated Tasks**: 16

---

## Why This Session Next?

### Prerequisites Met
- [x] Phase 00-03 complete (full design system implemented)
- [x] Session 01: Font Selection and Asset Preparation complete
- [x] Session 02: Typography Token Alignment complete
- [x] Session 03: Component Typography Updates complete
- [x] Outfit Variable and JetBrains Mono fonts installed and rendering
- [x] All typography tokens aligned with PRD specification

### Dependencies
- **Builds on**: phase04-session03-component-typography-updates (all font migrations complete)
- **Enables**: Phase 04 completion, project ready for production

### Project Progression
This is the final session of Phase 04 (Typography Evolution). With font assets installed, tokens aligned, and component typography updated, this session performs comprehensive QA verification and creates lasting documentation. Completing this session marks the full Obsidian Forge design system implementation.

---

## Session Overview

### Objective
Validate typography implementation across all surfaces, ensure cross-browser compatibility, verify font loading performance, and create documentation for the new Forge Type System.

### Key Deliverables
1. Storybook visual verification across all 404 stories
2. Cross-browser font rendering validation (Chrome, Firefox, Safari, Edge)
3. Font loading performance audit with metrics
4. Updated AGENTS.md typography reference
5. Typography usage guidelines document

### Scope Summary
- **In Scope (MVP)**: Storybook verification, browser testing, performance metrics, documentation updates, typography guidelines
- **Out of Scope**: New typography features, additional font variants, component refactoring

---

## Technical Considerations

### Technologies/Patterns
- Storybook for visual verification (port 6006)
- Browser DevTools for font loading analysis
- Network tab for performance metrics
- Markdown documentation

### Potential Challenges
- Manual visual verification across 404 stories is time-intensive (sample strategically)
- Cross-browser testing requires access to multiple browsers
- Font loading metrics may vary by network conditions

### Relevant Considerations
- [P03] **Playwright automated testing works well**: Use sampling strategy for Storybook verification
- [P03] **Theme toggle URL parameter**: Use `?globals=theme:dark` for dark mode testing
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook`

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Combined font size | <=200KB |
| FCP impact | <50ms compared to baseline |
| FOUT duration | <100ms |
| Variable weight load | Single request per family |

---

## Alternative Sessions

No alternative sessions available - this is the final session of Phase 04.

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

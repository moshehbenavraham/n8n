# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Completed Sessions**: 24

---

## Recommended Next Session

**Session ID**: `phase03-session06-storybook-documentation-qa`
**Session Name**: Storybook Documentation and Final QA
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~18

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 05 completed (performance verification done)
- [x] All Phase 03 sessions 1-5 completed
- [x] All previous phase fixes deployed
- [x] Storybook available for verification

### Dependencies
- **Builds on**: phase03-session05-performance-verification (all quality gates passed)
- **Enables**: Production deployment of Obsidian Forge design system
- **Final Session**: This is the last session of the entire project

### Project Progression
This is the **final session** of the n8n Obsidian Forge design overhaul. All foundation work (Phase 00), component library updates (Phase 01), application feature theming (Phase 02), and polish work (Phase 03 sessions 1-5) are complete. This session performs the final quality assurance to ensure:

1. All 96+ Storybook stories render correctly in both light and dark modes
2. Documentation is up to date with new patterns
3. Any undocumented patterns receive coverage
4. Known issues and limitations are documented
5. The design system is production-ready

---

## Session Overview

### Objective
Complete final quality assurance by verifying all Storybook stories, updating documentation with new patterns, and performing comprehensive visual sign-off for the Obsidian Forge design system.

### Key Deliverables
1. Storybook verification report (96+ stories verified in light/dark modes)
2. Updated component documentation in Storybook
3. New stories for any undocumented patterns
4. Updated CONSIDERATIONS.md with Phase 03 learnings
5. Known issues/limitations document
6. Final QA sign-off checklist
7. Production readiness confirmation

### Scope Summary
- **In Scope (MVP)**:
  - Verify all 96+ Storybook stories render correctly
  - Test both light and dark mode in Storybook
  - Update story documentation where needed
  - Create any missing stories for new patterns
  - Update CONSIDERATIONS.md with Phase 03 learnings
  - Final visual walkthrough of entire application
  - Document any accepted limitations or known issues
  - Prepare design system for production deployment

- **Out of Scope**:
  - New feature development
  - Automated visual regression testing setup (deferred)
  - User documentation/help content

---

## Technical Considerations

### Technologies/Patterns
- Storybook (port 6006) for component verification
- Vue 3 SPA (editor-ui) for application walkthrough
- SCSS/CSS custom properties for theme verification
- Light/Dark mode toggle via `data-theme` attribute

### Potential Challenges
- Large number of stories to verify (96+) requires systematic approach
- Some Element Plus components may have minor styling limitations (documented in CONSIDERATIONS.md)
- Ensuring all edge cases are covered in both theme modes

### Relevant Considerations
- [P00] **Design system well-organized**: 86 components, 96 Storybook stories. Use Storybook at port 6006 to verify all component changes.
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006). Verify all 96 stories after theme changes.
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling. Document any remaining limitations.
- [P00] **V2 component migration in progress**: Ensure documentation reflects both V1 and V2 component variants.

---

## Alternative Sessions

This is the final session of Phase 03 and the entire project. There are no alternative sessions:
- All prerequisites are met
- No blocking issues exist
- This session must be completed for production readiness

If blocked by external factors (e.g., Storybook not starting):
1. Debug Storybook startup issues first
2. Manual component verification can substitute for some stories

---

## Success Criteria

- [ ] All 96+ Storybook stories render correctly in light mode
- [ ] All 96+ Storybook stories render correctly in dark mode
- [ ] Component documentation up to date
- [ ] CONSIDERATIONS.md updated with Phase 03 learnings
- [ ] Known issues documented with workarounds
- [ ] Full application visual walkthrough completed
- [ ] No blocking issues remaining
- [ ] Design system ready for production deployment

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

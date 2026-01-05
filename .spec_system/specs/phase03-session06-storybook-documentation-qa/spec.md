# Session Specification

**Session ID**: `phase03-session06-storybook-documentation-qa`
**Phase**: 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This is the **final session** of the n8n Obsidian Forge design overhaul project. After completing 24 sessions across 4 phases - establishing the visual foundation (Phase 00), updating the component library (Phase 01), theming application features (Phase 02), and polishing edge cases (Phase 03 sessions 1-5) - this session performs comprehensive final quality assurance to ensure the design system is production-ready.

The session focuses on verifying all 96+ Storybook stories render correctly in both light and dark modes, updating documentation to reflect new patterns established during the overhaul, creating any missing stories for undocumented patterns, and documenting known issues with their workarounds. This ensures all design system changes are properly documented and validated before deployment.

Upon completion of this session, the Obsidian Forge design system will be fully verified, documented, and ready for production deployment. This represents the culmination of systematic theming work that touched 86 components, 42 Element Plus override files, canvas/NDV features, and established a complete HSL-based token system.

---

## 2. Objectives

1. Verify all 96+ Storybook stories render correctly in both light and dark modes
2. Update component documentation to reflect Obsidian Forge patterns and usage
3. Document known issues, limitations, and accepted workarounds
4. Update CONSIDERATIONS.md with Phase 03 learnings for institutional memory

---

## 3. Prerequisites

### Required Sessions
- [x] `phase03-session05-performance-verification` - All quality gates passed, performance verified

### Required Tools/Knowledge
- Storybook 9 operation and story verification
- Vue 3 component documentation patterns
- Light/dark mode testing via `data-theme` attribute
- SCSS token system understanding

### Environment Requirements
- Storybook available at port 6006
- pnpm installed for package management
- Node.js environment configured

---

## 4. Scope

### In Scope (MVP)
- Verify all 96+ Storybook stories render correctly in light mode
- Verify all 96+ Storybook stories render correctly in dark mode
- Update story documentation where component behavior changed
- Create missing stories for new or undocumented patterns
- Update CONSIDERATIONS.md with Phase 03 learnings
- Perform final visual walkthrough of editor-ui application
- Document accepted limitations and known issues
- Create production readiness sign-off checklist

### Out of Scope (Deferred)
- New feature development - *Reason: Final QA session, no new features*
- Automated visual regression testing setup - *Reason: Deferred to future maintenance*
- User documentation/help content - *Reason: Separate documentation effort*
- Performance optimization work - *Reason: Completed in session 05*

---

## 5. Technical Approach

### Architecture
This session is primarily verification and documentation focused. The approach follows a systematic component-by-component review through Storybook, testing each story in both theme modes, and documenting findings. No architectural changes are expected.

### Design Patterns
- **Systematic Verification**: Review stories in alphabetical order by component category
- **Dual-Mode Testing**: Test each story in light mode first, then toggle to dark mode
- **Documentation-First**: Document issues as they are found before moving to next component

### Technology Stack
- Storybook 9 (port 6006)
- Vue 3 with Composition API
- SCSS with CSS custom properties
- Markdown for documentation

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/specs/phase03-session06-storybook-documentation-qa/VERIFICATION_REPORT.md` | Story-by-story verification results | ~200 |
| `.spec_system/specs/phase03-session06-storybook-documentation-qa/KNOWN_ISSUES.md` | Documented limitations and workarounds | ~100 |
| `.spec_system/specs/phase03-session06-storybook-documentation-qa/PRODUCTION_READINESS.md` | Final sign-off checklist | ~50 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `.spec_system/CONSIDERATIONS.md` | Add Phase 03 learnings, update line budget | ~50 |
| `packages/frontend/@n8n/design-system/src/components/**/*.stories.ts` | Update documentation in stories as needed | ~20 per file |

---

## 7. Success Criteria

### Functional Requirements
- [ ] All 96+ Storybook stories render without console errors in light mode
- [ ] All 96+ Storybook stories render without console errors in dark mode
- [ ] No visual regression from expected Obsidian Forge appearance
- [ ] Component documentation reflects current behavior

### Testing Requirements
- [ ] Manual verification of each Storybook story completed
- [ ] Light/dark mode toggle tested in Storybook
- [ ] Full application visual walkthrough completed in editor-ui

### Quality Gates
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] CONSIDERATIONS.md updated with Phase 03 learnings
- [ ] Known issues documented with workarounds
- [ ] Production readiness checklist signed off

---

## 8. Implementation Notes

### Key Considerations
- Storybook verification requires systematic approach due to 96+ stories
- Document issues during review rather than fixing them inline (unless trivial)
- Both V1 and V2 component variants need verification
- Element Plus components may have known limitations per CONSIDERATIONS.md

### Potential Challenges
- **Large story count**: Mitigate by organizing verification into component categories
- **Element Plus specificity issues**: Document as known limitations where unfixable
- **Theme toggle state**: Ensure Storybook theme toggle works correctly before starting

### Relevant Considerations
- [P00] **Design system well-organized**: 86 components, 96 Storybook stories. Use this as the verification checklist.
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006).
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides. Document remaining limitations.
- [P00] **V2 component migration in progress**: Ensure both V1 and V2 variants are verified.
- [P00] **Dark mode via data-theme attribute**: Use Storybook's theme toggle to test both modes.

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- Not applicable - verification and documentation session

### Integration Tests
- Not applicable - verification and documentation session

### Manual Testing
- Systematically verify each Storybook story in light mode
- Toggle to dark mode and verify each story again
- Launch editor-ui and perform visual walkthrough of key screens
- Test theme toggle in running application

### Edge Cases
- Components with loading states
- Components with error states
- Components with empty/null data
- Components at different viewport sizes (if responsive stories exist)

---

## 10. Dependencies

### External Libraries
- Storybook: 9.x (existing)
- Vue: 3.x (existing)
- Element Plus: 2.4.3 (patched, existing)

### Other Sessions
- **Depends on**: `phase03-session05-performance-verification` (all quality gates must pass)
- **Depended by**: None (final session)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

# Session Specification

**Session ID**: `phase04-session04-typography-qa-documentation`
**Phase**: 04 - Typography Evolution
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This is the final session of Phase 04 (Typography Evolution), marking the completion of the Obsidian Forge design system. With Outfit Variable and JetBrains Mono Variable fonts installed, typography tokens aligned, and component typography migrated in the previous three sessions, this session focuses on comprehensive quality assurance and lasting documentation.

The session validates that typography renders correctly across all 404 Storybook stories in both light and dark modes, confirms cross-browser compatibility (Chrome, Firefox, Safari, Edge), and measures font loading performance against defined targets. Documentation deliverables include updated AGENTS.md typography reference, a verification report, and typography usage guidelines that will serve as the authoritative reference for the Forge Type System.

Completing this session closes Phase 04 and marks the full implementation of the Obsidian Forge design system across all phases: Foundation (Phase 00), Component Library (Phase 01), Application Features (Phase 02), Polish (Phase 03), and Typography Evolution (Phase 04).

---

## 2. Objectives

1. Verify typography renders correctly across all Storybook stories in both light and dark modes using strategic sampling
2. Validate cross-browser font rendering consistency across Chrome, Firefox, Safari, and Edge
3. Measure font loading performance and confirm metrics meet targets (combined <=200KB, FCP <50ms impact, FOUT <100ms)
4. Update AGENTS.md and create typography verification report documenting the complete Forge Type System

---

## 3. Prerequisites

### Required Sessions
- [x] `phase04-session01-font-selection-asset-preparation` - Font files installed and configured
- [x] `phase04-session02-typography-token-alignment` - Token values corrected per PRD
- [x] `phase04-session03-component-typography-updates` - Components migrated to new fonts

### Required Tools/Knowledge
- Storybook 9 (port 6006)
- Browser DevTools (Network tab, Performance tab)
- Chrome, Firefox, Safari, Edge browsers for cross-browser testing
- Markdown for documentation

### Environment Requirements
- Design system builds without errors
- Storybook starts and serves all 404 stories
- Font files accessible at `/assets/fonts/`

---

## 4. Scope

### In Scope (MVP)
- Storybook visual verification using strategic sampling (first/middle/last per category)
- Light and dark mode typography verification using `?globals=theme:dark` parameter
- Cross-browser font rendering validation
- Font file size measurement and verification
- Font loading performance metrics (FCP impact, FOUT duration)
- AGENTS.md typography reference update
- Typography verification report
- Typography usage guidelines document

### Out of Scope (Deferred)
- New typography features - *Reason: QA session, not feature development*
- Additional font variants or weights - *Reason: Font selection complete in session 01*
- Component refactoring - *Reason: Component updates complete in session 03*
- Automated visual regression testing setup - *Reason: Manual verification sufficient for QA*

---

## 5. Technical Approach

### Architecture
This session is primarily QA and documentation focused. The technical approach centers on systematic verification using existing tooling (Storybook, browser DevTools) and creating Markdown documentation that captures the implemented type system.

### Verification Strategy
- **Storybook sampling**: Use the `index.json` API to enumerate stories, then sample first/middle/last from each category for efficient coverage (proven approach from Phase 03)
- **Theme verification**: Use URL parameter `?globals=theme:dark` for programmatic dark mode testing
- **Performance measurement**: Browser DevTools Network and Performance tabs

### Design Patterns
- **Strategic sampling**: Coverage through representative samples rather than exhaustive checking (168 stories from 404 total provides sufficient confidence)
- **Documentation-as-code**: Markdown files checked into repository for version control

### Technology Stack
- Storybook 9.x at localhost:6006
- Browser DevTools (Chrome primary)
- Markdown for all documentation

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/audit/TYPOGRAPHY_VERIFICATION.md` | Storybook and browser verification report | ~150 |
| `.spec_system/audit/FONT_PERFORMANCE_REPORT.md` | Font loading metrics and analysis | ~80 |
| `.spec_system/docs/TYPOGRAPHY_GUIDELINES.md` | Usage guidelines for Forge Type System | ~120 |

### Files to Modify
| File | Changes | Est. Lines Changed |
|------|---------|------------|
| `packages/frontend/AGENTS.md` | Update typography reference section with Outfit/JetBrains Mono | ~40 |
| `.spec_system/CONSIDERATIONS.md` | Add Phase 04 lessons learned | ~20 |
| `.spec_system/state.json` | Mark Phase 04 complete | ~5 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Typography renders correctly in sampled Storybook stories (both modes)
- [ ] Outfit Variable displays proper weights (300-800) in all browsers
- [ ] JetBrains Mono Variable displays proper weights (400, 700) in all browsers
- [ ] No font substitution or fallback visible in any browser

### Testing Requirements
- [ ] Storybook stories sampled: minimum 40 stories across all categories
- [ ] Cross-browser validation: Chrome, Firefox, Safari, Edge
- [ ] Light mode and dark mode verified in each browser

### Quality Gates
- [ ] Combined font size <=200KB (Outfit ~85KB + JetBrains Mono ~115KB)
- [ ] FCP impact <50ms compared to baseline
- [ ] FOUT duration <100ms (font swap flash)
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] Documentation follows project conventions

---

## 8. Implementation Notes

### Key Considerations
- Use strategic sampling rather than exhaustive verification (168 stories from 404 provides 95%+ confidence)
- Measure performance on fresh cache to capture real-world font loading experience
- Document any browser-specific rendering differences even if acceptable

### Potential Challenges
- **Manual verification time**: Mitigate by using sampling strategy proven in Phase 03
- **Browser availability**: WSL environment may limit Safari testing; document any gaps
- **Network variability**: Measure performance multiple times for consistent metrics

### Relevant Considerations
- [P03] **Playwright automated testing works well**: Use sampling strategy (first/middle/last per category) for efficient coverage
- [P03] **Theme toggle URL parameter**: Use `?globals=theme:dark` for programmatic dark mode testing
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` to launch

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No special characters, emojis, or extended Unicode.

---

## 9. Testing Strategy

### Visual Verification
- Sample stories from each Storybook category (Actions, Atoms, Components, etc.)
- Verify text renders with Outfit Variable (not Inter or system fonts)
- Verify code blocks render with JetBrains Mono Variable
- Check font weight variations display correctly

### Cross-Browser Testing
- Chrome: Primary reference browser
- Firefox: Verify ligature rendering, OpenType features
- Safari: Check macOS font smoothing (if accessible)
- Edge: Confirm Chromium-based rendering matches Chrome

### Performance Testing
- Measure combined font file sizes in DevTools Network tab
- Record First Contentful Paint timing
- Observe and time any Flash of Unstyled Text

### Edge Cases
- Very long text strings (verify no layout breaks)
- Mixed font contexts (UI text + code blocks together)
- Font weight extremes (300 light, 800 bold)
- Small text sizes (verify readability at 12px)

---

## 10. Dependencies

### External Libraries
- Storybook: 9.x (already configured)
- No new dependencies required

### Other Sessions
- **Depends on**: phase04-session01, phase04-session02, phase04-session03 (all typography implementation)
- **Depended by**: None (final session of final phase)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

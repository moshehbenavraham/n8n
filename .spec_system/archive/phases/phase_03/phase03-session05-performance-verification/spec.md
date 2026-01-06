# Session Specification

**Session ID**: `phase03-session05-performance-verification`
**Phase**: 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session conducts comprehensive performance verification of the Obsidian Forge design system changes across 23 completed implementation sessions. With cross-browser testing complete, we now validate that extensive CSS token updates, animation additions, and styling overhauls have not introduced performance regressions that would impact user experience.

Performance verification is critical before final QA sign-off because design system changes can have subtle but compounding effects: additional CSS custom properties increase style recalculation time, new animations may trigger layout thrashing, and complex selectors can slow rendering. The workflow canvas is particularly sensitive since it renders dozens of nodes with real-time interactions like zoom, pan, and drag.

This session establishes performance baselines, measures current metrics, identifies any regressions, and implements optimizations where needed. The goal is to confirm that the Obsidian Forge theme delivers equivalent or better performance than the baseline, ensuring users experience smooth interactions regardless of workflow complexity.

---

## 2. Objectives

1. Establish and document performance baselines for initial page load, canvas operations, and animation smoothness
2. Verify CSS bundle size increase is within acceptable limits (<5% increase from baseline)
3. Confirm all canvas operations maintain 60fps with 50+ node workflows
4. Ensure no memory leaks occur during extended usage sessions
5. Validate GPU acceleration is properly utilized for all animations (transform/opacity only)

---

## 3. Prerequisites

### Required Sessions
- [x] `phase03-session04-cross-browser-testing` - Provides cross-browser compatibility verification, ensuring performance tests run on stable, validated code

### Required Tools/Knowledge
- Chrome DevTools Performance tab profiling
- Lighthouse performance auditing
- Vue DevTools profiler for component render analysis
- CSS Coverage analysis in DevTools
- Memory Heap Snapshot analysis
- Understanding of GPU-accelerated CSS properties

### Environment Requirements
- Chrome browser (latest stable) for primary testing
- Firefox browser for secondary validation
- Local development server running (`pnpm dev:fe`)
- Test workflows with 10, 50, and 100+ nodes prepared
- Clean browser profile (no extensions) for consistent measurements

---

## 4. Scope

### In Scope (MVP)
- Initial page load time measurement (First Contentful Paint, Largest Contentful Paint)
- Canvas performance with 50+ node workflows (FPS during zoom/pan/drag)
- Animation smoothness verification (modal open/close, node hover, transitions)
- CSS bundle size comparison (design-system + editor-ui bundles)
- Memory usage profiling (heap size during extended sessions)
- GPU acceleration verification (compositor-only animations)
- Node drag performance under load
- Zoom/pan responsiveness metrics

### Out of Scope (Deferred)
- Backend API performance - *Reason: Not affected by design system changes*
- Network request optimization - *Reason: Separate optimization concern*
- Build time optimization - *Reason: Developer experience, not user-facing*
- Mobile performance - *Reason: Desktop-first application*

---

## 5. Technical Approach

### Architecture
Performance testing follows a systematic measurement methodology:
1. **Baseline establishment**: Capture metrics before session (use git stash or branch comparison)
2. **Current measurement**: Profile the Obsidian Forge implementation
3. **Delta analysis**: Compare baseline vs current, identify regressions
4. **Optimization**: Address any regressions found
5. **Verification**: Re-measure to confirm fixes

### Design Patterns
- **Performance Budgets**: Set explicit thresholds (e.g., FCP < 1.5s, bundle < 5% increase)
- **Composite Animations**: Ensure all animations use GPU-accelerated properties only
- **Will-Change Hints**: Verify appropriate use of `will-change` for animated elements
- **CSS Containment**: Check for layout containment opportunities on canvas nodes

### Technology Stack
- Chrome DevTools Performance Panel (frame-by-frame analysis)
- Lighthouse CLI (`npx lighthouse --only-categories=performance`)
- Webpack Bundle Analyzer (CSS size analysis)
- Vue DevTools (component render profiling)
- Performance API (`performance.mark()`, `performance.measure()`)

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/specs/phase03-session05-performance-verification/performance-report.md` | Comprehensive performance benchmark results | ~200 |
| `.spec_system/specs/phase03-session05-performance-verification/validation.md` | Test results and verification checklist | ~100 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| CSS animation files (if regressions found) | Add `will-change`, optimize selectors | ~10-50 |
| Canvas component styles (if regressions found) | Optimize for composite animations | ~10-50 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Initial page load (FCP) within 1.5s on local development
- [ ] Canvas maintains 60fps during zoom operations with 50+ nodes
- [ ] Canvas maintains 60fps during pan operations with 50+ nodes
- [ ] Node drag operations maintain 60fps with 100+ visible nodes
- [ ] Modal open/close animations complete at 60fps
- [ ] No frame drops during hover/focus transitions

### Testing Requirements
- [ ] Performance profiling completed in Chrome DevTools
- [ ] Lighthouse audit score >= 90 for performance category
- [ ] Memory heap snapshots show no growing allocations
- [ ] CSS coverage analysis completed

### Quality Gates
- [ ] CSS bundle size increase < 5% from baseline
- [ ] No layout thrashing detected in animations
- [ ] All animations use transform/opacity only (GPU accelerated)
- [ ] Memory stable during 10-minute extended usage test
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings

---

## 8. Implementation Notes

### Key Considerations
- Take multiple measurements (3-5 runs) and average to reduce variance
- Disable browser extensions and use incognito mode for clean profiles
- Warm up the browser cache before timing page loads
- Test with realistic workflow sizes (50+ nodes represents common usage)
- Document exact test conditions for reproducibility

### Potential Challenges
- **Creating consistent test workflows**: Use workflow export/import to ensure identical test conditions
- **Isolating design system impact**: Compare with baseline branch if significant differences found
- **Measurement variance**: Take multiple runs and use median values
- **Memory leak detection**: Requires extended testing sessions with heap snapshots

### Relevant Considerations
- [P00] **Canvas inline styles for zoom/position**: Canvas components use computed inline styles for dynamic positioning - these are necessary for Vue Flow and should not cause performance issues, but verify they don't conflict with token-based animation styles
- [P00] **~615 hardcoded colors intentionally kept**: Some colors (test data, syntax highlighting) are kept hardcoded - these should not cause performance issues but verify no unnecessary repaints
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides - verify these don't cause style recalculation overhead

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- N/A - Performance verification is measurement-based, not unit test-based

### Integration Tests
- N/A - Using DevTools profiling instead of automated tests

### Manual Testing
- Profile page load with Performance tab recording
- Record 30-second canvas interaction sessions (zoom, pan, drag)
- Capture heap snapshots at 0, 5, and 10 minute intervals
- Run Lighthouse audit in incognito mode
- Analyze CSS bundle with webpack-bundle-analyzer

### Edge Cases
- 100+ node workflows (stress test)
- Rapid zoom in/out sequences
- Simultaneous multi-node selection and drag
- Extended idle with periodic interactions (memory leak detection)
- Dark mode vs light mode performance parity

---

## 10. Dependencies

### External Libraries
- Chrome DevTools: Built into Chrome browser
- Lighthouse: `npx lighthouse@latest`
- Vue DevTools: Browser extension
- webpack-bundle-analyzer: Included in build tooling

### Other Sessions
- **Depends on**: `phase03-session04-cross-browser-testing` (stable, cross-browser verified codebase)
- **Depended by**: `phase03-session06-storybook-documentation-qa` (final QA requires performance verification)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

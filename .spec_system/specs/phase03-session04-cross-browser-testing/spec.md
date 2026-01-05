# Session Specification

**Session ID**: `phase03-session04-cross-browser-testing`
**Phase**: 03 - Polish - Edge Cases, Testing, Dark Mode Parity
**Status**: Not Started
**Created**: 2026-01-05

---

## 1. Session Overview

This session validates the cross-browser compatibility of the Obsidian Forge design system across all target browsers: Chrome, Firefox, Safari, and Edge. With 22 sessions of design implementation complete and token cleanup finalized in Session 03, we now need to ensure consistent visual rendering across the browser ecosystem before proceeding to performance verification.

Cross-browser testing is critical at this stage because browser-specific CSS fixes must be applied before establishing performance baselines. The Obsidian Forge theme relies heavily on CSS custom properties, HSL color values, layered shadows, gradient backgrounds, and variable fonts - all features that can render differently across browser engines. Identifying and resolving these discrepancies ensures users have a consistent experience regardless of their browser choice.

This session establishes the cross-browser baseline that enables Phase 03's remaining sessions (Performance Verification and Storybook Documentation QA) to proceed with confidence that the visual foundation is solid across all platforms.

---

## 2. Objectives

1. Execute systematic cross-browser testing across Chrome 121+, Firefox 123+, Safari 17.3+, and Edge 121+ for all Obsidian Forge themed components
2. Identify and document browser-specific rendering differences in CSS custom properties, shadows, gradients, animations, and typography
3. Implement browser-specific CSS fixes and vendor prefixes where needed to achieve visual parity
4. Create a comprehensive testing matrix documenting pass/fail status for all major UI areas across target browsers

---

## 3. Prerequisites

### Required Sessions
- [x] `phase03-session03-token-color-cleanup` - Token normalization complete, consistent CSS variable usage
- [x] `phase03-session02-component-edge-cases` - V2 components verified, Element Plus overrides stable
- [x] `phase03-session01-dark-mode-parity-audit` - Dark mode visual parity established

### Required Tools/Knowledge
- Access to Chrome 121+ (primary development browser)
- Access to Firefox 123+ (or BrowserStack/VM)
- Access to Safari 17.3+ (or BrowserStack/Mac VM)
- Access to Edge 121+ (Chromium-based)
- Understanding of CSS custom property browser support
- Knowledge of vendor prefix requirements

### Environment Requirements
- n8n development environment running (`pnpm dev:fe` on port 8080)
- Storybook running (`pnpm storybook` on port 6006)
- Test workflows available for canvas verification
- Both light and dark modes accessible

---

## 4. Scope

### In Scope (MVP)
- Chrome 121+ testing (E2E baseline, primary verification)
- Firefox 123+ testing (gradient/shadow rendering, font smoothing)
- Safari 17.3+ testing (HSL color rendering, variable fonts)
- Edge 121+ testing (CSS custom property inheritance)
- CSS custom property support verification
- Shadow rendering consistency (layered depth system)
- Gradient rendering (radial vignettes, linear backgrounds)
- Animation/transition performance verification
- Flex/grid layout consistency
- Font rendering (InterVariable weight ranges, CommitMono)
- Both light and dark mode testing

### Out of Scope (Deferred)
- Internet Explorer - *Reason: Not supported by n8n*
- Mobile browsers (iOS Safari, Android Chrome) - *Reason: Desktop-first, deferred to dedicated mobile session*
- Automated visual regression testing - *Reason: Infrastructure not in place, deferred*
- Performance profiling - *Reason: Covered in Session 05*

---

## 5. Technical Approach

### Architecture
The testing approach systematically evaluates each major UI area across all target browsers, documenting rendering fidelity and identifying discrepancies. The workflow canvas, NDV panels, modals, and design system components are tested independently, then verified in integrated scenarios.

Testing uses a matrix approach:
1. Feature area (canvas, NDV, modals, components)
2. CSS feature (custom properties, shadows, gradients, animations, fonts)
3. Browser (Chrome, Firefox, Safari, Edge)
4. Theme (light mode, dark mode)

### Design Patterns
- **Progressive Enhancement**: Base styles work everywhere, enhanced features where supported
- **Feature Detection**: Use CSS `@supports` for capability-based styling where needed
- **Graceful Degradation**: Acceptable visual differences documented, not blocking

### Technology Stack
- CSS Custom Properties (Level 1) - baseline browser support
- HSL Color Values - wide support, minor rendering differences
- CSS Gradients (Level 3) - universal support
- CSS Box Shadow - universal support
- CSS Animations/Transitions - universal support
- Variable Fonts (InterVariable) - modern browser support
- Flexbox/Grid - universal support

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/specs/phase03-session04-cross-browser-testing/TESTING_MATRIX.md` | Cross-browser test results matrix | ~150 |
| `.spec_system/specs/phase03-session04-cross-browser-testing/BROWSER_ISSUES.md` | Documented browser-specific issues and resolutions | ~100 |
| `.spec_system/specs/phase03-session04-cross-browser-testing/validation.md` | Session validation checklist | ~50 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/css/_tokens.scss` | Add vendor prefixes if needed | ~10 |
| `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss` | Add vendor prefixes if needed | ~10 |
| `packages/frontend/editor-ui/src/app/css/global.scss` | Browser-specific fixes if needed | ~20 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Chrome 121+ renders all components correctly (E2E baseline)
- [ ] Firefox 123+ renders all components with no major visual discrepancies
- [ ] Safari 17.3+ renders all components with no major visual discrepancies
- [ ] Edge 121+ renders all components with no major visual discrepancies
- [ ] CSS custom properties inherit correctly in all browsers
- [ ] Layered shadows render with correct depth in all browsers
- [ ] Gradient vignettes and backgrounds render smoothly in all browsers
- [ ] Animations and transitions perform smoothly in all browsers
- [ ] InterVariable and CommitMono fonts render correctly in all browsers

### Testing Requirements
- [ ] Manual testing completed in all 4 target browsers
- [ ] Both light and dark modes tested in each browser
- [ ] Canvas workflows tested (zoom, pan, node interaction)
- [ ] NDV panels tested (all three panels, code editor)
- [ ] Modal/dialog system tested
- [ ] Storybook components spot-checked

### Quality Gates
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] Code follows project conventions
- [ ] No console errors in any browser
- [ ] No layout breaks in any browser

---

## 8. Implementation Notes

### Key Considerations
- Safari uses a different HSL color rendering algorithm that may produce slightly different hues
- Firefox has unique gradient rendering that can affect subtle vignette effects
- Edge shares Chromium engine with Chrome but may have older builds with different behavior
- Variable font weight support varies - test specific weight values (300, 400, 500, 600, 700)
- Animation timing functions may render with slight differences across browsers

### Potential Challenges
- **Safari HSL rendering**: Minor hue differences acceptable if within 5% variance
- **Firefox gradient banding**: May need additional color stops for smooth gradients
- **Edge CSS inheritance**: Older Edge versions may have custom property edge cases
- **Variable font fallback**: Ensure fallback fonts work if variable font fails to load

### Relevant Considerations
- [P00] **Canvas inline styles for zoom/position**: Verify dynamic positioning works identically across browsers - inline style computation may vary
- [P00] **Element Plus specificity battles**: Test components with `!important` overrides - browser specificity calculation should be consistent but verify
- [P00] **Vue Flow 1.48.0**: Canvas library compatibility across all target browsers must be verified

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- No new unit tests required for this session
- Existing unit tests should pass in all browsers if CI supports cross-browser

### Integration Tests
- Run existing Playwright E2E tests in Chrome (baseline)
- Note any test failures as potential cross-browser issues

### Manual Testing
- Workflow canvas: Create, edit, zoom, pan workflow in each browser
- NDV: Open node, edit parameters, test code editor in each browser
- Modals: Trigger various modals (settings, credentials, help) in each browser
- Components: Spot-check Storybook stories in each browser
- Theme toggle: Switch between light/dark in each browser

### Edge Cases
- Maximum zoom levels on canvas
- Long workflow names/descriptions
- Complex node configurations
- Modal stacking behavior
- Font rendering at small sizes (10px, 11px, 12px)
- Gradient rendering on large surfaces

---

## 10. Dependencies

### External Libraries
- Element Plus 2.4.3 (patched for SSR)
- Vue Flow 1.48.0
- CodeMirror 6 (custom n8n plugins)
- InterVariable (variable font)
- CommitMono (monospace font)

### Other Sessions
- **Depends on**: `phase03-session03-token-color-cleanup` (tokens normalized)
- **Depended by**: `phase03-session05-performance-verification` (cross-browser baseline)

---

## Browser Testing Matrix Overview

| Browser | Version | Engine | Primary Focus |
|---------|---------|--------|---------------|
| Chrome | 121+ | Blink | E2E baseline, primary development |
| Firefox | 123+ | Gecko | Gradient/shadow rendering, font smoothing |
| Safari | 17.3+ | WebKit | HSL color rendering, variable fonts |
| Edge | 121+ | Blink (Chromium) | CSS custom property inheritance |

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

# Session Specification

**Session ID**: `phase05-session06-integration-qa`
**Phase**: 05 - Retro-Futuristic Icon System (Chrome Deco)
**Status**: Not Started
**Created**: 2026-01-07

---

## 1. Session Overview

This is the final session of Phase 05 and the culmination of the entire n8n Design Overhaul project spanning 35 sessions across 6 phases. The session integrates all icon system components developed in sessions 01-05 with the live canvas workflow execution, performs comprehensive QA testing, and creates documentation for future contributors.

The icon animation foundation, variable stroke weight system, Phosphor icon migration, chrome deco visual effects, and custom icon art deco redesign are now complete. This session binds these capabilities to real application state - connecting animations to workflow execution (running/success/error states), applying hover/focus states to toolbar icons, and ensuring the entire system performs well and works across all browsers.

Successful completion marks the end of a major design transformation: from the original n8n visual identity to the Obsidian Forge aesthetic with retro-futuristic icon language, comprehensive theming, and professional-grade design system documentation.

---

## 2. Objectives

1. Integrate icon animations with canvas node execution states (running, success, error, selected)
2. Implement toolbar and settings icon hover/focus state interactions
3. Verify performance targets: 60fps animations, <5KB CSS bundle increase, no layout thrashing
4. Conduct cross-browser compatibility testing (Chrome, Firefox, Safari)
5. Ensure accessibility compliance (prefers-reduced-motion, screen reader support, focus states)
6. Create comprehensive Storybook documentation showcasing the complete icon system
7. Write contributor guidelines for icon animations and art deco SVG design

---

## 3. Prerequisites

### Required Sessions
- [x] `phase05-session01-icon-animation-foundation` - Animation props, keyframes, CSS infrastructure
- [x] `phase05-session02-variable-stroke-weight` - Stroke weight tokens and transitions
- [x] `phase05-session03-phosphor-migration` - 196 Phosphor icons with 6 weight variants
- [x] `phase05-session04-chrome-deco-effects` - Shimmer, bevel, sunburst SCSS mixins
- [x] `phase05-session05-custom-icon-redesign` - 40 custom SVGs redesigned with art deco aesthetic

### Required Tools/Knowledge
- Vue 3 Composition API for reactive state bindings
- CSS custom properties and animation techniques
- Playwright for cross-browser testing
- Storybook 8/9 for documentation authoring
- Chrome DevTools Performance panel for FPS profiling

### Environment Requirements
- Node.js with pnpm workspaces
- Chrome, Firefox, Safari (latest versions) for cross-browser testing
- Storybook running on port 6006
- Frontend dev server on port 8080

---

## 4. Scope

### In Scope (MVP)
- Canvas node status icon animation bindings (CanvasNodeStatusIcons.vue)
- Toolbar and settings icon hover/focus state bindings
- Performance verification (60fps, <5KB CSS, paint profiling)
- Cross-browser testing (Chrome, Firefox, Safari)
- Accessibility testing (reduced motion, screen readers, keyboard navigation)
- Storybook documentation pages for icon system
- Contributor guidelines documentation

### Out of Scope (Deferred)
- New icon designs - *Reason: Icon library is complete with 196 Phosphor + 40 custom icons*
- Additional animation types beyond those in session 01 - *Reason: Current set covers all use cases*
- Advanced canvas effects (particle systems, trails) - *Reason: Outside project scope*
- Mobile/touch-specific interactions - *Reason: n8n is desktop-focused application*

---

## 5. Technical Approach

### Architecture
The integration follows Vue 3 reactive patterns, binding computed properties to icon component props based on canvas node state. The N8nIcon component already supports all required props (animation, animationState, glow, glowColor, strokeWidth, chromatic) - this session wires them to the canvas state management system.

Canvas node state flows: Workflow execution store -> Canvas node component -> CanvasNodeStatusIcons computed bindings -> N8nIcon props

### Design Patterns
- **Computed State Mapping**: Map node execution state to animation props via computed properties
- **CSS Custom Property Animation**: Use CSS variables to control animation state for GPU-accelerated transitions
- **Progressive Enhancement**: Animations enhance the experience but don't break core functionality if disabled

### Technology Stack
- Vue 3.5+ with Composition API
- CSS Custom Properties for animation control
- Phosphor Icons (phosphor-icons/vue)
- Storybook 9 for documentation
- Playwright for cross-browser testing
- Chrome DevTools for performance profiling

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/docs/ICON_CONTRIBUTOR_GUIDELINES.md` | Guidelines for icon animations and art deco SVG design | ~200 |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `editor-ui/.../CanvasNodeStatusIcons.vue` | Add animation bindings for node execution states | ~40 |
| `editor-ui/.../CanvasNodeSettingsIcons.vue` | Add hover/focus state bindings | ~30 |
| `editor-ui/.../CanvasNodeToolbar.vue` | Icon interaction state updates | ~25 |
| `design-system/.../N8nIcon/Icon.stories.ts` | Comprehensive documentation stories | ~150 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Canvas nodes show pulse animation during workflow execution
- [ ] Success state icons display glow with verdigris color
- [ ] Error state icons display pulse animation with ember glow
- [ ] Selected node icons show glow-breathe animation with amber glow
- [ ] Toolbar icons respond to hover with stroke weight transition
- [ ] Toolbar icons show focus state for keyboard navigation
- [ ] Chrome/chromatic effect displays on primary action icons

### Testing Requirements
- [ ] Unit tests for animation state computed properties
- [ ] Playwright cross-browser visual tests
- [ ] Manual testing of workflow execution icon states
- [ ] Performance profiling completed with documented results

### Quality Gates
- [ ] 60fps animation performance verified
- [ ] CSS bundle increase <5KB verified
- [ ] No layout thrashing detected
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] Code follows project conventions
- [ ] Storybook stories render correctly in light/dark modes

---

## 8. Implementation Notes

### Key Considerations
- Canvas inline styles for zoom/position must not conflict with icon animations
- Timing coordination between canvas state changes and icon animation start/stop
- Safari CSS filter support may require fallbacks for some effects
- Phosphor icon weight transitions should use CSS transitions, not JS animation

### Potential Challenges
- **Performance on complex canvas**: Many animated icons running simultaneously - use `will-change` sparingly, prefer `transform` and `opacity` for GPU acceleration
- **Safari filter effects**: CSS `filter` and `backdrop-filter` behave differently in Safari - test shimmer/bevel effects and document any limitations
- **State transition timing**: Animation should start/stop at correct moments - bind to execution state reactively, not via event handlers
- **Prefers-reduced-motion**: Must completely disable all animations, not just slow them down

### Relevant Considerations
- [P00] **Canvas inline styles for zoom/position**: Icon animations use CSS transforms that must coexist with dynamic positioning. Use separate animation layer if needed.
- [P03] **Playwright automated testing works well**: Use for cross-browser Storybook verification. Sample first/middle/last from each category.
- [P03] **Theme toggle URL parameter**: Use `?globals=theme:dark` for programmatic dark mode testing without clicking UI elements.
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` on port 6006 for documentation development.

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- Test animation state computed property returns correct values for each node state
- Test stroke weight computed property based on hover/focus state
- Test glow color selection based on execution result

### Integration Tests
- Test icon animation triggers when workflow starts
- Test animation stops when workflow completes
- Test multiple nodes animating simultaneously

### Manual Testing
- Execute workflow with multiple nodes, observe icon animation timing
- Hover/click toolbar icons, verify visual feedback
- Switch between light/dark themes during animation
- Test with prefers-reduced-motion enabled in OS settings
- Test with screen reader (VoiceOver on macOS, NVDA on Windows)

### Edge Cases
- Rapid workflow start/stop (animation shouldn't flicker)
- Node with error followed by retry (animation resets correctly)
- Very long-running workflow (animation continues without degradation)
- Canvas zoom while icons are animating (no visual glitches)
- Theme toggle while animations are running

---

## 10. Dependencies

### External Libraries
- `@phosphor-icons/vue`: ^2.x (already installed)
- `playwright`: ^1.x (already installed)
- `storybook`: ^9.x (already installed)

### Other Sessions
- **Depends on**: phase05-session01 through phase05-session05 (all complete)
- **Depended by**: None - this is the final session of the project

---

## Node State to Icon Animation Mapping

| Node State | Animation | Glow | Glow Color | Stroke Weight |
|------------|-----------|------|------------|---------------|
| Idle | none | false | - | normal |
| Selected | glow-breathe | true | amber | medium |
| Running | pulse | true | amber | bold |
| Success | brighten | true | verdigris | medium |
| Error | pulse | true | ember | medium |
| Disabled | none | false | - | thin |

---

## Performance Benchmarks

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Animation FPS | 60fps | Chrome DevTools Performance panel |
| Paint Time | <5ms per frame | Chrome DevTools Rendering tab |
| CSS Bundle Increase | <5KB | Build output diff comparison |
| Layout Shifts | 0 | Lighthouse CLS metric |
| First Contentful Paint | No regression | Lighthouse FCP comparison |

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

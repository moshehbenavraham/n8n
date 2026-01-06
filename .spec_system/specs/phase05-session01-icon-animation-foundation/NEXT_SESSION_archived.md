# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-07
**Project State**: Phase 05 - Retro-Futuristic Icon System (Chrome Deco)
**Completed Sessions**: 29 of 35 (83%)

---

## Recommended Next Session

**Session ID**: `phase05-session01-icon-animation-foundation`
**Session Name**: Icon Animation Foundation
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Phase 04 Typography Evolution completed (all 4 sessions)
- [x] Design system components fully themed (Phases 00-03)
- [x] Icon.vue component exists and functional
- [x] Animation tokens infrastructure established in Phase 00

### Dependencies
- **Builds on**: Phase 00 motion tokens (easing curves, durations)
- **Enables**: Session 02 (Variable Stroke Weight), Session 03 (Phosphor Migration), Session 04 (Chrome Deco Effects)

### Project Progression
This is the foundational session for Phase 05. The Chrome Deco icon system requires animation capabilities before any visual effects can be implemented. Session 01 establishes:
1. Animation props on Icon.vue (the single source of icon rendering)
2. Animation keyframes that will be used throughout Phase 05
3. Glow system infrastructure for the chrome/metallic aesthetic
4. Accessibility foundation (prefers-reduced-motion support)

All subsequent Phase 05 sessions depend on this animation foundation.

---

## Session Overview

### Objective
Extend the Icon.vue component with animation props and create the foundational animation infrastructure for the Chrome Deco icon system.

### Key Deliverables
1. Extended Icon.vue with animation, animationState, glow, glowColor, glowIntensity props
2. Four keyframe animations: icon-pulse, icon-glow-breathe, icon-shimmer, icon-brighten
3. Icon animation tokens in _primitives.scss
4. Storybook stories demonstrating all animation states
5. prefers-reduced-motion accessibility support

### Scope Summary
- **In Scope (MVP)**: Animation props, keyframes, tokens, Storybook stories, reduced-motion support
- **Out of Scope**: Stroke weight system (Session 02), Phosphor migration (Session 03), chrome effects (Session 04)

---

## Technical Considerations

### Technologies/Patterns
- Vue 3 Composition API with defineProps/withDefaults
- SCSS keyframes with CSS custom property references
- CSS filters (drop-shadow, brightness) for glow effects
- window.matchMedia for reduced-motion detection

### Potential Challenges
- **SVG filter performance**: Glow effects using drop-shadow may impact rendering performance on large icon counts. Monitor canvas performance with many animated nodes.
- **Cross-browser keyframe interpolation**: Ensure smooth animation in Chrome, Firefox, and Safari. Safari may require -webkit- prefixes for some filter properties.
- **Existing Icon.vue complexity**: The component already has size, color, spin props. New animation props must integrate cleanly without breaking existing usage.

### Relevant Considerations
- [P00] **Canvas inline styles for zoom/position**: Animation props should not interfere with canvas icon positioning
- [P00] **Dark mode via data-theme attribute**: Glow colors need appropriate dark mode variants
- [P00] **Design system well-organized**: Use Storybook (port 6006) to verify all animation changes

---

## Alternative Sessions

If this session is blocked:
1. **Session 02 - Variable Stroke Weight System** - Could be started in parallel if Icon.vue props are unavailable, but would require later integration
2. **Session 03 - Phosphor Icon Migration** - Package migration is independent of animation system, but animations won't work until Session 01 complete

---

## Next Steps

Run `/sessionspec` to generate the formal specification for `phase05-session01-icon-animation-foundation`.

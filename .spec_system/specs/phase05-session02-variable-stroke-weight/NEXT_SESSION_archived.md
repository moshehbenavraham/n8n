# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-07
**Project State**: Phase 05 - Retro-Futuristic Icon System (Chrome Deco)
**Completed Sessions**: 30

---

## Recommended Next Session

**Session ID**: `phase05-session02-variable-stroke-weight`
**Session Name**: Variable Stroke Weight System
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: ~18

---

## Why This Session Next?

### Prerequisites Met
- [x] Icon Animation Foundation (session 01) - animation props, keyframes, state bindings complete
- [x] Design system token architecture established (Phases 00-04)
- [x] Icon.vue component ready for stroke weight extension

### Dependencies
- **Builds on**: phase05-session01-icon-animation-foundation (animation props, CSS keyframes)
- **Enables**: phase05-session03-phosphor-migration (stroke weight tokens needed for Phosphor icons)

### Project Progression
This session establishes the variable stroke weight token system that is foundational for the Chrome Deco icon aesthetic. The PRD specifies different stroke weights for interaction states (rest: 1.5px, hover: 2px, active: 2.5px). Without this system, subsequent sessions (Phosphor migration, Chrome Deco effects) cannot achieve the visual weight differentiation central to the retro-futuristic design.

---

## Session Overview

### Objective
Create a complete stroke weight token system with CSS transitions for smooth weight changes across icon interaction states.

### Key Deliverables
1. Stroke weight tokens in `_primitives.scss` (thin: 1px, normal: 1.5px, medium: 2px, bold: 2.5px, heavy: 3px)
2. Stroke weight state tokens in `_tokens.scss` (rest, hover, active, focus, disabled)
3. Updated Icon.vue supporting both numeric and token-based strokeWidth values
4. Smooth CSS transitions (200ms) with prefers-reduced-motion support
5. Storybook documentation demonstrating stroke weight states

### Scope Summary
- **In Scope (MVP)**: Token definitions, Icon.vue updates, CSS transitions, cross-browser testing, Storybook stories
- **Out of Scope**: Size-responsive stroke weight (optional enhancement), advanced stroke animations

---

## Technical Considerations

### Technologies/Patterns
- SCSS CSS custom properties for token cascade
- TypeScript union types for strokeWidth prop
- CSS transitions with `--easing--forge-enter` timing function
- SVG stroke-width property on path, rect, circle, line elements

### Potential Challenges
- Cross-browser SVG stroke-width transition support (Safari may need testing)
- Ensuring stroke weight applies to all SVG shape types (path, rect, circle, line, polyline, polygon)
- Maintaining backwards compatibility with numeric strokeWidth values

### Relevant Considerations
- [P00] **Dual token naming convention**: Maintain `--icon--stroke-weight--*` format consistent with existing `--color--*` tokens
- [P00] **Design system well-organized**: Use Storybook at port 6006 to verify all stroke weight states

---

## Alternative Sessions

If this session is blocked:
1. **phase05-session03-phosphor-migration** - Could proceed with default stroke weights, but would require rework later
2. **phase05-session04-chrome-deco-effects** - Visual effects could be developed independently, but stroke weight integration would be incomplete

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

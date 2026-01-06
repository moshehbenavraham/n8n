# Session Specification

**Session ID**: `phase05-session01-icon-animation-foundation`
**Phase**: 05 - Retro-Futuristic Icon System (Chrome Deco)
**Status**: Not Started
**Created**: 2026-01-07

---

## 1. Session Overview

This session establishes the foundational animation infrastructure for Phase 05's Chrome Deco icon system. The Icon.vue component will be extended with new animation props (animation, animationState, glow, glowColor, glowIntensity) that enable the retro-futuristic visual language defined in the PRD. These props will provide fine-grained control over icon behavior across different interaction states.

Four keyframe animations will be created: icon-pulse (scale/opacity oscillation), icon-glow-breathe (ambient drop-shadow cycling), icon-shimmer (chrome highlight sweep), and icon-brighten (quick brightness flash). These animations form the vocabulary for all subsequent Phase 05 sessions, where they'll be applied to workflow states, node status indicators, and UI interactions.

Accessibility is central to this implementation. All animations will respect the prefers-reduced-motion media query, ensuring users who prefer reduced motion see static icons. The glow system uses CSS filters (drop-shadow, brightness) which are GPU-composited for 60fps performance. Animation tokens in _primitives.scss will ensure consistent timing and easing across the design system.

---

## 2. Objectives

1. Extend Icon.vue with animation props (animation, animationState, glow, glowColor, glowIntensity) while maintaining full backwards compatibility with existing usages
2. Create four icon-specific keyframe animations (icon-pulse, icon-glow-breathe, icon-shimmer, icon-brighten) with token-driven timing
3. Add animation duration, easing, and glow intensity tokens to _primitives.scss for design system consistency
4. Implement prefers-reduced-motion accessibility support that disables all animations when user preference is set

---

## 3. Prerequisites

### Required Sessions
- [x] `phase00-session04-visual-atmosphere-motion` - Established animation infrastructure (_animations.scss, forge-glow easing)
- [x] `phase04-session04-typography-qa-documentation` - Phase 04 complete, all prerequisites met

### Required Tools/Knowledge
- Vue 3 Composition API (defineProps, withDefaults, computed)
- SCSS keyframes with CSS custom property references
- CSS filters (drop-shadow, brightness)
- window.matchMedia API for prefers-reduced-motion detection

### Environment Requirements
- Node.js with pnpm for package management
- Storybook accessible on port 6006 for visual verification
- Design system dev environment functional

---

## 4. Scope

### In Scope (MVP)
- Add 5 new props to Icon.vue: animation, animationState, glow, glowColor, glowIntensity
- Create _icon-animations.scss with 4 keyframe definitions
- Add animation tokens to _primitives.scss (durations, easings, glow intensities)
- Extend icon.ts types with new animation-related type unions
- Implement CSS-based prefers-reduced-motion support
- Create Storybook stories demonstrating all animation variants
- Light and dark mode glow color support

### Out of Scope (Deferred)
- Variable stroke weight system - *Reason: Session 02 deliverable*
- Phosphor icon migration - *Reason: Session 03 deliverable*
- Chrome shimmer/bevel effects - *Reason: Session 04 deliverable*
- Custom SVG redesigns - *Reason: Session 05 deliverable*
- Canvas integration - *Reason: Session 06 deliverable*
- chromatic prop - *Reason: Session 04 deliverable*

---

## 5. Technical Approach

### Architecture

The implementation follows the established design system token cascade:

1. **Token Layer** (_primitives.scss): Define animation duration, easing, and glow intensity tokens
2. **Animation Layer** (_icon-animations.scss): Keyframe definitions referencing tokens
3. **Type Layer** (icon.ts): TypeScript definitions for new prop types
4. **Component Layer** (Icon.vue): Extended props, computed classes/styles, CSS module

### Design Patterns
- **Token-driven styling**: All animation values reference CSS custom properties for consistency
- **Composition API**: Use withDefaults for prop defaults, computed for reactive class/style generation
- **Progressive enhancement**: Animations are optional additions; existing usages unaffected
- **CSS-first accessibility**: Use @media (prefers-reduced-motion: reduce) for zero-JS fallback

### Technology Stack
- Vue 3.5+ with Composition API
- SCSS with CSS custom properties
- CSS filters (drop-shadow, brightness)
- Storybook 9 for documentation

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/css/_icon-animations.scss` | Keyframe definitions and animation classes | ~80 |

### Files to Modify
| File | Changes | Est. Lines Changed |
|------|---------|------------|
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.vue` | Add 5 new props, computed classes/styles, CSS module classes | ~60 |
| `packages/frontend/@n8n/design-system/src/types/icon.ts` | Add animation type definitions | ~15 |
| `packages/frontend/@n8n/design-system/src/css/_primitives.scss` | Add animation tokens | ~20 |
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.stories.ts` | Add animation demonstration stories | ~150 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Icon.vue accepts animation prop with values: 'none', 'pulse', 'glow-breathe', 'shimmer', 'brighten'
- [ ] Icon.vue accepts animationState prop with values: 'rest', 'hover', 'active', 'focus', 'success', 'error'
- [ ] Icon.vue accepts glow prop (boolean) to enable/disable glow effect
- [ ] Icon.vue accepts glowColor prop with values: 'amber', 'verdigris', 'ember', 'steel'
- [ ] Icon.vue accepts glowIntensity prop with values: 'subtle', 'medium', 'strong'
- [ ] All 4 keyframe animations render correctly and loop smoothly
- [ ] Existing Icon usages work without modification (backwards compatible)

### Testing Requirements
- [ ] Storybook stories created for each animation type
- [ ] Storybook stories created for all glow color variants
- [ ] Manual testing in light mode completed
- [ ] Manual testing in dark mode completed
- [ ] prefers-reduced-motion tested with emulation

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings
- [ ] No TypeScript errors with new prop types
- [ ] No console errors when using new props
- [ ] Code follows project conventions (CONVENTIONS.md)

---

## 8. Implementation Notes

### Key Considerations
- Icon.vue currently has 133 lines with IconProps interface defined inline; extend this interface in-place
- The existing strokeWidth prop uses computed styles pattern; follow same pattern for glow
- Use $style (useCssModule) pattern already established in Icon.vue for animation classes
- Glow colors should map to existing alpha-channel color tokens (--color--amber-alpha-400, etc.)

### Potential Challenges
- **SVG filter performance**: drop-shadow filters can be expensive. Use GPU-composited properties (transform, opacity) alongside filters.
- **Cross-browser keyframe support**: Safari may need -webkit- prefixes for filter animations. Test in all major browsers.
- **Dark mode glow visibility**: Glow colors need sufficient contrast in dark mode. Test amber/verdigris/ember/steel against dark background.

### Relevant Considerations
- [P00] **Canvas inline styles for zoom/position**: Animation props use CSS classes, not inline styles, so no conflict expected
- [P00] **Dark mode via data-theme attribute**: Glow colors will use existing alpha tokens which cascade correctly in dark mode
- [P00] **Design system well-organized**: Verify all animation changes via Storybook (port 6006)
- [P00] **V2 component migration in progress**: Icon.vue is not a V2 component, but changes should not interfere

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No unicode characters in SCSS, TypeScript, or Vue files.

---

## 9. Testing Strategy

### Unit Tests
- TypeScript compilation succeeds with new prop types
- Props accept all documented values without error

### Integration Tests
- Icon renders correctly with all prop combinations
- Animation classes are applied when animation prop is set
- Glow styles are computed correctly based on glowColor and glowIntensity

### Manual Testing
- Open Storybook and navigate to Icon stories
- Verify each animation type plays smoothly (60fps visual check)
- Verify glow colors match expected token values
- Toggle dark mode and verify glow visibility
- Enable prefers-reduced-motion in browser and verify animations stop
- Test in Chrome, Firefox, and Safari

### Edge Cases
- Icon with spin=true and animation='pulse' (both active)
- Icon with glow=true but no glowColor (should use default amber)
- Icon with animation but prefers-reduced-motion enabled (should be static)
- Very small icon (xsmall, 10px) with glow effect (should remain visible)

---

## 10. Dependencies

### External Libraries
- None (uses existing Vue 3, SCSS infrastructure)

### Other Sessions
- **Depends on**: Phase 04 complete, existing animation infrastructure from phase00-session04
- **Depended by**: phase05-session02 (stroke weights), phase05-session03 (Phosphor), phase05-session04 (chrome effects), phase05-session06 (integration)

---

## Token Reference

### Animation Duration Tokens
```scss
--icon--animation--duration--pulse: 2s;
--icon--animation--duration--glow: 3s;
--icon--animation--duration--shimmer: 2.5s;
--icon--animation--duration--brighten: 0.3s;
```

### Animation Easing Tokens
```scss
--icon--animation--easing--pulse: ease-in-out;
--icon--animation--easing--glow: var(--easing--forge-glow);
```

### Glow Intensity Tokens
```scss
--icon--glow--subtle: 0 0 4px;
--icon--glow--medium: 0 0 8px;
--icon--glow--strong: 0 0 16px;
```

### Glow Color Mapping
```typescript
const glowColorMap = {
  amber: '--color--amber-alpha-400',
  verdigris: '--color--success-alpha-400',
  ember: '--color--danger-alpha-400',
  steel: '--color--secondary-alpha-400',
};
```

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

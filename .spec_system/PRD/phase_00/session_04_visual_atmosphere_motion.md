# Session 04: Visual Atmosphere & Motion

**Session ID**: `phase00-session04-visual-atmosphere-motion`
**Status**: Not Started
**Estimated Tasks**: ~18
**Estimated Duration**: 3-4 hours

---

## Objective

Implement the visual atmosphere and motion system that gives the Obsidian Forge aesthetic its distinctive industrial luxury feel - background treatments, animation keyframes, shadow depth, and focus states.

---

## Scope

### In Scope (MVP)
- Implement noise texture overlay mixin
- Implement gradient mesh backgrounds (light and dark)
- Create animation keyframes (forge-reveal, ember-pulse, flow-pulse)
- Implement focus ring mixin with amber glow
- Implement interactive element base mixin
- Add fade divider pattern
- Implement spacing scale tokens
- Implement border radius scale tokens
- Add reduced motion support

### Out of Scope
- Canvas-specific animations (Phase 02)
- Component-specific hover states (Phase 01)
- Full page transition choreography (Phase 03)

---

## Prerequisites

- [ ] Session 01 completed (color and motion tokens available)
- [ ] Session 03 completed (Element Plus base integration)

---

## Deliverables

1. Background treatment SCSS mixins/utilities
2. Animation keyframes in design system
3. Focus ring mixin with amber glow
4. Interactive element base mixin
5. Spacing scale tokens
6. Border radius scale tokens
7. Reduced motion media query support
8. Visual atmosphere applied to main containers

---

## Key Files

- `packages/frontend/@n8n/design-system/src/css/_primitives.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_mixins.scss` (may need to create)
- `packages/frontend/@n8n/design-system/src/css/_animations.scss` (may need to create)

---

## Technical Implementation

### Animation Keyframes
```scss
@keyframes forge-reveal {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes ember-pulse {
  0%, 100% { box-shadow: 0 0 0 0 hsla(38, 92%, 55%, 0); }
  50% { box-shadow: 0 0 0 8px hsla(38, 92%, 55%, 0.15); }
}

@keyframes flow-pulse {
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}
```

### Focus Ring Mixin
```scss
@mixin focus-ring {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color--background-primary),
    0 0 0 4px var(--color--amber-500),
    var(--shadow--glow-sm);
}
```

---

## Success Criteria

- [ ] Noise texture mixin available and documented
- [ ] Gradient mesh backgrounds work in light and dark modes
- [ ] forge-reveal animation works for page load reveals
- [ ] ember-pulse animation works for running states
- [ ] flow-pulse animation works for connection flows
- [ ] Focus ring shows amber glow on keyboard navigation
- [ ] Interactive element hover/active states feel "industrial"
- [ ] Spacing scale tokens available (0-24)
- [ ] Border radius scale tokens available
- [ ] `prefers-reduced-motion` respected
- [ ] Visual atmosphere visible on main app container
- [ ] `pnpm build` passes without errors

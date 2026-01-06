# PRD Phase 05: Retro-Futuristic Icon System - Chrome Deco

**Status**: In Progress
**Sessions**: 6
**Estimated Duration**: 8-12 days

**Progress**: 4/6 sessions (67%)

---

## Overview

Phase 05 transforms the n8n icon system into a distinctive **"Chrome Deco"** visual language that embodies retro-futuristic aesthetics. This phase implements variable stroke weights, animated icon states, migrates from Lucide to Phosphor icons, and redesigns all 40 custom SVGs with art deco styling.

The Chrome Deco aesthetic draws from Art Deco (1920s-30s geometric precision), Streamline Moderne (chrome accents, aerodynamic curves), Mid-century Futurism (atomic age optimism), and Synthwave (neon grid aesthetics, digital nostalgia). Icons will feature variable stroke weights that respond to interaction states, moderate chrome shimmer effects visible on hover/active, and glow animations that suggest contained energy.

This phase builds upon the Obsidian Forge design system established in previous phases, leveraging the existing amber/obsidian/steel color palette and animation infrastructure while introducing icon-specific enhancements that create a truly unique visual identity.

---

## Progress Tracker

| Session | Name | Status | Est. Tasks | Validated |
|---------|------|--------|------------|-----------|
| 01 | Icon Animation Foundation | Complete | 20 | 2026-01-07 |
| 02 | Variable Stroke Weight System | Complete | 22 | 2026-01-07 |
| 03 | Phosphor Icon Migration | Complete | 20 | 2026-01-07 |
| 04 | Chrome Deco Visual Effects | Complete | 20 | 2026-01-07 |
| 05 | Custom Icon Art Deco Redesign | Not Started | ~24 | - |
| 06 | Integration, QA & Documentation | Not Started | ~18 | - |

---

## Objectives

1. **Extend Icon Component Architecture** - Add animation, glow, and chromatic props to N8nIcon while maintaining backwards compatibility
2. **Implement Variable Stroke Weights** - Create token-based stroke weight system with smooth CSS transitions between states (rest, hover, active, focus, disabled)
3. **Migrate to Phosphor Icons** - Replace 196 Lucide icons with Phosphor for native variable weight support and distinctive styling
4. **Create Chrome Deco Visual Effects** - Implement metallic shimmer, beveled edges, and sunburst glow animations
5. **Redesign All Custom Icons** - Transform all 40 custom SVGs with art deco aesthetic (geometric precision, stepped edges, chrome accents)
6. **Integrate with Canvas System** - Apply icon animations to workflow execution states, node status indicators, and toolbar interactions
7. **Ensure Performance & Accessibility** - Maintain 60fps animations, respect prefers-reduced-motion, and keep CSS bundle increase under 5KB

---

## Prerequisites

- Phase 04 complete (Typography system with Outfit/JetBrains Mono fonts)
- Existing animation infrastructure (`_animations.scss`, `_forge-mixins.scss`)
- Current icon system functional (Icon.vue, icons.ts, 40 custom SVGs)
- Node.js environment capable of installing new npm packages

---

## Technical Considerations

### Architecture

The icon system enhancement follows a layered approach:

1. **Token Layer** (`_primitives.scss`) - Stroke weights, animation durations, glow intensities
2. **Animation Layer** (`_icon-animations.scss`) - Keyframe definitions for icon-specific animations
3. **Effect Layer** (`_icon-effects.scss`) - Chrome gradient, bevel, and sunburst mixins
4. **Component Layer** (`Icon.vue`) - Extended props, computed styles, CSS module classes
5. **Integration Layer** (Canvas components) - Application of icon states to workflow UI

### Primary Files Affected

| File | Changes |
|------|---------|
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/Icon.vue` | Extended props, animation state machine, CSS variable bindings |
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/icons.ts` | Phosphor imports, updated registry |
| `packages/frontend/@n8n/design-system/src/types/icon.ts` | New type definitions for animation props |
| `packages/frontend/@n8n/design-system/src/css/_primitives.scss` | Stroke weight, glow, animation tokens |
| `packages/frontend/@n8n/design-system/src/css/_animations.scss` | Icon-specific keyframes |
| `packages/frontend/@n8n/design-system/vite.config.mts` | Phosphor icon compilation |
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/custom/*.svg` | All 40 custom SVG redesigns |

### New Files to Create

| File | Purpose |
|------|---------|
| `packages/frontend/@n8n/design-system/src/css/_icon-animations.scss` | Dedicated icon animation keyframes |
| `packages/frontend/@n8n/design-system/src/css/_icon-effects.scss` | Chrome/bevel/sunburst effect mixins |

### Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Phosphor missing Lucide equivalents | Medium | High | Create mapping table first, identify gaps early |
| Chrome effects cause performance issues | Medium | Medium | Use GPU-composited properties (transform, opacity) |
| Art deco icons lose clarity at small sizes | Medium | Medium | Test all icons at 10px before finalizing |
| Breaking existing icon usages | Low | High | All new props optional with sensible defaults |
| Animation bundle size bloat | Low | Medium | Lazy-load animation CSS, target <5KB |

---

## Success Criteria

### Functional Requirements
- [ ] Icon.vue accepts all new props: animation, animationState, glow, glowColor, glowIntensity, chromatic
- [ ] Variable stroke weight transitions smoothly between states (200ms duration)
- [ ] All 5 animation types implemented and functional (pulse, glow-breathe, shimmer, flow, brighten)
- [x] Phosphor icon migration complete (196 icons mapped and working)
- [ ] All 40 custom SVGs redesigned with art deco aesthetic
- [ ] Backwards compatible - all existing icon usages work without modification

### Visual Requirements
- [ ] Icons feel distinctly "retro-futuristic" without being cartoonish
- [ ] Chrome shimmer effects visible on hover/active states (moderate intensity)
- [ ] Stroke weight changes perceptible but not jarring
- [ ] Art deco custom icons maintain visual clarity at all sizes (10px-40px)
- [ ] Effects complement Obsidian Forge amber/obsidian/steel palette

### Performance Requirements
- [ ] Icon animations run at 60fps on mid-range devices
- [ ] No layout thrashing from animations (use transform/opacity only)
- [ ] CSS bundle increase less than 5KB
- [ ] SVG filter effects do not cause excessive paint costs

### Accessibility Requirements
- [ ] prefers-reduced-motion disables all icon animations
- [ ] Icons remain recognizable without visual effects
- [ ] Color contrast maintained for all icon states

### Documentation Requirements
- [ ] Storybook stories for all animation states and effects
- [ ] Icon usage guidelines in design documentation
- [ ] Animation timing/easing reference chart
- [ ] Art deco SVG design principles for contributors

---

## Dependencies

### Depends On
- **Phase 04** - Typography Evolution (Outfit/JetBrains Mono fonts)
- **Existing Infrastructure** - Animation system (`_animations.scss`), color tokens (`_primitives.scss`)

### Enables
- Enhanced visual feedback during workflow execution
- Distinctive brand identity through icon styling
- Foundation for future micro-interaction enhancements
- Potential for icon theming system

---

## Sessions Summary

### Session 01: Icon Animation Foundation
Establishes the animation infrastructure for icons. Extends Icon.vue with new props (animation, animationState, glow, glowColor, glowIntensity), creates icon-specific keyframe animations (icon-pulse, icon-glow-breathe, icon-shimmer, icon-brighten), adds animation tokens to the design system, and implements prefers-reduced-motion support.

### Session 02: Variable Stroke Weight System
Implements the token-based stroke weight system. Creates stroke weight tokens (thin through heavy), adds state-specific tokens (rest, hover, active, focus, disabled), implements CSS transitions for smooth weight changes, and updates Icon.vue to accept both numeric and token-based strokeWidth values.

### Session 03: Phosphor Icon Migration
Migrates from Lucide to Phosphor icon library. Installs @iconify-json/ph package, creates comprehensive Lucide-to-Phosphor mapping table, updates icons.ts with 196 Phosphor imports, migrates deprecated icon set mappings, and verifies all existing icon usages continue to work.

### Session 04: Chrome Deco Visual Effects
Creates the distinctive retro-futuristic visual effects. Implements chrome gradient shimmer with animated highlight sweep, metallic sheen overlay system (visible on hover/active), art deco glow effects with sunburst animations, beveled edge filter effects, and adds the chromatic prop to Icon.vue.

### Session 05: Custom Icon Art Deco Redesign
Redesigns all 40 custom SVGs with art deco aesthetic. Documents design principles (45/90 degree angles, stepped edges, sunburst motifs), transforms status icons, node icons, workflow icons, brand icons, and UI icons with geometric precision and chrome accents while maintaining clarity at all supported sizes.

### Session 06: Integration, QA & Documentation
Integrates the icon system with canvas components and completes quality assurance. Applies icon animations to canvas node status icons, implements hover/focus states across toolbar and settings icons, performs performance testing, conducts cross-browser testing, and creates comprehensive Storybook documentation.

---

## Extended Icon Props Reference

```typescript
interface IconProps {
  // Existing props
  icon: IconName;
  size?: IconSize | number;
  spin?: boolean;
  color?: IconColor;
  strokeWidth?: number | 'thin' | 'normal' | 'medium' | 'bold' | 'heavy';

  // New animation props
  animation?: 'none' | 'pulse' | 'glow-breathe' | 'shimmer' | 'flow';
  animationState?: 'rest' | 'hover' | 'active' | 'focus' | 'success' | 'error';
  glow?: boolean;
  glowColor?: 'amber' | 'verdigris' | 'ember' | 'steel';
  glowIntensity?: 'subtle' | 'medium' | 'strong';
  chromatic?: boolean;
}
```

---

## Icon State Visual Matrix

| State | Stroke Weight | Chrome Effect | Glow | Animation |
|-------|---------------|---------------|------|-----------|
| Rest | 1.5px (normal) | None | None | None |
| Hover | 2px (medium) | Shimmer visible | Subtle amber | Gentle brighten |
| Active | 2.5px (bold) | Full chrome | Medium amber pulse | ember-pulse |
| Focus | 2px (medium) | Subtle shimmer | Strong amber ring | glow-breathe |
| Disabled | 1px (thin) | None | None | None |
| Success | 2px (medium) | Flash | Verdigris tint | Quick brighten |
| Error | 2px (medium) | None | Ember glow | Attention pulse |

---

## Design Philosophy: Chrome Deco

### Visual Influences

**Art Deco (1920s-1930s)**
- Sharp angles at 45, 60, and 90 degrees
- Geometric precision and symmetry
- Sunburst and radial motifs
- Stepped/terraced edges

**Streamline Moderne**
- Chrome accents suggesting polished metal
- Aerodynamic curves
- Metallic sheen and reflections

**Mid-century Futurism**
- Atomic age optimism
- Raygun gothic aesthetic
- Space-age chrome

**Synthwave/Outrun**
- Neon grid aesthetics
- Chrome reflections
- Digital nostalgia

### Design Principles for Icons

1. **Geometric Precision** - Icons should feel engineered with deliberate angles
2. **Chrome Sheen** - Subtle gradients suggesting polished metal surfaces
3. **Variable Weight** - Stroke weights respond to interaction states
4. **Animated Energy** - Pulse, glow, breathe animations suggest contained power
5. **Art Deco Details** - Beveled corners, stepped edges, sunburst emanations

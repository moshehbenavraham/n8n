# Session Specification

**Session ID**: `phase05-session02-variable-stroke-weight`
**Phase**: 05 - Retro-Futuristic Icon System (Chrome Deco)
**Status**: Not Started
**Created**: 2026-01-07

---

## 1. Session Overview

This session establishes the variable stroke weight token system that is foundational for the Chrome Deco icon aesthetic. The retro-futuristic design language specifies different stroke weights for interaction states (rest: 1.5px, hover: 2px, active: 2.5px), creating visual weight differentiation that enhances the tactile, mechanical feel of the interface.

Building on the animation foundation from session 01, this session extends Icon.vue to support both numeric and token-based strokeWidth values. The token system will be defined in the design system primitives and semantics layers, following the established cascade pattern. CSS transitions will provide smooth weight changes that respect user motion preferences.

Without this system, subsequent sessions (Phosphor migration, Chrome Deco effects) cannot achieve the visual weight differentiation central to the retro-futuristic design. This is a prerequisite for the icon system's full expression.

---

## 2. Objectives

1. Define stroke weight primitive tokens (thin: 1px, normal: 1.5px, medium: 2px, bold: 2.5px, heavy: 3px) in the design system
2. Create stroke weight state tokens for interaction states (rest, hover, active, focus, disabled)
3. Update Icon.vue to accept both numeric and token-based strokeWidth values with type safety
4. Implement smooth CSS transitions (200ms) with prefers-reduced-motion support

---

## 3. Prerequisites

### Required Sessions
- [x] `phase05-session01-icon-animation-foundation` - animation props, CSS keyframes, state bindings complete
- [x] `phase04-session04-typography-qa-documentation` - design system fully verified

### Required Tools/Knowledge
- SCSS CSS custom properties and cascade patterns
- TypeScript union types and type guards
- SVG stroke-width property behavior
- CSS transition timing functions

### Environment Requirements
- pnpm installed (monorepo package management)
- Storybook accessible at port 6006
- Chrome, Firefox for cross-browser testing

---

## 4. Scope

### In Scope (MVP)
- Stroke weight primitive tokens in `_primitives.scss`
- Stroke weight state tokens in `_tokens.scss`
- TypeScript type union for strokeWidth prop (number | token name)
- Icon.vue strokeWidth computed property updates
- CSS transitions for stroke-width with easing tokens
- prefers-reduced-motion media query support
- SVG shape coverage (path, rect, circle, ellipse, line, polyline, polygon)
- Storybook documentation stories

### Out of Scope (Deferred)
- Size-responsive stroke weight adjustment - *Reason: Optional enhancement, complexity not justified for MVP*
- Advanced stroke animations (draw-on, trace) - *Reason: Belongs in session 04 Chrome Deco effects*
- Stroke dash patterns - *Reason: Separate visual treatment, not weight system*

---

## 5. Technical Approach

### Architecture
The stroke weight system follows the established design system cascade:

1. **Primitives** (`_primitives.scss`): Raw stroke weight values as CSS custom properties
2. **Tokens** (`_tokens.scss`): Semantic mappings for interaction states
3. **Component** (`Icon.vue`): TypeScript type safety and CSS variable application

### Design Patterns
- **Token Cascade Pattern**: Primitives define values, tokens map to semantics, components consume tokens
- **Union Type Pattern**: strokeWidth prop accepts `number | StrokeWeightToken` for backwards compatibility
- **CSS Variable Injection**: Component sets `--icon--stroke-width` inline style, CSS module applies to SVG shapes

### Technology Stack
- SCSS custom properties (CSS variables)
- TypeScript 5.x strict mode
- Vue 3.5 Composition API
- CSS transitions with design system easing tokens

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| *(none)* | All work modifies existing files | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/css/_primitives.scss` | Add stroke weight primitive tokens | ~10 |
| `design-system/src/css/_tokens.scss` | Add stroke weight state tokens | ~10 |
| `design-system/src/css/_tokens.dark.scss` | Verify dark mode (likely no changes needed) | ~2 |
| `design-system/src/types/icon.ts` | Add StrokeWeightToken type, update exports | ~10 |
| `design-system/src/components/N8nIcon/Icon.vue` | Token mapping, transition CSS, SVG selector expansion | ~40 |
| `design-system/src/components/N8nIcon/Icon.stories.ts` | Stroke weight documentation stories | ~50 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] strokeWidth prop accepts numbers (existing behavior preserved)
- [ ] strokeWidth prop accepts token names ('thin', 'normal', 'medium', 'bold', 'heavy')
- [ ] Stroke weight visually changes when prop value changes
- [ ] CSS transitions animate stroke weight changes smoothly

### Testing Requirements
- [ ] Manual testing of all token values in Storybook
- [ ] Cross-browser verification (Chrome, Firefox, Safari if available)
- [ ] Reduced motion preference respected (instant transition)

### Quality Gates
- [ ] All files ASCII-encoded
- [ ] Unix LF line endings
- [ ] TypeScript strict mode passes
- [ ] No ESLint/Stylelint errors
- [ ] Existing Icon.vue tests pass (if any)

---

## 8. Implementation Notes

### Key Considerations
- Maintain backwards compatibility with numeric strokeWidth values
- Use `--icon--stroke-weight--*` naming consistent with existing `--icon--*` tokens from session 01
- CSS transitions should use `--easing--forge-enter` timing function from motion tokens
- Ensure all SVG shape elements receive stroke-width (path, rect, circle, ellipse, line, polyline, polygon)

### Potential Challenges
- **Safari SVG stroke-width transitions**: Safari historically had issues with SVG property transitions. Mitigation: Test early, consider using transform: scale() as fallback if needed
- **Third-party icon stroke-width**: Lucide/Phosphor icons may have their own stroke-width attributes. Mitigation: Use CSS specificity to override inline attributes
- **Type narrowing in template**: TypeScript union type needs proper narrowing in computed. Mitigation: Use type guard function

### Relevant Considerations
- [P00] **Dual token naming convention**: Maintain `--icon--stroke-weight--*` format consistent with existing `--color--*` tokens
- [P00] **Design system well-organized**: Use Storybook at port 6006 to verify all stroke weight states
- [P00] **Token cascade: Primitives > Semantic > Component**: Follow established pattern for maximum maintainability

### ASCII Reminder
All output files must use ASCII-only characters (0-127).

---

## 9. Testing Strategy

### Unit Tests
- Verify strokeWidth prop accepts number values
- Verify strokeWidth prop accepts token string values
- Verify invalid token names are handled gracefully

### Integration Tests
- Icon renders with correct stroke-width CSS variable value
- Token names resolve to correct CSS variable references

### Manual Testing
- Open Storybook at localhost:6006
- Navigate to N8nIcon component stories
- Verify each stroke weight token renders visibly different line thickness
- Test hover/interaction state changes (if stories include controls)
- Toggle dark mode to verify stroke weights consistent
- Enable prefers-reduced-motion in browser settings, verify instant transitions

### Edge Cases
- strokeWidth=0 (should render without stroke)
- strokeWidth with very large numbers (should apply, may look odd)
- strokeWidth on icons without stroke paths (solid icons, should have no effect)
- Rapid strokeWidth changes (transition should handle gracefully)

---

## 10. Dependencies

### External Libraries
- Vue 3.5.x (already installed)
- No new dependencies required

### Other Sessions
- **Depends on**: `phase05-session01-icon-animation-foundation` (provides animation props, CSS keyframes, glow tokens)
- **Depended by**: `phase05-session03-phosphor-migration` (needs stroke weight tokens for Phosphor icon integration)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

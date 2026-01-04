# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-02
**Project State**: Phase 01 - Component Library - Design System and Element Plus
**Completed Sessions**: 6 (Phase 00 complete)

---

## Recommended Next Session

**Session ID**: `phase01-session01-design-system-form-components`
**Session Name**: Design System Form Components
**Estimated Duration**: 2-4 hours
**Estimated Tasks**: ~20

---

## Why This Session Next?

### Prerequisites Met
- [x] Phase 00 completed with all 6 sessions
- [x] All color primitives and semantic tokens established
- [x] Brand identity assets in place (logo, favicon)
- [x] Element Plus token integration complete
- [x] Visual atmosphere and motion systems defined
- [x] Hardcoded color remediation finished
- [x] Email templates verified

### Dependencies
- **Builds on**: Phase 00 foundation (color system, tokens, typography)
- **Enables**: Session 02 (Selection Components), Session 03 (Action Components)

### Project Progression
This is the natural first session of Phase 01. Form components are foundational UI elements that:
1. Are used extensively throughout the n8n interface
2. Establish the interaction patterns (focus rings, hover states) that carry through to other components
3. Have clear, self-contained scope making them ideal for beginning a new phase

Starting with form components ensures the core input patterns are established before moving to more complex selection and action components.

---

## Session Overview

### Objective
Update all form-related design system components to fully integrate the Obsidian Forge visual foundation, ensuring consistent styling across inputs, checkboxes, radios, switches, and textareas.

### Key Deliverables
1. Updated N8nInput SCSS with Forge theme integration (all variants)
2. Updated N8nCheckbox/N8nCheckbox2 styling with amber accent
3. Updated N8nRadio/N8nRadioButton styling
4. Updated N8nSwitch with Forge toggle animation
5. Updated N8nTextarea styling
6. Updated N8nFormBox/N8nFormInputs containers
7. All form component Storybook stories verified

### Scope Summary
- **In Scope (MVP)**: N8nInput, N8nInputNumber, N8nCheckbox (V1+V2), N8nRadio, N8nRadioButton, N8nSwitch, N8nTextarea, N8nFormBox, N8nFormInputs, focus states with amber glow, disabled/error states, dark mode parity
- **Out of Scope**: Select/dropdown components (Session 02), Button components (Session 03), complex validation logic changes, component API changes

---

## Technical Considerations

### Technologies/Patterns
- Vue 3 components with SCSS styling
- CSS custom properties (tokens) from Phase 00
- Focus ring mixin with amber glow effect
- Transition patterns from motion system

### Potential Challenges
- **V2 component parity**: N8nCheckbox2 exists alongside V1 - both need theme updates
- **Element Plus specificity**: Checkbox and input components may resist styling due to Element Plus integration
- **State coverage**: Each component has multiple states (default, hover, focus, disabled, error) requiring comprehensive updates

### Relevant Considerations
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both V1 and V2 variants
- [P00] **Element Plus specificity battles**: Check checkbox specifically - uses `!important` overrides
- [P00] **Design system well-organized**: 86 components, 96 Storybook stories. Use Storybook at port 6006 to verify all component changes
- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006)

---

## Alternative Sessions

If this session is blocked:
1. **phase01-session05-element-plus-override-files** - Could start with pure SCSS file updates if component work is blocked
2. **phase01-session04-design-system-display-components** - Display components (badges, cards) have fewer interactive states

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

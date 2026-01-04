# Session 01: Design System Form Components

**Session ID**: `phase01-session01-design-system-form-components`
**Status**: Not Started
**Estimated Tasks**: ~20
**Estimated Duration**: 2-4 hours

---

## Objective

Update all form-related design system components to fully integrate the Obsidian Forge visual foundation, ensuring consistent styling across inputs, checkboxes, radios, switches, and textareas.

---

## Scope

### In Scope (MVP)
- N8nInput component styling (all variants: text, password, number)
- N8nInputNumber component styling
- N8nCheckbox component styling (including N8nCheckbox2)
- N8nRadio and N8nRadioButton styling
- N8nSwitch component styling
- N8nTextarea component styling
- N8nFormBox and N8nFormInputs container styling
- Focus states with amber glow rings
- Disabled and error states
- Dark mode parity for all components

### Out of Scope
- Select/dropdown components (Session 02)
- Button components (Session 03)
- Complex validation logic changes
- Component API changes

---

## Prerequisites

- [ ] Phase 00 completed with all tokens in place
- [ ] Development environment running (`pnpm dev:fe`)
- [ ] Storybook accessible for visual testing

---

## Deliverables

1. Updated N8nInput SCSS with Forge theme integration
2. Updated N8nInputNumber styling
3. Updated N8nCheckbox/N8nCheckbox2 styling with amber accent
4. Updated N8nRadio/N8nRadioButton styling
5. Updated N8nSwitch with Forge toggle animation
6. Updated N8nTextarea styling
7. Updated N8nFormBox/N8nFormInputs containers
8. All form component Storybook stories verified

---

## Success Criteria

- [ ] All form inputs use Obsidian Forge tokens
- [ ] Focus rings display amber glow effect
- [ ] Disabled states use appropriate token values
- [ ] Error states display ember red styling
- [ ] Dark mode renders correctly for all components
- [ ] Storybook stories for form components pass visual check

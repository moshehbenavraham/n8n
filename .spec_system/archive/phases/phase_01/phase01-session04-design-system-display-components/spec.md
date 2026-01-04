# Session Specification

**Session ID**: `phase01-session04-design-system-display-components`
**Phase**: 01 - Component Library - Design System and Element Plus
**Status**: Not Started
**Created**: 2026-01-04

---

## 1. Session Overview

This session continues the Obsidian Forge design system integration by updating all display-related components with consistent visual styling. Following the successful completion of form components (Session 01), selection components (Session 02), and action components (Session 03), display components represent the fourth category requiring theming - cards, badges, tags, avatars, tooltips, popovers, notices, callouts, loading states, and typography.

Display components are the primary information presentation elements users see throughout the application. Cards contain workflow items, badges indicate status, tags categorize content, avatars identify users, and tooltips provide contextual help. Implementing layered shadows, semantic color variants, and consistent typography across all display components will create a cohesive visual hierarchy that reinforces the Obsidian Forge aesthetic.

This session focuses exclusively on design-system display components, ensuring all containers, indicators, and typography elements implement the same visual vocabulary established in previous sessions. The patterns established here will directly inform Session 05 (Element Plus overrides) and Session 06 (Storybook verification).

---

## 2. Objectives

1. Apply Obsidian Forge elevation system (layered shadows `--shadow--sm` through `--shadow--xl`) to cards and popovers
2. Implement semantic color variants for badges, tags, and notices using Forge colors (verdigris success, caution warning, ember danger, arctic-steel info)
3. Add amber accent ring option to avatars for active/selected user indication
4. Update tooltips and popovers with obsidian-900 background and subtle amber border accent
5. Standardize loading spinners to use amber-500 primary color
6. Ensure dark mode parity for all 11 display components

---

## 3. Prerequisites

### Required Sessions
- [x] `phase01-session01-design-system-form-components` - Established form interaction patterns
- [x] `phase01-session02-design-system-selection-components` - Established selection interaction patterns
- [x] `phase01-session03-design-system-action-components` - Established action interaction patterns
- [x] `phase00-session04-visual-atmosphere-motion` - Defined shadow and motion tokens

### Required Tools/Knowledge
- SCSS with CSS custom properties (design tokens)
- Vue 3 Composition API component patterns
- Element Plus component internals (tooltip, skeleton)
- Storybook for visual verification

### Environment Requirements
- pnpm workspace setup complete
- Storybook accessible at port 6006 (`pnpm storybook`)
- Design token files present and functional

---

## 4. Scope

### In Scope (MVP)
- N8nCard component styling with Forge elevation and borders
- N8nBadge semantic color variants (success, warning, danger, primary, secondary)
- N8nTag standalone display chip styling
- N8nAvatar amber ring for active users
- N8nTooltip obsidian background styling
- N8nPopover panel styling with shadows
- N8nNotice variants (verdigris success, caution warning, ember danger, arctic-steel info)
- N8nCallout semantic color refinements
- N8nLoading/N8nSpinner amber color
- N8nText typography token consistency
- N8nHeading typography token consistency
- Dark mode verification for all components

### Out of Scope (Deferred)
- Form input components - *Reason: Completed in Session 01*
- Selection components - *Reason: Completed in Session 02*
- Action components - *Reason: Completed in Session 03*
- Element Plus overrides consolidation - *Reason: Session 05 scope*
- Modal/dialog components - *Reason: Phase 02 scope*
- Complex animation sequences - *Reason: Not required for styling*
- Component API changes - *Reason: Styling-only session*

---

## 5. Technical Approach

### Architecture
Display component styling follows the established token cascade: primitives (`_primitives.scss`) -> semantic tokens (`_tokens.scss`) -> component variables (`var.scss`) -> component SCSS. All visual properties reference existing design tokens to ensure consistency.

### Design Patterns
- **Card elevation**: `box-shadow: var(--shadow--sm)` base, `var(--shadow--md)` on hover for hoverable cards
- **Semantic badges**: Border + text color matching (verdigris for success, caution for warning, ember for danger)
- **Avatar ring**: `box-shadow: 0 0 0 2px var(--color--amber-300)` for active indication
- **Tooltip theme**: obsidian-900 background, amber-500/20 border accent, white text
- **Popover panel**: `box-shadow: var(--shadow--lg)`, obsidian border

### Technology Stack
- SCSS with CSS custom properties
- Vue 3 (`<style lang="scss" scoped>`)
- Element Plus 2.4.3 (tooltip, skeleton components)
- Existing design token system
- Storybook 9 for visual testing

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| None | All modifications to existing files | - |

### Files to Modify
| File | Changes | Est. Lines |
|------|---------|------------|
| `design-system/src/components/N8nCard/Card.vue` | Add shadow elevation, border styling, hover shadow transition | ~25 |
| `design-system/src/components/N8nBadge/Badge.vue` | Semantic color variants with Forge colors | ~30 |
| `design-system/src/components/N8nTag/Tag.vue` | Chip styling with hover states | ~15 |
| `design-system/src/components/N8nAvatar/Avatar.vue` | Active ring prop and amber border styling | ~20 |
| `design-system/src/components/N8nTooltip/Tooltip.vue` | Popper class for obsidian theme | ~10 |
| `design-system/src/components/N8nPopover/Popover.vue` | Panel shadow and border styling | ~25 |
| `design-system/src/components/N8nNotice/Notice.vue` | Semantic color variants refinement | ~20 |
| `design-system/src/components/N8nCallout/Callout.vue` | Icon color and border adjustments | ~15 |
| `design-system/src/components/N8nSpinner/Spinner.vue` | Amber spinner color | ~10 |
| `design-system/src/components/N8nText/Text.vue` | Typography token consistency | ~10 |
| `design-system/src/components/N8nHeading/Heading.vue` | Typography token consistency | ~10 |
| `design-system/src/css/_tokens.scss` | Card, tooltip, popover component tokens | ~30 |
| `design-system/src/css/_tokens.dark.scss` | Dark mode overrides for display components | ~25 |
| `design-system/src/css/common/var.scss` | Tooltip SCSS variables update for obsidian theme | ~10 |
| `design-system/src/css/tooltip.scss` | Obsidian background, amber accent styling | ~20 |
| `design-system/src/css/loading.scss` | Loading mask and spinner color | ~10 |

---

## 7. Success Criteria

### Functional Requirements
- [ ] Cards display layered shadow system (`--shadow--sm` base)
- [ ] Hoverable cards show shadow deepening on hover (`--shadow--md`)
- [ ] Badge success variant uses verdigris color
- [ ] Badge warning variant uses caution/gold color
- [ ] Badge danger variant uses ember/red color
- [ ] Tags display pill-style chip with hover state
- [ ] Avatar active prop displays amber ring
- [ ] Tooltips use obsidian-900 background with amber accent border
- [ ] Popovers display obsidian border with shadow
- [ ] Notice variants use correct Forge semantic colors
- [ ] Callout icons match their semantic theme color
- [ ] Loading spinners display amber-500 color
- [ ] Typography uses Inter variable font with correct weights

### Testing Requirements
- [ ] Storybook stories for all 11 display components pass visual check
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly with proper token overrides
- [ ] No console errors or warnings

### Quality Gates
- [ ] All files ASCII-encoded (characters 0-127 only)
- [ ] Unix LF line endings
- [ ] Code follows project SCSS conventions (tokens, not raw values)
- [ ] No new `!important` declarations added
- [ ] Existing unit tests pass

---

## 8. Implementation Notes

### Key Considerations
- N8nCard uses CSS module styles - update `$style.card` and `$style.hoverable` classes
- N8nBadge composes base `.badge` class - semantic variants extend it
- N8nTag already uses component tokens (`--tag--*`) - update token values
- N8nAvatar needs new `active` boolean prop for ring display
- N8nTooltip wraps ElTooltip - styling via global `.n8n-tooltip` class
- N8nPopover uses Reka UI - styling via CSS module `.popoverContent`
- N8nNotice uses component tokens (`--notice--*`) - update semantic variant values
- N8nCallout uses component tokens (`--callout--*`) - verify color consistency
- N8nSpinner ring variant uses `--color--primary` - already amber
- N8nLoading wraps ElSkeleton - override via global styles

### Potential Challenges
- **Element Plus tooltip specificity**: Tooltip uses teleported popper element. Global `.n8n-tooltip` class handles this.
- **Popover animation interference**: Reka UI animations may override shadow transitions. Use `!important` sparingly if needed.
- **Dark mode shadow visibility**: Layered shadows may be less visible on dark backgrounds. May need opacity adjustments.
- **Avatar ring z-index**: Ring may appear behind adjacent elements. Verify stacking context.

### Relevant Considerations
- [P00] **Element Plus specificity battles**: Check if tooltip or loading components use Element Plus internally - may need specificity handling in `tooltip.scss` and `loading.scss`.
- [P00] **Dual token naming convention**: Maintain backwards compatibility with both `--color-primary` and `--color--primary` formats in any new tokens.
- [P00] **Design system well-organized**: Use Storybook at port 6006 to verify all display component changes.
- [P00] **Centralized Element Plus overrides**: Modify override files in `design-system/src/css/` for Element Plus-based components (tooltip, loading).

### ASCII Reminder
All output files must use ASCII-only characters (0-127). No smart quotes, em-dashes, or non-ASCII unicode.

---

## 9. Testing Strategy

### Unit Tests
- Verify existing Card.test.ts passes after changes
- Verify existing Badge.test.ts passes after changes
- Verify existing Tooltip.test.ts passes after changes

### Integration Tests
- Not required for styling-only changes

### Manual Testing
- Open Storybook at port 6006
- Navigate to each display component story:
  - N8nCard: Verify shadow elevation, hover effect
  - N8nBadge: Verify all theme variants (default, success, warning, danger, primary, secondary, tertiary)
  - N8nTag: Verify hover state and pill styling
  - N8nAvatar: Verify active ring display
  - N8nTooltip: Verify obsidian background with amber accent
  - N8nPopover: Verify panel shadow and border
  - N8nNotice: Verify all theme variants
  - N8nCallout: Verify all theme variants with icon colors
  - N8nSpinner: Verify amber color on ring and dots variants
  - N8nLoading: Verify skeleton styling
  - N8nText/N8nHeading: Verify typography consistency
- Toggle dark mode and repeat verification for each component
- Check visual consistency across all variants

### Edge Cases
- Cards with no content should still display border/shadow correctly
- Empty avatars should not show amber ring
- Tooltips with long content should maintain obsidian styling
- Notice with HTML content should preserve link styling
- Loading skeleton should animate smoothly with new colors

---

## 10. Dependencies

### External Libraries
- Element Plus 2.4.3 (patched for SSR) - provides tooltip and skeleton components
- Reka UI - provides popover primitives
- Vue Boring Avatars - provides avatar generation
- Vue 3 - component framework

### Other Sessions
- **Depends on**: `phase01-session01`, `phase01-session02`, `phase01-session03` (consistent interaction patterns)
- **Depended by**: `phase01-session05` (Element Plus overrides), `phase01-session06` (Storybook verification)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

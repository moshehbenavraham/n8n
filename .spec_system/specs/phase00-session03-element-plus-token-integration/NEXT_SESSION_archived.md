# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-02
**Project State**: Phase 00 - Foundation - Colors, Typography, Branding
**Completed Sessions**: 2

---

## Recommended Next Session

**Session ID**: `phase00-session03-element-plus-token-integration`
**Session Name**: Element Plus Token Integration
**Estimated Duration**: 3-4 hours
**Estimated Tasks**: ~18

---

## Why This Session Next?

### Prerequisites Met
- [x] Session 01 completed (color tokens available in _primitives.scss)
- [x] Understanding of Element Plus override architecture (42 files in design-system/src/css/)

### Dependencies
- **Builds on**: Session 01 (Color System Foundation) - uses the new Forge Metals color primitives
- **Enables**: Session 04 (Visual Atmosphere & Motion), Session 05 (Hardcoded Color Remediation)

### Project Progression
Session 03 is the natural next step because:
1. **Sessions 04 and 05 both require Session 03** - Visual atmosphere and hardcoded color remediation need Element Plus integration complete first
2. **High-impact foundation work** - Element Plus overrides affect dropdowns, pagination, inputs, tooltips, dialogs across the entire application
3. **Addresses specificity concerns early** - 8 files with `!important` issues need attention before building on top
4. **V2 component compatibility** - Must verify theme works with both V1 and V2 variants before proceeding

---

## Session Overview

### Objective
Update Element Plus override files to use the new Forge Metals token system while maintaining backwards compatibility and addressing specificity issues.

### Key Deliverables
1. Updated Element Plus override files (38+) using new tokens
2. Consistent token fallback pattern across all overrides
3. Specificity issues resolved where possible (8 priority files)
4. V2 component theme compatibility verified
5. common/var.scss updated with semantic variable mappings

### Scope Summary
- **In Scope (MVP)**: Update 38+ override SCSS files, implement token fallback pattern, address !important issues, verify V2 components, update var.scss
- **Out of Scope**: Full Element Plus replacement, new component additions, version upgrades

---

## Technical Considerations

### Technologies/Patterns
- SCSS with CSS custom properties
- Token fallback pattern: `--el-color-primary: var(--color--primary, var(--color--amber-500))`
- Element Plus 2.4.3 (patched for SSR)
- V2 components: N8nSelect2, N8nCheckbox2, N8nPagination2, etc.

### Potential Challenges
- **Specificity battles**: 8 files use `!important` overrides - skeleton, icon, checkbox, table, menu, loading, drawer, color-picker
- **V1/V2 dual support**: Must ensure theme changes work with both V1 and V2 component variants
- **Element Plus resistance**: Some components may resist styling - accept limitations where necessary

### Relevant Considerations
- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; check skeleton, icon, checkbox, table, menu, loading, drawer
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure theme changes work with both variants
- [P00] **Centralized Element Plus overrides**: 42 SCSS files in `design-system/src/css/` handle all customization
- [P00] **Element Plus 2.4.3 patched for SSR**: Don't upgrade without verifying SSR compatibility

---

## Alternative Sessions

If this session is blocked:
1. **Session 04 (Visual Atmosphere & Motion)** - Could start motion/animation tokens, but Element Plus integration should come first for proper foundation
2. **Session 05 (Hardcoded Color Remediation)** - Requires Session 03 completion per prerequisites

---

## Key Files

### Override Directory
- `packages/frontend/@n8n/design-system/src/css/*.scss` (42 files)

### Priority Files (with !important issues)
- `skeleton.scss`
- `icon.scss`
- `checkbox.scss`
- `table.scss`
- `menu.scss`
- `loading.scss`
- `drawer.scss`
- `color-picker.scss`

### Variable Files
- `packages/frontend/@n8n/design-system/src/css/common/var.scss`

---

## Next Steps

Run `/sessionspec` to generate the formal specification for this session.

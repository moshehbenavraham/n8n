# Session 03: Element Plus Token Integration

**Session ID**: `phase00-session03-element-plus-token-integration`
**Status**: Not Started
**Estimated Tasks**: ~18
**Estimated Duration**: 3-4 hours

---

## Objective

Update Element Plus override files to use the new Forge Metals token system while maintaining backwards compatibility and addressing specificity issues.

---

## Scope

### In Scope (MVP)
- Update 38+ Element Plus override SCSS files with new tokens
- Implement token fallback pattern consistently
- Address !important specificity issues in 8 identified files
- Ensure V2 component compatibility (N8nSelect2, N8nCheckbox2, etc.)
- Update common/var.scss with new variable mappings
- Verify dropdown, pagination, inputs, tooltips, dialogs render correctly

### Out of Scope
- Full Element Plus replacement (not in scope for this project)
- New Element Plus component additions
- Element Plus version upgrades

---

## Prerequisites

- [ ] Session 01 completed (color tokens available)
- [ ] Understanding of Element Plus override architecture
- [ ] List of 8 files with !important overrides identified

---

## Deliverables

1. Updated Element Plus override files (38+) using new tokens
2. Consistent token fallback pattern across all overrides
3. Specificity issues resolved where possible
4. V2 component theme compatibility verified
5. common/var.scss updated with semantic variable mappings

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

## Technical Notes

### Token Fallback Pattern
```scss
// Always use fallback for backwards compatibility
--el-color-primary: var(--color--primary, var(--color--amber-500));
```

### V2 Components to Test
- N8nSelect2
- N8nCheckbox2
- N8nPagination2
- N8nRadio2
- N8nInput2
- N8nButton2
- N8nSwitch2
- N8nFormInput2
- N8nFormItem2
- N8nFormBox2

---

## Success Criteria

- [ ] All 38+ Element Plus override files updated
- [ ] Token fallback pattern used consistently
- [ ] !important usage reduced where possible
- [ ] V2 components render correctly with new theme
- [ ] Dropdowns styled with new tokens
- [ ] Pagination styled with new tokens
- [ ] Input fields styled with new tokens
- [ ] Tooltips styled with new tokens
- [ ] Dialogs styled with new tokens
- [ ] Storybook shows Element Plus components correctly
- [ ] `pnpm build` passes without errors

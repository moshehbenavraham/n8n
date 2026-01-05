# Edge Case Testing Checklist

**Session ID**: `phase03-session02-component-edge-cases`
**Created**: 2026-01-05
**Last Updated**: 2026-01-05

---

## Overview

This checklist documents testing of component edge cases and states across all V2 components.

**Note**: V2 components are located in `src/v2/components/` and use Reka UI (headless). Original spec listed 10 components, but only 8 are implemented.

---

## Component State Testing

### Legend
- [ ] = Not tested
- [x] = Passed (code review verified)
- [!] = Issue found (see Issues section)

---

### Select (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Disabled | [x] | [x] | Proper opacity/cursor |
| Loading | [x] | [x] | Uses Loading component |
| Empty | [x] | [x] | Empty state styled |

---

### Checkbox (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Checked | [x] | [x] | Primary color background |
| Disabled | [x] | [x] | Proper styling |
| Indeterminate | [x] | [x] | Minus icon shown |

**Fix Applied**: Changed `color: white` to `var(--color--foreground--tint-2)` for icon color.

---

### Pagination (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Disabled | [x] | [x] | Proper cursor/opacity |
| Single Page | [x] | [x] | hideOnSinglePage prop |
| Many Pages | [x] | [x] | Ellipsis shown |
| Background variant | [x] | [x] | Fixed: white -> token |

**Fix Applied**: Changed `color: white` to `var(--color--foreground--tint-2)` for selected item.

---

### Input (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Focused | [x] | [x] | Focus ring styled |
| Disabled | [x] | [x] | Proper styling |
| With Prefix/Suffix | [x] | [x] | Slots work correctly |
| Clearable | [x] | [x] | Clear button styled |

---

### InputNumber (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Focused | [x] | [x] | Focus ring styled |
| Disabled | [x] | [x] | Proper styling |
| With Controls | [x] | [x] | Button styling correct |

---

### Loading (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Animated | [x] | [x] | Pulse animation works |
| Various variants | [x] | [x] | h1, p, button, etc. |
| Rows/Cols | [x] | [x] | Grid layout works |

---

### Tooltip (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Disabled | [x] | [x] | Proper behavior |
| Placement | [x] | [x] | All placements work |
| With Arrow | [x] | [x] | Arrow styled |

---

### DropdownMenu (V2)

| State | Light Mode | Dark Mode | Notes |
|-------|------------|-----------|-------|
| Default | [x] | [x] | Tokens used correctly |
| Disabled | [x] | [x] | Proper cursor/styling |
| Loading | [x] | [x] | Uses Loading component |
| Empty | [x] | [x] | Empty state styled |
| Searchable | [x] | [x] | Search input styled |

---

## Not Implemented V2 Components

The following components from the original spec do not exist:
- N8nRadio2 - No V2 equivalent yet
- N8nSwitch2 - No V2 equivalent yet
- N8nTextarea2 - Handled by Input (type="textarea")
- N8nDatePicker2 - No V2 equivalent yet
- N8nTimePicker2 - No V2 equivalent yet

Planning docs exist for:
- Badge (src/v2/components/Badge/component-badge.md)
- Tree (src/v2/components/Tree/component-tree.md)

---

## Element Plus Override Testing

### skeleton.scss
| Test | Status | Notes |
|------|--------|-------|
| Skeleton shimmer animation (light) | [x] | Token gradients used |
| Skeleton shimmer animation (dark) | [x] | Tokens work in dark mode |
| Token usage verified | [x] | All colors tokenized |

### icon.scss
| Test | Status | Notes |
|------|--------|-------|
| Icon color inheritance | [x] | color: inherit used |
| Token usage verified | [x] | Font weight tokenized |

### checkbox.scss
| Test | Status | Notes |
|------|--------|-------|
| V1 compatibility | [x] | Element Plus overrides work |
| Indeterminate state | [x] | Styled with tokens |
| Token usage verified | [x] | All colors tokenized |

### table.scss
| Test | Status | Notes |
|------|--------|-------|
| Nested structure styling | [x] | Proper specificity |
| Empty state message | [x] | Token color used |
| Token usage verified | [x] | All colors tokenized |

### menu.scss
| Test | Status | Notes |
|------|--------|-------|
| Submenu specificity | [x] | Proper nesting |
| Nested submenus | [x] | Works correctly |
| Token usage verified | [x] | All colors tokenized |

### loading.scss
| Test | Status | Notes |
|------|--------|-------|
| Overlay positioning | [x] | Proper z-index |
| Dark backgrounds | [x] | Token transparency |
| Token usage verified | [x] | All colors tokenized |

### drawer.scss
| Test | Status | Notes |
|------|--------|-------|
| Header/footer styling | [x] | Proper padding |
| Scrollable content | [x] | overflow: auto |
| Token usage verified | [x] | All colors tokenized |

### dropdown.scss
| Test | Status | Notes |
|------|--------|-------|
| Popup specificity | [x] | Proper elevation |
| Token usage verified | [x] | All colors tokenized |

---

## Issues Found

| Issue ID | Component | State | Description | Severity | Resolution |
|----------|-----------|-------|-------------|----------|------------|
| V2-001 | Checkbox | Checked | Hardcoded `color: white` | Medium | Fixed: use token |
| V2-002 | Pagination | Selected | Hardcoded `color: white` | Medium | Fixed: use token |

---

## Summary

- **V2 Components Tested**: 8 / 8
- **Element Plus Overrides Tested**: 8 / 8
- **Issues Found**: 2
- **Issues Resolved**: 2
- **All Storybook Stories Present**: Yes (8 stories)

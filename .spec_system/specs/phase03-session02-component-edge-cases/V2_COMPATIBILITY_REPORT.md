# V2 Component Compatibility Report

**Session ID**: `phase03-session02-component-edge-cases`
**Created**: 2026-01-05
**Last Updated**: 2026-01-05

---

## Overview

This report documents the verification of V2 components with the Obsidian Forge theme.

**Key Finding**: V2 components are located in `design-system/src/v2/components/` and use Reka UI (headless UI library) instead of Element Plus. This is a significant architectural difference from V1 components.

---

## Actual V2 Components Found

8 implemented V2 components were discovered (not 10 as originally specified):

| Component | Location | Implements | Light Mode | Dark Mode | Token Usage |
|-----------|----------|------------|------------|-----------|-------------|
| Select | `src/v2/components/Select/` | Reka UI SelectRoot | Audited | Audited | Tokens used |
| Checkbox | `src/v2/components/Checkbox/` | Reka UI CheckboxRoot | Audited | Audited | Issue found |
| Input | `src/v2/components/Input/` | Custom (no Element+) | Audited | Audited | Tokens used |
| InputNumber | `src/v2/components/InputNumber/` | Reka UI NumberField | Audited | Audited | Tokens used |
| Pagination | `src/v2/components/Pagination/` | Reka UI Pagination | Audited | Audited | Issue found |
| Loading | `src/v2/components/Loading/` | Custom skeleton | Audited | Audited | Tokens used |
| Tooltip | `src/v2/components/Tooltip/` | Reka UI Tooltip | Audited | Audited | Tokens used |
| DropdownMenu | `src/v2/components/DropdownMenu/` | Reka UI DropdownMenu | Audited | Audited | Tokens used |

**Not Yet Implemented** (planning docs only):
- Badge (`src/v2/components/Badge/component-badge.md`)
- Tree (`src/v2/components/Tree/component-tree.md`)

**Components from original spec that do not exist**:
- N8nRadio2, N8nSwitch2, N8nTextarea2, N8nDatePicker2, N8nTimePicker2

---

## DOM Structure Analysis

### Select (V2)
- **Structure**: `SelectRoot > SelectTrigger + SelectPortal > SelectContent > SelectViewport > SelectGroup > SelectItem`
- **Key Classes**: `.selectTrigger`, `.selectContent`, `.selectItem`, `.selectValue`
- **UI Library**: Reka UI (not Element Plus)
- **Token Usage**: Fully tokenized - uses `--color--background--light-2`, `--color--amber-500`, etc.

### Checkbox (V2)
- **Structure**: `Primitive > CheckboxRoot > CheckboxIndicator + Label`
- **Key Classes**: `.checkbox`, `.checkboxRoot`, `.checkboxIndicator`, `.label`
- **UI Library**: Reka UI
- **Token Usage**: Mostly tokenized; hardcoded `color: white` found (lines 64, 79)

### Input (V2)
- **Structure**: `div.inputContainer > input/textarea + prefix/suffix slots + clearButton`
- **Key Classes**: `.inputContainer`, `.input`, `.textarea`, `.prefix`, `.suffix`, `.clearButton`
- **UI Library**: Custom implementation (no Element Plus dependency)
- **Token Usage**: Fully tokenized

### InputNumber (V2)
- **Structure**: `NumberFieldRoot > NumberFieldDecrement + NumberFieldInput + NumberFieldIncrement`
- **Key Classes**: `.inputNumber`, `.input`, `.button`, `.controlsWrapper`
- **UI Library**: Reka UI NumberField
- **Token Usage**: Fully tokenized

### Pagination (V2)
- **Structure**: `div > PaginationRoot > PaginationList > PaginationPrev + items + PaginationNext`
- **Key Classes**: `.paginationContainer`, `.paginationList`, `.paginationButton`, `.paginationItem`
- **UI Library**: Reka UI Pagination
- **Token Usage**: Mostly tokenized; hardcoded `color: white` found (line 404)

### Loading (V2)
- **Structure**: `Primitive > rowContainer > item divs`
- **Key Classes**: `.loading`, `.item`, `.animated`, variant classes (`.p`, `.h1`, etc.)
- **UI Library**: Custom skeleton implementation
- **Token Usage**: Fully tokenized, includes `el-skeleton` class for compatibility

### Tooltip (V2)
- **Structure**: `TooltipProvider > TooltipRoot > TooltipTrigger + TooltipPortal > TooltipContent > TooltipArrow`
- **Key Classes**: `.n8n-tooltip`, `.arrow`
- **UI Library**: Reka UI Tooltip
- **Token Usage**: Fully tokenized

### DropdownMenu (V2)
- **Structure**: `DropdownMenuRoot > DropdownMenuTrigger + DropdownMenuPortal > DropdownMenuContent > items`
- **Key Classes**: `.activator`, `.content`, `.items-container`, `.empty-state`
- **UI Library**: Reka UI DropdownMenu
- **Token Usage**: Fully tokenized

---

## Issues Found

| Issue ID | Component | Description | Severity | Resolution |
|----------|-----------|-------------|----------|------------|
| V2-001 | Checkbox | Hardcoded `color: white` (line 64, 79) | Medium | Replace with token |
| V2-002 | Pagination | Hardcoded `color: white` (line 404) | Medium | Replace with token |

---

## V1 vs V2 Architecture Comparison

| Aspect | V1 Components | V2 Components |
|--------|---------------|---------------|
| UI Library | Element Plus | Reka UI (headless) |
| Styling | Element Plus classes + SCSS overrides | CSS Modules + tokens |
| DOM Structure | Element Plus generated | Reka UI primitives |
| Specificity Issues | Common (Element Plus internals) | Rare (full style control) |

---

## Recommendations

1. **Fix hardcoded colors**: Replace `color: white` with appropriate tokens like `var(--color--text--on-primary)` or similar
2. **V2 components are well-themed**: They already use design tokens properly
3. **Element Plus override focus**: Main work is in Element Plus override files, not V2 components
4. **Spec correction**: Original spec listed non-existent components; actual V2 count is 8

---

## Summary

- **Components Audited**: 8 / 8 (actual V2 components)
- **Token Issues Found**: 2 (hardcoded white colors)
- **Components Not Implemented**: 2 (Badge, Tree - planning stage)
- **Components from spec that don't exist**: 5 (Radio2, Switch2, Textarea2, DatePicker2, TimePicker2)

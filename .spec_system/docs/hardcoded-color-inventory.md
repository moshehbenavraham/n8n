# Hardcoded Color Inventory

**Session**: `phase00-session05-hardcoded-color-remediation`
**Created**: 2026-01-02
**Last Updated**: 2026-01-02

---

## Overview

This document tracks all hardcoded color values identified during the Session 05 remediation effort. Colors are categorized as either "Remediated" (replaced with tokens) or "Deferred" (to be addressed in future phases).

---

## Token Mapping Reference Table

This table provides the definitive mapping for replacing hardcoded colors with semantic tokens:

| Hardcoded Value | Semantic Token | Notes |
|-----------------|----------------|-------|
| `#333` / `#333333` | `var(--color--text--shade-1)` | Dark text color |
| `#444` / `#444444` | `var(--color--text)` | Base text color |
| `#ccc` / `#cccccc` | `var(--color--text--tint-2)` | Light gray text |
| `#dcdcdc` | `var(--border-color)` | Border color |
| `#e6f1fe` | `var(--color--primary--tint-3)` | Light primary background |
| `#fff` / `#ffffff` | `var(--color--foreground--tint-2)` | White/foreground |
| `rgb(209, 219, 229)` | `var(--border-color)` | Border color (RGB format) |

### Short Hex Normalization

| Short | Normalized |
|-------|------------|
| `#539` | `#553399` |
| `#724` | `#772244` |
| `#fff` | `#ffffff` |
| `#333` | `#333333` |

---

## Remediated Colors (Session 05)

### Date Picker Panel

**File**: `packages/frontend/@n8n/design-system/src/css/date-picker/picker-panel.scss`

| Line | Original | Replacement | Status |
|------|----------|-------------|--------|
| 54 | `#e6f1fe` | `var(--color--primary--tint-3)` | Pending |
| 60 | `#dcdcdc` | `var(--border-color)` | Pending |
| 61 | `#333` | `var(--color--text--shade-1)` | Pending |

---

### Tabs Component

**File**: `packages/frontend/@n8n/design-system/src/css/tabs.scss`

| Line | Original | Replacement | Status |
|------|----------|-------------|--------|
| - | `rgb(209, 219, 229)` | `var(--border-color)` | Pending |

---

### Short Hex Codes (Normalization)

**File**: `packages/frontend/@n8n/design-system/src/css/_tokens.scss`

| Line | Original | Normalized | Status |
|------|----------|------------|--------|
| - | `#539` | `#553399` | Pending |
| - | `#724` | `#772244` | Pending |

**File**: `packages/frontend/@n8n/design-system/src/css/mixins/animations.scss`

| Line | Original | Normalized | Status |
|------|----------|------------|--------|
| - | `#5e5e5e` | Keep (shimmer animation) | Deferred |

---

### Vue Component Inline Styles

**File**: `packages/frontend/@n8n/design-system/src/components/DateRangePicker/DateRangePicker.vue`

| Line | Original | Replacement | Status |
|------|----------|-------------|--------|
| - | `color: #fff` | `color: var(--color--foreground--tint-2)` | Pending |

**File**: `packages/frontend/@n8n/design-system/src/components/N8nNodeIcon/NodeIcon.vue`

| Line | Original | Replacement | Status |
|------|----------|-------------|--------|
| - | `#444` | `var(--color--text)` | Pending |
| - | `'#ccc'` | `var(--color--text--tint-2)` | Pending |

**File**: `packages/frontend/@n8n/design-system/src/components/CanvasThinkingPill/CanvasThinkingPill.vue`

| Line | Original | Replacement | Status |
|------|----------|-------------|--------|
| - | `#7a6bea`, `#d57bae` | Keep (AI gradient) | Exception |

---

## Deferred Colors (Future Phases)

### Canvas Components

**Rationale**: Canvas inline styles for zoom/position require dynamic values and cannot be tokenized without refactoring.

**Estimated Count**: ~30 instances

---

### CodeMirror Integration

**Rationale**: CodeMirror has its own theming system. Integration requires separate theming effort.

**Estimated Count**: ~15 instances

---

### Element Plus Deep Internals

**Rationale**: Some Element Plus components have deeply nested styles that would require significant overrides.

**Estimated Count**: ~20 instances

---

## Summary Statistics

| Category | Count | Status |
|----------|-------|--------|
| **To Remediate (Session 05)** | | |
| Date picker hardcoded | 3 | Pending |
| Tabs hardcoded | 1 | Pending |
| Short hex normalization | 2 | Pending |
| Vue inline styles | 4 | Pending |
| **Subtotal** | **10** | |
| | | |
| **Intentional Exceptions** | ~140 | Documented |
| **Deferred to Future** | ~65 | Tracked |
| | | |
| **Total Identified** | ~215 | |

---

## Remediation Progress

```
Session 05 Progress: [ ] 0 / 10 remediated

Date Picker:     [ ] [ ] [ ]  (0/3)
Tabs:            [ ]          (0/1)
Short Hex:       [ ] [ ]      (0/2)
Vue Components:  [ ] [ ] [ ] [ ] (0/4)
```

---

## Next Steps

1. Complete Session 05 remediations (10 items)
2. Verify Storybook rendering
3. Run build verification
4. Update this inventory with completion status

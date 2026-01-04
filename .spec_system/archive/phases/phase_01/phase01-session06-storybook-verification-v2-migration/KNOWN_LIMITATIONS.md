# Known Limitations

**Session ID**: `phase01-session06-storybook-verification-v2-migration`
**Date**: 2026-01-04

---

## Overview

This document captures intentional exceptions, known limitations, and accepted deviations from the Obsidian Forge theming system. These are documented for future reference and are not considered bugs.

---

## Element Plus Specificity Exceptions

### !important Override Files
The following files use `!important` to override Element Plus default styles due to high specificity in the library:

**Design System (`packages/frontend/@n8n/design-system/src/css/`):**

| File | Purpose | Acceptable |
|------|---------|------------|
| `checkbox.scss` | Override Element Plus checkbox styles | Yes |
| `drawer.scss` | Override Element Plus drawer styles | Yes |
| `icon.scss` | Override Element Plus icon styles | Yes |
| `input-number.scss` | Override Element Plus input number styles | Yes |
| `loading.scss` | Override Element Plus loading styles | Yes |
| `menu.scss` | Override Element Plus menu styles | Yes |
| `message-box.scss` | Override Element Plus message box styles | Yes |
| `pagination.scss` | Override Element Plus pagination styles | Yes |
| `popper.scss` | Override Element Plus popper/tooltip styles | Yes |
| `skeleton.scss` | Override Element Plus skeleton styles | Yes |
| `table.scss` | Override Element Plus table styles | Yes |
| `display.scss` | Override Element Plus display styles | Yes |

**Editor UI (`packages/frontend/editor-ui/src/app/css/`):**

| File | Purpose | Acceptable |
|------|---------|------------|
| `_global.scss` | Global Element Plus overrides | Yes |
| `plugins/_codemirror.scss` | CodeMirror plugin overrides | Yes |
| `plugins/_vueflow.scss` | Vue Flow plugin overrides | Yes |

---

## V2 Component Intentional Differences

### Structural Differences
Some V2 components have intentionally different DOM structures that may result in minor visual variations:

| Component | Difference | Reason |
|-----------|------------|--------|
| *To be documented* | - | - |

---

## Dark Mode Exceptions

### Components with Light-Only Styling
*None documented*

### Intentional Contrast Adjustments
*None documented*

---

## Third-Party Integration Limitations

### Element Plus Constraints
*To be documented during verification*

---

## Browser-Specific Notes

*Any browser-specific styling exceptions*

---

## Future Improvements

Items documented here that could be addressed in future phases:

1. *To be added*

---

## Acceptance Criteria

All items in this document have been:
- [ ] Reviewed by the implementer
- [ ] Determined to be acceptable exceptions
- [ ] Documented with clear rationale

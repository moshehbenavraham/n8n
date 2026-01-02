# Hardcoded Color Exceptions

**Session**: `phase00-session05-hardcoded-color-remediation`
**Created**: 2026-01-02
**Last Updated**: 2026-01-02

---

## Overview

This document catalogs all intentionally hardcoded color values in the n8n frontend codebase that should NOT be tokenized. Each exception category includes rationale for why these values remain hardcoded.

---

## Exception Categories

### 1. Color Picker Widget (Element Plus)

**File**: `packages/frontend/@n8n/design-system/src/css/color-picker.scss`

**Rationale**: The color picker component requires hardcoded hue spectrum colors to display the standard color gradient. These are fundamental color constants (pure red, yellow, green, cyan, blue, magenta) that define the HSL color wheel.

**Hardcoded Values**:
| Value | Purpose |
|-------|---------|
| `#f00` | Pure red (0 degrees) |
| `#ff0` | Pure yellow (60 degrees) |
| `#0f0` | Pure green (120 degrees) |
| `#0ff` | Pure cyan (180 degrees) |
| `#00f` | Pure blue (240 degrees) |
| `#f0f` | Pure magenta (300 degrees) |
| `#fff` | White overlay gradient |
| `#000` | Black overlay gradient |

**Count**: ~20 instances

---

### 2. Syntax Highlighting (Code Tags)

**Files**:
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss` (lines 292-305)
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`

**Rationale**: These colors follow the GitHub-standard syntax highlighting palette. Developers expect consistent code highlighting across tools. Changing these would break user expectations and reduce code readability.

**Light Mode Values**:
| Token | Value | Purpose |
|-------|-------|---------|
| `--code-tags--string--color` | `#032f62` | String literals |
| `--code-tags--regex--color` | `#032f62` | Regular expressions |
| `--code-tags--primitive--color` | `#005cc5` | Primitives (numbers, booleans) |
| `--code-tags--keyword--color` | `#d73a49` | Keywords (if, else, function) |
| `--code-tags--variable--color` | `#005cc5` | Variables |
| `--code-tags--parameter--color` | `#24292e` | Function parameters |
| `--code-tags--function--color` | `#6f42c1` | Function names |
| `--code-tags--constant--color` | `#005cc5` | Constants |
| `--code-tags--property--color` | `#005cc5` | Object properties |
| `--code-tags--type--color` | `#005cc5` | Type annotations |
| `--code-tags--class--color` | `#6f42c1` | Class names |
| `--code-tags--heading--color` | `#005cc5` | Markdown headings |
| `--code-tags--invalid--color` | `#cb2431` | Invalid/error tokens |
| `--code-tags--comment--color` | `#6a737d` | Comments |

**Dark Mode Values**: Corresponding GitHub dark theme colors in `_tokens.dark.scss`

**Count**: ~28 instances (14 light + 14 dark)

---

### 3. Diff Colors

**Files**:
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`

**Rationale**: Diff colors (green for additions, red for deletions, yellow for modifications) are universal conventions from version control systems. Users expect these colors to be consistent with Git diff output.

**Values**:
| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `--diff--color--new` | `#0eab54` | `#38cb7a` | New/added lines |
| `--diff--color--new--light` | `#b4efc4` | `#43674f` | Light background |
| `--diff--color--new--faint` | `#ddfbe7` | `#3a463e` | Faint background |
| `--diff--color--modified` | `#bf941f` | `#d6a625` | Modified lines |
| `--diff--color--modified--light` | `#f3dca1` | `#6a5c38` | Light background |
| `--diff--color--modified--faint` | `#fbf1d4` | `#464236` | Faint background |
| `--diff--color--deleted` | `#f51f32` | - | Deleted lines |
| `--diff--color--deleted--light` | `#fad3d0` | - | Light background |
| `--diff--color--deleted--faint` | `#ffedec` | - | Faint background |

**Count**: ~18 instances

---

### 4. Node Icon Colors

**Files**:
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`

**Rationale**: Node icon colors are brand-specific and correspond to third-party service branding (Slack, GitHub, etc.). These should remain hardcoded to maintain integration partner brand recognition.

**Values** (partial list):
| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `--node--icon--color--blue` | `#3a42e9` | `#898fff` | Blue-branded integrations |
| `--node--icon--color--light-blue` | `#5fabf7` | `#58abff` | Light blue icons |
| `--node--icon--color--dark-blue` | `#353f6e` | `#7ba7ff` | Dark blue icons |
| `--node--icon--color--orange` | `#ff965a` | - | Orange icons |
| `--node--icon--color--orange-red` | `#ff6d5a` | - | Orange-red icons |
| `--node--icon--color--pink-red` | `#ea4b71` | `#f85d82` | Pink-red icons |
| `--node--icon--color--light-green` | `#31c4ab` | `#20b69e` | Light green icons |
| `--node--icon--color--green` | `#108e49` | `#38cb7a` | Green icons |
| `--node--icon--color--dark-green` | `#157562` | `#86decc` | Dark green icons |
| `--node--icon--color--azure` | `#54b8c9` | - | Azure/teal icons |
| `--node--icon--color--purple` | `#539` | `#9b6dd5` | Purple icons |
| `--node--icon--color--crimson` | `#724` | `#f188a2` | Crimson icons |

**Count**: ~24 instances

---

### 5. Assistant/AI Colors

**Files**:
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`

**Rationale**: AI assistant highlighting colors are specific to the AI feature branding and designed to stand out from the main interface.

**Values**:
| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `--assistant--color--highlight-1` | `#5b60e8` | `#8c90f2` | Primary highlight |
| `--assistant--color--highlight-2` | `#aa7bec` | `#a977f0` | Secondary highlight |
| `--assistant--color--highlight-3` | `#ec7b8e` | `#f0778b` | Tertiary highlight |
| `--assistant--color--text--user-bubble` | `#414244` | `#f0f3f9` | User message text |

**Count**: ~8 instances

---

### 6. Shadow Values (rgba)

**Files**: Multiple SCSS files

**Rationale**: Shadow colors using rgba(0, 0, 0, opacity) or rgba(255, 255, 255, opacity) are mathematical constants for generating proper shadows. These work correctly regardless of theme.

**Pattern**: `rgba(0, 0, 0, 0.xx)` or `rgba(255, 255, 255, 0.xx)`

**Count**: ~40+ instances (acceptable)

---

### 7. Test/Fixture Data

**Rationale**: Color values in test files and fixture data are not rendered to users. Changing them could break test assertions.

**Locations**: `**/*.test.ts`, `**/*.spec.ts`, `**/fixtures/**`

---

## Summary

| Category | Count | Rationale |
|----------|-------|-----------|
| Color Picker Widget | ~20 | HSL spectrum constants |
| Syntax Highlighting | ~28 | GitHub standard palette |
| Diff Colors | ~18 | Version control conventions |
| Node Icon Colors | ~24 | Third-party brand recognition |
| Assistant Colors | ~8 | AI feature branding |
| Shadow Values | ~40+ | Mathematical constants |
| Test Data | varies | Test stability |

**Total Intentional Exceptions**: ~140+ instances

---

## Maintenance Notes

When adding new hardcoded colors:
1. Document the rationale in this file
2. Add a comment in the source code explaining why it's not tokenized
3. Consider if a new token category should be created instead

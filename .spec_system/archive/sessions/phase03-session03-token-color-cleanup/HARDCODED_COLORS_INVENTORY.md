# Hardcoded Colors Inventory

**Session**: `phase03-session03-token-color-cleanup`
**Generated**: 2026-01-05
**Purpose**: Document intentionally hardcoded colors that should NOT be tokenized

---

## Overview

The Obsidian Forge design system intentionally hardcodes certain colors for specific use cases. These colors are exempt from tokenization for the reasons documented below.

**Total Intentionally Hardcoded**: ~81 hex values
- Light mode (_tokens.scss): 39 hex codes
- Dark mode (_tokens.dark.scss): 42 hex codes

---

## Category 1: Syntax Highlighting (GitHub Standard)

**Reason**: Industry-standard GitHub color scheme for code readability.

### Light Mode (_tokens.scss)
| Token | Value | Purpose |
|-------|-------|---------|
| `--code-tags--string--color` | `#032f62` | String literals |
| `--code-tags--regex--color` | `#032f62` | Regular expressions |
| `--code-tags--primitive--color` | `#005cc5` | Primitive types |
| `--code-tags--keyword--color` | `#d73a49` | Language keywords |
| `--code-tags--variable--color` | `#005cc5` | Variables |
| `--code-tags--parameter--color` | `#24292e` | Function parameters |
| `--code-tags--function--color` | `#6f42c1` | Function names |
| `--code-tags--constant--color` | `#005cc5` | Constants |
| `--code-tags--property--color` | `#005cc5` | Object properties |
| `--code-tags--type--color` | `#005cc5` | Type annotations |
| `--code-tags--class--color` | `#6f42c1` | Class names |
| `--code-tags--heading--color` | `#005cc5` | Markdown headings |
| `--code-tags--invalid--color` | `#cb2431` | Invalid syntax |
| `--code-tags--comment--color` | `#6a737d` | Comments |

### Dark Mode (_tokens.dark.scss)
| Token | Value | Purpose |
|-------|-------|---------|
| `--code-tags--string--color` | `#9ecbff` | String literals |
| `--code-tags--regex--color` | `#9ecbff` | Regular expressions |
| `--code-tags--primitive--color` | `#79b8ff` | Primitive types |
| `--code-tags--keyword--color` | `#f97583` | Language keywords |
| `--code-tags--variable--color` | `#79b8ff` | Variables |
| `--code-tags--parameter--color` | `#e1e4e8` | Function parameters |
| `--code-tags--function--color` | `#b392f0` | Function names |
| `--code-tags--constant--color` | `#79b8ff` | Constants |
| `--code-tags--property--color` | `#79b8ff` | Object properties |
| `--code-tags--type--color` | `#b392f0` | Type annotations |
| `--code-tags--class--color` | `#b392f0` | Class names |
| `--code-tags--heading--color` | `#79b8ff` | Markdown headings |
| `--code-tags--invalid--color` | `#f97583` | Invalid syntax |
| `--code-tags--comment--color` | `#6a737d` | Comments |

---

## Category 2: Node Icon Colors

**Reason**: Brand-specific colors for third-party integrations. These colors match external service branding.

### Light Mode (_tokens.scss)
| Token | Value | Service/Purpose |
|-------|-------|-----------------|
| `--node--icon--color--blue` | `#3a42e9` | Generic blue integrations |
| `--node--icon--color--light-blue` | `#5fabf7` | Light blue services |
| `--node--icon--color--dark-blue` | `#353f6e` | Dark blue services |
| `--node--icon--color--orange` | `#ff965a` | Orange integrations |
| `--node--icon--color--orange-red` | `#ff6d5a` | Orange-red services |
| `--node--icon--color--pink-red` | `#ea4b71` | Pink-red integrations |
| `--node--icon--color--light-green` | `#31c4ab` | Light green services |
| `--node--icon--color--green` | `#108e49` | Green integrations |
| `--node--icon--color--dark-green` | `#157562` | Dark green services |
| `--node--icon--color--azure` | `#54b8c9` | Azure/teal services |
| `--node--icon--color--purple` | `#553399` | Purple integrations |
| `--node--icon--color--crimson` | `#772244` | Crimson services |

### Dark Mode (_tokens.dark.scss)
| Token | Value | Service/Purpose |
|-------|-------|-----------------|
| `--node--icon--color--blue` | `#898fff` | Generic blue (brightened) |
| `--node--icon--color--light-blue` | `#58abff` | Light blue (brightened) |
| `--node--icon--color--dark-blue` | `#7ba7ff` | Dark blue (brightened) |
| `--node--icon--color--pink-red` | `#f85d82` | Pink-red (brightened) |
| `--node--icon--color--light-green` | `#20b69e` | Light green (brightened) |
| `--node--icon--color--green` | `#38cb7a` | Green (brightened) |
| `--node--icon--color--dark-green` | `#86decc` | Dark green (brightened) |
| `--node--icon--color--purple` | `#9b6dd5` | Purple (brightened) |
| `--node--icon--color--crimson` | `#f188a2` | Crimson (brightened) |

---

## Category 3: AI Assistant UI

**Reason**: Gradient colors for AI chat interface with distinct visual identity.

### Light Mode (_tokens.scss)
| Token | Value | Purpose |
|-------|-------|---------|
| `--assistant--color--highlight-1` | `#5b60e8` | Gradient start |
| `--assistant--color--highlight-2` | `#aa7bec` | Gradient middle |
| `--assistant--color--highlight-3` | `#ec7b8e` | Gradient end |
| `--assistant--color--text--user-bubble` | `#414244` | User message text |

### Dark Mode (_tokens.dark.scss)
| Token | Value | Purpose |
|-------|-------|---------|
| `--assistant--color--highlight-1` | `#8c90f2` | Gradient start (brightened) |
| `--assistant--color--highlight-2` | `#a977f0` | Gradient middle |
| `--assistant--color--highlight-3` | `#f0778b` | Gradient end |
| `--assistant--color--text--user-bubble` | `#f0f3f9` | User message text |

---

## Category 4: Diff Colors

**Reason**: Standard diff visualization colors that need to remain recognizable.

### Light Mode (_tokens.scss)
| Token | Value | Purpose |
|-------|-------|---------|
| `--diff--color--new` | `#0eab54` | Added lines |
| `--diff--color--new--light` | `#b4efc4` | Added background |
| `--diff--color--new--faint` | `#ddfbe7` | Added highlight |
| `--diff--color--modified` | `#bf941f` | Modified lines |
| `--diff--color--modified--light` | `#f3dca1` | Modified background |
| `--diff--color--modified--faint` | `#fbf1d4` | Modified highlight |
| `--diff--color--deleted` | `#f51f32` | Deleted lines |
| `--diff--color--deleted--light` | `#fad3d0` | Deleted background |
| `--diff--color--deleted--faint` | `#ffedec` | Deleted highlight |

### Dark Mode (_tokens.dark.scss)
| Token | Value | Purpose |
|-------|-------|---------|
| `--diff--color--new` | `#38cb7a` | Added lines |
| `--diff--color--new--light` | `#43674f` | Added background |
| `--diff--color--new--faint` | `#3a463e` | Added highlight |
| `--diff--color--modified` | `#d6a625` | Modified lines |
| `--diff--color--modified--light` | `#6a5c38` | Modified background |
| `--diff--color--modified--faint` | `#464236` | Modified highlight |
| `--diff--color--deleted` | `#fb887a` | Deleted lines |
| `--diff--color--deleted--light` | `#7a524e` | Deleted background |
| `--diff--color--deleted--faint` | `#4d3e3d` | Deleted highlight |

---

## Category 5: Color Picker Component

**Reason**: Standard hue spectrum for color picker UI. These are fixed chromatic values.

### color-picker.scss
| Value | Purpose |
|-------|---------|
| `#ff0000` | Red (0/360 degrees) |
| `#ffff00` | Yellow (60 degrees) |
| `#00ff00` | Lime (120 degrees) |
| `#00ffff` | Cyan (180 degrees) |
| `#0000ff` | Blue (240 degrees) |
| `#ff00ff` | Magenta (300 degrees) |
| `#ffffff` | White (saturation overlay) |
| `#000000` | Black (value overlay) |

---

## Category 6: Shimmer Animation

**Reason**: Loading animation gradient colors.

### animations.scss
| Value | Purpose |
|-------|---------|
| `#ffffff` | Light shimmer endpoint |
| `#5e5e5e` | Dark shimmer midpoint |

---

## Summary

| Category | Count | Tokenizable |
|----------|-------|-------------|
| Syntax Highlighting | 28 | No - GitHub standard |
| Node Icon Colors | 21 | No - Brand colors |
| AI Assistant | 8 | No - Distinct UI identity |
| Diff Colors | 18 | No - Standard diff visualization |
| Color Picker | 8 | No - Fixed chromatic values |
| Shimmer | 2 | No - Animation constants |
| **Total** | **85** | **No** |

---

## Maintenance Notes

1. **Syntax highlighting**: Update only when GitHub changes their color scheme
2. **Node icons**: Update when third-party service branding changes
3. **AI Assistant**: Design decision - can be tokenized if AI UI needs theming
4. **Diff colors**: Standard visualization - rarely needs updates
5. **Color picker**: Fixed values - never change
6. **Shimmer**: Animation effect - rarely needs updates

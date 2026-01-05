# PRD Phase 04: Typography Evolution - Forge Type System

**Status**: Complete
**Sessions**: 4
**Estimated Duration**: 2-3 days

**Progress**: 4/4 sessions (100%) - Phase Complete

---

## Overview

Transform the typographic identity of the Obsidian Forge design system with distinctive, memorable fonts that embody precision engineering and industrial craftsmanship. This phase replaces InterVariable and CommitMono with carefully selected alternatives that elevate the visual language while maintaining production-grade readability.

Typography is the soul of an interface. The current fonts are serviceable but generic. This phase forges a typographic identity that's instantly recognizable - fonts that feel *engineered*, *substantial*, and *crafted* rather than defaulted to.

---

## Progress Tracker

| Session | Name | Status | Est. Tasks | Validated |
|---------|------|--------|------------|-----------|
| 01 | Font Selection and Asset Preparation | Complete | 20 | 2026-01-05 |
| 02 | Typography Token Alignment | Complete | 18 | 2026-01-05 |
| 03 | Component Typography Updates | Complete | 20 | 2026-01-05 |
| 04 | Typography QA and Documentation | Complete | 18 | 2026-01-05 |

---

## The Forge Type System

### Design Philosophy

The "Obsidian Forge" aesthetic demands typography that feels:
- **Engineered**: Every letterform purposeful, nothing arbitrary
- **Substantial**: Weight and presence, not thin or ethereal
- **Warm**: Technical precision with human warmth (amber glow, not cold steel)
- **Memorable**: Distinctive without being distracting
- **Crafted**: The opposite of generic AI-default fonts

### Font Selection: "Forge Precision"

After evaluating dozens of typefaces against the Obsidian Forge aesthetic, the following pairing delivers maximum impact with production-grade reliability:

---

#### Primary UI Font: **Outfit Variable**

**Why Outfit embodies the Forge:**
- Geometric construction with subtle optical corrections (precision engineering)
- Warm humanist touches at terminals and joints (the amber glow)
- Variable weight axis (100-900) in a single ~85KB file
- Distinctive but never distracting - the mark of true craft
- Created by Rodrigo Fuenzalida, not a megacorp default
- Open Font License - self-hostable

**Character:**
Outfit feels like the font an industrial design studio would create for their own brand. It's geometric enough to feel engineered, but warm enough to not feel cold or clinical. The slightly squared bowls and open apertures give it a contemporary, approachable quality while maintaining professional gravitas.

**Comparison to InterVariable:**
| Aspect | InterVariable | Outfit |
|--------|---------------|--------|
| Character | Neutral, ubiquitous | Distinctive, memorable |
| Warmth | Clinical | Warm geometric |
| Recognition | "Generic tech font" | "Intentional choice" |
| Weight range | 100-900 | 100-900 |
| File size | ~344KB | ~85KB |

---

#### Monospace Font: **JetBrains Mono Variable**

**Why JetBrains Mono embodies the Forge:**
- Designed by engineers, for engineers (precision craftsmanship)
- Taller x-height for better readability in dense code
- Distinctive ligatures that feel like forged connections
- Variable weight axis for flexibility
- The definitive "craftsman's code font"
- Open source, self-hostable

**Character:**
JetBrains Mono is what you'd get if a master typographer spent years in a forge, crafting the perfect tool for code. Every decision - the increased height, the ligatures, the balanced counters - serves the craft of reading and writing code.

**Comparison to CommitMono:**
| Aspect | CommitMono | JetBrains Mono |
|--------|------------|----------------|
| Recognition | Lesser known | Industry standard |
| Ligatures | Basic | Extensive, elegant |
| x-height | Standard | Increased |
| Engineering | Solid | Obsessive |
| Weight range | 100-900 | 100-800 |

---

### Alternative Pairings (If Primary Unavailable)

**Option B - "Forge Industrial":**
- UI: **Satoshi Variable** (Fontshare) - More industrial edge
- Mono: **JetBrains Mono Variable**

**Option C - "Forge Avant-Garde":**
- UI: **Syne Variable** - Bold, memorable, Paris avant-garde
- Mono: **Monaspace Neon** (GitHub) - Cutting edge, "neon glow" variant

**Option D - "Forge Technical":**
- UI: **Geist Variable** (Vercel) - Ultra-modern, technical precision
- Mono: **Geist Mono** - Perfect pairing

---

## Typography Token Alignment

This phase also corrects token values to match the PRD specification. The current implementation diverged from the spec:

### Font Weight Corrections

| Token | Current (Wrong) | PRD Spec (Correct) |
|-------|-----------------|-------------------|
| `--font-weight--medium` | 500 | **450** |
| `--font-weight--semibold` | 550 | **500** |
| `--font-weight--extrabold` | 700 | Rename to **`--heavy`** |

### Letter Spacing Corrections

| Token | Current (Wrong) | PRD Spec (Correct) |
|-------|-----------------|-------------------|
| `--letter-spacing--tight` | -0.025em | **-0.03em** |
| `--letter-spacing--snug` | -0.0125em | **-0.02em** |
| `--letter-spacing--wide` | 0.025em | **0.02em** |
| `--letter-spacing--wider` | 0.05em | **0.04em** |

### Line Height Naming Alignment

| Current Name | Current Value | PRD Name | PRD Value |
|--------------|---------------|----------|-----------|
| `--line-height--xs` | 1 | `--line-height--none` | 1 |
| `--line-height--sm` | 1.25 | (add) `--line-height--tight` | **1.15** |
| `--line-height--md` | 1.3 | `--line-height--snug` | 1.3 |
| `--line-height--lg` | 1.35 | (keep as alias) | 1.35 |
| `--line-height--xl` | 1.5 | `--line-height--normal` | 1.5 |
| (add) | - | `--line-height--relaxed` | **1.6** |
| `--line-height--2xl` | 1.75 | `--line-height--loose` | 1.75 |

---

## Objectives

1. Replace InterVariable with Outfit Variable as primary UI font
2. Replace CommitMono with JetBrains Mono Variable as monospace font
3. Update font asset files and @font-face declarations
4. Align all typography tokens with PRD specification
5. Update Storybook font configuration to match
6. Verify font loading performance (target: <100KB combined)
7. Ensure all components render correctly with new fonts
8. Document typography guidelines for consistent usage

---

## Prerequisites

- Phase 00-03 completed (design system fully implemented)
- Font files downloaded and prepared:
  - `Outfit-Variable.woff2` (~85KB)
  - `JetBrainsMonoVariable.woff2` (~110KB)
- Storybook operational for verification
- Build system functional

---

## Technical Considerations

### Architecture

**Font Loading Strategy:**
- Continue using `font-display: swap` for performance
- Variable fonts reduce HTTP requests (single file per family)
- Keep font files in `assets/fonts/` directory
- Update `$font-path` variable if path changes

**Token Cascade:**
- Font family changes cascade through `--font-family` and `--font-family--monospace`
- Weight/spacing/height changes cascade through semantic tokens
- Component-level overrides may need adjustment

**Backwards Compatibility:**
- Old font references in external CSS will gracefully fallback
- Token values change (weights, spacing) - audit for visual regressions

### File Changes Required

**Primary Files:**
- `packages/frontend/@n8n/design-system/assets/fonts/` - Replace font files
- `packages/frontend/@n8n/design-system/src/css/fonts.scss` - Update @font-face
- `packages/frontend/@n8n/design-system/src/css/_primitives.scss` - Update tokens
- `packages/frontend/@n8n/design-system/src/css/common/var.scss` - Update $font-path if needed
- `packages/frontend/@n8n/design-system/.storybook/fonts.scss` - Mirror changes

**Secondary Files:**
- Any hardcoded `font-family` references
- Component-specific typography overrides
- Email templates (if using web fonts - likely not, but verify)

### Risks

- **Visual Regression**: Different font metrics may cause layout shifts
- **Weight Perception**: 450 vs 500 may render differently on various OSes
- **Ligature Conflicts**: JetBrains Mono ligatures may affect code display in unexpected ways
- **Performance**: Larger font files could impact load time (mitigated by variable fonts)
- **Storybook Sync**: Must update Storybook font loading in parallel

---

## Success Criteria

Phase complete when:
- [x] Outfit Variable loaded and rendering as primary UI font
- [x] JetBrains Mono Variable loaded and rendering for monospace
- [x] All typography tokens match PRD specification exactly
- [x] Font loading performance <=100KB combined initial load (83KB achieved)
- [x] All Storybook stories render correctly with new fonts
- [x] No layout regressions in light or dark mode
- [x] Build passes without errors
- [x] Typography documentation updated

---

## Dependencies

### Depends On
- Phase 00: Foundation (complete)
- Phase 01: Component Library (complete)
- Phase 02: Application Features (complete)
- Phase 03: Polish (complete)
- Font file assets (Outfit, JetBrains Mono)

### Enables
- Distinctive brand identity
- Improved code readability with JetBrains Mono
- Smaller font payload (~195KB vs ~429KB)
- Typography system aligned with PRD

---

## Sessions Summary

### Session 01: Font Selection and Asset Preparation
- Download and validate font files (Outfit, JetBrains Mono)
- Prepare WOFF2 assets for production
- Test font rendering across browsers
- Update @font-face declarations
- Verify variable weight axis functionality

### Session 02: Typography Token Alignment
- Correct font weight token values (450, 500, 700→heavy)
- Correct letter spacing values (-0.03em, -0.02em, etc.)
- Add missing line height tokens (--tight, --relaxed)
- Rename line height tokens to semantic names
- Verify token cascade through system

### Session 03: Component Typography Updates
- Audit all components for font-family references
- Update hardcoded typography in components
- Verify heading/body text hierarchy with new fonts
- Test code blocks and monospace elements
- Check form element typography (inputs, labels)

### Session 04: Typography QA and Documentation
- Full Storybook visual verification
- Cross-browser font rendering check
- Performance audit (font loading metrics)
- Update design documentation
- Create typography usage guidelines

---

## Font Sources

**Outfit Variable:**
- Google Fonts: https://fonts.google.com/specimen/Outfit
- GitHub: https://github.com/nicholasrutherford/outfit
- License: Open Font License 1.1

**JetBrains Mono Variable:**
- Official: https://www.jetbrains.com/lp/mono/
- GitHub: https://github.com/JetBrains/JetBrainsMono
- License: Open Font License 1.1

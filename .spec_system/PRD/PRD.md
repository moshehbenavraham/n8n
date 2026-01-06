# n8n Design Overhaul - Product Requirements Document

## Overview

This project delivers a comprehensive visual redesign of the n8n workflow automation platform frontend. The goal is to establish a distinct brand identity while preserving the robust token-based architecture that makes the codebase well-suited for theming changes.

The n8n frontend consists of a Vue 3 SPA (editor-ui), a shared design system (@n8n/design-system), and supporting packages for i18n, stores, and API clients. The architecture uses CSS custom properties (tokens) that cascade from primitives through semantic tokens to components, enabling efficient theme customization.

## Goals

1. Establish a customized visual identity distinct from upstream n8n branding
2. Leverage the token-based architecture to maximize design change efficiency
3. Maintain design system integrity across all 104 design-system components
4. Ensure visual consistency between light and dark modes
5. Preserve backwards compatibility with existing token variable names
6. Minimize disruption to core workflow functionality during redesign

## Non-Goals

- Replacing Element Plus UI library entirely (would require 3-6 months)
- Rebuilding the workflow canvas architecture from scratch
- Changing n8n core business logic or API behavior
- Migrating away from Vue 3 or the current component architecture
- ~~Replacing the existing InterVariable/CommitMono fonts~~ **Now in scope: Phase 04 Typography Evolution**
- ~~Creating a completely new icon set (will use existing with targeted additions)~~ **Now in scope: Phase 05 Chrome Deco Icon System**

## Users and Use Cases

### Primary Users

- **Fork Maintainers**: Developers customizing n8n for their organization's brand
- **End Users**: Workflow creators who interact with the redesigned UI daily
- **Administrators**: Teams deploying and configuring the customized instance

### Key Use Cases

1. Apply custom brand colors that cascade through the entire application
2. Replace logos and favicon with organization-specific assets
3. Customize typography while maintaining readability
4. Ensure dark mode provides equivalent visual quality to light mode
5. Verify design changes across the workflow canvas, node editor, and settings

## Requirements

### MVP Requirements (Tier 1-2)

**Branding Foundation**
- Update primary/accent colors in _primitives.scss (cascades to ~14,300 usages)
- Replace logo SVGs in N8nLogo/ (logo-icon.svg, logo-text.svg)
- Replace favicon.ico with custom brand favicon
- Update window title constants in useDocumentTitle.ts
- Update brand text references in en.json i18n file

**Theme Colors**
- Update color primitives (HSL-based scales 50-950)
- Update semantic tokens in _tokens.scss for light mode
- Update dark mode tokens in _tokens.dark.scss
- Fix approximately 550 hardcoded color instances across SCSS/Vue files
- Update Element Plus override files (38 files)

**Typography**
- Swap fonts in fonts.scss if using custom typeface
- Update font-related tokens in primitives
- Verify font loading from assets/fonts/

### Phase 2 Requirements

**Design System Components**
- Review and restyle 104 design-system components as needed
- Update component-specific SCSS in design-system/src/css/
- Verify all changes in Storybook (97 stories)
- Address V2 components migration (11 new components in progress)

**Element Plus Customization**
- Update 38 existing Element Plus override files
- Ensure consistent styling for dropdowns, pagination, inputs, tooltips, dialogs

### Phase 3 Requirements

**Workflow Canvas**
- Style 42+ workflow canvas components
- Customize Vue Flow library elements
- Update node icons, connection lines, status indicators
- Handle inline styles for zoom/positioning

**NDV (Node Details View)**
- Style 82 NDV components
- Ensure consistent form styling
- Customize code editor themes (CodeMirror)

**Modals and Panels**
- Update 29 modal types across 66 files
- Leverage centralized modal system for efficiency

### Email Templates (Included in Phase 00)

- Update 5 MJML email templates (user-invited, password-reset, workflow-shared, credentials-shared, project-shared)
- Replace n8n-logo.png with custom logo asset
- Update 6 hardcoded color values in _common.mjml
- Update company info in _footer.mjml
- Run MJML build to compile templates

### Deferred Requirements

- ~~Custom icon additions beyond current 40 SVGs~~ **Now in scope: Phase 05 Chrome Deco Icon System**
- Complete Element Plus replacement with Reka-UI
- Visual regression testing automation

## Non-Functional Requirements

- **Performance**: No increase in initial load time; CSS changes should not impact runtime
- **Accessibility**: Maintain WCAG AA contrast ratios after color changes
- **Browser Support**: Chrome 121+, Firefox 123+, Safari 17.3+, Edge 121+ (ES6 modules required, 95% US/EU coverage)
- **Dark Mode Parity**: All changes must work equivalently in dark mode

## Constraints and Dependencies

- Must preserve backwards-compatible token naming (--color-primary and --color--primary)
- Element Plus library is deeply integrated; full replacement is out of scope
- Workflow canvas uses Vue Flow with custom SVG; changes are high-visibility
- pnpm monorepo structure must be maintained
- Changes must pass existing Playwright e2e tests

## Phases

This system delivers the product via phases. Each phase is implemented via multiple 2-4 hour sessions (12-25 tasks each).

> **PROJECT STATUS**: In Progress - 29 of 35 sessions completed (83%)
> **Current Phase**: Phase 05 - Retro-Futuristic Icon System (Chrome Deco)

| Phase | Name | Sessions | Status |
|-------|------|----------|--------|
| 00 | Foundation - Colors, Typography, Branding | 6 | ✅ Completed |
| 01 | Component Library - Design System and Element Plus | 6 | ✅ Completed |
| 02 | Application Features - Canvas, NDV, Modals | 7 | ✅ Completed |
| 03 | Polish - Edge Cases, Testing, Dark Mode Parity | 6 | ✅ Completed |
| 04 | Typography Evolution - Forge Type System | 4 | ✅ Completed |
| 05 | Retro-Futuristic Icon System - Chrome Deco | 6 | 🔄 Not Started |

## Phase 00: Foundation - Colors, Typography, Branding

### Objectives

1. Establish new color primitives and semantic token mappings
2. Replace all logo and favicon assets
3. Update brand text and window titles
4. Fix highest-impact hardcoded colors
5. Verify foundation changes render correctly in light and dark modes

### Sessions (6 Total)

| Session | Name | Est. Tasks |
|---------|------|------------|
| 01 | Color System Foundation | ~20 |
| 02 | Brand Identity Assets | ~15 |
| 03 | Element Plus Token Integration | ~18 |
| 04 | Visual Atmosphere & Motion | ~18 |
| 05 | Hardcoded Color Remediation | ~20 |
| 06 | Email Templates & Verification | ~15 |

Session stubs defined in `.spec_system/PRD/phase_00/`.

## Phase 01: Component Library - Design System and Element Plus

### Objectives

1. Systematically update design-system components for new theme
2. Update Element Plus override files for consistent styling
3. Verify all component changes in Storybook
4. Address any V2 component migration impacts

## Phase 02: Application Features - Canvas, NDV, Modals

### Objectives

1. Apply theme to workflow canvas components and Vue Flow customizations
2. Style NDV panels and form elements
3. Update modal and dialog styling via centralized system
4. Customize code editor (CodeMirror) themes

### Sessions (7 Total)

| Session | Name | Est. Tasks |
|---------|------|------------|
| 01 | Workflow Canvas Foundation | ~20 |
| 02 | Canvas Node Styling | ~22 |
| 03 | Canvas Connections and Interactions | ~18 |
| 04 | NDV Layout and Structure | ~20 |
| 05 | NDV Forms and Code Editor | ~22 |
| 06 | Modal and Dialog System | ~20 |
| 07 | Overlay Components | ~18 |

Session stubs defined in `.spec_system/PRD/phase_02/`.

## Phase 03: Polish - Edge Cases, Testing, Dark Mode Parity

### Objectives

1. Ensure dark mode visual parity with light mode across all components
2. Fix edge cases in specific components (V2 components, Element Plus specificity)
3. Normalize remaining hardcoded hex codes and enforce token usage
4. Validate cross-browser compatibility (Chrome, Firefox, Safari, Edge)
5. Verify no performance regressions from design changes
6. Update Storybook documentation and complete visual QA sign-off

### Sessions (6 Total)

| Session | Name | Est. Tasks |
|---------|------|------------|
| 01 | Dark Mode Parity Audit | ~20 |
| 02 | Component Edge Cases | ~18 |
| 03 | Token and Color Cleanup | ~16 |
| 04 | Cross-Browser Testing | ~20 |
| 05 | Performance Verification | ~15 |
| 06 | Storybook Documentation and Final QA | ~18 |

Session stubs defined in `.spec_system/PRD/phase_03/`.

## Phase 04: Typography Evolution - Forge Type System

### Objectives

1. Replace InterVariable with Outfit Variable as primary UI font
2. Replace CommitMono with JetBrains Mono Variable as monospace font
3. Align all typography tokens with PRD specification (fix weight, spacing, line-height values)
4. Update font assets and @font-face declarations
5. Verify typography across all components and Storybook stories

### Sessions (4 Total)

| Session | Name | Est. Tasks |
|---------|------|------------|
| 01 | Font Selection and Asset Preparation | ~18 |
| 02 | Typography Token Alignment | ~20 |
| 03 | Component Typography Updates | ~22 |
| 04 | Typography QA and Documentation | ~16 |

Session stubs defined in `.spec_system/PRD/phase_04/`.

### Font Selection: "Forge Precision"

**Primary UI Font: Outfit Variable**
- Geometric construction with warm humanist touches
- Variable weight 100-900 in ~85KB file
- Distinctive yet professional - the mark of true craft

**Monospace Font: JetBrains Mono Variable**
- Designed by engineers, for engineers
- Distinctive ligatures, increased x-height
- The definitive "craftsman's code font"

## Phase 05: Retro-Futuristic Icon System - Chrome Deco

### Objectives

1. Extend Icon.vue component with animation props (animation, animationState, glow, glowColor, glowIntensity, chromatic)
2. Implement variable stroke weight system with smooth CSS transitions between states
3. Migrate from Lucide to Phosphor icons for native variable weight support
4. Create chrome deco visual effects (metallic shimmer, beveled edges, sunburst glow)
5. Redesign all 40 custom SVGs with art deco aesthetic (geometric precision, stepped edges, chrome accents)
6. Integrate icon animations with canvas workflow execution states

### Sessions (6 Total)

| Session | Name | Est. Tasks |
|---------|------|------------|
| 01 | Icon Animation Foundation | ~20 |
| 02 | Variable Stroke Weight System | ~18 |
| 03 | Phosphor Icon Migration | ~22 |
| 04 | Chrome Deco Visual Effects | ~22 |
| 05 | Custom Icon Art Deco Redesign | ~24 |
| 06 | Integration, QA & Documentation | ~18 |

Session stubs defined in `.spec_system/PRD/phase_05/`.

### Design Direction: "Chrome Deco"

**Visual Influences:**
- **Art Deco (1920s-30s)**: Sharp angles (45, 60, 90 degrees), geometric precision, sunburst motifs
- **Streamline Moderne**: Chrome accents, aerodynamic curves, metallic sheen
- **Mid-century Futurism**: Atomic age optimism, raygun gothic aesthetic
- **Synthwave/Outrun**: Digital nostalgia, chrome reflections

**Icon State Matrix:**

| State | Stroke Weight | Chrome Effect | Glow | Animation |
|-------|---------------|---------------|------|-----------|
| Rest | 1.5px (normal) | None | None | None |
| Hover | 2px (medium) | Shimmer visible | Subtle amber | Gentle brighten |
| Active | 2.5px (bold) | Full chrome | Medium amber pulse | ember-pulse |
| Focus | 2px (medium) | Subtle shimmer | Strong amber ring | glow-breathe |
| Success | 2px (medium) | Flash | Verdigris tint | Quick brighten |
| Error | 2px (medium) | None | Ember glow | Attention pulse |

**Key Deliverables:**
- Phosphor icon migration (196 icons with 6 weight variants)
- 40 custom SVGs redesigned with art deco aesthetic
- Variable stroke weight tokens (thin, normal, medium, bold, heavy)
- 5 animation keyframes (icon-pulse, icon-glow-breathe, icon-shimmer, icon-brighten, sunburst-radiate)
- Chrome effect mixins (shimmer, bevel, sunburst)

## Technical Stack

- **Vue 3** - Frontend framework for SPA
- **TypeScript** - Type-safe development
- **SCSS** - Styling with CSS custom properties
- **Tailwind CSS** - Utility classes with dark mode selector [data-theme="dark"]
- **Element Plus** - UI component library (with 38 override files)
- **Vue Flow** - Workflow canvas library
- **CodeMirror** - Code editor in NDV
- **Storybook** - Component documentation and visual testing
- **pnpm** - Monorepo package management
- **Vite** - Build tooling

## Success Criteria

### Phases 00-03: Design System Foundation (Completed)
- [x] Primary brand colors applied and visible across entire application
- [x] Logo and favicon replaced with custom assets
- [x] Window title reflects custom branding
- [x] Light mode fully themed with new design
- [x] Dark mode fully themed with visual parity
- [x] All 404 Storybook stories render correctly
- [x] Workflow canvas displays correctly with new theme
- [x] NDV forms and panels styled consistently
- [x] No increase in page load time
- [x] Existing Playwright e2e tests pass
- [x] Zero hardcoded colors remaining (all use tokens)

### Phase 04: Typography Evolution (Completed)
- [x] Outfit Variable loaded and rendering as primary UI font
- [x] JetBrains Mono Variable loaded and rendering for monospace
- [x] All typography tokens match PRD specification exactly
- [x] Font loading performance ≤100KB combined initial load (84KB achieved)
- [x] All Storybook stories render correctly with new fonts
- [x] No layout regressions in light or dark mode
- [x] Typography documentation updated

## Risks

- **Workflow Canvas Complexity**: 42+ components with SVG/interactive elements are the visual heart of n8n - highest risk area. Mitigation: dedicate full phase, test extensively.
- **Element Plus Deep Integration**: Some components may resist styling. Mitigation: use existing 38 override files as patterns, accept limitations where necessary.
- **Hardcoded Colors**: 550 instances require individual fixes. Mitigation: systematic grep-based discovery, prioritize visible components.
- **Dark Mode Drift**: Changes may not cascade equally to dark theme. Mitigation: test both modes for every change, update _tokens.dark.scss in parallel.
- **Upstream Merge Conflicts**: Design changes may conflict with future n8n updates. Mitigation: document all changes, prefer token-based over inline styles.

## Assumptions

- Custom logo SVG files will be created before Phase 00 begins
- Current token architecture will be preserved (no fundamental restructure)
- Element Plus will remain the UI library for this project scope
- Storybook is available and functional for component verification
- Development environment can run full frontend build for testing
- ~~InterVariable and CommitMono fonts will be retained~~ **Superseded by Phase 04: Typography Evolution**

## Resolved Design Decisions

### Design Direction: "Obsidian Forge"

**Conceptual Vision**: Industrial luxury meets precision engineering. The aesthetic evokes a master craftsman's workshop — obsidian surfaces with warm amber and copper metallic accents. Workflows aren't merely "built" — they're **forged**. This direction creates emotional resonance around reliability, craftsmanship, and power.

**Tone**: Refined industrial with precious metal warmth. Dark-first design philosophy. Professional gravitas without corporate sterility.

**The Memorable Element**: The warm amber glow against deep obsidian creates a forge-like atmosphere — nodes pulse with ember-like energy, connections flow like molten metal, the entire canvas feels alive with controlled power.

### 1. Brand Colors (HSL Format) — "Forge Metals" Palette

**Primary Palette — Warm Metals:**

| Token | New Value | Role | Visual Reference |
|-------|-----------|------|------------------|
| Primary (Forge Amber) | `hsl(38, 92%, 55%)` | Main brand accent | Warm amber gold, like firelight on brass |
| Primary Shade (Copper) | `hsl(28, 88%, 48%)` | Hover/active states | Deep burnished copper |
| Primary Tint (Amber Light) | `hsl(42, 85%, 72%)` | Subtle highlights | Pale amber glow |
| Secondary (Steel Blue) | `hsl(215, 25%, 52%)` | Secondary actions | Cool brushed steel |
| Tertiary (Platinum) | `hsl(220, 12%, 78%)` | Tertiary/disabled | Soft platinum grey |

**Semantic Colors — Forge States:**

| Token | New Value | Role | Visual Reference |
|-------|-----------|------|------------------|
| Success (Verdigris) | `hsl(168, 65%, 42%)` | Success states | Oxidized copper patina, teal-green |
| Warning (Caution Flame) | `hsl(45, 95%, 52%)` | Warning states | Bright forge flame |
| Danger (Ember Red) | `hsl(8, 78%, 54%)` | Error/danger | Warm ember red, not harsh crimson |
| Info (Arctic Steel) | `hsl(205, 55%, 55%)` | Informational | Cool steel blue |

**Surface Palette — Obsidian Depths:**

| Token | Light Mode | Dark Mode | Role |
|-------|------------|-----------|------|
| Background Primary | `hsl(40, 25%, 97%)` | `hsl(220, 28%, 8%)` | Main canvas |
| Background Elevated | `hsl(40, 20%, 99%)` | `hsl(220, 25%, 12%)` | Cards, panels |
| Background Sunken | `hsl(40, 18%, 94%)` | `hsl(220, 30%, 5%)` | Recessed areas |
| Border Subtle | `hsl(40, 15%, 88%)` | `hsl(220, 20%, 18%)` | Subtle dividers |
| Border Strong | `hsl(40, 12%, 78%)` | `hsl(220, 18%, 28%)` | Defined edges |

**Text Hierarchy:**

| Token | Light Mode | Dark Mode | Role |
|-------|------------|-----------|------|
| Text Primary | `hsl(220, 30%, 12%)` | `hsl(40, 15%, 92%)` | Body text |
| Text Secondary | `hsl(220, 18%, 42%)` | `hsl(40, 10%, 68%)` | Secondary/muted |
| Text Tertiary | `hsl(220, 12%, 58%)` | `hsl(40, 8%, 48%)` | Placeholder/disabled |
| Text Inverse | `hsl(40, 15%, 96%)` | `hsl(220, 30%, 10%)` | On primary buttons |

**Primitive Scales (50-950):**

The amber scale replaces orange as primary:
```scss
// Amber (Primary) — Forge Fire
--color--amber-50: hsl(48, 100%, 96%);
--color--amber-100: hsl(46, 95%, 88%);
--color--amber-200: hsl(44, 92%, 76%);
--color--amber-300: hsl(42, 90%, 65%);
--color--amber-400: hsl(40, 88%, 58%);
--color--amber-500: hsl(38, 92%, 55%);  // Primary
--color--amber-600: hsl(34, 88%, 48%);
--color--amber-700: hsl(28, 85%, 42%);
--color--amber-800: hsl(24, 80%, 35%);
--color--amber-900: hsl(20, 75%, 28%);
--color--amber-950: hsl(18, 70%, 18%);

// Obsidian (Neutral Dark) — Forge Base
--color--obsidian-50: hsl(220, 20%, 98%);
--color--obsidian-100: hsl(220, 18%, 94%);
--color--obsidian-200: hsl(220, 16%, 86%);
--color--obsidian-300: hsl(220, 14%, 72%);
--color--obsidian-400: hsl(220, 15%, 55%);
--color--obsidian-500: hsl(220, 18%, 42%);
--color--obsidian-600: hsl(220, 22%, 28%);
--color--obsidian-700: hsl(220, 25%, 18%);
--color--obsidian-800: hsl(220, 28%, 12%);
--color--obsidian-900: hsl(220, 30%, 8%);   // Dark background
--color--obsidian-950: hsl(220, 35%, 5%);

// Steel (Secondary) — Cool Metal
--color--steel-50: hsl(215, 30%, 97%);
--color--steel-100: hsl(215, 28%, 90%);
--color--steel-200: hsl(215, 26%, 82%);
--color--steel-300: hsl(215, 24%, 70%);
--color--steel-400: hsl(215, 25%, 60%);
--color--steel-500: hsl(215, 25%, 52%);  // Secondary
--color--steel-600: hsl(215, 28%, 44%);
--color--steel-700: hsl(215, 30%, 36%);
--color--steel-800: hsl(215, 32%, 28%);
--color--steel-900: hsl(215, 35%, 20%);
--color--steel-950: hsl(215, 38%, 12%);

// Verdigris (Success) — Oxidized Copper
--color--verdigris-50: hsl(168, 70%, 96%);
--color--verdigris-100: hsl(168, 68%, 88%);
--color--verdigris-200: hsl(168, 66%, 75%);
--color--verdigris-300: hsl(168, 64%, 62%);
--color--verdigris-400: hsl(168, 65%, 52%);
--color--verdigris-500: hsl(168, 65%, 42%);  // Success
--color--verdigris-600: hsl(168, 68%, 35%);
--color--verdigris-700: hsl(168, 70%, 28%);
--color--verdigris-800: hsl(168, 72%, 22%);
--color--verdigris-900: hsl(168, 75%, 16%);
--color--verdigris-950: hsl(168, 78%, 10%);

// Ember (Danger) — Forge Coals
--color--ember-50: hsl(8, 85%, 97%);
--color--ember-100: hsl(8, 82%, 90%);
--color--ember-200: hsl(8, 80%, 80%);
--color--ember-300: hsl(8, 78%, 68%);
--color--ember-400: hsl(8, 78%, 60%);
--color--ember-500: hsl(8, 78%, 54%);   // Danger
--color--ember-600: hsl(8, 75%, 46%);
--color--ember-700: hsl(8, 72%, 38%);
--color--ember-800: hsl(8, 70%, 30%);
--color--ember-900: hsl(8, 68%, 22%);
--color--ember-950: hsl(8, 65%, 14%);
```

Color primitives cascade through semantic tokens automatically.

### 2. Logo Assets — Forge Mark

**Status: Design direction defined, assets need creation**

**Logo Design Direction:**

The logo should embody the "Obsidian Forge" aesthetic — precision, power, and craftsmanship. Consider:

- **Icon Concept**: Abstract forge/anvil mark, interlocking gears, or molten metal flow shape
- **Color Application**: Amber-500 (`hsl(38, 92%, 55%)`) as primary mark color
- **Style**: Geometric precision with subtle warmth — not cold/corporate, not playful
- **Dark Mode**: Full amber mark on obsidian background
- **Light Mode**: Dark obsidian mark with optional amber accent

**Icon Characteristics:**
- Simple, recognizable at 16x16 favicon size
- Works as monochrome (single color for watermarks/emboss)
- Avoids complexity that looks dated quickly
- Evokes: precision engineering, workflow connections, transformation

**Current assets to replace:**
- `packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-icon.svg` - Icon mark
- `packages/frontend/@n8n/design-system/src/components/N8nLogo/logo-text.svg` - Wordmark/logotype
- `packages/frontend/editor-ui/public/favicon.ico` - 16x16, 32x32, 48x48 favicon
- `packages/cli/src/user-management/email/templates/n8n-logo.png` - Email-safe PNG (200px width)

**Action Required**: Design and create custom logo suite before Phase 00 implementation.

### 3. Typography Decision — Precision Engineering

> **UPDATE (Phase 04)**: This section describes the original Phase 00-03 typography approach using InterVariable and CommitMono. Phase 04 supersedes this with new fonts: **Outfit Variable** (UI) and **JetBrains Mono Variable** (monospace). See Phase 04 for updated font specifications.

**Decision: Maximize existing fonts with intentional styling** *(Original Phase 00-03 approach)*

The codebase uses high-quality bundled fonts that will be styled for maximum impact:

**Font Stack (Retained):**
- **InterVariable** (344KB) - Primary UI font, variable weight 100-900
- **CommitMono** (85KB) - Monospace font for code
- **element-icons** - Icon font for UI elements

**Typography Style System — "Forge Type":**

| Element | Weight | Size | Letter-Spacing | Line-Height | Style Notes |
|---------|--------|------|----------------|-------------|-------------|
| Display XL | 700 | 2.5rem | -0.03em | 1.1 | Hero headings, tight and commanding |
| Display L | 600 | 2rem | -0.025em | 1.15 | Page titles |
| Heading H1 | 600 | 1.5rem | -0.02em | 1.2 | Section headers |
| Heading H2 | 600 | 1.25rem | -0.015em | 1.25 | Subsection headers |
| Heading H3 | 500 | 1.125rem | -0.01em | 1.3 | Component headers |
| Body L | 400 | 1rem | 0 | 1.6 | Primary content |
| Body M | 400 | 0.875rem | 0.005em | 1.5 | Secondary content, forms |
| Body S | 450 | 0.8125rem | 0.01em | 1.45 | Captions, metadata |
| Label | 500 | 0.75rem | 0.04em | 1.4 | Form labels, tags (uppercase option) |
| Code | 400 | 0.875rem | 0 | 1.6 | CommitMono for all code |

**Typography Tokens (SCSS):**

```scss
// Font weights with semantic names
--font-weight--light: 300;
--font-weight--regular: 400;
--font-weight--medium: 450;   // InterVariable supports this
--font-weight--semibold: 500;
--font-weight--bold: 600;
--font-weight--heavy: 700;

// Letter spacing scale
--letter-spacing--tight: -0.03em;
--letter-spacing--snug: -0.02em;
--letter-spacing--normal: 0;
--letter-spacing--wide: 0.02em;
--letter-spacing--wider: 0.04em;

// Line height scale
--line-height--none: 1;
--line-height--tight: 1.15;
--line-height--snug: 1.3;
--line-height--normal: 1.5;
--line-height--relaxed: 1.6;
--line-height--loose: 1.75;
```

**Typography Design Principles:**
1. **Tight headings** - Negative letter-spacing creates density and impact
2. **Open body text** - Generous line-height for readability in complex UIs
3. **Weight hierarchy** - 600/500/400 creates clear visual distinction
4. **Monospace prominence** - CommitMono used generously in technical contexts
5. **Tabular figures** - Use `font-variant-numeric: tabular-nums` for data tables

**Special Applications:**
- **Node titles**: Weight 500, tight letter-spacing, truncate with ellipsis
- **Workflow names**: Weight 600, Display styling
- **Code blocks**: CommitMono with subtle amber tint on syntax highlighting
- **Timestamps/IDs**: Body S with tabular figures
- **Button labels**: Weight 500, slight wide letter-spacing for clarity

### 4. Motion Design — Forge Kinetics

**Philosophy**: Motion should feel like precision machinery — smooth, purposeful, with the weight of quality engineering. Not bouncy or playful, but controlled power. Think hydraulic mechanisms, not springs.

**Timing Functions (CSS Easing):**

```scss
// Primary motion curves
--ease--default: cubic-bezier(0.4, 0, 0.2, 1);           // Material standard
--ease--forge-in: cubic-bezier(0.4, 0, 1, 1);            // Accelerating in
--ease--forge-out: cubic-bezier(0, 0, 0.2, 1);           // Decelerating out
--ease--forge-in-out: cubic-bezier(0.4, 0, 0.2, 1);      // Symmetric
--ease--precision: cubic-bezier(0.16, 1, 0.3, 1);        // Quick start, smooth end
--ease--mechanical: cubic-bezier(0.7, 0, 0.3, 1);        // Industrial, deliberate
--ease--spring-subtle: cubic-bezier(0.34, 1.2, 0.64, 1); // Minimal overshoot
```

**Duration Scale:**

```scss
// Duration tokens
--duration--instant: 75ms;     // Micro-feedback
--duration--fast: 150ms;       // Hover states, toggles
--duration--normal: 250ms;     // Default transitions
--duration--slow: 400ms;       // Panel reveals, modals
--duration--slower: 600ms;     // Page transitions
--duration--stagger: 50ms;     // Delay between staggered items
```

**Core Animation Patterns:**

| Pattern | Duration | Easing | Properties | Use Case |
|---------|----------|--------|------------|----------|
| Hover Lift | 150ms | precision | transform, box-shadow | Interactive cards, buttons |
| Focus Ring | 150ms | default | box-shadow, outline | Keyboard focus states |
| Fade In | 250ms | forge-out | opacity | Content appearing |
| Slide Up | 300ms | precision | transform, opacity | Lists, staggered content |
| Panel Reveal | 400ms | precision | transform, opacity | Sidebars, drawers |
| Modal Enter | 350ms | spring-subtle | transform, opacity | Dialog appearance |
| Modal Exit | 200ms | forge-in | transform, opacity | Dialog dismissal |
| Collapse | 300ms | forge-in-out | height, opacity | Accordions, details |

**Staggered Orchestration — Page Load:**

```scss
// Stagger delays for page load reveals
@mixin stagger-reveal($count: 8, $base-delay: 0ms) {
  @for $i from 1 through $count {
    &:nth-child(#{$i}) {
      animation-delay: calc(#{$base-delay} + #{$i * 50}ms);
    }
  }
}

// Animation keyframes
@keyframes forge-reveal {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ember-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 hsla(38, 92%, 55%, 0);
  }
  50% {
    box-shadow: 0 0 0 8px hsla(38, 92%, 55%, 0.15);
  }
}

@keyframes flow-pulse {
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}
```

**Workflow Canvas Motion:**

| Element | Animation | Duration | Trigger |
|---------|-----------|----------|---------|
| Node appear | Scale from 0.9 + fade | 250ms | Node added |
| Node select | Lift + amber glow pulse | 200ms | Selection |
| Node drag | Shadow deepens, slight scale | Continuous | Dragging |
| Connection draw | Stroke dash animation | 400ms | Creating connection |
| Connection active | Flowing dash animation | 2000ms loop | Workflow running |
| Zoom/Pan | Smooth transform | 200ms | Canvas navigation |
| Mini-map sync | Transform match | 100ms | Any canvas change |

**Interaction Micro-Motions:**

| Element | Idle | Hover | Active | Focus |
|---------|------|-------|--------|-------|
| Button | — | translateY(-1px), shadow lift | translateY(0), shadow flatten | Amber ring pulse |
| Card | — | translateY(-2px), shadow deepen | — | Amber border |
| Input | — | Border color shift | — | Amber glow ring |
| Toggle | — | Handle glow | Handle slide 200ms | Amber ring |
| Dropdown | — | — | Slide down 200ms | — |
| Tooltip | — | Fade + slide 150ms | — | — |

**Modal/Panel Choreography:**

```scss
// Modal entrance sequence
.modal-enter {
  // Backdrop fades in first
  .modal-backdrop {
    animation: fadeIn 200ms ease-out forwards;
  }

  // Content scales up with slight delay
  .modal-content {
    animation: modalReveal 350ms var(--ease--spring-subtle) 50ms forwards;
  }
}

@keyframes modalReveal {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

// Panel slide-in (NDV, sidebars)
@keyframes panelSlideIn {
  from {
    opacity: 0;
    transform: translateX(24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

**Reduced Motion Support:**

```scss
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Motion Design Principles:**
1. **Purposeful** - Every animation communicates state change or spatial relationship
2. **Consistent** - Same easing and duration for same interaction types
3. **Performant** - Only animate transform and opacity (GPU-accelerated)
4. **Restrained** - No decorative motion without functional purpose
5. **Accessible** - Honor prefers-reduced-motion preference
6. **Industrial** - Motion should feel mechanical, not playful

### 5. Visual Details — Forge Atmosphere

**Backgrounds & Depth:**

The "Obsidian Forge" aesthetic requires layered depth, not flat surfaces. Every surface has subtle texture and atmospheric quality.

**Background Treatments:**

```scss
// Noise texture overlay (apply to body/main containers)
.forge-texture {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.015;  // Very subtle
    pointer-events: none;
    mix-blend-mode: overlay;
  }
}

// Gradient mesh for dark mode atmosphere
.forge-gradient-dark {
  background:
    radial-gradient(ellipse at 0% 0%, hsla(38, 60%, 25%, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 100% 100%, hsla(215, 40%, 20%, 0.1) 0%, transparent 50%),
    hsl(220, 28%, 8%);
}

// Light mode warm atmosphere
.forge-gradient-light {
  background:
    radial-gradient(ellipse at 0% 0%, hsla(40, 50%, 92%, 0.8) 0%, transparent 60%),
    radial-gradient(ellipse at 100% 80%, hsla(38, 40%, 95%, 0.6) 0%, transparent 50%),
    hsl(40, 25%, 97%);
}
```

**Shadow System — Layered Depth:**

```scss
// Shadow scale (dark mode - colored shadows)
--shadow--xs: 0 1px 2px hsla(220, 40%, 4%, 0.25);
--shadow--sm: 0 2px 4px hsla(220, 40%, 4%, 0.2), 0 1px 2px hsla(220, 40%, 4%, 0.15);
--shadow--md: 0 4px 8px hsla(220, 40%, 4%, 0.2), 0 2px 4px hsla(220, 40%, 4%, 0.15);
--shadow--lg: 0 8px 24px hsla(220, 40%, 4%, 0.25), 0 4px 8px hsla(220, 40%, 4%, 0.15);
--shadow--xl: 0 16px 48px hsla(220, 40%, 4%, 0.3), 0 8px 16px hsla(220, 40%, 4%, 0.2);

// Amber glow shadows (for primary elements, focus states)
--shadow--glow-sm: 0 0 8px hsla(38, 92%, 55%, 0.25);
--shadow--glow-md: 0 0 16px hsla(38, 92%, 55%, 0.3), 0 0 4px hsla(38, 92%, 55%, 0.4);
--shadow--glow-lg: 0 0 32px hsla(38, 92%, 55%, 0.25), 0 0 8px hsla(38, 92%, 55%, 0.35);

// Light mode shadows (neutral)
--shadow--light-sm: 0 2px 4px hsla(220, 20%, 20%, 0.08);
--shadow--light-md: 0 4px 12px hsla(220, 20%, 20%, 0.1), 0 2px 4px hsla(220, 20%, 20%, 0.06);
--shadow--light-lg: 0 8px 32px hsla(220, 20%, 20%, 0.12), 0 4px 8px hsla(220, 20%, 20%, 0.08);
```

**Border & Divider System:**

```scss
// Border tokens
--border--subtle: 1px solid hsla(220, 20%, 50%, 0.1);       // Barely visible
--border--default: 1px solid hsla(220, 20%, 50%, 0.15);     // Standard dividers
--border--strong: 1px solid hsla(220, 20%, 50%, 0.25);      // Prominent edges
--border--focus: 2px solid var(--color--amber-500);         // Focus rings
--border--error: 2px solid var(--color--ember-500);         // Error states

// Divider with gradient fade
.forge-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    hsla(220, 20%, 50%, 0.2) 20%,
    hsla(220, 20%, 50%, 0.2) 80%,
    transparent 100%
  );
}
```

**Spatial Composition — Layout Tokens:**

```scss
// Spacing scale (4px base)
--space--0: 0;
--space--1: 0.25rem;   // 4px
--space--2: 0.5rem;    // 8px
--space--3: 0.75rem;   // 12px
--space--4: 1rem;      // 16px
--space--5: 1.25rem;   // 20px
--space--6: 1.5rem;    // 24px
--space--8: 2rem;      // 32px
--space--10: 2.5rem;   // 40px
--space--12: 3rem;     // 48px
--space--16: 4rem;     // 64px
--space--20: 5rem;     // 80px
--space--24: 6rem;     // 96px

// Border radius scale
--radius--none: 0;
--radius--sm: 4px;      // Subtle rounding
--radius--md: 6px;      // Default components
--radius--lg: 8px;      // Cards, panels
--radius--xl: 12px;     // Modals, large containers
--radius--2xl: 16px;    // Special elements
--radius--full: 9999px; // Pills, avatars
```

**Canvas-Specific Visual Design:**

```scss
// Canvas grid pattern
.workflow-canvas {
  background-color: var(--color--background-primary);
  background-image:
    radial-gradient(
      circle at center,
      hsla(220, 15%, 45%, 0.15) 1px,
      transparent 1px
    );
  background-size: 20px 20px;

  // Subtle vignette
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      ellipse at center,
      transparent 50%,
      hsla(220, 30%, 5%, 0.15) 100%
    );
  }
}

// Node styling
.workflow-node {
  background: var(--color--background-elevated);
  border: var(--border--default);
  border-radius: var(--radius--lg);
  box-shadow: var(--shadow--md);

  &:hover {
    box-shadow: var(--shadow--lg);
    transform: translateY(-2px);
  }

  &.selected {
    border-color: var(--color--amber-500);
    box-shadow: var(--shadow--md), var(--shadow--glow-sm);
  }

  &.running {
    animation: ember-pulse 2s ease-in-out infinite;
  }
}

// Connection lines
.workflow-connection {
  stroke: var(--color--steel-400);
  stroke-width: 2;
  fill: none;

  &.active {
    stroke: var(--color--amber-500);
    stroke-dasharray: 8 4;
    animation: flow-pulse 1s linear infinite;
  }
}
```

**Focus & Interactive States:**

```scss
// Focus ring mixin
@mixin focus-ring {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color--background-primary),
    0 0 0 4px var(--color--amber-500),
    var(--shadow--glow-sm);
}

// Interactive element base
@mixin interactive-element {
  transition:
    transform var(--duration--fast) var(--ease--precision),
    box-shadow var(--duration--fast) var(--ease--precision),
    border-color var(--duration--fast) var(--ease--default);

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    @include focus-ring;
  }
}
```

### 6. Priority Ranking (If Time Constrained)

**Priority Order:**
1. **Canvas (FIRST)** - 42 components, visual heart of n8n, highest visibility
2. **NDV (SECOND)** - 82 components, most complex, high user interaction
3. **Modals (THIRD)** - 41 types, centralized system, lower complexity

**Rationale**: Canvas defines visual identity and is always visible. NDV is where users spend most editing time. Modals are point-in-time interrupts with lower visibility.

### 7. Compatibility Constraints (Do Not Change)

**CSS Token Fallbacks (MUST preserve):**
- Old format `--color-primary` must work alongside new `--color--primary`
- Pattern: `--color--primary: var(--color-primary, var(--color--orange-300))`

**Element Plus Classes (MUST preserve):**
- `.el-dialog`, `.el-skeleton`, `.el-message-box`, `.el-overlay`
- All `.el-*` selectors used by 38 override files

**Component Exports (MUST preserve names):**
- All 80+ exports: N8nButton, N8nSelect, N8nInput, N8nModal, etc.
- V2 aliases: N8nSelect2, N8nCheckbox2, N8nPagination2

**Pagination Props (Element+ compatibility):**
- currentPage, pageSize, pagerCount (aliases for new API)
- Events: size-change, current-change, prev-click, next-click

**Extension SDK Types:**
- FrontendExtensionContext.registerComponent must remain unchanged

### 8. Email Templates Decision

**Decision: Include in Phase 00 scope**

**Rationale:**
- Only 5 templates with simple structure
- Effort: ~30-40 minutes total
- Independent from main design system (no shared tokens)
- High value for complete brand consistency

**Files to update:**
- `packages/cli/src/user-management/email/templates/_common.mjml` - 6 color values
- `packages/cli/src/user-management/email/templates/_footer.mjml` - company info
- `packages/cli/src/user-management/email/templates/n8n-logo.png` - logo asset

### 9. Browser Support Requirements

**Minimum Versions (from browserslist config):**

| Browser | Minimum Version | Requirement |
|---------|-----------------|-------------|
| Chrome | 121+ | ES6 modules |
| Firefox | 123+ | ES6 modules |
| Safari | 17.3+ | ES6 modules |
| Edge | 121+ | ES6 modules |
| iOS Safari | 18.0+ | ES6 modules |

**Coverage**: 95% of users in US and alt-EU markets, last 2 years of releases.

**No Support For**: Internet Explorer (any version), browsers without ES6 module support.

**Testing**: E2E tests run on Chromium only; manual cross-browser testing required for Firefox/Safari.

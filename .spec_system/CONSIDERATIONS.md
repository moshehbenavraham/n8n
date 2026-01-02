# Considerations

> Institutional memory for AI assistants. Updated between phases via /carryforward.
> **Line budget**: 600 max | **Last updated**: Phase 00 (2026-01-02)

---

## Active Concerns

Items requiring attention in upcoming phases. Review before each session.

### Technical Debt
<!-- Max 5 items -->

- [P00] **Short hex codes need normalization**: ~25 instances of `#fff`, `#ccc`, `#f00` should be expanded to 6-char format for consistency (design-system/src/css/).

- [P00] **V2 component migration in progress**: 10 V2 components exist (`N8nSelect2`, `N8nCheckbox2`, etc.) - ensure theme changes work with both V1 and V2 variants.

- [P00] **Element Plus specificity battles**: 8 files use `!important` overrides; some components resist styling. Check skeleton, icon, checkbox, table, menu, loading, drawer.

### External Dependencies
<!-- Max 5 items -->

- [P00] **Element Plus 2.4.3 patched for SSR**: Patch at `/patches/element-plus@2.4.3.patch` - don't upgrade without verifying SSR compatibility.

- [P00] **Vue Flow 1.48.0**: Canvas relies on `@vue-flow/core`, `@vue-flow/background`, `@vue-flow/controls`, `@vue-flow/minimap`, `@vue-flow/node-resizer`. Check compatibility before updates.

- [P00] **CodeMirror 6 custom plugins**: NDV uses custom n8n plugins (`n8nLang`, `n8nAutocompletion`). Theme changes need to preserve expression editor functionality.

### Performance / Security
<!-- Max 5 items -->

- [P00] **Canvas inline styles for zoom/position**: Canvas components use computed inline styles for dynamic positioning. Token changes won't affect these - verify edge rendering.

### Architecture
<!-- Max 5 items -->

- [P00] **Dual token naming convention**: Old format `--color-primary` and new format `--color--primary` both work via CSS fallbacks. Maintain backwards compatibility.

- [P00] **Dark mode via data-theme attribute**: Theme toggle sets `body[data-theme='dark']`. Both `_tokens.dark.scss` and Tailwind config use this selector.

- [P00] **~615 hardcoded colors intentionally kept**: Test data, syntax highlighting (GitHub standard), Element Plus widgets, accessibility calculations. Don't tokenize these.

---

## Lessons Learned

Proven patterns and anti-patterns. Reference during implementation.

### What Worked
<!-- Max 15 items -->

- [P00] **HSL-based primitives cascade efficiently**: 143 primitives in `_primitives.scss` using HSL format. Scale pattern: 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 950.

- [P00] **Token cascade: Primitives > Semantic > Component**: Primary path: `_primitives.scss` > `_tokens.scss` > `common/var.scss` > components. Change primitives for maximum reach.

- [P00] **CSS variable fallbacks ensure compatibility**: Pattern `--color--primary: var(--color-primary, var(--color--orange-300))` supports both old and new variable names.

- [P00] **Design system well-organized**: 86 components, 96 Storybook stories. Use Storybook at port 6006 to verify all component changes.

- [P00] **Centralized Element Plus overrides**: 42 SCSS files in `design-system/src/css/` handle all Element Plus customization. Modify these, not component-level styles.

- [P00] **Canvas background tokenized**: `--canvas--color--background`, `--canvas--dot--color`, `--canvas--label--color` control canvas appearance.

- [P00] **Node styling uses tokens**: `--node--icon--color--*` (11 colors), `--canvas-node--border-color`, `--canvas-node--color--background` for consistent node theming.

- [P00] **NDV three-panel layout responsive**: Uses CSS variables and percentage-based sizing. Token changes cascade properly through panels.

- [P00] **Expression editor theme uses tokens**: CodeMirror theme in `theme.ts` references `--input--border-color`, `--code--caret--color`, `--color--secondary`.

### What to Avoid
<!-- Max 10 items -->

- [P00] **Don't tokenize code syntax highlighting colors**: Lines 292-305 in `_tokens.scss` use GitHub-standard colors (`#005cc5`, `#6f42c1`, etc.) - industry standard, keep as-is.

- [P00] **Don't modify external library widget styles**: `color-picker.scss`, Element Plus date-picker gradients are third-party dependent. Accept limitations.

- [P00] **Avoid breaking backwards compatibility**: The `--color-primary` (old) and `--color--primary` (new) formats both need to work. Use fallback pattern.

- [P00] **Don't use inline styles for themeable properties**: Canvas components use inline styles for zoom/position only. All colors should use CSS variables.

### Tool/Library Notes
<!-- Max 5 items -->

- [P00] **Storybook commands**: `cd packages/frontend/@n8n/design-system && pnpm storybook` (port 6006). Verify all 96 stories after theme changes.

- [P00] **Frontend dev command**: `pnpm dev:fe` runs editor-ui (port 8080) with design-system. API expected at localhost:5678.

- [P00] **Build verification**: `pnpm build` uses Turbo for all packages. Run full build after major changes to catch type errors.

- [P00] **Primary color hue is 7 (orange)**: Current primary at `--color--primary: hsl(7, 100%, 68%)`. Changing hue affects entire orange scale.

---

## Resolved

Recently closed items (buffer - rotates out after 2 phases).

| Phase | Item | Resolution |
|-------|------|------------|
| - | *No resolved items yet* | - |

---

## Key File Reference

### Token Files (Change for Maximum Impact)
- **Primitives**: `packages/frontend/@n8n/design-system/src/css/_primitives.scss`
- **Light tokens**: `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- **Dark tokens**: `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`
- **SCSS vars**: `packages/frontend/@n8n/design-system/src/css/common/var.scss`

### Branding Assets
- **Logo icon**: `design-system/src/components/N8nLogo/logo-icon.svg` (#EA4B71 pink)
- **Logo text**: `design-system/src/components/N8nLogo/logo-text.svg` (#101330 navy)
- **Favicon**: `editor-ui/public/favicon.ico`
- **Fonts**: `design-system/assets/fonts/` (InterVariable, CommitMono)
- **Title**: `editor-ui/src/app/composables/useDocumentTitle.ts` (DEFAULT_TITLE = 'n8n')
- **i18n**: `@n8n/i18n/src/locales/en.json` (~200 brand references)

### High-Impact Component Directories
- **Canvas**: `editor-ui/src/features/workflows/canvas/` (42+ Vue components)
- **NDV**: `editor-ui/src/features/ndv/` (3-panel layout, CodeMirror theme)
- **Element Plus overrides**: `design-system/src/css/*.scss` (42 files)

---

*Auto-generated by deep research. Updated by /carryforward between phases.*

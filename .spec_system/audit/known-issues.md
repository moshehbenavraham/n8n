# Known Issues

Intentional exceptions to linting rules that should not be auto-fixed.

## Stylelint: CSS Variable Naming (@n8n/css-var-naming)

### Numeric Spacing Scale

The design system uses numeric spacing values for precise control:

| Variable | Reason |
|----------|--------|
| `--spacing--0` through `--spacing--24` | Numeric scale intentional for Obsidian Forge design system |

**Paths:** `packages/frontend/@n8n/design-system/src/css/_primitives.scss`

### Visual Atmosphere Tokens

Custom atmosphere/motion system tokens that don't fit standard property vocabulary:

| Variable | Purpose |
|----------|---------|
| `--atmosphere--gradient--primary` | Radial gradient for ambient background |
| `--atmosphere--gradient--secondary` | Secondary gradient layer |
| `--atmosphere--gradient--accent` | Accent gradient highlights |
| `--atmosphere--noise--opacity` | Noise texture overlay opacity |

**Paths:**
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`
- `packages/frontend/editor-ui/src/app/css/_global.scss`

### Interactive Effect Tokens

Custom interaction effect tokens:

| Variable | Purpose |
|----------|---------|
| `--focus--glow--spread` | Focus state glow spread distance |
| `--interactive--hover--brightness` | Hover state brightness filter value |
| `--interactive--active--scale` | Active state scale transform value |

**Paths:**
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`
- `packages/frontend/editor-ui/src/app/css/_global.scss`

## Resolution

These variables are **intentional design decisions** for the Obsidian Forge rebrand. Options:

1. **Extend stylelint rule** - Add `gradient`, `noise`, `glow`, `brightness`, `scale` to valid vocabulary
2. **Disable rule per-line** - Add `/* stylelint-disable-next-line */` comments
3. **Accept as known issues** - Document and track separately

Recommended: Option 1 (extend vocabulary) for permanent fix.

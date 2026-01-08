# AGENTS.md

Extra information, specific to the frontend codebase.

### CSS Variables Reference

Use the following CSS variables to maintain consistency across the
application. These variables cover colors, spacing, typography, and borders.

#### Colors
```css
/* Primary Colors */
--color--primary--shade-1
--color--primary
--color--primary--tint-1
--color--primary--tint-2
--color--primary--tint-3

/* Secondary Colors */
--color--secondary--shade-1
--color--secondary
--color--secondary--tint-1
--color--secondary--tint-2

/* Success Colors */
--color--success--shade-1
--color--success
--color--success--tint-1
--color--success--tint-2
--color--success--tint-3
--color--success--tint-4

/* Warning Colors */
--color--warning--shade-1
--color--warning
--color--warning--tint-1
--color--warning--tint-2

/* Danger Colors */
--color--danger--shade-1
--color--danger
--color--danger--tint-3
--color--danger--tint-4

/* Text Colors */
--color--text--shade-1
--color--text
--color--text--tint-1
--color--text--tint-2
--color--text--tint-3
--color--text--danger

/* Foreground Colors */
--color--foreground--shade-2
--color--foreground--shade-1
--color--foreground
--color--foreground--tint-1
--color--foreground--tint-2

/* Background Colors */
--color--background--shade-2
--color--background--shade-1
--color--background
--color--background--light-2
--color--background--light-3
```

#### Spacing
```css
--spacing--5xs: 2px
--spacing--4xs: 4px
--spacing--3xs: 6px
--spacing--2xs: 8px
--spacing--xs: 12px
--spacing--sm: 16px
--spacing--md: 20px
--spacing--lg: 24px
--spacing--xl: 32px
--spacing--2xl: 48px
--spacing--3xl: 64px
--spacing--4xl: 128px
--spacing--5xl: 256px
```

#### Typography

##### Forge Type System

The design system uses variable fonts for optimal performance and flexibility:

| Purpose | Font | Token |
|---------|------|-------|
| UI Text | Outfit Variable | `--font-family--primary` |
| Code | JetBrains Mono Variable | `--font-family--monospace` |

##### Font Family Tokens
```css
/* Primary UI font - Outfit Variable */
--font-family--primary: Outfit, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
    'Helvetica Neue', sans-serif;

/* Monospace font for code - JetBrains Mono Variable */
--font-family--monospace: 'JetBrains Mono', ui-monospace, Menlo,
    Consolas, 'DejaVu Sans Mono', monospace;
```

##### Font Sizes
```css
--font-size--3xs: 10px
--font-size--2xs: 11px
--font-size--xs: 12px
--font-size--s: 13px
--font-size--m: 14px   /* Default body text */
--font-size--l: 16px
--font-size--xl: 18px
--font-size--2xl: 20px
--font-size--3xl: 24px
--font-size--4xl: 28px
--font-size--5xl: 32px
```

##### Line Heights
```css
--line-height--compact: 1.25
--line-height--default: 1.5
--line-height--loose: 1.75
```

##### Font Weights
```css
--font-weight--light: 300
--font-weight--regular: 400
--font-weight--medium: 500
--font-weight--semibold: 600
--font-weight--bold: 700
--font-weight--extrabold: 800
```

##### Usage Examples
```scss
/* Body text */
.body-text {
  font-family: var(--font-family--primary);
  font-size: var(--font-size--m);
  font-weight: var(--font-weight--regular);
}

/* Code block */
.code-block {
  font-family: var(--font-family--monospace);
  font-size: var(--font-size--s);
}
```

#### Borders
```css
--radius--sm: 2px
--radius: 4px
--radius--lg: 8px
--radius--xl: 12px

--border-width: 1px
--border-style: solid
--border: var(--border-width) var(--border-style) var(--color--foreground)
```

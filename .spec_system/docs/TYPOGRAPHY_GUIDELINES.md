# Typography Guidelines

**Forge Type System** - n8n AIwithApex Design System

---

## Overview

The Forge Type System uses two variable fonts to create a consistent, professional typography experience across the n8n application.

| Purpose | Font | Token |
|---------|------|-------|
| UI Text | Outfit Variable | `--font-family--primary` |
| Code | JetBrains Mono Variable | `--font-family--monospace` |

---

## Font Family Tokens

### Primary Font (UI Text)

```scss
var(--font-family--primary)
// Resolves to: Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//              Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif
```

Use for:
- Headings
- Body text
- Buttons and labels
- Navigation
- Form inputs

### Monospace Font (Code)

```scss
var(--font-family--monospace)
// Resolves to: 'JetBrains Mono', ui-monospace, Menlo, Consolas,
//              'DejaVu Sans Mono', monospace
```

Use for:
- Code blocks
- Expression editors
- API responses
- Technical identifiers
- Console output

---

## Font Weights

### Outfit Variable

| Token | Weight | Use Case |
|-------|--------|----------|
| `--font-weight--light` | 300 | Subtle text, large displays |
| `--font-weight--regular` | 400 | Body text, default |
| `--font-weight--medium` | 500 | Emphasis, labels |
| `--font-weight--semibold` | 600 | Subheadings, buttons |
| `--font-weight--bold` | 700 | Headings, strong emphasis |
| `--font-weight--extrabold` | 800 | Display text, hero sections |

### JetBrains Mono Variable

| Token | Weight | Use Case |
|-------|--------|----------|
| `--font-weight--regular` | 400 | Code blocks, default |
| `--font-weight--bold` | 700 | Highlighted code, syntax emphasis |

---

## Font Sizes

Use the token scale for consistent sizing:

```scss
--font-size--3xs: 10px;
--font-size--2xs: 11px;
--font-size--xs: 12px;
--font-size--s: 13px;
--font-size--m: 14px;   // Default body text
--font-size--l: 16px;
--font-size--xl: 18px;
--font-size--2xl: 20px;
--font-size--3xl: 24px;
--font-size--4xl: 28px;
--font-size--5xl: 32px;
```

### Usage Examples

```scss
// Body text
.body-text {
  font-family: var(--font-family--primary);
  font-size: var(--font-size--m);
  font-weight: var(--font-weight--regular);
  line-height: var(--line-height--loose);
}

// Heading
.heading {
  font-family: var(--font-family--primary);
  font-size: var(--font-size--2xl);
  font-weight: var(--font-weight--bold);
  line-height: var(--line-height--compact);
}

// Code block
.code {
  font-family: var(--font-family--monospace);
  font-size: var(--font-size--s);
  font-weight: var(--font-weight--regular);
}
```

---

## Line Heights

| Token | Value | Use Case |
|-------|-------|----------|
| `--line-height--compact` | 1.25 | Headings, single-line labels |
| `--line-height--default` | 1.5 | Body text, paragraphs |
| `--line-height--loose` | 1.75 | Long-form content, readability |

---

## Best Practices

### Do

1. **Always use tokens** - Never hardcode font values
   ```scss
   // Good
   font-family: var(--font-family--primary);

   // Bad
   font-family: 'Outfit', sans-serif;
   ```

2. **Use semantic weights** - Reference tokens, not numbers
   ```scss
   // Good
   font-weight: var(--font-weight--bold);

   // Bad
   font-weight: 700;
   ```

3. **Maintain hierarchy** - Use consistent size steps
   ```scss
   // Good - clear hierarchy
   h1 { font-size: var(--font-size--3xl); }
   h2 { font-size: var(--font-size--2xl); }
   h3 { font-size: var(--font-size--xl); }
   ```

4. **Test both themes** - Verify in light and dark modes

### Don't

1. **Don't mix font families** in the same text block
2. **Don't use weights below 300** for body text (readability)
3. **Don't use sizes below 12px** for important content
4. **Don't override tokens** in component styles

---

## Component Typography

### Buttons

```scss
.button {
  font-family: var(--font-family--primary);
  font-size: var(--font-size--s);
  font-weight: var(--font-weight--medium);
}
```

### Input Fields

```scss
.input {
  font-family: var(--font-family--primary);
  font-size: var(--font-size--m);
  font-weight: var(--font-weight--regular);
}
```

### Headings

```scss
.n8n-heading--xlarge {
  font-size: var(--font-size--3xl);
  font-weight: var(--font-weight--bold);
  line-height: var(--line-height--compact);
}
```

### Code Blocks

```scss
.code-block {
  font-family: var(--font-family--monospace);
  font-size: var(--font-size--s);
  line-height: var(--line-height--default);
}
```

---

## Theme Compatibility

Both fonts render identically in light and dark modes. No theme-specific font adjustments are required.

### Light Mode
- Text color: `var(--color--text--base)`
- Background: `var(--color--background--page)`

### Dark Mode
- Text color: `var(--color--text--base)` (auto-adjusts)
- Background: `var(--color--background--page)` (auto-adjusts)

---

## Accessibility

### Minimum Sizes

| Context | Minimum Size |
|---------|--------------|
| Body text | 14px (--font-size--m) |
| Small labels | 12px (--font-size--xs) |
| Buttons | 13px (--font-size--s) |

### Contrast

- Ensure text meets WCAG 2.1 AA contrast ratios
- Use semantic color tokens that adjust for theme

### Font Weight

- Avoid light weights (300) for small text
- Use medium (500) or higher for important actions

---

## File Locations

| File | Purpose |
|------|---------|
| `assets/fonts/Outfit-Variable.woff2` | Primary UI font |
| `assets/fonts/JetBrainsMono-Variable.woff2` | Code font |
| `src/css/fonts.scss` | @font-face definitions |
| `src/css/_primitives.scss` | Font tokens |

---

## Related Documentation

- [TYPOGRAPHY_VERIFICATION.md](../audit/TYPOGRAPHY_VERIFICATION.md) - Verification report
- [FONT_PERFORMANCE_REPORT.md](../audit/FONT_PERFORMANCE_REPORT.md) - Performance metrics
- [Storybook Font Stories](http://localhost:6006/?path=/story/styleguide-font--font-family) - Live examples

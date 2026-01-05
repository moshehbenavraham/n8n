# Session 02: Typography Token Alignment

**Phase**: 04 - Typography Evolution
**Status**: Not Started
**Estimated Tasks**: 20

---

## Objectives

1. Align font weight tokens with PRD specification
2. Correct letter spacing token values
3. Rename and add line height tokens per PRD
4. Update font-family CSS variable declarations
5. Verify token cascade through entire system

---

## Tasks

### Font Family Token Updates
- [ ] Update `--font-family` to `Outfit, sans-serif`
- [ ] Update `--font-family--monospace` to `'JetBrains Mono', ui-monospace, Menlo, Consolas, 'DejaVu Sans Mono', monospace`
- [ ] Verify fallback stack is appropriate

### Font Weight Token Corrections
- [ ] Change `--font-weight--medium` from 500 to **450**
- [ ] Change `--font-weight--semibold` from 550 to **500**
- [ ] Rename `--font-weight--extrabold` to `--font-weight--heavy` (keep value 700)
- [ ] Add backwards-compatible alias if needed

### Letter Spacing Token Corrections
- [ ] Change `--letter-spacing--tight` from -0.025em to **-0.03em**
- [ ] Change `--letter-spacing--snug` from -0.0125em to **-0.02em**
- [ ] Change `--letter-spacing--wide` from 0.025em to **0.02em**
- [ ] Change `--letter-spacing--wider` from 0.05em to **0.04em**

### Line Height Token Alignment
- [ ] Rename `--line-height--xs` to `--line-height--none` (value: 1)
- [ ] Add `--line-height--tight` with value **1.15**
- [ ] Rename `--line-height--md` to `--line-height--snug` (value: 1.3)
- [ ] Keep `--line-height--lg` as alias (value: 1.35)
- [ ] Rename `--line-height--xl` to `--line-height--normal` (value: 1.5)
- [ ] Add `--line-height--relaxed` with value **1.6**
- [ ] Rename `--line-height--2xl` to `--line-height--loose` (value: 1.75)
- [ ] Add size-based aliases for backwards compatibility

### Token Cascade Verification
- [ ] Verify tokens cascade to semantic layer
- [ ] Check dark mode token inheritance
- [ ] Audit component-level token usage for conflicts

---

## Files to Modify

- `packages/frontend/@n8n/design-system/src/css/_primitives.scss` (lines ~307-345)
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss` (if font references exist)
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss` (if font references exist)

---

## Token Reference (Before/After)

### Font Weights
```scss
// BEFORE (current)
--font-weight--medium: 500;
--font-weight--semibold: 550;
--font-weight--extrabold: 700;

// AFTER (PRD-aligned)
--font-weight--medium: 450;
--font-weight--semibold: 500;
--font-weight--heavy: 700;
```

### Letter Spacing
```scss
// BEFORE (current)
--letter-spacing--tight: -0.025em;
--letter-spacing--snug: -0.0125em;
--letter-spacing--wide: 0.025em;
--letter-spacing--wider: 0.05em;

// AFTER (PRD-aligned)
--letter-spacing--tight: -0.03em;
--letter-spacing--snug: -0.02em;
--letter-spacing--wide: 0.02em;
--letter-spacing--wider: 0.04em;
```

### Line Heights
```scss
// AFTER (PRD-aligned with semantic names)
--line-height--none: 1;
--line-height--tight: 1.15;     // NEW
--line-height--snug: 1.3;
--line-height--normal: 1.5;
--line-height--relaxed: 1.6;    // NEW
--line-height--loose: 1.75;

// Backwards-compatible aliases
--line-height--xs: var(--line-height--none);
--line-height--sm: 1.25;        // KEEP for compat
--line-height--md: var(--line-height--snug);
--line-height--lg: 1.35;        // KEEP for compat
--line-height--xl: var(--line-height--normal);
--line-height--2xl: var(--line-height--loose);
```

---

## Acceptance Criteria

- [ ] All font weight tokens match PRD spec
- [ ] All letter spacing tokens match PRD spec
- [ ] Line height tokens use semantic names
- [ ] Backwards-compatible aliases in place
- [ ] No broken references in component styles
- [ ] Build passes without errors

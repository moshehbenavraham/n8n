# Session 03: Component Typography Updates

**Phase**: 04 - Typography Evolution
**Status**: Not Started
**Estimated Tasks**: 22

---

## Objectives

1. Audit all components for hardcoded font-family references
2. Verify heading and body text hierarchy with new fonts
3. Test code blocks and monospace elements with JetBrains Mono
4. Check form element typography (inputs, labels, buttons)
5. Validate typography in complex components (NDV, Canvas, Modals)

---

## Tasks

### Font Family Audit
- [ ] Search for hardcoded `font-family` in SCSS files
- [ ] Search for hardcoded `font-family` in Vue component styles
- [ ] Replace any `InterVariable` references with token
- [ ] Replace any `CommitMono` references with token
- [ ] Verify all references use `var(--font-family)` pattern

### Heading Typography
- [ ] Verify H1-H6 rendering with Outfit
- [ ] Check heading weight hierarchy (600/500/400)
- [ ] Test negative letter-spacing on display headings
- [ ] Verify page titles and section headers
- [ ] Check modal and dialog titles

### Body Typography
- [ ] Verify body text rendering with Outfit
- [ ] Check paragraph spacing and line-height
- [ ] Test secondary/muted text styles
- [ ] Verify form labels and help text
- [ ] Check table cell typography

### Monospace Typography
- [ ] Verify code blocks render with JetBrains Mono
- [ ] Test inline code styling
- [ ] Check NDV code editor font
- [ ] Verify workflow expression typography
- [ ] Test JSON/data display formatting
- [ ] Enable/test ligatures (optional)

### Form Elements
- [ ] Verify input field typography
- [ ] Check button label rendering
- [ ] Test dropdown/select typography
- [ ] Verify textarea font sizing
- [ ] Check placeholder text styling

### Complex Components
- [ ] Test workflow canvas node labels
- [ ] Verify NDV panel typography
- [ ] Check sidebar navigation text
- [ ] Test modal content typography
- [ ] Verify toast/notification text

---

## Files to Audit

**Design System:**
- `packages/frontend/@n8n/design-system/src/css/` (all SCSS files)
- `packages/frontend/@n8n/design-system/src/components/` (Vue styles)

**Editor UI:**
- `packages/frontend/editor-ui/src/` (Vue component styles)

**Search Patterns:**
```bash
# Find hardcoded font-family
grep -r "font-family:" --include="*.scss" --include="*.vue"

# Find InterVariable references
grep -r "InterVariable" --include="*.scss" --include="*.vue"

# Find CommitMono references
grep -r "CommitMono" --include="*.scss" --include="*.vue"
```

---

## Typography Hierarchy Reference

With Outfit + JetBrains Mono:

| Element | Font | Weight | Size | Letter-Spacing |
|---------|------|--------|------|----------------|
| Display XL | Outfit | 700 | 2.5rem | -0.03em |
| Display L | Outfit | 600 | 2rem | -0.025em |
| H1 | Outfit | 600 | 1.5rem | -0.02em |
| H2 | Outfit | 600 | 1.25rem | -0.015em |
| H3 | Outfit | 500 | 1.125rem | -0.01em |
| Body L | Outfit | 400 | 1rem | 0 |
| Body M | Outfit | 400 | 0.875rem | 0.005em |
| Body S | Outfit | 450 | 0.8125rem | 0.01em |
| Label | Outfit | 500 | 0.75rem | 0.04em |
| Code | JetBrains Mono | 400 | 0.875rem | 0 |

---

## Acceptance Criteria

- [ ] Zero hardcoded font-family references to old fonts
- [ ] All headings render correctly with Outfit
- [ ] All body text uses appropriate weights
- [ ] Code blocks use JetBrains Mono
- [ ] Form elements have consistent typography
- [ ] No visual regressions in complex components
- [ ] Storybook stories render correctly

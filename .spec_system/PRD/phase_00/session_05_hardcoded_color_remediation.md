# Session 05: Hardcoded Color Remediation

**Session ID**: `phase00-session05-hardcoded-color-remediation`
**Status**: Not Started
**Estimated Tasks**: ~20
**Estimated Duration**: 3-4 hours

---

## Objective

Systematically fix high-visibility hardcoded color values across the codebase, normalize short hex codes, and document intentional exceptions that should remain hardcoded.

---

## Scope

### In Scope (MVP)
- Fix high-visibility hardcoded colors in SCSS files
- Fix high-visibility hardcoded colors in Vue components
- Normalize ~25 short hex codes (#fff, #ccc, #f00) to 6-char format
- Update critical inline styles where tokenization is possible
- Document intentional exceptions (syntax highlighting, test data, etc.)
- Create tracking list of remaining hardcoded colors

### Out of Scope
- Tokenizing syntax highlighting colors (intentionally hardcoded)
- Tokenizing test/fixture data colors
- Tokenizing Element Plus widget internals (color-picker, etc.)
- Accessibility calculation colors (intentionally hardcoded)

---

## Prerequisites

- [ ] Session 01 completed (tokens available for replacement)
- [ ] Session 03 completed (Element Plus integration done)
- [ ] Understanding of ~615 intentionally hardcoded colors

---

## Deliverables

1. High-visibility hardcoded colors replaced with tokens
2. Short hex codes normalized to 6-character format
3. Critical inline styles tokenized where possible
4. Documentation of intentional exceptions
5. Tracking list of remaining hardcoded colors

---

## Key Directories to Search

- `packages/frontend/@n8n/design-system/src/css/` (~25 short hex instances)
- `packages/frontend/@n8n/design-system/src/components/`
- `packages/frontend/editor-ui/src/`
- `packages/frontend/@n8n/design-system/src/stylesheets/`

---

## Technical Notes

### Short Hex Normalization
```scss
// Before
color: #fff;
background: #ccc;
border-color: #f00;

// After
color: #ffffff;
background: #cccccc;
border-color: #ff0000;
```

### Token Replacement Pattern
```scss
// Before
color: #1a1a1a;

// After
color: var(--color--text-primary);
```

### Intentional Exceptions (DO NOT TOKENIZE)
- Lines 292-305 in _tokens.scss (GitHub syntax highlighting)
- Color picker widget gradients
- Test/fixture data
- Accessibility contrast calculation values

---

## Success Criteria

- [ ] High-visibility SCSS hardcoded colors replaced
- [ ] High-visibility Vue component colors replaced
- [ ] All short hex codes normalized to 6-char format
- [ ] Critical inline styles use tokens where possible
- [ ] Intentional exceptions documented in code comments
- [ ] Tracking list created for remaining hardcoded colors
- [ ] Visual inspection shows consistent theming
- [ ] Dark mode displays correctly
- [ ] `pnpm build` passes without errors

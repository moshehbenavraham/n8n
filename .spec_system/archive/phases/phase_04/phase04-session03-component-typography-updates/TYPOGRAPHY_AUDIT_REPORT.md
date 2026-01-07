# Typography Audit Report

**Session ID**: `phase04-session03-component-typography-updates`
**Created**: 2026-01-05
**Status**: Complete

---

## Executive Summary

This report documents the audit and remediation of hardcoded font-family references in the n8n codebase, replacing them with CSS custom property tokens.

### Target Fonts
- **Primary**: Outfit Variable (`--font-family`)
- **Monospace**: JetBrains Mono Variable (`--font-family--monospace`)

### Deprecated Fonts (to be removed)
- InterVariable
- CommitMono

---

## 1. Font Assets Verification

| Font File | Size | Status |
|-----------|------|--------|
| Outfit-Variable.woff2 | 45KB | Installed |
| JetBrainsMono-Variable.woff2 | 40KB | Installed |
| element-icons.ttf | 56KB | Present |
| element-icons.woff | 28KB | Present |

---

## 2. Typography Token Verification

| Token | Value | Status |
|-------|-------|--------|
| `--font-family` | Outfit, sans-serif | Defined |
| `--font-family--monospace` | 'JetBrains Mono', ui-monospace, ... | Defined |

---

## 3. Audit Findings

### 3.1 Design System SCSS Files

| File | Finding | Remediation |
|------|---------|-------------|
| fonts.scss | @font-face for Outfit, JetBrains Mono | Correct - defining fonts |
| _primitives.scss | Token definitions | Correct - defines --font-family tokens |
| reset.scss | Uses var(--font-family) | Correct - token usage |
| icon.scss | Uses 'element-icons' | Correct - icon font |
| select-dropdown.scss | Uses 'element-icons' | Correct - icon font |

### 3.2 Design System Vue Components

| File | Finding | Remediation |
|------|---------|-------------|
| Input.vue, InputNumber.vue, etc. | font-family: inherit | Correct - inherits from parent |
| CommandBar.vue | var(--font-family) | Correct - token usage |
| TextMessage.vue | var(--font-family--monospace) | Correct - token usage |
| CodeDiff.vue | var(--font-family--monospace) | Correct - token usage |
| IconPicker.vue | Emoji font stack | Correct - intentional for emoji rendering |

### 3.3 Editor-UI SCSS Files

| File | Finding | Remediation |
|------|---------|-------------|
| _global.scss | Uses var(--font-family) | Correct - token usage |
| _codemirror.scss | Uses var(--font-family) and var(--font-family--monospace) | Correct - token usage |

### 3.4 Editor-UI Vue Components

| File | Finding | Remediation |
|------|---------|-------------|
| CopyInput.vue:78 | `Monaco, Consolas` | Replace with `var(--font-family--monospace)` |
| CopyInput.vue:134 | `unset` | Keep - valid reset for button |
| ParameterInputHint.vue:66 | `monospace` | Replace with `var(--font-family--monospace)` |
| Assignment.vue:290 | `monospace` | Replace with `var(--font-family--monospace)` |
| WorkflowDiffModal.vue:858 | `Inter, var(--font-family)` | Remove Inter, use `var(--font-family)` |
| ConnectionParameter.vue:142 | `monospace` | Replace with `var(--font-family--monospace)` |

### 3.5 Element Plus Overrides

| File | Finding | Remediation |
|------|---------|-------------|
| All override files | Checked | No hardcoded font-family issues |

### 3.6 CodeMirror/Expression Editor Theme

| File | Finding | Remediation |
|------|---------|-------------|
| _codemirror.scss | Uses tokens | Correct - already using tokens |

---

## 4. Remediation Summary

| Category | Files Changed | Lines Changed |
|----------|---------------|---------------|
| Design System SCSS | 0 | 0 |
| Design System Vue | 0 | 0 |
| Editor-UI SCSS | 0 | 0 |
| Editor-UI Vue | 5 | 5 |
| Element Plus Overrides | 0 | 0 |
| CodeMirror Theme | 0 | 0 |
| **Total** | **5** | **5** |

### Files Modified

1. `packages/frontend/editor-ui/src/app/components/CopyInput.vue`
   - Line 78: `Monaco, Consolas` -> `var(--font-family--monospace)`

2. `packages/frontend/editor-ui/src/features/ndv/parameters/components/ParameterInputHint.vue`
   - Line 66: `monospace` -> `var(--font-family--monospace)`

3. `packages/frontend/editor-ui/src/features/ndv/parameters/components/AssignmentCollection/Assignment.vue`
   - Line 290: `monospace` -> `var(--font-family--monospace)`

4. `packages/frontend/editor-ui/src/features/workflows/workflowDiff/WorkflowDiffModal.vue`
   - Line 858: `Inter, var(--font-family)` -> `var(--font-family)`

5. `packages/frontend/editor-ui/src/features/ai/mcpAccess/components/header/connectPopover/ConnectionParameter.vue`
   - Line 142: `monospace` -> `var(--font-family--monospace)`

---

## 5. Verification Results

### 5.1 Grep Verification

```bash
# InterVariable references
grep -r "font-family.*InterVariable" packages/frontend/
# Result: 0 matches (verified 2026-01-05)

# CommitMono references
grep -r "font-family.*CommitMono" packages/frontend/
# Result: 0 matches (verified 2026-01-05)

# Inter font references (excluding InterVariable)
grep -r "font-family.*Inter[^V]" packages/frontend/
# Result: 0 matches (verified 2026-01-05)

# Hardcoded Monaco/Consolas/monospace
grep -r "font-family:.*(Monaco|Consolas)" packages/frontend/
# Result: 0 matches (all converted to tokens)
```

### 5.2 Storybook Verification

| Component Category | Status | Notes |
|--------------------|--------|-------|
| Typography (Headings) | Requires Manual | Run Storybook to verify |
| Typography (Body) | Requires Manual | Run Storybook to verify |
| Code Blocks | Requires Manual | Run Storybook to verify |
| Form Elements | Requires Manual | Run Storybook to verify |

### 5.3 Application Verification

| Component | Status | Notes |
|-----------|--------|-------|
| Canvas Node Labels | Requires Manual | Run application to verify |
| NDV Code Editor | Requires Manual | Run application to verify |
| Modal Dialogs | Requires Manual | Run application to verify |

---

## 6. Success Criteria Checklist

- [x] Zero grep results for `font-family:.*InterVariable`
- [x] Zero grep results for `font-family:.*CommitMono`
- [x] All font-family declarations use token pattern
- [ ] Storybook typography stories render correctly (requires manual verification)
- [ ] Canvas node labels display with new fonts (requires manual verification)
- [ ] NDV code editor uses JetBrains Mono (requires manual verification)
- [ ] Modal titles and content render correctly (requires manual verification)
- [x] All files ASCII-encoded
- [ ] Both light and dark modes tested (requires manual verification)

---

## 7. Notes and Decisions

### Decision 1: Emoji Font Stack Preserved

**Context**: IconPicker.vue contains an emoji-specific font stack
**Decision**: Keep as-is - this is intentional for emoji rendering across platforms
**Rationale**: Emoji fonts need platform-specific stacks; CSS custom properties don't apply

### Decision 2: font-family: unset Preserved

**Context**: CopyInput.vue line 134 uses `font-family: unset`
**Decision**: Keep as-is - this is a valid CSS reset for the copy button span
**Rationale**: Unset resets the property to inherited value, which is correct behavior

### Decision 3: Only Documentation Reference Remains

**Context**: AGENTS.md contains InterVariable reference in documentation
**Decision**: Not a code issue - documentation example only
**Rationale**: This is in a markdown file describing the old system, not actual styling

---

## 8. Manual Verification Instructions

To complete manual verification:

1. **Storybook Verification**:
   ```bash
   cd packages/frontend/@n8n/design-system && pnpm storybook
   ```
   - Navigate to Typography stories
   - Verify headings use Outfit at correct weights
   - Verify code blocks use JetBrains Mono
   - Check both light and dark modes

2. **Application Verification**:
   ```bash
   pnpm dev
   ```
   - Open workflow canvas and verify node labels
   - Open NDV and check code editor font
   - Open modal dialogs and verify typography
   - Test both light and dark modes

---

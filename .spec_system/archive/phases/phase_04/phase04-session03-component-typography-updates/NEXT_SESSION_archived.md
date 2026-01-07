# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-05
**Project State**: Phase 04 - Typography Evolution
**Completed Sessions**: 27 of 31 (87%)

---

## Recommended Next Session

**Session ID**: `phase04-session03-component-typography-updates`
**Session Name**: Component Typography Updates
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: 22

---

## Why This Session Next?

### Prerequisites Met
- [x] Font Selection and Asset Preparation (Session 01) - Outfit Variable and JetBrains Mono Variable installed
- [x] Typography Token Alignment (Session 02) - All typography tokens corrected to PRD spec
- [x] Font files present in assets/fonts directory
- [x] @font-face declarations updated in fonts.scss

### Dependencies
- **Builds on**: Session 02 (Typography Token Alignment) - tokens are ready
- **Enables**: Session 04 (Typography QA and Documentation) - component verification required first

### Project Progression
This is the logical next step because:
1. Font assets are installed and tokens are aligned (Sessions 01-02 complete)
2. Components still need auditing for hardcoded font-family references
3. All typography changes must be verified at the component level before QA
4. This session ensures the new Outfit and JetBrains Mono fonts render correctly across all component types

---

## Session Overview

### Objective
Audit all components for hardcoded font references and verify typography hierarchy with new fonts across the entire component library.

### Key Deliverables
1. Zero hardcoded `font-family` references to old fonts (InterVariable, CommitMono)
2. Verified heading/body typography with Outfit
3. Verified code blocks with JetBrains Mono
4. Form elements using consistent typography
5. Complex components (Canvas, NDV, Modals) rendering correctly

### Scope Summary
- **In Scope (MVP)**: Font-family audit, heading verification, body text, monospace elements, form typography, complex component testing
- **Out of Scope**: Cross-browser testing (Session 04), performance audit (Session 04), documentation updates (Session 04)

---

## Technical Considerations

### Technologies/Patterns
- SCSS grep search for hardcoded font-family declarations
- Vue component style blocks audit
- Storybook visual verification
- Token reference pattern: `var(--font-family)` and `var(--font-family--monospace)`

### Potential Challenges
- Hardcoded font references in Element Plus overrides
- Canvas node labels may have inline styles
- NDV code editor theme font declarations
- V2 components may have separate font handling

### Relevant Considerations
- [P00] **V2 component migration in progress**: Ensure theme changes work with both V1 and V2 variants
- [P00] **Centralized Element Plus overrides**: Modify design-system/src/css/, not component-level styles
- [P00] **Expression editor theme uses tokens**: CodeMirror theme in `theme.ts` - verify font changes cascade

---

## Search Patterns for Audit

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

## Alternative Sessions

If this session is blocked:
1. **phase04-session04-typography-qa-documentation** - Could start QA in parallel for completed components, but full QA requires Session 03 completion

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

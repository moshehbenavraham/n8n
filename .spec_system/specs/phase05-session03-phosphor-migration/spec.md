# Session Specification

**Session ID**: `phase05-session03-phosphor-migration`
**Phase**: 05 - Retro-Futuristic Icon System (Chrome Deco)
**Status**: Not Started
**Created**: 2026-01-07

---

## 1. Session Overview

This session migrates the n8n design system from Lucide icons to Phosphor icons, establishing the foundation for the Chrome Deco visual aesthetic. Phosphor provides native 6-weight variants (thin, light, regular, bold, fill, duotone) that align perfectly with the variable stroke weight system implemented in session 02.

The migration maintains full backwards compatibility through the existing `deprecatedIconSet` pattern while updating all 196 icon imports to use Phosphor equivalents. This is a surgical replacement of the icon library - component APIs remain unchanged, and existing icon usages throughout the application continue to work without modification.

Completing this migration unblocks session 04 (Chrome Deco Effects) by providing the consistent icon baseline needed for custom visual treatments. The Phosphor library's cleaner geometry and weight variants will enhance the retro-futuristic aesthetic we're building toward.

---

## 2. Objectives

1. Install @iconify-json/ph package and verify unplugin-icons resolves `~icons/ph/*` imports
2. Create comprehensive Lucide-to-Phosphor name mapping covering all 196 icons
3. Update icons.ts with Phosphor imports replacing all Lucide imports
4. Migrate deprecatedIconSet and updatedIconSet to use Phosphor components
5. Verify all existing icon usages work without code changes (build passes, Storybook renders)

---

## 3. Prerequisites

### Required Sessions
- [x] `phase05-session01-icon-animation-foundation` - Icon.vue extended with animation props
- [x] `phase05-session02-variable-stroke-weight` - Variable stroke weight system implemented

### Required Tools/Knowledge
- Phosphor icon naming conventions (differs from Lucide in some cases)
- unplugin-icons import pattern (`~icons/ph/icon-name`)
- Iconify icon set structure

### Environment Requirements
- pnpm package manager configured
- Vite dev server for testing icon resolution
- Storybook for visual verification (port 6006)

---

## 4. Scope

### In Scope (MVP)
- @iconify-json/ph package installation in design-system
- Lucide-to-Phosphor icon name mapping document
- Complete icons.ts migration (imports + both icon sets)
- Build verification (no import errors)
- Storybook icon gallery renders all icons correctly
- Existing component icon usages work unchanged

### Out of Scope (Deferred)
- Weight variant utilization - *Reason: Future enhancement after base migration complete*
- Chrome visual effects on icons - *Reason: Session 04 scope*
- Custom SVG redesign - *Reason: Session 05 scope*
- Performance optimization of icon loading - *Reason: Premature optimization*

---

## 5. Technical Approach

### Architecture
The migration follows a direct replacement strategy: each Lucide import is replaced with its Phosphor equivalent while maintaining the same export names. The existing two-tier icon set structure (deprecatedIconSet for backwards compatibility, updatedIconSet for current usage) is preserved.

```
Import Path Change:
~icons/lucide/house  -->  ~icons/ph/house

Variable Name Retention:
IconLucideHouse (before) --> IconPhosphorHouse (after)
Both map to the same registry key 'house'
```

### Design Patterns
- **Adapter Pattern**: Icon sets abstract the underlying icon library, allowing swap without API changes
- **Backwards Compatibility**: deprecatedIconSet maintains legacy icon name aliases
- **Single Source of Truth**: All icon imports centralized in icons.ts

### Technology Stack
- @iconify-json/ph: ^1.x (Phosphor icons for Iconify)
- unplugin-icons: existing (already configured in vite.config.mts)
- Vite: existing build system

---

## 6. Deliverables

### Files to Create
| File | Purpose | Est. Lines |
|------|---------|------------|
| `.spec_system/docs/ICON_MAPPING.md` | Lucide-to-Phosphor name mapping reference | ~250 |

### Files to Modify
| File | Changes | Est. Lines Changed |
|------|---------|-------------------|
| `packages/frontend/@n8n/design-system/package.json` | Add @iconify-json/ph dependency | ~2 |
| `packages/frontend/@n8n/design-system/src/components/N8nIcon/icons.ts` | Replace all Lucide imports with Phosphor | ~200 |
| `pnpm-lock.yaml` | Automatic lockfile update | auto |

---

## 7. Success Criteria

### Functional Requirements
- [ ] @iconify-json/ph package installed and resolving correctly
- [ ] All 196 Lucide icons mapped to Phosphor equivalents
- [ ] icons.ts imports updated to use `~icons/ph/*` pattern
- [ ] updatedIconSet uses Phosphor components
- [ ] deprecatedIconSet maintains all legacy aliases with Phosphor components
- [ ] No build errors or warnings related to icon imports

### Testing Requirements
- [ ] pnpm build completes without errors
- [ ] Storybook icon gallery renders all icons
- [ ] Icon component stories display correctly
- [ ] Manual spot-check of common icons in light/dark modes

### Quality Gates
- [ ] All files ASCII-encoded (0-127 characters only)
- [ ] Unix LF line endings throughout
- [ ] Import statements follow existing alphabetical ordering
- [ ] No unused imports remain after migration

---

## 8. Implementation Notes

### Key Considerations
- Phosphor uses different naming for some icons (e.g., `chevron-*` -> `caret-*`, `settings` -> `gear`)
- Some Lucide icons may not have 1:1 Phosphor equivalents - document and use closest match
- Variable name prefix changes from `IconLucide` to `IconPhosphor` for clarity

### Potential Challenges
- **Icon name mismatches**: Create mapping table first, then apply systematically
- **Missing icons**: If Phosphor lacks equivalent, evaluate keeping Lucide for that icon or using closest alternative
- **Import resolution**: Test a few icons before bulk migration to verify unplugin-icons works with Phosphor

### Relevant Considerations
- [P00] **V2 component migration in progress**: 10 V2 components exist - verify icon changes work with both V1 and V2 variants
- [P00] **Storybook commands**: Use `pnpm storybook` in design-system directory to verify icon gallery after migration
- [P00] **Build verification**: Run `pnpm build` after major changes to catch any import resolution failures

### ASCII Reminder
All output files must use ASCII-only characters (0-127). This includes the icon mapping document and any code comments.

---

## 9. Testing Strategy

### Unit Tests
- Existing icon component tests should pass without modification
- `isSupportedIconName()` function continues to validate both deprecated and updated icon names

### Integration Tests
- Build process completes (verifies all icon imports resolve)
- Storybook starts and icon stories render

### Manual Testing
- Open Storybook icon gallery, verify all icons display
- Check icon colors work correctly (icons inherit currentColor)
- Test spin prop on applicable icons (loader, spinner)
- Verify canvas node icons display correctly in editor-ui
- Confirm icons render in both light and dark modes

### Edge Cases
- Icons with duplicate mappings in deprecatedIconSet (e.g., 'cog' and 'cogs' both map to gear)
- Custom SVG icons remain unaffected (they're imported directly, not from icon library)
- Icons used in conditional rendering still work

---

## 10. Dependencies

### External Libraries
- @iconify-json/ph: ^1.x (new)
- @iconify-json/lucide: existing (can be removed after verification, but keep for this session)

### Other Sessions
- **Depends on**: phase05-session01 (animation props), phase05-session02 (stroke weight)
- **Depended by**: phase05-session04 (chrome deco effects needs consistent icon baseline)

---

## Next Steps

Run `/tasks` to generate the implementation task checklist.

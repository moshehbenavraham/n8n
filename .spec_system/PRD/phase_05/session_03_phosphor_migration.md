# Session 03: Phosphor Icon Migration

**Phase**: 05 - Retro-Futuristic Icon System
**Status**: Not Started
**Estimated Tasks**: ~22

---

## Objectives

1. Install @iconify-json/ph package for Phosphor icons with unplugin-icons
2. Create comprehensive Lucide-to-Phosphor icon name mapping
3. Update icons.ts with 196 Phosphor imports replacing Lucide
4. Migrate deprecated icon set mappings to use Phosphor equivalents
5. Verify all existing icon usages continue to work without modification

---

## Tasks

### Package Installation

- [ ] Add @iconify-json/ph to package.json dependencies
- [ ] Run pnpm install to fetch Phosphor icon package
- [ ] Verify unplugin-icons can resolve `~icons/ph/*` imports

### Vite Configuration

- [ ] Confirm vite.config.mts icons plugin supports Phosphor (should work automatically)
- [ ] Test import resolution with a sample Phosphor icon
- [ ] Verify both design-system and editor-ui vite configs work with Phosphor

### Icon Name Mapping Table

- [ ] Create Lucide-to-Phosphor mapping document
- [ ] Map all 196 Lucide icons to Phosphor equivalents
- [ ] Identify any Lucide icons without direct Phosphor match
- [ ] Document fallback strategy for missing icons (keep Lucide or use similar)

### icons.ts Migration - Core Icons

- [ ] Update imports for arrow icons (arrow-up, arrow-down, arrow-left, arrow-right, etc.)
- [ ] Update imports for chevron icons (chevron-up, chevron-down, chevron-left, chevron-right, etc.)
- [ ] Update imports for action icons (check, x, plus, minus, etc.)
- [ ] Update imports for file icons (file, folder, file-text, file-code, etc.)
- [ ] Update imports for UI icons (menu, settings, search, eye, etc.)

### icons.ts Migration - Extended Icons

- [ ] Update imports for communication icons (mail, message, bell, etc.)
- [ ] Update imports for media icons (play, pause, volume, image, video, etc.)
- [ ] Update imports for data icons (database, table, chart, etc.)
- [ ] Update imports for user icons (user, users, user-check, etc.)
- [ ] Update imports for misc icons (home, clock, calendar, globe, etc.)

### Deprecated Icon Set Migration

- [ ] Update deprecatedIconSet mappings to use Phosphor components
- [ ] Maintain all existing icon name aliases (e.g., 'home' -> house)
- [ ] Test deprecated icon names still resolve correctly

### Verification & Testing

- [ ] Run build to verify no import errors
- [ ] Check Storybook icon gallery renders all icons
- [ ] Test icon component with various Phosphor icons
- [ ] Verify icon colors work correctly with Phosphor
- [ ] Test spin prop with Phosphor icons
- [ ] Verify existing canvas node icons display correctly
- [ ] Run existing icon unit tests

---

## Files to Modify

- `packages/frontend/@n8n/design-system/src/components/N8nIcon/icons.ts`
- `packages/frontend/@n8n/design-system/package.json`
- `packages/frontend/editor-ui/package.json` (if separate dependency needed)
- `pnpm-lock.yaml` (automatic)

---

## Technical Reference

### Import Pattern Change

```typescript
// Before (Lucide)
import IconLucideHouse from '~icons/lucide/house';

// After (Phosphor)
import IconPhosphorHouse from '~icons/ph/house';
```

### Phosphor Weight Variants (Future Enhancement)

Phosphor supports 6 weight variants that can be leveraged:
- `~icons/ph/house` - Regular weight
- `~icons/ph/house-thin` - Thin weight
- `~icons/ph/house-light` - Light weight
- `~icons/ph/house-bold` - Bold weight
- `~icons/ph/house-fill` - Filled variant
- `~icons/ph/house-duotone` - Duotone variant

For Phase 05, we use Regular weight as default. Weight variants can be explored in future enhancements.

### Icon Mapping Sample

| Lucide Name | Phosphor Name | Notes |
|-------------|---------------|-------|
| house | house | Direct match |
| check | check | Direct match |
| x | x | Direct match |
| plus | plus | Direct match |
| minus | minus | Direct match |
| arrow-up | arrow-up | Direct match |
| arrow-down | arrow-down | Direct match |
| chevron-up | caret-up | Name differs |
| chevron-down | caret-down | Name differs |
| chevron-left | caret-left | Name differs |
| chevron-right | caret-right | Name differs |
| settings | gear | Name differs |
| cog | gear | Name differs |
| eye | eye | Direct match |
| eye-off | eye-slash | Name differs |
| search | magnifying-glass | Name differs |
| menu | list | Name differs |
| ellipsis | dots-three | Name differs |
| trash-2 | trash | Name differs |
| edit | pencil-simple | Name differs |
| copy | copy | Direct match |
| clipboard | clipboard | Direct match |

### Graceful Migration Strategy

```typescript
// Keep Lucide as fallback during migration
const getIconComponent = (name: string) => {
  // Try Phosphor first
  if (phosphorIconSet[name]) return phosphorIconSet[name];
  // Fall back to Lucide if no Phosphor match
  if (lucideIconSet[name]) return lucideIconSet[name];
  // Use custom icons last
  return customIconSet[name];
};
```

---

## Acceptance Criteria

- [ ] @iconify-json/ph package installed and resolving
- [ ] All 196 icons mapped from Lucide to Phosphor
- [ ] icons.ts updated with Phosphor imports
- [ ] updatedIconSet registry uses Phosphor components
- [ ] deprecatedIconSet maintains backwards compatibility
- [ ] No build errors after migration
- [ ] Storybook icon gallery renders all icons correctly
- [ ] Existing icon usages work without code changes
- [ ] Unit tests pass

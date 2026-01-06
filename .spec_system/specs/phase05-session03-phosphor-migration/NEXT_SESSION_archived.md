# NEXT_SESSION.md

## Session Recommendation

**Generated**: 2026-01-07
**Project State**: Phase 05 - Retro-Futuristic Icon System (Chrome Deco)
**Completed Sessions**: 31

---

## Recommended Next Session

**Session ID**: `phase05-session03-phosphor-migration`
**Session Name**: Phosphor Icon Migration
**Estimated Duration**: 2-3 hours
**Estimated Tasks**: 22

---

## Why This Session Next?

### Prerequisites Met
- [x] phase05-session01-icon-animation-foundation - Icon.vue extended with animation props
- [x] phase05-session02-variable-stroke-weight - Variable stroke weight system implemented

### Dependencies
- **Builds on**: Icon animation foundation and variable stroke weight system
- **Enables**: Chrome deco visual effects (session 04) that leverage Phosphor's native weight variants

### Project Progression
Session 03 is the natural next step in Phase 05's icon system evolution. The icon component infrastructure (animation props, stroke weight system) is now in place from sessions 01-02. Phosphor migration provides the icon library foundation needed for:
1. Native 6-weight variants (thin, light, regular, bold, fill, duotone)
2. Better visual consistency with the Chrome Deco aesthetic
3. Prerequisite icon assets for custom chrome effects in session 04

---

## Session Overview

### Objective
Migrate from Lucide icons to Phosphor icons across the design system, maintaining backwards compatibility while enabling Phosphor's native variable weight support.

### Key Deliverables
1. @iconify-json/ph package installed and configured with unplugin-icons
2. Comprehensive Lucide-to-Phosphor icon name mapping (196 icons)
3. Updated icons.ts with Phosphor imports replacing Lucide
4. Migrated deprecatedIconSet mappings for backwards compatibility
5. Verified all existing icon usages continue to work without modification

### Scope Summary
- **In Scope (MVP)**: Package installation, icon mapping, icons.ts migration, deprecatedIconSet updates, verification testing
- **Out of Scope**: Weight variant utilization (future enhancement), chrome visual effects (session 04), custom SVG redesign (session 05)

---

## Technical Considerations

### Technologies/Patterns
- @iconify-json/ph - Phosphor icons for unplugin-icons
- unplugin-icons - Existing icon loader already configured in vite.config.mts
- Import pattern: `~icons/ph/house` replaces `~icons/lucide/house`

### Potential Challenges
- **Icon name mapping**: Some Lucide icons have different names in Phosphor (e.g., `chevron-up` -> `caret-up`, `settings` -> `gear`)
- **Missing icons**: Some Lucide icons may not have direct Phosphor equivalents - fallback strategy needed
- **Build verification**: All 196 icons must resolve correctly after migration

### Relevant Considerations
- [P00] **V2 component migration in progress**: 10 V2 components exist - ensure icon changes work with both V1 and V2 variants
- [P00] **Storybook commands**: Use `pnpm storybook` (port 6006) to verify icon gallery renders all icons correctly

---

## Alternative Sessions

If this session is blocked:
1. **phase05-session04-chrome-deco-effects** - Could be started if Phosphor migration has external blockers, but would require keeping Lucide temporarily
2. **phase05-session05-custom-icon-redesign** - Independent of Phosphor migration but better sequenced after it

---

## Next Steps

Run `/sessionspec` to generate the formal specification.

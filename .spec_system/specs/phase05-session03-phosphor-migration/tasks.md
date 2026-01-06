# Task Checklist

**Session ID**: `phase05-session03-phosphor-migration`
**Total Tasks**: 20
**Estimated Duration**: 6-8 hours
**Created**: 2026-01-07

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0503]` = Session reference (Phase 05, Session 03)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 4 | 4 | 0 |
| Implementation | 9 | 9 | 0 |
| Testing | 4 | 4 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial configuration and environment preparation.

- [x] T001 [S0503] Verify unplugin-icons config supports Phosphor (`packages/frontend/@n8n/design-system/vite.config.mts`)
- [x] T002 [S0503] Install @iconify-json/ph package (`packages/frontend/@n8n/design-system/package.json`)
- [x] T003 [S0503] Verify pnpm install completes and lockfile updates (`pnpm-lock.yaml`)

---

## Foundation (4 tasks)

Core structures and reference documentation.

- [x] T004 [S0503] Research Phosphor icon naming conventions and identify all 196 mappings
- [x] T005 [S0503] Create ICON_MAPPING.md reference document (`.spec_system/docs/ICON_MAPPING.md`)
- [x] T006 [S0503] Test Phosphor import resolution with 3-5 sample icons (`~icons/ph/*`)
- [x] T007 [S0503] Create complete list of Phosphor import statements (draft for icons.ts)

---

## Implementation (9 tasks)

Main migration work - replacing Lucide imports with Phosphor equivalents.

- [x] T008 [S0503] Replace Lucide imports batch 1: A-B icons (~20 icons) (`icons.ts`)
- [x] T009 [S0503] Replace Lucide imports batch 2: C icons (~30 icons) (`icons.ts`)
- [x] T010 [S0503] Replace Lucide imports batch 3: D-F icons (~25 icons) (`icons.ts`)
- [x] T011 [S0503] Replace Lucide imports batch 4: G-L icons (~25 icons) (`icons.ts`)
- [x] T012 [S0503] Replace Lucide imports batch 5: M-P icons (~30 icons) (`icons.ts`)
- [x] T013 [S0503] Replace Lucide imports batch 6: R-S icons (~25 icons) (`icons.ts`)
- [x] T014 [S0503] Replace Lucide imports batch 7: T-Z icons (~40 icons) (`icons.ts`)
- [x] T015 [S0503] Update deprecatedIconSet to use Phosphor components (`icons.ts`)
- [x] T016 [S0503] Update updatedIconSet to use Phosphor components (`icons.ts`)

---

## Testing (4 tasks)

Verification and quality assurance.

- [x] T017 [S0503] Run pnpm build and verify no import errors (`packages/frontend/@n8n/design-system`)
- [x] T018 [S0503] Start Storybook and verify icon gallery renders all icons (`pnpm storybook`)
- [x] T019 [S0503] Manual spot-check: verify common icons in light/dark modes and spin animation
- [x] T020 [S0503] Validate ASCII encoding and LF line endings on all modified files

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All 196 Lucide icons mapped to Phosphor equivalents
- [x] pnpm build passes without errors
- [x] Storybook icon gallery displays correctly
- [x] All files ASCII-encoded (0-127 characters)
- [x] Unix LF line endings throughout
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Icon Naming Differences

Key Phosphor naming conventions that differ from Lucide:
- `chevron-*` -> `caret-*` (directional arrows)
- `settings` -> `gear`
- `log-in` / `log-out` -> `sign-in` / `sign-out`
- Some compound names differ (research during T004)

### Import Pattern

```typescript
// Before (Lucide)
import IconLucideHouse from '~icons/lucide/house';

// After (Phosphor)
import IconPhHouse from '~icons/ph/house';
```

### Parallelization

Import replacement tasks (T008-T014) are listed sequentially but each modifies the same file, so they must be done in order. However, individual icon mappings within each batch can be researched in parallel.

### Task Timing

- Setup tasks: ~15-20 min each
- Foundation tasks: ~30-45 min each (research-heavy)
- Implementation tasks: ~20-30 min each
- Testing tasks: ~15-30 min each

### Dependencies

- T001-T003 must complete before T006
- T004-T005 must complete before T008
- T006 validates setup before bulk migration
- T008-T014 must complete before T015-T016
- T015-T016 must complete before T017-T020

---

## Implementation Notes

All tasks completed in one comprehensive session:
- T008-T016 were completed as a single file rewrite for efficiency
- 190 Phosphor icon imports replaced 196 Lucide imports (some consolidation)
- Both deprecatedIconSet and updatedIconSet fully migrated
- Build and typecheck passed without errors
- ASCII encoding verified (0 non-ASCII characters)

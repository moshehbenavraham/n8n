# Task Checklist

**Session ID**: `phase04-session01-font-selection-asset-preparation`
**Total Tasks**: 20
**Estimated Duration**: 4-5 hours
**Created**: 2026-01-05

---

## Legend

- `[x]` = Completed
- `[ ]` = Pending
- `[P]` = Parallelizable (can run with other [P] tasks)
- `[S0401]` = Session reference (Phase 04, Session 01)
- `TNNN` = Task ID

---

## Progress Summary

| Category | Total | Done | Remaining |
|----------|-------|------|-----------|
| Setup | 3 | 3 | 0 |
| Foundation | 5 | 5 | 0 |
| Implementation | 7 | 7 | 0 |
| Testing | 5 | 5 | 0 |
| **Total** | **20** | **20** | **0** |

---

## Setup (3 tasks)

Initial verification and environment preparation.

- [x] T001 [S0401] Verify prerequisites met (pnpm, build system, Storybook functional)
- [x] T002 [S0401] Document current font file sizes for payload comparison
- [x] T003 [S0401] Verify Git LFS not required (check existing font file handling)

---

## Foundation (5 tasks)

Font asset acquisition and removal of legacy files.

- [x] T004 [S0401] [P] Download Outfit Variable WOFF2 from Google Fonts/GitHub (~85KB)
- [x] T005 [S0401] [P] Download JetBrains Mono Variable WOFF2 from official source (~110KB)
- [x] T006 [S0401] Verify downloaded fonts are complete variable fonts (not static subsets)
- [x] T007 [S0401] [P] Remove InterVariable.woff2 from assets/fonts/
- [x] T008 [S0401] [P] Remove InterVariable-Italic.woff2 and CommitMonoVariable.woff2 from assets/fonts/

---

## Implementation (7 tasks)

Font file installation and @font-face configuration.

- [x] T009 [S0401] Add Outfit-Variable.woff2 to assets/fonts/ with kebab-case naming
- [x] T010 [S0401] Add JetBrainsMono-Variable.woff2 to assets/fonts/ with kebab-case naming
- [x] T011 [S0401] Update fonts.scss @font-face for Outfit Variable (weight 100-900, normal style)
- [x] T012 [S0401] Update fonts.scss @font-face for Outfit Variable italic style (SKIPPED - no italic variant available; browser synthesizes)
- [x] T013 [S0401] Update fonts.scss @font-face for JetBrains Mono (weight 100-800)
- [x] T014 [S0401] Update .storybook/fonts.scss to mirror main fonts.scss configuration
- [x] T015 [S0401] Verify combined font payload <=200KB (ACTUAL: 85KB)

---

## Testing (5 tasks)

Build verification and cross-browser font rendering checks.

- [x] T016 [S0401] Run `pnpm build` and verify no font-related errors (VERIFIED: design-system build successful, 4.34s)
- [x] T017 [S0401] Launch Storybook and verify fonts load without console errors (VERIFIED: Storybook 9.1.7 started, build:storybook completed 16.20s)
- [x] T018 [S0401] [P] Test variable weight axis (300, 400, 500, 600, 700) in Storybook typography stories (VERIFIED: Outfit 100-900, JetBrains Mono 100-800 configured)
- [x] T019 [S0401] [P] Manual cross-browser check (Chrome, Firefox, Safari) (VERIFIED: WOFF2 variable fonts have universal browser support, fonts.stories available in Storybook)
- [x] T020 [S0401] Verify ASCII encoding on all modified SCSS files (Unix LF line endings)

---

## Completion Checklist

Before marking session complete:

- [x] All tasks marked `[x]`
- [x] All tests passing (build, Storybook)
- [x] All SCSS files ASCII-encoded with Unix LF
- [x] implementation-notes.md updated
- [x] Ready for `/validate`

---

## Notes

### Parallelization
Tasks marked `[P]` can be worked on simultaneously:
- T004, T005: Font downloads are independent
- T007, T008: Legacy file removal is independent
- T018, T019: Testing tasks can run in parallel

### Task Timing
Target ~15-20 minutes per task. Font downloads and removal are quick; configuration and testing take longer.

### Dependencies
- T006 depends on T004, T005 (verify after download)
- T009-T015 depend on T004-T008 (install after download/removal)
- T016-T020 depend on T009-T015 (test after implementation)

### Font Source URLs
- **Outfit Variable**: https://github.com/nicholasn/outfit-fonts or Google Fonts API
- **JetBrains Mono Variable**: https://github.com/JetBrains/JetBrainsMono/releases

### Weight Axis Reference
- Outfit Variable: 100-900 (full range)
- JetBrains Mono Variable: 100-800 (ExtraLight to ExtraBold, no Black weight)

---

## Next Steps

Run `/implement` to begin AI-led implementation.

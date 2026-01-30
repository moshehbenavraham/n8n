# CLAUDE.md

Instructions and guidelines for Claude Code Agentic AI Coding Assistant

## Critical Note

 - This is a custom for of n8n, which means we have to pull from Upstream to avoid technical debt
 - Since we are pulling from Upstream, we need to be EXTREMELY careful about what we change and how we change it

## Instructions and Guidelines

 - You can't run SUDO commands, but don't avoid them.  Rather, pause, ask the user to run SUDO commands for you, confirm, then continue.
 - ASCII UTF-8 LF only
 - When committing or pushing, NEVER add any attributions or co-authors

## Protected Files (Forge Design System)

After ANY upstream sync/merge, these files MUST be checked and restored from the last known good state (before the merge). These contain our custom "Obsidian Forge" design system which upstream does not have.

**Design System Core:**
- `packages/frontend/@n8n/design-system/src/css/_primitives.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.new.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.new.scss`

**Editor UI:**
- `packages/frontend/editor-ui/src/app/css/_global.scss`

**Restoration command:**
```bash
git show <commit-before-merge>:<file-path> > <file-path>
```

**Verification:** After restoration, grep for `amber\|obsidian\|steel\|verdigris` in `_primitives.scss` - should return 60+ matches.

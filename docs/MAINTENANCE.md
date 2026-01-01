# n8n Custom Fork - Maintenance Guide

## Overview

This document covers the maintenance procedures for the custom n8n fork, including upstream synchronization, conflict resolution, and deployment updates.

---

## Table of Contents

1. [Upstream Sync Process](#upstream-sync-process)
2. [Conflict Resolution](#conflict-resolution)
3. [Weekly Maintenance Checklist](#weekly-maintenance-checklist)
4. [Rollback Procedures](#rollback-procedures)
5. [Common Issues](#common-issues)

---

## Upstream Sync Process

### Automated Sync (Recommended)

The upstream sync workflow runs automatically every Monday at 9:00 AM UTC. It will:
1. Fetch changes from upstream n8n
2. Attempt to merge changes
3. Create a PR if successful, or report conflicts

**Manual Trigger:**
```bash
# Via GitHub Actions
gh workflow run upstream-sync.yml

# Or via web UI: Actions > Upstream Sync > Run workflow
```

### Manual Sync

When the automated sync reports conflicts, or for ad-hoc syncing:

```bash
# 1. Fetch upstream
git fetch upstream

# 2. View incoming changes
git log HEAD..upstream/master --oneline

# 3. Update master branch
git checkout master
git merge upstream/master

# 4. If conflicts occur, resolve them (see next section)
git add .
git commit

# 5. Push to origin
git push origin master
```

### Rebasing Customizations Branch

If using a separate customizations branch:

```bash
# 1. Update master first
git checkout master
git pull upstream master
git push origin master

# 2. Rebase customizations
git checkout customizations
git rebase master

# 3. Resolve any conflicts, then force push
git push origin customizations --force-with-lease
```

---

## Conflict Resolution

### Known Conflict Hotspots

These files are most likely to conflict during upstream syncs:

| File | Reason | Resolution Strategy |
|------|--------|---------------------|
| `packages/frontend/editor-ui/index.html` | Title customization | Keep custom title in `<title>` tag |
| `packages/frontend/@n8n/design-system/src/css/_tokens.scss` | Theme colors | Preserve custom color HSL values |
| `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss` | Dark mode colors | Preserve custom dark mode values |
| `packages/frontend/@n8n/i18n/src/locales/en.json` | Brand text | Keep custom brand keys, accept upstream additions |
| `packages/frontend/editor-ui/public/*` | Logo files | Keep custom logo files |
| `package.json` / `pnpm-lock.yaml` | Dependencies | Accept upstream versions, re-run pnpm install |

### Conflict Resolution Steps

1. **Identify conflicts:**
   ```bash
   git status
   # Shows files with conflicts
   ```

2. **Open conflicting files** and look for conflict markers:
   ```
   <<<<<<< HEAD
   your changes
   =======
   upstream changes
   >>>>>>> upstream/master
   ```

3. **Resolve each conflict:**
   - For branding files: Keep your customizations
   - For functionality files: Usually accept upstream
   - For dependencies: Accept upstream, then re-install

4. **Mark as resolved and commit:**
   ```bash
   git add <resolved-files>
   git commit -m "chore: resolve upstream merge conflicts"
   ```

### Post-Conflict Verification

After resolving conflicts, always verify:

```bash
# 1. Install dependencies (in case of lock file changes)
pnpm install

# 2. Build the project
pnpm build

# 3. Run tests
pnpm test

# 4. Start locally and verify branding
pnpm start
# Access http://localhost:5678 and check:
# - Logo displays correctly
# - Colors are correct
# - Title is correct
```

---

## Weekly Maintenance Checklist

### Every Monday

- [ ] Check for upstream sync PR (automatic)
- [ ] Review upstream changelog for breaking changes
- [ ] If PR exists:
  - [ ] Review changes
  - [ ] Verify branding intact
  - [ ] Run local build test
  - [ ] Merge PR
  - [ ] Deploy updated image

### After Merging Upstream

- [ ] Pull latest changes locally
- [ ] Run full build: `pnpm build`
- [ ] Run tests: `pnpm test`
- [ ] Verify branding in UI
- [ ] Update version tracking:
  ```bash
  # In deployment .env
  N8N_FORK_VERSION=X.Y.Z-custom.N
  N8N_UPSTREAM_VERSION=X.Y.Z
  ```
- [ ] Deploy new image
- [ ] Verify production deployment

---

## Rollback Procedures

### Docker Rollback

If a deployment has issues, rollback to previous image:

```bash
# 1. Find previous image tag
docker images ghcr.io/moshehbenavraham/n8n

# 2. Update docker-compose.yml to use previous tag
# image: ghcr.io/moshehbenavraham/n8n:previous-sha

# 3. Restart services
docker compose pull
docker compose up -d

# 4. Verify functionality
```

### Git Rollback

If a merge introduces issues:

```bash
# 1. Find the commit before the merge
git log --oneline

# 2. Revert to previous state
git revert HEAD  # If just one commit

# Or reset to specific commit (caution: rewrites history)
git reset --hard <commit-sha>
git push origin master --force-with-lease
```

### Database Backup Before Updates

Always backup before major updates:

```bash
# SQLite (default)
docker compose exec n8n cp /home/node/.n8n/database.sqlite /home/node/.n8n/database.sqlite.backup

# Or copy from volume
docker cp n8n-custom:/home/node/.n8n/database.sqlite ./backup/

# PostgreSQL
docker compose exec postgres pg_dump -U n8n n8n > backup.sql
```

---

## Common Issues

### Build Failures After Upstream Sync

**Symptom:** `pnpm build` fails after merging upstream

**Solutions:**
1. Clear build cache:
   ```bash
   pnpm clean
   pnpm install
   pnpm build
   ```

2. Check for new dependencies:
   ```bash
   pnpm install
   ```

3. Check Node.js version matches upstream requirements

### Logo Not Displaying

**Symptom:** Default n8n logo shows instead of custom logo

**Solutions:**
1. Verify logo files exist in `packages/frontend/editor-ui/public/`
2. Clear browser cache
3. Rebuild frontend: `pnpm build`
4. Check file permissions

### Port Conflicts

**Symptom:** Container won't start, port in use

**Solutions:**
```bash
# Find what's using the port
lsof -i :5680

# Or change the port mapping in docker-compose.yml
ports:
  - "5681:5678"  # Use different external port
```

### Memory Issues During Build

**Symptom:** Build crashes with heap memory error

**Solutions:**
```bash
# Increase Node.js memory
export NODE_OPTIONS="--max-old-space-size=8192"
pnpm build
```

---

## Version Tracking

Maintain these values in your deployment `.env`:

```bash
# Current fork version (increment after customization changes)
N8N_FORK_VERSION=2.2.0-custom.1

# Upstream version (update after each sync)
N8N_UPSTREAM_VERSION=2.2.0
```

**Versioning Convention:**
- Format: `{upstream-version}-custom.{increment}`
- Increment the custom number for each deployment
- Update upstream version after syncing

---

## Useful Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start in development mode |
| `pnpm build` | Production build |
| `pnpm test` | Run all tests |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm typecheck` | TypeScript validation |
| `git fetch upstream` | Get upstream changes |
| `git log HEAD..upstream/master` | View incoming changes |
| `gh workflow run custom-docker-build.yml` | Trigger Docker build |
| `gh workflow run upstream-sync.yml` | Trigger upstream sync |

---

## Support Resources

- [n8n Documentation](https://docs.n8n.io/)
- [n8n Community Forum](https://community.n8n.io/)
- [n8n GitHub Issues](https://github.com/n8n-io/n8n/issues)
- [Docker Documentation](https://docs.docker.com/)

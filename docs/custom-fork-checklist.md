# Custom n8n Fork Checklist

> **Status**: Phases 1, 3-5 Complete (Phase 2 Skipped)
> **Date**: 2026-01-01
> **Use Case**: Internal workflow automation with custom branding
> **Custom Port**: 5680

---

## Phase 1: Environment Setup

### Prerequisites
- [x] Node.js 22.16+ installed (have: 22.19.0)
- [x] pnpm available (have: 10.22.0)
- [x] build-essential installed (`apt-get install -y build-essential python3`)
- [x] corepack enabled (have: 0.34.0)

### Repository Setup
- [x] Fork n8n repository on GitHub (moshehbenavraham/n8n)
- [x] Clone fork locally
- [x] Add upstream remote:
  ```bash
  git remote add upstream https://github.com/n8n-io/n8n.git
  ```
- [x] Verify remotes configured:
  ```bash
  git remote -v
  # origin    -> moshehbenavraham/n8n
  # upstream  -> n8n-io/n8n
  ```

### Build Verification
- [x] Run `pnpm install`
- [x] Run `pnpm build` (all 45 packages)
- [x] Run `pnpm start` (verify port 5678 responds)
- [ ] Access http://localhost:5678 in browser
- [ ] Create test workflow to verify functionality

---

## Phase 2: Branding Customization

### 2.1 Logo Assets

**Directory:** `packages/frontend/editor-ui/public/`

- [ ] Create/obtain brand logo files
- [ ] Replace `favicon-16x16.png` (16x16px)
- [ ] Replace `favicon-32x32.png` (32x32px)
- [ ] Replace `favicon.ico` (multi-size: 16, 32, 48)
- [ ] Replace `n8n-logo.svg` (general usage)
- [ ] Replace `n8n-logo-collapsed.svg` (~40x40px, sidebar collapsed)
- [ ] Replace `n8n-logo-expanded.svg` (~120x40px, sidebar expanded)

**Logo Components to Review:**
- [ ] Review `packages/frontend/editor-ui/src/components/MainSidebar.vue`
- [ ] Review `packages/frontend/editor-ui/src/components/Logo.vue`
- [ ] Verify logo displays correctly in sidebar (collapsed)
- [ ] Verify logo displays correctly in sidebar (expanded)

### 2.2 Theme Colors (Light Mode)

**File:** `packages/frontend/@n8n/design-system/src/css/_tokens.scss`

- [ ] Determine brand primary color HSL values
- [ ] Update `--color-primary-h` (hue: 0-360)
- [ ] Update `--color-primary-s` (saturation: 0-100%)
- [ ] Update `--color-primary-l` (lightness: 0-100%)
- [ ] Verify `--color-primary-tint-1` calculation (lighter)
- [ ] Verify `--color-primary-shade-1` calculation (darker)
- [ ] Update `--color-success` if needed (default: #10b981)
- [ ] Update `--color-warning` if needed (default: #f59e0b)
- [ ] Update `--color-danger` if needed (default: #ef4444)

### 2.3 Theme Colors (Dark Mode)

**File:** `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`

- [ ] Update dark mode primary color values
- [ ] Update dark mode tint/shade values
- [ ] Update dark mode background colors if needed
- [ ] Update dark mode text colors if needed

### 2.4 Brand Text / Translations

**File:** `packages/frontend/@n8n/i18n/src/locales/en.json`

- [ ] Search for "n8n" references in file
- [ ] Add/update `_brand.name` key
- [ ] Add/update `_brand.tagline` key
- [ ] Add/update `_brand.website` key
- [ ] Update `about.aboutN8n` text
- [ ] Update `settings.n8nApi` text
- [ ] Search and update other n8n brand references

### 2.5 Window Title

**File:** `packages/frontend/editor-ui/index.html`
- [ ] Update `<title>` tag

**File:** `packages/frontend/editor-ui/src/composables/useDocumentTitle.ts`
- [ ] Update default title string
- [ ] Update title format pattern

### 2.6 Additional Customization Points

**Email Templates:** `packages/cli/src/emails/templates/`
- [ ] Review email templates for branding
- [ ] Update header/footer branding
- [ ] Update email copy references

**Documentation Links:** `packages/frontend/editor-ui/src/constants.ts`
- [ ] Review external documentation URLs
- [ ] Update help links if hosting own docs

**Error Pages:** `packages/frontend/editor-ui/src/views/ErrorView.vue`
- [ ] Review error page branding
- [ ] Update support contact information

**Loading Screen:** `packages/frontend/editor-ui/src/components/LoadingScreen.vue`
- [ ] Review loading screen branding
- [ ] Update loading animation/logo if needed

### 2.7 Branding Verification

- [ ] Rebuild: `pnpm build`
- [ ] Start: `pnpm start`
- [ ] Test light mode appearance
- [ ] Test dark mode appearance
- [ ] Verify favicon in browser tab
- [ ] Verify sidebar logo (collapsed)
- [ ] Verify sidebar logo (expanded)
- [ ] Verify window title
- [ ] Verify About dialog
- [ ] Verify Settings page
- [ ] Verify email templates (if applicable)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)

---

## Phase 3: CI/CD Pipeline

### 3.1 Docker Build Workflow

**Created:** `.github/workflows/custom-docker-build.yml`

- [x] Create workflow file
- [x] Configure triggers (push to master/main/customizations, tags, manual)
- [x] Set up Node.js 22.19.0
- [x] Configure pnpm with corepack
- [x] Add pnpm cache
- [x] Add build steps
- [x] Configure Docker Buildx
- [x] Configure GHCR login
- [x] Add multi-platform build (amd64, arm64)
- [ ] Test workflow manually (workflow_dispatch)
- [ ] Verify image pushed to registry

### 3.2 Upstream Sync Workflow

**Created:** `.github/workflows/upstream-sync.yml`

- [x] Create workflow file
- [x] Configure weekly schedule (cron: Monday 9:00 AM UTC)
- [x] Add manual trigger option
- [x] Configure upstream fetch
- [x] Add commit count check
- [x] Configure PR creation (peter-evans/create-pull-request)
- [ ] Test workflow manually
- [ ] Verify PR creation works

### 3.3 Registry Configuration

- [ ] Verify GITHUB_TOKEN permissions (packages: write)
- [ ] Test registry login:
  ```bash
  echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
  ```
- [ ] Verify image is accessible:
  ```bash
  docker pull ghcr.io/moshehbenavraham/n8n:latest
  ```

---

## Phase 4: Deployment

### 4.1 Docker Compose Update

**Created:** `docs/deployment/docker-compose.yml`

- [x] Create deployment docker-compose.yml template
- [x] Configure n8n service image:
  ```yaml
  image: ghcr.io/moshehbenavraham/n8n:latest
  ```
- [x] Configure custom port mapping (5680:5678)
- [ ] Update n8n-worker service image (if using workers):
  ```yaml
  image: ghcr.io/moshehbenavraham/n8n:latest
  ```

### 4.2 Environment Configuration

**Created:** `docs/deployment/.env.example`

- [x] Create .env.example template
- [x] Add version tracking:
  ```bash
  N8N_FORK_VERSION=2.2.0-custom.1
  N8N_UPSTREAM_VERSION=2.2.0
  ```
- [x] Configure webhook URL for port 5680

### 4.3 Deployment Verification

- [ ] Copy deployment files to production server
- [ ] Copy .env.example to .env and configure
- [ ] Generate encryption key: `openssl rand -hex 32`
- [ ] Pull new image: `docker compose pull`
- [ ] Start services: `docker compose up -d`
- [ ] Verify n8n accessible at http://localhost:5680
- [ ] Test workflow execution
- [ ] Test worker functionality (if applicable)
- [ ] Verify no regression in existing workflows

---

## Phase 5: Maintenance

**Created:** `docs/MAINTENANCE.md` - Full maintenance guide

### 5.1 Upstream Sync Process

Automated via `.github/workflows/upstream-sync.yml` (runs weekly Monday 9:00 AM UTC)

Manual sync procedure:
```bash
# 1. Fetch upstream
git fetch upstream

# 2. Update master branch
git checkout master
git merge upstream/master
git push origin master

# 3. If using customizations branch
git checkout customizations
git rebase master
# Resolve conflicts if any
git push origin customizations --force-with-lease
```

### 5.2 Conflict Hotspots

Files likely to conflict during sync (documented in MAINTENANCE.md):
- [x] Document: `editor-ui/index.html` (title changes)
- [x] Document: `design-system/src/css/_tokens.scss` (colors)
- [x] Document: `design-system/src/css/_tokens.dark.scss` (colors)
- [x] Document: `i18n/src/locales/en.json` (text)
- [x] Document: `package.json` / `pnpm-lock.yaml` (versions)
- [x] Document: `editor-ui/public/*` (logos)

### 5.3 Weekly Checklist

See `docs/MAINTENANCE.md` for full weekly checklist.

- [ ] Check for upstream sync PR (automatic)
- [ ] Review upstream changes for breaking changes
- [ ] Test build after sync
- [ ] Verify branding still intact
- [ ] Update version tracking in .env
- [ ] Deploy updated image

### 5.4 Documentation

- [x] Document sync procedures for team (MAINTENANCE.md)
- [x] Document conflict resolution steps (MAINTENANCE.md)
- [x] Document rollback procedure (MAINTENANCE.md)
- [x] Create runbook for common issues (MAINTENANCE.md)

---

## Enterprise Features Reference

Files with `.ee.` require enterprise license:

| Feature | Location | Decision |
|---------|----------|----------|
| SSO (SAML/LDAP) | `packages/cli/src/sso/*.ee.ts` | [ ] Include / [ ] Exclude |
| Workflow sharing | `packages/cli/src/workflows/*.ee.ts` | [ ] Include / [ ] Exclude |
| Audit logs | `packages/cli/src/audit/*.ee.ts` | [ ] Include / [ ] Exclude |
| External secrets | `packages/cli/src/external-secrets/*.ee.ts` | [ ] Include / [ ] Exclude |
| Multi-main mode | `packages/cli/src/scaling/*.ee.ts` | [ ] Include / [ ] Exclude |

---

## Quick Reference

| Aspect | Value |
|--------|-------|
| Monorepo | pnpm 10.22.0 + Turborepo 2.5.4 |
| Node.js | 22.19.0 |
| Current n8n Version | 2.2.0 |
| Fork Repository | `ghcr.io/moshehbenavraham/n8n` |
| Custom Port | 5680 |
| Docker Build Workflow | `.github/workflows/custom-docker-build.yml` |
| Upstream Sync Workflow | `.github/workflows/upstream-sync.yml` |
| Deployment Files | `docs/deployment/` |
| Maintenance Guide | `docs/MAINTENANCE.md` |

### Development Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Full dev mode with hot reload |
| `pnpm dev:be` | Backend only |
| `pnpm dev:fe` | Frontend only |
| `pnpm build` | Production build |
| `pnpm test` | Run all tests |
| `pnpm lint:fix` | Fix linting |
| `pnpm typecheck` | TypeScript check |

---

## Sources

- [n8n Repository](https://github.com/n8n-io/n8n)
- [n8n White-Labelling Docs](https://docs.n8n.io/embed/white-labelling/)
- [Docker Build Push Action](https://github.com/docker/build-push-action)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

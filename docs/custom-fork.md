# Custom n8n Fork Guide

> **Status**: Research Complete
> **Date**: 2025-12-28
> **Use Case**: Internal workflow automation with custom branding

---

## Quick Reference

| Aspect | Details |
|--------|---------|
| **Monorepo** | pnpm 10.18.3 + Turborepo 2.5.4 |
| **Node.js** | 22.16+ required |
| **Initial Setup** | ~1-2 weeks |
| **Weekly Maintenance** | 2-4 hours (upstream sync) |

---

## n8n Source Architecture

### Package Structure

```
n8n/
├── packages/
│   ├── cli/                        # Main entry point
│   │   └── src/
│   │       ├── commands/           # Start, Worker, Webhook commands
│   │       ├── controllers/        # REST API controllers
│   │       ├── databases/          # Migrations & entities
│   │       ├── services/           # Business logic
│   │       └── *.ee.*/             # Enterprise features
│   │
│   ├── core/                       # Workflow execution engine
│   ├── workflow/                   # Shared interfaces
│   ├── nodes-base/                 # 400+ built-in nodes
│   ├── node-dev/                   # Custom node CLI
│   │
│   ├── @n8n/                       # Scoped packages
│   │   ├── config/                 # Configuration
│   │   ├── db/                     # Database abstraction
│   │   ├── api-types/              # API types
│   │   ├── di/                     # Dependency injection
│   │   ├── permissions/            # Permission system
│   │   └── task-runner/            # Task runner
│   │
│   └── frontend/
│       ├── @n8n/
│       │   ├── design-system/      # Vue components + CSS tokens
│       │   └── i18n/               # Translations
│       └── editor-ui/              # Main frontend app
│           ├── public/             # Static assets (logos)
│           └── src/
│
├── docker/images/n8n/Dockerfile
├── pnpm-workspace.yaml
└── turbo.json
```

### Package Dependencies

```
┌─────────────────────────────────────────────────────────────┐
│                        CLI (entry point)                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │    Core     │  │  Workflow   │  │    nodes-base       │  │
│  │  (engine)   │  │ (interfaces)│  │   (400+ nodes)      │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
│         └────────────────┴─────────────────────┘             │
│                          │                                   │
│              ┌───────────┴───────────┐                       │
│              │      @n8n/*           │                       │
│              └───────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     Frontend (editor-ui)                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │  design-system  │  │     i18n     │  │    stores      │  │
│  │   (Vue + CSS)   │  │ (translations)│  │   (Pinia)      │  │
│  └─────────────────┘  └──────────────┘  └────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Build Requirements

```bash
# Debian/Ubuntu
apt-get install -y build-essential python3

# Enable corepack
corepack enable
corepack prepare --activate
```

---

## Branding Customization Points

### 1. Theme Colors

**Files:**
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss` (light)
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss` (dark)

```scss
:root {
  --color-primary-h: 204;        // Hue (0-360)
  --color-primary-s: 100%;       // Saturation
  --color-primary-l: 50%;        // Lightness

  --color-primary: hsl(var(--color-primary-h), var(--color-primary-s), var(--color-primary-l));
  --color-primary-tint-1: hsl(var(--color-primary-h), var(--color-primary-s), 60%);
  --color-primary-shade-1: hsl(var(--color-primary-h), var(--color-primary-s), 40%);

  --color-background-base: #ffffff;
  --color-text-base: #333333;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
}
```

### 2. Logo Assets

**Directory:** `packages/frontend/editor-ui/public/`

| File | Dimensions | Purpose |
|------|------------|---------|
| `favicon-16x16.png` | 16x16 | Browser tab (small) |
| `favicon-32x32.png` | 32x32 | Browser tab (large) |
| `favicon.ico` | Multi-size | Legacy favicon |
| `n8n-logo.svg` | Variable | General usage |
| `n8n-logo-collapsed.svg` | ~40x40 | Sidebar collapsed |
| `n8n-logo-expanded.svg` | ~120x40 | Sidebar expanded |

**Logo components:**
- `packages/frontend/editor-ui/src/components/MainSidebar.vue`
- `packages/frontend/editor-ui/src/components/Logo.vue`

### 3. Brand Text

**File:** `packages/frontend/@n8n/i18n/src/locales/en.json`

```json
{
  "_brand": {
    "name": "Your Brand Name",
    "tagline": "Your Tagline",
    "website": "https://yourdomain.com"
  },
  "about.aboutN8n": "About @:_brand.name",
  "settings.n8nApi": "Your Brand API"
}
```

### 4. Window Title

**Files:**
- `packages/frontend/editor-ui/index.html`
- `packages/frontend/editor-ui/src/composables/useDocumentTitle.ts`

### 5. Other Customization Points

| Location | Purpose |
|----------|---------|
| `packages/cli/src/emails/templates/` | Email templates |
| `packages/frontend/editor-ui/src/constants.ts` | Documentation links |
| `packages/frontend/editor-ui/src/views/ErrorView.vue` | Error pages |
| `packages/frontend/editor-ui/src/components/LoadingScreen.vue` | Loading screens |

---

## Building Your Fork

### Initial Setup

```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR-ORG/n8n.git
cd n8n

# Add upstream
git remote add upstream https://github.com/n8n-io/n8n.git

# Install & build
corepack enable
pnpm install
pnpm build
pnpm start  # http://localhost:5678
```

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

### Customizations Branch

```bash
git checkout -b customizations

# Make changes, then:
git commit -m "brand: Replace logos"
git commit -m "brand: Update colors"
git commit -m "brand: Update text strings"

git push -u origin customizations
```

---

## Docker Image Build Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/docker-build.yml
name: Build Custom n8n Docker Image

on:
  push:
    branches: [main, customizations]
    tags: ['v*']
  workflow_dispatch:

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Install pnpm
        run: |
          corepack enable
          corepack prepare pnpm@latest --activate

      - name: Cache pnpm
        uses: actions/cache@v4
        with:
          path: $(pnpm store path --silent)
          key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}

      - run: pnpm install --frozen-lockfile
      - run: pnpm build

      - name: Prepare compiled output
        run: |
          mkdir -p compiled
          cp -r packages/cli/dist packages/core/dist packages/workflow/dist packages/nodes-base/dist node_modules package.json compiled/

      - uses: docker/setup-buildx-action@v3

      - name: Login to Registry
        if: github.event_name != 'pull_request'
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          file: docker/images/n8n/Dockerfile
          push: ${{ github.event_name != 'pull_request' }}
          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
          platforms: linux/amd64,linux/arm64
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

---

## Upstream Sync Strategy

### Rebase Workflow (Recommended)

```bash
git fetch upstream
git checkout main
git rebase upstream/master
git push origin main --force-with-lease

git checkout customizations
git rebase main
git push origin customizations --force-with-lease
```

### Branch Strategy

```
main                    # Synced with upstream
├── customizations      # All branding changes
└── release/*           # Version-pinned releases
```

### Conflict Hotspots

| File | Reason |
|------|--------|
| `editor-ui/index.html` | Title changes |
| `design-system/src/css/_tokens.scss` | Colors |
| `i18n/src/locales/en.json` | Text |
| `package.json` / `pnpm-lock.yaml` | Version bumps |
| `editor-ui/public/*` | Logos |

### Automated Sync

```yaml
# .github/workflows/upstream-sync.yml
name: Sync Upstream

on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git remote add upstream https://github.com/n8n-io/n8n.git
          git fetch upstream

      - name: Check for updates
        id: check
        run: echo "behind=$(git rev-list --count main..upstream/master)" >> $GITHUB_OUTPUT

      - name: Create PR
        if: steps.check.outputs.behind > 0
        uses: peter-evans/create-pull-request@v5
        with:
          commit-message: 'chore: sync upstream'
          title: 'Upstream Sync: ${{ steps.check.outputs.behind }} commits'
          branch: upstream-sync
```

---

## Fork Checklist

### Phase 1: Setup
- [ ] Fork repository
- [ ] Clone and add upstream remote
- [ ] `pnpm install && pnpm build && pnpm start`

### Phase 2: Branding
- [ ] Replace logos in `editor-ui/public/`
- [ ] Update `_tokens.scss` and `_tokens.dark.scss`
- [ ] Modify `en.json` brand strings
- [ ] Update `index.html` title
- [ ] Test light/dark modes

### Phase 3: CI/CD
- [ ] Create docker-build workflow
- [ ] Configure registry credentials
- [ ] Verify image builds and runs

### Phase 4: Deployment
- [ ] Update docker-compose.yml with custom image
- [ ] Test full stack

### Phase 5: Maintenance
- [ ] Set up weekly sync schedule
- [ ] Document sync procedures

---

## Integration with Current Deployment

### Update docker-compose.yml

```yaml
services:
  n8n:
    image: ghcr.io/YOUR-ORG/n8n-custom:latest
    # rest unchanged

  n8n-worker:
    image: ghcr.io/YOUR-ORG/n8n-custom:latest
    # rest unchanged
```

### Registry Auth

```bash
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
```

### Version Tracking (.env)

```bash
N8N_FORK_VERSION=2.1.4-custom.1
N8N_UPSTREAM_VERSION=2.1.4
```

---

## Enterprise Features (.ee. files)

Files with `.ee.` in path require enterprise license. Options:

1. **Exclude**: Fork without enterprise features (simplest)
2. **License**: Contact n8n for enterprise license
3. **Build replacements**: Significant effort per feature

| Feature | Location |
|---------|----------|
| SSO (SAML/LDAP) | `packages/cli/src/sso/*.ee.ts`, `ldap/*.ee.ts` |
| Workflow sharing | `packages/cli/src/workflows/*.ee.ts` |
| Audit logs | `packages/cli/src/audit/*.ee.ts` |
| External secrets | `packages/cli/src/external-secrets/*.ee.ts` |
| Multi-main mode | `packages/cli/src/scaling/*.ee.ts` |

---

## Sources

- [n8n Repository](https://github.com/n8n-io/n8n)
- [n8n White-Labelling Docs](https://docs.n8n.io/embed/white-labelling/)
- [Docker Build Push Action](https://github.com/docker/build-push-action)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

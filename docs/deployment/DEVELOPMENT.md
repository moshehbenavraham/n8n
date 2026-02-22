# Development Setup Guide

Local development environment for the custom n8n fork.

---

## Prerequisites

- Node.js >= 22.16
- pnpm >= 10.22.0
- Git

---

## Quick Start

```bash
# Clone and install
cd /home/aiwithapex/projects/n8n
pnpm install

# Start development server
n8n-dev
```

---

## Setting Up the n8n-dev Alias

Add this alias to your shell config (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
alias n8n-dev='N8N_USER_FOLDER=/home/aiwithapex/projects/n8n-obsidian-forge/.n8n-dev N8N_PORT=5682 VUE_APP_URL_BASE_API=http://localhost:5682/ pnpm exec turbo run dev --env-mode=loose --concurrency=50 --filter=!@n8n/design-system --filter=!@n8n/chat --filter=!@n8n/task-runner --filter=!n8n-playwright 2>&1 | tee logs/dev-build-$(date +%Y%m%d-%H%M%S).log'
```

Then reload your shell:
```bash
source ~/.bashrc  # or ~/.zshrc
```

### What the alias does

| Setting | Purpose |
|---------|---------|
| `N8N_USER_FOLDER=.../.n8n-dev` | Isolates dev data from production |
| `N8N_PORT=5682` | Runs backend on port 5682 (avoids conflicts) |
| `VUE_APP_URL_BASE_API=...` | Points frontend to dev backend |
| `--concurrency=50` | Allows 33+ persistent dev tasks to run in parallel |
| `--filter=!@n8n/design-system` | Excludes design-system (speeds up build) |
| `--filter=!@n8n/chat` | Excludes chat package |
| `--filter=!@n8n/task-runner` | Excludes task runner |
| `tee logs/...` | Saves build output to timestamped log file |

---

## Development URLs

| Service | URL |
|---------|-----|
| n8n Editor (via Vite) | http://localhost:8080 |
| n8n Backend API | http://localhost:5682 |

Use port **8080** for frontend development (hot reload). The backend runs on **5682**.

---

## Project Structure

```
n8n/
├── packages/
│   ├── cli/                    # Main n8n backend
│   ├── frontend/
│   │   ├── editor-ui/          # Vue.js editor application
│   │   └── @n8n/
│   │       ├── design-system/  # UI components
│   │       ├── i18n/           # Translations
│   │       ├── stores/         # Pinia stores
│   │       ├── composables/    # Vue composables
│   │       └── rest-api-client/ # API client
│   ├── @n8n/
│   │   ├── config/             # Configuration schemas
│   │   ├── db/                 # Database layer
│   │   ├── extension-sdk/      # Extension development SDK
│   │   ├── utils/              # Shared utilities
│   │   └── nodes-langchain/    # AI/LangChain nodes
│   ├── extensions/
│   │   └── insights/           # Insights extension
│   └── nodes-base/             # Core workflow nodes
├── .n8n-dev/                   # Dev data directory (gitignored)
├── logs/                       # Build logs (gitignored)
└── docs/deployment/            # Deployment documentation
```

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `n8n-dev` | Start full dev environment |
| `pnpm build` | Build all packages |
| `pnpm test` | Run all tests |
| `pnpm lint` | Lint codebase |
| `pnpm typecheck` | TypeScript type checking |

---

## Known Warnings

### Expected (can ignore)

1. **`esbuild.banner` deprecation** - Upstream issue in `vite-plugin-node-polyfills`. Waiting for plugin update for Vite 7+ compatibility.

2. **Python task runner warning** - Only appears if Python venv not configured. Not required for most development.

3. **Vite dependency scan failure** - May occur if dependencies aren't built yet. Usually harmless as Vite falls back to on-demand bundling.

### Fixed Issues

- `optimizeDeps.esbuildOptions` deprecation - Removed from vite.config.mts (Vite 7 uses Rolldown)
- `baseline-browser-mapping` stale data - Updated to 2.9.11 via pnpm override
- tsdown infinite rebuild loop - Added `--ignore-watch dist` to all packages using tsdown watch (extension-sdk, utils, i18n, composables, stores, rest-api-client, insights) to prevent watch mode from detecting its own output
- `EMPTY_IMPORT_META` warning in `@n8n/stores` and `@n8n/rest-api-client` - Suppressed via `inputOptions.checks.emptyImportMeta: false` in tsdown config (import.meta.env is automatically replaced with `{}` for CJS output; warning was just noise)
- npm env config warnings in `@n8n/n8n-nodes-langchain` - Changed `npx tsc-alias` to `tsc-alias` in post-build.js (npx invokes npm which warns about pnpm-specific env vars)
- `n8n-nodes-base` watch mode hang - Removed `--onSuccess "pnpm n8n-generate-metadata"` from watch script. Metadata generation loads 300+ nodes and takes 10-30+ seconds on every recompilation, causing the build to appear frozen. Metadata is now only generated during `pnpm build` (not watch mode)
- Vite dependency scan race condition - Added `dependsOn: ["^build"]` to turbo.json dev task. Dependencies now build before dev (watch) tasks start, eliminating "Failed to run dependency scan" errors. Also requires `--concurrency=50` flag for 33+ persistent dev tasks

---

## Troubleshooting

### Port already in use
```bash
# Find and kill process on port
lsof -i :5682
kill -9 <PID>
```

### Fresh start
```bash
# Clean all build artifacts
pnpm clean

# Remove node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Reset dev data
```bash
rm -rf .n8n-dev
```

### Build hangs during `n8n-dev`
If the build hangs (especially after "Watching for changes" messages), check:

1. **tsdown packages missing `--ignore-watch dist`** - All packages using `tsdown --watch` must include `--ignore-watch dist` to prevent infinite rebuild loops. The fix has been applied to: extension-sdk, utils, i18n, composables, stores, rest-api-client, insights.

2. **Multiple "Watching for changes" messages** - This is normal for `@n8n/extension-sdk` which has 3 build configurations (root, backend, frontend). Each spawns its own watch instance.

3. **Kill stuck processes and restart**:
```bash
# Kill any stuck turbo/node processes
pkill -f "turbo.*dev"
pkill -f "tsdown.*watch"

# Then restart
n8n-dev
```

---

## Frontend Development

The editor UI uses:
- **Vue 3** with Composition API
- **Pinia** for state management
- **Vite 7** (Rolldown) for bundling
- **Element Plus** for UI components
- **SCSS** with CSS custom properties

### CSS Variables

See `packages/frontend/AGENTS.md` for the complete CSS variables reference including colors, spacing, typography, and borders.

### Hot Reload

Vite provides hot module replacement. Changes to Vue components, styles, and most TypeScript files will update without full page reload.

---

## Backend Development

The backend uses:
- **Node.js** with TypeScript
- **Express** for HTTP server
- **TypeORM** for database
- **SQLite** (default) or PostgreSQL

TypeScript changes require the watcher to recompile. The backend auto-restarts on file changes.

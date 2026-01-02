# n8n Custom Fork - Obsidian Forge Design

Custom n8n fork with comprehensive visual redesign. Industrial luxury meets precision engineering.

## Quick Start

```bash
pnpm install && pnpm dev
```

Access the editor at http://localhost:5678

## Repository Structure

```
.
├── packages/
│   ├── cli/                      # Backend entry point
│   ├── core/                     # Workflow execution engine
│   ├── workflow/                 # Shared interfaces
│   ├── nodes-base/               # 400+ built-in nodes
│   ├── @n8n/                     # Scoped packages (config, db, api-types, di)
│   └── frontend/
│       ├── editor-ui/            # Main Vue SPA
│       └── @n8n/
│           ├── design-system/    # Components + CSS tokens
│           ├── i18n/             # Translations
│           ├── stores/           # Shared Pinia stores
│           └── chat/             # Embeddable chat widget
├── docker/images/                # Docker configurations
├── docs/                         # Project documentation
└── .spec_system/                 # Spec-driven development artifacts
```

## Documentation

- [Getting Started](docs/onboarding.md)
- [Development Guide](docs/development.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Environments](docs/environments.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Custom Fork Guide](docs/custom-fork.md)
- [Deployment](docs/deployment/DEPLOYMENT.md)
- [Maintenance](docs/MAINTENANCE.md)

## Tech Stack

- **Vue 3** - Frontend framework
- **TypeScript** - Type-safe development
- **SCSS** - Styling with CSS custom properties (token architecture)
- **Tailwind CSS** - Utility classes with `[data-theme="dark"]` selector
- **Element Plus** - UI component library (38 override files)
- **Vue Flow** - Workflow canvas
- **pnpm 10.x** - Monorepo package management
- **Turborepo** - Build orchestration
- **Node.js 22.16+** - Runtime

## Project Status

This fork implements the "Obsidian Forge" design overhaul - warm amber and copper metallic accents against deep obsidian surfaces.

See [PRD](.spec_system/PRD/PRD.md) for detailed requirements and phase breakdown.

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Full dev mode with hot reload |
| `pnpm dev:be` | Backend only |
| `pnpm dev:fe` | Frontend only |
| `pnpm build` | Production build |
| `pnpm test` | Run all tests |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm typecheck` | TypeScript validation |

## Upstream Sync

This fork tracks upstream n8n. See [MAINTENANCE.md](docs/MAINTENANCE.md) for sync procedures.

```bash
git fetch upstream
git log HEAD..upstream/master --oneline
```

## License

n8n is [fair-code](https://faircode.io) distributed under the [Sustainable Use License](docs/LICENSE.md) and [n8n Enterprise License](docs/LICENSE_EE.md).

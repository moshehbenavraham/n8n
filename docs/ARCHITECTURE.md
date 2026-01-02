# Architecture

## System Overview

n8n is a workflow automation platform built as a TypeScript monorepo. The architecture separates concerns between the workflow execution engine (backend) and the visual editor (frontend), connected via REST API.

## Dependency Graph

```
                    ┌─────────────────────────────────────────────┐
                    │                 CLI (entry point)            │
                    │  packages/cli - Express server, controllers  │
                    └───────────────────┬─────────────────────────┘
                                        │
            ┌───────────────────────────┼───────────────────────────┐
            │                           │                           │
            v                           v                           v
    ┌───────────────┐           ┌───────────────┐           ┌───────────────┐
    │     Core      │           │   Workflow    │           │  nodes-base   │
    │   (engine)    │──────────>│  (interfaces) │<──────────│  (400+ nodes) │
    └───────────────┘           └───────────────┘           └───────────────┘
                                        │
                                        v
                        ┌───────────────────────────┐
                        │         @n8n/*            │
                        │  config, db, api-types,   │
                        │  di, permissions, runner  │
                        └───────────────────────────┘

    ┌─────────────────────────────────────────────────────────────────────────┐
    │                           Frontend (editor-ui)                           │
    │                        Vue 3 SPA - Vite build                            │
    └───────────────────────────────┬─────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────────┐
        │                           │                               │
        v                           v                               v
┌───────────────────┐   ┌───────────────────┐           ┌───────────────────┐
│   design-system   │   │      stores       │           │       i18n        │
│ (104 components)  │   │  (Pinia stores)   │           │  (translations)   │
│    + CSS tokens   │   │   root, settings  │           │    25+ locales    │
└───────────────────┘   └───────────────────┘           └───────────────────┘
```

## Components

### Backend

#### CLI (`packages/cli/`)
- **Purpose**: Main entry point - Express server, REST controllers, worker/webhook commands
- **Tech**: Node.js, Express, TypeORM, Bull (queues)
- **Key paths**: `src/commands/`, `src/controllers/`, `src/services/`

#### Core (`packages/core/`)
- **Purpose**: Workflow execution engine, node execution, polling/webhooks
- **Tech**: TypeScript
- **Note**: Contact n8n before modifying - critical path

#### Workflow (`packages/workflow/`)
- **Purpose**: Shared interfaces, types, workflow data structures
- **Tech**: TypeScript
- **Consumers**: All packages depend on this

#### nodes-base (`packages/nodes-base/`)
- **Purpose**: 400+ built-in integration nodes
- **Structure**: `nodes/[Service]/` - one folder per integration
- **Pattern**: Declarative (JSON schema) or programmatic

### Frontend

#### editor-ui (`packages/frontend/editor-ui/`)
- **Purpose**: Main Vue SPA - workflow editor, settings, credentials
- **Tech**: Vue 3, Vite, Pinia, Vue Flow (canvas)
- **Entry**: `src/main.ts`
- **Structure**: `src/features/` (domain features), `src/app/` (framework)

#### design-system (`packages/frontend/@n8n/design-system/`)
- **Purpose**: Shared component library + CSS tokens
- **Components**: 104 Vue components (N8nButton, N8nInput, N8nModal, etc.)
- **Tokens**: `src/css/_primitives.scss`, `src/css/_tokens.scss`, `src/css/_tokens.dark.scss`
- **Storybook**: 97 stories for visual testing

#### stores (`packages/frontend/@n8n/stores/`)
- **Purpose**: Shared Pinia stores
- **Key store**: `useRootStore` - reads config from meta tags injected by backend

#### i18n (`packages/frontend/@n8n/i18n/`)
- **Purpose**: Internationalization
- **Locales**: `src/locales/` - 25+ language files

### Infrastructure

#### @n8n/* Scoped Packages
| Package | Purpose |
|---------|---------|
| `@n8n/config` | Configuration management |
| `@n8n/db` | Database abstraction layer |
| `@n8n/api-types` | API type definitions |
| `@n8n/di` | Dependency injection |
| `@n8n/permissions` | RBAC permission system |
| `@n8n/task-runner` | Task runner for workflows |

## Tech Stack Rationale

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| Vue 3 | Frontend framework | Reactive, composition API, good DX |
| TypeScript | Type safety | Catch errors at compile time, better IDE support |
| pnpm | Package manager | Efficient disk space, workspace support |
| Turborepo | Build orchestration | Fast incremental builds, caching |
| Vite | Frontend build | Fast HMR, modern ESM |
| SCSS + CSS Variables | Styling | Token-based theming, 14,300+ token usages |
| Element Plus | UI components | Rich component library (38 override files) |
| Vue Flow | Canvas | Node-based editor, drag-and-drop |
| Express | Backend server | Mature, ecosystem |
| TypeORM | ORM | Database abstraction, migrations |

## Data Flow

### Workflow Execution
```
User Action --> Editor UI --> REST API --> CLI Controller
                                              │
                                              v
                               Workflow Engine (Core)
                                              │
                                              v
                               Node Execution (nodes-base)
                                              │
                                              v
                               External Service/API
```

### Theme System
```
CSS Primitives (_primitives.scss)
        │ HSL color scales, spacing, typography
        v
Semantic Tokens (_tokens.scss, _tokens.dark.scss)
        │ UI-purpose mappings (primary, danger, background)
        v
Components (104 design-system components)
        │ Consume tokens via CSS variables
        v
Application (editor-ui)
        │ body[data-theme="dark"] toggles dark mode
        v
User Interface
```

## Key Decisions

### Token-Based Architecture
The codebase uses a three-tier token system:
1. **Primitives**: Raw values (HSL color scales, spacing)
2. **Semantic tokens**: UI-purpose mappings
3. **Component tokens**: Component-specific overrides

This enables design changes to cascade efficiently - updating primitives affects 14,300+ usages.

### Backwards Compatibility
Legacy token format (`--color-primary`) coexists with new format (`--color--primary`) via CSS fallbacks:
```scss
--color--primary: var(--color-primary, var(--color--orange-300));
```

### Enterprise Features
Files with `.ee.` in path require enterprise license. These are conditionally loaded and include SSO, audit logs, external secrets, and multi-main mode.

See [Architecture Decision Records](docs/adr/) for detailed decision history.

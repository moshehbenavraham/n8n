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
- **Animations**: `src/css/_animations.scss` - Forge keyframe definitions (forge-reveal, ember-pulse, flow-pulse)
- **Mixins**: `src/css/_mixins.scss` - Visual treatment mixins (atmosphere, focus ring, noise texture)
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
1. **Primitives**: Raw values (HSL color scales, spacing, typography, motion)
2. **Semantic tokens**: UI-purpose mappings (colors, shadows, borders, atmosphere)
3. **Component tokens**: Component-specific overrides

This enables design changes to cascade efficiently - updating primitives affects 14,300+ usages.

### Obsidian Forge Design System (Phase 00-02 Complete)
The custom fork implements the "Forge Metals" color palette:
- **Amber** (Primary): Warm forge fire - hue 38
- **Obsidian** (Neutral): Deep dark backgrounds - hue 220
- **Steel** (Secondary): Cool metal complement - hue 215
- **Verdigris** (Success): Oxidized copper patina - hue 168
- **Ember** (Danger): Warm forge coals - hue 8

Motion design uses precision/mechanical easing curves rather than playful animations.

**Phase 01 Component Library Complete:**
- 104 design-system components updated with Obsidian Forge tokens
- 38 Element Plus override files integrated with theme
- Form components: N8nInput, N8nSelect, N8nCheckbox, N8nRadio, N8nSwitch, N8nTextarea
- Selection components: N8nSelect2, N8nCheckbox2, N8nUserSelect, N8nRecycleScroller
- Action components: N8nButton, N8nIconButton, N8nActionToggle, N8nActionDropdown, N8nLink
- Display components: N8nCard, N8nBadge, N8nAvatar, N8nLoading, N8nText, N8nHeading, N8nCircleLoader
- Storybook verification complete for all updated components

**Phase 02 Application Features Complete:**
- Workflow canvas foundation, node styling, and connection interactions
- Canvas edge tokens with state-based styling (hover, selected, running, error, success, pinned)
- NDV layout structure with panel shadows, borders, and drag handle theming
- NDV forms and code editor with expression-editor resolvable highlighting
- CodeMirror caret, selection, autocomplete themed with forge colors
- Modal/dialog system with backdrop blur, forge animations, and elevation shadows
- Overlay components: notifications, tooltips, popovers, dropdowns, loading masks
- All components support light/dark mode with proper token cascading

### Backwards Compatibility
Legacy token format (`--color-primary`) coexists with new format (`--color--primary`) via CSS fallbacks:
```scss
--color--primary: var(--color-primary, var(--color--orange-300));
```

### Enterprise Features
Files with `.ee.` in path require enterprise license. These are conditionally loaded and include SSO, audit logs, external secrets, and multi-main mode.

See [Architecture Decision Records](docs/adr/) for detailed decision history.

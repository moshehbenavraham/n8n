# Development Guide

## Local Environment

### Required Tools

- Node.js 22.16+
- pnpm 10.x+ (via corepack)
- Git
- Docker (optional, for deployment testing)

### Port Mappings

| Service | Port | URL |
|---------|------|-----|
| n8n Editor | 5678 | http://localhost:5678 |
| Vite Dev (frontend) | 5173 | http://localhost:5173 |
| Storybook | 6006 | http://localhost:6006 |

## Dev Scripts

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install all dependencies |
| `pnpm dev` | Full dev mode with hot reload |
| `pnpm dev:be` | Backend only (excludes frontend packages) |
| `pnpm dev:fe` | Frontend only (backend + editor-ui) |
| `pnpm dev:ai` | AI/LangChain nodes development |
| `pnpm build` | Production build |
| `pnpm test` | Run all tests |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm typecheck` | TypeScript validation |
| `pnpm clean` | Clear build artifacts |

## Development Workflow

### Basic Flow

1. Pull latest changes
2. Create feature branch
3. `pnpm dev`
4. Make changes (auto-reloads)
5. Run tests: `pnpm test`
6. Build check: `pnpm build`
7. Commit and push
8. Open PR

### Selective Development

Full dev mode is resource-intensive. For focused work:

**Backend only:**
```bash
pnpm dev:be
```

**Frontend only:**
```bash
pnpm dev:fe
```

**Custom node development:**
```bash
# Terminal 1: Watch nodes package
cd packages/nodes-base
pnpm dev

# Terminal 2: Run CLI with hot reload
cd packages/cli
N8N_DEV_RELOAD=true pnpm dev
```

**Pure frontend development:**
```bash
# Terminal 1: Start backend
pnpm start

# Terminal 2: Frontend dev server
cd packages/frontend/editor-ui
pnpm dev
```

### Hot Reload for Nodes

Enable hot reload for node/credential changes:
```bash
N8N_DEV_RELOAD=true pnpm dev
```

**Note:** Adds overhead - use only when actively developing nodes.

## Testing

### Unit Tests

```bash
# All tests
pnpm test

# Specific package
cd packages/nodes-base
pnpm test

# With coverage
COVERAGE_ENABLED=true pnpm test
```

### E2E Tests (Playwright)

```bash
# Run locally
pnpm --filter=n8n-playwright test:local

# Interactive UI mode
pnpm --filter=n8n-playwright test:local --ui

# Specific test
pnpm --filter=n8n-playwright test:local --grep="workflow-name"
```

See `packages/testing/playwright/README.md` for more options.

## Debugging

### Frontend (Browser)

1. Open DevTools (F12)
2. Vue DevTools extension recommended
3. Check Console for errors
4. Network tab for API issues

### Backend (Node.js)

```bash
# Debug mode
node --inspect packages/cli/bin/n8n

# Then attach VS Code debugger or open chrome://inspect
```

### Common Debug Scenarios

**Component not rendering:**
- Check browser console for errors
- Verify component import
- Check Vue DevTools component tree

**API call failing:**
- Check Network tab for request/response
- Verify backend logs: `docker compose logs n8n`

**Style not applying:**
- Check CSS specificity
- Verify token names in DevTools
- Check if dark mode is active

## Storybook

Design system component development:

```bash
cd packages/frontend/@n8n/design-system
pnpm storybook
```

Access at http://localhost:6006

## Code Style

- **TypeScript**: Strict mode, no `ts-ignore`
- **ESLint**: Auto-fix with `pnpm lint:fix`
- **Stylelint**: CSS variable naming convention
- **Prettier**: Formatting (auto-applied)

## Performance Considerations

Full dev mode runs:
- TypeScript compilation per package
- File watchers on source files
- Nodemon for backend restart
- Vite dev server with HMR
- Multiple parallel build processes

**For resource-constrained systems:**
1. Use selective dev commands
2. Close unnecessary applications
3. Increase Node.js heap: `NODE_OPTIONS="--max-old-space-size=8192"`

## Related Documentation

- [Contributing Guide](CONTRIBUTING.md) - PR guidelines, code standards
- [Architecture](ARCHITECTURE.md) - System structure
- [Frontend Design](frontend/design.md) - UI/theming details

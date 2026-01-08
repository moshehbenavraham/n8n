# Onboarding

Zero-to-hero checklist for new developers on the n8n custom fork.

## Prerequisites

- [ ] Node.js 22.16+ installed
- [ ] pnpm 10.x+ installed (via corepack)
- [ ] Git configured
- [ ] Docker installed (for deployment testing)
- [ ] Access to GitHub repository

## Setup Steps

### 1. Clone Repository

```bash
git clone https://github.com/moshehbenavraham/n8n.git
cd n8n
```

### 2. Enable Corepack

```bash
corepack enable
corepack prepare --activate
```

**Note (Homebrew users):** If Node.js was installed via Homebrew, run:
```bash
brew install corepack
```

**Note (Windows users):** Run as Administrator.

### 3. Install Build Tools

**Debian/Ubuntu:**
```bash
sudo apt-get install -y build-essential python3
```

**CentOS:**
```bash
sudo yum install gcc gcc-c++ make
```

**Windows:**
```bash
npm add -g windows-build-tools
```

**macOS:** No additional packages required.

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Build

```bash
pnpm build
```

### 6. Start Development

```bash
pnpm dev
```

### 7. Verify Setup

- [ ] App runs at http://localhost:5678
- [ ] Can create a workflow
- [ ] Tests pass: `pnpm test`
- [ ] Frontend loads without errors in browser console

## Required Secrets

For full functionality, these environment variables may be needed:

| Variable | Where to Get | Description |
|----------|--------------|-------------|
| `N8N_ENCRYPTION_KEY` | Generate with `openssl rand -hex 32` | Encryption key for credentials |
| `WEBHOOK_URL` | Your domain | External webhook URL |
| `N8N_HOST` | Your domain | Host for n8n instance |

## Key Directories to Know

| Directory | Purpose |
|-----------|---------|
| `packages/frontend/editor-ui/` | Main Vue SPA |
| `packages/frontend/@n8n/design-system/` | Component library + tokens |
| `packages/cli/` | Backend entry point |
| `packages/nodes-base/` | All integrations |
| `.spec_system/` | Spec-driven development |
| `docs/` | Documentation |

## Common Issues

### Port 5678 in use
**Solution:**
```bash
lsof -i :5678
kill -9 <PID>
```

### Build fails with heap memory error
**Solution:**
```bash
export NODE_OPTIONS="--max-old-space-size=8192"
pnpm build
```

### pnpm command not found
**Solution:**
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### TypeScript errors after upstream sync
**Solution:**
```bash
pnpm clean
pnpm install
pnpm build
```

## Next Steps

1. Read [Development Guide](development.md) for workflow
2. Review [Architecture](ARCHITECTURE.md) for system understanding
3. Check [frontend/design.md](frontend/design.md) for UI/theming details
4. See [PRD](../.spec_system/PRD/PRD.md) for project requirements

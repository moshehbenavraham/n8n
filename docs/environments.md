# Environments

## Environment Overview

| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | http://localhost:5678 | Local development |
| Docker Local | http://localhost:5680 | Local container testing |
| Staging | TBD | Pre-production testing |
| Production | TBD | Live system |

## Configuration Differences

| Config | Dev | Docker Local | Staging | Prod |
|--------|-----|--------------|---------|------|
| Database | SQLite | SQLite/Postgres | Postgres | Postgres |
| Queue | In-memory | Redis | Redis | Redis |
| Logging | Verbose | Info | Info | Error |
| Debug | Enabled | Enabled | Disabled | Disabled |
| SSL | None | Optional | Required | Required |

## Environment Variables

### Required in All Environments

| Variable | Description | Example |
|----------|-------------|---------|
| `N8N_ENCRYPTION_KEY` | Encryption key for credentials | 32-char hex string |
| `N8N_HOST` | Host for n8n instance | `localhost` or domain |

### Environment-Specific

#### Development

```bash
# .env.development (optional)
N8N_DEV_RELOAD=true
N8N_LOG_LEVEL=debug
```

Development uses SQLite by default, no additional config needed.

#### Docker Local

```bash
# docker/.env
N8N_ENCRYPTION_KEY=your-32-char-encryption-key
N8N_HOST=localhost
WEBHOOK_URL=http://localhost:5680
N8N_PORT=5678
TZ=UTC
```

#### Staging

```bash
N8N_ENCRYPTION_KEY=staging-encryption-key
N8N_HOST=staging.yourdomain.com
WEBHOOK_URL=https://staging.yourdomain.com
N8N_PROTOCOL=https

# Database
DB_TYPE=postgresdb
DB_POSTGRESDB_HOST=postgres
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_DATABASE=n8n
DB_POSTGRESDB_USER=n8n
DB_POSTGRESDB_PASSWORD=staging-password

# Redis
QUEUE_BULL_REDIS_HOST=redis
QUEUE_BULL_REDIS_PORT=6379
```

#### Production

```bash
N8N_ENCRYPTION_KEY=production-encryption-key  # Store in secrets manager
N8N_HOST=yourdomain.com
WEBHOOK_URL=https://yourdomain.com
N8N_PROTOCOL=https

# Database
DB_TYPE=postgresdb
DB_POSTGRESDB_HOST=db.internal
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_DATABASE=n8n
DB_POSTGRESDB_USER=n8n
DB_POSTGRESDB_PASSWORD=use-secrets-manager  # Store securely

# Redis
QUEUE_BULL_REDIS_HOST=redis.internal
QUEUE_BULL_REDIS_PORT=6379
QUEUE_BULL_REDIS_PASSWORD=use-secrets-manager  # Store securely

# Scaling
EXECUTIONS_MODE=queue
N8N_WORKER_TIMEOUT=180000
```

## Database Options

### SQLite (Default - Dev/Testing)
No configuration needed. Database file at `~/.n8n/database.sqlite`.

### PostgreSQL (Recommended for Production)
```bash
DB_TYPE=postgresdb
DB_POSTGRESDB_HOST=localhost
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_DATABASE=n8n
DB_POSTGRESDB_USER=n8n
DB_POSTGRESDB_PASSWORD=password
DB_POSTGRESDB_SCHEMA=public
```

### MySQL
```bash
DB_TYPE=mysqldb
DB_MYSQLDB_HOST=localhost
DB_MYSQLDB_PORT=3306
DB_MYSQLDB_DATABASE=n8n
DB_MYSQLDB_USER=n8n
DB_MYSQLDB_PASSWORD=password
```

## Execution Modes

### Regular (Default - Dev/Small Scale)
Single process handles all executions.

### Queue Mode (Production)
Separate workers process executions:
```bash
EXECUTIONS_MODE=queue
QUEUE_BULL_REDIS_HOST=redis
```

Run workers:
```bash
n8n worker
```

## Theme/Branding Configuration

### Development
Modify source files directly:
- `packages/frontend/@n8n/design-system/src/css/_tokens.scss`
- `packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss`

### Production Docker
Brand changes are compiled into the Docker image at build time.

## SSL/TLS

### Development
No SSL - http://localhost:5678

### Production

**Option 1: Reverse Proxy (Recommended)**
Use nginx/Traefik in front of n8n:
```bash
N8N_PROTOCOL=https
N8N_HOST=yourdomain.com
WEBHOOK_URL=https://yourdomain.com
# n8n runs on HTTP, proxy handles SSL
```

**Option 2: Direct SSL**
```bash
N8N_PROTOCOL=https
N8N_SSL_KEY=/path/to/key.pem
N8N_SSL_CERT=/path/to/cert.pem
```

## Logging

| Level | When to Use |
|-------|-------------|
| `debug` | Development troubleshooting |
| `info` | Normal operation monitoring |
| `warn` | Important events |
| `error` | Production - errors only |

```bash
N8N_LOG_LEVEL=info
N8N_LOG_OUTPUT=console  # or 'file'
```

## Related Documentation

- [Deployment Guide](deployment/DEPLOYMENT.md)
- [Maintenance](MAINTENANCE.md)

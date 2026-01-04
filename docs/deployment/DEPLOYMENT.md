# Deployment Guide - Custom n8n Fork

This guide walks you through deploying your custom n8n fork from start to finish.

---

## Prerequisites

Before deploying, you need:
- Docker installed on your deployment machine
- Docker Compose installed
- Access to GitHub Container Registry (GHCR)

---

## Step 1: Build and Push the Docker Image

The Docker image must exist in GHCR before you can deploy. There are two ways to do this:

### Option A: Automatic (via GitHub Actions)

1. **Commit and push** all the new files to GitHub:
   ```bash
   cd /home/aiwithapex/projects/n8n

   git add .github/workflows/custom-docker-build.yml
   git add .github/workflows/upstream-sync.yml
   git add docs/

   git commit -m "Add custom fork CI/CD and deployment files"
   git push origin master
   ```

2. **Wait for the workflow to run** - Go to GitHub:
   - Navigate to: https://github.com/moshehbenavraham/n8n/actions
   - Click on "Custom Docker Build" workflow
   - It should trigger automatically, or click "Run workflow" manually

3. **Verify the image exists**:
   - Go to: https://github.com/moshehbenavraham/n8n/packages
   - You should see a package named `n8n`

### Option B: Manual (build locally and push)

If you want to build locally instead:

```bash
cd /home/aiwithapex/projects/n8n

# Build n8n
pnpm build

# Build Docker image
docker build -t ghcr.io/moshehbenavraham/n8n:latest -f docker/images/n8n/Dockerfile .

# Login to GHCR (you need a GitHub Personal Access Token with packages:write)
echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u moshehbenavraham --password-stdin

# Push image
docker push ghcr.io/moshehbenavraham/n8n:latest
```

---

## Step 2: Prepare Deployment Directory

On the machine where you want to run n8n (could be this same machine or a server):

```bash
# Create a directory for n8n deployment
mkdir -p ~/n8n-deployment
cd ~/n8n-deployment

# Copy the deployment files from this repo
cp /home/aiwithapex/projects/n8n/docs/deployment/docker-compose.yml .
cp /home/aiwithapex/projects/n8n/docs/deployment/.env.example .env
```

If deploying to a **remote server**, transfer the files:
```bash
# From your local machine
scp /home/aiwithapex/projects/n8n/docs/deployment/docker-compose.yml user@server:~/n8n-deployment/
scp /home/aiwithapex/projects/n8n/docs/deployment/.env.example user@server:~/n8n-deployment/.env
```

---

## Step 3: Configure Environment Variables

Edit the `.env` file:

```bash
cd ~/n8n-deployment
nano .env   # or use any text editor
```

**Required changes:**

1. **Generate an encryption key** (REQUIRED for security):
   ```bash
   openssl rand -hex 32
   ```
   Copy the output and set:
   ```
   N8N_ENCRYPTION_KEY=paste_the_generated_key_here
   ```

2. **Set your host** (if not localhost):
   ```
   N8N_HOST=your-domain.com
   WEBHOOK_URL=https://your-domain.com:5680
   ```

3. **Optional: Set timezone**:
   ```
   TZ=America/New_York
   ```

---

## Step 4: Login to GitHub Container Registry

On the deployment machine, you need to authenticate with GHCR to pull the image:

```bash
# Create a GitHub Personal Access Token at:
# https://github.com/settings/tokens
# Select scope: read:packages

# Login
echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u moshehbenavraham --password-stdin
```

---

## Step 5: Start n8n

```bash
cd ~/n8n-deployment

# Pull the image
docker compose pull

# Start n8n
docker compose up -d

# Check it's running
docker compose ps

# View logs
docker compose logs -f
```

---

## Step 6: Access n8n

Open your browser and go to:

- **Local deployment**: http://localhost:5680
- **Server deployment**: http://your-server-ip:5680

You should see the n8n setup screen.

---

## Troubleshooting

### "Image not found" error
The image hasn't been built/pushed yet. Go back to Step 1.

### "Permission denied" when pulling
You're not logged in to GHCR. Go back to Step 4.

### Port 5680 not accessible
- Check firewall: `sudo ufw allow 5680`
- Check Docker is running: `docker ps`
- Check container logs: `docker compose logs n8n`

### Container keeps restarting
Check logs for errors:
```bash
docker compose logs n8n
```

---

## Quick Command Reference

| Command | What it does |
|---------|--------------|
| `docker compose up -d` | Start n8n in background |
| `docker compose down` | Stop n8n |
| `docker compose logs -f` | View live logs |
| `docker compose pull` | Pull latest image |
| `docker compose restart` | Restart n8n |

---

## Backup and Recovery

### Manual Backup

Run the backup script to create a snapshot of your n8n data:

```bash
cd ~/n8n-deployment

# Copy backup script from repo (first time only)
cp /path/to/n8n/docs/deployment/backup.sh .
chmod +x backup.sh

# Run backup (SQLite - default)
./backup.sh

# Run backup (PostgreSQL)
./backup.sh --postgres

# Run backup with upload to remote storage
./backup.sh --upload
```

Backups are stored in `./backups/` with timestamped filenames:
- SQLite: `n8n_sqlite_YYYYMMDD_HHMMSS.tar.gz`
- PostgreSQL: `n8n_postgres_YYYYMMDD_HHMMSS.sql.gz`

### Automated Backup

For automated daily backups:

1. **Using cron** (recommended for self-hosted):
   ```bash
   # Edit crontab
   crontab -e

   # Add daily backup at 2 AM
   0 2 * * * /home/user/n8n-deployment/backup.sh >> /var/log/n8n-backup.log 2>&1
   ```

2. **Using GitHub Actions**:
   A backup workflow is available at `.github/workflows/backup.yml` for self-hosted runners.

### Remote Storage

Configure remote storage in your `.env` file:

```bash
# AWS S3 or S3-compatible (R2, MinIO)
BACKUP_S3_BUCKET=my-backup-bucket
BACKUP_S3_ENDPOINT=https://your-r2-account.r2.cloudflarestorage.com
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

# Or use rclone for other providers
RCLONE_REMOTE=myremote
```

### Restore from Backup

**SQLite:**
```bash
# Stop n8n
docker compose down

# Extract backup to volume
docker run --rm -v n8n-deployment_n8n_data:/data \
  -v $(pwd)/backups:/backups alpine \
  tar -xzf /backups/n8n_sqlite_YYYYMMDD_HHMMSS.tar.gz -C /data

# Start n8n
docker compose up -d
```

**PostgreSQL:**
```bash
# Stop n8n
docker compose stop n8n

# Restore database
gunzip -c backups/n8n_postgres_YYYYMMDD_HHMMSS.sql.gz | \
  docker exec -i n8n-postgres psql -U n8n -d n8n

# Start n8n
docker compose start n8n
```

---

## File Summary

```
~/n8n-deployment/
├── docker-compose.yml    # Defines n8n container configuration
├── .env                  # Your configuration (secrets, settings)
├── backup.sh             # Backup script for SQLite/PostgreSQL
├── backups/              # Local backup storage directory
└── (created by Docker)
    └── n8n_data/         # Volume storing n8n data & workflows
```

The `docker-compose.yml` tells Docker:
- Which image to use: `ghcr.io/moshehbenavraham/n8n:latest`
- Which port to expose: `5680` (maps to internal port `5678`)
- Where to store data: `n8n_data` volume
- What environment variables to pass from `.env`

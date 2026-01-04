#!/bin/bash
# n8n Backup Script
# Supports SQLite (default) and PostgreSQL databases
# Usage: ./backup.sh [--postgres] [--upload]

set -euo pipefail

# Configuration (override via environment variables)
BACKUP_DIR="${BACKUP_DIR:-./backups}"
BACKUP_RETENTION_DAYS="${BACKUP_RETENTION_DAYS:-7}"
N8N_CONTAINER="${N8N_CONTAINER:-n8n-custom}"
POSTGRES_CONTAINER="${POSTGRES_CONTAINER:-n8n-postgres}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Parse arguments
USE_POSTGRES=false
UPLOAD_BACKUP=false
while [[ $# -gt 0 ]]; do
    case $1 in
        --postgres) USE_POSTGRES=true; shift ;;
        --upload) UPLOAD_BACKUP=true; shift ;;
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
done

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "=== n8n Backup Script ==="
echo "Timestamp: $TIMESTAMP"
echo "Backup directory: $BACKUP_DIR"
echo "Retention: $BACKUP_RETENTION_DAYS days"
echo ""

if [ "$USE_POSTGRES" = true ]; then
    # PostgreSQL backup
    echo "Backing up PostgreSQL database..."
    BACKUP_FILE="$BACKUP_DIR/n8n_postgres_$TIMESTAMP.sql.gz"

    if ! docker ps --format '{{.Names}}' | grep -q "^${POSTGRES_CONTAINER}$"; then
        echo "ERROR: PostgreSQL container '$POSTGRES_CONTAINER' not running"
        exit 1
    fi

    docker exec "$POSTGRES_CONTAINER" pg_dump -U "${POSTGRES_USER:-n8n}" "${POSTGRES_DB:-n8n}" | gzip > "$BACKUP_FILE"

    echo "PostgreSQL backup created: $BACKUP_FILE"
else
    # SQLite backup (default)
    echo "Backing up SQLite database..."
    BACKUP_FILE="$BACKUP_DIR/n8n_sqlite_$TIMESTAMP.tar.gz"

    if ! docker ps --format '{{.Names}}' | grep -q "^${N8N_CONTAINER}$"; then
        echo "ERROR: n8n container '$N8N_CONTAINER' not running"
        exit 1
    fi

    # Create backup of the entire .n8n directory
    docker exec "$N8N_CONTAINER" tar -czf - -C /home/node .n8n > "$BACKUP_FILE"

    echo "SQLite backup created: $BACKUP_FILE"
fi

# Get backup size
BACKUP_SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
echo "Backup size: $BACKUP_SIZE"

# Upload to remote storage (optional)
if [ "$UPLOAD_BACKUP" = true ]; then
    echo ""
    echo "Uploading backup to remote storage..."

    if [ -n "${S3_BUCKET:-}" ]; then
        # AWS S3 or S3-compatible (R2, MinIO, etc.)
        if [ -n "${S3_ENDPOINT:-}" ]; then
            aws s3 cp "$BACKUP_FILE" "s3://$S3_BUCKET/n8n-backups/" --endpoint-url "$S3_ENDPOINT"
        else
            aws s3 cp "$BACKUP_FILE" "s3://$S3_BUCKET/n8n-backups/"
        fi
        echo "Uploaded to S3: s3://$S3_BUCKET/n8n-backups/$(basename "$BACKUP_FILE")"
    elif [ -n "${RCLONE_REMOTE:-}" ]; then
        # rclone (supports many providers)
        rclone copy "$BACKUP_FILE" "$RCLONE_REMOTE:n8n-backups/"
        echo "Uploaded via rclone to: $RCLONE_REMOTE:n8n-backups/"
    else
        echo "WARNING: No remote storage configured (set S3_BUCKET or RCLONE_REMOTE)"
    fi
fi

# Cleanup old backups
echo ""
echo "Cleaning up backups older than $BACKUP_RETENTION_DAYS days..."
DELETED_COUNT=$(find "$BACKUP_DIR" -name "n8n_*.tar.gz" -o -name "n8n_*.sql.gz" -mtime +$BACKUP_RETENTION_DAYS -delete -print | wc -l)
echo "Deleted $DELETED_COUNT old backup(s)"

# Summary
echo ""
echo "=== Backup Complete ==="
echo "File: $BACKUP_FILE"
echo "Size: $BACKUP_SIZE"
echo ""
echo "Current backups:"
ls -lh "$BACKUP_DIR"/n8n_* 2>/dev/null || echo "  (none)"

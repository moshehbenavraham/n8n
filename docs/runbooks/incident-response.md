# Incident Response Runbook

## Severity Levels

| Level | Description | Response Time | Examples |
|-------|-------------|---------------|----------|
| P0 | Complete outage | Immediate | n8n unreachable, all workflows failing |
| P1 | Major feature broken | < 1 hour | Workflow execution failing, auth broken |
| P2 | Minor feature broken | < 4 hours | Single node type failing, UI bug |
| P3 | Cosmetic/minor | Next business day | Styling issue, typo |

## On-Call Contacts

| Role | Contact | Notes |
|------|---------|-------|
| Primary | TBD | Add primary contact |
| Secondary | TBD | Add backup contact |
| Escalation | TBD | Management escalation |

## Common Incidents

### n8n Container Not Starting

**Symptoms:**
- Docker container exits immediately
- Health check failing
- Port 5678 not responding

**Resolution:**

1. Check container logs:
   ```bash
   docker compose logs n8n
   ```

2. Common causes and fixes:

   **Port conflict:**
   ```bash
   lsof -i :5678
   # Kill conflicting process or change port
   ```

   **Missing encryption key:**
   ```bash
   # Generate and add to .env
   openssl rand -hex 32
   ```

   **Database connection failed:**
   ```bash
   # Check database is running
   docker compose ps postgres
   # Check connection string in .env
   ```

3. Restart:
   ```bash
   docker compose down && docker compose up -d
   ```

---

### Workflows Not Executing

**Symptoms:**
- Workflows trigger but don't complete
- Executions stuck in "running" state
- Worker processes failing

**Resolution:**

1. Check execution logs:
   ```bash
   docker compose logs n8n --tail=100
   ```

2. Check queue health (if using queue mode):
   ```bash
   docker compose exec redis redis-cli ping
   docker compose ps worker
   ```

3. Check for memory issues:
   ```bash
   docker stats
   ```

4. Restart workers:
   ```bash
   docker compose restart worker
   ```

5. Clear stuck executions (if needed):
   ```bash
   # Access n8n CLI
   docker compose exec n8n n8n execute --help
   ```

---

### Database Connection Issues

**Symptoms:**
- "Connection refused" errors
- Slow queries
- Timeout errors

**Resolution:**

1. Check database status:
   ```bash
   docker compose ps postgres
   docker compose logs postgres
   ```

2. Test connection:
   ```bash
   docker compose exec postgres psql -U n8n -d n8n -c "SELECT 1"
   ```

3. Check disk space:
   ```bash
   df -h
   docker system df
   ```

4. If corrupted, restore from backup:
   ```bash
   # Stop n8n
   docker compose stop n8n

   # Restore
   docker compose exec postgres psql -U n8n n8n < backup.sql

   # Restart
   docker compose up -d
   ```

---

### UI Not Loading / Blank Page

**Symptoms:**
- White screen in browser
- JavaScript errors in console
- Assets 404

**Resolution:**

1. Check browser console for errors (F12)

2. Clear browser cache

3. Check n8n logs for serving errors:
   ```bash
   docker compose logs n8n | grep -i error
   ```

4. Verify frontend build:
   ```bash
   docker compose exec n8n ls -la /usr/local/lib/node_modules/n8n/packages/editor-ui/dist/
   ```

5. Rebuild and redeploy if needed:
   ```bash
   pnpm build
   docker compose build --no-cache
   docker compose up -d
   ```

---

### Webhook Not Triggering

**Symptoms:**
- External services not reaching webhooks
- 502/504 errors on webhook URL
- Webhook works locally but not from external

**Resolution:**

1. Verify WEBHOOK_URL is correct:
   ```bash
   # Check .env
   grep WEBHOOK_URL .env
   ```

2. Test webhook accessibility:
   ```bash
   curl -I https://your-domain.com/webhook/test
   ```

3. Check firewall/security group:
   - Port 5678 (or configured port) must be open
   - Check cloud provider firewall rules

4. Check reverse proxy (if used):
   ```bash
   # nginx
   nginx -t
   systemctl status nginx
   ```

5. Check SSL certificate:
   ```bash
   openssl s_client -connect your-domain.com:443
   ```

---

### Memory/CPU Issues

**Symptoms:**
- Container OOMKilled
- Slow performance
- System unresponsive

**Resolution:**

1. Check resource usage:
   ```bash
   docker stats
   ```

2. Check for runaway workflows:
   - Look for workflows with large loops
   - Check for memory-intensive nodes

3. Increase container limits:
   ```yaml
   # docker-compose.yml
   services:
     n8n:
       deploy:
         resources:
           limits:
             memory: 4G
   ```

4. Add swap if needed:
   ```bash
   sudo fallocate -l 2G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```

---

## Rollback Procedures

### Docker Image Rollback

```bash
# Find previous image
docker images ghcr.io/moshehbenavraham/n8n

# Update docker-compose.yml to previous tag
# image: ghcr.io/moshehbenavraham/n8n:previous-sha

# Restart
docker compose pull
docker compose up -d
```

### Database Rollback

```bash
# Stop n8n
docker compose stop n8n

# Restore from backup
docker compose exec postgres psql -U n8n n8n < backup.sql

# Start
docker compose start n8n
```

## Preventive Measures

### Daily Checks

- [ ] Monitor container health
- [ ] Check disk usage
- [ ] Review error logs

### Weekly Checks

- [ ] Database backup verification
- [ ] Resource usage trends
- [ ] Upstream sync status

### After Deployment

- [ ] Health check passes
- [ ] Test critical workflow
- [ ] Check logs for errors
- [ ] Verify webhooks working

## Post-Incident

After resolving an incident:

1. Document what happened
2. Identify root cause
3. Create preventive measures
4. Update runbook if needed
5. Communicate to stakeholders

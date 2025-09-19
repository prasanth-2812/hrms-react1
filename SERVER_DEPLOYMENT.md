# Server Deployment Guide for Sync HRMS

This comprehensive guide will help you deploy your Sync HRMS application to a production server.

## Prerequisites

- Ubuntu 20.04+ server (recommended)
- Root or sudo access
- Domain name (optional, for SSL)
- Basic knowledge of Linux commands

## Quick Start

### 1. Server Preparation

First, prepare your server by running the setup script:

```bash
# Download and run the server setup script
wget https://raw.githubusercontent.com/your-repo/sync-hrms/main/server-setup.sh
chmod +x server-setup.sh
sudo ./server-setup.sh setup
```

This will install:
- Docker and Docker Compose
- Nginx
- Essential packages
- Firewall configuration
- System optimizations
- Monitoring tools

### 2. Upload Your Application

Upload your application files to the server:

```bash
# Option 1: Using SCP
scp -r . user@your-server:/opt/sync-hrms/

# Option 2: Using Git
git clone https://github.com/your-repo/sync-hrms.git /opt/sync-hrms
cd /opt/sync-hrms
```

### 3. Configure Environment

Create your environment file:

```bash
cd /opt/sync-hrms
cp env.example .env
nano .env
```

Edit the `.env` file with your production values:

```env
# Backend Environment Variables
NODE_ENV=production
PORT=3001

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com

# CORS Configuration
CORS_ORIGIN=https://yourdomain.com
```

### 4. Deploy the Application

Deploy without SSL (for testing):
```bash
sudo ./deploy-server.sh deploy
```

Deploy with SSL (for production):
```bash
sudo ./deploy-server.sh deploy yourdomain.com
```

## Manual Deployment Steps

If you prefer to deploy manually:

### 1. Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Nginx
sudo apt install nginx -y
```

### 2. Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/sync-hrms
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Frontend
    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/sync-hrms /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test auto-renewal
sudo certbot renew --dry-run
```

### 4. Deploy Application

```bash
# Navigate to application directory
cd /opt/sync-hrms

# Start the application
sudo docker-compose -f docker-compose.server.yml up -d --build

# Check status
sudo docker-compose -f docker-compose.server.yml ps
```

## Management Commands

### Using the Deployment Script

```bash
# Deploy application
sudo ./deploy-server.sh deploy yourdomain.com

# Update application
sudo ./deploy-server.sh update

# Check status
sudo ./deploy-server.sh status

# View logs
sudo ./deploy-server.sh logs

# Stop application
sudo ./deploy-server.sh stop

# Start application
sudo ./deploy-server.sh start

# Restart application
sudo ./deploy-server.sh restart
```

### Manual Docker Commands

```bash
# Start services
sudo docker-compose -f docker-compose.server.yml up -d

# Stop services
sudo docker-compose -f docker-compose.server.yml down

# View logs
sudo docker-compose -f docker-compose.server.yml logs -f

# Rebuild and restart
sudo docker-compose -f docker-compose.server.yml up -d --build

# Check container status
sudo docker ps
```

## Monitoring and Maintenance

### Health Checks

- Frontend: `http://yourdomain.com/`
- Backend API: `http://yourdomain.com/api/`
- Health endpoint: `http://yourdomain.com/health`

### Log Management

```bash
# View application logs
sudo docker-compose -f docker-compose.server.yml logs -f

# View system logs
sudo journalctl -u sync-hrms -f

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Backup

The system automatically creates daily backups. Manual backup:

```bash
sudo /opt/sync-hrms/backup.sh
```

### Updates

```bash
# Update application
cd /opt/sync-hrms
git pull origin main
sudo ./deploy-server.sh update
```

## Security Considerations

### Firewall Configuration

```bash
# Check firewall status
sudo ufw status

# Allow only necessary ports
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### SSL/TLS

- Use Let's Encrypt for free SSL certificates
- Configure automatic renewal
- Use strong cipher suites
- Enable HSTS headers

### Application Security

- Keep Docker images updated
- Use non-root users in containers
- Implement rate limiting
- Regular security updates

## Troubleshooting

### Common Issues

1. **Port conflicts:**
   ```bash
   sudo netstat -tulpn | grep :80
   sudo netstat -tulpn | grep :3001
   ```

2. **Docker issues:**
   ```bash
   sudo systemctl status docker
   sudo docker system prune -a
   ```

3. **Nginx issues:**
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

4. **Permission issues:**
   ```bash
   sudo chown -R www-data:www-data /opt/sync-hrms
   ```

### Performance Optimization

1. **Enable Gzip compression** (already configured)
2. **Configure caching** (already configured)
3. **Monitor resource usage:**
   ```bash
   sudo htop
   sudo docker stats
   ```

4. **Database optimization** (if using database)

### Scaling

For high-traffic scenarios:

1. **Load balancing** with multiple backend instances
2. **CDN** for static assets
3. **Database clustering** (if using database)
4. **Caching layer** (Redis/Memcached)

## Production Checklist

- [ ] Server hardened and updated
- [ ] SSL certificate installed and auto-renewing
- [ ] Firewall configured
- [ ] Monitoring and logging setup
- [ ] Backup strategy implemented
- [ ] Environment variables secured
- [ ] Health checks working
- [ ] Performance optimized
- [ ] Security headers configured
- [ ] Error handling implemented

## Support

For deployment issues:

1. Check logs: `sudo ./deploy-server.sh logs`
2. Check status: `sudo ./deploy-server.sh status`
3. Verify configuration: `sudo nginx -t`
4. Check Docker: `sudo docker ps`

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Ubuntu Server Guide](https://ubuntu.com/server/docs)

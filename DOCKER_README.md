# Docker Deployment Guide for Sync HRMS

This guide explains how to deploy the Sync HRMS application using Docker for production and development environments.

## Prerequisites

- Docker Engine 20.10+ 
- Docker Compose 2.0+
- Git

## Quick Start

### Production Deployment

1. **Clone the repository and navigate to the project directory:**
   ```bash
   git clone <your-repo-url>
   cd hrms-react
   ```

2. **Create environment file:**
   ```bash
   cp env.example .env
   ```
   Edit `.env` with your production values (email configuration, etc.)

3. **Build and start the services:**
   ```bash
   docker-compose -f docker-compose.yml up -d --build
   ```

4. **Access the application:**
   - Frontend: http://localhost:80
   - Backend API: http://localhost:3001

### Development Deployment

1. **Start development environment:**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d --build
   ```

2. **Access the application:**
   - Frontend: http://localhost:3000 (with hot reload)
   - Backend API: http://localhost:3001 (with nodemon)

## Production with SSL (Advanced)

For production with SSL support:

1. **Place your SSL certificates in the `ssl/` directory:**
   ```
   ssl/
   ├── cert.pem
   └── key.pem
   ```

2. **Start with production SSL configuration:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d --build
   ```

3. **Access the application:**
   - Frontend: https://localhost:443
   - Backend API: https://localhost:443/api/

## Docker Commands

### Basic Commands

```bash
# Build and start all services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild specific service
docker-compose build frontend
docker-compose up -d frontend

# Remove all containers and volumes
docker-compose down -v --remove-orphans
```

### Development Commands

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# View development logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

### Production Commands

```bash
# Start production environment
docker-compose -f docker-compose.prod.yml up -d

# View production logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop production environment
docker-compose -f docker-compose.prod.yml down
```

## Environment Variables

Create a `.env` file based on `env.example`:

```bash
# Backend Environment Variables
NODE_ENV=production
PORT=3001

# Email Configuration (for contact forms)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## Architecture

### Services

1. **Frontend (React)**
   - Multi-stage build with nginx
   - Optimized for production
   - Serves static files with proper caching

2. **Backend (Node.js/Express)**
   - RESTful API
   - Email integration
   - Health checks

3. **Nginx Proxy (Production)**
   - SSL termination
   - Load balancing
   - Rate limiting
   - Security headers

### Network

All services communicate through a custom Docker network (`hrms-network`).

## Security Features

- Non-root user in containers
- Security headers
- Rate limiting
- SSL/TLS support
- CORS configuration
- Input validation

## Monitoring and Health Checks

- Backend health check endpoint: `/health`
- Container health monitoring
- Log aggregation

## Troubleshooting

### Common Issues

1. **Port conflicts:**
   ```bash
   # Check what's using the port
   netstat -tulpn | grep :80
   # Change ports in docker-compose.yml
   ```

2. **Permission issues:**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

3. **Build failures:**
   ```bash
   # Clean build
   docker-compose down -v --remove-orphans
   docker system prune -a
   docker-compose up -d --build
   ```

4. **Environment variables not loading:**
   - Ensure `.env` file exists in project root
   - Check file permissions
   - Verify variable names match exactly

### Logs

```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs frontend
docker-compose logs backend

# Follow logs in real-time
docker-compose logs -f
```

## Performance Optimization

### Production Optimizations

1. **Multi-stage builds** - Smaller production images
2. **Nginx caching** - Static asset caching
3. **Gzip compression** - Reduced bandwidth usage
4. **Health checks** - Container monitoring
5. **Resource limits** - Prevent resource exhaustion

### Scaling

```bash
# Scale backend service
docker-compose up -d --scale backend=3

# Scale with load balancer
docker-compose -f docker-compose.prod.yml up -d --scale backend=3
```

## Backup and Recovery

### Backup

```bash
# Backup volumes
docker run --rm -v hrms-react_node_modules:/data -v $(pwd):/backup alpine tar czf /backup/backup.tar.gz -C /data .
```

### Recovery

```bash
# Restore volumes
docker run --rm -v hrms-react_node_modules:/data -v $(pwd):/backup alpine tar xzf /backup/backup.tar.gz -C /data
```

## Maintenance

### Updates

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Cleanup

```bash
# Remove unused containers, networks, images
docker system prune

# Remove everything (including volumes)
docker system prune -a --volumes
```

## Support

For issues related to Docker deployment, check:

1. Docker logs: `docker-compose logs`
2. Container status: `docker-compose ps`
3. Resource usage: `docker stats`
4. Network connectivity: `docker network ls`

## Contributing

When adding new features that require Docker changes:

1. Update relevant Dockerfile(s)
2. Update docker-compose files if needed
3. Update this README
4. Test in both development and production modes

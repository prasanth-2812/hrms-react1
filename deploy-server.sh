#!/bin/bash

# Sync HRMS Server Deployment Script
# This script is designed for production server deployment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="sync-hrms"
APP_DIR="/opt/sync-hrms"
SERVICE_USER="hrms"
NGINX_CONF="/etc/nginx/sites-available/sync-hrms"
NGINX_ENABLED="/etc/nginx/sites-enabled/sync-hrms"
SYSTEMD_SERVICE="/etc/systemd/system/sync-hrms.service"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if running as root
check_root() {
    if [[ $EUID -ne 0 ]]; then
        print_error "This script must be run as root (use sudo)"
        exit 1
    fi
}

# Function to check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        print_status "Run: curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        print_status "Run: sudo curl -L \"https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-\$(uname -s)-\$(uname -m)\" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose"
        exit 1
    fi
}

# Function to create system user
create_user() {
    if ! id "$SERVICE_USER" &>/dev/null; then
        print_status "Creating system user: $SERVICE_USER"
        useradd -r -s /bin/false -d $APP_DIR $SERVICE_USER
        print_success "User $SERVICE_USER created"
    else
        print_status "User $SERVICE_USER already exists"
    fi
}

# Function to create application directory
create_app_directory() {
    print_status "Creating application directory: $APP_DIR"
    mkdir -p $APP_DIR
    chown -R $SERVICE_USER:$SERVICE_USER $APP_DIR
    print_success "Application directory created"
}

# Function to install Nginx
install_nginx() {
    if ! command -v nginx &> /dev/null; then
        print_status "Installing Nginx..."
        apt-get update
        apt-get install -y nginx
        systemctl enable nginx
        systemctl start nginx
        print_success "Nginx installed and started"
    else
        print_status "Nginx is already installed"
    fi
}

# Function to configure Nginx
configure_nginx() {
    print_status "Configuring Nginx..."
    
    cat > $NGINX_CONF << EOF
server {
    listen 80;
    server_name _;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
    
    # Frontend
    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Health check
    location /health {
        proxy_pass http://localhost:3001/health;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

    # Enable the site
    ln -sf $NGINX_CONF $NGINX_ENABLED
    
    # Test Nginx configuration
    nginx -t
    
    # Reload Nginx
    systemctl reload nginx
    
    print_success "Nginx configured and reloaded"
}

# Function to create systemd service
create_systemd_service() {
    print_status "Creating systemd service..."
    
    cat > $SYSTEMD_SERVICE << EOF
[Unit]
Description=Sync HRMS Application
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=$APP_DIR
ExecStart=/usr/local/bin/docker-compose -f $APP_DIR/docker-compose.yml up -d
ExecStop=/usr/local/bin/docker-compose -f $APP_DIR/docker-compose.yml down
TimeoutStartSec=0
User=$SERVICE_USER
Group=$SERVICE_USER

[Install]
WantedBy=multi-user.target
EOF

    systemctl daemon-reload
    systemctl enable sync-hrms
    
    print_success "Systemd service created and enabled"
}

# Function to setup SSL with Let's Encrypt
setup_ssl() {
    local domain=$1
    
    if [ -z "$domain" ]; then
        print_warning "No domain provided. Skipping SSL setup."
        return
    fi
    
    print_status "Setting up SSL for domain: $domain"
    
    # Install certbot
    if ! command -v certbot &> /dev/null; then
        apt-get install -y certbot python3-certbot-nginx
    fi
    
    # Update Nginx config with domain
    sed -i "s/server_name _;/server_name $domain;/" $NGINX_CONF
    
    # Get SSL certificate
    certbot --nginx -d $domain --non-interactive --agree-tos --email admin@$domain
    
    # Reload Nginx
    systemctl reload nginx
    
    print_success "SSL certificate installed for $domain"
}

# Function to deploy application
deploy_app() {
    local domain=$1
    
    print_status "Starting deployment process..."
    
    # Check prerequisites
    check_root
    check_docker
    
    # Setup system
    create_user
    create_app_directory
    install_nginx
    
    # Copy application files
    print_status "Copying application files..."
    cp -r . $APP_DIR/
    chown -R $SERVICE_USER:$SERVICE_USER $APP_DIR
    
    # Configure services
    configure_nginx
    create_systemd_service
    
    # Setup SSL if domain provided
    if [ ! -z "$domain" ]; then
        setup_ssl $domain
    fi
    
    # Start the application
    print_status "Starting application..."
    systemctl start sync-hrms
    
    # Wait for services to start
    sleep 10
    
    # Check if services are running
    if systemctl is-active --quiet sync-hrms; then
        print_success "Application deployed successfully!"
        print_status "Frontend: http://$domain (or http://$(hostname -I | awk '{print $1}'))"
        print_status "Backend API: http://$domain/api/"
        print_status "Health Check: http://$domain/health"
        print_status ""
        print_status "Useful commands:"
        print_status "  sudo systemctl status sync-hrms    # Check service status"
        print_status "  sudo systemctl restart sync-hrms   # Restart application"
        print_status "  sudo systemctl stop sync-hrms      # Stop application"
        print_status "  sudo docker-compose -f $APP_DIR/docker-compose.yml logs -f  # View logs"
    else
        print_error "Failed to start application. Check logs:"
        print_status "sudo journalctl -u sync-hrms -f"
        exit 1
    fi
}

# Function to update application
update_app() {
    print_status "Updating application..."
    
    # Stop the service
    systemctl stop sync-hrms
    
    # Update files
    cp -r . $APP_DIR/
    chown -R $SERVICE_USER:$SERVICE_USER $APP_DIR
    
    # Rebuild and start
    cd $APP_DIR
    docker-compose down
    docker-compose up -d --build
    
    # Start the service
    systemctl start sync-hrms
    
    print_success "Application updated successfully!"
}

# Function to show status
show_status() {
    print_status "Application Status:"
    echo ""
    systemctl status sync-hrms --no-pager
    echo ""
    print_status "Docker Containers:"
    docker ps --filter "name=sync-hrms"
    echo ""
    print_status "Nginx Status:"
    systemctl status nginx --no-pager
}

# Function to show logs
show_logs() {
    print_status "Showing application logs..."
    journalctl -u sync-hrms -f
}

# Function to show help
show_help() {
    echo "Sync HRMS Server Deployment Script"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  deploy [domain]    Deploy application (optionally with SSL for domain)"
    echo "  update             Update application"
    echo "  status             Show application status"
    echo "  logs               Show application logs"
    echo "  stop               Stop application"
    echo "  start              Start application"
    echo "  restart            Restart application"
    echo "  help               Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 deploy                    # Deploy without SSL"
    echo "  $0 deploy example.com        # Deploy with SSL for example.com"
    echo "  $0 update                    # Update application"
    echo "  $0 status                    # Check status"
}

# Main script logic
case ${1:-"help"} in
    "deploy")
        deploy_app $2
        ;;
    "update")
        update_app
        ;;
    "status")
        show_status
        ;;
    "logs")
        show_logs
        ;;
    "stop")
        systemctl stop sync-hrms
        print_success "Application stopped"
        ;;
    "start")
        systemctl start sync-hrms
        print_success "Application started"
        ;;
    "restart")
        systemctl restart sync-hrms
        print_success "Application restarted"
        ;;
    "help"|*)
        show_help
        ;;
esac

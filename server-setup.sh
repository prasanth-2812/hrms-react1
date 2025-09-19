#!/bin/bash

# Server Setup Script for Sync HRMS
# This script prepares a fresh Ubuntu server for deployment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

# Function to update system packages
update_system() {
    print_status "Updating system packages..."
    apt-get update
    apt-get upgrade -y
    print_success "System packages updated"
}

# Function to install essential packages
install_essentials() {
    print_status "Installing essential packages..."
    apt-get install -y \
        curl \
        wget \
        git \
        unzip \
        software-properties-common \
        apt-transport-https \
        ca-certificates \
        gnupg \
        lsb-release \
        htop \
        nano \
        ufw
    print_success "Essential packages installed"
}

# Function to install Docker
install_docker() {
    print_status "Installing Docker..."
    
    # Remove old Docker versions
    apt-get remove -y docker docker-engine docker.io containerd runc || true
    
    # Add Docker's official GPG key
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    
    # Add Docker repository
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
    
    # Update package index
    apt-get update
    
    # Install Docker
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    
    # Start and enable Docker
    systemctl start docker
    systemctl enable docker
    
    # Add current user to docker group (if not root)
    if [ "$SUDO_USER" ]; then
        usermod -aG docker $SUDO_USER
        print_warning "User $SUDO_USER added to docker group. Please log out and back in for changes to take effect."
    fi
    
    print_success "Docker installed and started"
}

# Function to install Docker Compose
install_docker_compose() {
    print_status "Installing Docker Compose..."
    
    # Get latest version
    COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
    
    # Download and install
    curl -L "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    
    # Create symlink
    ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose
    
    print_success "Docker Compose installed"
}

# Function to install Nginx
install_nginx() {
    print_status "Installing Nginx..."
    apt-get install -y nginx
    
    # Start and enable Nginx
    systemctl start nginx
    systemctl enable nginx
    
    # Remove default site
    rm -f /etc/nginx/sites-enabled/default
    
    print_success "Nginx installed and started"
}

# Function to configure firewall
configure_firewall() {
    print_status "Configuring firewall..."
    
    # Enable UFW
    ufw --force enable
    
    # Allow SSH
    ufw allow ssh
    
    # Allow HTTP and HTTPS
    ufw allow 80/tcp
    ufw allow 443/tcp
    
    # Allow application ports (if needed)
    ufw allow 3001/tcp
    
    print_success "Firewall configured"
}

# Function to create swap file
create_swap() {
    local swap_size=${1:-"2G"}
    
    print_status "Creating swap file (${swap_size})..."
    
    # Check if swap already exists
    if [ -f /swapfile ]; then
        print_warning "Swap file already exists. Skipping..."
        return
    fi
    
    # Create swap file
    fallocate -l $swap_size /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    
    # Add to fstab
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
    
    # Configure swapiness
    echo 'vm.swappiness=10' >> /etc/sysctl.conf
    echo 'vm.vfs_cache_pressure=50' >> /etc/sysctl.conf
    
    print_success "Swap file created and configured"
}

# Function to optimize system
optimize_system() {
    print_status "Optimizing system settings..."
    
    # Increase file limits
    echo '* soft nofile 65536' >> /etc/security/limits.conf
    echo '* hard nofile 65536' >> /etc/security/limits.conf
    
    # Optimize kernel parameters
    cat >> /etc/sysctl.conf << EOF
# Network optimizations
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 65536 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.core.netdev_max_backlog = 5000
net.ipv4.tcp_congestion_control = bbr

# File system optimizations
fs.file-max = 2097152
vm.max_map_count = 262144
EOF
    
    # Apply settings
    sysctl -p
    
    print_success "System optimized"
}

# Function to install monitoring tools
install_monitoring() {
    print_status "Installing monitoring tools..."
    
    # Install htop, iotop, nethogs
    apt-get install -y htop iotop nethogs
    
    # Install Docker monitoring
    apt-get install -y docker-compose
    
    print_success "Monitoring tools installed"
}

# Function to create deployment directory structure
create_directories() {
    print_status "Creating directory structure..."
    
    mkdir -p /opt/sync-hrms
    mkdir -p /var/log/sync-hrms
    mkdir -p /etc/sync-hrms
    
    print_success "Directory structure created"
}

# Function to setup log rotation
setup_log_rotation() {
    print_status "Setting up log rotation..."
    
    cat > /etc/logrotate.d/sync-hrms << EOF
/var/log/sync-hrms/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 root root
    postrotate
        systemctl reload sync-hrms > /dev/null 2>&1 || true
    endscript
}
EOF
    
    print_success "Log rotation configured"
}

# Function to create backup script
create_backup_script() {
    print_status "Creating backup script..."
    
    cat > /opt/sync-hrms/backup.sh << 'EOF'
#!/bin/bash
# Backup script for Sync HRMS

BACKUP_DIR="/opt/backups/sync-hrms"
DATE=$(date +%Y%m%d_%H%M%S)
APP_DIR="/opt/sync-hrms"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup application files
tar -czf $BACKUP_DIR/sync-hrms-$DATE.tar.gz -C $APP_DIR .

# Backup Docker volumes
docker run --rm -v sync-hrms_node_modules:/data -v $BACKUP_DIR:/backup alpine tar czf /backup/docker-volumes-$DATE.tar.gz -C /data .

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: sync-hrms-$DATE.tar.gz"
EOF
    
    chmod +x /opt/sync-hrms/backup.sh
    
    # Add to crontab
    (crontab -l 2>/dev/null; echo "0 2 * * * /opt/sync-hrms/backup.sh") | crontab -
    
    print_success "Backup script created and scheduled"
}

# Function to show system information
show_system_info() {
    print_status "System Information:"
    echo ""
    echo "OS: $(lsb_release -d | cut -f2)"
    echo "Kernel: $(uname -r)"
    echo "Architecture: $(uname -m)"
    echo "CPU: $(nproc) cores"
    echo "Memory: $(free -h | awk '/^Mem:/ {print $2}')"
    echo "Disk: $(df -h / | awk 'NR==2 {print $2}')"
    echo ""
    print_status "Docker Version:"
    docker --version
    echo ""
    print_status "Docker Compose Version:"
    docker-compose --version
    echo ""
    print_status "Nginx Version:"
    nginx -v
    echo ""
    print_status "Firewall Status:"
    ufw status
}

# Function to run full setup
full_setup() {
    local swap_size=${1:-"2G"}
    
    print_status "Starting full server setup..."
    
    # Check prerequisites
    check_root
    
    # Run setup steps
    update_system
    install_essentials
    install_docker
    install_docker_compose
    install_nginx
    configure_firewall
    create_swap $swap_size
    optimize_system
    install_monitoring
    create_directories
    setup_log_rotation
    create_backup_script
    
    print_success "Server setup completed!"
    echo ""
    print_status "Next steps:"
    print_status "1. Upload your application files to /opt/sync-hrms/"
    print_status "2. Run: ./deploy-server.sh deploy [your-domain.com]"
    print_status "3. Check status: ./deploy-server.sh status"
    echo ""
    show_system_info
}

# Function to show help
show_help() {
    echo "Sync HRMS Server Setup Script"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  setup [swap_size]    Run full server setup (default swap: 2G)"
    echo "  info                 Show system information"
    echo "  help                 Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup             # Setup with 2G swap"
    echo "  $0 setup 4G          # Setup with 4G swap"
    echo "  $0 info              # Show system info"
}

# Main script logic
case ${1:-"help"} in
    "setup")
        full_setup $2
        ;;
    "info")
        show_system_info
        ;;
    "help"|*)
        show_help
        ;;
esac

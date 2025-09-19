#!/bin/bash

# Sync HRMS Docker Deployment Script
# Usage: ./deploy.sh [dev|prod|stop|logs|clean]

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

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Function to check if .env file exists
check_env() {
    if [ ! -f .env ]; then
        print_warning ".env file not found. Creating from template..."
        if [ -f env.example ]; then
            cp env.example .env
            print_success ".env file created from template. Please edit it with your configuration."
        else
            print_error "env.example file not found. Please create a .env file manually."
            exit 1
        fi
    fi
}

# Function to deploy development environment
deploy_dev() {
    print_status "Deploying development environment..."
    check_docker
    check_env
    
    docker-compose -f docker-compose.dev.yml down --remove-orphans
    docker-compose -f docker-compose.dev.yml up -d --build
    
    print_success "Development environment deployed!"
    print_status "Frontend: http://localhost:3000"
    print_status "Backend: http://localhost:3001"
    print_status "View logs: ./deploy.sh logs dev"
}

# Function to deploy production environment
deploy_prod() {
    print_status "Deploying production environment..."
    check_docker
    check_env
    
    docker-compose -f docker-compose.yml down --remove-orphans
    docker-compose -f docker-compose.yml up -d --build
    
    print_success "Production environment deployed!"
    print_status "Frontend: http://localhost:80"
    print_status "Backend: http://localhost:3001"
    print_status "View logs: ./deploy.sh logs prod"
}

# Function to deploy production with SSL
deploy_prod_ssl() {
    print_status "Deploying production environment with SSL..."
    check_docker
    check_env
    
    # Check if SSL certificates exist
    if [ ! -d "ssl" ] || [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
        print_error "SSL certificates not found. Please place your certificates in ssl/ directory:"
        print_status "ssl/cert.pem"
        print_status "ssl/key.pem"
        exit 1
    fi
    
    docker-compose -f docker-compose.prod.yml down --remove-orphans
    docker-compose -f docker-compose.prod.yml up -d --build
    
    print_success "Production environment with SSL deployed!"
    print_status "Frontend: https://localhost:443"
    print_status "Backend: https://localhost:443/api/"
    print_status "View logs: ./deploy.sh logs prod-ssl"
}

# Function to stop services
stop_services() {
    print_status "Stopping all services..."
    check_docker
    
    docker-compose -f docker-compose.yml down --remove-orphans
    docker-compose -f docker-compose.dev.yml down --remove-orphans
    docker-compose -f docker-compose.prod.yml down --remove-orphans
    
    print_success "All services stopped!"
}

# Function to show logs
show_logs() {
    local env=${1:-"prod"}
    
    print_status "Showing logs for $env environment..."
    check_docker
    
    case $env in
        "dev")
            docker-compose -f docker-compose.dev.yml logs -f
            ;;
        "prod")
            docker-compose -f docker-compose.yml logs -f
            ;;
        "prod-ssl")
            docker-compose -f docker-compose.prod.yml logs -f
            ;;
        *)
            print_error "Invalid environment. Use: dev, prod, or prod-ssl"
            exit 1
            ;;
    esac
}

# Function to clean up
clean_up() {
    print_status "Cleaning up Docker resources..."
    check_docker
    
    print_warning "This will remove all containers, networks, and unused images."
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose -f docker-compose.yml down -v --remove-orphans
        docker-compose -f docker-compose.dev.yml down -v --remove-orphans
        docker-compose -f docker-compose.prod.yml down -v --remove-orphans
        docker system prune -a -f
        print_success "Cleanup completed!"
    else
        print_status "Cleanup cancelled."
    fi
}

# Function to show status
show_status() {
    print_status "Docker services status:"
    check_docker
    
    echo
    print_status "Development environment:"
    docker-compose -f docker-compose.dev.yml ps
    
    echo
    print_status "Production environment:"
    docker-compose -f docker-compose.yml ps
    
    echo
    print_status "Production SSL environment:"
    docker-compose -f docker-compose.prod.yml ps
}

# Function to show help
show_help() {
    echo "Sync HRMS Docker Deployment Script"
    echo
    echo "Usage: ./deploy.sh [COMMAND]"
    echo
    echo "Commands:"
    echo "  dev         Deploy development environment"
    echo "  prod        Deploy production environment"
    echo "  prod-ssl    Deploy production environment with SSL"
    echo "  stop        Stop all services"
    echo "  logs [env]  Show logs (dev|prod|prod-ssl)"
    echo "  status      Show status of all services"
    echo "  clean       Clean up Docker resources"
    echo "  help        Show this help message"
    echo
    echo "Examples:"
    echo "  ./deploy.sh dev          # Start development"
    echo "  ./deploy.sh prod         # Start production"
    echo "  ./deploy.sh logs dev     # View dev logs"
    echo "  ./deploy.sh stop         # Stop everything"
    echo "  ./deploy.sh clean        # Clean up"
}

# Main script logic
case ${1:-"help"} in
    "dev")
        deploy_dev
        ;;
    "prod")
        deploy_prod
        ;;
    "prod-ssl")
        deploy_prod_ssl
        ;;
    "stop")
        stop_services
        ;;
    "logs")
        show_logs $2
        ;;
    "status")
        show_status
        ;;
    "clean")
        clean_up
        ;;
    "help"|*)
        show_help
        ;;
esac

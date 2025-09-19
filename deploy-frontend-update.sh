#!/bin/bash

# Sync HRMS Frontend Update Deployment Script
# This script updates the frontend with the latest code

echo "🚀 Starting Sync HRMS Frontend Update Deployment..."

# Set colors for output
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

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

print_status "Docker is running ✅"

# Navigate to project root
cd "$(dirname "$0")"

# Build new frontend image
print_status "Building new frontend image with latest code..."
docker build -t sync-hrms-frontend:latest .

if [ $? -eq 0 ]; then
    print_success "Frontend image built successfully"
else
    print_error "Failed to build frontend image"
    exit 1
fi

# Stop existing frontend container
print_status "Stopping existing frontend container..."
docker stop sync-hrms-frontend-1 2>/dev/null || print_warning "No existing frontend container found"

# Remove existing frontend container
print_status "Removing existing frontend container..."
docker rm sync-hrms-frontend-1 2>/dev/null || print_warning "No existing frontend container to remove"

# Start new frontend container
print_status "Starting new frontend container with latest code..."
docker run -d \
  --name sync-hrms-frontend-1 \
  --network hrms-network \
  -p 8015:80 \
  --restart unless-stopped \
  sync-hrms-frontend:latest

if [ $? -eq 0 ]; then
    print_success "Frontend container started successfully"
else
    print_error "Failed to start frontend container"
    exit 1
fi

# Wait for container to start
print_status "Waiting for frontend to start..."
sleep 10

# Check container status
print_status "Checking container status..."
if docker ps | grep -q sync-hrms-frontend-1; then
    print_success "Frontend container is running"
else
    print_error "Frontend container failed to start"
    docker logs sync-hrms-frontend-1
    exit 1
fi

# Test frontend endpoint
print_status "Testing frontend endpoint..."
FRONTEND_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://125.18.84.106:8015/)
if [ "$FRONTEND_RESPONSE" = "200" ]; then
    print_success "Frontend is accessible (HTTP $FRONTEND_RESPONSE)"
else
    print_warning "Frontend returned HTTP $FRONTEND_RESPONSE"
fi

# Show container logs
print_status "Frontend container logs (last 20 lines):"
docker logs --tail 20 sync-hrms-frontend-1

echo ""
print_success "🎉 Frontend update deployment completed!"
echo ""
print_status "📋 Deployment Summary:"
echo "  • Frontend Container: sync-hrms-frontend-1"
echo "  • Port: 8015 (external) -> 80 (internal)"
echo "  • Status: Running"
echo "  • Image: sync-hrms-frontend:latest"
echo ""
print_status "🌐 Access Points:"
echo "  • Frontend: http://125.18.84.106:8015/"
echo "  • Backend API: http://125.18.84.106:5002/"
echo ""
print_status "🔧 Next Steps:"
echo "  1. Test the frontend application"
echo "  2. Verify all features are working"
echo "  3. Check for any console errors"
echo "  4. Monitor logs for any issues"
echo ""
print_success "Frontend deployment completed successfully! 🚀"

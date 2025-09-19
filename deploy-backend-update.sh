#!/bin/bash

# Sync HRMS Backend Update Deployment Script
# This script updates the backend with new CORS configuration

echo "🚀 Starting Sync HRMS Backend Update Deployment..."

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

# Navigate to backend directory
cd backend

# Build new backend image
print_status "Building new backend image with updated CORS configuration..."
docker build -t sync-hrms-backend:latest .

if [ $? -eq 0 ]; then
    print_success "Backend image built successfully"
else
    print_error "Failed to build backend image"
    exit 1
fi

# Stop existing backend container
print_status "Stopping existing backend container..."
docker stop sync-hrms-backend-1 2>/dev/null || print_warning "No existing backend container found"

# Remove existing backend container
print_status "Removing existing backend container..."
docker rm sync-hrms-backend-1 2>/dev/null || print_warning "No existing backend container to remove"

# Start new backend container
print_status "Starting new backend container with updated configuration..."
docker run -d \
  --name sync-hrms-backend-1 \
  --network hrms-network \
  -p 5002:5000 \
  --env-file ../.env.production \
  --restart unless-stopped \
  sync-hrms-backend:latest

if [ $? -eq 0 ]; then
    print_success "Backend container started successfully"
else
    print_error "Failed to start backend container"
    exit 1
fi

# Wait for container to start
print_status "Waiting for backend to start..."
sleep 10

# Check container status
print_status "Checking container status..."
if docker ps | grep -q sync-hrms-backend-1; then
    print_success "Backend container is running"
else
    print_error "Backend container failed to start"
    docker logs sync-hrms-backend-1
    exit 1
fi

# Test endpoints
print_status "Testing backend endpoints..."

# Test health endpoint
print_status "Testing /health endpoint..."
HEALTH_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://125.18.84.106:5002/health)
if [ "$HEALTH_RESPONSE" = "200" ]; then
    print_success "Health endpoint is working (HTTP $HEALTH_RESPONSE)"
else
    print_warning "Health endpoint returned HTTP $HEALTH_RESPONSE"
fi

# Test CORS info endpoint
print_status "Testing /cors-info endpoint..."
CORS_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://125.18.84.106:5002/cors-info)
if [ "$CORS_RESPONSE" = "200" ]; then
    print_success "CORS info endpoint is working (HTTP $CORS_RESPONSE)"
else
    print_warning "CORS info endpoint returned HTTP $CORS_RESPONSE"
fi

# Test main endpoint
print_status "Testing main endpoint..."
MAIN_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://125.18.84.106:5002/)
if [ "$MAIN_RESPONSE" = "200" ]; then
    print_success "Main endpoint is working (HTTP $MAIN_RESPONSE)"
else
    print_warning "Main endpoint returned HTTP $MAIN_RESPONSE"
fi

# Test CAPTCHA endpoint
print_status "Testing /api/contact/captcha endpoint..."
CAPTCHA_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://125.18.84.106:5002/api/contact/captcha)
if [ "$CAPTCHA_RESPONSE" = "200" ]; then
    print_success "CAPTCHA endpoint is working (HTTP $CAPTCHA_RESPONSE)"
else
    print_warning "CAPTCHA endpoint returned HTTP $CAPTCHA_RESPONSE"
fi

# Show container logs
print_status "Backend container logs (last 20 lines):"
docker logs --tail 20 sync-hrms-backend-1

echo ""
print_success "🎉 Backend update deployment completed!"
echo ""
print_status "📋 Deployment Summary:"
echo "  • Backend Container: sync-hrms-backend-1"
echo "  • Port: 5002 (external) -> 5000 (internal)"
echo "  • Status: Running"
echo "  • CORS: Updated for production IPs"
echo ""
print_status "🌐 Access Points:"
echo "  • Backend API: http://125.18.84.106:5002/"
echo "  • Health Check: http://125.18.84.106:5002/health"
echo "  • CORS Info: http://125.18.84.106:5002/cors-info"
echo "  • CAPTCHA API: http://125.18.84.106:5002/api/contact/captcha"
echo ""
print_status "🔧 Next Steps:"
echo "  1. Test the contact form on your frontend"
echo "  2. Verify CAPTCHA functionality"
echo "  3. Check email sending capability"
echo "  4. Monitor logs for any issues"
echo ""
print_success "Deployment completed successfully! 🚀"

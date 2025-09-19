# Sync HRMS Docker Deployment Script (PowerShell)
# Usage: .\deploy.ps1 [dev|prod|stop|logs|clean]

param(
    [Parameter(Position=0)]
    [ValidateSet("dev", "prod", "prod-ssl", "stop", "logs", "status", "clean", "help")]
    [string]$Command = "help",
    
    [Parameter(Position=1)]
    [string]$LogEnv = "prod"
)

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Function to check if Docker is running
function Test-Docker {
    try {
        docker info | Out-Null
        return $true
    }
    catch {
        Write-Error "Docker is not running. Please start Docker and try again."
        exit 1
    }
}

# Function to check if .env file exists
function Test-EnvFile {
    if (-not (Test-Path ".env")) {
        Write-Warning ".env file not found. Creating from template..."
        if (Test-Path "env.example") {
            Copy-Item "env.example" ".env"
            Write-Success ".env file created from template. Please edit it with your configuration."
        }
        else {
            Write-Error "env.example file not found. Please create a .env file manually."
            exit 1
        }
    }
}

# Function to deploy development environment
function Deploy-Dev {
    Write-Status "Deploying development environment..."
    Test-Docker
    Test-EnvFile
    
    docker-compose -f docker-compose.dev.yml down --remove-orphans
    docker-compose -f docker-compose.dev.yml up -d --build
    
    Write-Success "Development environment deployed!"
    Write-Status "Frontend: http://localhost:3000"
    Write-Status "Backend: http://localhost:3001"
    Write-Status "View logs: .\deploy.ps1 logs dev"
}

# Function to deploy production environment
function Deploy-Prod {
    Write-Status "Deploying production environment..."
    Test-Docker
    Test-EnvFile
    
    docker-compose -f docker-compose.yml down --remove-orphans
    docker-compose -f docker-compose.yml up -d --build
    
    Write-Success "Production environment deployed!"
    Write-Status "Frontend: http://localhost:80"
    Write-Status "Backend: http://localhost:3001"
    Write-Status "View logs: .\deploy.ps1 logs prod"
}

# Function to deploy production with SSL
function Deploy-ProdSsl {
    Write-Status "Deploying production environment with SSL..."
    Test-Docker
    Test-EnvFile
    
    # Check if SSL certificates exist
    if (-not (Test-Path "ssl\cert.pem") -or -not (Test-Path "ssl\key.pem")) {
        Write-Error "SSL certificates not found. Please place your certificates in ssl\ directory:"
        Write-Status "ssl\cert.pem"
        Write-Status "ssl\key.pem"
        exit 1
    }
    
    docker-compose -f docker-compose.prod.yml down --remove-orphans
    docker-compose -f docker-compose.prod.yml up -d --build
    
    Write-Success "Production environment with SSL deployed!"
    Write-Status "Frontend: https://localhost:443"
    Write-Status "Backend: https://localhost:443/api/"
    Write-Status "View logs: .\deploy.ps1 logs prod-ssl"
}

# Function to stop services
function Stop-Services {
    Write-Status "Stopping all services..."
    Test-Docker
    
    docker-compose -f docker-compose.yml down --remove-orphans
    docker-compose -f docker-compose.dev.yml down --remove-orphans
    docker-compose -f docker-compose.prod.yml down --remove-orphans
    
    Write-Success "All services stopped!"
}

# Function to show logs
function Show-Logs {
    param([string]$Environment = "prod")
    
    Write-Status "Showing logs for $Environment environment..."
    Test-Docker
    
    switch ($Environment) {
        "dev" {
            docker-compose -f docker-compose.dev.yml logs -f
        }
        "prod" {
            docker-compose -f docker-compose.yml logs -f
        }
        "prod-ssl" {
            docker-compose -f docker-compose.prod.yml logs -f
        }
        default {
            Write-Error "Invalid environment. Use: dev, prod, or prod-ssl"
            exit 1
        }
    }
}

# Function to clean up
function Clean-Up {
    Write-Status "Cleaning up Docker resources..."
    Test-Docker
    
    Write-Warning "This will remove all containers, networks, and unused images."
    $confirmation = Read-Host "Are you sure? (y/N)"
    
    if ($confirmation -eq 'y' -or $confirmation -eq 'Y') {
        docker-compose -f docker-compose.yml down -v --remove-orphans
        docker-compose -f docker-compose.dev.yml down -v --remove-orphans
        docker-compose -f docker-compose.prod.yml down -v --remove-orphans
        docker system prune -a -f
        Write-Success "Cleanup completed!"
    }
    else {
        Write-Status "Cleanup cancelled."
    }
}

# Function to show status
function Show-Status {
    Write-Status "Docker services status:"
    Test-Docker
    
    Write-Host ""
    Write-Status "Development environment:"
    docker-compose -f docker-compose.dev.yml ps
    
    Write-Host ""
    Write-Status "Production environment:"
    docker-compose -f docker-compose.yml ps
    
    Write-Host ""
    Write-Status "Production SSL environment:"
    docker-compose -f docker-compose.prod.yml ps
}

# Function to show help
function Show-Help {
    Write-Host "Sync HRMS Docker Deployment Script (PowerShell)" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Usage: .\deploy.ps1 [COMMAND]" -ForegroundColor White
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor Yellow
    Write-Host "  dev         Deploy development environment"
    Write-Host "  prod        Deploy production environment"
    Write-Host "  prod-ssl    Deploy production environment with SSL"
    Write-Host "  stop        Stop all services"
    Write-Host "  logs [env]  Show logs (dev|prod|prod-ssl)"
    Write-Host "  status      Show status of all services"
    Write-Host "  clean       Clean up Docker resources"
    Write-Host "  help        Show this help message"
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor Yellow
    Write-Host "  .\deploy.ps1 dev          # Start development"
    Write-Host "  .\deploy.ps1 prod         # Start production"
    Write-Host "  .\deploy.ps1 logs dev     # View dev logs"
    Write-Host "  .\deploy.ps1 stop         # Stop everything"
    Write-Host "  .\deploy.ps1 clean        # Clean up"
}

# Main script logic
switch ($Command) {
    "dev" {
        Deploy-Dev
    }
    "prod" {
        Deploy-Prod
    }
    "prod-ssl" {
        Deploy-ProdSsl
    }
    "stop" {
        Stop-Services
    }
    "logs" {
        Show-Logs $LogEnv
    }
    "status" {
        Show-Status
    }
    "clean" {
        Clean-Up
    }
    "help" {
        Show-Help
    }
    default {
        Show-Help
    }
}

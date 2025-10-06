@echo off
echo 🚀 Starting Sync HRMS Development Environment...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Start backend server
echo 🔧 Starting backend server on port 3001...
cd backend
if not exist "node_modules" (
    echo 📦 Installing backend dependencies...
    npm install
)

REM Start backend in background
start "Backend Server" cmd /c "npm start"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
echo 🎨 Starting frontend development server on port 3000...
cd ..

if not exist "node_modules" (
    echo 📦 Installing frontend dependencies...
    npm install
)

REM Set environment variable for API URL
set REACT_APP_API_URL=http://localhost:3001

REM Start frontend
echo 🎉 Development servers started!
echo 📱 Frontend: http://localhost:3000
echo 🔧 Backend: http://localhost:3001
echo.
echo Press any key to start frontend server...
pause >nul

start "Frontend Server" cmd /c "npm start"

echo.
echo ✅ Both servers are starting...
echo 📱 Frontend will open at http://localhost:3000
echo 🔧 Backend is running at http://localhost:3001
echo.
echo Press any key to exit...
pause >nul

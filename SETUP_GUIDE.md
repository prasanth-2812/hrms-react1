# 🔧 Sync HRMS Development Setup Guide

This guide will help you set up the Sync HRMS application for local development and fix the network connection issues.

## 🚨 **Issues Fixed**

### 1. **Port Configuration**
- ✅ Backend now runs on port `3001` (was `5000`)
- ✅ Frontend configured to connect to `http://localhost:3001`
- ✅ CORS updated to allow localhost connections

### 2. **API Endpoints**
- ✅ Added missing CAPTCHA endpoints for RequestDemo
- ✅ Fixed API endpoint paths in frontend components
- ✅ Created centralized API configuration

### 3. **CORS Configuration**
- ✅ Added localhost:3001 to allowed origins
- ✅ Added 127.0.0.1:3001 for local development
- ✅ Improved CORS error handling

## 🚀 **Quick Start (Windows)**

### Option 1: Automated Setup
```bash
# Run the automated setup script
start-dev.bat
```

### Option 2: Manual Setup

#### Step 1: Start Backend Server
```bash
# Navigate to backend directory
cd backend

# Install dependencies (if not already installed)
npm install

# Start backend server
npm start
```

#### Step 2: Start Frontend Server
```bash
# Navigate to root directory
cd ..

# Install dependencies (if not already installed)
npm install

# Set environment variable for API URL
set REACT_APP_API_URL=http://localhost:3001

# Start frontend server
npm start
```

## 🔧 **Manual Setup (Linux/Mac)**

### Step 1: Start Backend Server
```bash
cd backend
npm install
npm start
```

### Step 2: Start Frontend Server
```bash
cd ..
npm install
export REACT_APP_API_URL=http://localhost:3001
npm start
```

## 📋 **Verification Steps**

### 1. **Check Backend is Running**
- Open browser and go to: `http://localhost:3001`
- You should see: "Sync HRMS API is running"
- Check health endpoint: `http://localhost:3001/health`

### 2. **Check Frontend is Running**
- Open browser and go to: `http://localhost:3000`
- You should see the Sync HRMS homepage

### 3. **Test Form Submissions**
- Try submitting the contact form on the homepage
- Try the "Request Demo" form
- Try the "Contact Us" form
- All should work without network errors

## 🐛 **Troubleshooting**

### Issue: "Network error. Please check your connection and try again."

**Solution 1: Check Backend is Running**
```bash
# Check if backend is running on port 3001
curl http://localhost:3001/health
```

**Solution 2: Check CORS Configuration**
- Open browser Developer Tools (F12)
- Go to Network tab
- Look for CORS errors in the console
- Backend should allow localhost:3000 and localhost:3001

**Solution 3: Check API Configuration**
- Verify `src/config/api.ts` has correct BASE_URL
- Should be `http://localhost:3001` for development

### Issue: "CAPTCHA not loading"

**Solution:**
- Check if backend CAPTCHA endpoints are working:
  - `http://localhost:3001/api/contact/captcha`
  - `http://localhost:3001/api/request-demo/captcha`

### Issue: "Port already in use"

**Solution:**
```bash
# Kill processes on ports 3000 and 3001
# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

## 🔍 **API Endpoints**

### Backend Endpoints (Port 3001)
- `GET /` - API status
- `GET /health` - Health check
- `GET /cors-info` - CORS configuration info
- `POST /api/send-enquiry` - Send enquiry form
- `POST /api/contact` - Contact form
- `POST /api/request-demo` - Request demo form
- `GET /api/contact/captcha` - Get contact form CAPTCHA
- `GET /api/request-demo/captcha` - Get demo request CAPTCHA

### Frontend (Port 3000)
- `http://localhost:3000` - Homepage
- `http://localhost:3000/request-demo` - Demo request page
- `http://localhost:3000/contact-us` - Contact page

## 📁 **File Structure**

```
hrms-react/
├── backend/
│   ├── index.js (✅ Updated - Port 3001, CORS fixes)
│   ├── routes/
│   │   ├── contact.js (✅ Has CAPTCHA endpoint)
│   │   ├── requestDemo.js (✅ Added CAPTCHA endpoint)
│   │   └── sendEnquiry.js
│   └── package.json
├── src/
│   ├── config/
│   │   └── api.ts (✅ New - Centralized API config)
│   ├── components/
│   │   └── home/Hero.tsx (✅ Updated API calls)
│   ├── pages/
│   │   ├── RequestDemo.tsx (✅ Updated API calls)
│   │   └── ContactUs.tsx (✅ Updated API calls)
│   └── ...
├── start-dev.bat (✅ New - Windows startup script)
├── start-dev.sh (✅ New - Linux/Mac startup script)
└── SETUP_GUIDE.md (✅ This guide)
```

## ✅ **Success Indicators**

When everything is working correctly, you should see:

1. **Backend Console:**
   ```
   🚀 Server running on http://localhost:3001
   📧 Email Host: [your-email-host]
   ✅ SMTP Server Connected: Ready to send emails
   ```

2. **Frontend Console:**
   - No CORS errors
   - No network errors
   - Forms submit successfully

3. **Browser Network Tab:**
   - API calls to `localhost:3001` return 200 status
   - No CORS errors
   - CAPTCHA requests successful

## 🎯 **Next Steps**

1. **Test all forms** - Contact, Demo Request, Send Enquiry
2. **Check email functionality** - Verify emails are being sent
3. **Test CAPTCHA** - Ensure CAPTCHA validation works
4. **Deploy to production** - Use Docker configuration for deployment

---

**Need Help?** Check the browser console for any error messages and verify both servers are running on the correct ports.

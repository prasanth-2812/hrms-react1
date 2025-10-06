// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

// Routes
const sendEnquiryRoutes = require('./routes/sendEnquiry');
const contactRoutes = require('./routes/contact');
const requestDemoRoutes = require('./routes/requestDemo');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Get allowed origins from environment variables
    const allowedOrigins = process.env.CORS_ORIGINS 
      ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
      : [
        'https://synchrm.com',
        'https://www.synchrm.com',
        'http://synchrm.com',
        'http://www.synchrm.com',
        'https://api.synchrm.com',
        'http://125.18.84.106:8015',
        'http://125.18.84.106:8080',
        'https://125.18.84.106:8015',
        'https://125.18.84.106:8080',
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:80',
        'http://localhost',
        'https://localhost',
        'https://localhost:80',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:3001'
        ];
    
    // Add production domains if specified
    if (process.env.CORS_ORIGIN) {
      allowedOrigins.push(process.env.CORS_ORIGIN);
    }
    
    // Add common production patterns
    if (process.env.NODE_ENV === 'production') {
      allowedOrigins.push(
        'https://synchrm.com',
        'https://www.synchrm.com',
        'http://synchrm.com',
        'http://www.synchrm.com',
        'https://api.synchrm.com',
        'http://125.18.84.106:8015',
        'http://125.18.84.106:8080',
        'https://125.18.84.106:8015',
        'https://125.18.84.106:8080'
      );
    }
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log('✅ CORS allowed for origin:', origin);
      callback(null, true);
    } else {
      console.log('❌ CORS blocked origin:', origin);
      console.log('📋 Allowed origins:', allowedOrigins);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies and authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control',
    'Pragma'
  ],
  exposedHeaders: ['X-Total-Count', 'X-Page-Count'],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., mail.mcb5.in
  port: parseInt(process.env.EMAIL_PORT, 10), // 587
  secure: false, // Must be false for port 587 (STARTTLS), true only for 465 (SSL)
  requireTLS: false, // 🔴 Prevents STARTTLS attempt (fixes "502 TLS not available")
  auth: {
    user: process.env.EMAIL_USER, // SMTP username (e.g., udayj)
    pass: process.env.EMAIL_PASS, // SMTP password
  },
  connectionTimeout: 15000,
  socketTimeout: 15000,
  greetingTimeout: 15000,
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Failed:', error.message);
  } else {
    console.log('✅ SMTP Server Connected: Ready to send emails');
  }
});

// Attach transporter to all requests
app.use((req, res, next) => {
  req.transporter = transporter;
  next();
});

// Handle preflight OPTIONS requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Routes
app.use('/api/send-enquiry', sendEnquiryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/request-demo', requestDemoRoutes);

// Health check endpoint for Docker
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// CORS debugging endpoint
app.get('/cors-info', (req, res) => {
  const allowedOrigins = process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
    : [
        'http://localhost:3000',
        'http://localhost:80',
        'http://localhost',
        'https://localhost',
        'https://localhost:80',
        'https://synchrm.com',
        'https://www.synchrm.com',
        'http://synchrm.com',
        'http://www.synchrm.com',
        'https://api.synchrm.com',
        'http://125.18.84.106:8015',
        'http://125.18.84.106:8080',
        'https://125.18.84.106:8015',
        'https://125.18.84.106:8080'
      ];
  
  if (process.env.CORS_ORIGIN) {
    allowedOrigins.push(process.env.CORS_ORIGIN);
  }
  
  res.json({
    cors: {
      allowedOrigins,
      currentOrigin: req.get('Origin') || 'No origin header',
      userAgent: req.get('User-Agent'),
      environment: process.env.NODE_ENV || 'development',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH']
    },
    timestamp: new Date().toISOString()
  });
});

// Test route
app.get('/', (req, res) => {
  const allowedOrigins = process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
    : [
        'http://localhost:3000', 
        'http://localhost:80', 
        'http://localhost', 
        'https://localhost', 
        'https://localhost:80',
        'https://synchrm.com',
        'https://www.synchrm.com',
        'http://synchrm.com',
        'http://www.synchrm.com',
        'https://api.synchrm.com',
        'http://125.18.84.106:8015',
        'http://125.18.84.106:8080',
        'https://125.18.84.106:8015',
        'https://125.18.84.106:8080'
      ];
  
  if (process.env.CORS_ORIGIN) {
    allowedOrigins.push(process.env.CORS_ORIGIN);
  }
  
  res.send(`
    <h1>Sync HRMS API is running</h1>
    <p><strong>SMTP:</strong> ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}</p>
    <p><strong>Secure (SSL):</strong> ${process.env.EMAIL_SECURE === 'true' ? 'Yes' : 'No'}</p>
    <p><strong>From:</strong> "${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_EMAIL}></p>
    <p><em>Ready to send emails (unencrypted mode for compatibility).</em></p>
    <hr>
    <h3>CORS Configuration</h3>
    <p><strong>Allowed Origins:</strong></p>
    <ul>
      ${allowedOrigins.map(origin => `<li>${origin}</li>`).join('')}
    </ul>
    <p><strong>Current Origin:</strong> ${req.get('Origin') || 'No origin header'}</p>
    <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
    <hr>
    <p><a href="/health">Health Check</a> | <a href="/cors-info">CORS Info (JSON)</a></p>
  `);
});

// Optional: Add a test email route (great for debugging)
app.get('/test-email', async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_EMAIL}>`,
      to: process.env.OWNER_EMAIL,
      subject: 'Test Email from Synchrm Backend',
      text: 'This is a test email sent from your server. If you received this, SMTP is working!',
      html: '<p>This is a <strong>test email</strong> sent from your <em>Synchrm</em> server. ✅</p>',
    });

    console.log('Test email sent:', info.messageId);
    res.json({
      message: 'Test email sent successfully!',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Failed to send test email:', error);
    res.status(500).json({
      error: 'Email sending failed',
      details: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email Host: ${process.env.EMAIL_HOST}`);
  console.log(`📬 Port: ${process.env.EMAIL_PORT}`);
  console.log(`🔒 Secure (SSL): ${process.env.EMAIL_SECURE === 'true' ? 'Yes' : 'No'}`);
  console.log(`📝 From: "${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_EMAIL}>`);
  console.log(`📬 Owner Email: ${process.env.OWNER_EMAIL}`);
  console.log(`💡 Visit http://localhost:${PORT}/test-email to send a test email`);
});

module.exports = app;
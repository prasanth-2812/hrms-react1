// backend/server.js (or index.js)
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const sendEnquiryRoutes = require('./routes/sendEnquiry');
const contactRoutes = require('./routes/contact');
const requestDemoRoutes = require('./routes/requestDemo');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create transporter for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Make transporter available to all routes
app.use((req, res, next) => {
  req.transporter = transporter;
  next();
});

// Routes
app.use('/api/send-enquiry', sendEnquiryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/request-demo', requestDemoRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('HRMS API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service: ${process.env.EMAIL_HOST}`);
});

module.exports = app;
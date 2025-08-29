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
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

// Routes
app.use('/api/send-enquiry', sendEnquiryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/request-demo', requestDemoRoutes);

// Test route
app.get('/', (req, res) => {
  res.send(`
    <h1>HRMS API is running</h1>
    <p><strong>SMTP:</strong> ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}</p>
    <p><strong>Secure (SSL):</strong> ${process.env.EMAIL_SECURE === 'true' ? 'Yes' : 'No'}</p>
    <p><strong>From:</strong> "${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_EMAIL}></p>
    <p><em>Ready to send emails (unencrypted mode for compatibility).</em></p>
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
// Email Service for different form types
const nodemailer = require('nodemailer');

// Email configuration mapping for different form types
// Uses environment variables with fallbacks to default addresses
const EMAIL_CONFIGS = {
  contact: {
    fromEmail: process.env.CONTACT_EMAIL || 'contact@synchrm.com',
    fromName: process.env.CONTACT_NAME || 'Sync HRM Contact',
    subjectPrefix: 'Contact Form'
  },
  enquiry: {
    fromEmail: process.env.ENQUIRY_EMAIL || 'enquiry@synchrm.com', 
    fromName: process.env.ENQUIRY_NAME || 'Sync HRM Enquiry',
    subjectPrefix: 'Enquiry Form'
  },
  demo: {
    fromEmail: process.env.DEMO_EMAIL || 'demo@synchrm.com',
    fromName: process.env.DEMO_NAME || 'Sync HRM Demo',
    subjectPrefix: 'Demo Request'
  }
};

// Create transporter with default configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false,
    requireTLS: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 15000,
    socketTimeout: 15000,
    greetingTimeout: 15000,
  });
};

// Get email configuration for a specific form type
const getEmailConfig = (formType) => {
  const config = EMAIL_CONFIGS[formType];
  if (!config) {
    throw new Error(`Unknown form type: ${formType}`);
  }
  return config;
};

// Send email with form-specific sender address
const sendEmail = async (transporter, formType, mailOptions) => {
  const emailConfig = getEmailConfig(formType);
  
  // Override the 'from' field with form-specific email
  const updatedMailOptions = {
    ...mailOptions,
    from: `"${emailConfig.fromName}" <${emailConfig.fromEmail}>`
  };
  
  return await transporter.sendMail(updatedMailOptions);
};

// Send multiple emails with form-specific sender addresses
const sendMultipleEmails = async (transporter, formType, mailOptionsArray) => {
  const emailConfig = getEmailConfig(formType);
  
  const updatedMailOptionsArray = mailOptionsArray.map(mailOptions => ({
    ...mailOptions,
    from: `"${emailConfig.fromName}" <${emailConfig.fromEmail}>`
  }));
  
  return await Promise.all(
    updatedMailOptionsArray.map(mailOptions => transporter.sendMail(mailOptions))
  );
};

module.exports = {
  createTransporter,
  getEmailConfig,
  sendEmail,
  sendMultipleEmails,
  EMAIL_CONFIGS
};

// backend/routes/requestDemo.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, company, employees, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !company || !employees || !phone) {
      return res.status(400).json({ 
        success: false,
        message: 'All required fields must be filled' 
      });
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide a valid email address' 
      });
    }

    // Email to business owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `Demo Request from ${name} at ${company}`,
      html: `
        <h2>New Demo Request Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>No. of Employees:</strong> ${employees}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No specific requirements mentioned'}</p>
        <hr>
        <p>This message was sent from the Request Demo form on your website.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for requesting a demo - Sync HRM',
      html: `
        <h2>Thank you for requesting a demo with Sync HRM!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in seeing Sync HRM in action. We've received your request and will contact you within 24 business hours to schedule your personalized demo.</p>
        
        <h3>Your Request Details:</h3>
        <ul>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Employees:</strong> ${employees}</li>
        </ul>
        
        <p>Our HR expert will contact you to discuss your specific needs and schedule a 30-60 minute session to demonstrate how Sync HRM can transform your HR processes.</p>
        
        <p>Best regards,<br>The Sync HRM Team</p>
        <hr>
        <p>This is an automated response. Please do not reply to this email.</p>
      `,
    };

    // Send both emails
    await Promise.all([
      req.transporter.sendMail(ownerMailOptions),
      req.transporter.sendMail(customerMailOptions)
    ]);

    res.status(200).json({ 
      success: true,
      message: 'Demo request submitted successfully' 
    });
  } catch (error) {
    console.error('Error in requestDemo route:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to submit demo request. Please try again.' 
    });
  }
});

module.exports = router;
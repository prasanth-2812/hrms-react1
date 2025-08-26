// backend/routes/sendEnquiry.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
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
      subject: `New Enquiry from ${name} at ${company}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>This message was sent from the Send Enquiry form on your website.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your enquiry - Sync HRM',
      html: `
        <h2>Thank you for contacting Sync HRM!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in our HR solutions. We have received your enquiry and will get back to you within 24 business hours.</p>
        <p>Your message:</p>
        <blockquote>${message}</blockquote>
        <p>We'll review your request and contact you at ${email} to discuss how we can help transform your HR processes.</p>
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
      message: 'Enquiry submitted successfully' 
    });
  } catch (error) {
    console.error('Error in sendEnquiry route:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to send enquiry. Please try again.' 
    });
  }
});

module.exports = router;
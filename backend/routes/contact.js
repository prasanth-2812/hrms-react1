// backend/routes/contact.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, company, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
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

    const fullName = `${firstName} ${lastName}`;

    // Email to business owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>This message was sent from the Contact Us form on your website.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us - Sync HRM',
      html: `
        <h2>Thank you for contacting Sync HRM!</h2>
        <p>Dear ${firstName},</p>
        <p>Thank you for reaching out to us. We have received your message and will respond within 24 business hours.</p>
        <p>Your message:</p>
        <blockquote>${message}</blockquote>
        <p>We appreciate your interest in our HR solutions and will contact you at ${email} soon.</p>
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
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to send message. Please try again.' 
    });
  }
});

module.exports = router;
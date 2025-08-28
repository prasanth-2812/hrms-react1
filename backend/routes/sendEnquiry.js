// backend/routes/sendEnquiry.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, company, sector, message } = req.body;

    // Validate required fields
    if (!name || !email || !company || !sector || !message) {
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

    // Use the provided Cloudinary URL for your logo
    const logoUrl = "https://res.cloudinary.com/dl0vnawrx/image/upload/v1756370244/hrmslogo_jszdx6.png";

    // Email to business owner
    const ownerMailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_FROM,
      subject: `New Enquiry from ${name} at ${company}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Enquiry Received</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 700px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f9fa;
            }
            .container {
              background-color: white;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
              color: white;
              text-align: center;
              padding: 20px;
            }
            .logo {
              max-width: 180px;
              height: auto;
              margin-bottom: 15px;
            }
            .title {
              margin: 0;
              font-size: 24px;
              font-weight: 500;
            }
            .content {
              padding: 30px;
            }
            .section {
              margin-bottom: 25px;
            }
            .detail-item {
              margin-bottom: 12px;
              display: flex;
            }
            .label {
              font-weight: 600;
              color: #444;
              min-width: 100px;
            }
            .value {
              color: #1a73e8;
              font-weight: 500;
            }
            .message {
              background-color: #f8f9fa;
              border-radius: 8px;
              padding: 15px;
              margin: 20px 0;
              border-left: 4px solid #1a73e8;
            }
            .footer {
              background-color: #f1f3f4;
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 0.9em;
              border-top: 1px solid #eaeaea;
            }
            hr {
              border: none;
              border-top: 1px solid #eaeaea;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Sync HRM Logo" class="logo">
              <h1 class="title">New Enquiry Received</h1>
            </div>
            
            <div class="content">
              <div class="section">
                <h3 style="color: #1a73e8; margin-top: 0;">Enquiry Details</h3>
                <div class="detail-item">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="detail-item">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="detail-item">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                <div class="detail-item">
                  <div class="label">Sector:</div>
                  <div class="value">${sector}</div>
                </div>
              </div>
              
              <div class="message">
                <h3 style="margin: 0 0 10px 0; color: #1a73e8;">Message</h3>
                <p style="margin: 0;">${message}</p>
              </div>
              
              <hr>
              <p>This message was sent from the Send Enquiry form on the Sync HRM website.</p>
              <p><strong>Received at:</strong> ${new Date().toLocaleString('en-IN')}</p>
            </div>
            
            <div class="footer">
              <p>Sync HRM - Modern HR Solutions</p>
              <p>Transforming Human Resources with AI-powered technology</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Thank you for your enquiry - Sync HRM',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Enquiry</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 700px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f9fa;
            }
            .container {
              background-color: white;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
              color: white;
              text-align: center;
              padding: 30px 20px;
            }
            .logo {
              max-width: 180px;
              height: auto;
              margin-bottom: 15px;
            }
            .title {
              margin: 0;
              font-size: 28px;
              font-weight: 500;
            }
            .subtitle {
              margin: 10px 0 0;
              opacity: 0.9;
              font-weight: 300;
            }
            .content {
              padding: 30px;
            }
            .greeting {
              font-size: 18px;
              margin-bottom: 20px;
            }
            .details {
              background-color: #f8f9fa;
              border-radius: 8px;
              padding: 20px;
              margin: 25px 0;
            }
            .message {
              background-color: #e8f0fe;
              border-left: 4px solid #1a73e8;
              padding: 15px 20px;
              margin: 25px 0;
              border-radius: 0 8px 8px 0;
            }
            .message h3 {
              margin: 0 0 10px 0;
              color: #1a73e8;
            }
            .signature {
              margin: 30px 0 10px;
              font-weight: 500;
            }
            .footer {
              background-color: #f1f3f4;
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 0.9em;
            }
            .footer-logo {
              max-width: 120px;
              height: auto;
              margin-bottom: 10px;
            }
            .disclaimer {
              margin-top: 15px;
              font-style: italic;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Sync HRM Logo" class="logo">
              <h1 class="title">Thank You!</h1>
              <p class="subtitle">We've received your enquiry</p>
            </div>
            
            <div class="content">
              <p class="greeting">Dear ${name},</p>
              
              <p>Thank you for your interest in Sync HRM. We have successfully received your enquiry and our HR solutions expert will contact you within 24 business hours.</p>
              
              <div class="details">
                <h3 style="margin-top: 0; color: #333;">Your Enquiry Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Sector:</strong> ${sector}</p>
              </div>
              
              <div class="message">
                <h3>We've Received Your Message</h3>
                <p>"${message}"</p>
              </div>
              
              <p>We'll review your request and contact you at ${email} to discuss how we can help transform your HR processes with AI-powered automation, real-time analytics, and seamless integration.</p>
              
              <p class="signature">Best regards,<br>The Sync HRM Team</p>
            </div>
            
            <div class="footer">
              <img src="${logoUrl}" alt="Sync HRM Logo" class="footer-logo">
              <p>Modern HR Solutions for the Digital Age</p>
              <p class="disclaimer">This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
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
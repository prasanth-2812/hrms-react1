# Email System Upgrade Guide

## Overview
This guide documents the upgrade to the mailing system that allows different forms to send emails from different sender addresses.

## Changes Made

### 1. New Email Service (`backend/services/emailService.js`)
Created a centralized email service that maps form types to specific sender addresses:

- **Contact Form** → `contact@synchrm.com`
- **Enquiry Form** → `enquiry@synchrm.com`  
- **Demo Form** → `demo@synchrm.com`

### 2. Updated Backend Routes
Modified all three form routes to use the new email service:

- `backend/routes/contact.js` - Uses 'contact' form type
- `backend/routes/sendEnquiry.js` - Uses 'enquiry' form type
- `backend/routes/requestDemo.js` - Uses 'demo' form type

### 3. Key Features
- **Form-specific sender addresses**: Each form type now sends emails from its designated address
- **Centralized configuration**: All email settings are managed in one place
- **Backward compatibility**: Existing functionality remains unchanged
- **Error handling**: Proper error handling for unknown form types

## Email Address Mapping

| Form Type | Sender Email | Sender Name |
|-----------|--------------|-------------|
| Contact   | contact@synchrm.com | Sync HRM Contact |
| Enquiry   | enquiry@synchrm.com | Sync HRM Enquiry |
| Demo      | demo@synchrm.com | Sync HRM Demo |

## Testing

### Manual Testing
1. Start the backend server: `npm start` (in backend directory)
2. Test each form:
   - Contact Form: Submit a contact form and check email sender
   - Enquiry Form: Submit an enquiry form and check email sender  
   - Demo Form: Submit a demo request and check email sender

### Automated Testing
Run the test script: `node test-email-service.js` (in backend directory)

## Environment Variables Required

Ensure these environment variables are set in your `.env` file:

```env
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password
OWNER_EMAIL=your-owner-email@synchrm.com
```

## Implementation Details

### Email Service Functions

1. **`getEmailConfig(formType)`** - Returns email configuration for a form type
2. **`sendEmail(transporter, formType, mailOptions)`** - Sends a single email with form-specific sender
3. **`sendMultipleEmails(transporter, formType, mailOptionsArray)`** - Sends multiple emails with form-specific sender
4. **`createTransporter()`** - Creates a nodemailer transporter

### Usage Example

```javascript
const { sendMultipleEmails } = require('../services/emailService');

// Send emails for contact form
await sendMultipleEmails(transporter, 'contact', [ownerMailOptions, customerMailOptions]);

// Send emails for enquiry form  
await sendMultipleEmails(transporter, 'enquiry', [ownerMailOptions, customerMailOptions]);

// Send emails for demo form
await sendMultipleEmails(transporter, 'demo', [ownerMailOptions, customerMailOptions]);
```

## Benefits

1. **Professional email management**: Each form type has its own dedicated email address
2. **Better organization**: Emails can be easily categorized and filtered
3. **Improved user experience**: Users receive emails from contextually appropriate addresses
4. **Scalable architecture**: Easy to add new form types and email addresses
5. **Maintainable code**: Centralized email configuration makes updates easier

## Troubleshooting

### Common Issues

1. **"Unknown form type" error**: Ensure you're using the correct form type ('contact', 'enquiry', 'demo')
2. **SMTP connection issues**: Verify your environment variables are correct
3. **Email not received**: Check spam folder and verify recipient email address

### Debug Steps

1. Check server logs for error messages
2. Verify environment variables are loaded correctly
3. Test SMTP connection using the test script
4. Check email service configuration

## Future Enhancements

Potential improvements for the email system:

1. **Email templates**: Create reusable HTML templates for different form types
2. **Email scheduling**: Add support for delayed email sending
3. **Email tracking**: Implement email open and click tracking
4. **Multiple recipients**: Support for CC and BCC recipients
5. **Email attachments**: Support for file attachments in emails

## Support

For issues or questions regarding the email system upgrade, please check:

1. Server logs for error messages
2. Environment variable configuration
3. SMTP server connectivity
4. Email service test results

---

**Note**: This upgrade maintains full backward compatibility with existing functionality while adding the new form-specific email routing capability.

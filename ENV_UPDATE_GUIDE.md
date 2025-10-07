# Environment Variables Update Guide

## Current .env Configuration
Your current `.env` file should be updated with the following configuration:

```env
# Server Port
PORT=5000

# SMTP Configuration
EMAIL_HOST=mail.mcb5.in
EMAIL_PORT=25
EMAIL_SECURE=false
EMAIL_USER=udayj
EMAIL_PASS=tx0kIA6AsPlOHykiHSjFnbcf

# Sender & Owner
EMAIL_FROM_EMAIL=synchrm@synchrm.com
EMAIL_FROM_NAME=Synchrm
OWNER_EMAIL=prasanthkathi05@gmail.com

# Form-Specific Email Addresses (NEW - ADD THESE)
# These are the new email addresses for different form types
CONTACT_EMAIL=contact@synchrm.com
CONTACT_NAME=Sync HRM Contact

ENQUIRY_EMAIL=enquiry@synchrm.com
ENQUIRY_NAME=Sync HRM Enquiry

DEMO_EMAIL=demo@synchrm.com
DEMO_NAME=Sync HRM Demo

# CORS Configuration (OPTIONAL - UPDATE IF NEEDED)
CORS_ORIGIN=http://localhost:3000
CORS_ORIGINS=http://localhost:3000,http://localhost:80,http://localhost,https://localhost,https://synchrm.com,https://www.synchrm.com
```

## What You Need to Do

### 1. Update Your .env File
Add these new variables to your existing `.env` file:

```env
# Form-Specific Email Addresses (ADD THESE LINES)
CONTACT_EMAIL=contact@synchrm.com
CONTACT_NAME=Sync HRM Contact

ENQUIRY_EMAIL=enquiry@synchrm.com
ENQUIRY_NAME=Sync HRM Enquiry

DEMO_EMAIL=demo@synchrm.com
DEMO_NAME=Sync HRM Demo
```

### 2. Email Address Setup
You need to set up these email addresses in your email provider (mcb5.in):

1. **Create the email addresses:**
   - `contact@synchrm.com`
   - `enquiry@synchrm.com`
   - `demo@synchrm.com`

2. **Configure them to use the same SMTP settings:**
   - Host: `mail.mcb5.in`
   - Port: `25`
   - Username: `udayj`
   - Password: `tx0kIA6AsPlOHykiHSjFnbcf`

### 3. Alternative Configuration (If you can't create separate email addresses)

If you can't create separate email addresses, you can use email aliases or configure your SMTP to send from different addresses. Update the email service configuration:

```javascript
// In backend/services/emailService.js, update the EMAIL_CONFIGS:
const EMAIL_CONFIGS = {
  contact: {
    fromEmail: 'synchrm@synchrm.com', // Use your main email
    fromName: 'Sync HRM Contact',
    subjectPrefix: 'Contact Form'
  },
  enquiry: {
    fromEmail: 'synchrm@synchrm.com', // Use your main email
    fromName: 'Sync HRM Enquiry',
    subjectPrefix: 'Enquiry Form'
  },
  demo: {
    fromEmail: 'synchrm@synchrm.com', // Use your main email
    fromName: 'Sync HRM Demo',
    subjectPrefix: 'Demo Request'
  }
};
```

## Testing Your Configuration

After updating your `.env` file:

1. **Restart your backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Test the email service:**
   ```bash
   node test-email-service.js
   ```

3. **Test the forms:**
   - Submit a contact form
   - Submit an enquiry form
   - Submit a demo request
   - Check that emails come from the correct addresses

## Troubleshooting

### If emails don't send from the new addresses:

1. **Check SMTP configuration** - Ensure your SMTP server allows sending from different "from" addresses
2. **Verify email addresses exist** - Make sure the email addresses are created in your email provider
3. **Check server logs** - Look for SMTP errors in your backend logs
4. **Test with a single address first** - Try using your main email address for all forms first

### Common Issues:

- **"Sender address not allowed"** - Your SMTP server doesn't allow sending from that address
- **"Email address not found"** - The email address doesn't exist in your email provider
- **"Authentication failed"** - Check your SMTP credentials

## Next Steps

1. Update your `.env` file with the new variables
2. Set up the email addresses in your email provider
3. Test the implementation
4. Deploy to production with the updated configuration

---

**Note**: The email service will automatically use the correct sender address based on the form type, so no changes are needed to your frontend forms.

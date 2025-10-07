// Test script for the new email service
require('dotenv').config();
const { createTransporter, sendEmail, sendMultipleEmails, getEmailConfig } = require('./services/emailService');

async function testEmailService() {
  console.log('🧪 Testing Email Service...\n');
  
  try {
    // Test 1: Check email configurations
    console.log('1. Testing email configurations:');
    const contactConfig = getEmailConfig('contact');
    const enquiryConfig = getEmailConfig('enquiry');
    const demoConfig = getEmailConfig('demo');
    
    console.log('   Contact Form:', contactConfig);
    console.log('   Enquiry Form:', enquiryConfig);
    console.log('   Demo Form:', demoConfig);
    console.log('   ✅ Email configurations loaded successfully\n');
    
    // Test 2: Create transporter
    console.log('2. Testing transporter creation:');
    const transporter = createTransporter();
    console.log('   ✅ Transporter created successfully\n');
    
    // Test 3: Verify SMTP connection
    console.log('3. Testing SMTP connection:');
    await transporter.verify();
    console.log('   ✅ SMTP connection verified successfully\n');
    
    // Test 4: Test single email sending (contact form)
    console.log('4. Testing single email sending (contact form):');
    const testMailOptions = {
      to: process.env.OWNER_EMAIL || 'test@example.com',
      subject: 'Test Email - Contact Form',
      html: '<p>This is a test email from the contact form.</p>'
    };
    
    const result = await sendEmail(transporter, 'contact', testMailOptions);
    console.log('   ✅ Contact form email sent successfully');
    console.log('   Message ID:', result.messageId);
    console.log('   From:', result.envelope.from);
    console.log('   To:', result.envelope.to);
    console.log('');
    
    // Test 5: Test multiple emails sending (enquiry form)
    console.log('5. Testing multiple emails sending (enquiry form):');
    const ownerMailOptions = {
      to: process.env.OWNER_EMAIL || 'test@example.com',
      subject: 'Test Email - Enquiry Form (Owner)',
      html: '<p>This is a test email to the owner from the enquiry form.</p>'
    };
    
    const customerMailOptions = {
      to: 'customer@example.com',
      subject: 'Test Email - Enquiry Form (Customer)',
      html: '<p>This is a test email to the customer from the enquiry form.</p>'
    };
    
    const results = await sendMultipleEmails(transporter, 'enquiry', [ownerMailOptions, customerMailOptions]);
    console.log('   ✅ Enquiry form emails sent successfully');
    console.log('   Owner email Message ID:', results[0].messageId);
    console.log('   Customer email Message ID:', results[1].messageId);
    console.log('   Owner email From:', results[0].envelope.from);
    console.log('   Customer email From:', results[1].envelope.from);
    console.log('');
    
    console.log('🎉 All tests passed! Email service is working correctly.');
    console.log('\n📧 Email sender addresses:');
    console.log('   Contact Form → contact@synchrm.com');
    console.log('   Enquiry Form → enquiry@synchrm.com');
    console.log('   Demo Form → demo@synchrm.com');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

// Run the test
testEmailService();

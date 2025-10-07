// Environment Configuration Checker
require('dotenv').config();

console.log('🔍 Checking Environment Configuration...\n');

// Check required environment variables
const requiredVars = [
  'EMAIL_HOST',
  'EMAIL_PORT', 
  'EMAIL_USER',
  'EMAIL_PASS',
  'EMAIL_FROM_EMAIL',
  'EMAIL_FROM_NAME',
  'OWNER_EMAIL'
];

// Check optional form-specific variables
const optionalVars = [
  'CONTACT_EMAIL',
  'CONTACT_NAME',
  'ENQUIRY_EMAIL', 
  'ENQUIRY_NAME',
  'DEMO_EMAIL',
  'DEMO_NAME'
];

console.log('📋 Required Environment Variables:');
let allRequiredPresent = true;
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`   ✅ ${varName}: ${value}`);
  } else {
    console.log(`   ❌ ${varName}: NOT SET`);
    allRequiredPresent = false;
  }
});

console.log('\n📋 Optional Form-Specific Variables:');
let optionalCount = 0;
optionalVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`   ✅ ${varName}: ${value}`);
    optionalCount++;
  } else {
    console.log(`   ⚠️  ${varName}: NOT SET (will use default)`);
  }
});

console.log('\n📊 Configuration Summary:');
console.log(`   Required variables: ${allRequiredPresent ? '✅ All present' : '❌ Missing some'}`);
console.log(`   Optional variables: ${optionalCount}/${optionalVars.length} set`);

if (allRequiredPresent) {
  console.log('\n🎉 Environment configuration looks good!');
  console.log('\n📧 Email Configuration:');
  console.log(`   SMTP Host: ${process.env.EMAIL_HOST}`);
  console.log(`   SMTP Port: ${process.env.EMAIL_PORT}`);
  console.log(`   SMTP User: ${process.env.EMAIL_USER}`);
  console.log(`   Default From: ${process.env.EMAIL_FROM_EMAIL}`);
  console.log(`   Owner Email: ${process.env.OWNER_EMAIL}`);
  
  if (optionalCount > 0) {
    console.log('\n📧 Form-Specific Emails:');
    if (process.env.CONTACT_EMAIL) console.log(`   Contact: ${process.env.CONTACT_EMAIL}`);
    if (process.env.ENQUIRY_EMAIL) console.log(`   Enquiry: ${process.env.ENQUIRY_EMAIL}`);
    if (process.env.DEMO_EMAIL) console.log(`   Demo: ${process.env.DEMO_EMAIL}`);
  } else {
    console.log('\n⚠️  No form-specific emails configured - will use defaults');
  }
} else {
  console.log('\n❌ Please set the missing required environment variables');
}

console.log('\n💡 Next Steps:');
console.log('   1. Add the missing variables to your .env file');
console.log('   2. Set up the email addresses in your email provider');
console.log('   3. Test the email service with: node test-email-service.js');

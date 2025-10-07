// Test script to verify the updated routes work correctly
const request = require('supertest');
const app = require('./index');

async function testRoutes() {
  console.log('🧪 Testing Updated Routes...\n');
  
  try {
    // Test 1: Contact Form Route
    console.log('1. Testing Contact Form Route:');
    const contactResponse = await request(app)
      .post('/api/contact')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        company: 'Test Company',
        message: 'This is a test message',
        captcha: 'TEST12',
        sessionId: 'test_session_123'
      });
    
    console.log('   Status:', contactResponse.status);
    console.log('   Response:', contactResponse.body);
    console.log('   ✅ Contact form route tested\n');
    
    // Test 2: Enquiry Form Route
    console.log('2. Testing Enquiry Form Route:');
    const enquiryResponse = await request(app)
      .post('/api/send-enquiry')
      .send({
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        company: 'Test Corp',
        sector: 'Technology',
        message: 'This is a test enquiry'
      });
    
    console.log('   Status:', enquiryResponse.status);
    console.log('   Response:', enquiryResponse.body);
    console.log('   ✅ Enquiry form route tested\n');
    
    // Test 3: Demo Request Route
    console.log('3. Testing Demo Request Route:');
    const demoResponse = await request(app)
      .post('/api/request-demo')
      .send({
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        company: 'Demo Company',
        employees: '51-200',
        phone: '+1234567890',
        message: 'I would like to see the AI features',
        captcha: 'DEMO12',
        sessionId: 'test_session_456'
      });
    
    console.log('   Status:', demoResponse.status);
    console.log('   Response:', demoResponse.body);
    console.log('   ✅ Demo request route tested\n');
    
    console.log('🎉 All route tests completed!');
    console.log('\n📧 Email sender verification:');
    console.log('   Check your email inbox to verify:');
    console.log('   - Contact form emails should come from: contact@synchrm.com');
    console.log('   - Enquiry form emails should come from: enquiry@synchrm.com');
    console.log('   - Demo form emails should come from: demo@synchrm.com');
    
  } catch (error) {
    console.error('❌ Route test failed:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

// Run the test
testRoutes();

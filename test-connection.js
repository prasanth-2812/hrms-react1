// Test script to verify backend connection
const http = require('http');

console.log('🔍 Testing Sync HRMS Backend Connection...\n');

// Test backend health endpoint
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/health',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`✅ Backend Status: ${res.statusCode}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('📋 Backend Response:');
    console.log(data);
    
    if (res.statusCode === 200) {
      console.log('\n🎉 Backend is running correctly!');
      console.log('📱 You can now start the frontend with: npm start');
      console.log('🔧 Make sure to set REACT_APP_API_URL=http://localhost:3001');
    } else {
      console.log('\n❌ Backend is not responding correctly');
    }
  });
});

req.on('error', (err) => {
  console.log('❌ Backend Connection Failed:');
  console.log('   Error:', err.message);
  console.log('\n🔧 Troubleshooting:');
  console.log('   1. Make sure backend is running: cd backend && npm start');
  console.log('   2. Check if port 3001 is available');
  console.log('   3. Verify backend dependencies are installed');
});

req.end();

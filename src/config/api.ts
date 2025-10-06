// API Configuration for Sync HRMS
const API_CONFIG = {
  // Base URL for API calls
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  
  // API Endpoints
  ENDPOINTS: {
    SEND_ENQUIRY: '/api/send-enquiry',
    CONTACT: '/api/contact',
    REQUEST_DEMO: '/api/request-demo',
    CONTACT_CAPTCHA: '/api/contact/captcha',
    REQUEST_DEMO_CAPTCHA: '/api/request-demo/captcha',
  },
  
  // Request timeout (in milliseconds)
  TIMEOUT: 10000,
  
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  }
};

export default API_CONFIG;

// src/pages/RequestDemo.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaSessionId, setCaptchaSessionId] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Fetch CAPTCHA from backend
  const fetchCaptcha = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://api.synchrm.com'}/api/request-demo/captcha`);
      const data = await response.json();
      if (data.success) {
        setCaptchaCode(data.captcha);
        setCaptchaSessionId(data.sessionId);
        setFormData(prev => ({ ...prev, captcha: "" }));
        setCaptchaError(false);
        setFormErrors(prev => ({ ...prev, captcha: "" }));
      }
    } catch (error) {
      console.error('Error fetching CAPTCHA:', error);
      // Fallback to client-side generation
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";
      for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setCaptchaCode(result);
      setCaptchaSessionId("fallback_" + Date.now());
    }
  };

  const refreshCaptcha = () => {
    fetchCaptcha();
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setFormData(prev => ({ ...prev, captcha: value }));
    setCaptchaError(false);
    
    // Clear error when user starts typing
    if (formErrors.captcha) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.captcha;
        return newErrors;
      });
    }
    
    // Real-time validation for captcha - show error immediately when 6 characters are entered
    if (value.length === 6) {
      if (captchaSessionId.startsWith("fallback") && value !== captchaCode) {
        setFormErrors(prev => ({ ...prev, captcha: "Invalid security code. Please try again." }));
      } else if (!captchaSessionId.startsWith("fallback")) {
        // For server-side captcha, we'll validate on submit
        setFormErrors(prev => ({ ...prev, captcha: "" }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      errors.company = "Company name is required";
    }
    
    if (!formData.employees) {
      errors.employees = "Please select number of employees";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    
    if (!formData.captcha.trim()) {
      errors.captcha = "Security verification is required";
    } else if (captchaSessionId.startsWith("fallback") && formData.captcha !== captchaCode) {
      errors.captcha = "Invalid security code. Please try again.";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://api.synchrm.com'}/api/request-demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          employees: formData.employees,
          phone: formData.phone,
          message: formData.message,
          captcha: formData.captcha,
          sessionId: captchaSessionId
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          employees: "",
          phone: "",
          message: "",
          captcha: "",
        });
        refreshCaptcha();
        
        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const result = await response.json();
        
        // Handle specific field errors
        if (result.field === 'captcha') {
          setFormErrors({ captcha: result.message });
          // Refresh CAPTCHA on error
          refreshCaptcha();
        } else if (result.field === 'email') {
          setFormErrors({ email: result.message });
        } else if (result.field === 'required_fields') {
          setFormErrors({ submit: result.message });
        } else {
          setFormErrors({ submit: result.message || 'Failed to submit form' });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Add smooth scroll behavior
    document.body.style.overflowY = 'auto';
    // Fetch initial CAPTCHA
    fetchCaptcha();
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600">
            We've received your demo request. A team member will contact you within 24 hours to schedule your session.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Hero Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              See <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Synchrm in Action</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Schedule a personalized demo with our HR experts and discover how Synchrm can transform your workforce management.
            </p>

            <div className="space-y-4">
              {[
                "See AI-powered recruitment, onboarding, and payroll in real-time",
                "Learn how private LLM keeps your HR data secure",
                "Get answers to your specific HR challenges",
                "Explore customization options for your business"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Available Today</span>
              </div>
              <p className="text-sm opacity-90">
                Flexible slots: 9 AM – 6 PM (IST) | 30-min or 60-min sessions
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background gradient with rotation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-6 shadow-2xl"></div>
            
            {/* Form container */}
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Schedule Your Demo</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@company.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      formErrors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your company name"
                  />
                  {formErrors.company && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>
                  )}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                      No. of Employees *
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.employees ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1 – 50</option>
                      <option value="51-200">51 – 200</option>
                      <option value="201-500">201 – 500</option>
                      <option value="501-1000">501 – 1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                    {formErrors.employees && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.employees}</p>
                    )}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                    )}
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    What would you like to see in the demo?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., AI recruitment, payroll automation, onboarding..."
                  ></textarea>
                </motion.div>

                {/* Security Verification Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="mt-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Security Verification</label>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      disabled={isSubmitting}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Refresh captcha"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.356-2m15.356 2H15" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-center bg-gray-50 border border-gray-300 rounded-lg p-3 w-full">
                      <span className="text-lg font-mono font-bold text-gray-800">{captchaCode}</span>
                    </div>
                  </div>
                  
                  <div>
                    <motion.input
                      type="text"
                      value={formData.captcha}
                      onChange={handleCaptchaChange}
                      placeholder="ENTER THE CODE ABOVE"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.captcha ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      maxLength={6}
                      disabled={!captchaCode || isSubmitting}
                      animate={formErrors.captcha ? { x: [-10, 10, -10, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                    {formErrors.captcha && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-center space-x-2 bg-red-50 border border-red-200 rounded-lg p-3"
                      >
                        <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-red-700 text-sm font-medium">{formErrors.captcha}</p>
                          <p className="text-red-600 text-xs mt-1">Click the refresh button to get a new code</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {formErrors.submit && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                  >
                    {formErrors.submit}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule My Demo"}
                </motion.button>
              </form>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce delay-500"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
// src/components/home/Contact.tsx
import { useState, useEffect } from "react";
import API_CONFIG from "../config/api";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
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
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CONTACT_CAPTCHA}`);
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
        // But we can show a generic message if needed
        setFormErrors(prev => ({ ...prev, captcha: "" }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      errors.company = "Company is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
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
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CONTACT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          captcha: formData.captcha,
          sessionId: captchaSessionId
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
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
            We've received your message and will contact you shortly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our HR solutions? Our team is ready to help you transform your workforce management.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  detail: "+91 93925 62193",
                  description: "Mon-Fri from 9AM to 6PM IST"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  detail: "info@synchrm.com",
                  description: "We'll respond within 24 hours"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Address",
                  detail: "Sunrise Startup Towers, Madhurawada, IT SEZ, Hill No:3, Visakhapatnam-48, Andhra Pradesh, India",
                  description: "Visit us during business hours"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-gray-600">{item.detail}</div>
                    <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Quick Response Guaranteed</span>
              </div>
              <p className="text-sm opacity-90">
                Our team responds to all enquiries within 24 business hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                  )}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                  )}
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@company.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formErrors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your company name"
                />
                {formErrors.company && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your HR needs..."
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </motion.div>

              {/* Security Verification Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
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
                  <div className="flex items-center justify-center bg-gray-50 border border-gray-300 rounded-lg p-3 w-full min-h-[60px]">
                    {captchaCode ? (
                      <span className="text-lg font-mono font-bold text-gray-800">{captchaCode}</span>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                        <span className="text-gray-500">Loading security code...</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <motion.input
                    type="text"
                    value={formData.captcha}
                    onChange={handleCaptchaChange}
                    name="captcha"
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
                  transition={{ duration: 0.5, delay: 0.9 }}
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
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
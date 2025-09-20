// src/components/home/SendEnquiry.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SendEnquiry = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    employeeCount: "",
    name: "",
    email: "",
    contactNumber: "",
    sector: "",
    captcha: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaSessionId, setCaptchaSessionId] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formKey, setFormKey] = useState(0); // Add form key for reset

  // Fetch CAPTCHA from backend
  const fetchCaptcha = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://api.synchrm.com'}/api/send-enquiry/captcha`);
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
    
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }
    
    if (!formData.employeeCount.trim()) {
      errors.employeeCount = "Employee count is required";
    }
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    }
    
    if (!formData.sector.trim()) {
      errors.sector = "Sector is required";
    }
    
    if (!formData.captcha.trim()) {
      errors.captcha = "Security verification is required";
    } else if (captchaSessionId.startsWith("fallback") && formData.captcha !== captchaCode) {
      errors.captcha = "Invalid security code. Please try again.";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://api.synchrm.com'}/api/send-enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.companyName,
          sector: formData.sector,
          message: `Employee Count: ${formData.employeeCount}, Contact: ${formData.contactNumber}`,
          captcha: formData.captcha,
          sessionId: captchaSessionId
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          companyName: "",
          employeeCount: "",
          name: "",
          email: "",
          contactNumber: "",
          sector: "",
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
            We've received your enquiry and will contact you shortly.
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
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Let's <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about Synchrm? Our HR technology experts are ready to help you transform your workforce management.
            </p>

            <div className="space-y-4">
              {[
                "Get personalized recommendations for your business size and industry",
                "Learn about AI-powered features that solve your specific HR challenges",
                "Understand integration with your existing systems",
                "Discover pricing options that fit your budget"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Quick Response</span>
              </div>
              <p className="text-sm opacity-90">
                Our team responds to all enquiries within 24 business hours
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Background gradient with subtle rotation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-6"></div>
            
            {/* White Card with Proper Shadow */}
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us an Enquiry</h2>

              <form 
                key={formKey} 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Company Name */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      formErrors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter company name"
                  />
                  {formErrors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.companyName}</p>
                  )}
                </motion.div>

                {/* Employee Count & Name (side-by-side) */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                      Employee Count *
                    </label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.employeeCount ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select employee count</option>
                      <option value="1-10">1-10 Employees</option>
                      <option value="11-50">11-50 Employees</option>
                      <option value="51-100">51-100 Employees</option>
                      <option value="101-200">101-200 Employees</option>
                      <option value="201-500">201-500 Employees</option>
                      <option value="501-1000">501-1,000 Employees</option>
                      <option value="1000+">1,000+ Employees</option>
                    </select>
                    {formErrors.employeeCount && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.employeeCount}</p>
                    )}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
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
                    placeholder="Enter email"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </motion.div>

                {/* Contact Number & Sector (side-by-side) */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.contactNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter contact number"
                    />
                    {formErrors.contactNumber && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.contactNumber}</p>
                    )}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                      Sector *
                    </label>
                    <input
                      type="text"
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.sector ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter sector"
                    />
                    {formErrors.sector && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.sector}</p>
                    )}
                  </motion.div>
                </div>

                {/* Security Verification Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
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
                    <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-3 w-full">
                      <span className="text-lg font-mono font-bold text-gray-800">{captchaCode}</span>
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
                        <p className="text-red-700 text-sm font-medium">
                          {formErrors.captcha}
                        </p>
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
                    transition={{ duration: 0.5 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                  >
                    {formErrors.submit}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed opacity-70' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
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

export default SendEnquiry;
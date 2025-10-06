// src/components/home/Hero.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import API_CONFIG from "../../config/api";

const Hero: React.FC = () => {
  const [captchaCode, setCaptchaCode] = useState("TWPTG4");
  const [userInput, setUserInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0); // Add form key for reset
  
  // Form data state
  const [formData, setFormData] = useState({
    companyName: "",
    employeeCount: "",
    name: "",
    email: "",
    contactNumber: "",
    sector: "",
    captcha: ""
  });

  // Generate random captcha code
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setUserInput("");
    setIsCaptchaValid(true);
    setShowError(false);
    setFormErrors({});
  };

  // Refresh captcha function
  const refreshCaptcha = () => {
    generateCaptcha();
    setFormData(prev => ({ ...prev, captcha: "" }));
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Handle captcha input changes
  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setFormData(prev => ({ ...prev, captcha: value }));
    setUserInput(value);
    
    // Validate as user types
    if (value.length === 6 && value !== captchaCode) {
      setIsCaptchaValid(false);
    } else {
      setIsCaptchaValid(true);
    }
    
    // Clear captcha error when user starts typing
    if (formErrors.captcha) {
      setFormErrors(prev => ({ ...prev, captcha: "" }));
    }
  };


  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form fields
    const errors: Record<string, string> = {};
    
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }
    
    if (!formData.employeeCount) {
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
    
    if (!formData.captcha || formData.captcha !== captchaCode) {
      setShowError(true);
      errors.captcha = "Invalid captcha";
    }
    
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEND_ENQUIRY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.companyName,
          sector: formData.sector,
          message: `Employee Count: ${formData.employeeCount}, Contact: ${formData.contactNumber}`
        }),
      });

      if (response.ok) {
        // Show success popup
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          companyName: "",
          employeeCount: "",
          name: "",
          email: "",
          contactNumber: "",
          sector: "",
          captcha: ""
        });
        setFormKey(prev => prev + 1);
        generateCaptcha();
        
        // Hide success popup after 3 seconds and refresh page
        setTimeout(() => {
          setShowSuccess(false);
          // Refresh the page after success
          window.location.reload();
        }, 3000);
      } else {
        // Handle server error
        const result = await response.json();
        setFormErrors({ submit: result.message || "There was an error submitting your form. Please try again." });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({ submit: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate new captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  HRMS Platform
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Synchrm revolutionizes workforce management with AI-driven insights, 
                private LLM technology, and advanced biometric security for the future of work.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/request-demo" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105">
                Request Demo
              </a>
              
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-gray-600">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

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
            <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Send Us an Enquiry</h2>

              <form 
                key={formKey} 
                onSubmit={handleSubmit} 
                className="space-y-4"
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
                    className={`w-full px-3 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                      className={`w-full px-3 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                      className={`w-full px-3 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                    className={`w-full px-3 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                      className={`w-full px-3 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                      className={`w-full px-3 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                  className="mt-4"
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
                  
                  <div className="mb-2">
                    <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md p-2 w-full">
                      <span className="text-base font-mono font-bold text-gray-800">{captchaCode}</span>
                    </div>
                  </div>
                  
                  <div>
                    <motion.input
                      type="text"
                      value={formData.captcha}
                      onChange={handleCaptchaChange}
                      name="captcha"
                      placeholder="ENTER THE CODE ABOVE"
                      className={`w-full px-3 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                        className="mt-2 flex items-center space-x-2 bg-red-50 border border-red-200 rounded-md p-2"
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
                    className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md"
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
                  className={`w-full py-3 rounded-md font-semibold text-base transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed opacity-70' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-8 bg-white border border-green-200 rounded-lg shadow-lg p-6 max-w-sm z-50"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Thank You!</h3>
                <p className="text-gray-600 text-sm">We've received your enquiry and will contact you shortly.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
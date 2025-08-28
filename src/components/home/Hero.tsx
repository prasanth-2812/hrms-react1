// src/components/home/Hero.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero: React.FC = () => {
  const [captchaCode, setCaptchaCode] = useState("TWPTG4");
  const [userInput, setUserInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0); // Add form key for reset

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

  // Format input to uppercase only
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setUserInput(value);
    
    // Validate as user types
    if (value.length === 6 && value !== captchaCode) {
      setIsCaptchaValid(false);
    } else {
      setIsCaptchaValid(true);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form fields
    const errors: Record<string, string> = {};
    const formData = new FormData(e.currentTarget);
    
    if (!formData.get('companyName')) {
      errors.companyName = "Company name is required";
    }
    
    if (!formData.get('employeeCount')) {
      errors.employeeCount = "Employee count is required";
    }
    
    if (!formData.get('name')) {
      errors.name = "Name is required";
    }
    
    if (!formData.get('email')) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get('email') as string)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.get('contactNumber')) {
      errors.contactNumber = "Contact number is required";
    }
    
    if (!formData.get('sector')) {
      errors.sector = "Sector is required";
    }
    
    if (!userInput || userInput !== captchaCode) {
      setShowError(true);
      errors.captcha = "Invalid captcha";
    }
    
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('companyName'),
          sector: formData.get('sector'),
          message: `Employee Count: ${formData.get('employeeCount')}, Contact: ${formData.get('contactNumber')}`
        }),
      });

      if (response.ok) {
        // Show success popup
        setShowSuccess(true);
        
        // Reset form by changing the key
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Background gradient with subtle rotation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl transform rotate-1"></div>
            
            {/* White Card with Proper Shadow */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us your Enquiry</h3>

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
                    required
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
                      required
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
                      required
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
                    required
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
                      required
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
                      required
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
                      onClick={generateCaptcha}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
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
                    <input
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      placeholder="ENTER THE CODE ABOVE"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        showError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      maxLength={6}
                    />
                    {showError && (
                      <p className="text-red-500 text-sm mt-1">Invalid code. Please try again.</p>
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
                  disabled={isSubmitting || !isCaptchaValid || userInput.length !== 6}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </motion.button>
              </form>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce delay-500"></div>
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
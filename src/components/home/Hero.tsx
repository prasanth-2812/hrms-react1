import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [captchaCode, setCaptchaCode] = useState("TWPTG4");
  const [userInput, setUserInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);
  const [showError, setShowError] = useState(false);

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (userInput !== captchaCode) {
      setShowError(true);
      return;
    }
    
    // Form submission logic here
    alert("Form submitted successfully!");
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
          <div className="space-y-8">
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

            <div className="flex flex-wrap gap-4">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-gray-600">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (Now Visible) */}
          <div className="relative">
            {/* White Card with Proper Shadow */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us your Enquiry</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter company name"
                  />
                </div>

                {/* Employee Count & Name (side-by-side) */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                      Employee Count *
                    </label>
                    <input
                      type="number"
                      id="employeeCount"
                      name="employeeCount"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter number of employees"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter email"
                  />
                </div>

                {/* Contact Number & PAN/TAN (side-by-side) */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter contact number"
                    />
                  </div>
                  <div>
                    <label htmlFor="panTAN" className="block text-sm font-medium text-gray-700 mb-1">
                      PAN / TAN of Organisation *
                    </label>
                    <input
                      type="text"
                      id="panTAN"
                      name="panTAN"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter PAN / TAN of organisation"
                    />
                  </div>
                </div>

                {/* Security Verification Section */}
                <div className="mt-6">
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
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isCaptchaValid || userInput.length !== 6}
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Optional: Add soft glow around the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl transform rotate-1 opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
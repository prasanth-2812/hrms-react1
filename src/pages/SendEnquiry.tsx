import { useState } from "react";

const SendEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    captcha: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("TWPTG4");
  const [captchaError, setCaptchaError] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Generate random captcha code
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setFormData(prev => ({ ...prev, captcha: "" }));
    setCaptchaError(false);
    setSubmitError("");
  };

  // Format captcha input to uppercase only
  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setFormData(prev => ({ ...prev, captcha: value }));
    setCaptchaError(false);
    setSubmitError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate captcha
    if (formData.captcha !== captchaCode) {
      setCaptchaError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Make actual API call to your backend
      const response = await fetch('http://localhost:5000/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const result = await response.json();
        setSubmitError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-blue-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              We've received your enquiry. Our team will contact you within 24 hours to discuss your requirements.
            </p>
            <p className="text-gray-500">
              <strong>Next Steps:</strong> Check your email for confirmation and our response.
            </p>
          </div>
        </div>
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us an Enquiry</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your HR needs, challenges, and goals..."
                    required
                  ></textarea>
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
                    <div className="flex items-center justify-center bg-gray-50 border border-gray-300 rounded-lg p-3 w-full">
                      <span className="text-lg font-mono font-bold text-gray-800">{captchaCode}</span>
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      value={formData.captcha}
                      onChange={handleCaptchaChange}
                      placeholder="ENTER THE CODE ABOVE"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        captchaError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      maxLength={6}
                      required
                    />
                    {captchaError && (
                      <p className="text-red-500 text-sm mt-1">Invalid code. Please try again.</p>
                    )}
                  </div>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEnquiry;
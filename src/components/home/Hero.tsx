// src/components/home/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
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
                <div className="text-3xl font-bold text-blue-600">9</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (Now Visible) */}
          <div className="relative">
            {/* Remove this line that was covering the form */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl transform rotate-1"></div> */}

            {/* White Card with Proper Shadow */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us your Enquiry</h3>

              <form className="space-y-4">
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
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
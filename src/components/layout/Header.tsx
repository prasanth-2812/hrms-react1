import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const features = [
    "AI-Powered Recruitment",
    "Smart Onboarding Assistant",
    "Employee Self-Service Chatbot",
    "Performance & Productivity Insights",
    "Payroll & Compliance Automation",
    "Attendance",
    "Leaves",
    "Payroll",
    "Helpdesk",
    "Onboarding",
    "Exit Management",
    "Performance Management",
  ];

  // Check if current path matches a route
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleFeaturesToggle = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const handleMouseEnter = () => {
    setIsFeaturesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsFeaturesOpen(false);
  };

  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md shadow-lg sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SYNC HRMS Logo" width={150} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {/* Home */}
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/") ? "text-blue-600" : ""
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            {/* Features Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/features"
                className={`flex items-center text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                  isFeaturesOpen ? "text-blue-600" : ""
                } ${
                  location.pathname.startsWith('/features') ? "text-blue-600" : ""
                }`}
              >
                Features
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${isFeaturesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  location.pathname.startsWith('/features') ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>

              {/* Dropdown Menu */}
              {isFeaturesOpen && (
                <div className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 animate-fadeIn">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {features.map((feature) => (
                        <Link
                          key={feature}
                          to={`/features/${feature.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                          onClick={() => setIsFeaturesOpen(false)}
                        >
                          {feature}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              to="/about-us"
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/about-us") ? "text-blue-600" : ""
              }`}
            >
              About Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/about-us") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            {/* Pricing */}
            <Link
              to="/pricing"
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/pricing") ? "text-blue-600" : ""
              }`}
            >
              Pricing
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/pricing") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact-us"
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/contact-us") ? "text-blue-600" : ""
              }`}
            >
              Contact Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/contact-us") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/request-demo" className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
              Request Demo
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg">
              Send Enquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4 animate-fadeIn border border-gray-100">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/about-us"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/pricing"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact-us"
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="px-4 pt-4 space-y-2">
              <Link 
                to="/request-demo" 
                className="w-full sm:w-auto bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
              <Link 
                to="/send-enquiry" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl transition-all duration-300 block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
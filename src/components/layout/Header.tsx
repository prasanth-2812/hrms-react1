// src/components/layout/Header.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    "AI-Powered Recruitment",
    "Smart Onboarding Assistant",
    "Employee Self-Service Chatbot",
    "Performance & Productivity Insights",
    "Payroll & Compliance Automation",
    "Attendance",
    "Leaves",
    "Helpdesk",
    "Onboarding",
    "Exit Management",
    "Performance Management",
    "Activity Report Logging"
  ];

  // Check if current path matches a route
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Navigate to route and scroll to top
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setIsFeaturesOpen(false);
  };

  // Handle mouse enter with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsFeaturesOpen(true);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsFeaturesOpen(false);
    }, 300);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setIsFeaturesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsFeaturesOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [location.pathname]);

  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md shadow-lg sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation("/")}
            className="flex items-center"
          >
            <img src={logo} alt="SYNC HRMS Logo" width={150} height={100} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {/* Home */}
            <button
              onClick={() => handleNavigation("/")}
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/") ? "text-blue-600" : ""
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>

            {/* Features Dropdown */}
            <div ref={featuresRef} className="relative group">
              <button
                onClick={() => handleNavigation("/features")}
                className={`flex items-center text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                  isFeaturesOpen ? "text-blue-600" : ""
                } ${
                  location.pathname.startsWith('/features') ? "text-blue-600" : ""
                }`}
                onMouseEnter={handleMouseEnter}
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
              </button>

              {/* Dropdown Menu */}
              <div 
                className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 animate-fadeIn"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ display: isFeaturesOpen ? 'block' : 'none' }}
              >
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature) => {
                      let slug = feature.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, "-");
                      // Special cases for known features
                      if (feature === "Performance & Productivity Insights") slug = "performance-productivity-insights";
                      if (feature === "Payroll & Compliance Automation") slug = "payroll-compliance-automation";
                      if (feature === "Activity Report Logging") slug = "activity-report-logging";
                      return (
                        <button
                          key={feature}
                          onClick={() => handleNavigation(`/features/${slug}`)}
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis text-left"
                        >
                          {feature}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* About Us */}
            <button
              onClick={() => handleNavigation("/about-us")}
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/about-us") ? "text-blue-600" : ""
              }`}
            >
              About Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/about-us") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>

            {/* Pricing */}
            <button
              onClick={() => handleNavigation("/pricing")}
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/pricing") ? "text-blue-600" : ""
              }`}
            >
              Pricing
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/pricing") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>

            {/* Contact Us */}
            <button
              onClick={() => handleNavigation("/contact-us")}
              className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group ${
                isActive("/contact-us") ? "text-blue-600" : ""
              }`}
            >
              Contact Us
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive("/contact-us") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavigation("/request-demo")}
              className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Request Demo
            </button>
            <button 
              onClick={() => handleNavigation("/send-enquiry")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
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
            <button
              onClick={() => handleNavigation("/")}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/features")}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation("/about-us")}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 w-full text-left"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation("/pricing")}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation("/contact-us")}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 w-full text-left"
            >
              Contact Us
            </button>
            <div className="px-4 pt-4 space-y-2">
              <button 
                onClick={() => handleNavigation("/request-demo")}
                className="w-full sm:w-auto bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 block text-center"
              >
                Request Demo
              </button>
              <button 
                onClick={() => handleNavigation("/send-enquiry")}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl transition-all duration-300 block text-center"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
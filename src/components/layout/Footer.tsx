// src/components/layout/Footer.tsx
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (path: string) => {
    // Navigate to the route
    window.location.hash = path;
    // Scroll to top after navigation
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <img 
                  src={require("../../assets/hrmslogo.png")} 
                  alt="SYNC HRMS Logo" 
                  className="w-21 h-20 object-contain"
                />
                <p className="text-blue-200 text-lg">By Tanasvi Technologies</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing HR management with AI-powered solutions and advanced security features for the modern workplace.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Twitter", icon: Twitter, link: "#" },
                { name: "LinkedIn", icon: Linkedin, link: "#" },
                { name: "Facebook", icon: Facebook, link: "#" },
                { name: "Instagram", icon: Instagram, link: "#" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {([
            ["Company", [
              { name: "Home", path: "/", scrollToTop: true },
              { name: "Features", path: "/features", scrollToTop: true },
              { name: "About Us", path: "/about-us", scrollToTop: true },
              { name: "Contact Us", path: "/contact-us", scrollToTop: true }, 
              { name: "Pricing", path: "/pricing", scrollToTop: true }
            ]],
            ["Resources", [
              { name: "Help Center", path: "/helpdesk", scrollToTop: true },
              { name: "Documentation", path: "/documentation", scrollToTop: true },
              
            ]],
            ["Legal", [
              { name: "Privacy Policy", path: "/privacy", scrollToTop: true },
              { name: "Terms & Conditions", path: "/terms", scrollToTop: true },
              { name: "Security", path: "/security", scrollToTop: true },
              { name: "Compliance", path: "/compliance", scrollToTop: true }
            ]]
          ] as [string, { name: string, path: string, scrollToTop: boolean }[]][]).map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column[0]}</h4>
              <ul className="space-y-2">
                {column[1].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={scrollToTop}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/privacy" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/security" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Security
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2025 Tanasvi Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
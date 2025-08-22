import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
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
                  className="w-20 h-20 object-contain"
                />
                <p className="text-blue-200">By Tanasvi Technologies</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing HR management with AI-powered solutions and advanced security features for the modern workplace.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Twitter", icon: Twitter },
                { name: "LinkedIn", icon: Linkedin },
                { name: "Facebook", icon: Facebook },
                { name: "Instagram", icon: Instagram }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {([
            ["Company", ["Home", "Features", "Services", "About Us"]],
            ["Resources", ["Help Center", "Documentation"]],
            ["Legal", ["Privacy Policy", "Terms & Conditions", "Security", "Compliance"]],
          ] as [string, string[]][]).map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column[0]}</h4>
              <ul className="space-y-2">
                {column[1].map((item: string) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tanasvi Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
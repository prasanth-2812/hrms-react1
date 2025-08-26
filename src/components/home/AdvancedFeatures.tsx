import React from "react";
import { advancedFeatures } from "../../data/featuresData";
import { Feature } from "../../types";
import { 
  Shield, 
  Brain, 
  Fingerprint, 
  Lock, 
  Server, 
  Network, 
  Database, 
  Cpu, 
  MapPin, 
  AlertTriangle,
  CheckCircle,
  Zap,
  User,
  Locate,
  Clock
} from "lucide-react";

const AdvancedFeatures: React.FC = () => {
  const getIconComponent = (title: string) => {
    switch(title) {
      case "Private LLM":
        return <Brain className="w-6 h-6" />;
      case "Face Recognition":
        return <User className="w-6 h-6" />;
      case "Geo-Fencing Attendance":
        return <MapPin className="w-6 h-6" />;
      case "Geo-Fencing":
        return <MapPin className="w-6 h-6" />;
      case "Payroll Engine":
        return <Database className="w-6 h-6" />;
      case "Advanced Encryption":
        return <Lock className="w-6 h-6" />;
      case "Biometric Authentication":
        return <Fingerprint className="w-6 h-6" />;
      case "Real-time Monitoring":
        return <Zap className="w-6 h-6" />;
      case "Compliance Management":
        return <CheckCircle className="w-6 h-6" />;
      case "Risk Assessment":
        return <AlertTriangle className="w-6 h-6" />;
      case "Secure Data Storage":
        return <Server className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Advanced
            </span>{" "}
            Security & AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation security and AI capabilities that redefine workforce management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {advancedFeatures.map((feature: Feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                    {getIconComponent(feature.title)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System Architecture Visualization */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Architecture</h3>
              <div className="space-y-4">
                {[
                  { name: "Private LLM", color: "from-blue-600 to-indigo-600", icon: <Brain className="w-4 h-4" /> },
                  { name: "Face Recognition", color: "from-indigo-500 to-purple-500", icon: <User className="w-4 h-4" /> },
                  { name: "Geo-Fencing", color: "from-purple-500 to-pink-500", icon: <MapPin className="w-4 h-4" /> },
                  { name: "Payroll Engine", color: "from-pink-500 to-red-500", icon: <Database className="w-4 h-4" /> },
                ].map((block, i) => (
                  <React.Fragment key={i}>
                    <div className={`flex items-center justify-between p-3 bg-gradient-to-r ${block.color} text-white rounded-lg`}>
                      <div className="flex items-center space-x-2">
                        {block.icon}
                        <span>{block.name}</span>
                      </div>
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </div>
                    {i < 3 && (
                      <div className="flex items-center justify-center">
                        <div className="w-px h-8 bg-gray-300"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Floating Dots */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-ping delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
import { features } from "../../data/featuresData";
import { Feature } from "../../types";
import { 
  Briefcase, 
  Users, 
  Calendar, 
  DollarSign, 
  Shield, 
  MessageCircle, 
  TrendingUp, 
  FileText, 
  Clock, 
  BarChart2, 
  Settings, 
  UserCheck,
  Bot,
  Rocket,
  Target,
  ChartLine,
  Wallet,
  MapPin,
  CheckCircle,
  Send,
  Handshake,
  Building2
} from "lucide-react";

const Features: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case "AI-Powered Recruitment":
        return <Target className="w-10 h-10 text-blue-600" />;
      case "Smart Onboarding Assistant":
        return <Rocket className="w-10 h-10 text-blue-600" />;
      case "Employee Self-Service Chatbot":
        return <Bot className="w-10 h-10 text-blue-600" />;
      case "Performance & Productivity Insights":
        return <ChartLine className="w-10 h-10 text-blue-600" />;
      case "Payroll & Compliance Automation":
        return <Wallet className="w-10 h-10 text-blue-600" />;
      case "Attendance":
        return <MapPin className="w-10 h-10 text-blue-600" />;
      case "Leaves":
        return <Calendar className="w-10 h-10 text-blue-600" />;
      case "Helpdesk":
        return <Send className="w-10 h-10 text-blue-600" />;
      case "Onboarding":
        return <UserCheck className="w-10 h-10 text-blue-600" />;
      case "Exit Management":
        return <Handshake className="w-10 h-10 text-blue-600" />;
      case "Performance Management":
        return <TrendingUp className="w-10 h-10 text-blue-600" />;
      case "Payroll":
        return <DollarSign className="w-10 h-10 text-blue-600" />;
      default:
        return <Briefcase className="w-10 h-10 text-blue-600" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Driven{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of HR management with our cutting-edge AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: Feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {getIconComponent(feature.title)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
// src/components/home/Features.tsx
import { Link } from "react-router-dom";
import { 
  Target, 
  Rocket, 
  Bot, 
  BarChart2, 
  DollarSign, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  CheckCircle, 
  DoorOpen, 
  TrendingUp, 
  CreditCard,
  Flag,
  ClipboardCheck,
  RefreshCw,
  Users,
  Clock,
  Check,
  TrendingUp as TrendingUpIcon,
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

const featureList = [
  {
    id: "ai-powered-recruitment",
    title: "AI-Powered Recruitment",
    icon: <Target className="w-10 h-10 text-blue-600" />,
    description: "Intelligent resume parsing & candidate-job fit analysis with chatbot-based pre-screening"
  },
  {
    id: "smart-onboarding-assistant",
    title: "Smart Onboarding Assistant",
    icon: <Rocket className="w-10 h-10 text-blue-600" />,
    description: "AI-guided onboarding with automated document checks and personalized journeys"
  },
  {
    id: "employee-self-service-chatbot",
    title: "Employee Self-Service Chatbot",
    icon: <Bot className="w-10 h-10 text-blue-600" />,
    description: "24/7 natural language queries for leave, payroll, and policies in multiple languages"
  },
  {
    id: "performance-productivity-insights",
    title: "Performance & Productivity Insights",
    icon: <BarChart2 className="w-10 h-10 text-blue-600" />,
    description: "Data-driven evaluation with burnout detection and personalized training suggestions"
  },
  {
    id: "payroll-compliance-automation",
    title: "Payroll & Compliance Automation",
    icon: <DollarSign className="w-10 h-10 text-blue-600" />,
    description: "AI-driven salary, tax, and compliance accuracy with auto-updates for Indian labor laws"
  },
  {
    id: "attendance",
    title: "Attendance",
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
    description: "Geo-fencing & face recognition for zero proxy attendance"
  },
  {
    id: "leaves",
    title: "Leaves",
    icon: <Calendar className="w-10 h-10 text-blue-600" />,
    description: "Automated leave balance, approval workflows, and policy enforcement"
  },
  {
    id: "helpdesk",
    title: "Helpdesk",
    icon: <MessageCircle className="w-10 h-10 text-blue-600" />,
    description: "Ticketing system for HR queries with SLA tracking"
  },
  {
    id: "onboarding",
    title: "Onboarding",
    icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    description: "Digital onboarding with e-sign, document upload, and checklist tracking"
  },
  {
    id: "exit-management",
    title: "Exit Management",
    icon: <DoorOpen className="w-10 h-10 text-blue-600" />,
    description: "Streamlined offboarding with clearance, feedback, and exit interviews"
  },
  {
    id: "performance-management",
    title: "Performance Management",
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    description: "OKR tracking, 360 feedback, and review cycles"
  },
  {
    id: "payroll",
    title: "Payroll",
    icon: <CreditCard className="w-10 h-10 text-blue-600" />,
    description: "Seamless salary processing with tax and compliance integration"
  },
  {
    id: "activity-report-logging",
    title: "Activity Report Logging",
    icon: <Flag className="w-10 h-10 text-blue-600" />,
    description: "Real-time tracking and reporting of field activities with instant meeting reporting and follow-up tracking"
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            All <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how Synchrm transforms HR with AI, automation, and advanced security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/features/${feature.id}`}
                className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 block h-full"
              >
                <div className="flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
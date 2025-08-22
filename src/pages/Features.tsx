// src/pages/Features.tsx
import { Link } from "react-router-dom";

const featureList = [
  {
    id: "ai-powered-recruitment",
    title: "AI-Powered Recruitment",
    icon: "🎯",
    description: "Intelligent resume parsing & candidate-job fit analysis with chatbot-based pre-screening"
  },
  {
    id: "smart-onboarding-assistant",
    title: "Smart Onboarding Assistant",
    icon: "🚀",
    description: "AI-guided onboarding with automated document checks and personalized journeys"
  },
  {
    id: "employee-self-service-chatbot",
    title: "Employee Self-Service Chatbot",
    icon: "🤖",
    description: "24/7 natural language queries for leave, payroll, and policies in multiple languages"
  },
  {
    id: "performance-productivity-insights",
    title: "Performance & Productivity Insights",
    icon: "📊",
    description: "Data-driven evaluation with burnout detection and personalized training suggestions"
  },
  {
    id: "payroll-compliance-automation",
    title: "Payroll & Compliance Automation",
    icon: "💰",
    description: "AI-driven salary, tax, and compliance accuracy with auto-updates for Indian labor laws"
  },
  {
    id: "attendance",
    title: "Attendance",
    icon: "📍",
    description: "Geo-fencing & face recognition for zero proxy attendance"
  },
  {
    id: "leaves",
    title: "Leaves",
    icon: "📅",
    description: "Automated leave balance, approval workflows, and policy enforcement"
  },
  {
    id: "helpdesk",
    title: "Helpdesk",
    icon: "🛎️",
    description: "Ticketing system for HR queries with SLA tracking"
  },
  {
    id: "onboarding",
    title: "Onboarding",
    icon: "✅",
    description: "Digital onboarding with e-sign, document upload, and checklist tracking"
  },
  {
    id: "exit-management",
    title: "Exit Management",
    icon: "🚪",
    description: "Streamlined offboarding with clearance, feedback, and exit interviews"
  },
  {
    id: "performance-management",
    title: "Performance Management",
    icon: "📈",
    description: "OKR tracking, 360 feedback, and review cycles"
  },
  {
    id: "payroll",
    title: "Payroll",
    icon: "💳",
    description: "Seamless salary processing with tax and compliance integration"
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
          {featureList.map((feature) => (
            <Link
              key={feature.id}
              to={`/features/${feature.id}`}
              className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
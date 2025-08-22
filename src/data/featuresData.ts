import { Feature } from "../types";

export const features: Feature[] = [
  {
    title: "AI-Powered Recruitment",
    description: "Intelligent resume parsing & candidate-job fit analysis with chatbot-based pre-screening",
    icon: "🎯"
  },
  {
    title: "Smart Onboarding Assistant",
    description: "AI-guided onboarding with automated document checks and personalized journeys",
    icon: "🚀"
  },
  {
    title: "Employee Self-Service Chatbot",
    description: "24/7 natural language queries for leave, payroll, and policies in multiple languages",
    icon: "🤖"
  },
  {
    title: "Performance & Productivity Insights",
    description: "Data-driven evaluation with burnout detection and personalized training suggestions",
    icon: "📊"
  },
  {
    title: "Attrition & Retention Prediction",
    description: "Predicts resignations before they happen with actionable insights for HR intervention",
    icon: "🔮"
  },
  {
    title: "Payroll & Compliance Automation",
    description: "AI-driven salary, tax, and compliance accuracy with auto-updates for Indian labor laws",
    icon: "💰"
  }
];

export const advancedFeatures: Feature[] = [
  {
    title: "Geo-Fencing Attendance",
    description: "Employees check-in/out only within defined office zones, preventing proxy attendance",
    icon: "📍"
  },
  {
    title: "Face Recognition",
    description: "AI-based biometric login prevents buddy punching with contactless authentication",
    icon: "👁"
  },
  {
    title: "Private LLM",
    description: "All AI data stays in your private cloud/on-premise with customizable HR policies",
    icon: "🔒"
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹299",
    period: "/month",
    features: [
      "Up to 50 employees",
      "Basic HR & Payroll",
      "Attendance Management",
      "Leave Management",
      "Email Support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "₹799",
    period: "/month",
    features: [
      "Up to 200 employees",
      "All Starter features",
      "AI-Powered Recruitment",
      "Performance Management",
      "24/7 Priority Support",
      "Advanced Analytics"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited employees",
      "All Professional features",
      "Private LLM Integration",
      "Face Recognition",
      "Geo-Fencing",
      "Dedicated Account Manager",
      "Custom Development"
    ],
    popular: false
  }
];
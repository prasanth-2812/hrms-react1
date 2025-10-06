// src/pages/Pricing.tsx
import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Check, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  Brain, 
  MapPin, 
  Fingerprint,
  Server,
  Lock,
  BarChart3,
  Bot,
  Target,
  Rocket,
  Calendar,
  DollarSign,
  MessageCircle,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle,
  X
} from "lucide-react";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Additional scroll to top with delay as backup
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);

  const handlePlanClick = (planName: string) => {
    // Scroll to top first
    window.scrollTo(0, 0);
    // Navigate to contact page
    navigate('/contact-us');
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹10",
      period: "/user/month",
      description: "Perfect for small teams getting started",
      features: [
        { name: "Basic HR & Payroll Management", included: true },
        { name: "Attendance Management", included: true },
        { name: "Leave Management", included: true },
        { name: "Employee Self-Service Portal", included: true },
        { name: "Basic Reporting & Analytics", included: true },
        { name: "Email Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "AI-Powered Recruitment", included: false },
        { name: "Performance Management", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Face Recognition", included: false },
        { name: "Geo-Fencing", included: false },
        { name: "Private LLM Integration", included: false },
        { name: "24/7 Priority Support", included: false }
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "₹20",
      period: "/user/month",
      description: "Advanced features for growing businesses",
      features: [
        { name: "All Starter Features", included: true },
        { name: "AI-Powered Recruitment", included: true },
        { name: "Smart Onboarding Assistant", included: true },
        { name: "Employee Self-Service Chatbot", included: true },
        { name: "Performance & Productivity Insights", included: true },
        { name: "Performance Management", included: true },
        { name: "Advanced Analytics & Reporting", included: true },
        { name: "Multi-location Support", included: true },
        { name: "Custom Workflows", included: true },
        { name: "Face Recognition Authentication", included: true },
        { name: "Geo-Fencing Attendance", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Private LLM Integration", included: false },
        { name: "On-premise Deployment", included: false }
      ],
      popular: true,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Complete solution for large organizations",
      features: [
        { name: "All Professional Features", included: true },
        { name: "Private LLM Integration", included: true },
        { name: "Face Recognition Authentication", included: true },
        { name: "Geo-Fencing Attendance", included: true },
        { name: "Advanced Security & Encryption", included: true },
        { name: "On-premise Deployment", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Custom Development", included: true },
        { name: "Unlimited Users", included: true },
        { name: "White-label Solution", included: true },
        { name: "API Access", included: true },
        { name: "Advanced Compliance", included: true },
        { name: "Custom Integrations", included: true },
        { name: "Priority Feature Requests", included: true }
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const formatPrice = (price: string, isAnnual: boolean) => {
    if (price === "Custom") return "Custom";
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (isAnnual) {
      const yearlyPrice = Math.round(numericPrice * 0.8 * 12);
      return `₹${yearlyPrice}/user/yr`;
    }
    return `₹${numericPrice}/user/mo`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Per-User Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Pay only for what you use. Scale as your team grows with our comprehensive HRMS platform.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex justify-center items-center mb-12">
              <span className={`mr-4 text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                  isAnnual ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                    isAnnual ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annual <span className="text-green-600 font-semibold">(Save 20%)</span>
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  plan.popular ? "scale-105 z-10 border-2 border-blue-200" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-blue-600">
                        {formatPrice(plan.price, isAnnual)}
                      </span>
                    </div>
                    {plan.price !== "Custom" && (
                      <p className="text-sm text-gray-500">Per user pricing - scale as you grow</p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          feature.included ? 'text-green-600' : 'text-gray-300'
                        }`}>
                          {feature.included ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <X className="w-5 h-5" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                   <button
                     onClick={() => handlePlanClick(plan.name)}
                     className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                       plan.popular
                         ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                         : "bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                     }`}
                   >
                     {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                   </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Complete Feature Comparison
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Core Features</h3>
                {[
                  "HR & Payroll Management",
                  "Attendance Management", 
                  "Leave Management",
                  "Employee Self-Service",
                  "Basic Reporting"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">AI Features</h3>
                {[
                  "AI-Powered Recruitment",
                  "Smart Onboarding",
                  "Employee Chatbot",
                  "Performance Insights",
                  "Productivity Analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Advanced Security</h3>
                {[
                  "Face Recognition",
                  "Geo-Fencing",
                  "Private LLM",
                  "Advanced Encryption",
                  "Biometric Auth"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Support & Scale</h3>
                {[
                  "24/7 Support",
                  "Dedicated Manager",
                  "Custom Development",
                  "API Access",
                  "White-label"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
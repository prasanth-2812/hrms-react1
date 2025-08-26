import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Shield,
  Users,
  FileText,
  Clock,
  Video,
  Zap
} from "lucide-react";

// Feature-specific images (using placeholder images from placehold.co)
const getFeatureImage = (featureId: string) => {
  const images = {
    'ai-powered-recruitment': 'https://placehold.co/600x400/1e40af/ffffff?text=AI+Recruitment',
    'smart-onboarding-assistant': 'https://placehold.co/600x400/1e40af/ffffff?text=Smart+Onboarding',
    'employee-self-service-chatbot': 'https://placehold.co/600x400/1e40af/ffffff?text=AI+Chatbot',
    'performance-productivity-insights': 'https://placehold.co/600x400/1e40af/ffffff?text=Performance+Analytics',
    'payroll-compliance-automation': 'https://placehold.co/600x400/1e40af/ffffff?text=Payroll+Automation',
    'attendance': 'https://placehold.co/600x400/1e40af/ffffff?text=Attendance+System',
    'leaves': 'https://placehold.co/600x400/1e40af/ffffff?text=Leave+Management',
    'helpdesk': 'https://placehold.co/600x400/1e40af/ffffff?text=HR+Helpdesk',
    'onboarding': 'https://placehold.co/600x400/1e40af/ffffff?text=Digital+Onboarding',
    'exit-management': 'https://placehold.co/600x400/1e40af/ffffff?text=Exit+Management',
    'performance-management': 'https://placehold.co/600x400/1e40af/ffffff?text=Performance+Review',
    'payroll': 'https://placehold.co/600x400/1e40af/ffffff?text=Payroll+Processing'
  };
  return images[featureId as keyof typeof images] || 'https://placehold.co/600x400/1e40af/ffffff?text=Feature+Image';
};

// Get appropriate icon for each feature
const getFeatureIcon = (featureId: string) => {
  switch(featureId) {
    case 'ai-powered-recruitment': return <Target className="w-12 h-12" />;
    case 'smart-onboarding-assistant': return <Rocket className="w-12 h-12" />;
    case 'employee-self-service-chatbot': return <Bot className="w-12 h-12" />;
    case 'performance-productivity-insights': return <BarChart2 className="w-12 h-12" />;
    case 'payroll-compliance-automation': return <DollarSign className="w-12 h-12" />;
    case 'attendance': return <MapPin className="w-12 h-12" />;
    case 'leaves': return <Calendar className="w-12 h-12" />;
    case 'helpdesk': return <MessageCircle className="w-12 h-12" />;
    case 'onboarding': return <CheckCircle className="w-12 h-12" />;
    case 'exit-management': return <DoorOpen className="w-12 h-12" />;
    case 'performance-management': return <TrendingUp className="w-12 h-12" />;
    case 'payroll': return <CreditCard className="w-12 h-12" />;
    default: return <Zap className="w-12 h-12" />;
  }
};

// Get color scheme for each feature
const getFeatureColor = (featureId: string) => {
  const colors = {
    'ai-powered-recruitment': 'from-blue-500 to-indigo-600',
    'smart-onboarding-assistant': 'from-indigo-500 to-purple-600',
    'employee-self-service-chatbot': 'from-purple-500 to-pink-600',
    'performance-productivity-insights': 'from-pink-500 to-red-600',
    'payroll-compliance-automation': 'from-red-500 to-orange-600',
    'attendance': 'from-orange-500 to-yellow-600',
    'leaves': 'from-yellow-500 to-green-600',
    'helpdesk': 'from-green-500 to-emerald-600',
    'onboarding': 'from-emerald-500 to-teal-600',
    'exit-management': 'from-teal-500 to-cyan-600',
    'performance-management': 'from-cyan-500 to-sky-600',
    'payroll': 'from-sky-500 to-blue-600'
  };
  return colors[featureId as keyof typeof colors] || 'from-blue-500 to-indigo-600';
};

interface FeatureTemplateProps {
  title: string;
  description: string;
  featureId: string;
  children: React.ReactNode;
}

const FeatureTemplate: React.FC<FeatureTemplateProps> = ({ 
  title, 
  description,
  featureId,
  children 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Feature-specific benefits
  const benefits = {
    'ai-powered-recruitment': [
      'Reduces hiring time by 60% with AI-powered candidate matching',
      'Automates resume screening with 95% accuracy',
      'Conducts intelligent pre-screening interviews via chatbot',
      'Identifies best-fit candidates based on skills, experience, and cultural fit'
    ],
    'smart-onboarding-assistant': [
      'Reduces onboarding time from weeks to hours',
      'Automates document verification and compliance checks',
      'Provides personalized onboarding journey for each new hire',
      'Integrates with HR, IT, and facilities for seamless setup'
    ],
    'employee-self-service-chatbot': [
      'Provides 24/7 support for HR queries in multiple languages',
      'Handles 80% of routine HR queries without human intervention',
      'Answers questions about leave balance, payroll, policies, and benefits',
      'Integrates with knowledge base for continuous learning'
    ],
    'performance-productivity-insights': [
      'Provides real-time productivity analytics and insights',
      'Identifies burnout risks with predictive analytics',
      'Recommends personalized training and development paths',
      'Tracks OKRs and provides performance improvement suggestions'
    ],
    'payroll-compliance-automation': [
      'Automates salary processing with 100% accuracy',
      'Auto-updates for Indian labor laws and tax regulations',
      'Generates compliant payslips and tax documents',
      'Integrates with banks for seamless salary disbursement'
    ],
    'attendance': [
      'Eliminates proxy attendance with geo-fencing and face recognition',
      'Automates attendance tracking across multiple locations',
      'Integrates with leave and payroll systems for accurate calculations',
      'Provides real-time attendance monitoring and alerts'
    ],
    'leaves': [
      'Automates leave balance calculation and accruals',
      'Streamlines approval workflows with role-based rules',
      'Enforces leave policies consistently across the organization',
      'Integrates with attendance and payroll systems'
    ],
    'helpdesk': [
      'Centralized ticketing system for all HR queries',
      'SLA-based tracking and escalation for timely resolution',
      'Knowledge base integration for self-service support',
      'Analytics dashboard for identifying common issues and trends'
    ],
    'onboarding': [
      'Digital onboarding with e-signature capabilities',
      'Automated document collection and verification',
      'Checklist-based tracking for complete onboarding',
      'Integration with HR, IT, and facilities for seamless setup'
    ],
    'exit-management': [
      'Streamlined offboarding process with digital clearance',
      'Automated exit interviews and feedback collection',
      'Knowledge transfer and handover management',
      'Final settlement processing with compliance checks'
    ],
    'performance-management': [
      'OKR tracking with progress visualization',
      '360-degree feedback collection and analysis',
      'Performance review cycles with automated reminders',
      'Development planning and goal setting'
    ],
    'payroll': [
      'Seamless salary processing with multiple pay components',
      'Tax calculation and compliance with Indian regulations',
      'Multiple disbursement options including bank transfer',
      'Payslip generation and distribution'
    ]
  };

  const featureBenefits = benefits[featureId as keyof typeof benefits] || [];

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
        
        {/* Animated Header Banner */}
        <motion.div 
          className={`relative overflow-hidden bg-gradient-to-r ${getFeatureColor(featureId)} text-white`}
          variants={itemVariants}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-52 h-52 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-white rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <motion.div variants={itemVariants}>
              <Link
                to="/features"
                className="inline-flex items-center space-x-2 text-blue-100 hover:text-white hover:underline mb-6 transition-colors duration-300 group"
              >
                <svg 
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to All Features</span>
              </Link>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                className="flex-shrink-0"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-white shadow-xl border border-white/30">
                  {getFeatureIcon(featureId)}
                </div>
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-blue-100 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-white to-transparent transform translate-y-1"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            variants={itemVariants}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Feature Image Section */}
            <motion.div 
              className="relative h-72 lg:h-96 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={getFeatureImage(featureId)} 
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                <p className="text-blue-100 mt-2">{description}</p>
              </div>
            </motion.div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {children}
                </motion.div>

                <motion.div 
                  className="space-y-8"
                  variants={itemVariants}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Key Benefits */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Benefits
                    </h3>
                    <ul className="space-y-4">
                      {featureBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature Metrics */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact Metrics</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-3xl font-bold text-blue-600">60%</div>
                        <div className="text-sm text-gray-600">Time Saved</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <div className="text-3xl font-bold text-green-600">95%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-3xl font-bold text-purple-600">3x</div>
                        <div className="text-sm text-gray-600">Efficiency</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-3xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Features */}
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Key Features
                    </h3>
                    <div className="space-y-3">
                      {[
                        'AI-powered automation',
                        'Real-time analytics',
                        'Mobile accessibility',
                        'Role-based access control',
                        'Data encryption & security',
                        'API integration capabilities'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 lg:p-12"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold mb-2">Ready to transform your HR processes?</h3>
                  <p className="text-blue-100">Schedule a personalized demo to see how our solution can benefit your organization.</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/request-demo" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                  >
                    Request Demo
                  </Link>
                  <Link 
                    to="/contact-sales" 
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
      </div>
    </motion.div>
  );
};

export default FeatureTemplate;
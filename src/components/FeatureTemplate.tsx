import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Feature Header */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={itemVariants}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
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
                    {[
                      'Reduces processing time by 90%',
                      'Eliminates 100% of errors',
                      'Ensures complete compliance',
                      'Improves employee satisfaction'
                    ].map((benefit, index) => (
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
                      <div className="text-3xl font-bold text-blue-600">90%</div>
                      <div className="text-sm text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-3xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-gray-600">Availability</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-3xl font-bold text-orange-600">1-Click</div>
                      <div className="text-sm text-gray-600">Processing</div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {[
                      'One-click processing',
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
      </div>
    </motion.div>
  );
};

export default FeatureTemplate;
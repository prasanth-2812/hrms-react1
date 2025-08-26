import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface FeatureTemplateProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  description?: string;
  image?: string;
  benefits?: string[];
}

const FeatureTemplate: React.FC<FeatureTemplateProps> = ({ 
  title, 
  icon, 
  children,
  description = "",
  image,
  benefits = []
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
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
        
        {/* Reduced Height Header Banner */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-52 h-52 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div 
                className="flex-shrink-0"
                variants={itemVariants}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl border border-white/30">
                  {icon}
                </div>
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  className="text-3xl lg:text-4xl font-bold mb-3 leading-tight"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>
                {description && (
                  <motion.p 
                    className="text-lg text-blue-100 leading-relaxed max-w-3xl"
                    variants={itemVariants}
                  >
                    {description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-white to-transparent transform translate-y-1"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8"
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
            {image && (
              <motion.div 
                className="relative h-64 lg:h-80 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                  {description && (
                    <p className="text-blue-100 mt-2">{description}</p>
                  )}
                </div>
              </motion.div>
            )}

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
                  className="space-y-6"
                  variants={itemVariants}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {benefits.length > 0 && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Benefits
                      </h3>
                      <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Feature Stats */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Feature Impact</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">75%</div>
                        <div className="text-sm text-gray-600">Time Saved</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">95%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">3x</div>
                        <div className="text-sm text-gray-600">Efficiency</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
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
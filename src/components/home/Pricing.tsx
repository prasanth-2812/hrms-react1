import { pricingPlans } from "../../data/featuresData";
import { Plan } from "../../types";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Simple animation trigger without useInView
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Function to format price for per-user pricing
  const formatPriceInINR = (price: string, isAnnual: boolean) => {
    // Extract numeric value from price string (removing ₹ and other chars)
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    
    if (price === "Custom") {
      return "Custom";
    }
    
    if (isAnnual) {
      // For annual pricing, calculate yearly price with 20% discount
      const yearlyPrice = Math.round(numericPrice * 0.8 * 12);
      return `₹${yearlyPrice}/user/yr`;
    } else {
      // For monthly, format with per-user pricing
      return `₹${numericPrice}/user/mo`;
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Per-User Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">Pay only for what you use - scale as your team grows</p>
            
            {/* Toggle for monthly/annual pricing */}
            <div className="flex justify-center items-center mb-12">
              <span className={`mr-4 text-sm font-medium ${isMonthly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsMonthly(!isMonthly)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                  isMonthly ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    isMonthly ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 text-sm font-medium ${isMonthly ? 'text-gray-500' : 'text-gray-900'}`}>
                Annual <span className="text-green-600 font-semibold">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {pricingPlans.map((plan: Plan, index) => {
            // Adjust price based on monthly/annual toggle
            const displayPrice = formatPriceInINR(plan.price, !isMonthly);
            const originalMonthlyPrice = plan.price === "Custom" ? 0 : parseFloat(plan.price.replace(/[^0-9.]/g, ''));
            const originalYearlyPrice = originalMonthlyPrice * 12;
            
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  plan.popular ? "scale-105 z-10" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <div className="p-8">
                  <motion.div 
                    className="flex items-center justify-between mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    {plan.popular && (
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </motion.div>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-5xl font-bold text-blue-600">{displayPrice}</span>
                    {!isMonthly && plan.price !== "Custom" && originalMonthlyPrice > 0 && (
                      <div className="text-sm text-gray-500 mt-1">
                        <span className="line-through">₹{originalYearlyPrice}/user/yr</span>
                      </div>
                    )}
                    {plan.price !== "Custom" && (
                      <div className="text-sm text-gray-600 mt-2">
                        Per user pricing - scale as you grow
                      </div>
                    )}
                  </motion.div>

                  <motion.ul 
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                      >
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: plan.popular 
                        ? "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
                        : "0 20px 25px -5px rgba(156, 163, 175, 0.3), 0 10px 10px -5px rgba(156, 163, 175, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-2xl"
                        : "bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute -left-20 -top-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Pricing;
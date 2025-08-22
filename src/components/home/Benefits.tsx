// src/components/home/Benefits.tsx
const Benefits: React.FC = () => {
  const benefits = [
    "Zero proxy attendance with advanced biometric verification",
    "Seamless & secure authentication across all devices",
    "Accurate payroll linked with real-time attendance data",
    "Complete workforce visibility across multiple locations",
    "End-to-end AI-powered employee lifecycle management",
    "Data security with private LLM technology"
  ];

  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Synchrm?
              </span>
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">AI-Powered Insights</span>
              </div>
              <p className="text-gray-600">
                Predictive analytics for workforce planning and retention strategies
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Statistics</h3>
              <div className="space-y-6">
                {[
                  { label: "Attendance Accuracy", value: "99.8%" },
                  { label: "Payroll Processing Time", value: "75% Faster" },
                  { label: "Employee Satisfaction", value: "92%" },
                  { label: "Compliance Rate", value: "100%" },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{stat.label}</span>
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating AI Badge */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-lg animate-bounce">
              AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
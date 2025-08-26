import FeatureTemplate from "../../components/FeatureTemplate";

const PerformanceManagement = () => {
  return (
    <FeatureTemplate 
      title="Performance Management" 
      description="End-to-end performance management with OKR tracking, 360 feedback, and AI-driven development planning"
      featureId="performance-management"
    >
      <p className="mb-6">
        Our comprehensive Performance Management system transforms traditional annual reviews into a continuous, data-driven process that drives employee growth and organizational success. The platform combines goal setting, progress tracking, feedback collection, and development planning into a seamless workflow that aligns individual performance with organizational objectives.
      </p>
      
      <p className="mb-6">
        Managers and employees collaborate to set SMART goals aligned with organizational OKRs (Objectives and Key Results) and departmental KPIs. The system provides real-time visibility into goal progress with automated reminders, milestone tracking, and predictive analytics that identify potential roadblocks before they impact performance.
      </p>
      
      <p className="mb-6">
        Our AI-powered feedback engine facilitates continuous performance conversations with structured check-ins, 360-degree feedback collection, and sentiment analysis. The intelligent system analyzes performance data to identify skill gaps, recommend personalized development plans, and predict high-potential employees for leadership roles.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Performance Capabilities</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>OKR & Goal Management:</strong> Collaborative goal setting with cascading objectives from organizational to individual levels, milestone tracking, and progress visualization
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Continuous Feedback:</strong> Scheduled check-ins, ad-hoc feedback, and 360-degree reviews with anonymous peer feedback options and sentiment analysis
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>AI-Powered Insights:</strong> Predictive analytics that identify high-potential employees, skill gaps, and retention risks based on performance patterns
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Calibration & Rating:</strong> Facilitated calibration sessions with distribution analytics to ensure fair and consistent performance ratings across teams
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Development Planning:</strong> Personalized learning paths with recommended courses, projects, and mentoring opportunities based on performance data
            </div>
          </li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Increases goal achievement rate by 65%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduces performance review time by 70%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves employee engagement by 55%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Identifies 90% of high-potential employees</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Integration & Analytics</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Integration with rewards and promotion systems</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Real-time performance dashboards and reports</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Calibration tools for consistent rating distribution</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Integration with learning management systems</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
        <h4 className="font-semibold text-lg mb-3">Intelligent Performance Insights</h4>
        <p className="mb-4">
          Our AI-powered analytics transform performance data into actionable insights for talent development. The system identifies patterns in high performance, predicts future potential, and recommends targeted development interventions to maximize employee growth and organizational impact.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">90%</div>
            <div className="text-sm opacity-90">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold">360°</div>
            <div className="text-sm opacity-90">Feedback</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Accessibility</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 200 organizations across technology, finance, healthcare, and manufacturing sectors, our Performance Management system facilitates more than 50,000 performance reviews annually with 95% completion rates and 4.7/5 satisfaction scores. The platform not only streamlines administrative processes but also creates a culture of continuous feedback and development that drives organizational performance. With AI-powered insights, seamless integration across talent management functions, and mobile accessibility, our solution transforms performance management from an annual event into a strategic driver of employee engagement and business success.
      </p>
    </FeatureTemplate>
  );
};

export default PerformanceManagement;
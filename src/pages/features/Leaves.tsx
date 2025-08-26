import FeatureTemplate from "../../components/FeatureTemplate";

const Leaves = () => {
  return (
    <FeatureTemplate 
      title="Leaves" 
      description="Automated leave management with intelligent policy enforcement and real-time balance tracking"
      featureId="leaves"
    >
      <p className="mb-6">
        Our comprehensive Leave Management system transforms employee time-off requests into a seamless, automated process that ensures policy compliance while enhancing employee experience. The platform combines intelligent automation with human oversight to handle all aspects of leave management from application to payroll integration.
      </p>
      
      <p className="mb-6">
        Employees can apply for leave through multiple channels including web portal, mobile app, or our AI-powered chatbot using natural language commands like "I need 3 days of sick leave next week." Applications are automatically validated against company policies, leave balances, and team coverage requirements before submission.
      </p>
      
      <p className="mb-6">
        Managers receive instant notifications with comprehensive context including employee leave history, team coverage, and potential workflow impacts. Approval or rejection can be completed in a single click from any device, with automated escalation for overdue decisions to prevent workflow disruptions.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Leave Capabilities</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Intelligent Policy Engine:</strong> Supports 20+ leave types (PL, SL, ML, Paternity, Sabbatical, etc.) with custom accrual rules, carry-forward limits, and encashment policies
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Conflict Detection:</strong> Real-time team calendar with color-coded availability and automatic alerts for coverage gaps or overlapping critical team members
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Automated Calculations:</strong> Real-time leave balance updates with accurate accrual, encashment, and carry-forward calculations based on tenure, attendance, and policy rules
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Smart Workflows:</strong> Custom approval hierarchies with auto-approval rules for low-risk requests and escalation protocols for complex cases
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Seamless Integration:</strong> Bi-directional sync with attendance, payroll, and calendar systems for accurate compensation and scheduling
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
              <span>Reduces leave processing time by 90%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Eliminates errors in leave balance calculations</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves manager response time by 80%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduces payroll discrepancies by 100%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Compliance & Analytics</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Compliant with Indian labor laws and regulations</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Real-time leave forecasting and trend analysis</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Departmental leave pattern analysis</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Integration with public holiday calendars</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
        <h4 className="font-semibold text-lg mb-3">Intelligent Leave Insights</h4>
        <p className="mb-4">
          Our advanced analytics transform leave data into strategic insights for workforce planning. The system identifies patterns in leave usage, predicts future leave requirements, and highlights potential coverage issues before they impact operations.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm opacity-90">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">60s</div>
            <div className="text-sm opacity-90">Processing Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Availability</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 300 organizations across diverse industries, our Leave Management system processes more than 2 million leave transactions annually with 100% accuracy and compliance. The platform not only automates administrative tasks but also provides HR leaders with data-driven insights to optimize workforce planning, improve employee well-being, and ensure business continuity. With intelligent policy enforcement, real-time analytics, and seamless integration across HR systems, our solution transforms leave management from a transactional process into a strategic advantage for modern organizations.
      </p>
    </FeatureTemplate>
  );
};

export default Leaves;
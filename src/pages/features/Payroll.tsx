import FeatureTemplate from "../../components/FeatureTemplate";

const Payroll = () => {
  return (
    <FeatureTemplate 
      title="Payroll" 
      description="Seamless salary processing with automated tax calculations and complete compliance management"
      featureId="payroll"
    >
      <p className="mb-6">
        Our comprehensive Payroll system revolutionizes salary processing with end-to-end automation that ensures accuracy, compliance, and timeliness. The platform handles all aspects of compensation management from basic salary and allowances to complex components like bonuses, arrears, advances, and reimbursements with 100% accuracy.
      </p>
      
      <p className="mb-6">
        With one-click payroll processing, our system automatically calculates salaries based on attendance, leave, and performance data integrated from other HR modules. The platform supports multiple pay cycles, employment types, and complex salary structures while ensuring compliance with Indian labor laws and tax regulations.
      </p>
      
      <p className="mb-6">
        Our intelligent tax engine automatically calculates TDS based on employee declarations, investments, and income, providing real-time tax planning suggestions. The system generates all statutory reports and documents including Form 16, PT returns, ESI, and PF filings with zero manual intervention.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Payroll Capabilities</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>One-Click Processing:</strong> Automated salary calculation with validation checks for attendance, leave, and policy compliance
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Bank Integration:</strong> Seamless NEFT, RTGS, and IMPS transfers with automatic file generation and error handling
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Tax Intelligence:</strong> Automated TDS calculation with real-time tax planning, investment tracking, and Form 16 generation
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Statutory Compliance:</strong> Automatic calculation and filing of PF, ESI, PT, and other statutory contributions with government portal integration
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Advanced Compensation:</strong> Support for bonuses, commissions, arrears, advances, reimbursements, and variable pay components
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
              <span>Reduces payroll processing time by 90%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Eliminates 100% of payroll errors</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Ensures 100% statutory compliance</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves employee trust and satisfaction</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Compliance & Security</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Compliant with Indian Income Tax Act and labor laws</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Automatic updates for tax slabs and regulations</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>End-to-end encryption for sensitive financial data</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Audit trails and role-based access control</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
        <h4 className="font-semibold text-lg mb-3">Intelligent Payroll Processing</h4>
        <p className="mb-4">
          Our AI-powered payroll engine learns from historical data to predict potential issues before processing, such as attendance discrepancies or policy violations. The system provides real-time alerts and recommendations to ensure smooth payroll runs every month.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm opacity-90">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold">1-Click</div>
            <div className="text-sm opacity-90">Processing</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Support</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 400 organizations across diverse industries, our Payroll system processes more than ₹500 crores in salaries monthly with 100% accuracy and compliance. The platform not only automates complex calculations but also provides strategic insights into compensation trends, cost optimization opportunities, and workforce planning. With seamless integration across all HR functions, real-time tax intelligence, and comprehensive compliance management, our solution transforms payroll from a monthly administrative task into a strategic asset that enhances employee trust and organizational efficiency.
      </p>
    </FeatureTemplate>
  );
};

export default Payroll;
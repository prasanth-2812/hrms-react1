import FeatureTemplate from "../../components/FeatureTemplate";

const ExitManagement = () => {
  return (
    <FeatureTemplate 
      title="Exit Management" 
      description="Streamlined offboarding with automated clearance, feedback collection, and retention insights"
      featureId="exit-management"
    >
      <p className="mb-6">
        Our comprehensive Exit Management system transforms the offboarding process into a structured, efficient, and insightful experience. From resignation submission to final settlement, our platform automates every step while capturing valuable feedback to improve employee retention.
      </p>
      
      <p className="mb-6">
        Employees can submit their resignation online through a secure portal, initiating a fully automated offboarding workflow. The system generates a personalized clearance checklist with tasks for each department (IT, HR, Finance, Facilities), sending automated reminders and tracking completion status in real-time.
      </p>
      
      <p className="mb-6">
        Our AI-powered exit interview system provides organizations with honest, actionable feedback while maintaining employee anonymity. The intelligent analysis identifies patterns and trends in resignation reasons, helping HR teams develop targeted retention strategies and improve workplace culture.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Workflow</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Online Resignation Portal:</strong> Secure submission with digital acknowledgment and automated workflow initiation
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Dynamic Clearance Checklist:</strong> Department-specific tasks with automated reminders and approval workflows
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>AI-Powered Exit Interviews:</strong> Intelligent questioning that adapts based on responses to uncover root causes
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Automated Final Settlement:</strong> Accurate calculation of dues including salary, leave encashment, and bonuses
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Retention Analytics:</strong> Advanced reporting that identifies patterns in resignation reasons and high-risk departments
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
              <span>Reduces offboarding time from weeks to days</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Eliminates errors in final settlement calculations</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves feedback collection rate by 70%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduces HR workload by 80% during offboarding</span>
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
              <span>Compliant with Indian labor laws and regulations</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>GDPR and data protection compliant</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>End-to-end encryption for sensitive data</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Role-based access control and audit trails</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
        <h4 className="font-semibold text-lg mb-3">Intelligent Exit Insights</h4>
        <p className="mb-4">
          Our AI-powered analytics transform exit data into actionable insights for organizational improvement. The system identifies patterns in resignation reasons, highlights departments with high turnover, and predicts potential retention risks before they become critical issues.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">85%</div>
            <div className="text-sm opacity-90">Feedback Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">70%</div>
            <div className="text-sm opacity-90">Pattern Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Availability</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 180 organizations across technology, manufacturing, healthcare, and financial services, our Exit Management system processes thousands of offboarding workflows annually with 100% compliance and accuracy. The platform not only ensures a positive final experience for departing employees but also provides HR leaders with data-driven insights to reduce turnover, improve employee satisfaction, and strengthen organizational culture. With automated workflows, intelligent analytics, and secure data handling, our solution transforms exit management from an administrative task into a strategic advantage.
      </p>
    </FeatureTemplate>
  );
};

export default ExitManagement;
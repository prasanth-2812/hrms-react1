import FeatureTemplate from "../../components/FeatureTemplate";

const Onboarding = () => {
  return (
    <FeatureTemplate 
      title="Onboarding" 
      description="Digital onboarding with automated workflows, e-signatures, and personalized employee journeys"
      featureId="onboarding"
    >
      <p className="mb-6">
        Our comprehensive Digital Onboarding platform transforms the new hire experience from a series of administrative tasks into a seamless, engaging journey that begins before Day 1. The system guides new employees through every step of the onboarding process with personalized checklists, automated workflows, and real-time status tracking.
      </p>
      
      <p className="mb-6">
        New hires receive a personalized onboarding portal where they can complete all pre-joining formalities including document submission, e-signature of offer letters and policies, tax declarations, and bank details setup. The intuitive interface reduces completion time by 70% while ensuring 100% compliance with regulatory requirements.
      </p>
      
      <p className="mb-6">
        Our intelligent workflow engine automatically assigns tasks to HR, managers, IT, and facilities teams based on the new hire's role, department, and location. Each stakeholder receives timely notifications and can track their responsibilities, ensuring nothing falls through the cracks before the employee's start date.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Onboarding Journey</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Pre-joining Portal:</strong> Secure, personalized dashboard for new hires to complete documentation, e-sign agreements, and submit required information before Day 1
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Electronic Signatures:</strong> Legally compliant e-signature capability for offer letters, employment contracts, NDAs, and company policies with audit trails
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Automated Workflows:</strong> Intelligent task assignment to HR, managers, IT, and facilities with automated reminders and escalation protocols
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>System Integration:</strong> Automatic provisioning of email accounts, payroll setup, access cards, and equipment orders upon document completion
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Personalized Experience:</strong> Role-specific onboarding paths with tailored training, team introductions, and milestone tracking
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
              <span>Reduces onboarding time from weeks to hours</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves new hire satisfaction by 80%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Eliminates 100% of onboarding paperwork errors</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduces HR onboarding workload by 75%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Compliance & Integration</h4>
          <ul className="space-y-2">
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
              <span>Seamless integration with payroll systems</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Automatic provisioning of IT systems and access</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Feedback collection and continuous improvement</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
        <h4 className="font-semibold text-lg mb-3">Personalized Onboarding Experience</h4>
        <p className="mb-4">
          Our AI-powered onboarding system creates customized journeys for each new hire based on their role, department, location, and career goals. The platform delivers relevant training modules, schedules meet-and-greets with key team members, and tracks progress through milestones.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm opacity-90">Completion Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24h</div>
            <div className="text-sm opacity-90">Setup Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Support</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 250 organizations across technology, healthcare, manufacturing, and financial services, our Onboarding platform welcomes more than 50,000 new hires annually with a 95% completion rate and 4.8/5 satisfaction score. The system not only automates administrative tasks but also creates a positive first impression that increases employee engagement from Day 1. With personalized journeys, automated workflows, and comprehensive analytics, our solution transforms onboarding from a compliance requirement into a strategic advantage for talent acquisition and retention.
      </p>
    </FeatureTemplate>
  );
};

export default Onboarding;
import FeatureTemplate from "../../components/FeatureTemplate";

const SmartOnboardingAssistant = () => {
  return (
    <FeatureTemplate 
      title="Smart Onboarding Assistant" 
      description="AI-powered onboarding with automated document verification and personalized employee journeys"
      featureId="smart-onboarding-assistant"
    >
      <p className="mb-6">
        Our Smart Onboarding Assistant revolutionizes the new hire experience with an intelligent, AI-driven platform that guides employees through every step of the onboarding process. The system combines automated workflows, intelligent document verification, and personalized journey mapping to transform onboarding from a series of administrative tasks into a seamless, engaging experience that begins before Day 1.
      </p>
      
      <p className="mb-6">
        The AI assistant automatically verifies KYC documents including PAN, Aadhaar, bank details, and educational certificates using advanced OCR technology and secure government API integrations. This real-time verification ensures 100% compliance with regulatory requirements while eliminating manual validation and reducing processing time from days to minutes.
      </p>
      
      <p className="mb-6">
        Each new hire receives a personalized onboarding journey tailored to their role, department, location, and team dynamics. The intelligent system delivers role-specific training modules, schedules meet-and-greets with key team members, and tracks progress through milestones, ensuring no critical step is missed while providing a human touch to the digital experience.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Onboarding Capabilities</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>AI-Powered Document Verification:</strong> Real-time validation of PAN, Aadhaar, bank details, and educational certificates using OCR and government API integrations with 99.9% accuracy
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Personalized Journey Mapping:</strong> Dynamic onboarding paths customized by role, department, location, and career goals with adaptive content delivery
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Automated Workflows:</strong> Intelligent task assignment to HR, managers, IT, and facilities with predictive scheduling and automated reminders
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Multilingual Support:</strong> Available in English, Hindi, Tamil, Telugu, and Marathi with natural language processing for conversational interactions
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>System Integration:</strong> Automatic provisioning of email accounts, payroll setup, access cards, and equipment orders upon document verification
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
              <span>Reduces onboarding time from days to hours</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Ensures 100% compliance with labor laws and regulations</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduces HR onboarding workload by 60%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves new hire satisfaction by 75%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Security & Compliance</h4>
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
              <span>End-to-end encryption for sensitive personal data</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Secure government API integrations for document verification</span>
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
        <h4 className="font-semibold text-lg mb-3">Intelligent Onboarding Experience</h4>
        <p className="mb-4">
          Our AI assistant doesn't just process documents—it creates a welcoming experience for new hires. The system delivers personalized content, answers questions in natural language, and provides real-time support throughout the onboarding journey, making new employees feel valued from the first interaction.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm opacity-90">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Minutes</div>
            <div className="text-sm opacity-90">Verification Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-90">Languages</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 200 organizations across technology, healthcare, manufacturing, and financial services, our Smart Onboarding Assistant processes more than 30,000 new hires annually with 99.9% document verification accuracy and 4.8/5 satisfaction ratings. The platform not only automates administrative tasks but also creates a positive first impression that increases employee engagement from Day 1. With intelligent document verification, personalized journeys, and seamless system integration, our solution transforms onboarding from a compliance requirement into a strategic advantage for talent acquisition and retention.
      </p>
    </FeatureTemplate>
  );
};

export default SmartOnboardingAssistant;
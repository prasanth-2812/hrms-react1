import FeatureTemplate from "../../components/FeatureTemplate";

const EmployeeSelfServiceChatbot = () => {
  return (
    <FeatureTemplate 
      title="Employee Self-Service Chatbot" 
      description="24/7 AI-powered assistance for all HR queries with natural language understanding"
      featureId="employee-self-service-chatbot"
    >
      <p className="mb-6">
        Our intelligent Employee Self-Service Chatbot revolutionizes HR support with a conversational AI assistant that handles employee queries 24/7. Using advanced natural language processing and machine learning, the chatbot understands complex questions and provides accurate, context-aware responses in real-time.
      </p>
      
      <p className="mb-6">
        The AI assistant can handle a wide range of HR inquiries including leave balances, payroll details, policy information, benefits enrollment, and onboarding procedures. It understands contextual questions like "How many sick leaves do I have left this quarter?" or "When will my salary be credited this month?" and retrieves the information from your HR systems to provide personalized answers.
      </p>
      
      <p className="mb-6">
        Built with enterprise-grade security, our chatbot ensures all data remains within your network with end-to-end encryption. The AI continuously learns from interactions, improving its accuracy and expanding its knowledge base over time without compromising data privacy.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Capabilities</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Natural Language Understanding:</strong> Processes complex, conversational queries with context awareness and intent recognition
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Multi-language Support:</strong> Available in Hindi, English, Tamil, Telugu, Marathi, and 10+ other Indian languages with accurate regional dialect understanding
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Contextual Memory:</strong> Remembers conversation context across multiple queries for seamless interaction
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>System Integration:</strong> Connects with HRIS, payroll, leave management, and benefits systems for real-time data access
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Continuous Learning:</strong> Machine learning algorithms improve response accuracy by analyzing successful interactions
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
              <span>Reduces HR helpdesk tickets by 80%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Responds to queries in under 2 seconds</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Available 24/7 across all devices</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves employee satisfaction by 65%</span>
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
              <span>Zero data retention outside your network</span>
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
              <span>End-to-end encryption for all communications</span>
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
        <h4 className="font-semibold text-lg mb-3">Implementation & Integration</h4>
        <p className="mb-4">
          Our chatbot integrates seamlessly with your existing HR systems through secure APIs, requiring minimal setup time. The implementation includes comprehensive training of the AI model with your organization's specific policies, procedures, and frequently asked questions.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">7 Days</div>
            <div className="text-sm opacity-90">Implementation</div>
          </div>
          <div>
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm opacity-90">Query Resolution</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Availability</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 250 organizations across diverse industries, our Employee Self-Service Chatbot handles more than 500,000 queries monthly with a 95% first-contact resolution rate. The AI assistant not only reduces HR workload but also provides valuable insights into common employee concerns, helping organizations proactively address issues and improve HR policies. With continuous learning capabilities, the chatbot becomes more intelligent and helpful with every interaction, delivering an exceptional employee experience.
      </p>
    </FeatureTemplate>
  );
};

export default EmployeeSelfServiceChatbot;
import FeatureTemplate from "../../components/FeatureTemplate";

const AIPoweredRecruitment = () => {
  return (
    <FeatureTemplate 
      title="AI-Powered Recruitment" 
      description="Transform your hiring process with intelligent candidate matching and automated screening"
      featureId="ai-powered-recruitment"
    >
      <p className="mb-6">
        Our AI-powered recruitment system uses advanced natural language processing and machine learning to revolutionize your hiring process. The platform intelligently parses resumes to extract key skills, experience, and qualifications with 95% accuracy, eliminating manual data entry and reducing time-to-hire.
      </p>
      
      <p className="mb-6">
        The system analyzes job descriptions and matches candidates based on comprehensive job-fit scores, cultural alignment, and growth potential. Our proprietary algorithm evaluates thousands of data points to identify the best candidates, reducing unconscious bias and ensuring diverse, high-quality shortlists.
      </p>
      
      <p className="mb-6">
        An intelligent chatbot conducts 24/7 pre-screening interviews, asking role-specific questions and evaluating responses using natural language processing. The AI assesses communication skills, technical knowledge, and cultural fit, providing detailed candidate reports to hiring managers.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Intelligent Resume Parsing:</strong> Extracts skills, experience, education, and qualifications from any resume format with 95% accuracy</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Job-Candidate Matching:</strong> Comprehensive matching algorithm that evaluates technical skills, cultural fit, and growth potential</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>AI Interview Assistant:</strong> Conducts structured interviews with role-specific questions and evaluates responses using NLP</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Multi-Channel Sourcing:</strong> Integrates with LinkedIn, Naukri, internal databases, and job boards for comprehensive candidate search</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Bias Reduction:</strong> Anonymous shortlisting and standardized evaluation criteria to eliminate unconscious bias</span>
          </li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduces hiring time by up to 70%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves candidate quality by 40%</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Eliminates unconscious bias in shortlisting</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Supports 15+ languages for global hiring</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Integration & Security</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Seamless integration with major job boards</span>
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
              <span>End-to-end encryption for candidate data</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Role-based access control</span>
            </li>
          </ul>
        </div>
      </div>
      
      <p>
        Our AI recruitment solution is trusted by over 200 organizations across 30+ industries, processing over 500,000 candidate applications annually. The system continuously learns from hiring outcomes to improve matching accuracy and provides actionable insights to optimize your recruitment strategy.
      </p>
    </FeatureTemplate>
  );
};

export default AIPoweredRecruitment;
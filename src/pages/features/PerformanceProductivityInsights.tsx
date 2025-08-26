import FeatureTemplate from "../../components/FeatureTemplate";

const PerformanceProductivityInsights = () => {
  return (
    <FeatureTemplate 
      title="Performance & Productivity Insights" 
      description="AI-driven analytics for employee performance, burnout detection, and personalized development"
      featureId="performance-productivity-insights"
    >
      <p className="mb-6">
        Our advanced Performance & Productivity Insights platform leverages artificial intelligence and machine learning to transform raw performance data into actionable intelligence. The system analyzes multiple data points including KPIs, OKRs, peer feedback, project completion rates, and work patterns to provide comprehensive insights into employee performance and well-being.
      </p>
      
      <p className="mb-6">
        The AI-powered analytics engine goes beyond traditional performance metrics to detect early warning signs of burnout, disengagement, and skill gaps. By analyzing communication patterns, work hours, task completion rates, and feedback sentiment, our system identifies at-risk employees with 92% accuracy, enabling proactive interventions before issues escalate.
      </p>
      
      <p className="mb-6">
        Managers gain real-time visibility into team performance through customizable dashboards that highlight productivity trends, engagement levels, and development opportunities. The system automatically generates comprehensive reports and provides AI-driven recommendations for personalized training, coaching, and career development.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Analytics Capabilities</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Multi-Dimensional Analysis:</strong> Comprehensive evaluation combining KPIs, OKRs, peer feedback, project outcomes, and behavioral patterns for holistic performance assessment
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Burnout Prediction:</strong> AI algorithms analyze work patterns, communication frequency, task completion rates, and sentiment to identify burnout risk with 92% accuracy
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Personalized Development:</strong> Machine learning recommends targeted training programs, mentoring opportunities, and career paths based on individual strengths and gaps
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Sentiment Intelligence:</strong> Natural language processing analyzes feedback, communication, and survey responses to gauge employee sentiment and engagement levels
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong>Real-time Productivity Tracking:</strong> Optional integration with project management tools to monitor task completion, collaboration patterns, and workflow efficiency
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
              <span>Reduces employee turnover by 40% through early intervention</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Increases productivity by 35% through targeted development</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Improves manager decision-making with data-driven insights</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduces performance review preparation time by 75%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Analytics & Integration</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Integration with 50+ project management tools</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Real-time dashboards with customizable metrics</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Anonymous sentiment analysis from feedback</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Automated report generation and distribution</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
        <h4 className="font-semibold text-lg mb-3">Predictive Intelligence</h4>
        <p className="mb-4">
          Our AI doesn't just analyze current performance—it predicts future outcomes. The system identifies high-potential employees, forecasts retention risks, and recommends optimal team compositions based on complementary skills and working styles.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">92%</div>
            <div className="text-sm opacity-90">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold">360°</div>
            <div className="text-sm opacity-90">Insights</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Monitoring</div>
          </div>
        </div>
      </div>
      
      <p>
        Trusted by over 150 organizations across technology, finance, healthcare, and professional services, our Performance & Productivity Insights platform analyzes more than 10 million data points monthly to provide actionable intelligence for talent development. The system not only identifies performance issues but also prescribes solutions through personalized development recommendations, targeted training programs, and coaching interventions. With ethical data practices, robust privacy controls, and GDPR compliance, our solution transforms performance management from a retrospective evaluation into a forward-looking strategy for organizational excellence.
      </p>
    </FeatureTemplate>
  );
};

export default PerformanceProductivityInsights;
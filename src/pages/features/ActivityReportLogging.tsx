// src/pages/ActivityReportLogging.tsx
import FeatureTemplate from "../../components/FeatureTemplate";
import { 
  Flag, 
  ClipboardCheck, 
  RefreshCw, 
  Users, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  MessageSquare, 
  Shield, 
  Zap, 
  BarChart3,
  MapPin,
  FileText
} from "lucide-react";

const ActivityReportLogging = () => {
  return (
    <FeatureTemplate 
      title="Activity Report Logging (from Field Locations)" 
      description="Track and report field activities in real-time with instant meeting reporting, real-time updates, and follow-up tracking"
      featureId="activity-report-logging"
    >
      <p className="mb-6">
        Our Activity Report Logging system revolutionizes field operations by enabling real-time tracking and reporting of sales and field activities. The platform allows field teams to instantly log meeting details, share updates with managers, and track follow-up actions, eliminating delays in communication and ensuring no opportunity is missed.
      </p>
      
      <p className="mb-6">
        With the FieldSense mobile app, sales representatives can immediately document client interactions right after meetings, capturing fresh insights while they're still top of mind. This eliminates the need to remember details or wait until returning to the office, ensuring accurate and timely reporting.
      </p>
      
      <p className="mb-6">
        The system provides managers with real-time visibility into field activities, enabling immediate feedback, better decision-making, and enhanced accountability. Automated follow-up reminders ensure that every client interaction is properly tracked and acted upon, improving customer service and closing rates.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Instant Meeting Reporting:</strong> Log meeting details including discussion points, client feedback, and outcomes immediately after client interactions</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Real-Time Updates:</strong> Automatically share reports with managers and team members for immediate visibility and collaboration</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Follow-Up Tracking:</strong> Create and assign follow-up tasks with reminders for next steps like scheduling meetings or sending documents</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Field Activity Monitoring:</strong> Track sales team activities in real-time with location-based check-ins and activity logs</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Performance Analytics:</strong> Generate comprehensive reports on field activities, conversion rates, and team performance</span>
          </li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Reduces administrative time by 60%</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Improves reporting accuracy by 95%</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Enhances team accountability and transparency</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Improves customer response time by 75%</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Increases sales conversion rates by 30%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-900 mb-3">Technical Features</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>End-to-end encryption for all field data</span>
            </li>
            <li className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Offline mode with automatic sync when online</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>GPS-based location verification</span>
            </li>
            <li className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Customizable report templates</span>
            </li>
            <li className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>Integration with CRM and sales forecasting tools</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2" />
          Business Impact
        </h3>
        <p className="mb-4">
          Organizations using our Activity Report Logging system have seen significant improvements in field team productivity and customer satisfaction. The real-time visibility into field activities enables managers to provide timely coaching and support, while automated follow-up tracking ensures that no sales opportunity falls through the cracks.
        </p>
        <p>
          The system has been proven to reduce the time between client meetings and follow-up actions from an average of 48 hours to less than 2 hours, dramatically improving customer experience and increasing conversion rates.
        </p>
      </div>
      
      <p>
        Our Activity Report Logging solution is designed for sales teams, field service organizations, and any business with employees working remotely. The mobile-first approach ensures seamless adoption, while the comprehensive analytics provide valuable insights to optimize field operations and drive revenue growth.
      </p>
    </FeatureTemplate>
  );
};

export default ActivityReportLogging;
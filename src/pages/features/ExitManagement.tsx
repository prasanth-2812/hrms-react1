// src/pages/features/ExitManagement.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const ExitManagement = () => {
  return (
    <FeatureTemplate title="Exit Management" icon="🚪">
      <p>
        Streamlined offboarding with clearance, feedback, and exit interviews.
      </p>
      <p>
        Employees submit resignation, complete clearance checklist, and attend exit interviews (in-person or AI-powered).
      </p>
      <p>
        HR gets automated reminders and final settlement calculations.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Online resignation submission</li>
        <li>Clearance checklist with department approvals</li>
        <li>AI-powered exit interview for feedback</li>
        <li>Final settlement calculation</li>
        <li>Retention insights and trend analysis</li>
      </ul>
    </FeatureTemplate>
  );
};

export default ExitManagement;
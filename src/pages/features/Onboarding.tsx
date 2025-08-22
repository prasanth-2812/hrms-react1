// src/pages/features/Onboarding.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const Onboarding = () => {
  return (
    <FeatureTemplate title="Onboarding" icon="✅">
      <p>
        Digital onboarding with e-sign, document upload, and checklist tracking.
      </p>
      <p>
        New hires complete all formalities online before Day 1. HR gets real-time status updates.
      </p>
      <p>
        Includes role-specific training, team introductions, and policy acknowledgment.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Pre-joining document collection</li>
        <li>E-signature for offer letter and policies</li>
        <li>Automated task assignment to HR and manager</li>
        <li>Integration with payroll and email setup</li>
        <li>Feedback collection post-onboarding</li>
      </ul>
    </FeatureTemplate>
  );
};

export default Onboarding;
// src/pages/features/SmartOnboardingAssistant.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const SmartOnboardingAssistant = () => {
  return (
    <FeatureTemplate title="Smart Onboarding Assistant" icon="🚀">
      <p>
        The Smart Onboarding Assistant guides new hires through every step of onboarding with AI-powered checklists, reminders, and document verification.
      </p>
      <p>
        It automatically verifies KYC documents (PAN, Aadhaar, bank details) using OCR and government APIs.
      </p>
      <p>
        New employees receive a personalized journey based on role, location, and team.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Reduces onboarding time from days to hours</li>
        <li>Ensures 100% compliance with labor laws</li>
        <li>Reduces HR workload by 60%</li>
        <li>Available in 5 languages</li>
      </ul>
    </FeatureTemplate>
  );
};

export default SmartOnboardingAssistant;
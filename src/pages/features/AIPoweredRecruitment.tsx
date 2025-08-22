// src/pages/features/AIPoweredRecruitment.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const AIPoweredRecruitment = () => {
  return (
    <FeatureTemplate title="AI-Powered Recruitment" icon="🎯">
      <p>
        Our AI-powered recruitment system uses intelligent resume parsing to extract key skills, experience, and qualifications from candidate resumes.
      </p>
      <p>
        It analyzes the job description and matches candidates based on job-fit score, cultural fit, and growth potential.
      </p>
      <p>
        A chatbot conducts pre-screening interviews 24/7, asking role-specific questions and evaluating responses using NLP.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Reduces hiring time by up to 70%</li>
        <li>Eliminates unconscious bias in shortlisting</li>
        <li>Supports multiple languages</li>
        <li>Integrates with LinkedIn, Naukri, and internal databases</li>
      </ul>
    </FeatureTemplate>
  );
};

export default AIPoweredRecruitment;
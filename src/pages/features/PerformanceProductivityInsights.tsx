// src/pages/features/PerformanceProductivityInsights.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const PerformanceProductivityInsights = () => {
  return (
    <FeatureTemplate title="Performance & Productivity Insights" icon="📊">
      <p>
        Our AI-driven analytics engine evaluates employee performance using KPIs, OKRs, peer feedback, and productivity data.
      </p>
      <p>
        It detects early signs of burnout, disengagement, or skill gaps and suggests personalized training or interventions.
      </p>
      <p>
        Managers get real-time dashboards and automated reports.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>92% accuracy in burnout prediction</li>
        <li>Personalized training recommendations</li>
        <li>Real-time productivity tracking (optional)</li>
        <li>Anonymous sentiment analysis from feedback</li>
        <li>Integration with project management tools</li>
      </ul>
    </FeatureTemplate>
  );
};

export default PerformanceProductivityInsights;
// src/pages/features/PerformanceManagement.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const PerformanceManagement = () => {
  return (
    <FeatureTemplate title="Performance Management" icon="📈">
      <p>
        End-to-end performance management with OKR tracking, 360 feedback, and review cycles.
      </p>
      <p>
        Managers set goals, track progress, and conduct reviews. Employees get continuous feedback.
      </p>
      <p>
        AI suggests development plans based on performance data.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>OKR and KPI goal setting</li>
        <li>Quarterly/annual review workflows</li>
        <li>360-degree feedback collection</li>
        <li>Calibration and rating distribution</li>
        <li>Integration with rewards and promotions</li>
      </ul>
    </FeatureTemplate>
  );
};

export default PerformanceManagement;
// src/pages/features/Leaves.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const Leaves = () => {
  return (
    <FeatureTemplate title="Leaves" icon="📅">
      <p>
        Automated leave management with policy enforcement, balance tracking, and approval workflows.
      </p>
      <p>
        Employees can apply for leave via web or chatbot. Managers get instant notifications and can approve/reject in one click.
      </p>
      <p>
        System auto-calculates encashment, carry-forward, and holidays.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Supports 20+ leave types (PL, SL, ML, etc.)</li>
        <li>Team leave calendar with conflict alerts</li>
        <li>Auto-approval rules</li>
        <li>Integration with attendance and payroll</li>
        <li>Leave balance forecasting</li>
      </ul>
    </FeatureTemplate>
  );
};

export default Leaves;
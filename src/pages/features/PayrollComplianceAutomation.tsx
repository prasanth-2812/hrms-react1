// src/pages/features/PayrollComplianceAutomation.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const PayrollComplianceAutomation = () => {
  return (
    <FeatureTemplate title="Payroll & Compliance Automation" icon="💰">
      <p>
        Our AI-driven payroll engine ensures 100% accuracy in salary, tax, and compliance calculations.
      </p>
      <p>
        It auto-updates with changes in Indian labor laws, GST, PF, ESI, and TDS regulations.
      </p>
      <p>
        One-click payroll processing with bank integration and payslip generation.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Supports 100+ payroll components</li>
        <li>Auto-file PF, ESI, PT, and TDS returns</li>
        <li>Real-time compliance alerts</li>
        <li>Multi-bank salary processing</li>
        <li>Employee self-service for payslips and tax planning</li>
      </ul>
    </FeatureTemplate>
  );
};

export default PayrollComplianceAutomation;
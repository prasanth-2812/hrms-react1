// src/pages/features/Payroll.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const Payroll = () => {
  return (
    <FeatureTemplate title="Payroll" icon="💳">
      <p>
        Seamless salary processing with tax and compliance integration.
      </p>
      <p>
        One-click payroll generation with bank upload, payslip distribution, and statutory compliance.
      </p>
      <p>
        Supports bonuses, arrears, advances, and reimbursements.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>One-click salary processing</li>
        <li>Bank integration (NEFT, RTGS, IMPS)</li>
        <li>Auto-payslip generation and email</li>
        <li>Reimbursement and advance management</li>
        <li>Tax planning and Form 16 generation</li>
      </ul>
    </FeatureTemplate>
  );
};

export default Payroll;
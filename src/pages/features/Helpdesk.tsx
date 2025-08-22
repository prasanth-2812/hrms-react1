// src/pages/features/Helpdesk.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const Helpdesk = () => {
  return (
    <FeatureTemplate title="Helpdesk" icon="🛎️">
      <p>
        Centralized HR helpdesk with ticketing, SLA tracking, and automation.
      </p>
      <p>
        Employees raise tickets for HR, IT, or admin issues. Tickets are auto-assigned based on type and priority.
      </p>
      <p>
        Managers get real-time reports on resolution time and satisfaction.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Multi-channel support (web, chatbot, email)</li>
        <li>SLA-based escalation</li>
        <li>Knowledge base with FAQs</li>
        <li>Customer satisfaction (CSAT) surveys</li>
        <li>Integration with chatbot for auto-resolution</li>
      </ul>
    </FeatureTemplate>
  );
};

export default Helpdesk;
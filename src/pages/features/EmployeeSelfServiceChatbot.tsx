// src/pages/features/EmployeeSelfServiceChatbot.tsx
import FeatureTemplate from "../../components/FeatureTemplate";

const EmployeeSelfServiceChatbot = () => {
  return (
    <FeatureTemplate title="Employee Self-Service Chatbot" icon="🤖">
      <p>
        Our 24/7 AI chatbot handles all employee queries related to leave, payroll, policies, and benefits in natural language.
      </p>
      <p>
        It understands context and can answer complex questions like "How many sick leaves do I have left?" or "When will my salary be credited?"
      </p>
      <p>
        The chatbot learns from past interactions and improves over time.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Available in Hindi, English, Tamil, Telugu, and Marathi</li>
        <li>Reduces HR helpdesk tickets by 80%</li>
        <li>Responds in under 2 seconds</li>
        <li>Secure and private – no data leaves your network</li>
      </ul>
    </FeatureTemplate>
  );
};

export default EmployeeSelfServiceChatbot;
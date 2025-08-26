// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AnimatedBackground from "./components/shared/AnimatedBackground";

// Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SendEnquiry from "./pages/SendEnquiry";
import AIPoweredRecruitment from "./pages/features/AIPoweredRecruitment";
import SmartOnboardingAssistant from "./pages/features/SmartOnboardingAssistant";
import EmployeeSelfServiceChatbot from "./pages/features/EmployeeSelfServiceChatbot";
import PerformanceProductivityInsights from "./pages/features/PerformanceProductivityInsights";
import PayrollComplianceAutomation from "./pages/features/PayrollComplianceAutomation";
import Attendance from "./pages/features/Attendance";
import Leaves from "./pages/features/Leaves";
import Helpdesk from "./pages/features/Helpdesk";
import Onboarding from "./pages/features/Onboarding";
import ExitManagement from "./pages/features/ExitManagement";
import PerformanceManagement from "./pages/features/PerformanceManagement";
import Payroll from "./pages/features/Payroll";
import RequestDemo from "./pages/RequestDemo";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative">
        <AnimatedBackground />

        {/* Background Orbs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <Header />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/send-enquiry" element={<SendEnquiry />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/features/ai-powered-recruitment" element={<AIPoweredRecruitment />} />
            <Route path="/features/smart-onboarding-assistant" element={<SmartOnboardingAssistant />} />
            <Route path="/features/employee-self-service-chatbot" element={<EmployeeSelfServiceChatbot />} />
            <Route path="/features/performance-productivity-insights" element={<PerformanceProductivityInsights />} />
            <Route path="/features/payroll-compliance-automation" element={<PayrollComplianceAutomation />} />
            <Route path="/features/attendance" element={<Attendance />} />
            <Route path="/features/leaves" element={<Leaves />} />
            <Route path="/features/helpdesk" element={<Helpdesk />} />
            <Route path="/features/onboarding" element={<Onboarding />} />
            <Route path="/features/exit-management" element={<ExitManagement />} />
            <Route path="/features/performance-management" element={<PerformanceManagement />} />
            <Route path="/features/payroll" element={<Payroll />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
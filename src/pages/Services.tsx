// src/pages/Services.tsx
import { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Custom SVG Illustrations (Original Graphic Style)
  const RecruitmentIllustration = () => (
    <svg className="w-full h-auto" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="400" rx="20" fill="#e2f2ff" />
      
      {/* Office Scene */}
      <rect x="100" y="100" width="600" height="200" rx="10" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
      
      {/* People */}
      <g transform="translate(150,150)">
        <circle cx="40" cy="40" r="20" fill="#10b981" />
        <path d="M40 60 L40 80 M30 70 L40 80 L50 70" stroke="#10b981" strokeWidth="2" />
        <text x="40" y="100" fontSize="14" fill="#374151">HR Manager</text>
      </g>

      <g transform="translate(250,150)">
        <circle cx="40" cy="40" r="20" fill="#3b82f6" />
        <path d="M40 60 L40 80 M30 70 L40 80 L50 70" stroke="#3b82f6" strokeWidth="2" />
        <text x="40" y="100" fontSize="14" fill="#374151">Candidate</text>
      </g>

      <g transform="translate(350,150)">
        <circle cx="40" cy="40" r="20" fill="#f59e0b" />
        <path d="M40 60 L40 80 M30 70 L40 80 L50 70" stroke="#f59e0b" strokeWidth="2" />
        <text x="40" y="100" fontSize="14" fill="#374151">AI System</text>
      </g>

      {/* AI Match Indicator */}
      <path d="M250 120 L350 120 L350 140 L250 140 Z" fill="#10b981" opacity="0.2" />
      <text x="300" y="135" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#065f46">AI Match</text>

      {/* Floating UI Elements */}
      <rect x="300" y="60" width="180" height="40" rx="8" fill="#fff" stroke="#10b981" strokeWidth="2" />
      <text x="390" y="80" textAnchor="middle" fontSize="14" fill="#10b981">Resume Score: 92%</text>
    </svg>
  );

  const OnboardingIllustration = () => (
    <svg className="w-full h-auto" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="400" rx="20" fill="#e2f2ff" />
      
      {/* Desk */}
      <rect x="200" y="200" width="400" height="40" fill="#6b7280" />
      
      {/* Laptop */}
      <rect x="300" y="160" width="200" height="80" rx="8" fill="#1e293b" />
      <rect x="310" y="150" width="180" height="10" fill="#334155" />
      
      {/* Person */}
      <g transform="translate(350,100)">
        <circle cx="40" cy="40" r="20" fill="#059669" />
        <path d="M40 60 L40 80 M30 70 L40 80 L50 70" stroke="#059669" strokeWidth="2" />
      </g>

      {/* Checklist */}
      <rect x="500" y="120" width="120" height="80" rx="8" fill="#fff" stroke="#64748b" strokeWidth="1" />
      <text x="560" y="140" fontSize="12" fill="#334155">✓ Docs</text>
      <text x="560" y="160" fontSize="12" fill="#334155">✓ Setup</text>
      <text x="560" y="180" fontSize="12" fill="#334155">✓ Team</text>
    </svg>
  );

  const ChatbotIllustration = () => (
    <svg className="w-full h-auto" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="400" rx="20" fill="#e2f2ff" />
      
      {/* Chat Bubble */}
      <path d="M100 100 H300 V220 H120 L100 200 Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="130" y="130" fontSize="14" fill="#1e40af">“How many leaves do I have?”</text>
      <text x="130" y="150" fontSize="14" fill="#1e40af">“When is my salary?”</text>
      
      {/* Employee */}
      <g transform="translate(80,240)">
        <circle cx="40" cy="40" r="20" fill="#059669" />
        <path d="M40 60 L40 80 M30 70 L40 80 L50 70" stroke="#059669" strokeWidth="2" />
      </g>

      {/* Chatbot AI */}
      <g transform="translate(680,240)">
        <circle cx="40" cy="40" r="25" fill="#8b5cf6" />
        <path d="M40 65 L40 85 M30 75 L40 85 L50 75" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="35" cy="35" r="3" fill="white" />
        <circle cx="45" cy="35" r="3" fill="white" />
        <path d="M35 45 Q40 50 45 45" stroke="white" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );

  const PerformanceIllustration = () => (
    <svg className="w-full h-auto" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="400" rx="20" fill="#e2f2ff" />
      
      {/* Chart */}
      <rect x="200" y="200" width="400" height="80" fill="#f1f5f9" rx="8" />
      <path d="M220 180 L260 160 L300 170 L340 150 L380 160 L420 140" stroke="#f59e0b" strokeWidth="3" fill="none" />
      <circle cx="220" cy="180" r="4" fill="#f59e0b" />
      <circle cx="260" cy="160" r="4" fill="#f59e0b" />
      <circle cx="300" cy="170" r="4" fill="#f59e0b" />
      <circle cx="340" cy="150" r="4" fill="#f59e0b" />
      <circle cx="380" cy="160" r="4" fill="#f59e0b" />
      <circle cx="420" cy="140" r="4" fill="#f59e0b" />

      {/* Manager */}
      <g transform="translate(100,100)">
        <circle cx="40" cy="40" r="20" fill="#dc2626" />
        <path d="M40 60 L40 80 M30 70 L40 80 L50 70" stroke="#dc2626" strokeWidth="2" />
      </g>

      {/* Employee */}
      <g transform="translate(600,100)">
        <circle cx="40" cy="40" r="20" fill="#059669" />
        <path d="M40 60 L40 80 M30 70 L40 80 L50 70" stroke="#059669" strokeWidth="2" />
      </g>
    </svg>
  );

  const services = [
    {
      title: "AI-Powered Recruitment",
      description:
        "Synchrm's AI-powered recruitment system transforms the hiring process by automating resume parsing, candidate-job fit analysis, and pre-screening interviews. Our AI evaluates resumes against job descriptions using natural language processing, identifying top candidates based on skills, experience, and cultural fit. The system also conducts chatbot-based interviews, asking role-specific questions and analyzing responses to assess technical ability and soft skills. This reduces hiring time by up to 70% while improving the quality of hires.",
      image: <RecruitmentIllustration />,
    },
    {
      title: "Smart Onboarding Assistant",
      description:
        "Our Smart Onboarding Assistant guides new hires through every step of the onboarding process with personalized checklists, automated document verification, and real-time feedback. From the moment an employee accepts their offer, our AI-powered assistant sends them a welcome message, explains their first day schedule, and provides access to company policies, training materials, and team introductions. The assistant automatically verifies KYC documents using OCR technology and government APIs, ensuring compliance with labor laws. It also tracks progress and reminds managers to complete tasks like setting up email accounts and assigning workstations.",
      image: <OnboardingIllustration />,
    },
    {
      title: "Employee Self-Service Chatbot",
      description:
        "The Employee Self-Service Chatbot is a 24/7 virtual HR assistant that handles all employee queries related to leave, payroll, policies, and benefits in natural language. Employees can ask questions like 'How many sick leaves do I have left?' or 'When will my salary be credited?' and receive instant answers. The chatbot understands context and can answer complex questions, reducing the workload on HR teams by up to 80%. It also supports multiple languages including Hindi, English, Tamil, Telugu, and Marathi, making it accessible to employees across India. The chatbot learns from past interactions and improves over time, providing increasingly accurate responses.",
      image: <ChatbotIllustration />,
    },
    {
      title: "Performance & Productivity Insights",
      description:
        "Synchrm's Performance & Productivity Insights module uses AI to evaluate employee performance based on KPIs, OKRs, peer feedback, and productivity data. The system detects early signs of burnout, disengagement, or skill gaps and suggests personalized training or interventions. Managers get real-time dashboards showing team performance metrics, individual progress, and potential risks. The AI analyzes patterns in work hours, task completion rates, and communication frequency to identify high-performing employees and those who may need additional support. This data-driven approach helps organizations make informed decisions about promotions, bonuses, and development plans, improving overall employee satisfaction and retention.",
      image: <PerformanceIllustration />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI & Security Solutions for Modern HR Management
          </p>
        </div>
      </section>

      {/* Services Grid - Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-16 mb-32 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } transition-all duration-1000 delay-${index * 100} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Image Side */}
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
                {service.image}
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className={`py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your HR?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies across 30+ industries who trust Synchrm for their HR and payroll needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
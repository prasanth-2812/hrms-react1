// src/pages/AboutUs.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Custom SVG Vector Icons (Vector Style)
  const HumanFirstIcon = () => (
    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );

  const AIIntegrityIcon = () => (
    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  const SimplicityIcon = () => (
    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const InnovationIcon = () => (
    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  // Professional SVG Icons for Vision & Mission
  const VisionIcon = () => (
    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const MissionIcon = () => (
    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Synchrm
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We're on a mission to revolutionize HR with AI, automation, and human-centered design.
          </p>
        </div>
      </section>

      {/* Story Section - With Light Background */}
      <section
        className={`py-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023 by Tanasvi Technologies, Synchrm was born from a simple idea: 
                <strong className="text-gray-900"> HR should empower people, not paperwork.</strong>
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We saw HR teams drowning in spreadsheets, compliance, and manual processes — while employees waited days for simple answers.
              </p>
              <p className="text-lg text-gray-600">
                So we built an AI-powered HRMS that's fast, smart, and secure — so HR can focus on what matters: <strong className="text-gray-900">your people.</strong>
              </p>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Office workspace"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <p className="text-center text-gray-600 mt-4 italic">
                  "Where innovation meets people"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`py-24 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                <VisionIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To become the most trusted AI-powered HR platform in India — where every organization, big or small, has access to intelligent, human-centered workforce management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                <MissionIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                Empower HR teams with AI-driven insights, automation, and security — so they can focus on building great workplaces, not managing spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - With Vector Icons */}
      <section className={`py-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 mt-4">What drives us every day</p>
          </div>

          {[
            {
              title: "Human First",
              description: "We believe technology should serve people — not the other way around. Every feature is designed to reduce HR's burden and improve employee experience.",
              icon: <HumanFirstIcon />
            },
            {
              title: "AI with Integrity",
              description: "Our AI is powerful, but never invasive. All data stays in your private cloud, and decisions are explainable, not black-box.",
              icon: <AIIntegrityIcon />
            },
            {
              title: "Simplicity over Complexity",
              description: "We cut through the noise. No 100-page manuals. Just intuitive design that works the first time.",
              icon: <SimplicityIcon />
            },
            {
              title: "Relentless Innovation",
              description: "We're not satisfied with 'good enough'. We push boundaries to deliver what HR teams truly need — before they ask.",
              icon: <InnovationIcon />
            }
          ].map((value, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-20`}
            >
              {/* Illustration */}
              <div className="flex-1 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Stats */}
      <section className={`py-24 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "30+", label: "Industries" },
              { num: "500+", label: "Happy Clients" },
              { num: "92%", label: "Employee Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.num}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your HR?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies who trust Synchrm for their HR and payroll needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/request-demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Request Demo
            </Link>
            <Link 
              to="/contact-us"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
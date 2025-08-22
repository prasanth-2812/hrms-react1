// src/pages/ContactUs.tsx
import Contact from "../components/home/Contact";

const ContactUs = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600">We're here to help you transform your HR</p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactUs;
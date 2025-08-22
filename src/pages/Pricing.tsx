// src/pages/Pricing.tsx
import Pricing from "../components/home/Pricing";

const PricingPage = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Transparent <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600">Choose the right plan for your team size</p>
        </div>
        <Pricing />
      </div>
    </div>
  );
};

export default PricingPage;
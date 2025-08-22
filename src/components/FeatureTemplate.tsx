// src/components/FeatureTemplate.tsx
import { Link } from "react-router-dom";

interface FeatureTemplateProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

const FeatureTemplate: React.FC<FeatureTemplateProps> = ({ title, icon, children }) => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/features"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to All Features
        </Link>

        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">{icon}</div>
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          </div>
          <div className="prose text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTemplate;

// src/pages/Login.tsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Login = () => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            {/* Logo */}
            <Link to="/" className="flex items-center justify-center">
              <img src={logo} alt="SYNC HRMS Logo" width={150} height={100} />
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your SYNC HRMS account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/send-enquiry" className="text-blue-600 hover:underline font-medium">
                Request Access
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
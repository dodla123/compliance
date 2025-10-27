import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import { Briefcase } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const { login, signup, isAuthenticated } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      await signup(name, email, password);
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again later.');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image with quote */}
      <div
        className="w-1/2 hidden lg:flex flex-col justify-center items-start px-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1581090700227-1b6fdffcc5b3?auto=format&fit=crop&w=1400&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 text-white">
          <p className="text-lg text-gray-200 italic">
            “Good compliance builds great companies.”
          </p>
        </div>
      </div>



      {/* Right side - Login/Signup */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-[purple] via-white to-[#e4f0ff] px-10 py-12 relative">
        {/* Logo */}
        <div className="absolute top-10 left-10 lg:hidden flex items-center z-10">
          <Briefcase size={32} className="text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">FinancePortal</h1>
        </div>

        {/* Form container */}
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
            <p className="text-gray-600 mt-2">
              {activeTab === 'login' ? 'Sign in to access your account' : 'Create a new account'}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`flex-1 py-2 font-medium text-center ${
                activeTab === 'login'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 font-medium text-center ${
                activeTab === 'signup'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          {activeTab === 'login' ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <SignupForm onSignup={handleSignup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

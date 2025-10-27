import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const LoginForm: React.FC = () => {
  const { isLoginForm, toggleForm, login } = useAuth(); 
  const [email, setEmail] = useState(localStorage.getItem("rememberedEmail") || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showForgotPassword, setShowForgotPassword] = useState(false); // 👈 Manage Forgot Password Modal
  const [resetEmail, setResetEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(!!localStorage.getItem("rememberedEmail"));

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email address";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = password ? "" : "Password is required";
    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      setIsLoading(true);
      try {
        await login(email, password);
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handlePasswordReset = async () => {
    const emailError = validateEmail(resetEmail);
    if (emailError) {
      setErrors({ email: emailError, password: "" });
      return;
    }

    // Simulate password reset API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setResetSuccess(true);
    setTimeout(() => {
      setShowForgotPassword(false);
      setResetSuccess(false);
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Sign in to your account</h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm pr-10`}
            />
            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
            </button>
          </div>
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <button type="submit" disabled={isLoading} className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md">
          {isLoading ? "Signing in..." : "Login"}
        </button>

        <div className="flex justify-between text-sm">
          <button type="button" onClick={() => setShowForgotPassword(true)} className="text-blue-600 hover:underline">
            Forgot password?
          </button>
          {/* <button type="button" onClick={toggleForm} className="text-blue-600 hover:underline">
            Create an account
          </button> */}
        </div>
      </form>

      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900">Reset Password</h3>
            <p className="text-sm text-gray-600 mb-4">Enter your email to receive a reset link.</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

            {resetSuccess ? (
              <p className="text-green-600 text-sm mt-2">✅ Reset link sent! Check your email.</p>
            ) : (
              <button onClick={handlePasswordReset} className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md">
                Send Reset Link
              </button>
            )}

            <button onClick={() => setShowForgotPassword(false)} className="mt-2 text-sm text-gray-600 hover:underline">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
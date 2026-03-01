import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "assetverse@gmail.com",
      password: "aaaaAAAA@@147852",
    },
  });

  const { logInUser, resetPassword } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Login function
  const handleLogin = (data) => {
    setLoading(true);

    logInUser(data.email, data.password)
      .then(() => {
        toast.success("Login successful");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error("Password is incorrect");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Forgot Password function
  const handleForgotPassword = () => {
    const email = getValues("email");
    if (!email) {
      return toast.error("Please enter your email first");
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-15 overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-4 text-gray-900">
          <h1 className=" sm:text-5xl heading font-extrabold leading-tight text-primary">
            Manage Assets <br />
          </h1>

          <p className="text-secondary max-w-xl sub-heading text-lg">
            AssetVerse is built for modern teams who care about control,
            performance, and clarity—trusted by professionals worldwide.
          </p>

          <div className="flex gap-6 pt-6">
            <div className=" backdrop-blur-md border border-blue-200 rounded-2xl px-6 py-4 shadow">
              <h3 className="text-3xl font-bold text-primary">10K+</h3>
              <p className="text-secondary text-sm">Companies</p>
            </div>
            <div className=" backdrop-blur-md border border-blue-200 rounded-2xl px-6 py-4 shadow">
              <h3 className="text-3xl font-bold text-primary">99.9%</h3>
              <p className="text-secondary text-sm">Uptime</p>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="backdrop-blur-2xl border border-blue-200 rounded-3xl p-8 md:p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">
            Welcome Back
          </h2>

          <p className="text-secondary text-center mb-8">
            Sign in to continue to AssetVerse
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
            {/* Email */}
            <div>
              <label className="text-sm text-secondary mb-2 block">
                Email address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="hr@company.com"
                className="w-full px-5 py-4 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-secondary mb-2 block">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="••••••••••"
                  className="w-full px-5 py-4 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 mt-1">{errors.password.message}</p>
              )}

              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold border text-white bg-primary hover:scale-[1.02] transition-all shadow-lg flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <SocialLogin />

          <p className="text-center text-gray-600 mt-8 text-sm">
            New to AssetVerse?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logInUser } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("Login Data:", data);
    logInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-15 overflow-hidden px-6">
      {/* Soft Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-400/30 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-4 text-gray-900">
          {/* <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium">
            <HiOutlineShieldCheck className="text-lg" />
            Enterprise-grade Security
          </span> */}

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
        <div className=" backdrop-blur-2xl border border-blue-200 rounded-3xl p-8 md:p-10 shadow-2xl">
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
                {...register("email", { required: true })}
                placeholder="hr@company.com"
                className="w-full px-5 py-4 rounded-xl  border border-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 mt-1">Email is required</p>
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
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="••••••••••"
                  className="w-full px-5 py-4 rounded-xl  border border-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-1">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 mt-1">
                  Password must be at least 6 characters
                </p>
              )}
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold border text-white bg-primary hover:scale-[1.02] transition-all shadow-lg"
            >
              Sign In
            </button>
          </form>
          <SocialLogin></SocialLogin>
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
    </div>
  );
};

export default Login;

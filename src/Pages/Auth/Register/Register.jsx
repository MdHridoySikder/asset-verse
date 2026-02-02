import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Calendar } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-blue-50 overflow-hidden px-6">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-400/30 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT INFO */}
        <div className="space-y-6 text-gray-900">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Create Employee <br /> Account
          </h1>

          <p className="text-gray-600 max-w-xl text-lg">
            Register with your work email to access the employee dashboard and
            manage company assets securely.
          </p>

          <div className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl p-6 shadow space-y-3">
            <div>
              <p className="text-sm font-medium">Account type</p>
              <p className="text-sm text-gray-500">Employee</p>
              <p className="text-xs text-gray-400">
                Role will be set automatically
              </p>
            </div>

            <ul className="text-xs text-gray-500 list-disc list-inside space-y-1">
              <li>Use a strong password</li>
              <li>Date of birth is required</li>
            </ul>
          </div>
        </div>

        {/* REGISTER CARD */}
        <div className="bg-white/80 backdrop-blur-2xl border border-blue-200 rounded-3xl p-8 md:p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Create Account
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Join AssetVerse as an employee
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-5 py-4 rounded-xl bg-white border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="relative">
                <input
                  type="date"
                  className="w-full px-5 py-4 rounded-xl bg-white border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Calendar
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Work email"
              className="w-full px-5 py-4 rounded-xl bg-white border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-5 py-4 rounded-xl bg-white border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* photo  input */}
            <input
              type="file"
              className="file-input file-input-ghost w-full  max-auto  text-gray-500 hover:text-blue-600"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] transition shadow-lg"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 mt-8 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const HRRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleHRRegister = async (data) => {
    try {
      const res = await axiosSecure.post("/hr/register", {
        ...data,
        createdBy: user?.email || "unknown",
      });

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "HR Registered Successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        reset();
      } else {
        Swal.fire("Error!", res.data.message || "Registration failed", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong during registration!", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl relative z-10 bg-white/80 backdrop-blur-xl border border-blue-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-100 via-sky-200 to-indigo-200 items-center justify-center p-10">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Create Your HR Account
            </h2>
            <p className="text-gray-700 text-lg">
              Register as an HR Manager to manage assets, team members, and
              company resources efficiently.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="bg-white/80 backdrop-blur-xl border border-blue-200 rounded-3xl p-4 md:p-6 shadow-2xl">
            <form
              onSubmit={handleSubmit(handleHRRegister)}
              className="space-y-6"
            >
              {/* Full Name + Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    {...register("companyName", {
                      required: "Company name is required",
                    })}
                    className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* DOB + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      {...register("dob", {
                        required: "Date of Birth is required",
                      })}
                      className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-12"
                    />
                    <Calendar
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                  {errors.dob && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.dob.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hr@yourcompany.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Logo + Photo URL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Logo URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/logo.png"
                    {...register("companyLogo")}
                    className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Photo URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/your-photo.jpg"
                    {...register("photoUrl")}
                    className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                    className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Package Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select a Package
                </label>
                <select
                  {...register("package", {
                    required: "Please select a package",
                  })}
                  className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="">Select a package</option>
                  <option value="starter">Starter</option>
                  <option value="professional">Professional</option>
                  <option value="enterprise">Enterprise</option>
                </select>
                {errors.package && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.package.message}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 mt-6"
              >
                Register as HR Manager
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6 text-sm">
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign in
              </Link>
              <h1>or</h1>
              <Link
                to="/register"
                className="text-blue-600 hover:underline font-medium"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRRegister;

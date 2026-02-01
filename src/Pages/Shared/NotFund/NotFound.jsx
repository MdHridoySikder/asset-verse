import React from "react";
import { Link } from "react-router";
import { ArrowLeft, Home } from "lucide-react";
import { FaRocket, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-50 overflow-hidden">
      {/* Background  */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 -z-10"></div>

      {/* Animated  */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/4 right-10 w-48 h-48 bg-indigo-200/30 rounded-full blur-2xl animate-blob animation-delay-6000"></div>

      <FaRocket className="absolute top-20 left-12 text-blue-400 w-12 h-12 animate-float" />
      <FaExclamationTriangle className="absolute bottom-24 right-16 text-red-400 w-14 h-14 animate-float-slow" />

      <div className="relative z-10 text-center px-6 max-w-xl">
        <h1 className="text-[120px] md:text-[160px] font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-bounce-slow drop-shadow-xl">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 animate-fadeInUp">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed animate-fadeInUp animation-delay-500">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-1000">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-500 animate-fadeInUp animation-delay-1500">
          AssetVerse © {new Date().getFullYear()} — Smart Asset Management
        </p>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .animation-delay-6000 { animation-delay: 6s; }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }
          .animate-float-slow { animation: float 6s ease-in-out infinite; }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-1500 { animation-delay: 1.5s; }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
        `}
      </style>
    </section>
  );
};

export default NotFound;

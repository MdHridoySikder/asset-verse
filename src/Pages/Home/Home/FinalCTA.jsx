import React from "react";
import { Link } from "react-router";

const FinalCTA = () => {
  return (
    <section className="py-24  text-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Headline */}
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-6 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 drop-shadow-lg pb-2"
        >
          Ready to Transform Your Asset Management?
        </h2>

        {/* Description */}
        <p className="text-gray-700 md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Join thousands of forward-thinking businesses leveraging AssetVerse to
          streamline their operations, gain real-time insights, and make smarter
          financial decisions effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            to="/join-hr"
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Join as HR Manager
          </Link>
          <Link
            to="/join-employee"
            className="bg-transparent border border-blue-600 text-blue-600 font-semibold py-4 px-8 rounded-full hover:bg-blue-600 hover:text-white transform transition-all duration-300"
          >
            Join as Employee
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

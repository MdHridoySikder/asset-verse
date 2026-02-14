import React from "react";
import { Link } from "react-router";
import { FaTimesCircle } from "react-icons/fa";

const PaymentCancelled = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 relative overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl shadow-red-200/40 p-10 max-w-xl w-full text-center border border-red-400 transform hover:scale-[1.02] transition-transform duration-300">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative bg-red-100 p-6 rounded-full shadow-lg">
            <FaTimesCircle className="text-red-500 text-6xl animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-3">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment was not completed. No charges have been made.
        </p>

        {/* Highlight Box */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8 shadow-inner hover:shadow-xl transition-shadow duration-300">
          <p className="text-red-700 font-semibold">
            ⚠️ You can try again or choose a different plan.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard/my-team"
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg hover:scale-105 duration-300"
          >
            Retry Payment
          </Link>

          <Link
            to="/"
            className="border border-red-500 text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-semibold transition hover:scale-105 duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentCancelled;

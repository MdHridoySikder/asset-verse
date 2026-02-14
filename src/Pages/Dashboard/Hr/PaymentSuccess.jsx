import React from "react";
import { Link } from "react-router";
import { FaCheckCircle, FaCrown } from "react-icons/fa";
import { BsStars, BsLightningCharge } from "react-icons/bs";
import UseAuth from "../../../Hooks/UseAuth";

const PaymentSuccess = () => {
  const { user } = UseAuth();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 relative overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl shadow-blue-200/40 p-8 my-10 max-w-xl w-full text-center border border-blue-800 transform hover:scale-[1.02] transition-transform duration-300">
        {/* Success Badge */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative bg-green-100 p-6 rounded-full shadow-lg group">
            <FaCheckCircle className="text-green-500 text-6xl animate-pulse" />
          </div>
          {/* Plan Badge */}
          <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md flex items-center gap-1">
            <FaCrown /> Premium
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl py-2 font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-">
          Congratulations <br />
        </h1>
        <p className="text-2xl text-blue-700 font-extrabold bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 ">
          {user?.displayName || "User"}
        </p>

        <p className="text-gray-600 mb-6">
          Your payment has been successfully completed.
        </p>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-2xl p-5 mb-8 shadow-inner hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center gap-2 text-blue-700 font-semibold mb-2">
            <FaCrown className="text-yellow-500 animate-bounce" />
            Premium Features Activated
          </div>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>
              <BsLightningCharge className="inline mr-1 text-blue-500" />{" "}
              Advanced analytics
            </li>
            <li>
              <BsLightningCharge className="inline mr-1 text-blue-500" />{" "}
              Expanded asset limits
            </li>
            <li>
              <BsLightningCharge className="inline mr-1 text-blue-500" />{" "}
              Role-based access control
            </li>
            <li>
              <BsLightningCharge className="inline mr-1 text-blue-500" />{" "}
              Priority support
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard/my-team"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg hover:scale-105 duration-300"
          >
            Go to My Team
          </Link>

          <Link
            to="/"
            className="border border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition hover:scale-105 duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;

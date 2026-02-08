import React from "react";

const WelcomePage = () => (
  <header className="relative w-full py-1 flex justify-center items-center overflow-hidden bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
    {/* Neon Halo */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-25 blur-3xl animate-pulse"></div>

    {/* Glowing Headline */}
    <h1 className="relative text-xl md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 drop-shadow-xl animate-pulse">
      Welcome to <span className="text-blue-400/90">Dashboard</span>!
    </h1>

    {/* Sparkle Stars */}
    <div className="absolute top-5 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-70"></div>
    <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-60"></div>
    <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-50"></div>
    <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
  </header>
);

export default WelcomePage;

import React from "react";

const Mission = () => {
  return (
    <section className="relative py-6">
      {/* Soft Background Blur */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-indigo-300/20 rounded-full blur-3xl"></div>

      {/* Glass Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            backdrop-blur-5xl 
            border border-white 
            rounded-[2.5rem] 
            px-10 md:px-24 lg:px-32 
            py-10 md:py-12
            shadow-xl 
            text-center
          "
        >
          {/* Title */}
          <h2
            className="text-5xl md:text-5xl font-extrabold tracking-tight leading-tight md:leading-snug 
               bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent 
               drop-shadow-lg mb-"
          >
            Our Mission
          </h2>
          {/* Divider */}
          <div className="w-80 h-1 bg-gradient-to-r from-blue-500 to-indigo-700 mx-auto mb-2 rounded-full"></div>
          {/* Description */}
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
            To revolutionize asset management through cutting-edge technology
            and exceptional service, enabling our clients to achieve their
            financial goals with confidence and peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;

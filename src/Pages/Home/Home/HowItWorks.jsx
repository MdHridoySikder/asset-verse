import React from "react";
import { BarChart2, ShieldCheck, Rocket, Users } from "lucide-react";

const steps = [
  {
    title: "Add Your Assets",
    description:
      "Easily register and categorize all your assets in one centralized platform.",
    icon: <BarChart2 size={28} className="text-blue-600" />,
  },
  {
    title: "Track & Monitor",
    description:
      "Monitor asset usage, location, and performance in real-time with confidence.",
    icon: <ShieldCheck size={28} className="text-blue-600" />,
  },
  {
    title: "Optimize & Report",
    description:
      "Get actionable insights and optimize asset performance for maximum ROI.",
    icon: <Rocket size={28} className="text-blue-600" />,
  },
  {
    title: "Expert Support",
    description:
      "Our team is ready to guide and support you to achieve your business goals.",
    icon: <Users size={28} className="text-blue-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-snug 
               bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent 
               drop-shadow-lg mb-"
          >
            How AssetVerse Works
          </h2>
          <p className="text-gray-700 text-xm md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ">
            A smooth and intuitive step-by-step process to simplify asset
            management.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative flex flex-col md:flex-row items-center md:justify-between ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:w-1/4 px-4"
            >
              {/* Icon Bubble */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-b-blue-500 bg-blue-100 text-blue-600 text-2xl mb-4 relative z-10 transform transition-transform duration-300 hover:scale-110">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-700 text-sm md:text-base">
                {step.description}
              </p>

              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-/10 w-full h-1 bg-blue-300 -z-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

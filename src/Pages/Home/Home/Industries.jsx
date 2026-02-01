import React from "react";
import {
  FaBuilding,
  FaHospital,
  FaUniversity,
  FaIndustry,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";

const industries = [
  {
    name: "Corporate",
    icon: <FaBuilding size={40} className="text-blue-500" />,
    description:
      "Streamlined asset management for offices, finance, and corporate infrastructure.",
  },
  {
    name: "Healthcare",
    icon: <FaHospital size={40} className="text-red-500" />,
    description:
      "Specialized solutions for hospitals, clinics, and healthcare facilities.",
  },
  {
    name: "Education",
    icon: <FaUniversity size={40} className="text-indigo-500" />,
    description:
      "Manage school, college, and university assets efficiently and securely.",
  },
  {
    name: "Manufacturing",
    icon: <FaIndustry size={40} className="text-green-500" />,
    description:
      "Optimized tracking and management for factories and industrial assets.",
  },
  {
    name: "Retail",
    icon: <FaShoppingCart size={40} className="text-yellow-500" />,
    description:
      "Inventory and asset management tailored for retail and e-commerce businesses.",
  },
  {
    name: "Logistics",
    icon: <FaTruck size={40} className="text-purple-500" />,
    description:
      "Efficient tracking of vehicles, warehouses, and logistics assets.",
  },
];

const Industries = () => {
  return (
    <section className="py-10 pb-15  text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-snug 
               bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent 
               drop-shadow-lg "
          >
            Industries We Serve
          </h2>
          <p className="text-gray-700 text-xm md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Our asset management solutions are tailored to meet the unique needs
            of various industries, providing specialized features for different
            sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-blue-200"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

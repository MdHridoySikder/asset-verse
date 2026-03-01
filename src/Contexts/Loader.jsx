import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 border-8 border-t-primary border-gray-200 rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-semibold text-primary">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;

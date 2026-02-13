import React from "react";

const UpgradePackage = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 text-black relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight md:leading-snug
        bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text text-transparent
        drop-shadow-lg"
          >
            Upgrade Your Plan
          </h2>
          <p className="text-xl md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a package that fits your team’s needs
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Starter */}
          <div className="bg-white border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-200/30">
            <h3 className="text-3xl font-bold mb-2 text-gray-800">Starter</h3>
            <p className="text-gray-500 mb-6">Best for small teams</p>
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6">
              $5{" "}
              <span className="text-xl md:text-2xl text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Asset tracking</li>
              <li>✔ Basic analytics</li>
              <li>✔ Up to 50 assets</li>
              <li>✔ Email support</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 py-4 rounded-full font-bold transition">
              Get Started
            </button>
          </div>

          {/* Professional */}
          <div className="relative bg-white border-2 border-blue-500 rounded-3xl p-8 transform hover:scale-105 transition-all shadow-sm hover:shadow-2xl hover:shadow-blue-200/30">
            <span className="absolute -top-3 right-6 bg-blue-500 text-xs font-bold px-4 py-1 rounded-full text-white">
              Most Popular
            </span>
            <h3 className="text-3xl font-bold mb-2 text-gray-800">
              Professional
            </h3>
            <p className="text-gray-500 mb-6">For growing companies</p>
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6">
              $8{" "}
              <span className="text-xl md:text-2xl text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Everything in Starter</li>
              <li>✔ Advanced analytics</li>
              <li>✔ Up to 500 assets</li>
              <li>✔ Role-based access</li>
              <li>✔ Priority support</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 py-4 rounded-full font-bold transition">
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-200/30">
            <h3 className="text-3xl font-bold mb-2 text-gray-800">
              Enterprise
            </h3>
            <p className="text-gray-500 mb-6">For large organizations</p>
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6">
              $15{" "}
              <span className="text-xl md:text-2xl text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Unlimited assets</li>
              <li>✔ Custom analytics</li>
              <li>✔ Dedicated manager</li>
              <li>✔ API access</li>
              <li>✔ 24/7 premium support</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 py-4 rounded-full font-bold transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradePackage;

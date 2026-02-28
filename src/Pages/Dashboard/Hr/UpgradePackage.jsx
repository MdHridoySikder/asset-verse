import React from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAuth from "../../../Hooks/UseAuth";

const UpgradePackage = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const handlePayment = async (price, planName) => {
    const paymentInfo = {
      senderEmail: user?.email,
      price: price,
      plan: planName,
    };

    const res = await axiosSecure.post("/payment", paymentInfo);

    window.location.href = res.data.url;
  };

  return (
    <section className="py-8  relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="sm:text-3xl heading-db font-extrabold tracking-tight leading-tight md:leading-snug bg-primary bg-clip-text text-transparent drop-shadow-lg">
            Upgrade Your Plan
          </h2>
          <p className="sm:text-xl sub-heading text-secondary max-w-3xl mx-auto">
            Choose a package that fits your team’s needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Starter */}
          <div className=" border border-blue-600/20 rounded-3xl p-8   hover:border-blue-800 transition-all hover:shadow-2xl hover:shadow-blue-200/30">
            <h3 className="text-3xl font-bold mb-2 text-primary">Starter</h3>
            <p className="text-secondary mb-6">Best for small teams</p>
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6">
              $5{" "}
              <span className="text-xl md:text-2xl text-primary">/month</span>
            </div>
            <ul className="space-y-3 text-secondary mb-8">
              <li>✔Maximum 5 employees</li>
              <li>✔Basic asset tracking</li>
              <li>✔Email support</li>
              <li>✔Basic reporting</li>
              <li>✔Mobile app accesss</li>
            </ul>
            <button
              onClick={() => handlePayment(5, "Starter")}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 py-4 rounded-full font-bold transition"
            >
              Get Started
            </button>
          </div>

          {/* Professional */}
          <div className="relative  border-1 border-blue-800 rounded-3xl p-8 transform hover:scale-105 transition-all shadow-sm hover:shadow-2xl hover:shadow-blue-200/30">
            <span className="absolute -top-3 right-6 bg-blue-500 text-xs font-bold px-4 py-1 rounded-full text-white">
              Most Popular
            </span>
            <h3 className="text-3xl font-bold mb-2 text-primary">
              Professional
            </h3>
            <p className="text-secondary mb-6">For growing companies</p>
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6">
              $8{" "}
              <span className="text-xl md:text-2xl text-primary">/month</span>
            </div>
            <ul className="space-y-3 text-secondary mb-8">
              <li>✔ Maximum 10 employees</li>
              <li>✔ Advanced asset tracking</li>
              <li>✔ Priority email support</li>
              <li>✔ Advanced reporting</li>
              <li>✔ API access</li>
            </ul>
            <button
              onClick={() => handlePayment(8, "Professional")}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 py-4 rounded-full font-bold transition"
            >
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className=" border border-blue-500/20 rounded-3xl p-8 hover:border-blue-800 transition-all hover:shadow-2xl hover:shadow-blue-200/30">
            <h3 className="text-3xl font-bold mb-2 text-primary">Enterprise</h3>
            <p className="text-secondary mb-6">For large organizations</p>
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6">
              $15{" "}
              <span className="text-xl md:text-2xl text-primary">/month</span>
            </div>
            <ul className="space-y-3 text-secondary mb-8">
              <li>✔Maximum 20 employees</li>
              <li>✔asset management</li>
              <li>✔Dedicated manager</li>
              <li>✔API access</li>
              <li>✔24/7 premium support</li>
            </ul>
            <button
              onClick={() => handlePayment(15, "Enterprise")}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 py-4 rounded-full font-bold transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradePackage;

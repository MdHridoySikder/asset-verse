import React from "react";
import {
  ShieldCheck,
  Users,
  BarChart3,
  PackageCheck,
  Building2,
  Target,
  Rocket,
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-base-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Redefining Corporate Asset Management
          </h2>
          <p className="text-lg text-secondary max-w-4xl mx-auto leading-relaxed">
            AssetVerse is a modern B2B platform built to help companies track,
            assign, and manage physical assets with precision. We combine HR
            management and asset tracking into one powerful digital ecosystem
            that eliminates confusion and increases operational clarity.
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              The Challenge Companies Face
            </h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Growing organizations often struggle to keep track of equipment
              assigned to employees. Manual tracking leads to missing devices,
              unclear accountability, and time-consuming administrative work.
            </p>
            <p className="text-secondary leading-relaxed">
              AssetVerse centralizes everything — inventory, employee
              affiliations, requests, approvals, and returns — inside one secure
              and automated workflow.
            </p>
          </div>

          <div className="bg-base-200 rounded-3xl p-10 border border-blue-800 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-800 mb-6 transition-all duration-300 hover:scale-110 hover:shadow-md">
              <Building2 size={28} className="text-primary" />
            </div>
            <h4 className="text-2xl font-bold text-primary mb-4">
              One Unified System
            </h4>
            <p className="text-secondary leading-relaxed">
              From HR managers managing company resources to employees
              requesting tools — every action is tracked, recorded, and
              optimized for maximum transparency and efficiency.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="card group bg-base-100 border border-blue-800 shadow-md hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2 transform">
            <div className="card-body">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-800 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="card-title text-primary text-2xl">Our Mission</h3>
              <p className="text-secondary">
                To simplify corporate asset management by providing a secure,
                scalable, and intelligent platform that empowers HR teams and
                improves company-wide accountability.
              </p>
            </div>
          </div>

          <div className="card group bg-base-100 border border-blue-800 shadow-md hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2 transform">
            <div className="card-body">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-800 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Rocket size={28} className="text-primary" />
              </div>
              <h3 className="card-title text-primary text-2xl">Our Vision</h3>
              <p className="text-secondary">
                To become the global standard for digital asset tracking and HR
                collaboration systems — trusted by enterprises worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-primary text-center mb-14">
            Our Core Principles
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <ShieldCheck size={28} className="text-primary" />,
                title: "Accountability",
                text: "Every asset is digitally tracked with full history visibility.",
              },
              {
                icon: <Users size={28} className="text-primary" />,
                title: "Collaboration",
                text: "HR teams and employees work within one structured ecosystem.",
              },
              {
                icon: <BarChart3 size={28} className="text-primary" />,
                title: "Data Intelligence",
                text: "Real-time analytics enable smarter operational decisions.",
              },
              {
                icon: <PackageCheck size={28} className="text-primary" />,
                title: "Efficiency",
                text: "Automated workflows reduce administrative workload.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card group bg-base-100 border border-blue-800 shadow-md hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2 transform"
              >
                <div className="card-body text-center items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-800 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-primary text-lg">
                    {item.title}
                  </h4>
                  <p className="text-secondary text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="rounded-3xl p-14 border border-blue-800 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-3xl font-bold text-primary mb-6">
            Trusted by Modern Businesses
          </h3>
          <p className="text-secondary max-w-3xl mx-auto mb-10">
            AssetVerse is helping companies transform traditional asset tracking
            into a digital-first, secure, and scalable system.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-2xl font-bold text-primary">
            <div>100+ Companies</div>
            <div>5,000+ Assets</div>
            <div>99% Accuracy</div>
            <div>24/7 Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

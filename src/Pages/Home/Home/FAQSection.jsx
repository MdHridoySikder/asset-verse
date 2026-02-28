import React, { useState } from "react";
import { ChevronDown, ShieldCheck, BarChart3, Wallet } from "lucide-react";

const faqs = [
  {
    icon: ShieldCheck,
    question: "How secure is AssetVerse for company data?",
    answer:
      "AssetVerse is built with enterprise-grade security, including encrypted data storage, role-based access control, and protected servers to keep your assets and records safe at all times.",
  },
  {
    icon: BarChart3,
    question: "Can AssetVerse track asset usage and performance?",
    answer:
      "Yes. You can monitor asset allocation, usage history, and performance through real-time analytics and detailed reports, helping you make data-driven decisions.",
  },
  {
    icon: Wallet,
    question: "How does pricing work for different companies?",
    answer:
      "Pricing is flexible and scalable based on company size and feature requirements. You can start with a free trial and upgrade anytime as your organization grows.",
  },
  {
    icon: ShieldCheck,
    question: "Who can manage and approve assets?",
    answer:
      "HR and Admin users have full control over asset assignment, approvals, employee access, and reporting, while employees can view and request assigned assets.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 "></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2
            className="sm:text-5xl  heading font-extrabold tracking-tight leading-tight md:leading-snug 
             text-primary drop-shadow-lg mb-2"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">
              Questions
            </span>
          </h2>
          <p className="text-secondary sub-heading max-w-2xl mx-auto">
            Everything you need to know about AssetVerse, security, features,
            and pricing.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg- shadow-xl border-blue-900"
                    : "bg- border border-blue-400 "
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-secondary">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gray-600" : "text-blue-600"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-secondary text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

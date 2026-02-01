import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I add my assets to AssetVerse?",
    answer:
      "Simply navigate to the 'Add Assets' section, enter the details, categorize them, and save. AssetVerse keeps everything centralized for easy management.",
  },
  {
    question: "Is my data secure on AssetVerse?",
    answer:
      "Yes! AssetVerse uses end-to-end encryption, secure servers, and role-based access to ensure your asset data remains completely safe.",
  },
  {
    question: "What is the pricing model?",
    answer:
      "AssetVerse offers flexible subscription plans based on your company size and features needed. You can start with a free trial to explore the platform.",
  },
  {
    question: "Can I generate reports?",
    answer:
      "Absolutely! AssetVerse provides real-time analytics and customizable reports to track asset performance, usage, and ROI.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20  text-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 md:text-xl max-w-2xl mx-auto leading-relaxed">
            Common questions about usage, security, and pricing answered
            clearly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-transparent border-b border-gray-300 last:border-b-0"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 text-left text-lg md:text-xl font-medium text-blue-700 hover:text-blue-800 transition"
              >
                {faq.question}
                <ChevronDown
                  className={`ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="text-gray-700 text-base md:text-lg pb-4 pt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

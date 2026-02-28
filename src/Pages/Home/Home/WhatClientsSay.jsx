import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Rodriguez",
    position: "Asset Manager",
    company: "Investment Partners",
    review:
      "AssetVerse reduced asset errors by 30% and improved reporting accuracy. A must-have tool!",
    rating: 5,
    img: "/client11.png",
  },
  {
    name: "Michael Chen",
    position: "CFO",
    company: "Global Finance Ltd",
    review:
      "Tracking and managing our portfolio is effortless now. Secure, fast, and reliable.",
    rating: 5,
    img: "/client2.png",
  },
  {
    name: "Sarah Thompson",
    position: "Operations Director",
    company: "Tech Innovations",
    review:
      "Real-time insights save us hours every week. AssetVerse is essential for asset managers.",
    rating: 5,
    img: "/client3.png",
  },
  {
    name: "David Williams",
    position: "Senior Portfolio Manager",
    company: "Capital Growth Inc",
    review:
      "The automation and analytics features transformed the way we manage assets. Highly recommended!",
    rating: 5,
    img: "/client4.png",
  },
];

const WhatClientsSay = () => {
  return (
    <section className="py-16 text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="sm:text-4xl heading font-extrabold bg-primary bg-clip-text text-transparent drop-shadow-lg mb-2">
            What Our Clients Say
          </h2>
          <p className="text-secondary sub-heading">
            Don’t just take our word for it — hear from some of our satisfied
            clients
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30 "
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-600">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-primary mt-3">
                  {testimonial.name}
                </h4>
                <p className="text-secondary text-xs mt-0.5">
                  {testimonial.position}
                </p>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-secondary text-sm leading-relaxed flex-grow">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatClientsSay;

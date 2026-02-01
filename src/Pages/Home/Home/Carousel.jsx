import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

const Carousel = () => {
  const slides = [
    {
      title: "Manage Assets Smarter",
      description:
        "Manage all your company assets, employees, and reports from one secure and easy-to-use platform.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      btnText: "Get Started",
      link: "/login",
    },
    {
      title: "Join as Employee",
      description:
        "View your assigned assets, submit requests, and track your asset history with complete transparency.",
      img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
      btnText: "Join as Employee",
      link: "/register-employee",
    },
    {
      title: "For HR & Admins",
      description:
        "Easily manage employees, assign assets, approve requests, and generate detailed reports from a single dashboard.",
      img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      btnText: "Join as HR manager",
      link: "/register-hr",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timeoutRef.current);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden shadow-2xl ">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative group">
            {/* Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-72 md:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

            {/* Content */}
            <div className="absolute top-1/2 left-6 md:left-20 -translate-y-1/2 max-w-md text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg mb-6 text-gray-200">
                {slide.description}
              </p>

              <Link
                to={slide.link}
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-400 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                {slide.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 w-full flex justify-between px-4 -translate-y-1/2">
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="bg-blue-600 hover:bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="bg-blue-600 hover:bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;

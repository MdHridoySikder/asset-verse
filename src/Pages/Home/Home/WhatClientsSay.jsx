import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";

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
];

const WhatClientsSay = () => {
  return (
    <section className="py-16  text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Don’t just take our word for it — hear from some of our satisfied
            clients
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 100, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={3}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full max-w-xs mx-auto hover:shadow-xl transition-all duration-300 border border-gray-200 py-5">
                <div className="flex flex-col items-center mb-4 ">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-600  ">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base font-bold text-indigo-700">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs">
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

                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  "{testimonial.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatClientsSay;

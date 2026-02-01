import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import {
  FaGoogle,
  FaApple,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaAndroid,
} from "react-icons/fa";
import { BiMobile } from "react-icons/bi";

const brands = [
  { name: "Google", icon: <FaGoogle size={40} className="text-blue-600" /> },
  { name: "Apple", icon: <FaApple size={40} className="text-gray-700" /> },
  {
    name: "Facebook",
    icon: <FaFacebookF size={40} className="text-blue-500" />,
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={40} className="text-blue-700" />,
  },
  { name: "Twitter", icon: <FaTwitter size={40} className="text-blue-400" /> },
  { name: "Android", icon: <FaAndroid size={40} className="text-green-500" /> },
];

const TrustedBy = () => {
  return (
    <section className="py-10  text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
          Powering Smart Asset Decisions Globally
        </h2>
        <p className="text-gray-700 text-xm md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
          AssetVerse is trusted by forward-thinking companies to streamline
          asset management, improve visibility, and drive confident, data-driven
          decisions across their organizations.
        </p>

        <div className="mt-12">
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            centeredSlides={true}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center gap-2 w-36 h-36"
              >
                <div className="p-4 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  {brand.icon}
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base mt-2">
                  {brand.name}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

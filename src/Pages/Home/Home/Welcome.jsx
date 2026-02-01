import React from "react";
import { BarChart2, ShieldCheck, Rocket, Users } from "lucide-react";
const Welcome = () => {
  return (
    <div>
      <section className="py-5 pb-12 text-black relative ">
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Welcome Text */}
          <div className="text-center mb-10">
            <h2
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-snug 
               bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent 
               drop-shadow-lg mb-"
            >
              Welcome to AssetVerse
            </h2>
            <p className="text-gray-700 text-xm md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ">
              AssetVerse is a modern asset management platform that combines
              innovative technology with financial expertise to deliver smart
              and efficient investment solutions for organizations and
              individuals. We help users manage, track, and optimize their
              assets with confidence, empowering them to make informed financial
              decisions.<br></br>
            </p>
            <p className="text-blue-600 font-semibold mt-2 text-xl drop-shadow-lg">
              “Your Assets, Your Control, Our Technology”
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-50/60 backdrop-blur-xl border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <BarChart2 size={32} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Advanced Analytics
              </h3>
              <p className="text-gray-700">
                Comprehensive data analysis and reporting tools to help you make
                informed investment decisions and track performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50/60 backdrop-blur-xl border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <ShieldCheck size={32} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Secure Platform
              </h3>
              <p className="text-gray-700">
                Bank-level security measures to protect your assets and ensure
                the highest standards of data protection.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50/60 backdrop-blur-xl border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <Rocket size={32} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Innovation First
              </h3>
              <p className="text-gray-700">
                Cutting-edge technology and continuous innovation to provide you
                with the best asset management solutions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-gray-50/60 backdrop-blur-xl border border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <Users size={32} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Expert Support
              </h3>
              <p className="text-gray-700">
                Our team of experienced professionals provides dedicated support
                and guidance to help you achieve your investment objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;

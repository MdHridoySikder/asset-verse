import React from "react";

import TrustedBy from "./TrustedBy";

import Welcome from "./Welcome";
import Industries from "./Industries";
import HowItWorks from "./HowItWorks";
import ChatWidget from "./ChatWidget";
import WhatClientsSay from "./WhatClientsSay";
import FinalCTA from "./FinalCTA";
import FAQSection from "./FAQSection";
import Mission from "./Mission";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      {/* Carousel added */}
      <Welcome />
      <TrustedBy />
      <Mission />
      <Industries />
      <HowItWorks />
      {/* pricing added */}
      <WhatClientsSay />
      <FAQSection />
      <ChatWidget />
      <FinalCTA />
    </div>
  );
};

export default Home;

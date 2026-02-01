import React from "react";

import TrustedBy from "./TrustedBy";

import Welcome from "./Welcome";
import Industries from "./Industries";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <Welcome />
      <Industries />
      <TrustedBy />
      <HowItWorks />
    </div>
  );
};

export default Home;

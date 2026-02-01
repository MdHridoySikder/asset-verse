import React from "react";

import TrustedBy from "./TrustedBy";

import Welcome from "./Welcome";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <Welcome />
      <TrustedBy />
    </div>
  );
};

export default Home;

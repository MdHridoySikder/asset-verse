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
import Carousel from "./Carousel";
import Forbidden from "../../Shared/Forbidden";
import Package from "../Package";
import ReturnableChart from "./ReturnableChart";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: assets = [] } = useQuery({
    queryKey: ["assets-list", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/assets-collection?email=${user?.email}`,
      );
      return res.data;
    },
  });

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <Carousel />
      <Welcome />
      <ReturnableChart assets={assets} />
      <TrustedBy />
      <Mission />
      <Industries />
      <HowItWorks />
      <Package />
      <WhatClientsSay />
      <FAQSection />
      <ChatWidget />
      <FinalCTA />
    </div>
  );
};

export default Home;

import React from "react";
import banner from "../assets/hero_2.webp";
import Find from "./Find";
const Banner = () => {
  return (
    <div className="relative w-screen  ">
      <img src={banner} alt={banner} className="h-[100vh] w-screen" />
      <Find />
    </div>
  );
};

export default Banner;

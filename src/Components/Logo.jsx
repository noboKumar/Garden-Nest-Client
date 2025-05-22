import React from "react";
import logo from "../assets/gardenNest Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <img className="w-12 h-12 md:w-14 md:h-14" src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="poppins text-2xl md:text-3xl font-semibold"><span className="text-secondary">Garden</span>Nest</h1>
      </div>
    </div>
  );
};

export default Logo;

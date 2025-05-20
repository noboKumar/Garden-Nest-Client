import React from "react";
import logo from "../assets/gardenNest Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <img className="w-14 h-14" src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="poppins text-3xl"><span className="text-secondary">Garden</span>Nest</h1>
      </div>
    </div>
  );
};

export default Logo;

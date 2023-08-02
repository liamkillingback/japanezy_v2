import React from "react";
import { instagram, facebook, logo } from "../assets";

const Footer = () => {
  return (
    <div className="h-32 w-full bg-[rgb(127,231,200)] flex flex-row items-center justify-around">
      <img src={logo} alt="" className="h-10" />
      <div className="gap-10 flex h-10">
        <a href="/" target="_blank">
          <img src={instagram} alt="" className="w-10 h-10" />
        </a>
        <a href="/" target="_blank">
          <img src={facebook} alt="" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

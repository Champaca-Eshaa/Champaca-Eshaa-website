import React from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import logo from "../assets/logo.svg";
import statue1 from "../assets/Hero-sec.png";
import logoText from "../assets/logo-text.png";
import lamp from "../assets/lamp.png";
import lamp2 from "../assets/lamp-2.png";
const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className="grid max-md:grid-cols-1 grid-cols-2  pt-20"
      >
        <div className="flex flex-col max-md:items-center items-end text-center justify-center md:pl-10 rise-fade">
          <div className="flex items-center justify-center gap-5  max-sm:gap-1 scale-90 max-lg:scale-75 ">
            <img
              className="scale-[1.8] max-sm:scale-[1] max-md:scale-[1.4] max-sm:"              src={logo}
              alt="logo"
            />
            <img className="max-sm:w-1/2" src={logoText} alt="logo" />
          </div>
          <p className=" text-4xl font-bold py-3 max-sm:text-2xl">
            Crafting Divine Beauty
          </p>
          <p className="text-4xl font-bold text-amber-600 max-sm:text-2xl">
            With Pure Artistry
          </p>
        </div>
        <div className="relative flex flex-col items-center  text-center rise-fade max-md:pt-20">
          <img
            className="scale-75 max-sm:scale-90 brightness-"
            src={statue1}
            alt="statue-1"
          />
          <div className="absolute flex justify-center h-screen">
          <ScrollParallax isAbsolutelyPositioned={false}>
            <div className="scale-75 -pt-10 brightness-75">
              <img src={lamp} alt="lamp" className="-rotate-12" />
            </div>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned={false}>
            <div className="scale-50 pt-72 brightness-75">
              <img src={lamp2} alt="lamp2" className="rotate-12" />
            </div>
          </ScrollParallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { cn } from "../../utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmoothDemo } from "./Typing"
export function SpotlightPreview() {
  return (
    <div className="h-[90%] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">

      <Spotlight
        className="-top-40 left-0  md:-top-20"
        fill="white"
      />

      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Regal <span className="bg-gradient-to-r from-yellow-500 
                via-orange-500 
                to-orange-800
                text-transparent bg-clip-text">Tech</span>  <br /> is the new tech.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading organizations in the UAE. We serve a range of sectors from hospitality and retail, to government and education.
        </p>
        <div className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 pt-4 md:space-x-4 ">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            contact us
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { Counter } from "./Counter"
export function ImagesSliderDemo() {
  const images = [
    "https://regaltech.ae/wp-content/uploads/2019/04/118luxury-tower.jpg",
    "https://regaltech.ae/wp-content/uploads/2019/03/banner1.jpg",
    "https://regaltech.ae/wp-content/uploads/2019/04/taj-hotel-lake-towers.jpg",
    "https://regaltech.ae/wp-content/uploads/2019/04/festiv-city.jpg",
    "https://regaltech.ae/wp-content/uploads/2019/04/banner2.jpg",
    "https://regaltech.ae/wp-content/uploads/2019/04/fujairah-emirate.jpg",

  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      

          <div className="flex space-x-16  pl-64 pr-60  ">
            <Counter number={5} title="Countries" />
            <Counter number={320} title="Employees" />
            <Counter number={3500} title="Customers served" />
            <Counter number={30} title="Locations" />
            <Counter number={65} title="Years" />

          </div>

        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-lg relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}

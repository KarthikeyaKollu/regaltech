"use client"
import { GlobeDemo } from "./components/globe"
import { SpotlightPreview } from './components/Spotlight'

import { InfiniteMovingCardsDemo } from './components/Cards'
import { DirectionAwareHoverDemo } from './components/DirectionCard'
import { ImagesSliderDemo } from './components/ImageSlider'
import { TabsDemo } from "./components/Tabs"
import { StickyScrollRevealDemo } from "./components/StickyScroll"
import React, { useEffect } from "react";
import Link from 'next/link';

const projects = [
  { title: "Taj Hotel, Jumeirah Lake Towers", text: "Pay TV Distribution Channels | WiFi System | IP Intercom | Gate Barrier System | PABX Telephony System | UPS System | and Many More", image: "https://regaltech.ae/wp-content/uploads/2016/06/taj-hotel-1.jpg" },


  { title: "Robinsons, Festival City", text: "Structured Cabling | CCTV & Access Control System | Background Music System", image: "https://regaltech.ae/wp-content/uploads/2016/06/downtown5.jpg" },



  { title: "118 Downtown, Luxury Tower", text: "CCTV & Access Control System | SMATV | Intercom System | Bollards System", image: "https://regaltech.ae/wp-content/uploads/2016/06/downtown.jpg" },

]

export default function Home() {
  useEffect(() => {
    document.body.classList.add('dark');
  }, [])
  return (
    <div className="">


      <div className="grid grid-cols-6 gap-5 h-screen">
        <div></div>
        <div className="col-span-2"><SpotlightPreview /></div>
        <div className="col-span-2 mt-10"><GlobeDemo /></div>
        <div></div>
      </div>
      <div className="w-[30%] border rounded-xl mx-auto p-5 absolute top-[80%] right-[10%]">
        <img src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/542b1a26-7cee-4f95-b5a1-fbe4c0e095f1" alt="" />
        <img src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/31502063-80b5-47dc-aaab-55f17e44b41e" alt="" />

      </div>


      <div className=" p-4 max-w-7xl  mx-[9%] relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Achivements.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>

      <div className="w-[80%] mx-auto rounded-lg overflow-hidden pt-10">
        <ImagesSliderDemo />
      </div>

      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-40">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Our Services
        </h1>
        <p className=" font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Setting new benchmarks in technology services while ensuring transparency, and respect to people and environment
        </p>
      </div>

      <div className="w-[80%] mx-auto rounded-lg overflow-hidden ">
        <TabsDemo />
      </div>



      {/* <ParallaxScrollDemo/> */}
      {/* <TracingBeamDemo /> */}

      <div className=" p-4 max-w-7xl  mx-[9%] relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Products & Solutions
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg pb-10">
          RegalTech has the expertise to supply, install and commission a range of products and solutions for your needs.
        </p>
      </div>


      <div className="w-[85%] mx-auto rounded-lg overflow-hidden pt-10 relative">
        <StickyScrollRevealDemo />
        <div className="absolute bottom-10 left-[50%]">
          <svg
            className="animate-bounce w-20 h-20 text-indigo-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              d="M12 16L6 10L7.41 8.58L12 13.17L16.59 8.58L18 10L12 16Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>


      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Project References
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading


        </p>
      </div>

      <div className="felx justify-center w-[80%] mx-auto">
        <div className='w-[70%] grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto md:gap-y-16 pt-20'>
          {projects.map((item, i) =>
            (<DirectionAwareHoverDemo key={i} item={item} />)
          )}

        </div>


        <div className="relative">
          <Link href="pages/projects">
            <p className="top-2.5 right-2.5 p-3 underline text-orange-400 cursor-pointer z-10 text-right w-[90%]" >View All Projects</p>
          </Link>
        </div>
      </div>

      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          What Our Customers Say
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>


      <InfiniteMovingCardsDemo />


    </div>
  );
}

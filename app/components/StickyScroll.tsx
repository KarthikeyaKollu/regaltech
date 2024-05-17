"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Regal Hospitality Solutions",
    description:
      "Established in 1952, Regal Group has diversified interests from Textile to Technology. After establishing itself in the textile industry, the group forayed into technology and saw greatachievements and projects while serving Hospitality giants like Hyatt, TAJ, Hilton, Jumeirah, Shangri-la, One & Only, Le Meridien, and Rixos. Some of the other areas that the group has successfully ventured into are E-commerce, and Real Estate.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/422242e7-7605-4046-a330-9d2da9554877"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Entertainment and Content Delivery Solutions",
    description:
      "RegalTech specializes in providing quality television viewing experiences. we were the first company in the Middle East to offer satellite services to the local population. We continue to be the leading providers of Free-to-air and Pay channel content, through the latest IPTV and SMATV technologies. We deliver high resolution content, and related technologies like 4K and 8K on varied display formats, from large screen LED and Video walls, to mobile screens.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/27cd4a40-4294-48e4-9a0c-37af61c6f390"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Security and ELV solutions",
    description:
      "RegalTech provides best Security and ELV solutions in Dubai. Our services include CCTV installation, Access Control Systems, Home Automation, Security and Safety for commercial, government and industrial sectors throughout the U.A.E",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/9f335cc0-fd27-4819-9e79-9bb611d5e356"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "IT Solutions",
    description:
      "RegalTech provides best IT solutions in Dubai. The services and solutions provided by RegalTech include maintenance and installation of IT based equipment and networking hardware.IT is the backbone for communication, as all the devices of the present and future are network based. RegalTech has a trained and proficient team to provide provide the best IT solutions for the following services",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/637b6148-8a07-4d13-adf0-182af08973f7"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Audio Visual and Digital Signage Solutions.",
    description:
      "RegalTech specialises in creating immersive customer experiences by offering Audio Visual and Digital signage Solutions in Dubai. From digitization of classrooms to interactive technologies at public places and boardrooms, the world is going digital and Regal Tech is one of the top audio visual companies in Dubai which help organizations, and individuals connect and collaborate through multi-sensory solutions that include the following:",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/950e2af7-d6c8-4e0a-b731-456204e96ba6"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Home Automation Solutions",
    description:
      "Convenience and safety have become prerequisites in urban lives. Home automation systems allow you to experience the luxury of hotels within the comforts of your home. With RegalTech home automation solutions, you can control lights, air conditioning, curtains, TV and much more on your fingertips. Features like audio triggered controls are added keeping in mind the lifestyle of the urban family. Another such convenience is managing video door entry calls in an innovative and functional way. This is especially useful for working executives, who would like help at home when they are away.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/965b85d0-a28d-454e-942f-df9201d740e6"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Smart IoT Solutions",
    description:
      "RegalTech provides smart IoT Solutions in Dubai. Transformational technologies like Iot, Robotics and AI, are changing the way we do business. The IoT (Internet Of Things) started with machine-to-machine (M2M) in manufacturing settings. Today knowingly or unknowingly all our lives are connected to the digital world. Businesses can use this interconnectedness to create an intelligent operating web to improve efficiency, automate and monitor operations, and generate higher risks.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/8048053c-7f6b-4e63-9a88-75586c1b2a45"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

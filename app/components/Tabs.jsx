"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";



// IT & ELV Consult
// Authorized Svc Centers (ASC)
// Managed IT Solutions
// Maintenance (IT & ELV)
// Virtual Maintenance Contracts (VMC)
// Content Services
export function TabsDemo() {
  const tabs = [
    {
      title: "IT & ELV Consult",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white border-2 border-orange-500 bg-cover bg-center bg-no-repeat backdrop-blur-lg ">
          <p>IT & ELV</p>
          <DummyContent url={"https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/75e17d3d-3884-4a7d-90c3-1f6d2be9aa38"} />
        </div>
      ),
    },
    {
      title: "Authorized Centers",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>Authorized Centers</p>
          <DummyContent url={"https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/719948d6-18ad-4d0d-a89e-b704964743b2"} />
        </div>
      ),
    },
    {
      title: "Managed IT Solutions",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>IT Solutions</p>
          <DummyContent url={"https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/cbeca077-59b0-40ea-91d1-1b5c8fe94650"} />
        </div>
      ),
    },
    {
      title: "Virtual Maintenance Contracts",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>Maintenance</p>
          <DummyContent url={"https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/e4ff2da4-44d7-4cc8-9609-1386558e2639"}/>
        </div>
      ),
    },
    {
      title: "Content Services",
      value: "radom",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500 ">
          <p>Content Services</p>
          <DummyContent url={"https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/f662192b-f066-426e-bd0c-9b487eac1265"}/>
        </div>
      ),
    },
  
    {
      title: "Maintenance (IT & ELV)",
      value: "rando",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>Maintenance</p>
          <DummyContent  url={"https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/51e901cd-f52a-4479-9738-2c8fe4ef9b38"}/>
        </div>
      ),
    },
   
  ];

  return (
    <div className="h-[20rem] md:h-[45rem] [perspective:1000px] relative  flex flex-col  mx-auto w-[80%]  items-start justify-start my-40 ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({url}) => {
  return (
    <img
      src={url}
      alt="dummy image"
      width="100"
      height="100"
      className="  h-[60%]  md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto mt-3"
    />
  );
};

import React from 'react'
import {DirectionAwareHoverDemo} from "../../components/DirectionCard"
const projects=[
  {title:"Taj Hotel, Jumeirah Lake Towers",text:"Pay TV Distribution Channels | WiFi System | IP Intercom | Gate Barrier System | PABX Telephony System | UPS System | and Many More",image:"https://regaltech.ae/wp-content/uploads/2016/06/taj-hotel-1.jpg"},


  {title:"Robinsons, Festival City",text:"Structured Cabling | CCTV & Access Control System | Background Music System",image:"https://regaltech.ae/wp-content/uploads/2016/06/downtown5.jpg"},



  {title:"118 Downtown, Luxury Tower",text:"CCTV & Access Control System | SMATV | Intercom System | Bollards System",image:"https://regaltech.ae/wp-content/uploads/2016/06/downtown.jpg"},


  {title:"One & Only Royal Mirage Resort",text:"CCTV & Access Control System | SMATV System | BGM System | Structured Cabling System | AV/BGM System | Pay TV Distribution Channels",image:"https://regaltech.ae/wp-content/uploads/2019/04/downtown-4.jpg"},


  {title:"BMW Training Facility",text:"CCTV & Access Control System | Intrusion Detection System | Public Address System",image:"https://regaltech.ae/wp-content/uploads/2019/04/downtown-5.jpg"},


  {title:"Fujairah Emirate Authorities",text:"VMS & LPR System – SecurOS",image:"https://regaltech.ae/wp-content/uploads/2019/04/downtown-6.jpg"},


  {title:"Le Meridien Al Aqah, Beach Resort",text:"CCTV System | SMATV System | BGM System | Structured Cabling System | Pay TV Distribution Channels",image:"https://regaltech.ae/wp-content/uploads/2019/04/download-12.jpg"},


  {title:"Hyatt Regency, Deira",text:"CCTV & Access Control System | Structured Cabling | BGM System | IPTV System | Pay TV Distribution Channels |",image:"https://regaltech.ae/wp-content/uploads/2019/04/download-13.jpg"},


  {title:"Emaar Business Park",text:"CCTV & Access Control System | PA System",image:"https://regaltech.ae/wp-content/uploads/2019/04/download-14.jpg"},


  {title:"Etisalat Academy, Dubai (Hostel)",text:"Fiber Optical SMATV system | 53 Digital Channels for 350 points |",image:"https://regaltech.ae/wp-content/uploads/2019/04/downtown-4.jpg"},


  {title:"Grand Hyatt Hotel, Dubai",text:"40 channel Head End | 20 IF transponders with Fiber Optic Distribution over 1.4 km. |",image:"https://regaltech.ae/wp-content/uploads/2019/04/downtown-5.jpg"},


  {title:"Dubai World Trade Centre -Apartment Blocks",text:"IF Multiswitch system for 1,000 TV points in 6 Apartment Blocks at Sheikh Zayed Road",image:"https://regaltech.ae/wp-content/uploads/2019/04/downtown-6.jpg"},


  {title:"Dubai Police Hq",text:"CCTV System",image:"https://regaltech.ae/wp-content/uploads/2019/04/download-12.jpg"},


  {title:"Hyatt Regency, Deira",text:"CCTV & Access Control System | SMATV System | Intercom System",image:"https://regaltech.ae/wp-content/uploads/2019/04/download-15.jpg"},


]
const page = () => {
  return (
    <div>
      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-40">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Project References
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>

      <div className='w-[70%] grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto md:gap-y-16 pt-20'>
      { projects.map((item,i)=>
             (<DirectionAwareHoverDemo key={i} item={item}/>)
      )}
        
      </div>
    </div>
  )
}

export default page

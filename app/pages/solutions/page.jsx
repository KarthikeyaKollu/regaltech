import React from 'react'
import { TracingBeamDemo } from "../../components/Info"
import { ParallaxScrollDemo } from "../../components/ParallaxScroll"

const images_security = [
  "https://regaltech.ae/wp-content/uploads/2019/03/cctv-1.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/access-control.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/Intercom.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/05/anpr-2.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/control-centre.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/05/master-clock-2.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/control-centre.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/grms.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/gate-barrier.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/grms.jpg",
  "https://regaltech.ae/wp-content/uploads/2019/03/gate-barrier.jpg"
 
 ];

const images_solutions = [
"https://regaltech.ae/wp-content/uploads/2019/05/structured-cabling-2.jpg",
"https://regaltech.ae/wp-content/uploads/2019/05/data-center-2.jpg",
"https://regaltech.ae/wp-content/uploads/2019/03/serversstorage.jpg",
"https://regaltech.ae/wp-content/uploads/2019/05/gpun-1.jpg",
"https://regaltech.ae/wp-content/uploads/2019/03/ip-telephony.jpg",
"https://regaltech.ae/wp-content/uploads/2019/05/activepassive-2.jpg",
"https://regaltech.ae/wp-content/uploads/2019/05/activepassive-2.jpg",
 
 ];
 

const dummyContent = [
  {
    title: "Regal Hospitality Solutions",
    description: (
      <>
        <p className='pb-2'>
          Established in 1952, Regal Group has diversified interests from Textile to Technology. After establishing itself in the textile industry, the group forayed into technology and saw great



        </p>
        <p className='pb-2'>
          achievements and projects while serving Hospitality giants like Hyatt, TAJ, Hilton, Jumeirah, Shangri-la, One & Only, Le Meridien, and Rixos. Some of the other areas that the group has successfully ventured into are E-commerce, and Real Estate.
        </p>
        <p>

          Regal Traders and RegalTech jointly offer a range of solutions for the Hospitality Industry that includes Soft Furnishing and Made-ups like premium Bed & Bath linen, Curtains, Uniforms, and outdoor fabrics; and Technology services like GPON, GRMS, CCTV, Access Control, IP Telephony, IPTV, Channel Distribution and AV & BGM Solutions among others.


        </p>
      </>
    ),
    badge: "IT solutions",
    image:
      "https://regaltech.ae/wp-content/uploads/2020/01/hospitality.jpg",
  },
  {
    title: "Entertainment and Content Delivery Solutions",
    description: (
      <>
        <h1 className='text-md pt-2 pb-2 font-bold'>Pay channels and Free to air channels</h1>
        <p className='pb-2'>
          RegalTech specializes in providing quality television viewing experiences. we were the first company in the Middle East to offer satellite services to the local population. We continue to be the leading providers of Free-to-air and Pay channel content, through the latest IPTV and SMATV technologies. We deliver high resolution content, and related technologies like 4K and 8K on varied display formats, from large screen LED and Video walls, to mobile screens.
        </p>
        <div >
          <img src="https://regaltech.ae/wp-content/uploads/2020/06/pay-chanel-1.jpg" alt="" width={"50%"} className='mx-auto  rounded-lg m-10 object-cover' />
        </div>
        <p className='pb-2'>
          We offer a one stop solution for all the available pay channels, in various languages ranging from Russian and German to English and Arabic. In addition, our technical support team, and easy renewal options offer seamless service to our customers.
        </p>
        <h1 className='text-md  pt-2 pb-2 font-bold'>SMATV and IPTV</h1>
        <p className='pb-2'>
          Regal Technology delivers high quality content to communities, individuals and organizations, in addition to channel delivery, offering an integrated and seamless service.
          SMATV: SMATV is most commonly used within communities where a shared antenna is installed for better cost efficiencies.
        </p>
        <div >
          <img src="https://regaltech.ae/wp-content/uploads/2019/04/entairtainment.jpg" alt="" width={"50%"} className='mx-auto  rounded-lg m-10 object-cover' />
        </div>
        <p className='pb-2'>
          IPTV (Internet Protocol Television): Digital television services are enabled through Internet Protocol, allowing entertainment with high quality HD images.

          Our integrated approach allows flexibility, negligible downtime, optimum high-end output, and time and cost savings. Putting the customer first, Regal Technology ensure uninterrupted streaming and network through Ethernet over Coax (EoC), Structured Cabling, and Fibre Optic technology.
        </p>

      </>
    ),
    badge: "Changelog",
    image:
      "https://regaltech.ae/wp-content/uploads/2019/05/content-services-2.jpg",
  },
  {
    title: "Security and ELV solutions",
    description: (
      <>
        <p className='pb-2'>
          RegalTech provides best Security and ELV solutions in Dubai. Our services include CCTV installation, Access Control Systems, Home Automation, Security and Safety for commercial, government and industrial sectors throughout the U.A.E
        </p>
        <h1 className='text-md  pt-2 pb-2 font-bold'>On Demand Service</h1>
        <p>
          From a small CCTV installation to an integrated command control centre of a large community, RegalTech has the expertise to supply, install and commission a range of ELV and security systems. Our solutions meet the highest benchmarks and include the latest IP based and fibre optic technologies, high speed servers, storage and analytics
        </p>
        <h1 className='text-md  pt-2 pb-2 font-bold'>Preventive Maintenance</h1>
        <p>
          RegalTech has demonstrated its security proficiency at various projects, including large hospitality groups and government authorities.
        </p>
        <div className=' '>
          <ParallaxScrollDemo urls={images_security} />
        </div>
        <p className='pb-2 pt-5'>
        See some of our partners that help us build secure, reliable, and advanced technology systems and controls.
        </p>
        <div >
          <img src="https://regaltech.ae/wp-content/uploads/2019/04/securityelv-solution-3.jpg" alt="" width={"50%"} className='mx-auto  rounded-lg m-10 object-cover' />
        </div>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://regaltech.ae/wp-content/uploads/2019/03/on-demand-img.jpg",
  },

  {
    title: "IT Solutions",
    description: (
      <>
        <p className='pb-2'>
        RegalTech provides best IT solutions in Dubai. The services and solutions provided by RegalTech include maintenance and installation of IT based equipment and networking hardware.
        </p>
        <p className='pb-8'>
        IT is the backbone for communication, as all the devices of the present and future are network based. RegalTech has a trained and proficient team to provide provide the best IT solutions for the following services
        </p>
        <ParallaxScrollDemo urls={images_solutions}/>
      </>
    ),
    badge: "Changelog",
    image:
      "https://regaltech.ae/wp-content/uploads/2019/03/upgrade-img.jpg",
  },

  {
    title: "Managed IT and ELV Services & Solutions",
    description: (
      <>
        <p className='pb-2'>
          Information Technology is the key tool of every business to meet its objective. RegalTech is one of the leading managed IT service provider that offers the best IT Solutions to meet your business IT needs. We manage IT services in Dubai by replacing traditional information technology management tools without worrying about large capital investment. We work as an extended arm of your organization, understanding and managing your technology, business requirements, and their inter-dependencies.
        </p>
        <p className='pb-2'>
          More and more organizations are looking at managed IT and ELV services in Dubai to reduce fixed costs, and streamline operational efficiency. We provide cost-effective outsourcing technology tools and methods to manage and protect enterprise networks, systems, and applications. We deliver the best IT solutions in Dubai to meet the business standards in terms of their services as well as outcomes. Our highly skilled IT experts will understand your needs in detail and give the best result to meet the business goals.
        </p>
        <p className='pb-2'>
          We are experts in security & IT solutions, ELV system integrator, audio-video solutions, CCTV installation, home automation, pay channel distribution, structured cabling, and annual maintenance contracts. We have vast experience in providing managed IT services to organizations in Dubai. Technical expertise, ease of availability, and high service levels of our support staff ensure you can focus on your core business while RegalTech takes care of all technical requirements.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://regaltech.ae/wp-content/uploads/2019/03/manage-services.jpg",
  },

  {
    title: "Authorized Service Centers",
    description: (
      <>
        <p className='pb-2'>
          RegalTech not only facilitates purchase of ELV, AV and related equipment, but ensures smooth functioning of the same through our authorized service centers in Dubai.Our highly skilled engineers offer
          CCTV Repair Service
          Access Control Repair Service & more services to rectify your system’s fault
        </p>
        <p className='pb-2'>
          After having invested on purchase of hardware like home automation systems, technical glitches can make your experience less than perfect. We are here to help, and make it a smooth one. RegalTech operates authorized service centres for a range of leading brands in ELV, AV and related fields. Our trained technicians use trusted parts for cctv repair, access control repair, DVR repair service , etc to offer peace of mind to the customer
        </p>
        <p className='pb-2'>
          Home Automation Technology leaders like Fermax have recognized our expertise and authorized us to service and repair Fermax audio & video door entry systems, home automation and access control systems solution equipments.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://regaltech.ae/wp-content/uploads/2019/03/service-center-img.jpg",
  },

  {
    title: "IT and ELV Consultants",
    description: (
      <>
        <p className='pb-2'>
          RegalTech provides IT Consultant and ELV Consultant services in Dubai.  Along with a wide portfolio of technological services in Dubai. We offer bespoke solutions in Dubai for each client. Every organisation is unique and has a distinct set of needs and challenges.Our highly skilled engineers will offer a complete range of consulting, design and engineering services to meet the needs of business.
        </p>
        <p className='pb-2'>
          Our professional IT consultancy services in Dubai will help the clients to shape their business operations. Get the IT and ELV consultant service in Dubai  from our team of experts. We deal in range of technical services i.e. security and ELV solutions, audio-video solutions, home automation, pay channel distribution, and more that deliver office solutions on time.
        </p>
        <p className='pb-2'>
          Our experienced and skilled team visits the site for a thorough understanding of the requirements. After a detailed study of the requirement and related drawings/ documents, the team designs the best possible IT solution, and suggests options that suit the client’s needs and budgets.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://regaltech.ae/wp-content/uploads/2019/03/consultancy-img.jpg",
  },


];
const page = () => {
  return (
    <div>
      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-40">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Products & Solutions
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>
      <TracingBeamDemo dummyContent={dummyContent} />
    </div>
  )
}

export default page

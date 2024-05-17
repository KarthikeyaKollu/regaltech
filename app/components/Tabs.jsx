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
          <DummyContent url={"https://private-user-images.githubusercontent.com/108949445/331582414-75e17d3d-3884-4a7d-90c3-1f6d2be9aa38.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU5NDY3NDgsIm5iZiI6MTcxNTk0NjQ0OCwicGF0aCI6Ii8xMDg5NDk0NDUvMzMxNTgyNDE0LTc1ZTE3ZDNkLTM4ODQtNGE3ZC05MGMzLTFmNmQyYmU5YWEzOC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxN1QxMTQ3MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02Y2ZmNzU1Yjk0N2NkNjc1OGU1ODM4NTM4YWYyMGE0ZjUxZGI0ZWU2OTA2YzY3NTg3OGQ1MDFlMTMzZDVmZGFlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.A1Js3OsnpC_QECiNy9v7rLfjlKog-erThf_usd50fDE"} />
        </div>
      ),
    },
    {
      title: "Authorized Centers",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>Authorized Centers</p>
          <DummyContent url={"https://github.com/KarthikeyaKollu/elvsystems/assets/108949445/5aeaf95d-e5fc-4594-b547-38b85cacd38c"} />
        </div>
      ),
    },
    {
      title: "Managed IT Solutions",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>IT Solutions</p>
          <DummyContent url={"https://private-user-images.githubusercontent.com/108949445/331582428-cbeca077-59b0-40ea-91d1-1b5c8fe94650.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU5NDY3NDgsIm5iZiI6MTcxNTk0NjQ0OCwicGF0aCI6Ii8xMDg5NDk0NDUvMzMxNTgyNDI4LWNiZWNhMDc3LTU5YjAtNDBlYS05MWQxLTFiNWM4ZmU5NDY1MC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxN1QxMTQ3MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZWRmNjUwZWFmYjIzOGVmZmY5YWE0NzQxZThiZWE3MzQwNWYwMjBhZGJmYjhmNWFhYWY4ODY4NDE0YzIwZTcxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ooin_MqK4YBmaJSnL6UX0A3N10DGZQswHEIrADtqiKM"} />
        </div>
      ),
    },
    {
      title: "Virtual Maintenance Contracts",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>Maintenance</p>
          <DummyContent url={"https://private-user-images.githubusercontent.com/108949445/331584274-e4ff2da4-44d7-4cc8-9609-1386558e2639.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU5NDcxOTEsIm5iZiI6MTcxNTk0Njg5MSwicGF0aCI6Ii8xMDg5NDk0NDUvMzMxNTg0Mjc0LWU0ZmYyZGE0LTQ0ZDctNGNjOC05NjA5LTEzODY1NThlMjYzOS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxN1QxMTU0NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMDE4ODQwMDUxNjBlNTVmZjA1MWUxZDJhNDczNGY5ZmNlODc4MDVlYTUxODRmZGJkNmM3Nzc4ZjAzNDUzODNjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.tiwecnwS7aqqmF6_uYhYVJ5YdGxGU4jENgiGubtCl7A"}/>
        </div>
      ),
    },
    {
      title: "Content Services",
      value: "radom",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500 ">
          <p>Content Services</p>
          <DummyContent url={"https://private-user-images.githubusercontent.com/108949445/331582402-f662192b-f066-426e-bd0c-9b487eac1265.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU5NDY3NDgsIm5iZiI6MTcxNTk0NjQ0OCwicGF0aCI6Ii8xMDg5NDk0NDUvMzMxNTgyNDAyLWY2NjIxOTJiLWYwNjYtNDI2ZS1iZDBjLTliNDg3ZWFjMTI2NS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxN1QxMTQ3MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NmE4MmU2MTk0M2EyM2JkZjc4ZTdlOTJjOThmZDg2NjU1Zjc3Yzc0NDY5NDZmZDkxYjlmZWYwMGJkODE2YjNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.EChRPjJObP7LyOmc7BuTGBOLDorisI6T7st5aC1Dc-c"}/>
        </div>
      ),
    },
  
    {
      title: "Maintenance (IT & ELV)",
      value: "rando",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  bg-cover bg-center bg-no-repeat backdrop-blur-lg border-2 border-orange-500">
          <p>Maintenance</p>
          <DummyContent  url={"https://private-user-images.githubusercontent.com/108949445/331582366-51e901cd-f52a-4479-9738-2c8fe4ef9b38.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU5NDY3NDgsIm5iZiI6MTcxNTk0NjQ0OCwicGF0aCI6Ii8xMDg5NDk0NDUvMzMxNTgyMzY2LTUxZTkwMWNkLWY1MmEtNDQ3OS05NzM4LTJjOGZlNGVmOWIzOC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxN1QxMTQ3MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZjMxNzYzN2M1ZDFlZTE2MmJmZjU1NzliNzkwN2IwYzkwNTExN2I4ZmM5YTYwYmVlYjQ4YzNhNGY0ZGNmYjRmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9m6njJTzWAXtMcsTO1hWm3OdYf7ZWJZK6fOidKsX8Q0"}/>
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

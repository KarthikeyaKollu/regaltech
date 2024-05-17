"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Regal",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Tech",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Systems",
    },
    {
      text: "Integration of choice",
    },
   
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to customisation starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
     
    </div>
  );
}

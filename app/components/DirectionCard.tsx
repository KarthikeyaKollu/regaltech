"use client";

import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionAwareHoverDemo({item}:any) {

  return (
    <div className=" relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={item.image}>
        <p className="font-bold text-xl">{item.title}</p>
        <p className="font-normal text-sm">{item.text}</p>
      </DirectionAwareHover>
    </div>
  );
}

import React from "react";
import CountUp from "react-countup";

export  function Counter({ number, title }) {
  return (
    <div className="number">
      <p className="text-center text-orange-500 font-bold text-6xl"><CountUp duration={10} className="counter" end={number} /></p>
      <p className="text-xl text-slate-300">{title}</p>
    </div>
  );
}

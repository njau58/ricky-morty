import React from "react";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section id="stats" className="py-14 bg-primary_dark">
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 max-w-7xl md:mx-auto mx-4  items-center justify-between">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary"><CountUp end={83} duration={20} /></p>
          <p className="text-lg text-white"> FINISHED PROJECTS</p>
        </div>
        <div className="md:border-l-[1px] border-green-900 md:py-12 h-full bg-white"></div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary"><CountUp end={103} duration={20} /></p>
          <p className="text-lg text-white"> HAPPY CLIENTS</p>
        </div>
        <div className="md:border-l-[1px] border-green-900 md:py-12 h-full bg-white"></div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary"><CountUp end={124} duration={15} /></p>
          <p className="text-lg text-white"> HAPPY SUPPLIERS</p>
        </div>
        <div className="md:border-l-[1px] border-green-900 md:py-12 h-full bg-white"></div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary"><CountUp end={18} duration={20} /></p>
          <p className="text-lg text-white"> HAPPY EMPLOYEES</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

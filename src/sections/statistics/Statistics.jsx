import React from "react";

const Statistics = () => {
  return (
    <section id="stats" className="py-14 bg-primary_dark">
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 max-w-7xl md:mx-auto mx-4  items-center justify-center">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary">83</p>
          <p className="text-xl text-white"> FINISHED PROJECTS</p>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary">103</p>
          <p className="text-xl text-white"> HAPPY CLIENTS</p>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary">123</p>
          <p className="text-xl text-white"> HAPPY SUPPLIERS</p>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <p className="font-extrabold text-4xl text-secondary">23</p>
          <p className="text-xl text-white"> HAPPY EMPLOYEES</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

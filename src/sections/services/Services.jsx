import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import { img_4, img_3 } from "../../assets";
import Service from "./Service";


const Services = () => {
  const services = [
    {
      title: "Residential Solar Solutions",
      image: img_4,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Commercial & Industrial Solar Solutions",
      image: img_3,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Mini-grids & Off-grid Solar Projects",
      image: img_3,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Operation and Maintenance",
      image: img_4,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Solar Water Heating Systems",
      image: img_4,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Power Plant Testing and Commissioning",
      image: img_3,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
  ];
  return (
    <section
      id="services"
      className="my-32 relative w-full  py-16     bg-services  bg-cover   bg-fixed md:bg-center  mx-auto bg-no-repeat "
    >
      <div className=" relative z-30 flex flex-col space-y-6 justify-center items-center">
        <p className="font-extralight text-secondary text-md">SERVICES</p>
        <p className={`text-white font-extrabold text-4xl ${inter.className}`}>
          Projects for all kinds
        </p>
        <div className="grid md:grid-cols-3 gap-6 grids-col-1 mx-4 max-w-7xl md:mx-auto pt-6">
          {services?.map((service, idx) => {
            return (
            <Service key={idx} title={service.title} image={service.image} description={service.description}/>
            );
          })}
        </div>
      </div>

      <div className=" absolute  bg-primary_dark opacity-90 inset-y-0 z-10 w-full h-[100%]   "></div>
    </section>
  );
};

export default Services;

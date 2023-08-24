import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import { img_4, img_3,img_11,img_9, solar_design, solor_lighting, water_heating, feasibility, water_pumping, electrical, street_lighting, maintanace,  } from "../../assets";
import Service from "./Service";


const Services = () => {
  const services = [
    {
      title: "SOLAR SYSTEMS SIZING & DESIGNS",
      image: solar_design,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "SOLAR STREET LIGHTS",
      image: street_lighting,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "COMMERCIAL AND MEDIUM SCALE SOLAR SYSTEMS",
      image: solar_design,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "SOLAR WATER HEATING ",
      image: water_heating,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: " FEASIBILITY STUDY ",
      image: feasibility,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: " WATER PUMPING",
      image: water_pumping,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {

      title: " ELECTRICAL INSTALLATION AND MAINTENANCE",
      image: maintanace,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "  ENERGY AUDITS",
      image: feasibility,
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
        <p className="font-extralight text-secondary md:text-md text-sm">SERVICES</p>
        <p className={`text-white font-extrabold text-center  md:text-4xl text-3xl  ${inter.className}`}>
          Array of our services
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

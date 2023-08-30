
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import { useState } from "react";
import {
  solar_design,
  water_heating,
  feasibility,
  water_pumping,
  street_lighting,
  maintanace,
  solar_design1,
  energy_audits,
} from "../../assets";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      title: "Solar Systems Sizing & Designs",
      image: solar_design,
      customStyle:true,
      description:
        "Our photovoltaic (PV) power generation systems are made up of interconnected components, each with a specific function. Photovoltaic systems give individuals the ability to become self-sustaining and to control the cost of their electricity. ",
    },
    {
      title: "Solar Street Lights",
      image: street_lighting,
      customStyle:false,
      description:
        "We install engineered systems that include solar LED lights and solar-electric power generation systems which are free from the utility grid. We also install solar powered light system that ties into the utility grid. Our systems are engineered for long-term and reliable performance with little or no maintenance. The systems are designed for a wide range of physical and operating environments and are perfect for rural, suburban and metropolitan areas.",
    },
    {
      title: "Commercial and Medium Scale Solar Systems",
      image: solar_design1,
         customStyle:false,
      description:
        "We install commercial solar panels for businesses that want to improve their environmental footprint while reducing costs. We’ve installed commercial solar panels in sectors like agriculture and manufacturing where there is more space. These sectors have larger operations which is able to support a larger number of panels.",
    },
    {
      title: "Solar Water Heating",
      image: water_heating,
         customStyle:true,
      description:
        "Solar water heating systems, or 'solar thermal' systems, use free heat from the sun to warm domestic hot water. A conventional boiler or immersion heater can be used to make the water hotter, or to provide hot water when solar energy is unavailable. Heat absorbed by the panels is used to pre-heat the water in a hot water storage cylinder. This reduces the amount of fuel needed to bring the hot water up to a useable temperature, saving money on heating bills and reducing carbon emissions. Producing domestic hot water for showers, baths and hot taps makes up a significant proportion of a household’s energy use.",
    },
    {
      title: " Feasibility Study ",
      image: feasibility,
         customStyle:false,
      description:
        "Our solar feasibility study determines whether your property is both technically and financially appropriate for the installation of a solar energy system. It is the first step in the process of transitioning to solar energy and involves the inspection of several important aspects of your potential site. Our team of professionals will perform a thorough inspection and analysis of your property and provide you with a thorough report based on our findings.",
    },
    {
      title: " Water Pumping",
      image: water_pumping,
         customStyle:false,
      description:
        "Our solar water pumping is one of the most efficient ways to utilize solar energy. Instead of using fossil fuels to power your water pump, our solar water pumping harnesses the power of the sun. Conventional energy sources involve either running extended lengths of wire or using a fossil fuel generator at the site.",
    },
    {
      title: " Electrical Installation and Maintanance",
      image: maintanace,
         customStyle:false,
      description:
        "We offer a wide range of services that includes electrical wiring, electrical engineering, electricians, and ground testing. We have been providing electrical wiring, electrical engineering, electricians, and ground testing to our commercial & industrial customers with pride since we started our business.",
    },
    {
      title: "  Energy Audits",
      image: energy_audits,
         customStyle:false,
      description:
        "In order to help our clients save on energy, Nester solar solutions carries out Energy Audits and Power Quality analysis with the main focus on detecting inefficiencies in energy usage so as to help our clients realize energy savings up to 30%.We provide solutions for poor power factor, unstable voltage supplies, unstable power supply, harmonic distortions, earth leakages, phase balancing etc.",
    },
  ];

  const [loading, setLoading] = useState(() => {
    const initialLoading = {};
    services.map((service) => {
      initialLoading[service.image] = false;
    });
    return initialLoading;

  });

 
  const handleLoadingComplete = (src) => {
    setLoading((prevLoading) => ({ ...prevLoading, [src]: true }));
  };

  return (
    <section
      id="services"
      className="my-32 relative w-full  py-16     bg-services  bg-cover   bg-fixed md:bg-center  mx-auto bg-no-repeat "
    >
      <div className=" relative z-30 flex flex-col space-y-6 justify-center items-center">
        <p className="font-extralight text-secondary md:text-md text-sm">
          SERVICES
        </p>
        <p
          className={`text-white font-extrabold text-center  md:text-4xl text-3xl  ${inter.className}`}
        >
          Array of our services
        </p>
        <div className="grid md:grid-cols-3 gap-6 grids-col-1 mx-4 max-w-7xl md:mx-auto pt-6">
          {services?.map((service, idx) => {
            return (
              <Service
                key={idx}
                handleLoadingComplete={handleLoadingComplete}
                loading={loading}
                title={service.title}
                image={service.image}
                description={service.description}
                isCustom={service.customStyle}
              />
            );
          })}
        </div>
      </div>

      <div className=" absolute  bg-primary_dark opacity-90 inset-y-0 z-10 w-full h-[100%]   "></div>
    </section>
  );
};

export default Services;

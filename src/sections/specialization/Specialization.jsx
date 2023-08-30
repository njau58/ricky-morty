import React from "react";
import { TbHomeBolt } from "react-icons/tb";
import { GiElectric, GiFlexibleLamp, GiLightBulb } from "react-icons/gi";
import {BiSolidEdit} from 'react-icons/bi'
import {SlCalender} from 'react-icons/sl'
import {IoIosWater} from 'react-icons/io'
import Image from "next/image";
import { img_8,img_9,img_10, specialize } from "../../assets";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
const Specialization = () => {
  const expertise = [
    {
      Icon: <BiSolidEdit />,
      title: "Energy Audits & Power Quality Management",
    },
    {
      Icon: <TbHomeBolt />,
      title: " Electrical Installation and Maintanance",
    },
    {
      Icon: <SlCalender />,
      title: "Feasibility Study ",
    },
 
    {
      Icon: <GiLightBulb />,
      title: "Solar Water Heating",
    },
    {
      Icon: <IoIosWater />,
      title: "Solar Water Pumping",
    },
    {
      Icon: <GiElectric />,
      title: "Solar Systems Sizing & Designs",
    },
  ];

  return (
    <section
      id="expertise"
      className="mb-32 max-w-7xl  md:mx-auto mx-4  flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-12 md:space-y-0 justify-between "
    >
      <div className="flex flex-col items-center space-y-12 ">
      <div className="flex flex-row">
        <div className="border-2 mr-4 rounded-md  border-secondary"></div>
      <p
          className={`text-gray-800 font-extrabold text-2xl md:text-4xl  max-w-xl ${inter.className}`}
        >
          {" "}
          We specialize in several areas with our highly trained teams of engineers 
        </p>
      </div>

        <Image
          src={specialize}
          alt="nester-solar"
          height={300}
          width={500}
          className="rounded-md hover:scale-105 transition-transform duration-700"
        ></Image>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4  bg-expertise md:bg-no-repeat bg-center bg-contain md:pt-12  ">
        {expertise?.map((exps, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center   bg-white border border-gray-200 py-12  justify-center  rounded-lg    space-y-4 max-w-lg hover:scale-105 duration-500 cursor-pointer   px-3 "
            >
              <div className="flex items-center justify-center">
                <div className="text-secondary text-4xl">{exps.Icon}</div>
              </div>

              <p className="md:text-xl text-lg text-center font-semibold text-gray-900 ">
                {exps.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Specialization;

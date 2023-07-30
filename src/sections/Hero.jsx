import React from "react";
import Features from "./Features/Features";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"], weight: "700" });
const Hero = () => {
  return (
    <>
      <section className=" relative w-full h-full bg-primary_dark    bg-hero  bg-cover   bg-fixed md:bg-center  mx-auto bg-no-repeat  ">
        <div className=" relative z-20 my-auto md:pt-16 h-full ml-12 justify-center md:mx-auto flex text-white items-start flex-col md:items-center space-y-9 md:justify-center">
      
          <p
            className={`md:text-5xl text-3xl font-extrabold   text-start md:text-center  md:max-w-3xl ${inter.className}`}
          >
           A Clean, Green, and Affordable Way to Power Your Home
          </p>
          <p className="text-sm font-bold">
            All our energy is generated from renewable sources. We will help you
            to reduce your energy consumption by upto 95%.
          </p>
         <div className="flex flex-col items-center justify-center md:flex-row md:justify-between space-y-6 md:space-y-0 md:space-x-6"> <Link
            href="#about"
            className=" px-16 py-3 font-extrabold  bg-primary rounded-md text-sm hover:border hover:border-white hover:bg-transparent "
            scroll={false}
          >
            More About Us
          </Link>
          <Link
            href="#services"
            className=" px-16 py-3 bg-transparent font-extrabold  border text-white  rounded-md text-sm hover:bg-primary hover:border-primary "
            Sscroll={false}
          >
            Our Services
          </Link>
          </div>
        </div>
        <div className=" absolute  bg-primary_dark opacity-50 inset-y-0 z-10 w-full h-[100%]   "></div>
      </section>
   
  
    </>
  );
};

export default Hero;

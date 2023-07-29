import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo_white } from "../assets";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer bg-center bg-fixed bg-no-repeat bg-cover relative">
        <div className=" flex  z-40 relative flex-col justify-start ml-4 pt-6 max-w-7xl mx-auto  space-y-12 md:space-y-0 md:ml-auto md:flex-row md:justify-between">
          <div className="flex  flex-col space-y-2 justify-start ">
            <div className="text-slate-50 font-semibold ">Quick Links</div>

            <div className="flex flex-col space-y-3 text-xs font-normal ">
              <Link href="#services" scroll={false}>
                <div className=" text-white   hover:underline p-[4px] ">
                  Services
                </div>
              </Link>

              <Link href="#about" scroll={false}>
                <div className=" text-white   hover:underline p-[4px] ">
                  About
                </div>
              </Link>

              <Link href="#products" scroll={false}>
                <div className=" text-white   hover:underline p-[4px] ">
                  Products
                </div>
              </Link>

              <Link href="#projects" scroll={false}>
                <div className=" text-white   hover:underline p-[4px] ">
                  Projects
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="text-white font-semibold">Contact Details</div>

            <div className="flex flex-row pt-4 items-center">
              <MdOutlinePlace className="text-white text-lg mr-2" />
              <div className="text-white text-xs font-normal">
                Nairobi, Kenya.
              </div>
            </div>
            <div className="flex flex-row  items-center">
              <MdEmail className="text-white text-lg mr-2" />
              <div className="text-white text-xs font-normal">
                <Link href="mailto:queries@apexsurveyors.com.ss">
                  {" "}
                  info@nestersolar.co.ke
                </Link>
              </div>
            </div>
            <div className="flex flex-row  items-center">
              <AiFillPhone className="text-white text-lg mr-2" />
              <div className="text-white text-xs font-normal cursor-pointer">
                {" "}
                <Link
                  href="tel:+211928765792 
                "
                >
                  +2547849940300 / +25498965792

              
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center">
            <div className=" w-[9rem]">
              <Image
                src={logo_white}
                alt="log"
            
              ></Image>
            </div>
          </div>
        </div>
        
      <div className="relative z-40">
      <hr className="mt-12 border-secondary-text"></hr>
        <div className="flex flex-row justify-center">
          <div className="text-center text-xs text-slate-100 my-2">
            &copy; {new Date().getFullYear()} Nester Solar. Designed by{" "}
            <Link
              href="https://softleafapplications.com"
              target="_blank"
              className="text-primary inline-block "
            >
              {" "}
              <div> SoftLeaf Applications</div>
            </Link>
          </div>
        </div>
      </div>
        <div className=" top-0 absolute w-full h-full bg-primary_dark bg-opacity-90"></div>
      </footer>
    </>
  );
};

export default Footer;

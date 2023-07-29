import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const HeaderContact = ({navAbove}) => {

  return (
    <div
          className={`${
            !navAbove
              ? "w-full  z-40 hidden py-4 px-[5%]  fixed top-0 h-14 bg-primary_dark md:flex justify-between items-center"
              : "hidden"
          }`}
        >
          {" "}
          <div className="flex flex-row justify-between items-center text-white ">
            <AiFillPhone />
            <Link href="tel: +211928765792">
              {" "}
              <div className="cursor-pointer text-sm pl-2">
              +2549287657925 
              </div>
            </Link>
            <span className="px-6">|</span>
            <MdEmail />
            <Link href="mailto:querries@apexsurveyors.com.ssd">
              {" "}
              <div className="cursor-pointer text-sm pl-2">
              info@nestersolar.co.ke
              </div>
            </Link>
          </div>
          <div className="flex text-white flex-row justify-between items-center ">
            <span className="text-sm mr-4"> Follow Us:</span>
            <div className="flex flex-row  ">
              <FaFacebookF className="mx-4"></FaFacebookF>
              <AiOutlineInstagram />
              <AiOutlineTwitter className="mx-4" />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
  );
};

export default HeaderContact;

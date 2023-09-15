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

const HeaderContact = ({ scrollThreshold }) => {
  return (
    <div
      className={`${
        scrollThreshold
          ? "hidden"
          : "w-full  z-40 py-4 px-2 md:px-16 fixed top-0 h-14 bg-primary_dark md:flex justify-between items-center"
      }`}
    >
      {" "}
      <div className="flex flex-row  max-w-7xl  justify-between items-center text-white ">
        <AiFillPhone />
        <Link href="tel:+254724045142 ">
          {" "}
          <div className="cursor-pointer md:text-sm  pl-1 text-xs">+254710782326 / +254723716718 </div>
        </Link>
        <span className="px-3 md:px-6 ">|</span>
        <MdEmail />
        <Link href="mailto:info@nestersolar.co.ke">
          {" "}
          <div className="cursor-pointer md:text-sm pl-1 text-xs ">
            info@nestersolar.co.ke
          </div>
        </Link>
      </div>
      <div className="hidden md:flex text-white flex-row justify-between items-center ">
        <span className="text-sm mr-4"> Follow Us:</span>
        <div className="flex flex-row  ">
        <Link className="hover:text-secondary" href="https://www.facebook.com/profile.php?id=61550654645047">
        <FaFacebookF className="mx-4"/>
        </Link> 
          {/* <AiOutlineInstagram />
          <AiOutlineTwitter className="mx-4" /> */}
        <Link className="hover:text-secondary" href="https://www.linkedin.com/company/nester-solar/">
        <AiFillLinkedin />
        </Link> 
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;

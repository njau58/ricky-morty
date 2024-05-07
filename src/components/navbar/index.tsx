import { logo } from "@/assets/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full  bg-white h-20 border">
      <div className="flex items-center justify-between w-full px-4 md:px-0 max-w-7xl h-full md:mx-auto ">
        <Link href="/" className="flex flex-row items-center">
          <div className="w-12 h-12">
            <Image
              src={logo}
              alt="logo "
              className="object-cover w-full h-full"
            />{" "}
          </div>
          <h2 className="font-semibold cursor-pointer">Ricky&Morty</h2>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/njau58/ricky-morty"
          className="relative group flex flex-row items-center"
        >
          <div className="text-xl">
            <FaGithub />
          </div>
          <div className="text-white bg-black text-xs  w-24 py-2 text-center rounded-md absolute top-8 sm:-left-2 -left-16 hidden  group-hover:block">
            View code here
            <div className="p-2 bg-black absolute -top-1 rotate-45 sm:left-4  left-16"></div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

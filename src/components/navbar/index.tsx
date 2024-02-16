import { logo } from "@/assets/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import { logo, logo_white } from "../assets";
import Link from "next/link";

const Logo = ({ scrollThreshold }) => {
  return (
    <div className="relative ml-6 z-50">
      <Link href="/" passHref={true}>
        <Image
          src={scrollThreshold ? logo : logo_white}
          alt="Logo"
          width={100}
          height={100}
          className="text-xs"
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;

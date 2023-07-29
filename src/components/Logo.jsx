import React from "react";
import Image from "next/image";
import { logo, logo_white } from "../assets";
import Link from "next/link";

const Logo = ({ colorNavChange, mobileMenuLogo }) => {
  return (
    <div className="relative ml-6 z-50">
      <Link href="/" passHref={true}>
        <Image
          src={colorNavChange ? logo : logo_white}
          alt="Logo"
          width={150}
          height={75}
          className="text-xs"
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;

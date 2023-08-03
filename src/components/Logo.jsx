import Image from "next/image";
import { logo, logo_white } from "../assets";
import Link from "next/link";

const Logo = ({ scrollThreshold }) => {
  return (
    <div className="relative ml-4 z-50">
      <Link href="/">
        <Image
          src={scrollThreshold ? logo : logo_white}
          alt="Logo"
          width={150}
          height={120}
          className="text-xs"
          
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;

import Link from "next/link";
import Image from "next/image";
import { img_1,img_2,img_3,img_4,img_5,img_6 } from "../assets";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });

const About = () => {
  return (
    <section
      id="about"
      className="my-32 max-w-7xl md:mx-auto mx-4  flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-12 md:space-y-0 justify-between "
    >
      <div className="flex flex-col space-y-4">
        <p className="font-extralight text-secondary text-md">ABOUT US</p>
        <p className={`text-gray-800 font-extrabold text-2xl ${inter.className}`}>Protect Energy</p>
        <p className="text-secondary-text ">
          Knights Energy is all about professional solar solutions. We are a
          leader in designing of renewable energy solutions for industrial,
          commercial, and residential applications, that enable individuals and
          organizations to be part of a sustainable green energy powered world.
          <br />
          <br />
          We are committed to providing alternative solutions of the highest
          standards and also address the energy cost factor by investing in
          resources and brainpower to achieve these goals. We aim at dispelling
          over-reliance on expensive and unreliable mainstream energy sources
          and strive to achieve PV use in daily domestic power generation.
          <br />
          <br />
          Knights Energy is all about professional solar solutions. We are a
          leader in designing of renewable energy solutions for industrial,
          commercial, and residential applications, that enable individuals and
          organizations to be part of a sustainable green energy powered world.
          
        </p>
        <div className="flex items-start">
          <Link
            href="#"
            className=" px-6 py-3 font-extrabold text-white  bg-primary rounded-md text-sm hover:border hover:border-primary hover:text-primary hover:bg-transparent "
            scroll={false}
          >
            Get in touch
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-12 w-full">
        <Image
        src={img_5}
        alt="nester-solar"
        height={900}
        width={600}
        className="rounded-md hover:scale-105 transition-transform duration-700"
        
        ></Image>
         <Image
        src={img_4}
        alt="nester-solar"
        height={900}
        width={600}
        className="rounded-md hover:scale-105 transition-transform duration-700"
        
        ></Image>
      </div>
    </section>
  );
};

export default About;

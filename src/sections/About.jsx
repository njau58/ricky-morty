import Link from "next/link";
import Image from "next/image";
import { img_1, img_2, img_3, img_4, img_5, img_6 } from "../assets";
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
        <p
          className={`text-gray-800 font-extrabold text-2xl ${inter.className}`}
        >
          Protect Energy
        </p>
        <p className="text-secondary-text ">
         Nester Solar is a company that specializes in providing professional
          solar solutions. They design and install solar panels for industrial,
          commercial, and residential customers. Knights Energy is committed to
          providing high-quality solar solutions that are affordable and
          sustainable. They believe that solar power is a key part of the future
          of energy, and they are dedicated to helping people and businesses
          make the switch to solar.
          
      
          <br />
          <br />
          Nester Solar is a company that specializes in providing professional
          solar solutions. They design and install solar panels for industrial,
          commercial, and residential customers. Knights Energy is committed to
          providing high-quality solar solutions that are affordable and
          sustainable. They believe that solar power is a key part of the future
          of energy, and they are dedicated to helping people and businesses
          make the switch to solar.
       
          <br />
          <br />
          Nester Solar is a company that specializes in providing professional
          solar solutions. They design and install solar panels for industrial,
          commercial, and residential customers. Knights Energy is committed to
          providing high-quality solar solutions that are affordable and
          sustainable. They believe that solar power is a key part of the future
          of energy, and they are dedicated to helping people and businesses
          make the switch to solar.
          
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

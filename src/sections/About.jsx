import Link from "next/link";
import Image from "next/image";
import { about1, about2 } from "../assets";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
import { motion } from "framer-motion";
import SpecializationSkeleton from "../components/skeleton/SpecializationSkeleton";
import { useState } from "react";

const About = () => {
  const aboutVariant = {
    offscreen: {
      x: "-100vw",
    },
    onscreen: {
      x: 0,

      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const aboutImages = [about1, about2];
  const [loading, setLoading] = useState(() => {
    const initialLoading = {};
    aboutImages.map((about) => {
      initialLoading[about.image] = false;
    });
    return initialLoading;
  });

  const handleLoadingComplete = (src) => {
    setLoading((prevLoading) => ({ ...prevLoading, [src]: true }));
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      id="about"
      className="my-32 max-w-7xl md:mx-auto mx-4  flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-12 md:space-y-0 justify-between "
    >
      <motion.div variants={aboutVariant} className="flex flex-col space-y-4 ">
        <p className="font-extralight text-secondary md:text-md text-sm">
          ABOUT US
        </p>
        <p
          className={`text-gray-800 font-extrabold text-2xl ${inter.className}`}
        >
          Nester Solar
        </p>
        <p className="text-secondary-text text-sm  leading-relaxed">
          Nester Solar is a company that specializes in providing professional
          solar solutions. We design and install solar panels for industrial,
          commercial, and residential customers. We are committed to providing
          high-quality solar solutions that are affordable and sustainable. We
          believe that solar power is a key part of the future of energy, and We
          are dedicated to helping people and businesses make the switch to
          solar.
          <br />
          <br />
          As a leading solar power contractor in Kenya, we help our customers
          achieve the benefits of generating their own clean and affordable
          energy. We offer various products and services, such as Energy
          Management Systems, Building Management Systems, Energy Audits and
          Power Quality Management, Renewable Energy Solutions and Electrical
          Services.
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
      </motion.div>
      <motion.div className="flex flex-col space-y-12 w-full">
        {aboutImages.map((about, idx) => {
          return (
            <div key={idx}>
              
              <Image
                src={about2}
                onLoadingComplete={() => handleLoadingComplete(about)}
                alt="nester-solar"
                height={900}
                width={600}
                className="rounded-md hover:scale-105 transition-transform duration-700"
              ></Image>
              {!loading[about] && <SpecializationSkeleton aboutStyle={true} />}

            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default About;

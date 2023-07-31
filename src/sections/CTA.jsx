import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"], weight: "700" });

const CTA = () => {
  return (
    <section
      id="CTA"
      className="my-32 relative w-full  py-32     bg-cta  bg-cover   bg-fixed md:bg-center  mx-auto bg-no-repeat "
    >
      <div className=" relative z-30 flex flex-col space-y-6 justify-center items-center">
        <p
          className={`text-white font-extrabold  max-w-xl text-center md:text-5xl text-3xl mx-4   md:text-center  md:max-w-3xl ${inter.className}`}
        >
          We are sure to save on your enery bill by 95%
        </p>
        <p className="text-center font-thin max-w-3xl mx-4 text-white">
          The electricity bill is one of the items that weighs most on peoples
          pockets. Solar energy is an intelligent alternative to reduce this
          cost. Imagine producing your own energy using our solar systems! You
          can save up to 95% of your electricity bill.
        </p>
        <Link
          href="#"
          className=" px-16 py-3 font-extrabold border border-primary text-white  bg-primary rounded-md text-sm hover:border hover:border-white hover:bg-transparent "
          scroll={false}
        >
          Contact Us Today
        </Link>
      </div>

      <div className=" absolute  bg-primary_dark opacity-70 inset-y-0 z-10 w-full h-[100%]   "></div>
    </section>
  );
};

export default CTA;

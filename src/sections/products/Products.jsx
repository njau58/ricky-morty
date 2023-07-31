import Product from "./Product";
import {
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_7,
  img_8,
  img_6,
} from "../../assets";
import { MdSolarPower, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";
import { WiSolarEclipse } from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "700" });
const Products = () => {
  const products = [
    {
      title: "Residential Solar Solutions",
      image: img_5,
      icon: <MdOutlineEnergySavingsLeaf />,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Commercial & Industrial Solar Solutions",
      image: img_7,
      icon: <WiSolarEclipse />,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Mini-grids & Off-grid Solar Projects",
      image: img_8,
      icon: <BsSun />,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Operation and Maintenance",
      image: img_1,
      icon: <MdOutlineEnergySavingsLeaf />,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Solar Water Heating Systems",
      image: img_4,
      icon: <GiSolarPower />,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
    {
      title: "Power Plant Testing and Commissioning",
      image: img_3,
      icon: <MdSolarPower />,
      description:
        "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way and - as an option - stored. You can cover an especially large portion of your energy needs and gain greater independence, for example from rising energy costs.",
    },
  ];

  return (
    <section id="products" className="my-32 ">
      <div className=" relative z-30 flex flex-col space-y-6 justify-center items-center">
        <p className="font-extralight text-secondary text-md">PRODUCTS</p>
        <p
          className={`text-text-gray-800 font-extrabold md:text-4xl text-3xl mx-4  ${inter.className}`}
        >
          Products in our store
        </p>
        <div className="grid md:grid-cols-3 gap-6 grids-col-1 mx-4 max-w-7xl md:mx-auto pt-6">
          {products?.map((product, idx) => {
            return (
              <Product
                key={idx}
                icon={product.icon}
                image={product.image}
                description={product.description}
                title={product.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

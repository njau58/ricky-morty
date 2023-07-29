import Image from "next/image";
const Product = ({ image, icon, description,title }) => {
  return (
    <div className="flex flex-col items-center   bg-white border border-gray-200  justify-center  rounded-lg space-y-4 max-w-lg hover:scale-105 duration-500 cursor-pointer   ">
      <Image
        src={image}
        alt="service"
        className="w-full h-full rounded-t-md"
      ></Image>
      <div className="text-start mx-4 flex flex-col space-y-4">
        <div className="flex flex-start">
          <div className=" text-secondary text-4xl  ">{icon}</div>
        </div>
        <div className="text-xl font-extrabold">{title}</div>
        <div className="text-start leading-6  text-sm font-normal text-secondary-text">
          {description}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;

import Image from "next/image";

const Service = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center   bg-white border border-gray-200  justify-center  rounded-lg space-y-4 max-w-lg hover:scale-105 duration-500 cursor-pointer   ">
    <div className="w-full h-44">
    <Image
        src={image}
        alt="service"
        className="w-full h-full rounded-t-md object-cover"
      ></Image>
      </div> 
      <div className="text-start mx-4 flex flex-col space-y-4">
        <div className="flex flex-start">
          <div className="rounded-lg bg-secondary px-4 py-0.5 "></div>
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

export default Service;

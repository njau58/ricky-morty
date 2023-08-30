import Image from "next/image";

const Service = ({ image, title, description, isCustom }) => {
  return (
    <>
  
    <div className=" bg-white  rounded-md  hover:scale-105 duration-500 cursor-pointer     ">
  
    <Image
        src={image}
        alt="service"
        className={`${isCustom?'w-full h-44 rounded-t-md object-center':'w-full h-44 rounded-t-md object-cover'}`}
      ></Image>
      
      <div className="text-start mx-4 flex flex-col mt-8  rounded-lg space-y-4 max-w-lg  ">
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
    </>
  );
};

export default Service;

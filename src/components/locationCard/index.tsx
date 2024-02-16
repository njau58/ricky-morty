import React from "react";
import Image from "next/image";
import ResidentCard from "../residentCard";

interface LocationCardProps {
  id?: number;
  name?: string;
  type?: string;
  dimension?: string;
  created?: string;
  url?: string;

  residents?: string[];
}

const LocationCard = ({
  id,
  name,
  type,
  dimension,
  residents,
  created,
  url,
}: LocationCardProps) => {
  console.log(residents);
  return (
    <div className=" flex flex-col gap-4 bg-white shadow-md rounded-md w-full md:max-w-sm sm:max-w-xl p-4 h-full max-h-[22rem] mx-auto overflow-y-auto scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded ">
      <div className="">
        <div className="flex flex-row items-center ">
          <label className="font-light text-gray-600 text-sm">Name:</label>
          <p className=" text-md ml-2">{name}</p>
        </div>
        <div className="flex flex-row items-center ">
          <label className="font-light text-gray-600 text-sm">Type:</label>
          <p className=" text-md ml-2">{type}</p>
        </div>
        <div className="flex flex-row items-center ">
          <label className="font-light text-gray-600 text-sm">Dimension:</label>
          <p className=" text-md ml-2">{dimension}</p>
        </div>
      </div>
      <hr></hr>
      <label className="font-light text-sm">Residents</label> {}
      <div className="grid grid-flow-row  grid-cols-3 gap-4  ">
        {residents?.map((r: any, idx) => {
          return (
            <div key={r}>
              <ResidentCard resident_url={r} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationCard;

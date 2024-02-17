import React from "react";
import Link from "next/link";
import ResidentImageOverlap from "../residentImageOverlap";

interface LocationCardProps {
  location_id?: number;
  name?: string;
  type?: string;

  residents?: string[];
}

const LocationCard = ({
  name,
  type,
  location_id,
  residents,
}: LocationCardProps) => {
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
      </div>
      <hr></hr>
      <div className="flex flex-row gap-2.5">
        <Link
          href={`/location/${location_id}`}
          className="font-light text-sm px-1 py-1.5 bg-primary text-white rounded-md w-32 text-center hover:bg-secondary"
        >
          View Residents
        </Link>
        <ResidentImageOverlap residents={residents} />
      </div>
    </div>
  );
};

export default LocationCard;

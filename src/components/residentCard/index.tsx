import { useGetResidentByIdQuery } from "@/features/api/apiSlice";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { ResidentCardSkeleton } from "../loaders";
interface ResidentCardProps {
  resident_url?: any;
}

const ResidentCard = ({ resident_url }: ResidentCardProps) => {
  function extractIdFromUrl(url: string) {
    const parsedUrl = new URL(url);
    const id = parsedUrl.pathname.split("/").pop();
    console.log(parsedUrl.pathname);
    return id;
  }

  const { data, error, isLoading } = useGetResidentByIdQuery(
    extractIdFromUrl(resident_url)
  );

  return (
    <>
      {isLoading && <ResidentCardSkeleton />}

      <div className=" relative border border-gray-200 max-w-[16rem]   rounded-md bg-white">
        <div className=" relative group">
          <Image
            src={data?.image}
            width={100}
            height={100}
            alt=""
            className="w-full max-h-[12.5rem] rounded-md object-cover hover:scale-125 duration-500"
          />
          <span
            className={`absolute top-1 px-2.5 py-1  rounded-md right-1 text-w hite  text-sm  text-white ${
              data?.status === "unknown"
                ? "bg-gray-600"
                : data?.status === "Dead"
                ? "bg-red-600"
                : data?.status === "Alive"
                ? "bg-green-600"
                : ""
            }`}
          >
            {data?.status}
          </span>
          <Link
            href={`/resident/${extractIdFromUrl(resident_url)}`}
            className="absolute hidden rounded-md group-hover:flex items-center justify-center w-full h-full inset-0 bg-primary bg-opacity-60 z-10 "
          >
            <span className="text-white inset-0">
              <FaEye />
            </span>
          </Link>
        </div>
        <div className="p-4">
          <h2 className="font-medium text-lg ">{data?.name}</h2>
        </div>
      </div>
    </>
  );
};

export default ResidentCard;

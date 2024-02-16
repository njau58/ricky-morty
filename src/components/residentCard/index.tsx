import { useGetResidentByIdQuery } from "@/features/api/apiSlice";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { ResidentCardSkeleton } from "../loaders";
interface ResidentCardProps {
  status?: "Alive" | "Dead" | "Unkown";
  image_src?: any;
  resident_url?: any;
  resident_id?: number;
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
      <div>
        {typeof data === undefined && (
          <p className="text-xs">There are no residents.</p>
        )}
      </div>

      <div className=" relative max-w-[8rem] rounded-md">
        <div className=" relative group">
          <Image
            src={data?.image}
            width={100}
            height={100}
            loading="lazy"
            decoding="async"
            alt=""
            className="w-full h-full rounded-md object-covers  hover:scale-125 duration-500"
          />
          <span
            className={`absolute top-1 px-1  rounded-md right-1 text-w hite  text-xs  text-white ${
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
            className="absolute hidden rounded-md group-hover:flex items-center justify-center w-full h-full inset-0 bg-black/60 z-10 t"
          >
            <span className="text-white inset-0">
              <FaEye />
            </span>
          </Link>
        </div>
        <h2 className="font-medium text-xs">{data?.name}</h2>
      </div>
    </>
  );
};

export default ResidentCard;

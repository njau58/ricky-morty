import { useGetResidentByIdQuery } from "@/features/api/apiSlice";
import Image from "next/image";
interface ResidentImageProps {
  resident_url: string;
  idx: number;
}

const ResidentImages = ({ resident_url, idx }: ResidentImageProps) => {
  const url = new URL(resident_url);
  const id = url.pathname.split("/").pop();

  const { data, error } = useGetResidentByIdQuery(id);

  return (
    <>
      <Image
        src={data?.image}
        width={100}
        height={100}
        alt=""
        className={`${
          idx === 1
            ? " bg-gray-200 rounded-full h-9 w-9 border"
            : "relative bg-gray-200 rounded-full h-9 w-9  -right-4 border "
        } ${
          idx === 2
            ? " relative bg-gray-200 rounded-full h-9 w-9  -left-4 z-10 bor"
            : "bg-gray-200 rounded-full h-9 w-9"
        } : ""`}
      ></Image>
      {error && <p className="text-xs">Preview error</p>}
    </>
  );
};

export default ResidentImages;

import { useGetResidentByIdQuery } from "@/features/api/apiSlice";
import Image from "next/image";
interface ResidentImageProps {
  resident_url: string;
}

const ResidentImages = ({ resident_url }: ResidentImageProps) => {
  const url = new URL(resident_url);
  const id = url.pathname.split("/").pop();

  const { data, error, isSuccess } = useGetResidentByIdQuery(id);

  return (
    <>
      <Image
        src={data?.image}
        width={100}
        height={100}
        alt=""
        className=" bg-gray-200 rounded-full h-9 w-9"
      ></Image>
      {error && <p className="text-xs">Preview error</p>}
    </>
  );
};

export default ResidentImages;

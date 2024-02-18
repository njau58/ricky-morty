import { useRouter } from "next/router";
import Button from "../button/Button";

interface BreadCrumbProps {
  text?: string;
}

const BreadCrumb = ({ text }: BreadCrumbProps) => {
  const router = useRouter();

  return (
    <div className="fixed z-20   top-[4rem] w-screen bg-white   h-[5rem]  ">
      <div className=" flex items-start justify-between w-full   h-[50%] my-8 px-4   md:mx-auto max-w-7xl  ">
        <div>
          <Button text="Back" onClick={() => router.back()}></Button>
        </div>
        <h2 className="font-bold text-xl">{text}</h2>
      </div>
    </div>
  );
};

export default BreadCrumb;

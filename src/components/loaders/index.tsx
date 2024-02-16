import { CiImageOn } from "react-icons/ci";

import { ScaleLoader } from "react-spinners";
interface SpinnerProps {
  color?: string;
  height?: number;
  width?: number;
}

interface CardSkeletonProps {
  skeletonList?: number;
}

export const CardSkeleton = ({ skeletonList }: CardSkeletonProps) => {
  return Array(skeletonList)
    .fill("s")
    .map((_, idx) => {
      return (
        <div
          key={idx}
          className=" bg-white border rounded-md shadow-md w-full h-full p-4  "
        >
          <div className="flex flex-col gap-2  px-2">
            {Array.from({ length: 3 }).map((_: any) => {
              return (
                <div key={_} className="flex flex-row  gap-4">
                  {" "}
                  <div className="bg-slate-100  h-5  w-[20%] md:w-[40%] animate-pulse "></div>
                  <div className="bg-slate-100  h-5  w-[60%] animate-pulse "></div>
                </div>
              );
            })}

            <div className="bg-slate-100  h-5  w-[20%]  md:w-[50%] animate-pulse  mt-6"></div>

            <div className="grid grid-flow-row grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_: any) => {
                return (
                  <div
                    key={_}
                    className=" flex items-center justify-center bg-slate-100 p-4 max-w-32 max-h-32 rounded-md animate-pulse "
                  >
                    <CiImageOn className="text-5xl text-slate-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
};

export const ResidentCardSkeleton = () => {
  return (
    <div className=" flex items-center justify-center bg-slate-100 p-4 max-w-32 max-h-32 rounded-md animate-pulse ">
      <CiImageOn className="text-5xl text-slate-500" />
    </div>
  );
};

export const Spinner = ({ color, width, height }: SpinnerProps) => {
  return <ScaleLoader color={color} width={width} height={height} />;
};

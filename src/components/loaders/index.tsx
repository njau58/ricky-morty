import { CiImageOn } from "react-icons/ci";

import { ScaleLoader } from "react-spinners";
interface SpinnerProps {
  color?: string;
  height?: number;
  width?: number;
}

interface SkeletonProps {
  skeletonList?: number | any;
}

export const CardSkeleton = ({ skeletonList }: SkeletonProps) => {
  return Array(skeletonList)
    .fill("s")
    .map((_, idx) => {
      return (
        <div
          key={idx}
          className=" bg-white border rounded-md shadow-md w-full h-full p-4 max-h-[10rem] max-w-[20rem]"
        >
          <div className="flex flex-col gap-2  px-2">
            {Array.from({ length: 2 }).map((_: any) => {
              return (
                <div key={_} className="flex flex-row  gap-4">
                  {" "}
                  <div className="bg-slate-200  h-5  w-[20%] md:w-[40%] animate-pulse "></div>
                  <div className="bg-slate-200  h-5  w-[60%] animate-pulse "></div>
                </div>
              );
            })}
            <hr className="mt-8"></hr>

            <div className="bg-slate-200  h-5  w-[20%]  md:w-[50%] animate-pulse  mt-"></div>
          </div>
        </div>
      );
    });
};

export const ResidentCardSkeleton = ({ skeletonList }: SkeletonProps) => {
  return Array.from({ length: skeletonList }).map((_: any) => {
    return (
      <div
        key={_}
        className=" rounded-md animate-pulse border border-gray-200 bg-white  max-w-[16rem] h-[17rem]"
      >
        <div className=" flex items-center justify-center p-4 max-h-[12.5rem] h-full rounded-md animate-pulse border border-gray-200 w-full   bg-gray-200 ">
          <CiImageOn className="text-5xl text-slate-400" />
        </div>
        <div className="bg-slate-200 mt-4 mx-2  h-5  w-[20%]  md:w-[50%] animate-pulse  "></div>
      </div>
    );
  });
};

export const NoteSkeleton = ({ skeletonList }: SkeletonProps) => {
  return Array.from({ length: skeletonList }).map((_: any) => {
    return (
      <div
        key={_}
        className=" flex flex-col gap-2 border rounded-md bg-white shadow-lg w-full p-2 py-4"
      >
        {Array.from({ length: 8 }).map((_: any) => {
          return (
            <div
              key={_}
              className="bg-slate-200  h-2 rounded-full  animate-pulse "
            ></div>
          );
        })}
      </div>
    );
  });
};

export const Spinner = ({ color, width, height }: SpinnerProps) => {
  return <ScaleLoader color={color} width={width} height={height} />;
};

import Image from "next/image";
import ProjectSkeleton from "../skeleton/ProjectSkeleton";
import { useState } from "react";

const ImageCustom = ({ src, alt }) => {
  const [isImageReady, setIsImageReady] = useState(false);
  const onLoadCallBack = (img) => {
    setIsImageReady(true);
    console.log(img);
    typeof onLoadingComplete === "function" && onLoadingComplete(e);
  };

  return (
    <>
      {isImageReady ? (
        <Image
        src={src}
        onLoadingComplete={(img) => onLoadCallBack(img)}
        alt={alt}
        className="rounded-md w-full h-full object-cover"
      ></Image>
      ) : (
      
        <ProjectSkeleton />
      )}
    </>
  );
};

export default ImageCustom;

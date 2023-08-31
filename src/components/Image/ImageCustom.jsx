import Image from "next/image";
import ProjectSkeleton from "../skeleton/ProjectSkeleton";

const ImageCustom = ({ src, handleLoadingComplete, loading }) => {

  return (
    <div className="h-56">
      {" "}
      <Image
        src={src}
        alt="Image"
        className="rounded-md w-full h-full object-cover"
        onLoadingComplete={() => handleLoadingComplete(src)}
      />
      {!loading[src] && <ProjectSkeleton />}
   
    </div>
  );
};

export default ImageCustom;

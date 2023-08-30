import Image from "next/image";

const ImageCustom = ({ src, alt }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className="rounded-md w-full h-full object-cover"
      ></Image>
    </>
  );
};

export default ImageCustom;

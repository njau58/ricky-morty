const Feature = ({ Icon, title, description,  isCustom }) => {
  return (
    <>
      <div
        className={`${
          isCustom
            ? "text-3xl bg-primary_dark  flex flex-col items-center justify-center   rounded-lg  mt-2 space-y-4 max-w-lg hover:scale-105 duration-500 cursor-pointer px-4   py-8"
            : "flex flex-col items-center   bg-white border border-gray-200  justify-center  rounded-lg px-2  mt-2 space-y-4 max-w-lg hover:scale-105 duration-500 cursor-pointer   py-8 "
        } `}
      >
        <div className="flex items-center justify-center">
          <div className="text-secondary text-4xl">{Icon}</div>
        </div>

        <p className={`${isCustom?"font-semibold text-2xl text-center text-white":"text-xl text-center font-semibold text-gray-900 "}`}>{title}</p>
        <div className={`${!isCustom?"text-center leading-6  mx-6 text-sm font-normal text-secondary-text":" text-center leading-6 mx-6 text-sm  text-white "}`}>
          {description}
        </div>
      </div>
    </>
  );
};

export default Feature;

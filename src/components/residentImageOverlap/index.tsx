import ResidentImages from "./residentImages";

interface ResidentImageOverlapProps {
  residents: string[] | undefined;
}

const ResidentImageOverlap = ({ residents }: ResidentImageOverlapProps) => {
  return (
    <div className="relative flex">
      {residents?.slice(0, 3).map((r) => {
        return (
          <div key={r} className=" ">
            <ResidentImages resident_url={r}></ResidentImages>
          </div>
        );
      })}
    </div>
  );
};

export default ResidentImageOverlap;

import ResidentImages from "./residentImages";

interface ResidentImageOverlapProps {
  residents: string[] | undefined;
}

const ResidentImageOverlap = ({ residents }: ResidentImageOverlapProps) => {
  return (
    <div className="relative flex">
      {residents?.slice(0, 3).map((r, idx) => {
        return (
          <div key={r} className="relative ">
            <ResidentImages resident_url={r} idx={idx}></ResidentImages>
          </div>
        );
      })}
    </div>
  );
};

export default ResidentImageOverlap;

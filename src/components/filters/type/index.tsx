import React from "react";

interface TypeFilterProps {
  handleOnSelect: any;
}

const TypeFilter = ({ handleOnSelect }: TypeFilterProps) => {
  const type_of_location: string[] = [
    "Space Station",
    "Planet",
    "Cluster",
    "TV",
    "Resort",
  ];
  return (
    <select
      name="  Type"
      className="bg-gray-50 border accent-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/10 accent-blacks focus:border-primary block w-full p-2.5 "
      defaultValue={"DEFAULT"}
      onChange={handleOnSelect}
    >
      <option value="DEFAULT" disabled>
        Location Type
      </option>
      <option value="">All</option>
      {type_of_location.map((t: string) => {
        return (
          <option key={t} value={t}>
            {t}
          </option>
        );
      })}
    </select>
  );
};

export default TypeFilter;

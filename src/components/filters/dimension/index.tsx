import React from "react";

interface DimensionFilterProps {
  handleOnSelect: any;
}

const DimensionFilter = ({ handleOnSelect }: DimensionFilterProps) => {
  const type_of_location: string[] = [
    "Dimension C-137",
    "unknown",
    "Post-Apocalyptic Dimension",
    "Replacement Dimension",
    "Fantasy Dimension",
    "Dimension 5-126",
  ];
  return (
    <select
      name="  Type"
      className="bg-gray-50 border accent-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/10 accent-blacks focus:border-primary block w-full p-2.5 "
      defaultValue={"DEFAULT"}
      onChange={handleOnSelect}
    >
      <option value="DEFAULT" disabled>
        Dimension
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

export default DimensionFilter;

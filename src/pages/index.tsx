import Layout from "@/Layout";
import { CardSkeleton } from "@/components/loaders";
import LocationCard from "@/components/locationCard";
import { useGetAllLocationsQuery } from "@/features/api/apiSlice";
import Pagination from "@/pagination";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import TypeFilter from "@/components/filters/type";
import DimensionFilter from "@/components/filters/dimension";
import useRtkQErrors from "@/customHooks/rtkErrors";

export default function Home() {
  const [page, setPage] = useState<number>(0);

  const [search_term, setSearchTerm] = useState<string>("");
  const [location_type, setLocationType] = useState<string>("");
  const [dimension, setDimension] = useState<string>("");

  const { data, error, isLoading } = useGetAllLocationsQuery({
    page: page,
    search_term: search_term,
    location_type: location_type,
    dimension: dimension,
  });
  const [pageCount, setPageCount] = useState<number>(0);
  const errMsg = useRtkQErrors(!isLoading && error);

  const handlePageClick = (data: any) => {
    setPage(data.selected + 1);
  };

  useEffect(() => {
    setPageCount(data?.info.pages);
  }, [pageCount, search_term, location_type, dimension, data?.info.pages]);

  console.log(data?.info.pages);

  const handleSearchDebounce = debounce(async (value) => {
    setSearchTerm(value);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchDebounce(e.target.value);
    setPageCount(data?.info.pages);
  };

  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationType(e.target.value);
    setPageCount(data?.info.pages);
  };
  const handleDimensionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDimension(e.target.value);
    setPageCount(data?.info.pages);
  };

  console.log(data);

  return (
    <Layout>
      <div className="mt-32  mx-auto justify-between">
        <form className=" mx-auto flex flex-col gap-4 md:flex-row justify-between max-w-7xl ">
          <div className="w-full md:max-w-md">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative mx-2">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                onChange={handleSearch}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search Locations"
                required
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 mx-2">
            <TypeFilter handleOnSelect={handleOnSelect} />
            <DimensionFilter handleOnSelect={handleDimensionSelect} />
          </div>
        </form>
      </div>

      {error && <p className="mx-auto w- text-center mt-8 text-sm">{errMsg}</p>}

      <div className="">
        <div className=" grid grid-flow-row gap-4    sm:grid-cols-2 px-4    lg:grid-cols-4 md:grid-cols-3   w-screen h-full  pt-16 pb-8 max-w-[85rem] mx-auto ">
          {isLoading && <CardSkeleton skeletonList={12} />}
          {data?.results.map((lcn: any) => {
            return (
              <div key={lcn.id}>
                <LocationCard
                  name={lcn.name}
                  type={lcn.type}
                  location_id={lcn.id}
                  residents={lcn.residents}
                  dimension={lcn.dimension}
                />
              </div>
            );
          })}
        </div>
        <div className=" mx-auto md:grid md:col-span-4 pb-8 overflow-auto md:max-w-7xl   w-full md:place-content-end">
          {" "}
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </div>
    </Layout>
  );
}

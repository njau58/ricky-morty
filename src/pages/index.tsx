import Layout from "@/Layout";
import Button from "@/components/button/Button";
import { CardSkeleton } from "@/components/loaders";
import LocationCard from "@/components/locationCard";
import { useGetAllLocationsQuery } from "@/features/api/apiSlice";

export default function Home() {
  const { data, error, isLoading } = useGetAllLocationsQuery();

  return (
    <Layout>
      <div className="mt-32">
        <form className="max-w-md mx-auto ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Search Locations"
              required
            />
            <div className="text-white absolute end-2.5 bottom-2.5">
              <Button type="submit" text="Search" />
            </div>
          </div>
        </form>
      </div>
      <div className=" grid grid-flow-row gap-4   sm:grid-cols-2 px-4    lg:grid-cols-4 md:grid-cols-3   w-screen h-full  pt-32 pb-56 max-w-[85rem] mx-auto ">
        {isLoading && <CardSkeleton skeletonList={12} />}
        {data?.results.map((lcn: any) => {
          return (
            <div key={lcn.id}>
              <LocationCard
                name={lcn.name}
                type={lcn.type}
                location_id={lcn.id}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

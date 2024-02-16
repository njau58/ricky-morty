import Layout from "@/Layout";
import { CardSkeleton } from "@/components/loaders";
import LocationCard from "@/components/locationCard";
import { useGetAllLocationsQuery } from "@/features/api/apiSlice";

export default function Home() {
  const { data, error, isLoading } = useGetAllLocationsQuery();

  return (
    <Layout>
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

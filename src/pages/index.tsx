import Layout from "@/Layout";
import FilterForm from "@/components/filterForm";
import { CardSkeleton } from "@/components/loaders";
import LocationCard from "@/components/locationCard";
import { useGetAllLocationsQuery } from "@/features/api/apiSlice";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function Home() {
  const { data, error, isLoading } = useGetAllLocationsQuery();

  // console.log(error);

  // console.log(data?.results);
  return (
    <Layout>
      <div className=" grid grid-flow-row gap-4   sm:grid-cols-2 px-4    lg:grid-cols-4 md:grid-cols-3   w-screen h-full  pt-32 pb-56 max-w-[85rem] mx-auto ">
        <FilterForm />
        {isLoading && <CardSkeleton skeletonList={12} />}
        {data?.results.map((lcn: any) => {
          return (
            <div key={lcn.id}>
              <LocationCard
                name={lcn.name}
                dimension={lcn.dimension}
                url={lcn.url}
                type={lcn.type}
                created={lcn.created}
                residents={lcn.residents}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

import Layout from "@/Layout";
import { CardSkeleton } from "@/components/loaders";
import ResidentCard from "@/components/residentCard";
import { useGetLocationByIdQuery } from "@/features/api/apiSlice";
import { useRouter } from "next/router";

export default function LocationPage() {
  const router = useRouter();
  const { location_id }: any = router.query;
  const { data, error, isLoading } = useGetLocationByIdQuery(location_id);

  return (
    <Layout>
      <div className=" grid grid-flow-row gap-4   grid-cols-2 px-4    lg:grid-cols-4 md:grid-cols-3   w-screen h-full  pt-32 pb-56 max-w-[85rem] mx-auto ">
        {isLoading && <CardSkeleton skeletonList={12} />}
        {data?.residents?.map((resident: any) => {
          return (
            <div key={resident}>
              <ResidentCard resident_url={resident} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

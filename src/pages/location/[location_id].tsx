import Layout from "@/Layout";
import BreadCrumb from "@/components/breadcrumb";
import { CardSkeleton, ResidentCardSkeleton } from "@/components/loaders";
import ResidentCard from "@/components/residentCard";
import useRtkQErrors from "@/customHooks/rtkErrors";
import { useGetLocationByIdQuery } from "@/features/api/apiSlice";
import { useRouter } from "next/router";

export default function LocationPage() {
  const router = useRouter();
  const { location_id }: any = router.query;
  const { data, error, isLoading } = useGetLocationByIdQuery(location_id);
  const error_msg = useRtkQErrors(error);

  return (
    <Layout>
      <div>
        {" "}
        <BreadCrumb text={data?.name}></BreadCrumb>
      </div>

      {error && (
        <p className=" text-center mx-center w-full-full  pt-44">{error_msg}</p>
      )}

      <div className=" grid grid-flow-row gap-4   grid-cols-2 px-4    lg:grid-cols-4 md:grid-cols-3   w-screen h-full  pt-44 pb-56 max-w-[85rem] mx-auto ">
        {isLoading && <ResidentCardSkeleton skeletonList={12} />}
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

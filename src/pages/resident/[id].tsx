import Layout from "@/Layout";
import { useGetResidentByIdQuery } from "@/features/api/apiSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import { NoteSkeleton, Spinner } from "@/components/loaders";
import Note from "@/components/note";
import Button from "@/components/button/Button";
import { useContext } from "react";
import { ModalContext } from "@/context/AddNoteModalContext";
import AddNoteModal from "@/modals/addNoteModal";
import { useGetNotesByIdQuery } from "@/features/api/apiSlice1";
import { FaInfoCircle } from "react-icons/fa";
import useRtkQErrors from "@/customHooks/rtkErrors";
import BreadCrumb from "@/components/breadcrumb";

const ResidentDetailPage = () => {
  const { toggleModal, isOpen }: any = useContext(ModalContext);

  const router = useRouter();

  const { id }: any = router.query;

  const { data, error, isLoading } = useGetResidentByIdQuery(id);
  const {
    data: notes_data,
    error: notes_error,
    isLoading: notes_loading,
  } = useGetNotesByIdQuery(id);

  const notes_error_msg = useRtkQErrors(notes_error);
  const resident_error_msg = useRtkQErrors(error);

  return (
    <Layout>
      <div>
        {" "}
        <BreadCrumb></BreadCrumb>
      </div>
      {isOpen && <AddNoteModal />}

      <section className=" flex items-center  md:flex-row  flex-col justify-center gap-4 pt-56 w-full md:mx-auto  max-w-7xl px-4">
        <div className=" flex flex-col items-center gap-4  justify-center border rounded-md bg-white md:max-w-[20rem]  w-full  p-4 pb-16">
          {error && (
            <div className="mx-auto flex flex-col gap-2">
              <p className="mx-auto text-center">{resident_error_msg}</p>
              <Button text="Reload" onClick={() => window.location.reload()} />
            </div>
          )}
          {isLoading && (
            <div className=" flex items-center justify-center w-full h-screen ">
              <Spinner />
            </div>
          )}
          <Image
            width={100}
            height={100}
            src={data?.image}
            alt=""
            className=" border-2 border-black relative -top-10 h-[10rem] w-[10rem] rounded-full object-contain"
          />
          <div className=" flex flex-col gap-2 text-center">
            <div className="flex gap-2">
              {" "}
              <label className="inline-block">Name:</label>{" "}
              <h2 className="font-bold text-lg">{data?.name}</h2>
            </div>
            <div className="flex gap-2">
              <label className="inline-block">Species:</label>{" "}
              <h2 className="font-bold text-lg">{data?.species}</h2>
            </div>
            <div className="flex gap-2">
              <label className="inline-block">Location:</label>{" "}
              <p className="font-bold text-lg">{`(${data?.location.name})`}</p>
            </div>

            <div className="flex gap-2">
              <label className="inline-block">Status:</label>{" "}
              <div className="flex items-center justify-center gap-1">
                <div
                  className={` h-3 w-3 rounded-full  ${
                    data?.status === "unknown"
                      ? "bg-gray-600"
                      : data?.status === "Dead"
                      ? "bg-red-600"
                      : data?.status === "Alive"
                      ? "bg-green-600"
                      : ""
                  }`}
                ></div>
                {data?.status}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white  p-4 rounded-md border h-[24rem] overflow-y-auto">
          <div className="flex flex-row w-full items-center justify-between mb-4 gap-4 ">
            <p className="font-bold  ">
              {" "}
              Notes about <span className="text-xl"> {data?.name}</span>
            </p>

            <div className="w-full max-w-[6rem]">
              {" "}
              <Button text="Add Note" onClick={toggleModal} />
            </div>
          </div>
          <hr></hr>
          {notes_loading && (
            <div className=" flex flex-col gap-4 mt-12">
              {" "}
              <NoteSkeleton skeletonList={3} />
            </div>
          )}
          {notes_data?.msg?.length === 0 ? (
            <div className="flex items-center justify-center w-full h-full gap-1">
              <span>
                <FaInfoCircle />
              </span>
              <p className="font-thin">
                There are no notes for
                <span className="text-xl ml-1">{data?.name}</span>{" "}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4    p-2">
              {notes_data?.msg?.map((n: any) => {
                return (
                  <div key={n._id}>
                    <Note note={n.note} />
                  </div>
                );
              })}
            </div>
          )}
          {notes_error && (
            <p className="mx-auto text-center mt-8">{notes_error_msg}</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ResidentDetailPage;

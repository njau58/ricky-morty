import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ModalContext } from "@/context/AddNoteModalContext";
import { useContext } from "react";
import Button from "@/components/button/Button";
import { useCreateNoteMutation } from "@/features/api/apiSlice1";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const AddNoteModal = () => {
  const { toggleModal }: any = useContext(ModalContext);
  const [addNote, { data, isLoading, error }] = useCreateNoteMutation();

  const router = useRouter();
  const { id } = router.query;
  console.log(error);

  if (data) {
    toast.success("Note added successfully.");
    toggleModal();
    window.location.reload();
  }

  let errorMsg = "";
  if (error) {
    if ("status" in error) {
      "error" in error
        ? (errorMsg = error.error)
        : (errorMsg = JSON.parse(JSON.stringify(error.data)).msg);
    }
  }

  return (
    <div className="fixed flex items-center justify-center z-50 w-screen h-screen bg-black/50 backdrop-blur-md pt-8">
      <div className="relative bg-white rounded-md w-full h-full max-h-[22rem] max-w-[20rem] p-4 pt-16 overflow-auto">
        {error && <p className="text-red-500 text-xs mb-4">{errorMsg}</p>}
        <button
          onClick={toggleModal}
          type="button"
          className="absolute  top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Formik
          initialValues={{
            note: "",
          }}
          validationSchema={yup.object({
            note: yup
              .string()
              .test(
                "word-count",
                "Note must have 80 words or less",
                (val: any) => {
                  const wordCount = val.split(/\s+/).length;
                  return wordCount <= 0;
                }
              )
              .required("Note is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const body = { ...values, resident_id: id };

            addNote(body);

            setSubmitting(false);
          }}
        >
          <Form>
            <Field
              as="textarea"
              name="note"
              type="text"
              className="bg-gray-50 border border-gray-300 h-44 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Type your note here..."
            ></Field>
            <p className="text-red-400 font-light text-xs">
              <ErrorMessage name="note" />
            </p>

            <div className="flex mt-4 w-full justify-end">
              <Button type="submit" text="Submit" isLoading={isLoading} />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddNoteModal;

import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Spinner } from "../loaders";

const SearchForm = ({ isLoading }: any) => {
  return (
    <div className="border rounded-md w-full py-4 px-4  shadow-md  h-full bg-white">
      <Formik
        initialValues={{
          location_name: "",
          location_type: "",
          location_dimension: "",
        }}
        validationSchema={Yup.object({
          car_name: Yup.string().lowercase(),
          transmission_type: Yup.string().oneOf(["manual", "automatic"]),
          min_price: Yup.number().min(2000, "Price must be 2000 or more."),
          max_price: Yup.number(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        <Form className="max-w-sm mx-auto  ">
          <div className="mb-5">
            <label
              htmlFor="vihicle_name"
              className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <Field
              name="car_name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Location"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="vihicle_type"
              className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <select
              name="car_type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/10 accent-blacks focus:border-primary block w-full p-2.5 "
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Choose type of dimension
              </option>
              {/* {make?.map((car_make, index) => {
                return <option key={index}>{car_make}</option>;
              })} */}
              ``
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="transmission_type"
              className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location Type
            </label>
            <select
              name="transmission_type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/10 accent-blacks focus:border-primary block w-full p-2.5 "
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Location Type
              </option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
            <div>
              <ErrorMessage name="transmission_type" />
            </div>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="  bg-primary px-6 py-2 rounded-md border-2 border-solid
   text-white border-transparent transition-all duration-300 w-full
     ease-in-out hover:bg-black "
          >
            {isLoading ? (
              <Spinner height={14} width={2} color="white" />
            ) : (
              "Filter"
            )}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;

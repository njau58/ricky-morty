import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="my-32 flex flex-col md:flex-row max-w-7xl space-y-4 md:space-y-0 md:space-x-12 justify-center md:mx-auto mx-4 "
    >
      <div className="flex flex-col space-y-4 w-full bg-white rounded-md py-12 px-6">
        <p className="text-xs text-secondary">CONTACTS</p>

        <div className="text-2xl font-extrabold">Get in touch</div>
        <div className="flex flex-start">
          <div className="rounded-lg bg-secondary px-5 mb-4 py-0.5 "></div>
        </div>
        <div className="flex flex-row space-x-4 items-center w-full ">
          <div className="text-xl text-secondary">
            <AiFillPhone />
          </div>
          <div className="text-sm">+25471234567</div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className="text-xl text-secondary">
            <MdLocationOn />
          </div>
          <div className="text-sm">Nairobi, Kenya</div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className="text-xl text-secondary">
            <MdOutlineMarkEmailUnread />
          </div>
          <div className="text-sm">info@nestersolar.co.ke</div>
        </div>
      </div>

      <div class=" bg-white rounded-lg w-full shadow py-6 ">
        <div class="px-6 py-6 lg:px-8">
          <p className="text-xs text-secondary">CONTACT FORM</p>

          <div className="text-2xl font-extrabold my-6">Request a quote</div>
          <form class="space-y-6" action="#">
            <div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                placeholder="Your name"
                required
                name="name"
              ></input>
            </div>
            <div>
              <input
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                placeholder="name@company.com"
                required
                name="email"
              ></input>
            </div>
            <div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="2547012345678"
                required
                name="phone"
              ></input>
              <textarea
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 mt-4 text-sm rounded-lg  block w-full p-2.5 "
                placeholder="Write your message..."
                required
                name="message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={true}
              class="w-full text-white bg-primary focus:ring-4  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Request a quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

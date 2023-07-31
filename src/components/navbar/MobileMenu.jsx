import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

const MobileMenu = ({ showMenuIcon, toggleMenuIcon }) => {

    console.log(showMenuIcon)
  return (
    <div className={`${showMenuIcon ? " md:hidden  " : "hidden"}`}>
      <div className=" top-0 fixed left-0 z-50 flex flex-col w-screen  h-screen bg-white px-32    ">
        <div className="flex items-center justify-center my-12 ">
          {" "}
          <div
            onClick={toggleMenuIcon}
            className="text-4xl  text-secondary-text  font-extrabold  md:hidden "
          >
            {showMenuIcon && <MdOutlineClose />}
          </div>
        </div>

        <ul className=" flex flex-col space-y-12 font-extrabold  items-center justify-center bg-white">
          <li>
            <Link
              href="#"
              onClick={toggleMenuIcon}
              scroll={false}
              className="text-secondary-text  hover:text-primary cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={toggleMenuIcon}
              scroll={false}
              className="text-secondary-text  hover:text-primary cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#products"
              className="text-secondary-text  hover:text-primary cursor-pointer"
              onClick={toggleMenuIcon}
              scroll={false}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-secondary-text  hover:text-primary cursor-pointer"
              onClick={toggleMenuIcon}
              scroll={false}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="#projects"
              className="text-secondary-text  hover:text-primary cursor-pointer"
              onClick={toggleMenuIcon}
              scroll={false}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className=" px-6 py-3 bg-primary rounded-md text-sm text-white"
              onClick={toggleMenuIcon}
              scroll={false}
            >
              Get a quote
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

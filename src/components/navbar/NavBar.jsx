import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import HeaderContact from "./HeaderContacts";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../Logo";
import useToggle from "../../customHooks/useToggle";

const NavBar = () => {
  const [colorNavChange, setColorNavchange] = useState(false);
  const [showMenuIcon, toggleMenuIcon] = useToggle();

  const changeNavbarColor = () => {
    if (window.scrollY > 100) {
      setColorNavchange(true);
    } else {
      setColorNavchange(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const router = useRouter();
  
  return (
    <>
      <HeaderContact navAbove={colorNavChange} />
      <nav
        className={`${
          colorNavChange
            ? "top-0 w-full bg-white    fixed shadow-lg z-40 ease-in-out duration-300 "
            : "bg-transparent top-0 w-full  z-50 md:mt-16   fixed duration-300 ease-in-out  "
        } `}
      >
        <div className="flex items-center md:mx-32  justify-between">
          <Logo colorNavChange={colorNavChange}></Logo>

          <ul className="font-semibold text-medium hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className={
                  router.asPath == "/"
                    ? `text-primary`
                    : colorNavChange
                    ? " text-secondary-text hover:text-primary cursor-pointer"
                    : `text-white hover:text-primary cursor-pointer`
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={toggleMenuIcon}
                scroll={false}
                className={
                  router.asPath == "/#about"
                    ? `text-primary`
                    : colorNavChange
                    ? " text-secondary-text hover:text-primary cursor-pointer"
                    : `text-white hover:text-primary cursor-pointer`
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className={
                  router.asPath == "/#products"
                    ? `text-primary`
                    : colorNavChange
                    ? " text-secondary-text hover:text-primary cursor-pointer"
                    : `text-white hover:text-primary cursor-pointer`
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className={
                  router.asPath == "/#services"
                    ? `text-primary`
                    : colorNavChange
                    ? " text-secondary-text hover:text-primary cursor-pointer"
                    : `text-white hover:text-primary cursor-pointer`
                }
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="#projects"
                className={
                  router.asPath == "/#projects"
                    ? `text-primary`
                    : colorNavChange
                    ? " text-secondary-text hover:text-primary cursor-pointer"
                    : `text-white hover:text-primary cursor-pointer`
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className=" px-6 py-3 bg-primary rounded-md text-sm text-white"
                scroll={false}
              >
                Get a quote
              </Link>
            </li>
          </ul>
          {/* Hamburger */}
          <div
            onClick={toggleMenuIcon}
            className={`${
              colorNavChange
                ? "text-2xl font-sans text-secondary-text font-extrabold  md:hidden mx-4  md:pl-0"
                : "text-2xl font-sans font-extrabold text-white  md:hidden mx-4  md:pl-0"
            }`}
          >
            {!showMenuIcon && <GiHamburgerMenu />}
          </div>
          {/* Mobile Menu */}

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
        </div>
      </nav>
    </>
  );
};

export default NavBar;

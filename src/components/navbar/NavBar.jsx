import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import HeaderContact from "./HeaderContacts";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from 'framer-motion'
import Logo from "../Logo";
import useToggle from "../../customHooks/useToggle";
import MobileMenu from './MobileMenu'

const NavBar = () => {
  const [scrollThreshold, setScrollThreshold] = useState(false);
  const [showMenuIcon, toggleMenuIcon] = useToggle();

  const changeNavbarColor = () => {
    if (window.scrollY > 100) {
      setScrollThreshold(true);
    } else {
      setScrollThreshold(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const router = useRouter();
  
  return (
    <>
      <HeaderContact scrollThreshold={scrollThreshold} />
      <nav
        className={`${
          scrollThreshold
            ? "top-0 w-full bg-white    fixed shadow-lg z-40 ease-in-out duration-300 "
            : "bg-transparent top-0 w-full  z-50 mt-16   fixed duration-300 ease-in-out  "
        } `}
      >
        <div className="flex items-center md:mx-32  justify-between">
          <Logo scrollThreshold={scrollThreshold}></Logo>

          <ul className="font-semibold text-medium hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className={
                  router.asPath == "/"
                    ? `text-primary`
                    : scrollThreshold
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
                    : scrollThreshold
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
                    : scrollThreshold
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
                    : scrollThreshold
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
                    : scrollThreshold
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
                className=" px-6 py-3 bg-primary border border-primary hover:border-primary hover:bg-transparent hover:text-primary rounded-md text-sm text-white"
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
              scrollThreshold
                ? "text-2xl font-sans text-secondary-text font-extrabold  md:hidden mx-4  md:pl-0"
                : "text-2xl font-sans font-extrabold text-white  md:hidden mx-4  md:pl-0"
            }`}
          >
            {!showMenuIcon && <GiHamburgerMenu />}
          </div>
          {/* Mobile Menu */}

         <MobileMenu showMenuIcon={showMenuIcon} toggleMenuIcon={toggleMenuIcon}/>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import HeaderContact from "./HeaderContacts";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo";
import useToggle from "../../customHooks/useToggle";
import MobileMenu from "./MobileMenu";
import generateLinks from ".";
import { Link } from "react-scroll";

const NavBar = () => {
  const [scrollThreshold, setScrollThreshold] = useState(false);
  const [showMenuIcon, toggleMenuIcon] = useToggle();
  const [desktopLinks, setDesktopLinks] = useState([]);
  const router = useRouter();

  useLayoutEffect(() => {
    const getLinks = async () => {
      const links = await generateLinks(router, scrollThreshold, {});
      setDesktopLinks(links);
    };

    getLinks();
  }, [scrollThreshold, router]);

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

  return (
    <>
      <HeaderContact scrollThreshold={scrollThreshold} />
      <nav
        className={`${
          scrollThreshold
            ? "top-0 w-full bg-white fixed shadow-lg z-40 ease-in-out duration-700 "
            : "bg-transparent top-0 w-full      z-40 mt-16   fixed duration-300 ease-in-out  "
        } `}
      >
        <div className="flex items-center  py-6  justify-between max-w-7xl mx-auto">
          <Logo scrollThreshold={scrollThreshold}></Logo>

          <ul className=" text-medium hidden md:flex space-x-8">
            {desktopLinks?.map((link, idx) => (
              <li
                className="text-secondary-text hover:text-primary cursor-pointer"
                key={idx}
              >
                <Link
                  to={link.href}
                  offset={link.offset}
                  className={link.className}
                  activeClass={link.activeClass}
                  spy={true}
                >
                  {link.linkTo}
                </Link>
              </li>
            ))}
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
        </div>
        <MobileMenu
          showMenuIcon={showMenuIcon}
          toggleMenuIcon={toggleMenuIcon}
        />
      </nav>
    </>
  );
};

export default NavBar;

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import generateLinks from ".";

const MobileMenu = ({ showMenuIcon, toggleMenuIcon }) => {
  const [mobileLinks, setMobileLinks] = useState([]);

  useEffect(() => {
    const getLinks = async () => {
      const links = await generateLinks({}, {}, toggleMenuIcon);
      setMobileLinks(links);
    };

    getLinks();
  }, [toggleMenuIcon]);

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
          {mobileLinks?.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                onClick={toggleMenuIcon}
                scroll={link.scroll}
                className={link.mobileStyle}
              >
                {link.linkTo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

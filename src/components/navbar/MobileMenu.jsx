
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import generateLinks from ".";
import { Transition } from "@headlessui/react";
import {AiFillLinkedin } from 'react-icons/ai'
import {FaFacebookF } from 'react-icons/fa'
import { Link} from 'react-scroll'

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

   
          
    <Transition
    show={showMenuIcon}
    enter="transition-opacity duration-700"
    enterFrom="opacity-0"
    enterTo="opacity-1"
    leave="transition-opacity duration-700"
    leaveFrom="opacity-1"
    leaveTo="opacity-0"
  >
      <div className=" top-0 md:hidden fixed left-0 z-50 flex flex-col w-screen  h-screen bg-white px-4    ">
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
                to={link.href}
                onClick={toggleMenuIcon}
                spy={true}
                className={link.mobileStyle}
                activeClass={link.activeClass}
                offset={link.offset}
              >
                {link.linkTo}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row text-xl items-center text-primary justify-center mt-12">
        <Link className="hover:text-secondary" href="https://www.facebook.com/profile.php?id=61550654645047">
        <FaFacebookF className="mx-4"/>
        </Link> 
        <Link className="hover:text-secondary" href="https://www.linkedin.com/company/nester-solar/">
        <AiFillLinkedin />
        </Link> 
        
        </div>
      
      </div>
      </Transition>
    // </div>
  
  );
};

export default MobileMenu;

import React, { useState, useLayoutEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <AnimatePresence>
          <motion.button
            initial={{ x: "100" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            exit={{ x: -100, transition: { ease: "easeInOut" } }}
            onClick={goToTop}
            className=" bg-primary bg-opacity-60 animate-pulse z-50 hover:bg-secondary hover:bg-opacity-60  text-white p-2 rounded-full font-bold text-2xl bottom-2 right-2 fixed "
          >
            <FaAngleUp className="font-bold text-xl "></FaAngleUp>
          </motion.button>
        </AnimatePresence>
      )}
    </>
  );
};
export default ScrollToTop;

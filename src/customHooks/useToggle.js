import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle((prev) => !prev);
  };

  return [ toggle, toggleState ];
};

export default useToggle;

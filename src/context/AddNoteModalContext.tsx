import { createContext, useState } from "react";

interface ModalContextProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ toggleModal, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

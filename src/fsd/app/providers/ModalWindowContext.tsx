"use client";
import {
  useState,
  Dispatch,
  ReactNode,
  createContext,
  SetStateAction,
} from "react";

interface IModalWindowContext {
  modalWindowIsVisible: boolean;
  setModalWindowIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const ModalWindowState = createContext<IModalWindowContext>({
  modalWindowIsVisible: false,
  setModalWindowIsVisible: () => {},
});

export const ModalWindowContext = ({ children }: { children: ReactNode }) => {
  const [modalWindowIsVisible, setModalWindowIsVisible] = useState(false);
  return (
    <ModalWindowState.Provider
      value={{ modalWindowIsVisible, setModalWindowIsVisible }}
    >
      {children}
    </ModalWindowState.Provider>
  );
};

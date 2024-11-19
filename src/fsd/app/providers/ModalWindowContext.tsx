"use client";
import {
  useState,
  Dispatch,
  ReactNode,
  createContext,
  SetStateAction,
} from "react";

type StateT = "hidden" | "visible" | "unmount";

interface IModalWindowContext {
  modalWindowState: StateT;
  setModalWindowState: Dispatch<SetStateAction<StateT>>;
}

export const ModalWindowState = createContext<IModalWindowContext>({
  modalWindowState: "hidden",
  setModalWindowState: () => {},
});

export const ModalWindowContext = ({ children }: { children: ReactNode }) => {
  const [modalWindowState, setModalWindowState] = useState<StateT>("hidden");
  return (
    <ModalWindowState.Provider
      value={{ modalWindowState, setModalWindowState }}
    >
      {children}
    </ModalWindowState.Provider>
  );
};

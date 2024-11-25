"use client";
import { Dispatch, ReactNode, useReducer, createContext } from "react";

type StateT = "hidden" | "visible" | "unmount";

interface ModalState {
  state: StateT;
}

interface ModalAction {
  type: StateT;
}

const changeState = (
  modalWindowState: ModalState,
  action: ModalAction
): ModalState => {
  const { type } = action;
  const { state } = modalWindowState;
  switch (type) {
    case "visible":
      if (state === "hidden") return { state: "visible" };
      return modalWindowState;
    case "unmount":
      if (state === "visible") return { state: "unmount" };
      return modalWindowState;
    case "hidden":
      return { state: "hidden" };
    default:
      return modalWindowState;
  }
};

interface IModalWindowContext {
  modalWindowState: ModalState;
  setModalWindowState: Dispatch<ModalAction>;
}

export const ModalWindowState = createContext<IModalWindowContext>({
  modalWindowState: { state: "hidden" },
  setModalWindowState: () => {},
});

export const ModalWindowContext = ({ children }: { children: ReactNode }) => {
  const [modalWindowState, setModalWindowState] = useReducer(changeState, {
    state: "hidden",
  });
  return (
    <ModalWindowState.Provider
      value={{ modalWindowState, setModalWindowState }}
    >
      {children}
    </ModalWindowState.Provider>
  );
};

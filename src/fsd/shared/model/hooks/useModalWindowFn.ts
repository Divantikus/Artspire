import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { useContext } from "react";

export const useModalWindowFn = () => {
  const { setModalWindowState } = useContext(ModalWindowState);
  const hideModalWindow = (divElem: HTMLDivElement | null) => {
    if (!divElem) return;

    divElem.animate([{ opacity: 1 }, { opacity: 0 }], 500).finished.then(() => {
      divElem.style.opacity = "0";
      document.body.style.overflow = "auto";
      setModalWindowState({ type: "hidden" });
    });
  };

  const showModalWindow = () => {
    document.body.style.overflow = "hidden";
  };
  return { showModalWindow, hideModalWindow };
};

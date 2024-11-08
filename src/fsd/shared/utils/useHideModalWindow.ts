import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { useContext } from "react";

export const useHideModalWindow = () => {
  const { setModalWindowIsVisible } = useContext(ModalWindowState);

  return (elem: HTMLDivElement) => {
    elem.style.opacity = "0";
    const timer = setTimeout(() => {
      setModalWindowIsVisible(false);
      clearTimeout(timer);
    }, 500);
  };
};

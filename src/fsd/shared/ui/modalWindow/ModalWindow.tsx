"use client";
import { ReactNode, useContext, useEffect, useRef } from "react";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
}

export default function ModalWindow({ children }: ModalWindowProps) {
  const { modalWindowState, setModalWindowState } =
    useContext(ModalWindowState);
  const divRef = useRef<HTMLDivElement>(null);

  const hideModalWindow = () => {
    const divElem = divRef.current;

    if (!divElem) return;

    divElem.animate([{ opacity: 1 }, { opacity: 0 }], 500).finished.then(() => {
      divElem.style.opacity = "0";
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
      setModalWindowState("hidden");
    });
  };

  const showModalWindow = () => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";
  };

  useEffect(() => {
    switch (modalWindowState) {
      case "visible":
        showModalWindow();
        break;
      case "unmount":
        hideModalWindow();
        break;
    }
  }, [modalWindowState]);

  return (
    <>
      <div
        ref={divRef}
        className={styles.modalWindowContainer}
        onClick={() => setModalWindowState("unmount")}
      >
        <div
          className={styles.modalWindow}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}

"use client";
import { ReactNode, useContext, useEffect, useRef } from "react";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { useModalWindowFn } from "@shared/model";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
}

export default function ModalWindow({ children }: ModalWindowProps) {
  const { modalWindowState, setModalWindowState } =
    useContext(ModalWindowState);
  const divRef = useRef<HTMLDivElement>(null);
  const { showModalWindow, hideModalWindow } = useModalWindowFn();

  useEffect(() => {
    switch (modalWindowState.state) {
      case "visible":
        showModalWindow();
        break;
      case "unmount":
        hideModalWindow(divRef.current);
        break;
    }
  }, [modalWindowState]);

  return (
    <>
      <div
        ref={divRef}
        className={styles.modalWindowContainer}
        onClick={() => setModalWindowState({ type: "unmount" })}
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

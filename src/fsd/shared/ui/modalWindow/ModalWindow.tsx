import { ReactNode, useEffect } from "react";
import { useHideModalWindow } from "@shared/utils";
import { PortalInBody } from "../Portal-in-body/PortalInBody";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
}

export default function ModalWindow({ children }: ModalWindowProps) {
  const hideModalWindow = useHideModalWindow();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, []);

  return (
    <>
      <PortalInBody>
        <div
          className={styles.modalWindowContainer}
          onClick={(e) => hideModalWindow(e.currentTarget)}
        >
          <div
            className={styles.modalWindow}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </PortalInBody>
    </>
  );
}

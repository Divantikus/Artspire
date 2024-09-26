import { useHideModalWindow } from "@shared/model/index";
import { PortalInBody } from "../Portal-in-body/PortalInBody";
import { ReactNode } from "react";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
}

export default function ModalWindow({ children }: ModalWindowProps) {
  const hideModalWindow = useHideModalWindow();

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

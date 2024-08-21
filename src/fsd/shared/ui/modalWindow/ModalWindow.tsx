import { Dispatch, FC, ReactNode, SetStateAction, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { PortalInBody } from "../Portal-in-body/PortalInBody";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
}

export const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
  const { modalWindowIsVisible, setModalWindowIsVisible } =
    useContext(ModalWindowState);

  return (
    <>
      <PortalInBody>
        <AnimatePresence>
          {modalWindowIsVisible && (
            <motion.div
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setModalWindowIsVisible(false)}
              className={styles.modalWindowContainer}
            >
              <div
                className={styles.modalWindow}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PortalInBody>
    </>
  );
};

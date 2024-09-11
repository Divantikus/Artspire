import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useContext } from "react";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { PortalInBody } from "../Portal-in-body/PortalInBody";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
}

export default function ModalWindow({ children }: ModalWindowProps) {
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
              className={styles.modalWindowContainer}
              onMouseDown={() => setModalWindowIsVisible(false)}
            >
              <div
                className={styles.modalWindow}
                onMouseDown={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PortalInBody>
    </>
  );
}

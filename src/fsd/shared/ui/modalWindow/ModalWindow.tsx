import { FC, ReactNode } from "react";
import { PortalInBody } from "../Portal-in-body/PortalInBody";
import { motion } from "framer-motion";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
}

export const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
  return (
    <>
      <PortalInBody>
        <motion.div
          animate={{ opacity: 1 }}
          className={styles.modalWindowContainer}
        >
          <div className={styles.modalWindow}>{children}</div>
        </motion.div>
      </PortalInBody>
    </>
  );
};

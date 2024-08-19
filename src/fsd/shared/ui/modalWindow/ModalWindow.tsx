import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortalInBody } from "../Portal-in-body/PortalInBody";
import styles from "./ModalWindow.module.scss";

interface ModalWindowProps {
  windowIsVisible: boolean;
  children?: ReactNode;
  closeWindow: Dispatch<SetStateAction<boolean>>;
}

export const ModalWindow: FC<ModalWindowProps> = ({
  children,
  closeWindow,
  windowIsVisible,
}) => {
  return (
    <>
      <PortalInBody>
        <AnimatePresence>
          {windowIsVisible && (
            <motion.div
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => closeWindow(false)}
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

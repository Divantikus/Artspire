import { nunitoSans400 } from "@/fsd/shared/assets";
import { ReactNode } from "react";
import styles from "./NotificationText.module.scss";

export const NotificationText = ({ children }: { children?: ReactNode }) => {
  return (
    <p className={`${styles.message} ${nunitoSans400.className}`}>{children}</p>
  );
};

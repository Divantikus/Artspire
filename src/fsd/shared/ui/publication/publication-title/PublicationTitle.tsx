import { nunitoSans700 } from "@/fsd/shared/assets";
import { ReactNode } from "react";
import styles from "./PublicationTitle.module.scss";

export default function PublicationTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <h3 className={`${styles.title} ${nunitoSans700.className}`}>{children}</h3>
  );
}

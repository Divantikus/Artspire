import { nunitoSans700 } from "@/fsd/shared/assets";
import { ChildrenProps } from "@/fsd/shared/model";
import styles from "./PublicationTitle.module.scss";

export default function PublicationTitle({ children }: ChildrenProps) {
  return (
    <h3 className={`${styles.title} ${nunitoSans700.className}`}>{children}</h3>
  );
}

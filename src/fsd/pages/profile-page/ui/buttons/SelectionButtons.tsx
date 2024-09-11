"use client";
import { nunitoSans600, nunitoSans400 } from "@assets/index";
import { usePathname } from "next/navigation";
import styles from "./SelectionButtons.module.scss";
import Link from "next/link";

export const SelectionButtons = () => {
  const isMyWorks = usePathname().endsWith("my-works");
  const activeBtnStyles = `${nunitoSans600} ${styles.activeChangeBtn}`;

  return (
    <div className={styles.btnsContainer}>
      <Link
        href={"/profile/my-works"}
        className={`${styles.changeBtn} ${isMyWorks ? activeBtnStyles : nunitoSans400}`}
      >
        Мои работы
      </Link>
      <Link
        href={"/profile/saved"}
        className={`${styles.changeBtn} ${!isMyWorks ? activeBtnStyles : nunitoSans400}`}
      >
        Сохранённые
      </Link>
    </div>
  );
};

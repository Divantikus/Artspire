"use client";
import { nunitoSans600 } from "@assets/index";
import { useRouter } from "next/navigation";
import backIcon from "@assets/create/arrow-left.svg";
import styles from "./ReturnButton.module.scss";
import Image from "next/image";

export function ReturnButton() {
  const { back } = useRouter();

  return (
    <>
      <button onClick={back} className={styles.button} type="button">
        <Image src={backIcon} alt={"Стрелка назад"} className={styles.img} />
        <span className={`${styles.span} ${nunitoSans600.className}`}>
          Назад
        </span>
      </button>
    </>
  );
}

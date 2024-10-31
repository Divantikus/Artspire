"use client";
import { nunitoSans700 } from "@assets/fonts/fonts";
import styles from "./Title.module.scss";

export default function Title({ title }: { title: string }) {
  return (
    <h1 className={`${styles.title} ${nunitoSans700.className}`}>{title}</h1>
  );
}

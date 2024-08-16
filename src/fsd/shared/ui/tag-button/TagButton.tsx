"use client";
import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./TagButton.module.scss";

interface TagButtonProps {
  onClickHandler?: () => void;
}

export const TagButton: FC<PropsWithChildren<TagButtonProps>> = ({
  children,
  onClickHandler,
}) => {
  return (
    <button className={styles.button} onClick={() => onClickHandler?.()}>
      {children}
    </button>
  );
};

"use client";
import { GradientButtonProps } from "@shared/ui/index";
import { nunitoSans400 } from "@assets/index";
import { FC } from "react";
import styles from "./GradientButton.module.scss";

export const GradientButton: FC<GradientButtonProps> = ({
  children,
  options = {},
}) => {
  const { id, type, buttonRef, customStyle, inlineStyles, isDisabled } =
    options;

  return (
    <button
      id={id}
      type={type}
      ref={buttonRef}
      onClick={() => {}}
      style={inlineStyles}
      disabled={isDisabled}
      className={`${styles.button} ${customStyle} ${nunitoSans400.className}`}
    >
      {children}
    </button>
  );
};

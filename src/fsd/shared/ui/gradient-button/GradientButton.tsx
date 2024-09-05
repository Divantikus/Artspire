import { GradientButtonProps } from "@shared/ui/index";
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
      className={`${styles.button} ${customStyle}`}
    >
      {children}
    </button>
  );
};

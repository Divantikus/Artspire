import { ButtonHTMLAttributes, FC, LegacyRef, ReactNode } from "react";
import { OptionalFunctionT } from "../input/types";
import styles from "./GradientButton.module.scss";

interface GradientButtonOptions {
  id?: string;
  customStyle?: string;
  onClickFn?: OptionalFunctionT;
  buttonRef?: LegacyRef<HTMLButtonElement> | undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
interface GradientButtonProps {
  children?: ReactNode;
  gradientButtonOptions?: GradientButtonOptions;
}

export const GradientButton: FC<GradientButtonProps> = ({
  children,
  gradientButtonOptions = {},
}) => {
  const { id, type, buttonRef, customStyle } = gradientButtonOptions;

  return (
    <button
      id={id}
      type={type}
      ref={buttonRef}
      onClick={() => {}}
      className={`${styles.button} ${customStyle}`}
    >
      {children}
    </button>
  );
};

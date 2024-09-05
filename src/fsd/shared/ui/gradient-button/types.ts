import {
  LegacyRef,
  ReactNode,
  CSSProperties,
  ButtonHTMLAttributes,
} from "react";
import { OptionalFunctionT } from "../input/types";

export interface GradientButtonOptions {
  id?: string;
  isDisabled?: boolean;
  customStyle?: string;
  inlineStyles?: CSSProperties;
  onClickFn?: OptionalFunctionT;
  buttonRef?: LegacyRef<HTMLButtonElement> | undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
export interface GradientButtonProps {
  children?: ReactNode;
  options?: GradientButtonOptions;
}

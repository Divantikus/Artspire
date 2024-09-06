import { HTMLInputTypeAttribute, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { OptionalFunctionT } from "@shared/model/index";

export interface IDefaultInput {
  id?: string;
  isDisabled?: boolean;
  placeholder?: string;
  secondImg?: ReactNode;
  buttonImg?: ReactNode;
  secondButtonImg?: ReactNode;
  type?: HTMLInputTypeAttribute;
  inputContainerClassName?: string;
  inputArbitraryClassName?: string;
  optionalFunction?: OptionalFunctionT;
  register?: UseFormRegisterReturn<string>;
}

export interface DefaultInputProps {
  inputProps: IDefaultInput;
}

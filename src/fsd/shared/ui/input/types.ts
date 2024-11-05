import { HTMLInputTypeAttribute, ReactNode } from "react";
import { OptionalFunctionT } from "@shared/model/index";
import { RegisterOptions } from "react-hook-form";

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
  registerOptions: {
    name: string;
    options?: RegisterOptions<any>;
  };
}

export interface DefaultInputProps {
  inputProps: IDefaultInput;
}

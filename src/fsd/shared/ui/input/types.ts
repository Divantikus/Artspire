import {
  Dispatch,
  HTMLInputTypeAttribute,
  ReactNode,
  SetStateAction,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type FunctionParams = { [key: string]: any };

export type OptionalFunctionT =
  | (() => unknown)
  | { func: (args: FunctionParams) => any; params: FunctionParams };

export interface IDefaultInput {
  id?: string;
  secondImg?: ReactNode;
  buttonImg?: ReactNode;
  placeholder?: string;
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

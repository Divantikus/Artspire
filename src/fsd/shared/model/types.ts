import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type FunctionParams = { [key: string]: any };

export type OptionalFunctionT =
  | (() => unknown)
  | { func: (args: FunctionParams) => any; params: FunctionParams };

interface DefaultInput {
  id?: string;
  secondImg?: string;
  buttonImg?: string;
  placeholder: string;
  secondaryClassName?: string;
  type?: HTMLInputTypeAttribute;
  optionalFunction?: OptionalFunctionT;
  register?: UseFormRegisterReturn<string>;
  state?: [any, Dispatch<SetStateAction<any>>];
}

export interface DefaultInputProps {
  inputProps: DefaultInput;
}

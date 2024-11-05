import { HTMLInputTypeAttribute, ReactNode } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { OptionalFunctionT } from "@shared/model/index";

type TRegOption<T extends FieldValues> = RegisterOptions<T> | undefined;

export interface IDefaultInput<T extends FieldValues> {
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
  registerOptions: { name: T; options: TRegOption<T> };
}

export interface DefaultInputProps<T extends FieldValues> {
  inputProps: IDefaultInput<T>;
}

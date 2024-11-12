"use client";
import {
  input,
  inputBtn,
  inputContainer,
  fieldWithButton,
} from "./Input.module.scss";
import { FC, useEffect, useState } from "react";
import { DefaultInputProps } from "./types";
import { useFormContext } from "react-hook-form";
import { useDefaltInput } from "@shared/model";
import { nunitoSans400 } from "@assets/fonts/fonts";
import { clsx } from "clsx/lite";

export const Input: FC<DefaultInputProps> = ({ inputProps }) => {
  const {
    id,
    type,
    secondImg,
    buttonImg,
    isDisabled,
    placeholder,
    registerOptions,
    secondButtonImg,
    optionalFunction,
    inputArbitraryClassName,
    inputContainerClassName,
  } = inputProps;

  const { name, options } = registerOptions;

  const { register, unregister } = useFormContext();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const isHaveButnManagement = type === "password" || optionalFunction;
  const { isFirstImg, runFunction, isPasswordVisible } = useDefaltInput(type);

  useEffect(() => {
    return () => {
      if (isFirstRender) return setIsFirstRender(false);
      unregister(name);
    };
  }, []);

  return (
    <div className={clsx(inputContainer, inputContainerClassName)}>
      {secondImg && <div>{secondImg}</div>}
      <input
        id={id}
        disabled={isDisabled}
        {...register(name, options)}
        placeholder={placeholder}
        type={(isPasswordVisible && "text") || type}
        className={clsx(
          input,
          nunitoSans400.className,
          inputArbitraryClassName,
          isHaveButnManagement && fieldWithButton
        )}
      />
      {isHaveButnManagement && (
        <button
          onClick={() => runFunction(optionalFunction)}
          className={inputBtn}
          type="button"
        >
          {isFirstImg ? buttonImg : secondButtonImg}
        </button>
      )}
    </div>
  );
};

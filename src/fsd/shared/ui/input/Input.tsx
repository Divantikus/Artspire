"use client";
import { DefaultInputProps } from "./types";
import { useCheckForText } from "@shared/model";
import { useDefaltInput } from "@shared/utils";
import { useFormContext } from "react-hook-form";
import { nunitoSans400 } from "@assets/fonts/fonts";
import { FC, useEffect } from "react";
import styles from "./Input.module.scss";

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

  const { isHaveText, checkForText } = useCheckForText();
  const { isFirstImg, runFunction, isPasswordVisible } = useDefaltInput(type);
  const isHaveButnManagement = type === "password" || optionalFunction;
  const activeInput = isHaveText ? styles.activeInput : "";
  const inputSecondClassName = isHaveButnManagement
    ? styles.fieldWithButton
    : "";

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, []);

  return (
    <div className={`${styles.inputContainer} ${inputContainerClassName}`}>
      {secondImg && <div>{secondImg}</div>}
      <input
        id={id}
        disabled={isDisabled}
        {...register(name, options)}
        onChange={checkForText}
        placeholder={placeholder}
        type={(isPasswordVisible && "text") || type}
        className={`${styles.input} ${activeInput} ${inputSecondClassName} ${inputArbitraryClassName} ${nunitoSans400.className}`}
      />
      {isHaveButnManagement && (
        <button
          onClick={() => runFunction(optionalFunction)}
          className={styles.inputBtn}
          type="button"
        >
          {isFirstImg ? buttonImg : secondButtonImg}
        </button>
      )}
    </div>
  );
};

"use client";
import { DefaultInputProps } from "./types";
import { useCheckForText } from "@shared/model";
import { useDefaltInput } from "@shared/utils";
import { nunitoSans400 } from "@assets/fonts/fonts";
import { useFormContext } from "react-hook-form";
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
  const inputClassname = secondImg ? styles.inputSecondImg : styles.input;
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
      {secondImg && (
        <div className={styles.secondImgContainer}>{secondImg}</div>
      )}
      <input
        id={id}
        disabled={isDisabled}
        {...register(name, options)}
        onChange={checkForText}
        placeholder={placeholder}
        type={(isPasswordVisible && "text") || type}
        className={`${inputClassname} ${activeInput} ${inputSecondClassName} ${inputArbitraryClassName} ${nunitoSans400.className}`}
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

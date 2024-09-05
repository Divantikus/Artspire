import { DefaultInputProps } from "./types";
import { useCheckForText } from "@shared/model/index";
import { useDefaltInput } from "@shared/utils/index";
import { FC } from "react";
import styles from "./Input.module.scss";

export const Input: FC<DefaultInputProps> = ({ inputProps }) => {
  const {
    id,
    type,
    register,
    secondImg,
    buttonImg,
    isDisabled,
    placeholder,
    secondButtonImg,
    optionalFunction,
    inputArbitraryClassName,
    inputContainerClassName,
  } = inputProps;

  const { isFirstImg, runFunction, isPasswordVisible } = useDefaltInput(type);
  const { isHaveText, checkForText } = useCheckForText();

  const inputClassname = secondImg ? styles.inputSecondImg : styles.input;
  const isHaveButnManagement = type === "password" || optionalFunction;
  const activeInput = isHaveText ? styles.activeInput : "";
  const inputSecondClassName = isHaveButnManagement
    ? styles.fieldWithButton
    : "";

  return (
    <div className={`${styles.inputContainer} ${inputContainerClassName}`}>
      {secondImg && (
        <div className={styles.secondImgContainer}>{secondImg}</div>
      )}
      <input
        id={id}
        {...register}
        disabled={isDisabled}
        onChange={checkForText}
        placeholder={placeholder}
        type={(isPasswordVisible && "text") || type}
        className={`${inputClassname} ${activeInput} ${inputSecondClassName} ${inputArbitraryClassName}`}
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

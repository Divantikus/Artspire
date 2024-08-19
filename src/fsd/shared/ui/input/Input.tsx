import { DefaultInputProps } from "./types";
import { useDefaltInput } from "../../model/hooks/useDefaltInput";
import { FC } from "react";
import styles from "./Input.module.scss";

export const Input: FC<DefaultInputProps> = ({ inputProps }) => {
  const {
    id,
    type,
    register,
    secondImg,
    buttonImg,
    placeholder,
    secondButtonImg,
    optionalFunction,
    secondaryClassName,
  } = inputProps;

  const { isFirstImg, isPasswordVisible, runFunction } = useDefaltInput(type);

  const inputClassname = secondImg ? styles.inputSecondImg : styles.input;
  const isHaveButnManagement = type === "password" || optionalFunction;
  const inputSecondClassName = isHaveButnManagement
    ? styles.fieldWithButton
    : "";

  return (
    <div className={styles.inputContainer}>
      {secondImg && (
        <div className={styles.secondImgContainer}>{secondImg}</div>
      )}
      <input
        id={id}
        {...register}
        placeholder={placeholder}
        type={(isPasswordVisible && "text") || type}
        className={`${inputClassname} ${secondaryClassName} ${inputSecondClassName}`}
      />
      {isHaveButnManagement && (
        <button
          onClick={() => runFunction(optionalFunction)}
          className={styles.inputBtn}
        >
          <span className={styles.buttonImg}>
            {isFirstImg ? buttonImg : secondButtonImg}
          </span>
        </button>
      )}
    </div>
  );
};

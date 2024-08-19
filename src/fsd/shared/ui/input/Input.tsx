import { DefaultInputProps, OptionalFunctionT } from "./types";
import { FC, useState } from "react";
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFirstImg, setIsFirstImg] = useState(true);

  const runFunction = (functionOrObj: OptionalFunctionT | undefined) => {
    if (type === "password") {
      setIsPasswordVisible((type) => !type);
      setIsFirstImg((img) => !img);
      return;
    }

    if (!functionOrObj) return;

    if (typeof functionOrObj === "function") return functionOrObj();

    functionOrObj.func(functionOrObj.params);
  };

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

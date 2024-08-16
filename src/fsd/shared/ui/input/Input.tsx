import { DefaultInputProps, OptionalFunctionT } from "../../model/types";
import { FC, useState } from "react";
import styles from "./Input.module.scss";
import Image from "next/image";

export const Input: FC<DefaultInputProps> = ({ inputProps }) => {
  const {
    id,
    type,
    state,
    register,
    secondImg,
    buttonImg,
    placeholder,
    optionalFunction,
    secondaryClassName,
  } = inputProps;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const runFunction = (functionOrObj: OptionalFunctionT) => {
    if (type === "password") return setIsPasswordVisible((type) => !type);

    if (typeof functionOrObj === "function") return functionOrObj();

    functionOrObj.func(functionOrObj.params);
  };

  const inputClassname = secondImg ? styles.inputSecondImg : styles.input;

  return (
    <div className={styles.inputContainer}>
      {secondImg && (
        <Image src={secondImg} alt={"icon"} className={styles.secondIcon} />
      )}
      <input
        id={id}
        {...register}
        placeholder={placeholder}
        type={(isPasswordVisible && "text") || type}
        className={`${inputClassname} ${secondaryClassName}`}
      />
      {optionalFunction && (
        <button onClick={() => runFunction(optionalFunction)}>
          1{buttonImg && <Image src={buttonImg} alt={"button icon"} />}
        </button>
      )}
    </div>
  );
};

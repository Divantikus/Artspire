import { useCheckboxLogic } from "@shared/utils/index";
import { CheckboxProps } from "./types";
import { FC } from "react";
import styles from "./Checkbox.module.scss";

export const Checkbox: FC<CheckboxProps> = ({ checkboxProps }) => {
  const { id, isActiveDefault } = checkboxProps;
  const { handleClick, refPathBg, refPathCircle, register } =
    useCheckboxLogic();

  return (
    <>
      <input
        type="checkbox"
        checked={isActiveDefault}
        className={styles.checkbox}
        {...register("commentsIsOff")}
      />
      <button
        id={id}
        type="button"
        onClick={handleClick}
        className={styles.button}
      >
        <svg
          width="32"
          height="20"
          fill="none"
          viewBox="0 0 32 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={refPathBg}
            d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10C32 15.5228 27.5228 20 22 20H10C4.47715 20 0 15.5228 0 10Z"
            fill="#CBCED5"
          />
          <path
            ref={refPathCircle}
            d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
};

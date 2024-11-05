import { FieldError } from "react-hook-form";
import styles from "./InputErrorMessage.module.scss";

export const InputErrorMessage = ({ errorObj }: { errorObj: FieldError }) => {
  const { message, type } = errorObj;

  if (type === "required")
    return <p className={styles.errorMes}>Это поле является обязательным</p>;

  if (type === "maxLength")
    return (
      <p className={styles.errorMes}>
        Это поле не должно содержать больше 50 символов
      </p>
    );

  if (type === "minLength")
    return (
      <p className={styles.errorMes}>
        Это поле должно содержать минимум 6 символов
      </p>
    );

  if (type === "pattern")
    return <p className={styles.errorMes}>Введены некорректные данные</p>;

  if (type === "validate")
    return <p className={styles.errorMes}>Поля не совпадают</p>;

  return <p className={styles.errorMes}>{message}</p>;
};

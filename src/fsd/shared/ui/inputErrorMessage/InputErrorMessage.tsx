import { FieldError } from "react-hook-form";
import styles from "./InputErrorMessage.module.scss";
export const InputErrorMessage = ({ errorObj }: { errorObj: FieldError }) => {
  const { message, type } = errorObj;

  if (type === "required")
    return <p className={styles.errorMes}>Это поле является обязательным</p>;

  if (type === "maxLength")
    return (
      <p className={styles.errorMes}>
        Это поле не должно содержать больше 79 символов
      </p>
    );

  if (type === "minLength")
    return (
      <p className={styles.errorMes}>
        Это поле должно содержать минимум 8 символов
      </p>
    );

  if (type === "pattern")
    return (
      <p className={styles.errorMes}>Некорректный адрес электронной почты</p>
    );

  return <p className={styles.errorMes}>{message}</p>;
};

import { FieldError } from "react-hook-form";
import styles from "./InputErrorMessage.module.scss";

export const InputErrorMessage = ({ errorObj }: { errorObj: FieldError }) => {
  const { message, type } = errorObj;

  switch (type) {
    case "required":
      return <p className={styles.errorMes}>Это поле является обязательным</p>;
    case "maxLength":
      return (
        <p className={styles.errorMes}>
          Это поле не должно содержать больше 79 символов
        </p>
      );
    case "minLength":
      return (
        <p className={styles.errorMes}>
          Это поле должно содержать минимум 8 символов
        </p>
      );
    case "pattern":
      return (
        <p className={styles.errorMes}>Некорректный адрес электронной почты</p>
      );
    default:
      return <p className={styles.errorMes}>{message}</p>;
  }
};

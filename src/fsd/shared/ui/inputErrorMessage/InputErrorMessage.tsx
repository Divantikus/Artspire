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
          Это поле не должно содержать больше 50 символов
        </p>
      );
    case "minLength":
      return (
        <p className={styles.errorMes}>
          Это поле должно содержать минимум 6 символов
        </p>
      );
    case "pattern":
      return <p className={styles.errorMes}>Введены некорректные данные</p>;
    case "validate":
      return <p className={styles.errorMes}>Поля не совпадают</p>;
    default:
      return <p className={styles.errorMes}>{message}</p>;
  }
};

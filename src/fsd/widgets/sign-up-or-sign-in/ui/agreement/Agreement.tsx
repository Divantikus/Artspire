import styles from "./Agreement.module.scss";

export const Agreement = () => {
  return (
    <p>
      Регистрируясь, Вы соглашаетесь с{" "}
      <a href="#" className={styles.termsLink}>
        Условиями использования{" "}
      </a>
      и{" "}
      <a href="#" className={styles.termsLink}>
        Политикой обработки персональных данных
      </a>
    </p>
  );
};

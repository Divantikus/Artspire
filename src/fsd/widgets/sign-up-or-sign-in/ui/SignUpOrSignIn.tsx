import { LoginOrRegistrationForm } from "@/fsd/features/login-or-registration-form/index";
import { FormLinks } from "./links/FormLinks";
import { useState } from "react";
import styles from "./SignUpOrSignIn.module.scss";

export const SignUpOrSignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <h2 className={styles.title}>
        {isSignIn ? "Авторизация" : "Регистрация"}
      </h2>
      <LoginOrRegistrationForm isSignIn={isSignIn} />
      <div className={styles.or}>
        <span className={styles.line}></span>
        <span>или</span>
        <span className={styles.line}></span>
      </div>
      <FormLinks />
      <p className={styles.switchingFormContainer}>
        {isSignIn ? "Ещё нет аккаунта? " : "Уже есть аккаунт? "}
        <button
          onClick={() => setIsSignIn((bool) => !bool)}
          className={styles.switchingForm}
        >
          {isSignIn ? "Зарегистрироваться" : "Войти"}
        </button>
      </p>
      <p className={styles.termsOfUse}>
        Регистрируясь, Вы соглашаетесь с{" "}
        <a href="#" className={styles.termsLink}>
          Условиями использования{" "}
        </a>
        и{" "}
        <a href="#" className={styles.termsLink}>
          Политикой обработки персональных данных
        </a>
      </p>
    </>
  );
};

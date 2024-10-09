import { LoginOrRegistrationForm } from "@/fsd/features/login-or-registration-form/index";
import { Agreement } from "./agreement/Agreement";
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
      <p>
        {isSignIn ? "Ещё нет аккаунта? " : "Уже есть аккаунт? "}
        <button
          onClick={() => setIsSignIn((bool) => !bool)}
          className={styles.switchingForm}
        >
          {isSignIn ? "Зарегистрироваться" : "Войти"}
        </button>
      </p>
      {!isSignIn && <Agreement />}
    </>
  );
};

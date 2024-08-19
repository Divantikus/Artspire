import { LoginOrRegistrationForm } from "@/fsd/features/login-or-registration-form/ui/LoginOrRegistrationForm";
import { useState } from "react";
import facebookIcon from "@/fsd/shared/assets/facebook-apple-google/facebook.png";
import googleIcon from "@/fsd/shared/assets/facebook-apple-google/google.png";
import appleIcon from "@/fsd/shared/assets/facebook-apple-google/apple.png";
import styles from "./SignUpOrSignIn.module.scss";
import Image from "next/image";

export const SignUpOrSignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <h2 className={styles.title}>
        {isSignIn ? "Авторизация" : "Регистрация"}
      </h2>
      <LoginOrRegistrationForm isSignIn={isSignIn} />
      <div className={styles.or}>или</div>
      {/* Доделать ссылки */}
      <div className={styles.links}>
        <Image src={googleIcon} alt={"google icon"} />
        <Image src={facebookIcon} alt={"facebook icon"} />
        <Image src={appleIcon} alt={"apple icon"} />
      </div>
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

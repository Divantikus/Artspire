import { useInputSettings } from "../model/hooks/useInputSettings";
import { IFormData } from "../model/types";
import { Input } from "@/fsd/shared/ui/input";
import styles from "./LoginOrRegistrationForm.module.scss";

export const LoginOrRegistrationForm = ({
  isSignIn,
}: {
  isSignIn: boolean;
}) => {
  const {
    emailInputProps,
    handleSubmit,
    passwordInputProps,
    passwordVerifProps,
  } = useInputSettings();

  const submitForm = (e: IFormData) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Input inputProps={emailInputProps} />
      <Input inputProps={passwordInputProps} />
      {!isSignIn && <Input inputProps={passwordVerifProps} />}
      <button className={styles.submitButton}>
        {isSignIn ? "Войти" : "Зарегистрироваться"}
      </button>
    </form>
  );
};

import { useUserRegisterMutation } from "../model/hooks/useUserRegisterMutation";
import { useUserLoginMutation } from "../model/hooks/useUserLoginMutation";
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
    handleSubmit,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  } = useInputSettings();
  const { mutate: loginMutate } = useUserLoginMutation();
  const { mutate: RegisterMutate } = useUserRegisterMutation();

  const submitForm = (formData: IFormData) => {
    if (isSignIn) return loginMutate(formData);
    RegisterMutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Input inputProps={usernameInputProps} />
      <Input inputProps={emailInputProps} />
      <Input inputProps={passwordInputProps} />
      {!isSignIn && <Input inputProps={passwordVerifProps} />}
      <button className={styles.submitButton}>
        {isSignIn ? "Войти" : "Зарегистрироваться"}
      </button>
    </form>
  );
};

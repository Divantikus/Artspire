import { useUserRegisterMutation } from "../model/hooks/useUserRegisterMutation";
import { useUserLoginMutation } from "../model/hooks/useUserLoginMutation";
import { InputErrorMessage } from "@/fsd/shared/ui";
import { useInputSettings } from "../model/hooks/useInputSettings";
import { IFormData } from "../model/types";
import { Input } from "@/fsd/shared/ui/index";
import styles from "./LoginOrRegistrationForm.module.scss";

export const LoginOrRegistrationForm = ({
  isSignIn,
}: {
  isSignIn: boolean;
}) => {
  const {
    errors,
    setError,
    handleSubmit,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  } = useInputSettings(isSignIn);
  const { mutate: loginMutate } = useUserLoginMutation(setError);
  const { mutate: RegisterMutate } = useUserRegisterMutation(setError);

  const submitForm = (formData: IFormData) => {
    const { email, password, username } = formData;
    if (isSignIn) return loginMutate({ username: email, password });
    if (formData.password !== formData.checkPassword) return;
    RegisterMutate({ email, password, username });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {!isSignIn && (
        <>
          <Input inputProps={usernameInputProps} />
          {errors.username && <InputErrorMessage errorObj={errors.username} />}
        </>
      )}

      <Input inputProps={emailInputProps} />
      {errors.email && <InputErrorMessage errorObj={errors.email} />}
      <Input inputProps={passwordInputProps} />
      {errors.password && <InputErrorMessage errorObj={errors.password} />}
      {!isSignIn && (
        <>
          <Input inputProps={passwordVerifProps} />
          {errors.checkPassword && (
            <InputErrorMessage errorObj={errors.checkPassword} />
          )}
        </>
      )}

      <button className={styles.submitButton}>
        {isSignIn ? "Войти" : "Зарегистрироваться"}
      </button>
    </form>
  );
};

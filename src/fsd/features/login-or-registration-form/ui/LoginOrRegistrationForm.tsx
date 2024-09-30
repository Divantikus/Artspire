import {
  IFormData,
  LoginFormProps,
} from "@features/login-or-registration-form/index";
import { useUserRegisterMutation } from "../model/hooks/useUserRegisterMutation";
import { GradientButton, InputErrorMessage } from "@/fsd/shared/ui";
import { useUserLoginMutation } from "../model/hooks/useUserLoginMutation";
import { useInputSettings } from "../model/hooks/useInputSettings";
import { Input } from "@/fsd/shared/ui/index";
import styles from "./LoginOrRegistrationForm.module.scss";

export const LoginOrRegistrationForm = ({ isSignIn }: LoginFormProps) => {
  const {
    errors,
    isValid,
    setError,
    handleSubmit,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  } = useInputSettings(isSignIn);

  const { mutate: loginMutate } = useUserLoginMutation(setError);
  const { mutate: registerMutate } = useUserRegisterMutation(setError);

  const submitForm = (formData: IFormData) => {
    const { email, password, username, checkPassword } = formData;
    if (isSignIn) return loginMutate({ username, password });
    if (password !== checkPassword) return;
    registerMutate({ email, password, username });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Input inputProps={usernameInputProps} />
      {errors.username && <InputErrorMessage errorObj={errors.username} />}
      {!isSignIn && (
        <>
          <Input inputProps={emailInputProps} />
          {errors.email && <InputErrorMessage errorObj={errors.email} />}
        </>
      )}
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

      <GradientButton
        options={{ customStyle: styles.button, isDisabled: !isValid }}
      >
        {isSignIn ? "Войти" : "Зарегистрироваться"}
      </GradientButton>
    </form>
  );
};

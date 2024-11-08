import {
  IFormData,
  LoginFormProps,
  useInputSettings,
  checkPasswordError,
  useUserLoginMutation,
  useUserRegisterMutation,
} from "@features/login-or-registration-form";
import { GradientButton, InputErrorMessage, Input } from "@shared/ui";
import { FormProvider } from "react-hook-form";
import styles from "./LoginOrRegistrationForm.module.scss";

export const LoginOrRegistrationForm = ({ isSignIn }: LoginFormProps) => {
  const {
    methods,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  } = useInputSettings(isSignIn);
  const {
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const { mutate: loginMutate, isLoading: isLoginFormLoading } =
    useUserLoginMutation(setError);
  const { mutate: registerMutate, isLoading: isRegisterFormLoading } =
    useUserRegisterMutation(setError);

  const isDisabledButton =
    !isValid || isLoginFormLoading || isRegisterFormLoading;

  const submitForm = (formData: IFormData) => {
    const { email, password, username, checkPassword } = formData;
    if (isSignIn) return loginMutate({ username, password });
    if (password !== checkPassword)
      return setError("checkPassword", checkPasswordError);
    registerMutate({ email, password, username });
  };

  return (
    <FormProvider {...methods}>
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
          options={{ customStyle: styles.button, isDisabled: isDisabledButton }}
        >
          {isSignIn ? "Войти" : "Зарегистрироваться"}
        </GradientButton>
      </form>
    </FormProvider>
  );
};

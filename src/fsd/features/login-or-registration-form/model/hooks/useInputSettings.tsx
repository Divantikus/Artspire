import {
  emailInputConfig,
  passwordAndUsernameInputConfig,
} from "@features/login-or-registration-form/config/InputConfig";
import { IDefaultInput } from "@/fsd/shared/ui/input";
import { IFormData } from "../types";
import { useForm } from "react-hook-form";
import closeEye from "@/fsd/shared/assets/eye/close-eye.svg";
import openEye from "@/fsd/shared/assets/eye/open-eye.svg";
import styles from "@/fsd/features/login-or-registration-form/ui/LoginOrRegistrationForm.module.scss";
import Image from "next/image";

export const useInputSettings = (isSignIn: boolean) => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    mode: "onBlur",
  });

  const emailInputProps: IDefaultInput = {
    register: register("email", emailInputConfig),
    placeholder: "Введите email",
    inputContainerClassName: styles.formInput,
    inputArbitraryClassName: errors.email ? styles.inputError : "",
  };
  const passwordInputProps: IDefaultInput = {
    type: "password",
    placeholder: "Введите пароль",
    register: register("password", passwordAndUsernameInputConfig),
    inputContainerClassName: styles.formInput,
    buttonImg: <Image src={openEye} alt={"open eye"} />,
    secondButtonImg: <Image src={closeEye} alt={"close eye"} />,
    inputArbitraryClassName: errors.password ? styles.inputError : "",
  };
  const passwordVerifProps: IDefaultInput = {
    ...passwordInputProps,
    register: register(
      "checkPassword",
      !isSignIn ? passwordAndUsernameInputConfig : undefined
    ),
    inputArbitraryClassName: errors.checkPassword ? styles.inputError : "",
  };

  const usernameInputProps: IDefaultInput = {
    register: register(
      "username",
      !isSignIn ? passwordAndUsernameInputConfig : undefined
    ),
    placeholder: "Введите имя пользователя",
    inputContainerClassName: styles.formInput,
    inputArbitraryClassName: errors.username ? styles.inputError : "",
  };

  return {
    errors,
    setError,
    handleSubmit,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  };
};

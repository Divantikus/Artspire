import {
  emailInputConfig,
  passwordAndUsernameInputConfig,
} from "@features/login-or-registration-form/config/InputConfig";
import { IDefaultInput } from "@shared/ui/index";
import { IFormData } from "../types";
import { useForm } from "react-hook-form";
import closeEye from "@assets/eye/close-eye.svg";
import openEye from "@assets/eye/open-eye.svg";
import styles from "@features/login-or-registration-form/ui/LoginOrRegistrationForm.module.scss";
import xIcon from "@assets/for-all/x.svg";
import Image from "next/image";

export const useInputSettings = (isSignIn: boolean) => {
  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    mode: "all",
  });

  const emailInputProps: IDefaultInput = {
    placeholder: "Введите email",
    inputContainerClassName: styles.formInput,
    register: register("email", emailInputConfig),
    buttonImg: <Image src={xIcon} alt={"Иконка крестика"} />,
    inputArbitraryClassName: errors.email ? styles.inputError : "",
    optionalFunction: { customFunction: reset, params: { email: "" } },
  };
  const passwordInputProps: IDefaultInput = {
    type: "password",
    placeholder: "Введите пароль",
    inputContainerClassName: styles.formInput,
    buttonImg: <Image src={openEye} alt={"Открытый глаз"} />,
    register: register("password", passwordAndUsernameInputConfig),
    secondButtonImg: <Image src={closeEye} alt={"Закрытый глаз"} />,
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
    placeholder: "Введите имя пользователя",
    inputContainerClassName: styles.formInput,
    buttonImg: <Image src={xIcon} alt={"Иконка крестика"} />,
    register: register("username", passwordAndUsernameInputConfig),
    inputArbitraryClassName: errors.username ? styles.inputError : "",
    optionalFunction: { customFunction: reset, params: { username: "" } },
  };

  return {
    errors,
    isValid,
    setError,
    handleSubmit,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  };
};

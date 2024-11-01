"use client";
import {
  emailInputConfig,
  passwordInputConfig,
  usernameInputConfig,
} from "@features/login-or-registration-form/index";
import { IDefaultInput } from "@shared/ui/index";
import { IFormData } from "../types";
import { useEffect } from "react";
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
    unregister,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid, validatingFields },
  } = useForm<IFormData>({
    mode: "onBlur",
  });

  useEffect(() => {
    unregister(["checkPassword", "email"]);
    clearErrors();
  }, [isSignIn]);

  const emailInputProps: IDefaultInput = {
    placeholder: "Введите email",
    inputContainerClassName: styles.formInput,
    buttonImg: <Image src={xIcon} alt={"Иконка крестика"} />,
    inputArbitraryClassName: errors.email ? styles.inputError : "",
    optionalFunction: { customFunction: reset, params: { email: "" } },
    register: register("email", !isSignIn ? emailInputConfig : undefined),
  };
  const passwordInputProps: IDefaultInput = {
    type: "password",
    placeholder: "Введите пароль",
    inputContainerClassName: styles.formInput,
    register: register("password", passwordInputConfig),
    buttonImg: <Image src={openEye} alt={"Открытый глаз"} />,
    secondButtonImg: <Image src={closeEye} alt={"Закрытый глаз"} />,
    inputArbitraryClassName: errors.password ? styles.inputError : "",
  };
  const passwordVerifProps: IDefaultInput = {
    ...passwordInputProps,
    register: register(
      "checkPassword",
      !isSignIn ? passwordInputConfig : undefined
    ),
    inputArbitraryClassName: errors.checkPassword ? styles.inputError : "",
  };

  const usernameInputProps: IDefaultInput = {
    placeholder: "Введите имя пользователя",
    inputContainerClassName: styles.formInput,
    register: register("username", usernameInputConfig),
    buttonImg: <Image src={xIcon} alt={"Иконка крестика"} />,
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

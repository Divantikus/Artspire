"use client";
import {
  emailInputConfig,
  passwordInputConfig,
  usernameInputConfig,
} from "@features/login-or-registration-form";
import { IDefaultInput } from "@shared/ui";
import { IFormData } from "../types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import closeEye from "@assets/eye/close-eye.svg";
import openEye from "@assets/eye/open-eye.svg";
import styles from "@features/login-or-registration-form/ui/LoginOrRegistrationForm.module.scss";
import xIcon from "@assets/for-all/x.svg";
import Image from "next/image";

export const useInputSettings = (isSignIn: boolean) => {
  const methods = useForm<IFormData>({
    mode: "onBlur",
  });
  const {
    reset,
    clearErrors,
    formState: { errors },
  } = methods;

  useEffect(() => {
    clearErrors();
  }, [isSignIn]);

  const emailInputProps: IDefaultInput<IFormData> = {
    placeholder: "Введите email",
    inputContainerClassName: styles.formInput,
    buttonImg: <Image src={xIcon} alt={"Иконка крестика"} />,
    inputArbitraryClassName: errors.email ? styles.inputError : "",
    optionalFunction: { customFunction: reset, params: { email: "" } },
    registerOptions: {
      name: "email",
      options: !isSignIn ? emailInputConfig : undefined,
    },
  };
  const passwordInputProps: IDefaultInput<IFormData> = {
    type: "password",
    placeholder: "Введите пароль",
    inputContainerClassName: styles.formInput,
    buttonImg: <Image src={openEye} alt={"Открытый глаз"} />,
    secondButtonImg: <Image src={closeEye} alt={"Закрытый глаз"} />,
    inputArbitraryClassName: errors.password ? styles.inputError : "",
    registerOptions: { name: "password", options: passwordInputConfig },
  };
  const passwordVerifProps: IDefaultInput<IFormData> = {
    ...passwordInputProps,
    inputArbitraryClassName: errors.checkPassword ? styles.inputError : "",
    registerOptions: {
      name: "",
      options: !isSignIn ? passwordInputConfig : undefined,
    },
  };

  const usernameInputProps: IDefaultInput<IFormData> = {
    placeholder: "Введите имя пользователя",
    inputContainerClassName: styles.formInput,
    buttonImg: <Image src={xIcon} alt={"Иконка крестика"} />,
    inputArbitraryClassName: errors.username ? styles.inputError : "",
    registerOptions: { name: "username", options: usernameInputConfig },
    optionalFunction: { customFunction: reset, params: { username: "" } },
  };

  return {
    methods,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  };
};

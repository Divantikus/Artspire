import { IDefaultInput } from "@/fsd/shared/ui/input";
import { IFormData } from "../types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/fsd/widgets/sign-up-or-sign-in/ui/SignUpOrSignIn.module.scss";
import closeEye from "@/fsd/shared/assets/eye/close-eye.svg";
import openEye from "@/fsd/shared/assets/eye/open-eye.svg";
import Image from "next/image";

export const useInputSettings = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { register, handleSubmit } = useForm<IFormData>();

  const emailInputProps: IDefaultInput = {
    placeholder: "Введите email",
    register: register("email"),
    secondaryClassName: styles.formInput,
  };
  const passwordInputProps: IDefaultInput = {
    placeholder: "Введите пароль",
    register: register("password"),
    type: "password",
    buttonImg: <Image src={openEye} alt={"open eye"} />,
    secondButtonImg: <Image src={closeEye} alt={"close eye"} />,
    secondaryClassName: styles.formInput,
  };
  const passwordVerifProps: IDefaultInput = {
    ...passwordInputProps,
    register: register("checkPassword"),
  };

  return {
    isSignIn,
    setIsSignIn,
    handleSubmit,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
  };
};

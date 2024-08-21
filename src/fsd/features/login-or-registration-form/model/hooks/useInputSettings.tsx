import { IDefaultInput } from "@/fsd/shared/ui/input";
import { IFormData } from "../types";
import { useForm } from "react-hook-form";
import closeEye from "@/fsd/shared/assets/eye/close-eye.svg";
import openEye from "@/fsd/shared/assets/eye/open-eye.svg";
import styles from "@/fsd/features/login-or-registration-form/ui/LoginOrRegistrationForm.module.scss";
import Image from "next/image";

export const useInputSettings = () => {
  const { register, handleSubmit } = useForm<IFormData>();

  const emailInputProps: IDefaultInput = {
    register: register("email"),
    placeholder: "Введите email",
    secondaryClassName: styles.formInput,
  };
  const passwordInputProps: IDefaultInput = {
    type: "password",
    placeholder: "Введите пароль",
    register: register("password"),
    secondaryClassName: styles.formInput,
    buttonImg: <Image src={openEye} alt={"open eye"} />,
    secondButtonImg: <Image src={closeEye} alt={"close eye"} />,
  };
  const passwordVerifProps: IDefaultInput = {
    ...passwordInputProps,
    register: register("checkPassword"),
  };

  const usernameInputProps: IDefaultInput = {
    register: register("username"),
    placeholder: "Введите имя пользователя",
    secondaryClassName: styles.formInput,
  };

  return {
    handleSubmit,
    emailInputProps,
    passwordInputProps,
    passwordVerifProps,
    usernameInputProps,
  };
};

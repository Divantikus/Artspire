import { ErrorOption, RegisterOptions } from "react-hook-form";
import { changeInputStyle } from "@shared/utils";
import { IFormData } from "../model/types";

export const emailInputConfig: RegisterOptions<IFormData> = {
  maxLength: 79,
  required: true,
  pattern: /^[a-zA-Z_]+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/,
  onBlur: (e) => {
    changeInputStyle(e.target);
  },
};

export const usernameInputConfig: RegisterOptions<IFormData> = {
  minLength: 1,
  maxLength: 50,
  required: true,
  pattern: /^[a-zA-Z_]+$/,
  onBlur: (e) => {
    changeInputStyle(e.target);
  },
};

export const passwordInputConfig: RegisterOptions<IFormData> = {
  minLength: 6,
  maxLength: 50,
  required: true,
  onBlur: (e) => {
    changeInputStyle(e.target);
  },
};

export const usernameInputError: ErrorOption = {
  type: "usernameAlreadyExists",
  message: "Пользователь с таким ником уже существует",
};

export const emailInputError: ErrorOption = {
  type: "emailAlreadyExists",
  message: "Эта почта уже привязана к другому аккаунту",
};

export const checkPasswordError: ErrorOption = {
  type: "passwords-dont-match",
  message: "Пароли не совпадают",
};

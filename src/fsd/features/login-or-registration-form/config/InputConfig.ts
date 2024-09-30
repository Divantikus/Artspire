import { ErrorOption, RegisterOptions } from "react-hook-form";
import { IFormData } from "../model/types";

export const emailInputConfig: RegisterOptions<IFormData> = {
  maxLength: 79,
  pattern: /^[a-zA-Z_]+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/,
};
export const passwordAndUsernameInputConfig: RegisterOptions<IFormData> = {
  minLength: 8,
  maxLength: 79,
  required: true,
};

export const usernameInputError: ErrorOption = {
  type: "usernameAlreadyExists",
  message: "Пользователь с таким ником уже существует",
};

export const emailInputError: ErrorOption = {
  type: "emailAlreadyExists",
  message: "Эта почта уже привязана к другому аккаунту",
};

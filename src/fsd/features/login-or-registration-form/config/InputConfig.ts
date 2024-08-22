import { RegisterOptions } from "react-hook-form";
import { IFormData } from "../model/types";

export const emailInputConfig: RegisterOptions<IFormData> = {
  maxLength: 79,
  required: true,
  pattern: /^[a-zA-Z_]+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/,
};
export const passwordAndUsernameInputConfig: RegisterOptions<IFormData> = {
  minLength: 8,
  maxLength: 79,
  required: true,
};

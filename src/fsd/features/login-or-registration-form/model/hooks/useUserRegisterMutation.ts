import {
  emailInputError,
  usernameInputError,
} from "@features/login-or-registration-form/index";
import { authService, RegisterData } from "@/fsd/shared/api";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { UseFormSetError } from "react-hook-form";
import { useMutation } from "react-query";
import { useContext } from "react";
import { AxiosError } from "axios";
import { IFormData } from "../types";

export const useUserRegisterMutation = (
  setError: UseFormSetError<IFormData>
) => {
  const { setModalWindowIsVisible } = useContext(ModalWindowState);

  return useMutation({
    mutationKey: ["UserRegisterData"],
    mutationFn: async (data: RegisterData) => {
      const { email, password, username } = data;

      return await authService.registerUser({
        email: email.trim(),
        username: username.trim(),
        password: password.trim(),
      });
    },
    onSuccess: (data) => {
      setModalWindowIsVisible(false);
    },
    onError: (data: AxiosError) => {
      const statusCode = data.response?.status || 400;
      if (statusCode >= 400 && statusCode < 500) {
        setError("username", usernameInputError);
        setError("email", emailInputError);
      }
    },
  });
};

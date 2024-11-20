import {
  emailInputError,
  usernameInputError,
} from "@features/login-or-registration-form/index";
import { authService, RegisterData } from "@shared/api";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { UseFormSetError } from "react-hook-form";
import { useMutation } from "react-query";
import { useContext } from "react";
import { AxiosError } from "axios";
import { IFormData } from "../types";

export const useUserRegisterMutation = (
  setError: UseFormSetError<IFormData>
) => {
  const { setModalWindowState } = useContext(ModalWindowState);

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

    onSuccess: () => setModalWindowState({ type: "unmount" }),

    onError: (data: AxiosError) => {
      const status = data.status || 500;
      const emptyMessage = { message: "", type: "" };
      switch (status) {
        case 452:
          setError("username", usernameInputError);
          break;
        case 453:
          setError("email", emailInputError);
          break;
        default:
          setError("username", emptyMessage);
          setError("email", emptyMessage);
          setError("password", emptyMessage);
          setError("checkPassword", { message: "Неизвестная ошибка" });
      }
    },
  });
};

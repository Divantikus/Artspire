import {
  emailInputError,
  usernameInputError,
} from "@features/login-or-registration-form/config/InputConfig";
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
      return await authService.registerUser(data);
    },
    onSuccess: () => {
      setModalWindowIsVisible(false);
    },
    onError: (data: AxiosError) => {
      const statusCode = data.response?.status;
      if (statusCode === 400) {
        setError("username", usernameInputError);
        setError("email", emailInputError);
      }
    },
  });
};

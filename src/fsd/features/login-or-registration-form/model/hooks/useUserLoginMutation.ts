import { authService, LoginData } from "@/fsd/shared/api";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { UseFormSetError } from "react-hook-form";
import { useMutation } from "react-query";
import { useContext } from "react";
import { IFormData } from "../types";

export const useUserLoginMutation = (setError: UseFormSetError<IFormData>) => {
  const { setModalWindowIsVisible } = useContext(ModalWindowState);
  return useMutation({
    mutationKey: ["UserLoginData"],
    mutationFn: async (data: LoginData) => {
      return await authService.loginUser(data);
    },
    onSuccess: () => {
      setModalWindowIsVisible(false);
    },
  });
};

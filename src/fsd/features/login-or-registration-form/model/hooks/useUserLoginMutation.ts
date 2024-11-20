"use client";
import { authService, LoginData } from "@shared/api";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { UseFormSetError } from "react-hook-form";
import { useMutation } from "react-query";
import { useContext } from "react";
import { AxiosError } from "axios";
import { IFormData } from "../types";

export const useUserLoginMutation = (setError: UseFormSetError<IFormData>) => {
  const { setModalWindowState } = useContext(ModalWindowState);

  return useMutation({
    mutationKey: ["UserLoginData"],
    mutationFn: async (data: LoginData) => {
      const { password, username } = data;

      return await authService.loginUser({
        username: username.trim(),
        password: password.trim(),
      });
    },

    onSuccess: (data) => {
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem("refresh_token", data.data.refresh_token);

      setModalWindowState({ type: "unmount" });
    },

    onError: (data: AxiosError) => {
      const status = data.status || 500;
      setError("username", { type: "", message: "" });
      if (status < 500)
        return setError("password", {
          type: "",
          message: "Неверный логин или пароль",
        });
      setError("password", {
        type: "",
        message: "На сервере произошла ошибка. Попробуйте снова",
      });
    },
  });
};

import { authService, LoginData } from "@/fsd/shared/api";
import { useMutation } from "react-query";

export const useUserLoginMutation = () => {
  return useMutation({
    mutationKey: ["UserLoginData"],
    mutationFn: async (data: LoginData) => {
      return await authService.loginUser(data);
    },
  });
};

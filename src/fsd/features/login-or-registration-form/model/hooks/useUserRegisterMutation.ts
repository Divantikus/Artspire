import { authService, RegisterData } from "@/fsd/shared/api";
import { useMutation } from "react-query";

export const useUserRegisterMutation = () => {
  return useMutation({
    mutationKey: ["UserRegisterData"],
    mutationFn: async (data: RegisterData) => {
      return await authService.registerUser(data);
    },
  });
};

"use client";
import { useContext, useState } from "react";
import { userActionsService } from "@shared/api";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

export const useLikesQuery = (quantity: number, isLiked?: boolean) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [isLikedNow, setIsLikedNow] = useState(isLiked);
  const { setModalWindowState } = useContext(ModalWindowState);

  const mutation = useMutation({
    mutationKey: ["addOrRemoveLike"],
    mutationFn: (id: number) => {
      if (isLikedNow) return userActionsService.removeLike(id);

      return userActionsService.likeIt(id);
    },
    onSuccess: () => {
      if (isLikedNow) {
        setCurrentQuantity((number) => number - 1);
        return setIsLikedNow(false);
      }
      setCurrentQuantity((number) => number + 1);
      setIsLikedNow(true);
    },
    onError: (axiosErr: AxiosError) => {
      const status = axiosErr.status;
      switch (status) {
        case 401:
          setModalWindowState({ type: "visible" });
          return;
      }
    },
  });

  return { mutation, currentQuantity, isLikedNow };
};

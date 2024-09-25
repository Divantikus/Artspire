"use client";
import { userActionsService } from "../api";
import { useMutation } from "react-query";
import { useState } from "react";

export const useLikesQuery = (quantity: number, isLiked?: boolean) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [isLikedNow, setIsLikedNow] = useState(isLiked);

  const mutation = useMutation({
    mutationKey: ["addOrRemoveLike"],
    mutationFn: (id: number) => {
      if (isLikedNow) return userActionsService.removeLike(id);

      return userActionsService.likeIt(id);
    },
    onSuccess: () => {
      if (isLikedNow) {
        setCurrentQuantity((number) => number - 1);
        setIsLikedNow(false);
      } else {
        setCurrentQuantity((number) => number + 1);
        setIsLikedNow(true);
      }
    },
  });

  return { mutation, currentQuantity, isLikedNow };
};

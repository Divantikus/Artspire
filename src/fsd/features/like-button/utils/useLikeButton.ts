"use client";
import { useContext, useState } from "react";
import { userActionsService } from "@shared/api/user-action-service/user-action-service";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";

export const useLikeButton = (isFavorite = false, id: number) => {
  const [isFavoriteNow, setIsFavoriteNow] = useState(isFavorite);
  const [isLoading, setIsLoading] = useState(false);
  const { setModalWindowIsVisible } = useContext(ModalWindowState);

  const addOrRemoveFavorites = async () => {
    if (isLoading) return;

    setIsLoading(true);

    if (isFavoriteNow) {
      const isSuccessful = await userActionsService.removeFromFavorites(id);
      setIsLoading(false);
      if (!isSuccessful) return setModalWindowIsVisible(true);
      return setIsFavoriteNow(false);
    }

    const isSuccessful = await userActionsService.addToFavorites(id);
    setIsLoading(false);

    if (!isSuccessful) return setModalWindowIsVisible(true);
    setIsFavoriteNow(true);
  };
  return { addOrRemoveFavorites, isLoading, isFavoriteNow };
};

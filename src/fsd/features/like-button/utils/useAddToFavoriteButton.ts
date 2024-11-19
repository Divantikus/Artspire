"use client";
import { useContext, useState } from "react";
import { userActionsService } from "@shared/api/index";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";

export const useAddToFavoriteButton = (isFavorite = false, id: number) => {
  const [isFavoriteNow, setIsFavoriteNow] = useState(isFavorite);
  const [isLoading, setIsLoading] = useState(false);
  const { setModalWindowState } = useContext(ModalWindowState);

  const addOrRemoveFavorites = async () => {
    if (isLoading) return;

    setIsLoading(true);

    if (isFavoriteNow) {
      const isSuccessful = await userActionsService.removeFromFavorites(id);
      setIsLoading(false);
      if (!isSuccessful) return setModalWindowState("visible");
      return setIsFavoriteNow(false);
    }

    const isSuccessful = await userActionsService.addToFavorites(id);
    setIsLoading(false);

    if (!isSuccessful) return setModalWindowState("visible");
    setIsFavoriteNow(true);
  };
  return { addOrRemoveFavorites, isLoading, isFavoriteNow };
};

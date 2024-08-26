import { userActionsService } from "@shared/api/user-action-service/user-action-service";
import { useState } from "react";

export const useLikeButton = (isFavorite: boolean | undefined, id: number) => {
  const [isFavoriteNow, setIsFavoriteNow] = useState(isFavorite);

  const addOrRemoveFavorites = (svg: SVGSVGElement | null) => {
    if (!svg) return;

    const svgStyle = svg.style;

    if (isFavoriteNow) {
      userActionsService.removeFromFavorites(id);
      svgStyle.fill = "none";
      return setIsFavoriteNow(false);
    }

    userActionsService.addToFavorites(id);
    svgStyle.fill = "red";
    setIsFavoriteNow(true);
  };
  return addOrRemoveFavorites;
};

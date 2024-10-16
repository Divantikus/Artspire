"use client";
import { AddToFavoriteButtonProps } from "./types";
import { useAddToFavoriteButton } from "@features/like-button/index";
import { FC, useRef } from "react";
import { LikeIcon } from "@shared/assets";
import styles from "./AddToFavoriteButton.module.scss";

export const AddToFavoriteButton: FC<AddToFavoriteButtonProps> = ({
  id,
  isFavorite,
  customClassName,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { addOrRemoveFavorites, isLoading, isFavoriteNow } =
    useAddToFavoriteButton(isFavorite, id);

  return (
    <>
      <button
        onClick={addOrRemoveFavorites}
        className={`${styles.likeBtn} ${customClassName}`}
      >
        <LikeIcon
          svgRef={svgRef}
          isLoading={isLoading}
          isFavorite={isFavoriteNow}
        />
      </button>
    </>
  );
};

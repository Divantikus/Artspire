"use client";
import { LikebuttonProps } from "./types";
import { useLikeButton } from "@features/like-button/index";
import { FC, useRef } from "react";
import { LikeIcon } from "@/fsd/shared/assets";
import styles from "./Likebutton.module.scss";

export const Likebutton: FC<LikebuttonProps> = ({
  id,
  isFavorite,
  customClassName,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { addOrRemoveFavorites, isLoading, isFavoriteNow } = useLikeButton(
    isFavorite,
    id
  );

  return (
    <>
      <button
        onClick={() => addOrRemoveFavorites()}
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

"use client";
import {
  useLikeButton,
  changeColorOnRed,
  changeColorOnTransparent,
} from "@features/like-button/index";
import { LikebuttonProps } from "./types";
import { FC, useRef } from "react";
import { LikeIcon } from "@/fsd/shared/assets";
import styles from "./Likebutton.module.scss";

export const Likebutton: FC<LikebuttonProps> = ({
  id,
  isFavorite,
  customClassName,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const addOrRemoveFavorites = useLikeButton(isFavorite, id);

  return (
    <>
      <button
        className={`${styles.likeBtn} ${customClassName}`}
        onClick={() => addOrRemoveFavorites(svgRef.current)}
        onMouseEnter={() => changeColorOnRed(svgRef.current)}
        onMouseLeave={() => changeColorOnTransparent(svgRef.current)}
      >
        <LikeIcon svgRef={svgRef} />
      </button>
    </>
  );
};

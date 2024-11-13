"use client";
import { useLikesQuery } from "@shared/model";
import { LikeIcon } from "@shared/assets";
import { Counter } from "@shared/ui";
import { FC } from "react";
import styles from "./Likes.module.scss";

interface LikeProps {
  id: number;
  quantity: number;
  isLiked?: boolean;
}

export const Likes: FC<LikeProps> = ({ quantity, isLiked, id }) => {
  const {
    isLikedNow,
    currentQuantity,
    mutation: { mutate, isLoading },
  } = useLikesQuery(quantity, isLiked);

  const handleClick = () => {
    if (isLoading) return;

    mutate(id);
  };

  return (
    <div onClick={handleClick} className={styles.container}>
      <Counter quantity={currentQuantity}>
        <LikeIcon isFavorite={isLikedNow} isLoading={isLoading} />
      </Counter>
    </div>
  );
};

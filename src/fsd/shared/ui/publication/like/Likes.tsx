"use client";
import { useLikesQuery } from "@/fsd/shared/utils/index";
import { LikeIcon } from "@/fsd/shared/assets";
import { Counter } from "@shared/ui/counter/Counter";
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
        <LikeIcon isFavorite={isLikedNow} />
      </Counter>
    </div>
  );
};

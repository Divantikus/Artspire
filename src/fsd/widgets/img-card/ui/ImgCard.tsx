import { useLikesQuery } from "@/fsd/shared/model";
import { ImgCardProps } from "@widgets/img-card";
import { LikeIcon } from "@/fsd/shared/assets";
import { FC } from "react";
import loadingImg from "@assets/card-img/loading.png";
import styles from "./ImgCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export const ImgCard: FC<ImgCardProps> = ({ props }) => {
  const { id, slug, img, alt, isFavorite } = props;
  const {
    isLikedNow,
    mutation: { mutate, isLoading, status },
  } = useLikesQuery(20, isFavorite);

  const handleClick = () => {
    if (isLoading) return;

    mutate(id);
  };

  return (
    <div className={styles.imgContainer}>
      <div className={styles.likeBtn} onClick={handleClick}>
        <LikeIcon isFavorite={isLikedNow} isLoading={isLoading} />
      </div>
      <Link href={`/post/${slug}`} className={styles.linkAndImg}>
        {!img && <Image src={loadingImg} alt="loadingImg" />}
        <img alt={alt} src={img} className={styles.linkAndImg} />
      </Link>
    </div>
  );
};

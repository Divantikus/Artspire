import { AddToFavoriteButton } from "@features/like-button";
import { ImgCardProps } from "@widgets/img-card/index";
import { FC } from "react";
import loadingImg from "@assets/card-img/loading.png";
import styles from "./ImgCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export const ImgCard: FC<ImgCardProps> = ({ props }) => {
  const { id, slug, img, alt, isFavorite } = props;

  return (
    <div className={styles.imgContainer}>
      <AddToFavoriteButton
        id={id}
        isFavorite={isFavorite}
        customClassName={styles.likeBtn}
      />
      <Link href={`/post/${slug}`} className={styles.linkAndImg}>
        {!img && <Image src={loadingImg} alt="loadingImg" />}
        <img alt={alt} src={img} className={styles.linkAndImg} />
      </Link>
    </div>
  );
};

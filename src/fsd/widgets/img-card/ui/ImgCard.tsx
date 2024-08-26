import { ImgCardProps } from "@widgets/img-card/index";
import { Likebutton } from "@/fsd/features/like-button";
import { FC } from "react";
import loadingImg from "@assets/card-img/loading.png";
import styles from "./ImgCard.module.scss";
import Image from "next/image";
import Link from "next/link";
//! Заглушка
export const ImgCard: FC<ImgCardProps> = ({ slug, id, img }) => {
  return (
    <div className={styles.imgContainer}>
      <Likebutton id={id} customClassName={styles.likeBtn} />
      <Link href={`/post/${slug}`} className={styles.linkAndImg}>
        <Image
          alt={"img"}
          src={img || loadingImg}
          className={styles.linkAndImg}
        />
      </Link>
    </div>
  );
};

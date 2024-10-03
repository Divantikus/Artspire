import { ImgCardProps } from "@widgets/img-card/index";
import { Likebutton } from "@/fsd/features/like-button";
import { FC } from "react";
import loadingImg from "@assets/card-img/loading.png";
import styles from "./ImgCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export const ImgCard: FC<ImgCardProps> = ({ slug, id, img, alt }) => {
  return (
    <div className={styles.imgContainer}>
      <Likebutton id={id} customClassName={styles.likeBtn} />
      <Link href={`/post/${slug}`} className={styles.linkAndImg}>
        {!img && <Image src={loadingImg} alt="loadingImg" />}
        <img alt={alt} src={img} className={styles.linkAndImg} />
      </Link>
    </div>
  );
};

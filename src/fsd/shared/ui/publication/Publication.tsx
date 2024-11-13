"use client";
import { PublicationStatistics } from "./publication-statistics/PublicationStatistics";
import { artsService, PublicationData } from "@shared/api";
import { AddToFavoriteButton } from "@features/like-button";
import { GradientButton } from "@shared/ui";
import { useQueryClient } from "react-query";
import { nunitoSans400 } from "@assets/fonts/fonts";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./Publication.module.scss";

const Tags = dynamic(() => import("./tags/Tags"));
const Title = dynamic(() => import("./publication-title/PublicationTitle"));

export const Publication = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    id,
    url,
    tags,
    title,
    is_liked,
    username,
    created_at,
    views_count,
    likes_count,
  } = queryClient.getQueryData(["getImgData"]) as PublicationData;

  return (
    <>
      <div className={`${styles.imgContainer} ${nunitoSans400.className}`}>
        <img src={url} alt={title || "Картинка"} />
        <AddToFavoriteButton id={id} customClassName={styles.likeBtn} />
      </div>
      <PublicationStatistics
        id={id}
        isLiked={is_liked}
        watched={views_count}
        created_at={created_at}
        likes_count={likes_count}
      />
      {title && <Title>{title}</Title>}
      <div className={styles.profileContainer}>
        <img src="" alt="img" className={styles.profileIcon} />
        <div className={styles.profileName}>{username}</div>
        <GradientButton options={{ customStyle: styles.button }}>
          Подписаться
        </GradientButton>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => artsService.deleteArt(id).then(() => router.push("/"))}
      >
        Удалить картинку
      </button>

      {!!tags?.length && <Tags tags={tags} />}
    </>
  );
};

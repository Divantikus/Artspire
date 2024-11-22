"use client";
import { PublicationStatistics } from "./publication-statistics/PublicationStatistics";
import { artsService, PublicationData } from "@shared/api";
import { AuthorsProfile } from "./authors-profile/AuthorsProfile";
import { useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import { Picture } from "./picture/Picture";
import dynamic from "next/dynamic";
import styles from "./Publication.module.scss";

const Tags = dynamic(() => import("./tags/Tags"));
const Title = dynamic(() => import("./publication-title/PublicationTitle"));

export const Publication = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["getImgData"]) as PublicationData;
  const { id, url, tags, title, is_liked } = data;
  const { username, created_at, views_count, likes_count } = data;

  return (
    <>
      <Picture id={id} title={title} url={url} />
      <PublicationStatistics
        id={id}
        isLiked={is_liked}
        watched={views_count}
        created_at={created_at}
        likes_count={likes_count}
      />
      {title && <Title>{title}</Title>}
      <AuthorsProfile id={id} username={username} imgUrl={""} />
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

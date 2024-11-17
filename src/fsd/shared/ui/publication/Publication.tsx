"use client";
import { PublicationStatistics } from "./publication-statistics/PublicationStatistics";
import { artsService, PublicationData } from "@shared/api";
import { AuthorsProfile } from "./authors-profile/AuthorsProfile";
import { useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Picture } from "./picture/Picture";
import dynamic from "next/dynamic";
import styles from "./Publication.module.scss";

const Tags = dynamic(() => import("./tags/Tags"));
const Title = dynamic(() => import("./publication-title/PublicationTitle"));

export const Publication = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id, likes_count, url, title, created_at, tags, username } =
    queryClient.getQueryData(["getImgData"]) as PublicationData;

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: "getImgData", exact: true });
    };
  }, []);

  return (
    <>
      <Picture id={id} title={title} url={url} />
      <PublicationStatistics
        watched={1000}
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

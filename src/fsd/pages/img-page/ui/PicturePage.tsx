"use client";
import {
  Comments,
  Publication,
  ReturnButton,
  EndlessPictures,
} from "@shared/ui/index";
import { endlessPicturesProps } from "@pages/img-page/index";
import { useQueryPicturePage } from "@shared/model";
import { useParams } from "next/navigation";
import styles from "./PicturePage.module.scss";

export const PicturePage = () => {
  const id = +useParams().artId;

  if (isNaN(id)) return <div>error (</div>;

  const { isLoading } = useQueryPicturePage(id);

  if (isLoading) return <p>loading...</p>;

  return (
    <article className={styles.article}>
      <ReturnButton />
      <Publication />
      <Comments />
      <EndlessPictures props={endlessPicturesProps} />
    </article>
  );
};

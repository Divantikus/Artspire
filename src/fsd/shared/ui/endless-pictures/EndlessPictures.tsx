"use client";
import { ListOfImages, LoadingAnimation } from "@shared/ui";
import { useEndlessPicturesQuery } from "@shared/utils";
import { EndlessPicturesProps } from "@shared/model";
import { useElementTracking } from "@shared/model";
import { NotificationText } from "./notification-text/NotificationText";
import { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./EndlessPictures.module.scss";

const Title = dynamic(() => import("./title/Title"));

export const EndlessPictures: FC<EndlessPicturesProps> = ({
  props,
  requestField = "getArts",
}) => {
  const { queryKeys = ["getPictures"], title, messageMissingImgs } = props;

  const {
    allPictures,
    query: { isFetching, isError, isLoading },
  } = useEndlessPicturesQuery(requestField, 20, queryKeys);

  const { scrollWrap, trackedElement } = useElementTracking(queryKeys);

  useEffect(() => {
    window.addEventListener("scroll", scrollWrap);
    return () => {
      window.removeEventListener("scroll", scrollWrap);
    };
  }, []);

  if (allPictures.length === 0 && !isLoading)
    return <NotificationText>{messageMissingImgs}</NotificationText>;

  return (
    <>
      {title && <Title title={title} />}
      <article className={styles.article}>
        <ListOfImages allPictures={allPictures} />
        {!isFetching && !isError && (
          <div ref={trackedElement} style={{ height: 1 }}></div>
        )}
        {!isError && <LoadingAnimation />}
      </article>
      {isError && (
        <NotificationText>Картинки закончились. Иди работай</NotificationText>
      )}
    </>
  );
};

"use client";
import {
  EndlessPicturesProps,
  useEndlessPicturesQuery,
} from "@shared/model/index";
import { ListOfImages, LoadingAnimation } from "@shared/ui/index";
import { useElementTracking } from "@shared/utils/index";
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

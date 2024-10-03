"use client";
import {
  EndlessPicturesProps,
  useEndlessPicturesQuery,
} from "@shared/model/index";
import { ListOfImages, LoadingAnimation } from "@shared/ui/index";
import { useElementTracking } from "@shared/utils/index";
import { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./EndlessPictures.module.scss";

const Title = dynamic(() => import("./title/Title"));

export const EndlessPictures: FC<EndlessPicturesProps> = ({
  props = {},
  requestField,
}) => {
  const { queryKeys, title } = props;

  const {
    allPictures,
    query: { isFetching, isError },
  } = useEndlessPicturesQuery(requestField, 20, queryKeys);

  const { scrollWrap, trackedElement } = useElementTracking();

  useEffect(() => {
    window.addEventListener("scroll", scrollWrap);
    return () => {
      window.removeEventListener("scroll", scrollWrap);
    };
  }, []);

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
    </>
  );
};

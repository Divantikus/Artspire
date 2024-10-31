"use client";
import {
  ListOfImages,
  useEndlessPictures,
  EndlessPicturesProps,
  useEndlessPicturesQuery,
} from "@widgets/endless-pictures";
import { NotificationText } from "./notification-text/NotificationText";
import { LoadingAnimation } from "@shared/ui/index";
import { FC } from "react";
import styles from "./EndlessPictures.module.scss";

export const EndlessPictures: FC<EndlessPicturesProps> = ({
  props,
  requestField = "getArts",
}) => {
  const {
    elementWidth,
    elementHeight,
    messageMissingImgs,
    queryKeys = ["getPictures"],
    customStyles: { height, padding },
  } = props;
  const { top, right, bottom, left } = padding;

  const rowCount = Math.ceil(height / elementHeight);
  const cardInRowCount = Math.floor(
    (window.innerWidth - left - right) / elementWidth
  );
  // console.log(rowCount);
  // console.log(cardInRowCount);

  const {
    allPictures,
    query: { isLoading, isRefetching },
  } = useEndlessPicturesQuery(
    requestField,
    rowCount * cardInRowCount + cardInRowCount * 2,
    queryKeys
  );

  const { start, getTopHeight, handleScroll, trackedElement, getBottomHeight } =
    useEndlessPictures(
      queryKeys,
      allPictures,
      elementHeight,
      cardInRowCount,
      rowCount
    );

  const limitImages = start + cardInRowCount * rowCount + cardInRowCount * 4;

  if (!allPictures.length && !isLoading)
    return <NotificationText>{messageMissingImgs}</NotificationText>;

  // console.log("rer");

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: height,
        padding: `${top}px ${right}px ${bottom}px ${left}px`,
      }}
      className={styles.wrapper}
    >
      <div className={styles.tracker} style={{ height: getTopHeight() }}></div>
      <div className={styles.article}>
        <ListOfImages allPictures={allPictures.slice(start, limitImages)} />
        <div
          ref={trackedElement}
          className={styles.tracker}
          style={{ height: getBottomHeight() }}
        >
          {(isLoading || isRefetching) && <LoadingAnimation />}
        </div>
      </div>
    </div>
  );
};

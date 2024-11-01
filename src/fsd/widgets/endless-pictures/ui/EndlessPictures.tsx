"use client";
import {
  ListOfImages,
  useEndlessPictures,
  EndlessPicturesProps,
  useEndlessPicturesQuery,
} from "@widgets/endless-pictures";
import { NotificationText } from "./notification-text/NotificationText";
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
  const cardInRowCount =
    typeof window !== "undefined"
      ? Math.floor((window.innerWidth - left - right) / elementWidth)
      : 0;

  const {
    allPictures,
    query: { isLoading },
  } = useEndlessPicturesQuery(
    requestField,
    rowCount * cardInRowCount + cardInRowCount * 2,
    queryKeys
  );

  const {
    start,
    limitImages,
    handleScroll,
    getTopHeight,
    trackedElement,
    getBottomHeight,
  } = useEndlessPictures(
    queryKeys,
    allPictures,
    elementHeight,
    cardInRowCount,
    rowCount
  );

  if (!allPictures.length && !isLoading)
    return <NotificationText>{messageMissingImgs}</NotificationText>;

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
        ></div>
      </div>
    </div>
  );
};

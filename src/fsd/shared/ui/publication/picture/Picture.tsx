import { AddToFavoriteButton } from "@features/like-button";
import { nunitoSans400 } from "@shared/assets";
import { PictureProps } from "./pictureTypes";
import { FC, useState } from "react";
import styles from "./Picture.module.scss";

export const Picture: FC<PictureProps> = ({ url, title, id }) => {
  const [isPictureLoaded, setIsPictureLoaded] = useState(true);

  return (
    <div className={`${styles.imgContainer} ${nunitoSans400.className}`}>
      <img
        src={url}
        alt={title || "Картинка"}
        style={{ display: isPictureLoaded ? "none" : "inline-block" }}
        onLoad={() => {
          setIsPictureLoaded(false);
        }}
      />
      {isPictureLoaded ? (
        <div className={styles.skelet}>
          <div className={styles.line}></div>
        </div>
      ) : (
        <AddToFavoriteButton id={id} customClassName={styles.likeBtn} />
      )}
    </div>
  );
};

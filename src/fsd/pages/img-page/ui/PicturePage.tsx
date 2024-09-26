import {
  Comments,
  Publication,
  ReturnButton,
  EndlessPictures,
} from "@/fsd/shared/ui";
import { endlessPicturesProps } from "@pages/img-page/index";
import styles from "./PicturePage.module.scss";

export const PicturePage = () => {
  return (
    <article className={styles.article}>
      <ReturnButton />
      <Publication id={11} />
      <Comments />
      <EndlessPictures props={endlessPicturesProps} />
    </article>
  );
};

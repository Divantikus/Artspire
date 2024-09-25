import { Publication, ReturnButton } from "@/fsd/shared/ui";
import styles from "./PicturePage.module.scss";
import { ImgCard } from "@/fsd/widgets/img-card";

export const PicturePage = () => {
  return (
    <article className={styles.article}>
      <ReturnButton />
      <Publication id={11} />
    </article>
  );
};

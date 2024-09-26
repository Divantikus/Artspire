"use client";
import { nunitoSans400 } from "@shared/assets/fonts/fonts";
import { Comment } from "@shared/ui/comment/Comment";
import styles from "./Comments.module.scss";

export const Comments = () => {
  return (
    <article className={`${styles.article} ${nunitoSans400.className}`}>
      <h4 className={styles.title}>Комментарии</h4>
      <div className={styles.commentsContainer}></div>
      <Comment props={{ date: "01.01.2001", img: "", userName: "Пётр Петров" }}>
        Сохранил!
      </Comment>

      <Comment props={{ date: "01.01.2001", img: "", userName: "Пэс" }}>
        сомнительно
      </Comment>

      <Comment props={{ date: "01.01.2001", img: "", userName: "Феникс" }}>
        Огонь
      </Comment>
    </article>
  );
};

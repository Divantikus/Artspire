import { FC, ReactNode } from "react";
import styles from "./Comment.module.scss";

interface CommentProps {
  children: ReactNode;
  props: { img: string; date: string; userName: string };
}

export const Comment: FC<CommentProps> = ({ props, children }) => {
  const { date, img, userName } = props;

  return (
    <div>
      <div className={styles.profileContainer}>
        <img
          src=""
          alt={`Аватарка пользователя ${userName}`}
          className={styles.profileImg}
        />
        <div className={styles.userName}>{userName}</div>
        <time dateTime="2001-01-01" className={styles.date}>
          {date}
        </time>
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

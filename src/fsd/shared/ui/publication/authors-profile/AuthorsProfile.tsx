import { GradientButton } from "@shared/ui";
import { FC } from "react";
import styles from "./AuthorsProfile.module.scss";

interface AuthorsProfileProps {
  id: number;
  imgUrl: string;
  username: string;
}

export const AuthorsProfile: FC<AuthorsProfileProps> = (props) => {
  const { username, id, imgUrl } = props;

  return (
    <div className={styles.profileContainer}>
      <img src="" alt="img" className={styles.profileIcon} />
      <div className={styles.profileName}>{username}</div>
      <GradientButton options={{ customStyle: styles.button }}>
        Подписаться
      </GradientButton>
    </div>
  );
};

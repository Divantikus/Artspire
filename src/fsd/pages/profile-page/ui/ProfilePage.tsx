import { Profile } from "@pages/profile-page/index";
import styles from "./ProfilePage.module.scss";

export const ProfilePage = () => {
  return (
    <section className={styles.profileSection}>
      <Profile />
    </section>
  );
};

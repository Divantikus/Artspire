import googleIcon from "@/fsd/shared/assets/facebook-apple-google/google.png";
import appleIcon from "@/fsd/shared/assets/facebook-apple-google/apple.png";
import styles from "./FormLinks.module.scss";
import Image from "next/image";

export const FormLinks = () => {
  return (
    <div className={styles.links}>
      <a href="#" className={styles.link}>
        <span>Войти с Google</span>
        <Image src={googleIcon} alt={"google icon"} width={32} height={32} />
      </a>
      <a href="#" className={styles.link}>
        <span>Войти с Apple ID</span>
        <Image src={appleIcon} alt={"apple icon"} width={32} height={32} />
      </a>
    </div>
  );
};

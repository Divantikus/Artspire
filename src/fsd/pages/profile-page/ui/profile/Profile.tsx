import { nunitoSans700 } from "@/fsd/shared/assets";
import styles from "./Profile.module.scss";
import Image from "next/image";
import ava from "@assets/imgs/profile/120na120.jpg";
import pen from "@assets/imgs/profile/pen.svg";

export const Profile = () => {
  return (
    <section className={styles.profile}>
      <Image src={ava} alt="Ваша аватарка" className={styles.ava} />
      <div className={styles.nikNameWrap}>
        <p className={`${styles.nik} ${nunitoSans700.className}`}>
          Иван Иванов
        </p>
        <button>
          <Image src={pen} alt="Карандаш" />
        </button>
      </div>
      <div className={styles.subscriptionsAndSubscribers}>
        <div className={styles.column}>
          <span>15</span> подписок
        </div>
        <div className={styles.column}>
          <span>15</span> подписчиков
        </div>
      </div>
    </section>
  );
};

import {
  nunitoSans300,
  nunitoSans400,
  nunitoSans700,
} from "@assets/fonts/fonts";
import { GradientButton } from "@shared/ui/gradient-button/GradientButton";
import { Likebutton } from "@/fsd/features/like-button";
import { TagButton } from "@shared/ui/tag-button/TagButton";
import { Counter } from "../counter/Counter";
import { Likes } from "./like/Likes";
import imgForAll from "@shared/assets/for-all/image.png";
import watchIcon from "@shared/assets/eye/open-eye.svg";
import styles from "./Publication.module.scss";
import Image from "next/image";

//! Заглушка

export const Publication = ({ id }: { id: number }) => {
  return (
    <>
      <div className={`${styles.imgContainer} ${nunitoSans400.className}`}>
        <Image src={imgForAll} alt="img" className={styles.img} />
        <Likebutton id={id} customClassName={styles.likeBtn} />
      </div>
      <div className={styles.statistics}>
        <Likes quantity={10000} id={2} />
        <Counter quantity={10000000}>
          <Image src={watchIcon} alt={"Иконка глаза"} />
        </Counter>
        <time
          dateTime="2001-01-01"
          className={`${styles.date} ${nunitoSans300.className}`}
        >
          01.01.2001
        </time>
      </div>
      <h3 className={`${styles.title} ${nunitoSans700.className}`}>
        Если звёзды зажигают
      </h3>
      <i className={styles.signature}>Значит это кому-нибудь нужно</i>
      <div className={styles.profileContainer}>
        <img src="" alt="img" className={styles.profileIcon} />
        <div className={styles.profileName}>Васисуалий Поликарпов</div>
        <GradientButton options={{ customStyle: styles.button }}>
          Подписаться
        </GradientButton>
      </div>
      <div className={styles.buttonContainer}>
        <TagButton>Photoshop</TagButton>
        <TagButton>Photoshop</TagButton>
        <TagButton>Photoshop</TagButton>
        <TagButton>Photoshop</TagButton>
      </div>
    </>
  );
};

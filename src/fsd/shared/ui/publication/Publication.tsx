import { Likebutton } from "@/fsd/features/like-button";
import { Counter } from "../counter/Counter";
import styles from "./Publication.module.scss";

export const Publication = (id: number) => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={""} alt={""} />
        <Likebutton id={id} />
      </div>
      <div className={styles.statistics}>
        <Counter>100000</Counter>
      </div>
    </>
  );
};

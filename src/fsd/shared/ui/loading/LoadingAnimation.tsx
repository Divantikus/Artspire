import styles from "./LoadingAnimation.module.scss";

export const LoadingAnimation = () => {
  return (
    <div className={styles.wrap}>
      <span className={styles.loader}></span>
    </div>
  );
};

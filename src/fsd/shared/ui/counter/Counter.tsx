import { FC, ReactNode } from "react";
import styles from "./Counter.module.scss";
import Image from "next/image";

interface CounterProps {
  alt: string;
  img: string;
  children: ReactNode;
}

export const Counter: FC<CounterProps> = ({ children, img, alt }) => {
  return (
    <div className={styles.container}>
      <Image src={img} alt={alt} /> {children}
    </div>
  );
};

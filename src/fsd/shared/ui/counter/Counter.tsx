import { nunitoSans300 } from "@assets/fonts/fonts";
import { FC, ReactNode } from "react";
import styles from "./Counter.module.scss";

interface CounterProps {
  quantity?: number;
  children: ReactNode;
}

export const Counter: FC<CounterProps> = ({ children, quantity = 0 }) => {
  return (
    <div className={`${styles.container} ${nunitoSans300.className}`}>
      {children} {quantity}
    </div>
  );
};

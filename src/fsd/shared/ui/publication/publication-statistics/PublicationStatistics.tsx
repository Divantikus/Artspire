import { nunitoSans300 } from "@/fsd/shared/assets";
import { createDate } from "@/fsd/shared/model";
import { Counter } from "@shared/ui/index";
import { Likes } from "../like/Likes";
import { FC } from "react";
import watchIcon from "@shared/assets/eye/open-eye.svg";
import styles from "./PublicationStatistics.module.scss";
import Image from "next/image";

interface PublicStatProps {
  watched: number;
  likes_count: number;
  created_at: string | null;
}

export const PublicationStatistics: FC<PublicStatProps> = ({
  watched,
  created_at,
  likes_count,
}) => {
  return (
    <div className={styles.statistics}>
      <Likes quantity={likes_count} id={2} />
      <Counter quantity={watched}>
        <Image src={watchIcon} alt={"Иконка глаза"} />
      </Counter>
      <time
        dateTime={createDate(created_at)}
        className={`${styles.date} ${nunitoSans300.className}`}
      >
        {createDate(created_at, true)}
      </time>
    </div>
  );
};

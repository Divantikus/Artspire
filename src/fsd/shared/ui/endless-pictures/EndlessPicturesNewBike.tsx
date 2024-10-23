import { useRef, useState } from "react";
import { ShortArtInfo } from "@shared/api";
import { ImgCard } from "@widgets/img-card";
import styles from "./EndlessPicturesNewBike.module.scss";

interface NewBikeProps {
  height: number;
  data: ShortArtInfo[];
  elementCount: number;
  elementHeight: number;
}

export const EndlessPicturesNewBike = ({
  data,
  height,
  elementCount,
  elementHeight,
}: NewBikeProps) => {
  const [start, setStart] = useState(0);
  const scrollHeight = useRef(0);
  console.log(document.body.clientWidth);

  const getTopHeight = () => {
    //! рафакторим число тут
    return (start / 2) * elementHeight;
    // return Math.floor((start / 2) * elementHeight);
  };

  const getBottomHeight = () => {
    //   //! рафакторим число тут
    return (data.length / 2) * elementHeight - start * 2 * elementHeight;
    // return Math.floor(
    //   (data.length / 2) * elementHeight - start * 2 * elementHeight
    // );
  };

  return (
    // <div style={{ height: height }} className={styles.wrapper}>
    <div
      className={styles.innerWrapper}
      style={{ height: height }}
      onScroll={(e) => {
        const currentScrollHeight = e.currentTarget.scrollTop;
        const num = Math.floor(currentScrollHeight / elementHeight);
        //? Мб тут
        const isChet = num / 2 === Math.floor(num / 2);

        if (isChet) return setStart(num);

        if (currentScrollHeight > scrollHeight.current) {
          scrollHeight.current = currentScrollHeight;
          //? рафакторим число тут
          return setStart(num + 1);
        }

        scrollHeight.current = currentScrollHeight;
        //? рафакторим число тут
        setStart(num - 1);
      }}
    >
      <div className={styles.article}>
        <div
          className={styles.tracker}
          style={{ height: getTopHeight() }}
        ></div>
        {/* //! рафакторим число тут */}
        {data.slice(start, start + elementCount + 4).map((item) => {
          return (
            <ImgCard
              key={item.id}
              props={{
                id: item.id,
                img: item.url,
                slug: item.id,
                alt: "Картинка",
                isFavorite: item.is_liked,
              }}
            />
          );
        })}
        <div
          className={styles.tracker}
          style={{ height: getBottomHeight() }}
        ></div>
      </div>
    </div>
    // </div>
  );
};

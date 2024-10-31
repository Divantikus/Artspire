"use client";
import { useElementTracking } from "@shared/utils";
import { ShortArtInfo } from "@shared/api";
import { useDebounce } from "@shared/model";
import { useState } from "react";

export const useEndlessPictures = (
  queryKeys: any[],
  data: ShortArtInfo[],
  elementHeight: number,
  cardInRowCount: number,
  rowCount: number
) => {
  const [start, setStart] = useState(0);
  const { trackedElement, scrollWrap } = useElementTracking(queryKeys);
  const deb = useDebounce();
  console.log(start);

  const getTopHeight = () => {
    return Math.floor(start / cardInRowCount) * elementHeight;
  };

  const getBottomHeight = () => {
    return Math.floor(
      (data.length / cardInRowCount) * elementHeight -
        getTopHeight() -
        rowCount * elementHeight +
        80
    );
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollHeight = e.currentTarget.scrollTop;
    const num = Math.floor(currentScrollHeight / elementHeight);
    console.log("data.length - start", data.length - start);
    console.log("cardInRowCount * rowCount", cardInRowCount * rowCount);

    if (data.length - start <= cardInRowCount * rowCount) scrollWrap();

    deb(() => {
      setStart(num * cardInRowCount);
    }, 300);
  };

  return {
    start,
    handleScroll,
    getTopHeight,
    trackedElement,
    cardInRowCount,
    getBottomHeight,
  };
};

"use client";
import { useEffect, useState } from "react";
import { useElementTracking } from "@shared/utils";
import { ShortArtInfo } from "@shared/api";
import { useDebounce } from "@shared/model";

export const useEndlessPictures = (
  queryKeys: any[],
  data: ShortArtInfo[],
  elementHeight: number,
  cardInRowCount: number,
  rowCount: number
) => {
  const debounce = useDebounce();
  const [start, setStart] = useState(0);
  const visibleImagesCount = cardInRowCount * rowCount;
  const limitImages = start + visibleImagesCount + cardInRowCount * 4;
  const { trackedElement, scrollWrap } = useElementTracking(queryKeys);

  const getTopHeight = () => Math.floor(start / cardInRowCount) * elementHeight;

  const getBottomHeight = () => {
    const bottomHeight =
      Math.floor((data.length - limitImages) / cardInRowCount) * elementHeight;

    return bottomHeight >= 0 ? bottomHeight : 1;
  };

  useEffect(() => {
    if (data.length - start <= visibleImagesCount) scrollWrap();
  }, [start]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollHeight = e.currentTarget.scrollTop;
    debounce(() => {
      const num = Math.floor(currentScrollHeight / elementHeight);
      setStart(num * cardInRowCount);
    }, 300);
  };

  return {
    start,
    limitImages,
    handleScroll,
    getTopHeight,
    trackedElement,
    getBottomHeight,
  };
};

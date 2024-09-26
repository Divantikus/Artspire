"use client";
import { isElementVisible } from "@shared/model/index";
import { useQueryClient } from "react-query";
import { useDebounce } from "@shared/utils/index";
import { useRef } from "react";

export const useElementTracking = () => {
  const debounce = useDebounce();
  const queryClient = useQueryClient();
  const trackedElement = useRef<HTMLDivElement>(null);

  const scrollWrap = () => {
    debounce(() => {
      if (!trackedElement.current) return;

      if (isElementVisible(trackedElement.current).topIsVisible)
        queryClient.refetchQueries({ queryKey: ["getPictures"] });
    }, 300);
  };

  return { scrollWrap, trackedElement };
};

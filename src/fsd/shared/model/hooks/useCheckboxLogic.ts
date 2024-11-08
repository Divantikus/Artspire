"use client";
import { useFormContext } from "react-hook-form";
import { CreateImgData } from "@/fsd/pages/create-img";
import { useRef } from "react";

export const useCheckboxLogic = () => {
  const refPathBg = useRef<SVGPathElement>(null);
  const refPathCircle = useRef<SVGPathElement>(null);
  const { register, getValues, setValue } = useFormContext<CreateImgData>();

  const handleClick = () => {
    if (!refPathBg.current! || !refPathCircle.current) return;
    const isActiveNow = getValues("commentsIsOff");
    const [svgBg, svgCircle] = [refPathBg.current, refPathCircle.current];

    if (isActiveNow) {
      svgBg.style.fill = "#CBCED5";
      svgCircle.setAttribute(
        "d",
        "M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
      );
      return setValue("commentsIsOff", !isActiveNow);
    }

    svgBg.style.fill = "#005491";
    svgCircle.setAttribute(
      "d",
      "M30 10C30 14.4183 26.4183 18 22 18C17.5817 18 14 14.4183 14 10C14 5.58172 17.5817 2 22 2C26.4183 2 30 5.58172 30 10Z"
    );
    setValue("commentsIsOff", !isActiveNow);
  };
  return { register, handleClick, refPathBg, refPathCircle };
};

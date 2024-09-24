"use client";
import { ChangeEvent, useState } from "react";

export const useCheckForText = () => {
  const [isHaveText, setIsHaveText] = useState(false);

  const checkForText = (event: ChangeEvent<HTMLInputElement>) =>
    setIsHaveText(!!event.target.value);

  return { isHaveText, checkForText };
};

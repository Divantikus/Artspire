"use client";
import { useFormContext } from "react-hook-form";
import { IDefaultInput } from "@shared/ui";
import { CreateImgData } from "../model/types";
import Image from "next/image";
import xImg from "@assets/for-all/x.svg";

export const useInputImgSettings = () => {
  const { reset, watch } = useFormContext<CreateImgData>();

  const isDisabled = !watch("img");

  const InputImgNameConf: IDefaultInput = {
    isDisabled,
    id: "imgName",
    registerOptions: { name: "imgName" },
    placeholder: "Введите название работы",
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { customFunction: reset, params: { imgName: "" } },
  };

  return { InputImgNameConf, isDisabled };
};

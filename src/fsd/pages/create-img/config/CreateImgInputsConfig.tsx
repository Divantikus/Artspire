"use client";
import { useFormContext } from "react-hook-form";
import { IDefaultInput } from "@shared/ui/index";
import { CreateImgData } from "../model/types";
import Image from "next/image";
import xImg from "@assets/for-all/x.svg";

export const useInputImgSettings = () => {
  const { reset, watch, register } = useFormContext<CreateImgData>();
  const isDisabled = !watch("img");

  const InputImgNameConf: IDefaultInput = {
    id: "imgName",
    isDisabled,
    placeholder: "Введите название работы",
    register: register("imgName"),
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { customFunction: reset, params: { imgName: "" } },
  };
  const InputImgDescrConf: IDefaultInput = {
    isDisabled,
    id: "imgDesc",
    register: register("imgDesc"),
    placeholder: "Коротко опишите свою работу",
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { customFunction: reset, params: { imgDesc: "" } },
  };

  return { InputImgNameConf, InputImgDescrConf, isDisabled };
};

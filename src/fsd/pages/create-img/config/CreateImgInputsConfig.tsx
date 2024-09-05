"use client";
import { useFormContext } from "react-hook-form";
import { IDefaultInput } from "@/fsd/shared/ui/index";
import { CreateImgData } from "../model/types";
import Image from "next/image";
import xImg from "@assets/for-all/x.svg";

export const useInputImgSettings = () => {
  const {
    reset,
    watch,
    register,
    formState: { isValid },
  } = useFormContext<CreateImgData>();
  const isDisabled = !isValid;

  const InputImgNameConf: IDefaultInput = {
    id: "imgName",
    isDisabled: !watch("img"),
    placeholder: "Введите название работы",
    register: register("imgName", { required: true }),
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { func: reset, params: { imgName: "" } },
  };
  const InputImgDescrConf: IDefaultInput = {
    isDisabled,
    id: "imgDesc",
    register: register("imgDesc"),
    placeholder: "Коротко опишите свою работу",
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { func: reset, params: { imgDesc: "" } },
  };
  const InputImgToolsConf: IDefaultInput = {
    isDisabled,
    id: "imgTools",
    register: register("imgTools"),
    placeholder: "Какие инструменты использовали?",
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { func: reset, params: { imgTools: "" } },
  };

  return { InputImgNameConf, InputImgDescrConf, InputImgToolsConf, isValid };
};

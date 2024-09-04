import { useFormContext } from "react-hook-form";
import { IDefaultInput } from "@/fsd/shared/ui/index";
import { CreateImgData } from "../model/types";
import Image from "next/image";
import xImg from "@assets/for-all/x.svg";

export const useInputImgSettings = () => {
  const { register, reset } = useFormContext<CreateImgData>();

  const InputImgNameConf: IDefaultInput = {
    id: "imgName",
    placeholder: "Введите название работы",
    register: register("imgName", { required: true }),
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { func: reset, params: { imgName: "" } },
  };
  const InputImgDescrConf: IDefaultInput = {
    id: "imgDesc",
    register: register("imgDesc"),
    placeholder: "Коротко опишите свою работу",
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { func: reset, params: { imgDesc: "" } },
  };
  const InputImgToolsConf: IDefaultInput = {
    id: "imgTools",
    register: register("imgTools"),
    placeholder: "Какие инструменты использовали?",
    buttonImg: <Image src={xImg} alt="Иконка крестика" />,
    optionalFunction: { func: reset, params: { imgTools: "" } },
  };

  return { InputImgNameConf, InputImgDescrConf, InputImgToolsConf };
};

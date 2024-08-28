import { checkIsValidImgType } from "@/fsd/shared/utils";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CreateImgData } from "@/fsd/pages/create-img";

export const useFileUploadLogic = () => {
  const {
    setValue,
    setError,
    register,
    resetField,
    clearErrors,
    formState: { errors },
  } = useFormContext<CreateImgData>();

  const [img, setImg] = useState("");
  const [isMousOver, setIsMousOver] = useState(false);
  const svgRef = useRef<SVGPathElement>(null);

  const displayPicture = (img: File) => {
    const imgUrl = URL.createObjectURL(img);
    setImg(imgUrl);
  };

  const resetImg = (isHaveError?: boolean) => {
    setImg("");
    resetField("img");
    if (isHaveError)
      setError("img", {
        type: "inappropriateImageFormat",
        message: "Неподходящий формат картинки",
      });
  };

  const change = (e: any) => {
    const input = e.target as HTMLInputElement;
    const img = input.files?.[0];

    if (!checkIsValidImgType(img)) return resetImg(img);

    clearErrors("img");
    displayPicture(img);
  };

  const dragStart = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const label = e.currentTarget;
    label.style.borderColor = "#3d72ee";

    setIsMousOver(true);
  };

  const darnEnd = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const label = e.currentTarget;
    label.style.borderColor = "#cbced5";

    setIsMousOver(false);
  };

  const drop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const label = e.target as HTMLLabelElement;
    const files = e.dataTransfer.files;
    label.style.borderColor = "#cbced5";
    setIsMousOver(false);

    if (!checkIsValidImgType(files[0])) return resetImg(true);

    clearErrors("img");
    displayPicture(files[0]);
    setValue("img", files);
  };

  const mouseEnter = () => {
    if (!svgRef.current) return;
    svgRef.current.style.stroke = "#6392ff";
  };

  const mouseLeave = () => {
    if (!svgRef.current) return;
    svgRef.current.style.stroke = "#cbced5";
  };

  return {
    img,
    drop,
    svgRef,
    errors,
    change,
    darnEnd,
    register,
    dragStart,
    isMousOver,
    mouseLeave,
    mouseEnter,
  };
};

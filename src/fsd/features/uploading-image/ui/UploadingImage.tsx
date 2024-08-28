import { checkIsValidImgType } from "@/fsd/shared/utils";
import { useFormContext } from "react-hook-form";
import { CreateImgData } from "@/fsd/pages/create-img/index";
import { useState } from "react";
import folderIcon from "@assets/create/folder.svg";
import styles from "./UploadingImage.module.scss";
import Image from "next/image";

export const UploadingImage = () => {
  const {
    setValue,
    setError,
    register,
    resetField,
    formState: { errors },
  } = useFormContext<CreateImgData>();
  const [img, setImg] = useState("");
  const [isMousOver, setIsMousOver] = useState(false);

  const displayPicture = (img: File) => {
    const imgUrl = URL.createObjectURL(img);
    setImg(imgUrl);
  };

  const resetImg = () => {
    setImg("");
    setError("img", {
      type: "inappropriateImageFormat",
      message: "Неподходящий формат картинки",
    });
    resetField("img");
  };

  const change = (e: any) => {
    const input = e.target as HTMLInputElement;
    const img = input.files?.[0];
    console.log(input.files?.[0]);

    if (checkIsValidImgType(img)) return displayPicture(img);

    resetImg();
  };

  const dragStart = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const label = e.target as HTMLLabelElement;
    label.style.borderColor = "#3d72ee";
    setIsMousOver(true);
  };

  const darnEnd = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const label = e.target as HTMLLabelElement;
    label.style.borderColor = "#cbced5";
    setIsMousOver(false);
  };

  const dragKonec = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const label = e.target as HTMLLabelElement;
    const file = e.dataTransfer.files[0];
    label.style.borderColor = "#cbced5";
    setIsMousOver(false);

    if (!checkIsValidImgType(file)) return resetImg();

    const dataTr = new DataTransfer();
    dataTr.items.add(file);

    displayPicture(file);
    setValue("img", dataTr.files);
  };

  return (
    <>
      <input
        id={"id"}
        type={"file"}
        className={styles.input}
        {...register("img", { onChange: change })}
      />
      <label
        htmlFor={"id"}
        onDrop={dragKonec}
        onDragLeave={darnEnd}
        onDragEnter={dragStart}
        className={styles.lable}
        onDragOver={(e) => e.preventDefault()}
      >
        <div>
          {isMousOver && <p>Отпустите</p>}
          {img && !isMousOver && <img src={img} className={styles.img} />}
          {!img && !isMousOver && (
            <div className={styles.defaultImgContainer}>
              <Image src={folderIcon} alt={"Иконка папки"} />
              <p className={styles.text}>Загрузите изображение с устройства</p>
            </div>
          )}
        </div>
      </label>
      {errors.img?.type === "inappropriateImageFormat" && (
        <p>{errors.img.message}</p>
      )}
    </>
  );
};

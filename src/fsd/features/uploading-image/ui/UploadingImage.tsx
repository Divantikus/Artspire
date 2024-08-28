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
    formState: { errors },
  } = useFormContext<CreateImgData>();
  const [img, setImg] = useState("");
  const [isMousOver, setIsMousOver] = useState(false);

  const change = (e: any) => {
    const img = e.target.files[0];

    if (!img) return setImg("");

    switch (img.type) {
      case "image/jpeg":
        break;
      case "image/webp":
        break;
      case "image/png":
        break;
      default:
        setImg("");
        setError("img", {
          type: "inappropriateImageFormat",
          message: "Неподходящий формат картинки",
        });
        return;
    }

    const imgUrl = URL.createObjectURL(img);
    console.log(img.type);

    setImg(imgUrl);
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
    label.style.borderColor = "#cbced5";
    setIsMousOver(false);
  };
  console.log(isMousOver);

  return (
    <>
      <input
        id={"id"}
        type={"file"}
        className={styles.input}
        {...register("img", { onChange: change, required: true })}
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
          {img && <img src={img} className={styles.img} />}
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

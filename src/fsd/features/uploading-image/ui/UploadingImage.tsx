import { useFileUploadLogic } from "@features/uploading-image/index";
import { FolderIcon } from "@/fsd/shared/assets/index";
import styles from "./UploadingImage.module.scss";

export const UploadingImage = () => {
  const {
    img,
    drop,
    svgRef,
    change,
    errors,
    darnEnd,
    register,
    dragStart,
    isMousOver,
    mouseEnter,
    mouseLeave,
  } = useFileUploadLogic();

  return (
    <>
      <input
        id={"id"}
        type={"file"}
        className={styles.input}
        {...register("img", { onChange: change })}
      />
      <label
        onDrop={drop}
        htmlFor={"id"}
        onDragLeave={darnEnd}
        onDragEnter={dragStart}
        className={styles.lable}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onDragOver={(e) => e.preventDefault()}
      >
        {img && !isMousOver && <img src={img} className={styles.img} />}
        <div>
          {isMousOver && (
            <p className={styles.textDrop}>Отпустите изображение</p>
          )}
          {!img && !isMousOver && (
            <div className={styles.defaultImgContainer}>
              <FolderIcon svgRef={svgRef} />
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

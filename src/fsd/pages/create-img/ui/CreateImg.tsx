"use client";
import { FormProvider, useForm } from "react-hook-form";
import { UploadingImage } from "@/fsd/features/uploading-image/index";
import { ReturnButton } from "@/fsd/shared/ui";
import styles from "./CreateImg.module.scss";

interface CreateImgData {}

export const CreateImg = () => {
  const methods = useForm<CreateImgData>();
  const sub = (e: CreateImgData) => {
    console.log(e);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(sub)}>
        <div className={styles.wrapper}>
          <ReturnButton />
          <UploadingImage />
        </div>
        <button>11</button>
      </form>
    </FormProvider>
  );
};

"use client";
import { FormProvider, useForm } from "react-hook-form";
import { CreateImgInputs } from "./create-img-inputs/CreateImgInputs";
import { UploadingImage } from "@/fsd/features/uploading-image/index";
import { CreateImgData } from "@pages/create-img/index";
import { ReturnButton } from "@/fsd/shared/ui";
import styles from "./CreateImg.module.scss";

export const CreateImg = () => {
  const methods = useForm<CreateImgData>();

  const sub = (e: CreateImgData) => {
    if (!e.img?.length) return;
    console.log(e);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(sub)}>
        <div className={styles.wrapper}>
          <ReturnButton />
          <UploadingImage />
          <CreateImgInputs />
        </div>
        <button>111111111111</button>
      </form>
    </FormProvider>
  );
};

"use client";
import { CreateImgData, useMutationPostArt } from "@pages/create-img/index";
import { FormProvider, useForm } from "react-hook-form";
import { CreateImgInputs } from "./create-img-inputs/CreateImgInputs";
import { UploadingImage } from "@features/uploading-image/index";
import { nunitoSans400 } from "@assets/index";
import { ReturnButton } from "@shared/ui/index";
import styles from "./CreateImg.module.scss";

export const CreateImg = () => {
  const methods = useForm<CreateImgData>();
  const { mutate } = useMutationPostArt();

  const submit = (formData: CreateImgData) => {
    if (!formData.img?.length) return;
    mutate(formData);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submit)}
        className={`${styles.wrapper} ${nunitoSans400.className}`}
      >
        <ReturnButton />
        <UploadingImage />
        <CreateImgInputs />
      </form>
    </FormProvider>
  );
};

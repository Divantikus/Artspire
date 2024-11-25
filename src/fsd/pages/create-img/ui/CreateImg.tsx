"use client";
import { CreateImgData, useMutationPostArt } from "@pages/create-img/index";
import { FormProvider, useForm } from "react-hook-form";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { CreateImgInputs } from "./create-img-inputs/CreateImgInputs";
import { UploadingImage } from "@features/uploading-image/index";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in";
import { nunitoSans400 } from "@assets/index";
import { PortalInBody } from "@shared/ui/Portal-in-body/PortalInBody";
import { ReturnButton } from "@shared/ui/index";
import { useContext } from "react";
import dynamic from "next/dynamic";
import styles from "./CreateImg.module.scss";

const ModalWindow = dynamic(() => import("@shared/ui/modalWindow/ModalWindow"));

export const CreateImg = () => {
  const { modalWindowState } = useContext(ModalWindowState);

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
      {modalWindowState.state !== "hidden" && (
        <PortalInBody>
          <ModalWindow>
            <SignUpOrSignIn />
          </ModalWindow>
        </PortalInBody>
      )}
    </FormProvider>
  );
};

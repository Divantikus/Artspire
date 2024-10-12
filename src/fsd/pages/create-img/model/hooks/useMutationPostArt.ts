"use client";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { CreateImgData } from "@pages/create-img/index";
import { artsService } from "@shared/api";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const useMutationPostArt = () => {
  const router = useRouter();
  const { setModalWindowIsVisible } = useContext(ModalWindowState);

  return useMutation({
    mutationKey: ["CreatePost"],
    mutationFn: async (data: CreateImgData) => {
      const { img, selectTags, imgName } = data;
      const tagsString = selectTags.reduce((acc, item) => {
        return acc + "," + item.value;
      }, "");

      return await artsService.createArt(
        img[0],
        imgName || "",
        tagsString.slice(1)
      );
    },
    onSuccess: (data) => {
      const status = data.status;
      if (status === 201) router.push(`/post/${data.data}`);
    },
    onError: (data: AxiosError) => {
      const status = data.status || 500;
      switch (status) {
        case 401:
          setModalWindowIsVisible(true);
          break;
      }
    },
  });
};

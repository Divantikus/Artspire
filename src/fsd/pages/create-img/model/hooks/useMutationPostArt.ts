"use client";
import { CreateImgData } from "@pages/create-img/index";
import { artsService } from "@shared/api";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

export const useMutationPostArt = () => {
  const router = useRouter();

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
  });
};

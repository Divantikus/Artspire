"use client";
import { CreateImgData } from "@pages/create-img/index";
import { artsService } from "@shared/api";
import { useMutation } from "react-query";

export const useMutationPostArt = () => {
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
  });
};

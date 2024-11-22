"use client";
import { artsService } from "@shared/api/index";
import { useQuery } from "react-query";

export const useQueryPicturePage = (id: number) => {
  return useQuery({
    queryKey: ["getImgData"],
    queryFn: async () => {
      if (isNaN(id)) throw new Error("Incorrect slug");
      const data = await artsService.getOneArt(id);
      return data[0];
    },
    retry: 0,
  });
};

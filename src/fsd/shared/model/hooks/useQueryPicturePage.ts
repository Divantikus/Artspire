"use client";
import { artsService } from "@shared/api/index";
import { useQuery } from "react-query";

export const useQueryPicturePage = (id: number) => {
  return useQuery({
    queryKey: ["getImgData"],
    queryFn: async () => {
      const data = await artsService.getOneArt(id);
      return data[0];
    },
  });
};

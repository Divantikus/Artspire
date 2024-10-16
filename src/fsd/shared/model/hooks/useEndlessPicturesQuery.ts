"use client";
import { ShortArtInfo, artsService } from "@shared/api/index";
import { useQueryClient, useQuery } from "react-query";
import { TArtsServiceFields } from "@shared/model/index";
import { useRef, useState } from "react";
import { AxiosError } from "axios";

export const useEndlessPicturesQuery = (
  name: TArtsServiceFields,
  limit = 10,
  queryKeys: any[]
) => {
  const page = useRef(0);
  const queryClient = useQueryClient();
  const [allPictures, setAllPictures] = useState<ShortArtInfo[]>([]);

  const query = useQuery({
    queryKey: queryKeys,
    queryFn: () => {
      try {
        return artsService[name](page.current, limit);
      } catch (e) {
        const axiosErr = e as AxiosError;
        const status = axiosErr.status;
        if (!status) return [];
        switch (status) {
          case 404:
            throw new Error("Картинки закончились. Иди Работай");
        }
        return [];
      }
    },
    onSuccess: (newData) => {
      if (!newData.length) return;
      page.current += limit;
      setAllPictures((data) => data.concat(newData));
    },
    retry: 0,
    cacheTime: 0,
    refetchOnReconnect: true,
  });

  return { queryClient, allPictures, query };
};

"use client";
import { PublicationData, artsService } from "@shared/api/index";
import { useQueryClient, useQuery } from "react-query";
import { TArtsServiceFields } from "@shared/model/index";
import { useRef, useState } from "react";

export const useEndlessPicturesQuery = (
  name: TArtsServiceFields,
  limit = 10,
  queryKeys: any[] = ["getPictures"]
) => {
  const page = useRef(0);
  const queryClient = useQueryClient();
  const [allPictures, setAllPictures] = useState<PublicationData[]>([]);

  const query = useQuery({
    queryKey: queryKeys,
    queryFn: () => artsService[name](page.current, limit),
    onSuccess: (newData) => {
      page.current += limit;
      setAllPictures((data) => data.concat(newData));
    },
    retry: 0,
    cacheTime: 0,
  });

  return { queryClient, allPictures, query };
};

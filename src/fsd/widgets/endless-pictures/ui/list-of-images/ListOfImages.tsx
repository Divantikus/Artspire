import { ShortArtInfo } from "@shared/api";
import { ImgCard } from "@widgets/img-card";
import { FC } from "react";

interface ListOfImagesProps {
  allPictures: ShortArtInfo[];
}

export const ListOfImages: FC<ListOfImagesProps> = ({ allPictures }) => {
  return allPictures.map((item) => {
    return (
      <ImgCard
        key={item.id}
        props={{
          id: item.id,
          img: item.url,
          slug: item.id,
          alt: "Картинка",
          isFavorite: item.is_liked,
        }}
      />
    );
  });
};

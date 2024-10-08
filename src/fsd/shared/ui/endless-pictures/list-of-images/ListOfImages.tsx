import { PublicationData } from "@/fsd/shared/api";
import { ImgCard } from "@/fsd/widgets/img-card";
import { FC } from "react";

interface ListOfImagesProps {
  allPictures: PublicationData[];
}

export const ListOfImages: FC<ListOfImagesProps> = ({ allPictures }) => {
  return allPictures.map((item) => {
    return (
      <ImgCard
        id={item.id}
        key={item.id}
        img={item.url}
        slug={item.id}
        alt={item.title || ""}
      />
    );
  });
};

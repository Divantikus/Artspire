import { EndlessPictures } from "@/fsd/shared/ui";

export const SavedPictures = () => {
  return (
    <EndlessPictures
      requestField="getSavedPublications"
      props={{ queryKeys: ["getSavedPictures"] }}
    />
  );
};

import { endlessPictProps } from "@pages/profile-page/index";
import { EndlessPictures } from "@/fsd/shared/ui";

export const SavedPictures = () => {
  return (
    <EndlessPictures
      props={endlessPictProps}
      requestField="getSavedPublications"
    />
  );
};

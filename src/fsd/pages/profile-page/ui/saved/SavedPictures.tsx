import { endlessPictProps } from "@pages/profile-page/index";
import { EndlessPictures } from "@widgets/endless-pictures";

export const SavedPictures = () => {
  return (
    <EndlessPictures
      props={endlessPictProps}
      requestField="getSavedPublications"
    />
  );
};

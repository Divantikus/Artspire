import { EndlessPicturesSettings } from "@widgets/endless-pictures";

export const endlessPictProps: EndlessPicturesSettings = {
  elementWidth: 164,
  elementHeight: 228,
  queryKeys: ["getSavedPictures"],
  messageMissingImgs: "Вы ещё не сохранили ни одной публикации :(",
  customStyles: {
    height: 500,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
};

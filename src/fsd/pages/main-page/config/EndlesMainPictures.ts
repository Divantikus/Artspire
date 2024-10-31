import { EndlessPicturesSettings } from "@widgets/endless-pictures";

export const endlesMainPictures: EndlessPicturesSettings = {
  elementWidth: 168,
  elementHeight: 228,
  title: "Лучшее за неделю",
  messageMissingImgs: "Картинки закончились :(",
  customStyles: {
    height: window.innerHeight - 92 - 39,
    padding: {
      top: 0,
      right: 16,
      bottom: 0,
      left: 16,
    },
  },
};

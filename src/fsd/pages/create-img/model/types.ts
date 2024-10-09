import { SelectOptions } from "@shared/ui/index";

export interface CreateImgData {
  img: FileList;
  imgName?: string;
  imgDesc?: string;
  commentsIsOff: boolean;
  selectTags: SelectOptions[];
}

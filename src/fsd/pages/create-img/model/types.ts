import { SelectOptions } from "@/fsd/shared/ui/index";

export interface CreateImgData {
  img: FileList;
  imgName: string;
  imgDesc: string;
  imgTools: string;
  commentsIsOff: boolean;
  selectAvailability: SelectOptions;
}

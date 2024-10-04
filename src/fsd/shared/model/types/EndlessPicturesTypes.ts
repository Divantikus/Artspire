import { artsService } from "@shared/api/index";

export type TArtsServiceFields = keyof typeof artsService;

export interface EndlessPicturesSettings {
  title?: string;
  tags?: string[];
  queryKeys?: any[];
  messageMissingImgs: string;
}

export interface EndlessPicturesProps {
  props: EndlessPicturesSettings;
  requestField?: TArtsServiceFields;
}

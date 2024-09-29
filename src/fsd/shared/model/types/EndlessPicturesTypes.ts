import { artsService } from "@shared/api/index";

export type TArtsServiceFields = keyof typeof artsService;

export interface EndlessPicturesProps {
  requestField: TArtsServiceFields;
  props?: {
    title?: string;
    tags?: string[];
    queryKeys?: any[];
  };
}

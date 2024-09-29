import { artsService } from "@shared/api/index";

export interface EndlessPicturesProps {
  requestField: keyof typeof artsService;
  props?: {
    title?: string;
    tags?: string[];
    queryKeys?: any[];
  };
}

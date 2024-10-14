export type TArtsServiceFields = "getArts" | "getSavedPublications";

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

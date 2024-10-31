export type TArtsServiceFields = "getArts" | "getSavedPublications";

export interface PaddingObject {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

interface CustomStylesForEndlessPictures {
  height: number;
  padding: PaddingObject;
}

export interface EndlessPicturesSettings {
  title?: string;
  tags?: string[];
  queryKeys?: any[];
  elementWidth: number;
  elementHeight: number;
  messageMissingImgs: string;
  customStyles: CustomStylesForEndlessPictures;
}

export interface EndlessPicturesProps {
  props: EndlessPicturesSettings;
  requestField?: TArtsServiceFields;
}

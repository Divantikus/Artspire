import { customSelectProps } from "@shared/ui/custom-select/types";

export interface CustomMultiSelectOptions extends customSelectProps {
  name: string;
  getDataFunc: (args?: any) => any;
}

export interface CustomMultiSelectProps {
  props: CustomMultiSelectOptions;
}

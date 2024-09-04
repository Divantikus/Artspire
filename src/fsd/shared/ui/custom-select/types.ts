import { StylesConfig } from "react-select";

export interface SelectOptions {
  value: string;
  label: string;
}

export interface customSelectProps {
  name: string;
  isRequired?: boolean;
  placeholder?: string;
  styles?: StylesConfig;
  options: SelectOptions[];
}

export interface SelectFroNextProps {
  customSelectProps: customSelectProps;
}

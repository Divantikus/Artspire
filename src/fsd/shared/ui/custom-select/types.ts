import { StylesConfig } from "react-select";

export interface SelectOptions {
  value: string;
  label: string;
}

export interface SelectOptionsFromServer {
  id: number;
  name: string;
}

export interface customSelectProps {
  name: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  styles?: StylesConfig;
  options: SelectOptions[];
}

export interface SelectFroNextProps {
  customSelectProps: customSelectProps;
}

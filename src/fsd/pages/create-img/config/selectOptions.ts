import { SelectOptions } from "@/fsd/shared/ui";
import { StylesConfig } from "react-select";

export const createImgSelectOptions: SelectOptions[] = [
  { label: "Все пользователи", value: "all" },
  { label: "Только подписчики", value: "only subs" },
  { label: "Никто", value: "nobody" },
];

export const selectStyles: StylesConfig = {
  menuList: (styles) => ({ ...styles, padding: 0 }),
  control: (styles, props) => ({
    ...styles,
    borderRadius: 16,
    "&:hover": { cursor: "pointer" },
    boxShadow: props.isFocused ? "none" : styles.boxShadow,
    borderColor: props.isFocused ? "#CBCED5" : styles.borderColor,
    backgroundColor: props.isDisabled ? "#e9e9e9" : styles.backgroundColor,
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  menu: (styles) => ({ ...styles, borderRadius: 16, overflow: "hidden" }),
  option: (styles, props) => ({
    ...styles,
    fontSize: 14,
    cursor: "pointer",
    padding: "12px 8px",
    color: props.isSelected ? "#005491" : styles.color,
    backgroundColor: props.isSelected ? "#fff" : styles.backgroundColor,
  }),
  input: (styles) => ({ ...styles, fontSize: 14 }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: 14,
  }),
};

export const selectTagsStyles: StylesConfig = {
  ...selectStyles,
  control: (styles, props) => ({
    ...styles,
    borderRadius: 16,
    "&:hover": { cursor: "pointer" },
    boxShadow: props.isFocused ? "none" : styles.boxShadow,
    borderColor: props.isFocused ? "#CBCED5" : styles.borderColor,
    backgroundColor: props.isDisabled ? "#e9e9e9" : styles.backgroundColor,
  }),
  dropdownIndicator: () => ({ display: "none" }),
  input: (styles) => ({ ...styles, paddingLeft: 34, zIndex: 200 }),
  multiValue: (styles) => ({ ...styles, zIndex: 200 }),
};

import { customSelectProps } from "@/fsd/shared/ui/index";
import { useFormContext } from "react-hook-form";
import { CreateImgData } from "@pages/create-img/index";
import { SelectOptions } from "@/fsd/shared/ui/index";
import { StylesConfig } from "react-select";

export const useSelectAccessRightsOptions = () => {
  const { watch } = useFormContext<CreateImgData>();
  const isDisabled = !watch("img");

  const createImgSelectOptions: SelectOptions[] = [
    { label: "Все пользователи", value: "all" },
    { label: "Только подписчики", value: "only subs" },
    { label: "Никто", value: "nobody" },
  ];

  const selectStyles: StylesConfig = {
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

  const createImgSelectProps: customSelectProps = {
    isDisabled,
    name: "select",
    styles: selectStyles,
    placeholder: "Сделайте выбор",
    options: createImgSelectOptions,
  };
  return createImgSelectProps;
};

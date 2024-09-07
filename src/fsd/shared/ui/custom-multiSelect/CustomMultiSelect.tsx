import { Controller, useFormContext } from "react-hook-form";
import { useState, useEffect, FC } from "react";
import { CustomMultiSelectProps } from "./types";
import { useDebounce } from "@shared/model/index";
import AsyncSelect from "react-select/async";

export const CustomMultiSelect: FC<CustomMultiSelectProps> = ({ props }) => {
  const debounce = useDebounce();
  const id = Date.now().toString();
  const { control } = useFormContext();
  const [isMounted, setIsMounted] = useState(false);
  const {
    name,
    styles,
    options,
    isDisabled,
    isRequired,
    getDataFunc,
    placeholder,
  } = props;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <Controller
        name={name}
        control={control}
        rules={{ required: isRequired }}
        render={({ field }) => {
          return (
            <AsyncSelect
              id={id}
              {...field}
              isMulti={true}
              styles={styles}
              isDisabled={isDisabled}
              defaultOptions={options}
              placeholder={placeholder}
              loadOptions={(e) =>
                debounce(
                  { customFunction: getDataFunc, params: { value: e.trim() } },
                  800
                )
              }
            />
          );
        }}
      />
    )
  );
};

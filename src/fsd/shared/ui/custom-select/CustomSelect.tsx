import { Controller, useFormContext } from "react-hook-form";
import { useState, useEffect, FC } from "react";
import { SelectFroNextProps } from "./types";
import Select from "react-select";

export const SelectFroNext: FC<SelectFroNextProps> = ({
  customSelectProps,
}) => {
  const id = Date.now().toString();
  const { control } = useFormContext();
  const [isMounted, setIsMounted] = useState(false);
  const { name, options, placeholder, isRequired, styles } = customSelectProps;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <Controller
        name={name}
        control={control}
        rules={{ required: isRequired }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            id={id}
            ref={ref}
            value={value}
            onBlur={onBlur}
            styles={styles}
            options={options}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      />
    )
  );
};

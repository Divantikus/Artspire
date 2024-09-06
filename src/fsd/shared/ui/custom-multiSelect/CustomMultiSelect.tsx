import { Controller, useFormContext } from "react-hook-form";
import { useState, useEffect, FC } from "react";
import AsyncSelect from "react-select/async";

interface CustomMultiSelectOptions {
  name: string;
}

interface CustomMultiSelectProps {
  props: CustomMultiSelectOptions;
}

export const CustomMultiSelect: FC<CustomMultiSelectProps> = ({ props }) => {
  const { name } = props;
  const id = Date.now().toString();
  const { control } = useFormContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <AsyncSelect
              id={id}
              {...field}
              isMulti={true}
              loadOptions={undefined}
            />
          );
        }}
      />
    )
  );
};

import { Controller, useFormContext } from "react-hook-form";
import { useState, useEffect, FC } from "react";
import { useDebounce } from "@shared/model/index";
import { artsService } from "@shared/api/index";
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
  const debounce = useDebounce();

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
              loadOptions={(e) =>
                debounce(
                  { customFunction: artsService.getTags, params: { value: e } },
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

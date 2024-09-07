import {
  selectStyles,
  CreateImgData,
  createImgSelectOptions,
} from "@pages/create-img/index";
import { customSelectProps } from "@/fsd/shared/ui/index";
import { useFormContext } from "react-hook-form";

export const useSelectAccessRightsOptions = () => {
  const { watch } = useFormContext<CreateImgData>();
  const isDisabled = !watch("img");

  return {
    isDisabled,
    styles: selectStyles,
    name: "selectAvailability",
    placeholder: "Сделайте выбор",
    options: createImgSelectOptions,
  } satisfies customSelectProps;
};

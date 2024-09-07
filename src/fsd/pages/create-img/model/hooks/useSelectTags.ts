import { CreateImgData, selectTagsStyles } from "@pages/create-img/index";
import { CustomMultiSelectOptions } from "@/fsd/shared/ui/index";
import { useFormContext } from "react-hook-form";
import { artsService } from "@shared/api/index";

export const useSelectTags = () => {
  const { watch } = useFormContext<CreateImgData>();
  const isDisabled = !watch("img");

  return {
    isDisabled,
    placeholder: "",
    name: "pickCategory",
    styles: selectTagsStyles,
    getDataFunc: artsService.getTags,
    options: [{ label: "subaruuu", value: "forester" }],
  } satisfies CustomMultiSelectOptions;
};

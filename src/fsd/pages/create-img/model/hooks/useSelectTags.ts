import { CreateImgData, selectTagsStyles } from "@pages/create-img/index";
import { CustomMultiSelectOptions } from "@/fsd/shared/ui/index";
import { useFormContext } from "react-hook-form";
import { tagsService } from "@/fsd/shared/api";

export const useSelectTags = () => {
  const { watch } = useFormContext<CreateImgData>();
  const isDisabled = !watch("img");

  return {
    isDisabled,
    placeholder: "",
    name: "pickCategory",
    styles: selectTagsStyles,
    getDataFunc: tagsService.getTags,
    options: [{ label: "subaruuu", value: "forester" }],
  } satisfies CustomMultiSelectOptions;
};

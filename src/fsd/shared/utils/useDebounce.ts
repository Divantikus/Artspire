import { launchingAnyFunction } from "@shared/model";
import { OptionalFunctionT } from "@shared/model";

export const useDebounce = () => {
  let timer: ReturnType<typeof setTimeout>;

  const debounce = async <Type>(
    functionOrObj: OptionalFunctionT,
    time: number
  ) => {
    if (time < 0) throw new Error("The value cannot be negative");

    clearTimeout(timer);
    let data = await new Promise((res) => {
      timer = setTimeout(async () => {
        const promiseData = await launchingAnyFunction(functionOrObj);
        res(promiseData);
      }, time);
    });

    return data as Type;
  };

  return debounce;
};

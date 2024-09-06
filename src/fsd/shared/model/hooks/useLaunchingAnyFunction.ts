import { FunctionT } from "@shared/model/index";

export const useLaunchingAnyFunction: FunctionT = (functionOrObj) => {
  if (!functionOrObj) return;

  if (typeof functionOrObj === "function") return functionOrObj();

  const { customFunction, params } = functionOrObj;

  return customFunction(params);
};

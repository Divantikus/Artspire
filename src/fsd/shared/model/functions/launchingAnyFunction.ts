import { FunctionT } from "@shared/model/index";

export const launchingAnyFunction: FunctionT = (functionOrObj) => {
  if (!functionOrObj) return;

  if (typeof functionOrObj === "function") return functionOrObj();

  const { customFunction, params } = functionOrObj;

  return customFunction(params);
};

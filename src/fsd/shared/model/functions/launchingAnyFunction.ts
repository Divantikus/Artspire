import { FunctionT } from "@shared/model";

export const launchingAnyFunction: FunctionT = (functionOrObj) => {
  if (!functionOrObj) return;

  if (typeof functionOrObj === "function") return functionOrObj();

  const { customFunction, params } = functionOrObj;

  return customFunction(params);
};

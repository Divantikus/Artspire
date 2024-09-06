type FunctionParams = { [key: string]: any };

export type OptionalFunctionT =
  | (() => unknown)
  | { customFunction: (args: FunctionParams) => any; params: FunctionParams }
  | undefined;

export type FunctionT = (functionOrObj: OptionalFunctionT) => unknown;

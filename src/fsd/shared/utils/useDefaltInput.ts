import { useLaunchingAnyFunction } from "@shared/model/index";
import { OptionalFunctionT } from "@shared/model/index";
import { useState } from "react";

export const useDefaltInput = (type: string | undefined) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFirstImg, setIsFirstImg] = useState(true);

  const runFunction = (functionOrObj: OptionalFunctionT | undefined) => {
    if (type === "password") {
      setIsPasswordVisible((type) => !type);
      setIsFirstImg((img) => !img);
      return;
    }
    // рефактор
    useLaunchingAnyFunction(functionOrObj);
    // if (!functionOrObj) return;

    // if (typeof functionOrObj === "function") return functionOrObj();

    // functionOrObj.func(functionOrObj.params);
  };
  return { isPasswordVisible, isFirstImg, runFunction };
};

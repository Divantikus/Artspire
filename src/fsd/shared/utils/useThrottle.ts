import { OptionalFunctionT, launchingAnyFunction } from "../model";

export const useThrottle = (time: number) => {
  if (time < 0) throw new Error("The value cannot be negative");
  let isCountdownStarted = false;

  const throttle = async (functionOrObj: OptionalFunctionT) => {
    if (isCountdownStarted) return;
    isCountdownStarted = true;

    let data = await new Promise((res) => {
      const timeout = setTimeout(async () => {
        const promiseData = await launchingAnyFunction(functionOrObj);
        res(promiseData);
        clearTimeout(timeout);
        isCountdownStarted = false;
      }, time);
    });

    return data;
  };

  return throttle;
};

import { configureStore } from "@reduxjs/toolkit";

interface State {
  counter: number;
}

const initialState: State = {
  counter: 0,
};

type TAction = { type: "p" } | { type: "m" };

const reducer = (state = initialState, action: TAction): State => {
  switch (action.type) {
    case "p":
      return {
        counter: state.counter + 1,
      };
    case "m":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});

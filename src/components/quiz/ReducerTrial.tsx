import { useReducer } from "react";

enum CountActionType {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}
interface CountAction {
  type: CountActionType;
  payload: number;
}
const reducer = (state: number, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionType.INCREASE:
      return payload + state;

    case CountActionType.DECREASE:
      return state - payload;
  }
};

export const ReducerTrial = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: CountActionType.INCREASE, payload: 1 });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: CountActionType.DECREASE, payload: 1 });
        }}
      >
        Decrease
      </button>
    </>
  );
};

import { ChangeEventHandler, useReducer, useState } from "react";

enum CountActionType {
  INCREASE,
  DECREASE,
  SETCOUNT,
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

    case CountActionType.SETCOUNT:
      return payload;
  }
};

export const DateCounter = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: CountActionType.DECREASE, payload: step });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: CountActionType.INCREASE, payload: step });
  };

  const defineCount: ChangeEventHandler<HTMLInputElement> = function (e) {
    dispatch({ type: CountActionType.SETCOUNT, payload: +e.target.value });
  };

  const defineStep: ChangeEventHandler<HTMLInputElement> = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: CountActionType.SETCOUNT, payload: 0 });

    setStep(1);
  };

  return (
    <div className="grid justify-items-center">
      <div>
        <input
          className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div className="flex gap-1">
        <button
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500"
          onClick={dec}
        >
          -
        </button>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          value={count}
          onChange={defineCount}
        />
        <button
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500"
          onClick={inc}
        >
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

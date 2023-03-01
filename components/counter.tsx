import React, { useEffect, useReducer } from "react";

type CounterState = { count: number };

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type CounterProps = {
  from?: number;
  to?: number;
  onChange: (value: number) => void;
};

function reducer(state: CounterState, action: UpdateAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const buttonClasses =
  "rounded-xl bg-primary-50 hover:bg-primary-100 p-3 cursor-pointer text-primary-500 transition-colors backdrop-saturate-200 fill-primary-500 bg-opacity-80 backdrop-blur-2xl aspect-square grid place-content-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-50";

export default function Counter(props: CounterProps) {
  const initCount = props.from ?? 0;
  const initState = { count: initCount };

  const [state, dispatch] = useReducer(reducer, initState);

  const from = props.from ?? 0;
  const to = props.to ?? Infinity;

  useEffect(() => props.onChange(state.count), [state.count]);

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        disabled={state.count === to}
        className={buttonClasses}
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        +
      </button>
      <p className="min-w-[1.5rem] text-center">{state.count}</p>
      <button
        disabled={state.count === from}
        className={buttonClasses}
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        -
      </button>
    </div>
  );
}

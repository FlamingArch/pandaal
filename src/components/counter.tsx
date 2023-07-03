import { useEffect, useReducer } from "react";
import Button from "./button";
import { IconMinus, IconPlus } from "./icons";

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

export default function Counter(props: CounterProps) {
  const initCount = props.from ?? 0;
  const initState = { count: initCount };

  const [state, dispatch] = useReducer(reducer, initState);

  const from = props.from ?? 0;
  const to = props.to ?? Infinity;

  useEffect(() => props.onChange(state.count), [state.count]);

  return (
    <div className="flex items-center gap-4">
      <p className="min-w-[1.5rem] flex-grow">{state.count}</p>
      <Button
        disabled={state.count === from}
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
        Icon={IconMinus}
      />
      <Button
        disabled={state.count === to}
        onClick={() => dispatch({ type: "increment", payload: 1 })}
        Icon={IconPlus}
      />
    </div>
  );
}

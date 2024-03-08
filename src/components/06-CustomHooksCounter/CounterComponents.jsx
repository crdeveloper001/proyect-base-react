import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";

export const CounterComponents = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Incrementar +</button>
      <button onClick={decrement}>Decrementar -</button>
      <button onClick={reset}>Resetear a cero</button>
    </div>
  );
};

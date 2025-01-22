import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => setCount(prevCount => prevCount + 1);
  const minc = () => setCount(prevCount => prevCount - 1);

  return (
    <div>
      <h1>Ahmed: {count}</h1>
      <button onClick={plus} >
       +
      </button>
      <button onClick={minc}>-</button>
    </div>
  );
};

export default Counter;
